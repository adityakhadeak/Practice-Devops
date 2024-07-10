const pool = require('../database/db.js')



const user_assement = async(req,res)=>{
    const {ops,table, column_values} = req.body
    if(!(ops || table || column_values)){
        return res.status(302).json({
            success:false,
            message:"All Fields are to be required"
        });
    }
    switch(ops){
        //CREATE OPERATION
        case "create":
            switch(table){
                case "user_assesment":
                    try {
                        const {user_id, assesment_id, datetime, payment_status} = column_values;
                        if(!(user_id || assesment_id || datetime || payment_status)){
                            return res.status(302).json({
                                success:false,
                                message:"All fields should be provided"
                            });
                        }
                        const createUserAssesmentQuery = "INSERT INTO user_assesment (user_id, assesment_id, datetime, payment_status) VALUES ($1,$2,$3,$4) RETURNING *";//inserting the details into the table
                        const createUserAssesmentValues = [user_id, assesment_id, datetime, payment_status];//values to be inserted
                        try {
                            const createUserAssesment = await pool.query(createUserAssesmentQuery, createUserAssesmentValues);
                            if(createUserAssesment.rowCount!=0){
                                return res.status(200).json({
                                    success:true,
                                    message:"Data Successfully Saved",
                                    data:createUserAssesment.rows[0]
                                })
                            }
                            else{
                                return res.status(302).json({
                                    success:true,
                                    message:"Data not Saved",
                                })
                            }
                        } catch (error) {
                            throw new Error("Error in creating the data ");
                        }
                    } catch (error) {
                        return res.status(500).json({
                            success:true,
                            message:`Internal server Error due to: ${error.message}`,
                        })
                    }
                    break;

                
                case "user_assesment_details":
                    try {
                        const {user_id, user_assesment_id, assesment_question_id, assesment_option} = column_values;
                        if(!(user_id || user_assesment_id || assesment_question_id || assesment_option)){
                            return res.status(302).json({
                                success:false,
                                message:"All fields should be provided"
                            });
                        }
                        const createUserAssesmentDetailsQuery = "INSERT INTO user_assesment_details (user_id, user_assesment_id, assesment_question_id, assesment_option) VALUES ($1,$2,$3,$4) RETURNING *";//inserting the details into the table
                        const createUserAssesmentDetailsValues = [user_id, user_assesment_id, assesment_question_id, assesment_option];//values to be inserted
                        try {
                            const createUserAssesmentDetails = await pool.query(createUserAssesmentDetailsQuery, createUserAssesmentDetailsValues);
                            if(createUserAssesmentDetails.rowCount!=0){
                                return res.status(200).json({
                                    success:true,
                                    message:"Data Successfully Saved",
                                    data:createUserAssesmentDetails.rows[0]
                                })
                            }
                            else{
                                return res.status(302).json({
                                    success:true,
                                    message:"Data not Saved",
                                })
                            }
                        } catch (error) {
                            throw new Error(error);
                        }
                    } catch (error) {
                        return res.status(500).json({
                            success:true,
                            message:`Internal server Error due to: ${error.message}`,
                        })
                    }

                default:
                    return res.status(402).json({
                        success:false,
                        message:"Table not found",
                    });
            }


        //READ OPERATION
        case "read":
            switch(table){
                case "user_assesment":
                    try {
                        const {user_id} = column_values
                        if(!user_id){
                            return res.status(302).json({
                                success:true,
                                message:"All field need to be Provided"
                            });
                        }
                        const readUserAssesmentQuery = "SELECT * FROM user_assesment WHERE user_id = $1";
                        const readUserAssesmentValues = [user_id]
                        try {
                            const readUserAssesment = await pool.query(readUserAssesmentQuery,readUserAssesmentValues);
                            if(readUserAssesment.rowCount!=0){
                                return res.status(200).json({
                                    success:true,
                                    message:"Data Is Read Successfully",
                                    data:readUserAssesment.rows[0]
                                })
                            }
                            else{
                                return res.send(302).json({
                                    success:false,
                                    message:"Data not found",
                                });
                            }
                        } catch (error) {
                            throw new Error(error);
                        }
                        
                    } catch (error) {
                        return res.send(500).json({
                            success:false,
                            message:`Internal Server Error ${error.message}`,
                        });
                    }
                    break;


                case "user_assesment_details":
                    try {
                        const {user_id} = column_values
                        if(!user_id){
                            return res.status(302).json({
                                success:true,
                                message:"All field need to be Provided"
                            });
                        }
                        const readUserAssesmentDetailsQuery = "SELECT * FROM user_assesment_details WHERE user_id = $1";
                        const readUserAssesmentDetailsValues = [user_id]
                        try {
                            const readUserAssesmentDetails = await pool.query(readUserAssesmentDetailsQuery,readUserAssesmentDetailsValues);
                            if(readUserAssesmentDetails.rowCount!=0){
                                return res.status(200).json({
                                    success:true,
                                    message:"Data Is Read Successfully",
                                    data:readUserAssesmentDetails.rows[0]
                                })
                            }
                            else{
                                return res.send(302).json({
                                    success:false,
                                    message:"Data not found",
                                });
                            }
                        } catch (error) {
                            throw new Error(error);
                        }
                        
                    } catch (error) {
                        return res.send(500).json({
                            success:false,
                            message:`Internal Server Error ${error.message}`,
                        });
                    }
                    break;
                default:
                    return res.status(402).json({
                        success:false,
                        message:"Table not found",
                      });
            }
            

        //UPDATE OPERATION
        case "update":
            switch(table){
                case "user_assesment":
                    try {
                        const {user_id, assesment_id, datetime, payment_status} = column_values;
                        if(!(user_id || assesment_id || datetime || payment_status)){
                            return res.status(302).json({
                                success:false,
                                message:"All fields should be provided"
                            });
                        }
                        const updateUserAssesmentQuery = "UPDATE user_assesment SET user_id=$1, assesment_id=$2, datetime=$3, payment_status=$4";//Updating the details into the table
                        const updateUserAssesmentValues = [user_id, assesment_id, datetime, payment_status];//values to be inserted
                        try {
                            const updateUserAssesment = await pool.query(updateUserAssesmentQuery, updateUserAssesmentValues);
                            if(updateUserAssesment.rowCount!=0){
                                return res.status(200).json({
                                    success:true,
                                    message:"Data Successfully update",
                                    data:updateUserAssesment.rows[0]
                                })
                            }
                            else{
                                return res.status(302).json({
                                    success:true,
                                    message:"Data not update",
                                })
                            }
                        } catch (error) {
                            throw new Error("Error in updating the data ");
                        }
                    } catch (error) {
                        return res.status(500).json({
                            success:true,
                            message:`Internal server Error due to: ${error.message}`,
                        })
                    }
                    break;


                case "user_assesment_details":
                    try {
                        const {user_id, user_assesment_id, assesment_question_id, assesment_option} = column_values;
                        if(!(user_id || user_assesment_id || assesment_question_id || assesment_option)){
                            return res.status(302).json({
                                success:false,
                                message:"All fields should be provided"
                            });
                        }
                        const updateUserAssesmentDetailsQuery = "UPDATE user_assesment_details SET user_id=$1, user_assesment_id=$2, assesment_question_id=$3, assesment_option=$4";//updating the details into the table
                        const updateUserAssesmentDetailsValues = [user_id, user_assesment_id, assesment_question_id, assesment_option];//values to be update
                        try {
                            const updateUserAssesmentDetails = await pool.query(updateUserAssesmentDetailsQuery, updateUserAssesmentDetailsValues);
                            if(updateUserAssesmentDetails.rowCount!=0){
                                return res.status(200).json({
                                    success:true,
                                    message:"Data Successfully update",
                                    data:updateUserAssesmentDetails.rows[0]
                                })
                            }
                            else{
                                return res.status(302).json({
                                    success:true,
                                    message:"Data not update",
                                })
                            }
                        } catch (error) {
                            throw new Error(error);
                        }
                    } catch (error) {
                        return res.status(500).json({
                            success:true,
                            message:`Internal server Error due to: ${error.message}`,
                        })
                    }
                
            }


        //DELETE OPERATION
        case "delete":
            switch(table){
                case "user_assesment":
                    try { 
                    const {id} = column_values;
                    if (!id) {
                        return res.status(302).json({
                            success: true,
                            message: "All field need to be Provided"
                        });
                    }
                    const deleteUserAssesmentQuery = "DELETE FROM user_assesment WHERE id = $1";
                    const deleteUserAssesmentValues = [id];
                    

                    try {
                        await pool.query('BEGIN');
                        const deleteUserAssesment = await pool.query(deleteUserAssesmentQuery, deleteUserAssesmentValues);
                        if (deleteUserAssesment.rowCount != 0) {
                            await pool.query('COMMIT');
                            return res.status(200).json({
                                success: true,
                                message: "Data Deleted Successfully",
                                data: deleteUserAssesment.rows[0]
                            });
                        } else {
                            await pool.query('ROLLBACK');
                            return res.status(302).json({
                                success: false,
                                message: "Data not deleted or Id not Found",
                            });
                        }
                    } catch (error) {
                        await pool.query('ROLLBACK');
                        throw new Error(error);
                    } 

                } catch (error) {
                    return res.status(500).json({
                        success: false,
                        message: `Internal Server Error ${error.message}`,
                    });
                }
                break;



                case "user_assesment_details":
                    try {
                    const {id} = column_values;
                        if (!id) {
                            return res.status(302).json({
                                success: true,
                                message: "All field need to be Provided"
                            });
                        }
                        const deleteUserAssesmentDetailsQuery = "DELETE FROM user_assesment_details WHERE id = $1";
                        const deleteUserAssesmentDetailsValues = [id];
                        
                        try {
                            await pool.query('BEGIN');
                            const deleteUserAssesmentDetails = await pool.query(deleteUserAssesmentDetailsQuery, deleteUserAssesmentDetailsValues);
                            if (deleteUserAssesmentDetails.rowCount != 0) {
                                await pool.query('COMMIT');
                                return res.status(200).json({
                                    success: true,
                                    message: "Data Deleted Successfully",
                                    data: deleteUserAssesmentDetails.rows[0]
                                });
                            } else {
                                await pool.query('ROLLBACK');
                                return res.status(302).json({
                                    success: false,
                                    message: "Data not deleted or Id not Found",
                                });
                            }
                        } catch (error) {
                            await pool.query('ROLLBACK');
                            throw new Error(error);
                        }

                    } catch (error) {
                        return res.status(500).json({
                            success: false,
                            message: `Internal Server Error ${error.message}`,
                        });
                    }
                    break;


                default:
                    return res.status(402).json({
                        success:false,
                        message:"Table not found",
                      });       
            }
        default:
            return res.status(402).json({
            success:false,
            message:"Operation not found to perform"
            })
    }

}

module.exports={
    user_assement,
}