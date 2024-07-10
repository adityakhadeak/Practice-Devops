const pool = require('../database/db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('../helper/mailer.js')
const fs = require('fs')
const path = require('path')

const generateOtp = async () => {
    return Math.floor(100000 + Math.random() * 900000)
}

const dynamicController = async (req, res) => {
    const { operation, table_name, column_values } = req.body
    console.log(req.body.column_values)
    switch (operation) {
        case "read":
            switch (table_name) {
                case "user_registration":
                    try {
                        //// 2nd step in user registration verifyEmailOTPController
                        const { email, otp } = req.body.column_values

                        const query1 = 'SELECT id FROM user_registration WHERE email = $1 AND otp = $2'
                        const values1 = [email, otp]
                        const result1 = await pool.query(query1, values1)

                        if (result1.rowCount === 1) {
                            await pool.query(`UPDATE user_registration SET is_email_verified = $1 WHERE email = $2`, [1, email])

                            res.status(200).json(
                                {
                                    success: true,
                                    message: 'Email verified successfully'
                                })
                        } else {
                            res.status(400).json({
                                success: false,
                                message: 'Invalid OTP'
                            })
                        }
                    } catch (error) {
                        console.log(error.message)
                        res.status(400).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }
                    break;
                case "user_login":
                    try {
                        // 2nd step of user login

                        const { email, otp } = req.body.column_values

                        const query1 = 'SELECT user_id FROM user_login WHERE email = $1 AND otp = $2'
                        const values1 = [email, otp]
                        const result1 = await pool.query(query1, values1)

                        if (result1.rowCount === 1) {
                            await pool.query(`UPDATE user_login SET login_status = $1 WHERE email = $2`, [1, email])

                            const user_details = await pool.query(`SELECT * FROM user_registration WHERE id = $1`, [result1.rows[0].user_id])

                            res.status(200).json(
                                {
                                    success: true,
                                    message: 'Correct',
                                    data: user_details.rows[0]
                                })
                        } else {
                            res.status(400).json({
                                success: false,
                                message: 'Invalid OTP'
                            })
                        }
                    } catch (error) {
                        console.log(error.message)
                        res.status(400).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }
                    break;
                case "assesment_master":
                    const { category } = req.body.column_values
                    try {
                        const query1 = 'SELECT id FROM assesment_master WHERE category=$1 AND status=$2'
                        const values1 = [category, 0]
                        const result1 = await pool.query(query1, values1)

                        if (result1.rowCount == 0)
                            return res.status(404).json({
                                success: false,
                                message: "Assessment not found"
                            })

                        const query2 = 'SELECT id, question FROM assesment_questions WHERE assesment_id=$1 AND status=$2'
                        const values2 = [result1.rows[0].id, 0]
                        const result2 = await pool.query(query2, values2)

                        if (result2.rowCount == 0)
                            return res.status(404).json({
                                success: false,
                                message: "Questions not found"
                            })

                        const data = []

                        await Promise.all(result2.rows.map(async (obj) => {
                            const query3 = 'SELECT option FROM assesment_questions_options WHERE question_id=$1'
                            const values3 = [obj.id]
                            const result3 = await pool.query(query3, values3)

                            if (result3.rowCount == 0)
                                return res.status(404).json({
                                    success: false,
                                    message: "Options not found"
                                })

                            data.push({
                                question: obj.question, options: {
                                    option1: result3.rows[0].option,
                                    option2: result3.rows[1].option,
                                    option3: result3.rows[2].option,
                                    option4: result3.rows[3].option
                                }
                            })

                        }))

                        res.status(200).json({
                            success: true,
                            data
                        })

                    } catch (error) {
                        console.log(error.message)
                        res.status(500).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }
                    break;
                default:
                    console.log("Invalid Table Name")
                    res.status(404).json({
                        success: false,
                        message: "Invalid Table Name"
                    })
                    break;
            }
            break;
        case "insert":
            switch (table_name) {
                case "user_registration":
                    console.log(req.body.column_values)
                    //1st Step in user Registration generateEmailVerifyOtp
                    const { email: email1 } = req.body.column_values

                    try {
                        //CHECKING IF THE USER EXISTS ALREADY OR NOT
                        const query1 = 'SELECT * FROM user_registration WHERE email = $1'
                        const values1 = [email1]
                        const result1 = await pool.query(query1, values1)
                        if (result1.rowCount != 0) {
                            return res.status(409).json({
                                message: "Account with this email exists"
                            })
                        }

                        const generatedOTP = await generateOtp()

                        const query2 = 'INSERT INTO user_registration (email,otp) VALUES ($1,$2) RETURNING *'
                        const values2 = [email1, generatedOTP]
                        const result2 = await pool.query(query2, values2);

                        const msg = `<p>Welcome to <b>Swasthmind</b></br><h1> Your OTP for Email Verification-${generatedOTP}</h1></p>`
                        await sendMail(email1, 'otp', msg)

                        res.status(201).json({
                            message: "OTP has been sent to your email ",
                        })
                    } catch (error) {
                        console.log(error)
                        res.status(500).json({
                            message: "Internal Server Error"
                        })
                    }

                    break;
                case "user_login":
                    // 1st step of user login
                    const { login_type, email, mobile, ip } = req.body.column_values
                    try {

                        if (login_type == 'email') {

                            //CHECKING IF THE USER EXISTS  OR NOT
                            const query1 = 'SELECT * FROM user_registration WHERE email = $1'
                            const values1 = [email]
                            const result1 = await pool.query(query1, values1)

                            if (result1.rowCount == 0) {
                                return res.status(409).json({
                                    message: "User does not exist"
                                })
                            }

                            const user_id = result1.rows[0].id
                            const generatedOTP = await generateOtp()

                            const query2 = 'INSERT INTO user_login (user_id,login_type,mobile,email,otp,ip) VALUES ($1,$2,$3,$4,$5,$6)'
                            const values2 = [user_id, login_type, mobile, email, generatedOTP, ip]
                            const result2 = await pool.query(query2, values2)

                            const msg = `<p>Hi <b>${result1.rows[0].name}</b></br><h1>${generatedOTP}</h1></p>`
                            await sendMail(email, 'otp', msg)

                            res.status(201).json({
                                message: "OTP is sent to your email verification",
                            })
                        }
                    } catch (error) {
                        console.log(error)
                        res.status(500).json({
                            message: "Internal Server Error"
                        })
                    }


                    break;
                case "assesment_master":
                    // createAssessment 
                    const { category, assesment_name, status, created_by, updated_by } = req.body.column_values
                    try {
                        const query1 = 'SELECT assesment_name FROM assesment_master WHERE category=$1 AND assesment_name=$2'
                        const values1 = [category, assesment_name]
                        const result1 = await pool.query(query1, values1)


                        if (result1.rowCount != 0) {
                            return res.status(401).json({
                                success: false,
                                message: "Assesment already exist"
                            })
                        }
                        const query2 = 'INSERT INTO assesment_master (category,assesment_name,status,created_by,updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
                        const values2 = [category, assesment_name, status, created_by, updated_by]
                        const result2 = await pool.query(query2, values2)

                        res.status(201).json({
                            success: true,
                            message: "Assessment created succesfully",
                            result: result2.rows[0]
                        })

                    } catch (error) {
                        console.log(error.message)
                        res.status(500).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }
                    break;
                case "assesment_questions":
                    // const { assesment_id, question, status: status1, created_by: created_by1, updated_by: updated_by1 } = req.body.column_values
                    // try {
                    //     const query1 = 'SELECT question FROM assesment_questions WHERE question=$1 AND assesment_id=$2'
                    //     const values1 = [question, assesment_id]
                    //     const result1 = await pool.query(query1, values1)


                    //     if (result1.rowCount != 0) {
                    //         return res.status(401).json({
                    //             success: false,
                    //             message: "Question already exist"
                    //         })
                    //     }
                    //     const query2 = 'INSERT INTO assesment_questions (assesment_id,question, status, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
                    //     const values2 = [assesment_id, question, status1, created_by1, updated_by1]
                    //     const result2 = await pool.query(query2, values2)

                    //     res.status(201).json({
                    //         success: true,
                    //         message: "Question created succesfully",
                    //         result: result2.rows[0]
                    //     })

                    // } catch (error) {
                    //     console.log(error.message)
                    //     res.status(500).json({
                    //         success: false,
                    //         message: "Internal server error"
                    //     })
                    // }

                    const { assesment_id, question, options, status: status1, created_by: created_by1, updated_by: updated_by1 } = req.body.column_values
                    try {
                        const query1 = 'SELECT question FROM assesment_questions WHERE question=$1 AND assesment_id=$2'
                        const values1 = [question, assesment_id]
                        const result1 = await pool.query(query1, values1)
                
                
                        if (result1.rowCount != 0) {
                            return res.status(401).json({
                                success: false,
                                message: "Question already exist"
                            })
                        }
                      
                        const query2 = 'INSERT INTO assesment_questions (assesment_id,question, status, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
                        const values2 = [assesment_id, question, status1, created_by1, updated_by1]
                        const result2 = await pool.query(query2, values2)
                
                        const question_id=result2.rows[0].id
                        const optionsAdded=[]
                        await Promise.all(options.map(async(obj)=>{
                        const query4 = 'INSERT INTO assesment_questions_options (question_id,option, is_correct, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
                        const values4 = [question_id, obj.option,obj.is_correct, created_by1, updated_by1]
                        const result4 = await pool.query(query4, values4)
                        optionsAdded.push(result4.rows[0])
                        }))
                
                        res.status(201).json({
                            success: true,
                            message: "Question created succesfully",
                            result: {question:result2.rows[0],
                                options:optionsAdded
                            }
                        })
                
                    } catch (error) {
                        console.log(error.message)
                        res.status(500).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }
                    break;
                case "assesment_questions_options":
                    const { question_id, option, is_correct, created_by: created_by2, updated_by: updated_by2 } = req.body.column_values
                    try {
                        const query1 = 'SELECT option FROM assesment_questions_options WHERE option=$1 AND question_id=$2'
                        const values1 = [option, question_id]
                        const result1 = await pool.query(query1, values1)


                        if (result1.rowCount != 0) {
                            return res.status(401).json({
                                success: false,
                                message: "Option already exist"
                            })
                        }
                        const query2 = 'INSERT INTO assesment_questions_options (question_id,option, is_correct, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
                        const values2 = [question_id, option, is_correct, created_by2, updated_by2]
                        const result2 = await pool.query(query2, values2)

                        res.status(201).json({
                            success: true,
                            message: "Option created succesfully",
                            result: result2.rows[0]
                        })

                    } catch (error) {
                        console.log(error.message)
                        res.status(500).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }
                    break;
                default:
                    console.log("Invalid Table Name")
                    res.status(404).json({
                        success: false,
                        message: "Invalid Table Name"
                    })
                    break;
            }
            break;
        case "delete":
            switch (table_name) {
                case "user_registration":

                    break;
                case "user_login":

                    break;
                case "assesment_master":
                    const{id}=req.body.column_values
                    try {
                        const result1=await pool.query('SELECT id FROM assesment_master WHERE id=$1',[id])
                        if(result1.rowCount==0){
                            return res.status(404).json({
                                success:false,
                                message:'Assessment not found'
                            })
                        }
                        const question_ids=[]
                        const result2=await pool.query('SELECT id FROM assesment_questions WHERE assesment_id=$1',[result1.rows[0].id])
                            result2.rows.map((obj)=>{
                                question_ids.push(obj.id)
                            })
                
                        question_ids.map(async(id)=>{
                           await pool.query('DELETE FROM assesment_questions_options WHERE question_id = $1',[id] )
                        })
                       await pool.query('DELETE FROM assesment_questions WHERE assesment_id = $1',[result1.rows[0].id] )
                        await pool.query('DELETE FROM assesment_master WHERE id = $1',[id] )
                
                        res.status(200).json({
                            success:true,
                            message:"Assessment deleted successfully"
                        })
                
                    } catch (error) {
                         console.log(error.message)
                        res.status(500).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }
                    break;
                    case "assesment_questions":
                        const{id:id1}=req.body.column_values
                        try {
                            const result1=await pool.query('SELECT id FROM assesment_questions WHERE id=$1',[id1])
                            if(result1.rowCount==0){
                                return res.status(404).json({
                                    success:false,
                                    message:'Assessment Question not found'
                                })
                            }
                            await pool.query('DELETE FROM assesment_questions_options WHERE question_id = $1',[id1] )
                    
                           await pool.query('DELETE FROM assesment_questions WHERE id = $1',[id1] )
                    
                            res.status(200).json({
                                success:true,
                                message:"Assessment Question deleted successfully"
                            })
                    
                        } catch (error) {
                             console.log(error.message)
                            res.status(500).json({
                                success: false,
                                message: "Internal server error"
                            })
                        }
                    break;
                    case "assesment_questions_options":
                        const{id:id2}=req.body.column_values
                        try {
                            const result1=await pool.query('SELECT id FROM assesment_questions_options WHERE id=$1',[id2])
                            if(result1.rowCount==0){
                                return res.status(404).json({
                                    success:false,
                                    message:'Assessment Question Option not found'
                                })
                            }
                            await pool.query('DELETE FROM assesment_questions_options WHERE id = $1',[id2] )
                    
                            res.status(200).json({
                                success:true,
                                message:"Assessment Question Option deleted successfully"
                            })
                    
                        } catch (error) {
                             console.log(error.message)
                            res.status(500).json({
                                success: false,
                                message: "Internal server error"
                            })
                        }
                    break;
                default:
                    console.log("Invalid Table Name")
                    res.status(404).json({
                        success: false,
                        message: "Invalid Table Name"
                    })
                    break;
            }
            break;
        case "update":
            switch (table_name) {
                case "user_registration":
                    //3rd step of user Registration getting the user data  registerUserInfo
                    const { name, email, gender, occupation, college_name } = req.body.column_values
                    try {
                        const currentTimestamp = new Date()

                        //CHECKING IF THE OCCUPATION IS PRESENT IN THE OCCUPATION_MASTER table_name OR NOT 
                        const query2 = 'SELECT * FROM occupation_master WHERE occupation = $1'
                        const values2 = [occupation]
                        const result2 = await pool.query(query2, values2)

                        //IF OCCUPATION IS NOT PRESENT THEN ADDING THE OCCUPATION TO THE RESPECTIVE table_name
                        if (result2.rowCount == 0) {
                            const query3 = 'INSERT INTO occupation_master (occupation,created_at,created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5)'
                            const values3 = [occupation, currentTimestamp, 1, currentTimestamp, 1]
                            const result3 = await pool.query(query3, values3)
                            var occupation_id = result3.rows[0].id

                        } else {
                            var occupation_id = result2.rows[0].id

                        }

                        //CHECKING IF THE COLLEGE IS PRESENT IN THE COLLEGE_MASTER table_name OR NOT 
                        const query4 = 'SELECT * FROM college_master WHERE college= $1'
                        const value4 = [college_name]
                        const result4 = await pool.query(query4, value4)

                        //IF COLLEGE IS NOT PRESENT THEN ADDING THE COLLEGE TO THE RESPECTIVE table_name
                        if (result4.rowCount == 0) {
                            const query5 = 'INSERT INTO college_master (college,created_at,created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5)'
                            const values5 = [college_name, currentTimestamp, 1, currentTimestamp, 1]
                            const result5 = await pool.query(query5, values5)
                            var college_id = result5.rows[0].id
                        } else {
                            var college_id = result4.rows[0].id

                        }

                        // const profile_image = 'images/' + req.file.filename
                        // const generatedOTP = await generateOtp()

                        const query6 = 'UPDATE user_registration SET name=$1, gender=$2,occupation=$3,college_name=$4 where email=$5'
                        const values6 = [name, gender, occupation_id, college_id, email]
                        const result6 = await pool.query(query6, values6);

                        // const contentType = req.file.mimetype;
                        // const fileExtention = contentType.slice(6)
                        // const newFileName = `${result6.rows[0].id}-${result6.rows[0].name}.${fileExtention}`;

                        // Update the file name in the storage destination directory
                        // const newPath = path.join(__dirname, '../public/images', newFileName);
                        // fs.renameSync(path.join(__dirname, '../public/images', req.file.filename), newPath);

                        // const result7 = await pool.query('UPDATE user_registration SET profile =$1 WHERE id=$2 RETURNING *', [newFileName, result6.rows[0].id])

                        // const msg = `<p>Hi <b>${name}</b></br><h1>${generatedOTP}</h1></p>`
                        // await sendMail(email, 'otp', msg)

                        res.status(201).json({
                            message: "User Registered Successfully",
                        })

                    } catch (error) {
                        console.log(error)
                        res.status(500).json({
                            message: "Internal Server Error"
                        })
                    }

                    break;
                case "assesment_master":
                    //Update assesment 
                    const { id, category, assesment_name, status, updated_by } = req.body.column_values
                    try {
                        const query1 = 'SELECT assesment_name FROM assesment_master WHERE id=$1'
                        const values1 = [id]
                        const result1 = await pool.query(query1, values1)


                        if (result1.rowCount == 0) {
                            return res.status(401).json({
                                success: false,
                                message: "Assesment does not exist"
                            })
                        }
                        const currentDate = new Date()
                        const query2 = 'UPDATE  assesment_master SET category=$1, assesment_name=$2 ,status=$3 ,updated_by=$4, updated_at=$5 WHERE id=$6 RETURNING *'
                        const values2 = [category, assesment_name, status, updated_by, currentDate, id]
                        const result2 = await pool.query(query2, values2)

                        res.status(200).json({
                            success: true,
                            message: "Assessment updated succesfully",
                            result: result2.rows[0]
                        })

                    } catch (error) {
                        console.log(error.message)
                        res.status(500).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }

                    break;
                case "assesment_questions":
                    const { id: id1, question, status: status1, updated_by: updated_by1 } = req.body.column_values
                    try {
                        const query1 = 'SELECT question FROM assesment_questions WHERE id=$1'
                        const values1 = [id1]
                        const result1 = await pool.query(query1, values1)


                        if (result1.rowCount == 0) {
                            return res.status(401).json({
                                success: false,
                                message: "Question does not exist"
                            })
                        }
                        const currentDate = new Date()
                        const query2 = 'UPDATE  assesment_questions SET question=$1, status=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *'
                        const values2 = [question, status1, updated_by1, currentDate, id1]
                        const result2 = await pool.query(query2, values2)

                        res.status(200).json({
                            success: true,
                            message: "Question updated succesfully",
                            result: result2.rows[0]
                        })

                    } catch (error) {
                        console.log(error.message)
                        res.status(500).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }
                    break;
                case "assesment_questions_options":
                    const { id: id2, option, is_correct, updated_by: updated_by2 } = req.body.column_values
                    try {
                        const query1 = 'SELECT option FROM assesment_questions_options WHERE id=$1'
                        const values1 = [id2]
                        const result1 = await pool.query(query1, values1)


                        if (result1.rowCount == 0) {
                            return res.status(401).json({
                                success: false,
                                message: "Option does not exist"
                            })
                        }
                        const currentDate = new Date()
                        const query2 = 'UPDATE  assesment_questions_options SET option=$1, is_correct=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *'
                        const values2 = [option, is_correct, updated_by2, currentDate, id2]
                        const result2 = await pool.query(query2, values2)

                        res.status(200).json({
                            success: true,
                            message: "Question updated succesfully",
                            result: result2.rows[0]
                        })

                    } catch (error) {
                        console.log(error.message)
                        res.status(500).json({
                            success: false,
                            message: "Internal server error"
                        })
                    }
                    break;
                default:
                    console.log("Invalid Table Name")
                    res.status(404).json({
                        success: false,
                        message: "Invalid Table Name"
                    })
                    break;
            }
            break;

        default:
            console.log("Invalid Operation")
            res.status(404).json({
                success: false,
                message: "Invalid Operation"
            })
            break;
    }
}

module.exports = dynamicController