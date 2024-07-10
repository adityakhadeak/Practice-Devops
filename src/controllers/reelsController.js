const { validationResult } = require('express-validator')
const pool = require('../database/db.js')
const fs = require('fs')
const path = require('path')

const currentTimestamp = new Date()

const addreel = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({
        success: false,
        message: 'Errors',
        errors: errors.array()
      })
    }
    const { reel_title, reel_description, reel_hash_tags, reel_tags, reel_category, created_by, updated_by } = req.body


    const reel_video_url = 'reels/' + req.file.filename


    const query1 = 'INSERT INTO reels (reel_title,reel_description, reel_hash_tags,reel_tags,reel_video_url,reel_category,created_by,updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *'
    const values1 = [reel_title, reel_description, reel_hash_tags, reel_tags, reel_video_url, reel_category, created_by, updated_by]
    const result1 = await pool.query(query1, values1);


    const contentType = req.file.mimetype;
    const fileExtention = contentType.slice(6)
    // console.log('date',currentTimestamp.getDate())
    // console.log('month',currentTimestamp.getMonth())
    // console.log('year',currentTimestamp.getFullYear())
    const ddmmyyyy=`${currentTimestamp.getDate()}${currentTimestamp.getMonth()+1}${currentTimestamp.getFullYear()}`
    const newFileName = `${ddmmyyyy}${result1.rows[0].id}.${fileExtention}`;

    // Update the file name in the storage destination directory
    const newPath = path.join(__dirname, '../public/reels', newFileName);
    fs.renameSync(path.join(__dirname, '../public/reels', req.file.filename), newPath);

    const result7 = await pool.query('UPDATE reels SET reel_video_url =$1 WHERE id=$2 RETURNING *', [newFileName, result1.rows[0].id])


    res.status(201).json({
      success: true,
      message: "Reel uploaded successfully",
      data: result7.rows
    })

  } catch (error) {
    fs.unlinkSync(req.file.path);
    console.log(error)
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

const updatereel = async (req, res) => {
  try {

    const errors= validationResult(req)

    if (!errors.isEmpty()) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({
        success: false,
        message: 'Errors',
        errors: errors.array()
      })
    }

    const { reel_id, reel_title, reel_description, reel_hash_tags, reel_tags, reel_category, updated_by } = req.body

    const getReel= await pool.query('SELECT reel_video_url FROM reels WHERE id=$1',[reel_id])

    const contentType = req.file.mimetype;
    const fileExtention = contentType.slice(6)
    // console.log('date',currentTimestamp.getDate())
    // console.log('month',currentTimestamp.getMonth())
    // console.log('year',currentTimestamp.getFullYear())
    const ddmmyyyy=`${currentTimestamp.getDate()}${currentTimestamp.getMonth()+1}${currentTimestamp.getFullYear()}`
    const newFileName = `${ddmmyyyy}${reel_id}.${fileExtention}`;

    // Update the file name in the storage destination directory
    const newPath = path.join(__dirname, '../public/reels', newFileName);

    fs.unlinkSync(path.join(__dirname,'../public/reels',getReel.rows[0].reel_video_url))
    fs.renameSync(path.join(__dirname, '../public/reels', req.file.filename), newPath);

    const query1 = 'UPDATE reels SET reel_title=$2 ,reel_description=$3, reel_hash_tags=$4, reel_tags=$5, reel_video_url=$6, reel_category=$7,updated_at=$8, updated_by=$9 WHERE id=$1 RETURNING *'
    const values1 = [reel_id, reel_title, reel_description, reel_hash_tags, reel_tags, newFileName, reel_category, currentTimestamp,updated_by]
    const result1 = await pool.query(query1, values1);

    

    res.status(200).json({
      success: true,
      message: "Reel updated successfully",
      data: result1.rows
    })

  } catch (error) {
    console.log(error)
    fs.unlinkSync(req.file.path);
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

const handlelike = async (req, res) => {
  try {
    const { reel_id, user_id } = req.body

    if(user_id!=req.user.user_id)
      {
        return res.status(401).json({
          success:false,
          message:"Unauthorized wrong token"
        })
      }
    const query1 = 'SELECT id FROM reels_likes WHERE reel_id=$1 AND user_id=$2'
    const values1 = [reel_id, user_id]
    const result1 = await pool.query(query1, values1)

    if (result1.rowCount == 0) {
      const query2 = 'INSERT INTO reels_likes (reel_id,user_id,last_updated_at) VALUES ($1,$2,$3) RETURNING *'
      const values2 = [reel_id, user_id, currentTimestamp]
      const result2 = await pool.query(query2, values2);
    }
    else {
      const query3 = 'DELETE FROM reels_likes WHERE reel_id=$1 AND user_id=$2'
      const values3 = [reel_id, user_id]
      const result3 = await pool.query(query3, values3);
    }
    res.status(201).json({
      success: true,
      message: "Like updated successfully",
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}




const addcomment = async (req, res) => {
  try {
    
    const { reel_id, user_id, comment, comment_against_reel, created_by, updated_by } = req.body

    if(user_id!=req.user.user_id)
      {
        return res.status(401).json({
          success:false,
          message:"Unauthorized wrong token"
        })
      }
    const query1 = 'INSERT INTO reels_comments (reel_id,user_id,comment,comment_against_reel, created_by, updated_by) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *'
    const values1 = [reel_id, user_id, comment, comment_against_reel, created_by, updated_by]
    const result1 = await pool.query(query1, values1);

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: result1.rows
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

const deletecomment = async (req, res) => {
  try {
    const { comment_id ,user_id} = req.body
    if(user_id!=req.user.user_id)
      {
        return res.status(401).json({
          success:false,
          message:"Unauthorized wrong token"
        })
      }
    const result1 = await pool.query('DELETE FROM reels_comments WHERE comment_against_reel=$1', [comment_id])
    const result2 = await pool.query('DELETE FROM reels_comments WHERE id=$1', [comment_id])

    res.status(200).json({
      success: true,
      message: "Comment delete successfully",
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

const updatecomment = async (req, res) => {
  try {
    const { comment_id: id, comment, user_id } = req.body

    if(user_id!=req.user.user_id)
      {
        return res.status(401).json({
          success:false,
          message:"Unauthorized wrong token"
        })
      }
    const result1 = await pool.query('SELECT * FROM reels_comments WHERE id=$1', [id])
    if (result1.rows[0].user_id != user_id) {
      return res.status(401).json({
        success: "false",
        message: "Wrong user updating the comments"
      }
      )
    }

    const result2 = await pool.query('UPDATE reels_comments SET comment=$1, updated_at=$2, updated_by=$3 WHERE id=$4', [comment, currentTimestamp, user_id, id])

    res.status(200).json({
      success: true,
      message: "Comment updated successfully",
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

//Lazy Loading
const fetchreels = async (req, res) => {
  try {
    const { limit, offset ,user_id} = req.body

    if(user_id!=req.user.user_id)
      {
        return res.status(401).json({
          success:false,
          message:"Unauthorized wrong token"
        })
      }
    const data = []
    const result = await pool.query(
      'SELECT * FROM reels ORDER BY created_at DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    await Promise.all(result.rows.map(async (reel) => {
      const reelData = { reel_data: {}, reel_likes: {}, reel_comments: [] }
      reelData.reel_data = reel;
      const result1 = await pool.query('SELECT id FROM reels_likes WHERE reel_id=$1 ', [reel.id])
      reelData.reel_likes.likes_count = result1.rowCount

      const result2 = await pool.query('SELECT * FROM reels_comments WHERE reel_id=$1 AND comment_against_reel IS NULL', [reel.id])
      // if (reel.id==25) {
      //   console.log(result2.rowCount)

      // }
      await Promise.all(result2.rows.map(async (comment) => {
        const comments = { top_level_comment: {}, comment_replies: [] }

        comments.top_level_comment = comment
        const result3 = await pool.query('SELECT * FROM reels_comments WHERE reel_id=$1 AND comment_against_reel=$2 ', [reel.id, comment.id])
        comments.comment_replies = result3.rows
        reelData.reel_comments.push(comments)

      }))

      data.push(reelData)
    }))

    res.status(200).json({
      success: true,
      result: {
        reels_count: data.length,
        all_reels_data: data
      }
    });
  } catch (error) {
    console.error('Error fetching reels:', error)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}

const deletereel = async (req, res) => {
  try {
    const { reels_id } = req.body
    const result1 = await pool.query('DELETE FROM reels_likes WHERE reel_id=$1', [reels_id]);
    const result2 = await pool.query('DELETE FROM reels_comments WHERE reel_id=$1', [reels_id]);
    const result3 = await pool.query('DELETE FROM reels WHERE id=$1', [reels_id]);

    res.status(200).json({
      success: true,
      message: "Reel deleted Successfully"
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}

module.exports = { fetchreels, addcomment, addreel, handlelike, deletecomment, updatecomment, deletereel, updatereel }