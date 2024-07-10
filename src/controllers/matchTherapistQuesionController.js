const pool = require('../database/db.js');

const dynamicController = async (req, res) => {
    const { operation, table_name, column_values } = req.body;



    try {
        let result;
        switch (operation) {
            case "read":
                switch (table_name) {
                    case "match_therapist_questions":
                        const { id } = column_values;
                        const query = `SELECT question, created_at, created_by, updated_at, updated_by, id FROM match_therapist_questions WHERE id = $1`;
                        result = await pool.query(query, [id]);
                        res.status(200).send(result.rows);
                        break;
                    case "match_therapist_questions_options":
                        const { question_id } = column_values;
                        const queryOptions = `SELECT  question_id, option, is_correct, created_at, created_by, updated_at, updated_by FROM match_therapist_questions_options WHERE question_id = $1`;
                        result = await pool.query(queryOptions, [question_id]);
                        res.status(200).send(result.rows);
                        break;
                    default:
                        res.status(400).send("Invalid table name");
                }
                break;

            case "create":
                switch (table_name) {
                    case "match_therapist_questions":
                        const { question, created_by: created_by1, updated_by: updated_by1 } = column_values;
                        const insertQuestionQuery = `INSERT INTO match_therapist_questions(question,created_by,updated_by ) VALUES($1,$2,$3) RETURNING *`;
                        result = await pool.query(insertQuestionQuery, [question, created_by1, updated_by1]);
                        res.status(201).send({ message: "Record inserted successfully", question: result.rows[0] });
                        break;
                    case "match_therapist_questions_options":
                        // const { question_id, option, is_correct, created_by, updated_by } = column_values;
                        // const insertOptionsQuery = `INSERT INTO match_therapist_questions_options(question_id, option, is_correct, created_by, updated_by) VALUES($1, $2, $3, $4, $5) RETURNING *`;
                        // result = await pool.query(insertOptionsQuery, [question_id, option, is_correct, created_by, updated_by]);
                        // res.status(201).send({ message: "option inserted successfully", option: result.rows[0] });
                        const { question_id, options, created_by, updated_by } = column_values;
                        const optionsAdded = []
                        await Promise.all(options.map(async (obj) => {
                            const query4 = 'INSERT INTO match_therapist_questions_options (question_id,option, is_correct, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
                            const values4 = [question_id, obj.option, obj.is_correct, created_by, updated_by]
                            const result4 = await pool.query(query4, values4)
                            optionsAdded.push(result4.rows[0])
                        }))

                        res.status(201).json({
                            success: true,
                            message: "Options added succesfully",
                            result: {
                                options: optionsAdded
                            }
                        })
                        break;
                    default:
                        res.status(400).send("Invalid table name");
                }
                break;

            case "delete":
                switch (table_name) {
                    case "match_therapist_questions_options":
                        const { question_id } = column_values;
                        const deleteQuery = `DELETE FROM match_therapist_questions_options WHERE question_id = $1`;
                        result = await pool.query(deleteQuery, [question_id]);
                        res.status(200).send({ message: "Option deleted successfully" });
                        break;
                    case "match_therapist_questions":
                        const { id } = column_values;
                        const deleteQuestionQuery = `DELETE FROM match_therapist_questions WHERE id = $1`;
                        result = await pool.query(deleteQuestionQuery, [id]);
                        res.status(200).send({ message: "Question deleted successfully" });
                        break;
                    default:
                        res.status(400).send("Invalid table name");
                }
                break;

            case "update":
                try {
                    switch (table_name) {
                        case "match_therapist_questions_options":
                            // const { option, question_id } = column_values;
                            // // const updateQuery = `UPDATE match_therapist_questions_options SET option = $1 WHERE question_id = $2`;
                            // // result = await pool.query(updateQuery, [option, question_id]);
                            // // if (result.rowCount > 0) {
                            // //     res.status(200).send({ message: "Option updated successfully" });
                            // // } else {
                            // //     res.status(404).send({ message: "Option not found" });
                            // // }
                            const { id:id1, option, is_correct, updated_by:updated_by1 } =column_values

                            const query1 = 'SELECT option FROM match_therapist_questions_options WHERE id=$1'
                            const values1 = [id1]
                            const result1 = await pool.query(query1, values1)

                            if (result1.rowCount == 0) {
                                return res.status(401).json({
                                    success: false,
                                    message: "Option does not exist"
                                })
                            }
                            const currentDate = new Date()
                            const query2 = 'UPDATE match_therapist_questions_options SET option=$1, is_correct=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *'
                            const values2 = [option, is_correct, updated_by1, currentDate, id1]
                            const result2 = await pool.query(query2, values2)

                            res.status(200).json({
                                success: true,
                                message: "Option updated succesfully",
                                result: result2.rows[0]
                            })

                            break;

                        case "match_therapist_questions":
                            const { id, question, updated_by, updated_at } = column_values;
                            const updateQuestionQuery = `UPDATE match_therapist_questions SET question = $1, updated_by=$2,updated_at=$3  WHERE id = $4 RETURNING *`;
                            result = await pool.query(updateQuestionQuery, [question, updated_by, updated_at, id]);
                            if (result.rowCount > 0) {
                                res.status(200).send({ message: "Question updated successfully", question: result.rows[0] });
                            } else {
                                res.status(404).send({ message: "Question not found" });
                            }
                            break;

                        default:
                            res.status(400).send("Invalid table name");
                    }
                } catch (error) {
                    console.error("Error updating record:", error);
                    res.status(500).send({ message: "Internal Server Error", error: error.message });
                }
                break;

            default:
                res.status(400).send("Invalid operation");
        }
    }
    catch (error) {
        console.error("Error processing request:", error);
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = dynamicController;
