const pool = require('../database/db.js')

const mainDynamicController = async (req, res) => {
    try {
        const { operation, table_name, column_values } = req.body

        switch (operation) {
            case 'create':
                const values1 = Object.values(column_values).map((_, index) => `$${index + 1}`).join(',');
                const query1 = `INSERT INTO ${table_name} (${Object.keys(column_values).join(',')}) VALUES (${placeholders}) RETURNING *`;

                const result1 = await pool.query(query1, values1);

                res.status(201).json({
                    success: true,
                    message: "Data Inserted successfully",
                    data: result1.rows
                })
                break
            case 'read':

                break
            case 'update':
                
                break
            case 'delete':

                break
            default:
                res.status(400).json({ success: false, message: 'Invalid operation type' })
                break
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}