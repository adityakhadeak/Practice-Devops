const pool = require('../database/db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('../helper/mailer.js')
const fs = require('fs')
const path = require('path')
const { threeMinuteExpiryCheck } = require('../helper/otpValidate.js')
const { validationResult, check } = require('express-validator')

const generateOtp = async () => {
    return Math.floor(100000 + Math.random() * 900000)
}

//1st Step in user Registration
const generateEmailVerifyOtp = async (req, res) => {
    try {
        const { email, mobile } = req.body

        if (email) {

            //CHECKING IF THE USER EXISTS ALREADY OR NOT
            const query1 = 'SELECT * FROM user_registration WHERE email = $1'
            const values1 = [email]
            const result1 = await pool.query(query1, values1)
            if (result1.rowCount != 0) {
                return res.status(409).json({
                    message: "Account with this email exists"
                })
            }

            const generatedOTP = await generateOtp()

            const query2 = 'INSERT INTO user_registration (email,otp) VALUES ($1,$2) RETURNING *'
            const values2 = [email, generatedOTP]
            const result2 = await pool.query(query2, values2);

            const msg = `<p>Welcome to <b>Swasthmind</b></br><h1> Your OTP for Email Verification-${generatedOTP}</h1></p>`
            await sendMail(email, 'otp', msg)

            res.status(201).json({
                message: "OTP has been sent to your email ",
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// 2nd step in user registration
const verifyEmailOTPController = async (req, res) => {
    try {

        const { email, otp } = req.body

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
}

//3rd step of user Registration getting the user data
const registerUserInfo = async (req, res) => {

    const { name, email, gender, occupation, college_name } = req.body
    try {
        const currentTimestamp = new Date()

        const result1 = await pool.query('SELECT email FROM user_registration WHERE email=$1', [email])
        if (result1.rowCount == 0) {
            return res.status(404).json({
                success: false,
                message: "User not exist"
            })
        }

        //CHECKING IF THE OCCUPATION IS PRESENT IN THE OCCUPATION_MASTER TABLE OR NOT 
        const query2 = 'SELECT * FROM occupation_master WHERE occupation = $1'
        const values2 = [occupation]
        const result2 = await pool.query(query2, values2)

        //IF OCCUPATION IS NOT PRESENT THEN ADDING THE OCCUPATION TO THE RESPECTIVE TABLE
        if (result2.rowCount == 0) {
            const query3 = 'INSERT INTO occupation_master (occupation,created_at,created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
            const values3 = [occupation, currentTimestamp, 1, currentTimestamp, 1]
            const result3 = await pool.query(query3, values3)
            var occupation_id = result3.rows[0].id

        } else {
            var occupation_id = result2.rows[0].id

        }

        //CHECKING IF THE COLLEGE IS PRESENT IN THE COLLEGE_MASTER TABLE OR NOT 
        const query4 = 'SELECT * FROM college_master WHERE college= $1'
        const value4 = [college_name]
        const result4 = await pool.query(query4, value4)

        //IF COLLEGE IS NOT PRESENT THEN ADDING THE COLLEGE TO THE RESPECTIVE TABLE
        if (result4.rowCount == 0) {
            const query5 = 'INSERT INTO college_master (college,created_at,created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5)  RETURNING *'
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

}


// 1st step of user login
const loginUser = async (req, res) => {

    const { login_type, email, mobile, ip } = req.body
    try {

        if (login_type == 'email') {

            //CHECKING IF THE USER EXISTS  OR NOT
            const query1 = 'SELECT * FROM user_registration WHERE email = $1'
            const values1 = [email]
            const result1 = await pool.query(query1, values1)

            if (result1.rowCount == 0) {
                return res.status(404).json({
                    message: "User does not exist"
                })
            }

            const user_id = result1.rows[0].id
            const generatedOTP = await generateOtp()

            const query2 = 'INSERT INTO user_login (user_id,login_type,mobile,email,otp,ip) VALUES ($1,$2,$3,$4,$5,$6)'
            const values2 = [user_id, login_type, mobile, email, generatedOTP, ip]
            const result2 = await pool.query(query2, values2)

            const msg = `<p>Hi <b>${result1.rows[0].name}</b></br><h1>${generatedOTP}</h1> <div>OTP will expire in 3 mins</div></p>`
            await sendMail(email, 'otp', msg)

            res.status(201).json({
                message: "OTP is sent to your email verification. OTP will expire in 3 mins",
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// 2nd step of user login
const verifyLoginOTPController = async (req, res) => {
    try {

        const { email, otp } = req.body

        const query1 = 'SELECT id,user_id,email,created_at,login_status,otp FROM user_login WHERE email = $1'
        const values1 = [email]
        const result1 = await pool.query(query1, values1)

        if (result1.rowCount > 0) {

            if (result1.rows[result1.rowCount - 1].login_status != null) {
                return res.status(410).json({
                    success: false,
                    message: "Session expired, Login again"
                })
            }

            if (result1.rows[result1.rowCount - 1].otp != otp) {
                await pool.query(`UPDATE user_login SET login_status = $1 WHERE id = $2`, [1, result1.rows[result1.rowCount - 1].id])

                return res.status(410).json({
                    success: false,
                    message: "Invalid OTP"
                })
            }



            const otpTime = result1.rows[result1.rowCount - 1].created_at
            console.log(otpTime)
            console.log(otpTime.getTime())
            const isExpired = await threeMinuteExpiryCheck(otpTime.getTime())
            if (isExpired) {

                await pool.query(`UPDATE user_login SET login_status = $1 WHERE id = $2`, [1, result1.rows[result1.rowCount - 1].id])

                return res.status(410).json({
                    success: false,
                    message: "OTP expired"
                })
            }

            await pool.query(`UPDATE user_login SET login_status = $1 WHERE id = $2`, [0, result1.rows[result1.rowCount - 1].id])

            const user_details = await pool.query(`SELECT * FROM user_registration WHERE id = $1`, [result1.rows[0].user_id])
            const occupation = await pool.query('SELECT occupation FROM occupation_master WHERE id = $1', [user_details.rows[0].occupation])
            const college = await pool.query('SELECT college FROM college_master WHERE id = $1', [user_details.rows[0].college_name])
            let user_data = {
                ...user_details.rows[0],
                occupation: occupation.rows[0].occupation,
                college_name: college.rows[0].college
            }
            const userData = {
                user: {
                    user_id: user_details.rows[0].id,
                    name: user_details.rows[0].name,
                    email: user_details.rows[0].email,
                    role: "normal_user"
                }
            }

            const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '3d' })

            res.status(200).json(
                {
                    success: true,
                    message: 'Correct',
                    data: user_data,
                    token
                })
        } else {
            res.status(404).json({
                success: false,
                message: 'Login details not found'
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = { registerUserInfo, verifyEmailOTPController, verifyLoginOTPController, loginUser, generateEmailVerifyOtp }