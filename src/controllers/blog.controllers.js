const pool = require("../database/db.js");
const { validationResult } = require('express-validator')
const path=require('path')
const fs=require('fs')
const date = new Date();

const createBlogController = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Errors',
        errors: errors.array()
      })
    }
    let blogs_outer_img = "";
    let blogs_inner_img = "";


    if (req.files && req.files.length > 0) {
      blogs_outer_img = req.files[0] ? req.files[0].path : null;
      blogs_inner_img = req.files[1] ? req.files[1].path : null;
    }

    
    const {
      blogs_title,
      blogs_description,
      blogs_hash_tags,
      blogs_tags,
      blogs_category,
      author_name,
      created_by,
      updated_by,
    } = req.body;


    const createBlogQuery =
      "INSERT INTO blogs(blogs_title, blogs_description, blogs_hash_tags, blogs_tags, blogs_outer_img, blogs_inner_img, blogs_category, author_name, created_by, updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *";

    const createBlogValues = [
      blogs_title,
      blogs_description,
      blogs_hash_tags,
      blogs_tags,
      blogs_outer_img,
      blogs_inner_img,
      blogs_category,
      author_name,
      created_by,
      updated_by,
    ];

    const createBlogResult = await pool.query(
      createBlogQuery,
      createBlogValues
    );

    const contentType1=req.files[0].mimetype
    const fileExtention1=contentType1.slice(6)
    const contentType2=req.files[1].mimetype
    const fileExtention2=contentType2.slice(6)
    

    const newFileName1=`outer${date.getDate()}${date.getMonth()+1}${date.getFullYear()}${createBlogResult.rows[0].id}.${fileExtention1}`
    const newFileName2=`inner${date.getDate()}${date.getMonth()+1}${date.getFullYear()}${createBlogResult.rows[0].id}.${fileExtention2}`

    const newPath1= path.join(__dirname,'../public/images',newFileName1)
    const newPath2= path.join(__dirname,'../public/images',newFileName2)

    fs.renameSync(path.join(__dirname,'../public/images',req.files[0].filename),newPath1)
    fs.renameSync(path.join(__dirname,'../public/images',req.files[1].filename),newPath2)

    const result=await pool.query('UPDATE blogs SET blogs_outer_img=$1, blogs_inner_img=$2 where id=$3 RETURNING *',[newFileName1,newFileName2,createBlogResult.rows[0].id])
    return res.status(200).json({
      success: true,
      message: "Blog Successfully created",
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateBlogController = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Errors',
        errors: errors.array()
      })
    }
    let blogs_outer_img = "";
    let blogs_inner_img = "";


    if (req.files && req.files.length > 0) {
      blogs_outer_img = req.files[0] ? req.files[0].path : null;
      blogs_inner_img = req.files[1] ? req.files[1].path : null;
    }

    
    const {
      blogs_title,
      blogs_description,
      blogs_hash_tags,
      blogs_tags,
      blogs_category,
      author_name,
      updated_by,
      id,
    } = req.body;

    const getBlog=await pool.query('SELECT blogs_outer_img, blogs_inner_img FROM blogs WHERE id=$1',[id])

    const contentType1=req.files[0].mimetype
    const fileExtention1=contentType1.slice(6)
    const contentType2=req.files[1].mimetype
    const fileExtention2=contentType2.slice(6)
    

    const newFileName1=`outer${date.getDate()}${date.getMonth()+1}${date.getFullYear()}${id}.${fileExtention1}`
    const newFileName2=`inner${date.getDate()}${date.getMonth()+1}${date.getFullYear()}${id}.${fileExtention2}`

    const newPath1= path.join(__dirname,'../public/images',newFileName1)
    const newPath2= path.join(__dirname,'../public/images',newFileName2)

    fs.unlinkSync(path.join(__dirname,'../public/images',getBlog.rows[0].blogs_outer_img))
    fs.unlinkSync(path.join(__dirname,'../public/images',getBlog.rows[0].blogs_inner_img))

    fs.renameSync(path.join(__dirname,'../public/images',req.files[0].filename),newPath1)
    fs.renameSync(path.join(__dirname,'../public/images',req.files[1].filename),newPath2)
    
    const updateBlogQuery =
      "UPDATE blogs SET blogs_title=$1, blogs_description=$2, blogs_hash_tags=$3, blogs_tags=$4, blogs_outer_img=$5, blogs_inner_img=$6, blogs_category=$7, author_name=$8, updated_by=$9 WHERE id = $10 RETURNING *";

    const updateBlogValues = [
      blogs_title,
      blogs_description,
      blogs_hash_tags,
      blogs_tags,
      newFileName1,
      newFileName2,
      blogs_category,
      author_name,
      updated_by,
      id,
    ];

    const updateBlogResult = await pool.query(
      updateBlogQuery,
      updateBlogValues
    );

    return res.status(200).json({
      success: true,
      message: "Blog Successfully Updated",
      data: updateBlogResult.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteBlogController = async (req, res) => {
  try {
    const { blog_id } = req.body;
    if (!blog_id) {
      return res.status(302).json({
        success: false,
        message: "Id is required for deleting the Blog",
      });
    }
    const result1 = await pool.query(
      "DELETE FROM blogs_likes WHERE blog_id=$1",
      [blog_id]
    );
    const result2 = await pool.query(
      "DELETE FROM blogs_comments WHERE blog_id=$1",
      [blog_id]
    );
    const result3 = await pool.query("DELETE FROM blogs WHERE id=$1", [
      blog_id,
    ]);

    if (
      (result1.rowCount != 0 &&
        result2.rowCount != 0 &&
        result3.rowCount != 0) ||
      (result1.rowCount == 0 &&
        result2.rowCount == 0 &&
        result3.rowCount != 0) ||
      (result1.rowCount == 0 &&
        result2.rowCount != 0 &&
        result3.rowCount != 0) ||
      (result1.rowCount != 0 && result2.rowCount == 0 && result3.rowCount != 0)
    ) {
      return res.status(200).json({
        success: true,
        message: "Blog deleted Successfully",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Id not Found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



const readBlogController = async (req, res) => {
  try {
    const { limit, offset, user_id } = req.body;


    if (user_id != req.user.user_id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized wrong token"
      })
    }

    if (!(limit || offset)) {
      return res.status(302).json({
        success: false,
        message: "Limit and Offset is not given",
      });
    }
    const data = [];
    const result = await pool.query(
      "SELECT * FROM blogs ORDER BY created_at DESC LIMIT $1 OFFSET $2",
      [limit, offset]
    );

    await Promise.all(
      result.rows.map(async (blog) => {
        const blogData = { blog_data: {}, blog_likes: {}, blog_comments: [] };
        blogData.blog_data = blog;

        const result1 = await pool.query(
          "SELECT id FROM blogs_likes WHERE blog_id=$1 ",
          [blog.id]
        );
        blogData.blog_likes.likes_count = result1.rowCount;

        const result2 = await pool.query(
          "SELECT * FROM blogs_comments WHERE blog_id=$1 AND comment_against_comment IS NULL",
          [blog.id]
        );

        await Promise.all(
          result2.rows.map(async (comment) => {
            const comments = { top_level_comment: {}, comment_replies: [] };

            comments.top_level_comment = comment;
            const result3 = await pool.query(
              "SELECT * FROM blogs_comments WHERE blog_id=$1 AND comment_against_comment=$2 ",
              [blog.id, comment.id]
            );
            comments.comment_replies = result3.rows;
            blogData.blog_comments.push(comments);
          })
        );

        data.push(blogData);
      })
    );

    res.status(200).json({
      success: true,
      result: {
        blog_count: data.length,
        all_blogs_data: data,
      },
    });
  } catch (error) {
    console.error("Error in reading Blogs:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//ADD LIKE CONTROLLER BOTH ON THE SAME CONTROLLER
const addLike = async (req, res) => {
  try {
    const { blog_id, user_id } = req.body;

    if (user_id != req.user.user_id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized wrong token"
      })
    }

    if (!(blog_id || user_id)) {
      return res.status(302).json({
        success: false,
        message: "Ids are not provided",
      });
    }

    const addLikeQuery =
      "SELECT id FROM blogs_likes WHERE blog_id=$1 AND user_id=$2";
    const addLikeValue = [blog_id, user_id];
    const addLikeResult = await pool.query(addLikeQuery, addLikeValue);

    if (addLikeResult.rowCount == 0) {
      const addBlogLikeQuery =
        "INSERT INTO blogs_likes (blog_id,user_id,last_updated_at) VALUES ($1,$2,$3) RETURNING *";
      const addBlogLikeQueryValue = [blog_id, user_id, date];
      const addBlogLikeQueryResult = await pool.query(
        addBlogLikeQuery,
        addBlogLikeQueryValue
      );
    } else {
      const query = "DELETE FROM blogs_likes WHERE blog_id=$1 AND user_id=$2";
      const values = [blog_id, user_id];
      const result = await pool.query(query, values);
    }

    res.status(201).json({
      success: true,
      message: "Like updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//COMMENTS CONTROLLERS
const addComment = async (req, res) => {
  try {
    const {
      blog_id,
      user_id,
      comment,
      comment_against_comment,
      created_by,
      updated_by,
    } = req.body;


    if (user_id != req.user.user_id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized wrong token"
      })
    }

    const query1 =
      "INSERT INTO blogs_comments (blog_id,user_id,comment,comment_against_comment, created_by, updated_by) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *";
    const values1 = [
      blog_id,
      user_id,
      comment,
      comment_against_comment,
      created_by,
      updated_by,
    ];
    const result1 = await pool.query(query1, values1);

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: result1.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { comment_id, user_id } = req.body;


    if (user_id != req.user.user_id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized wrong token"
      })
    }

    const result1 = await pool.query(
      "DELETE FROM blogs_comments WHERE comment_against_comment=$1",
      [comment_id]
    );
    const result2 = await pool.query("DELETE FROM blogs_comments WHERE id=$1", [
      comment_id,
    ]);

    res.status(200).json({
      success: true,
      message: "Comment delete successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateComment = async (req, res) => {
  try {
    const { comment_id: id, comment, user_id } = req.body;


    if (user_id != req.user.user_id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized wrong token"
      })
    }

    const result1 = await pool.query('SELECT * FROM blogs_comments WHERE id=$1', [id])
    if (result1.rows[0].user_id != user_id) {
      return res.status(401).json({
        success: "false",
        message: "Wrong user updating the comments"
      }
      )
    }
    const result2 = await pool.query('UPDATE blogs_comments SET comment=$1, updated_at=$2, updated_by=$3 WHERE id=$4', [comment, date, user_id, id])

    res.status(200).json({
      success: true,
      message: "Comment updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createBlogController,
  readBlogController,
  deleteBlogController,
  updateBlogController,
  addComment,
  updateComment,
  deleteComment,
  addLike,
};
