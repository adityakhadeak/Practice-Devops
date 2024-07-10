const pool = require('../database/db.js')

const createAssessment = async (req, res) => {
    const { category, assesment_name, status, created_by, updated_by } = req.body
    console.log(category, assesment_name)
    try {
        const query1 = 'SELECT assesment_name FROM assesment_master WHERE category=$1 AND assesment_name=$2'
        const values1 = [category, assesment_name]
        const result1 = await pool.query(query1, values1)


        if (result1.rowCount != 0) {
            return res.status(409).json({
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
}

const readAssessment = async (req, res) => {
    try {
        const { category ,user_id} = req.body
        if(user_id!=req.user.user_id)
            {
              return res.status(401).json({
                success:false,
                message:"Unauthorized wrong token"
              })
            }
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

            const result4=await pool.query('SELECT option FROM assesment_questions_options WHERE question_id=$1 AND is_correct=$2',[obj.id,1])

            data.push({
                question: obj.question, options: {
                    option1: result3.rows[0]?.option,
                    option2: result3.rows[1]?.option,
                    option3: result3.rows[2]?.option,
                    option4: result3.rows[3]?.option
                },
                correct_option:result4.rows[0].option
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
}

const updateAssessment = async (req, res) => {
    const { id, category, assesment_name, status, updated_by } = req.body
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
}

const deleteAssessment = async (req, res) => {
    const { id } = req.body
    try {
        const result1 = await pool.query('SELECT id FROM assesment_master WHERE id=$1', [id])
        if (result1.rowCount == 0) {
            return res.status(404).json({
                success: false,
                message: 'Assessment not found'
            })
        }
        const question_ids = []
        const result2 = await pool.query('SELECT id FROM assesment_questions WHERE assesment_id=$1', [result1.rows[0].id])
        result2.rows.map((obj) => {
            question_ids.push(obj.id)
        })

        question_ids.map(async (id) => {
            await pool.query('DELETE FROM assesment_questions_options WHERE question_id = $1', [id])
        })
        await pool.query('DELETE FROM assesment_questions WHERE assesment_id = $1', [result1.rows[0].id])
        await pool.query('DELETE FROM assesment_master WHERE id = $1', [id])

        res.status(200).json({
            success: true,
            message: "Assessment deleted successfully"
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


const createAssessmentQuestionAndOptions = async (req, res) => {
    const { assesment_id, question, options, status, created_by, updated_by } = req.body
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
        const values2 = [assesment_id, question, status, created_by, updated_by]
        const result2 = await pool.query(query2, values2)

        const question_id = result2.rows[0].id
        const optionsAdded = []
        await Promise.all(options.map(async (obj) => {
            const query4 = 'INSERT INTO assesment_questions_options (question_id,option, is_correct, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
            const values4 = [question_id, obj.option, obj.is_correct, created_by, updated_by]
            const result4 = await pool.query(query4, values4)
            optionsAdded.push(result4.rows[0])
        }))

        res.status(201).json({
            success: true,
            message: "Question created succesfully",
            result: {
                question: result2.rows[0],
                options: optionsAdded
            }
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


const createAssessmentQuestion = async (req, res) => {
    const { assesment_id, question, status, created_by, updated_by } = req.body
    try {
        const query1 = 'SELECT question FROM assesment_questions WHERE question=$1 AND assesment_id=$2'
        const values1 = [question, assesment_id]
        const result1 = await pool.query(query1, values1)


        if (result1.rowCount != 0) {
            return res.status(409).json({
                success: false,
                message: "Question already exist"
            })
        }
        const query2 = 'INSERT INTO assesment_questions (assesment_id,question, status, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
        const values2 = [assesment_id, question, status, created_by, updated_by]
        const result2 = await pool.query(query2, values2)

        res.status(201).json({
            success: true,
            message: "Question created succesfully",
            result: result2.rows[0]
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


const updateAssessmentQuestion = async (req, res) => {
    const { id, question, status, updated_by } = req.body
    try {
        const query1 = 'SELECT question FROM assesment_questions WHERE id=$1'
        const values1 = [id]
        const result1 = await pool.query(query1, values1)


        if (result1.rowCount == 0) {
            return res.status(401).json({
                success: false,
                message: "Question does not exist"
            })
        }
        const currentDate = new Date()
        const query2 = 'UPDATE  assesment_questions SET question=$1, status=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *'
        const values2 = [question, status, updated_by, currentDate, id]
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
}


const deleteAssessmentQuestion = async (req, res) => {
    const { id } = req.body
    try {
        const result1 = await pool.query('SELECT id FROM assesment_questions WHERE id=$1', [id])
        if (result1.rowCount == 0) {
            return res.status(404).json({
                success: false,
                message: 'Assessment Question not found'
            })
        }
        await pool.query('DELETE FROM assesment_questions_options WHERE question_id = $1', [id])

        await pool.query('DELETE FROM assesment_questions WHERE id = $1', [id])

        res.status(200).json({
            success: true,
            message: "Assessment Question deleted successfully"
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const createAssessmentQuestionOption = async (req, res) => {
    const { question_id, option, is_correct, created_by, updated_by } = req.body
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
        const values2 = [question_id, option, is_correct, created_by, updated_by]
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
}


const updateAssessmentQuestionOption = async (req, res) => {
    const { id, option, is_correct, updated_by } = req.body
    try {
        const query1 = 'SELECT option FROM assesment_questions_options WHERE id=$1'
        const values1 = [id]
        const result1 = await pool.query(query1, values1)


        if (result1.rowCount == 0) {
            return res.status(401).json({
                success: false,
                message: "Option does not exist"
            })
        }
        const currentDate = new Date()
        const query2 = 'UPDATE  assesment_questions_options SET option=$1, is_correct=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *'
        const values2 = [option, is_correct, updated_by, currentDate, id]
        const result2 = await pool.query(query2, values2)

        res.status(200).json({
            success: true,
            message: "Option updated succesfully",
            result: result2.rows[0]
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


const deleteAssessmentQuestionOption = async (req, res) => {
    const { id } = req.body
    try {
        const result1 = await pool.query('SELECT id FROM assesment_questions_options WHERE id=$1', [id])
        if (result1.rowCount == 0) {
            return res.status(404).json({
                success: false,
                message: 'Assessment Question Option not found'
            })
        }
        await pool.query('DELETE FROM assesment_questions_options WHERE id = $1', [id])

        res.status(200).json({
            success: true,
            message: "Assessment Question Option deleted successfully"
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


module.exports = { createAssessment, updateAssessment, createAssessmentQuestionOption, updateAssessmentQuestionOption, updateAssessmentQuestion, createAssessmentQuestion, readAssessment, deleteAssessment, deleteAssessmentQuestion, deleteAssessmentQuestionOption, createAssessmentQuestionAndOptions }