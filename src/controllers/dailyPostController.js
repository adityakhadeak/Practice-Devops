const pool = require('../database/db.js');

const currentTimestamp = new Date();
//Check Done
const createpost = async (req, res) => {
    try {
        const { post_title, post_description, post_hashtags, post_tags, post_category,  created_by,  updated_by } = req.body;

        const post_outer_image = req.file.path

        const query = 'INSERT INTO daily_posts (post_title, post_description, post_hashtags, post_tags, post_outer_image, post_category,  created_by,  updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
        const values = [post_title, post_description, post_hashtags, post_tags, post_outer_image, post_category,  created_by, updated_by];
        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: "Post created successfully",
            post: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal Server Error ${error.message}`
        });
    }
};


//Check Done
const updatepost = async (req, res) => {
    try {
        const {id} = req.params;
        const { post_title, post_description, post_hashtags, post_tags, post_category,updated_by } = req.body;

        const post_outer_image = req.file.path
        const updated_at = currentTimestamp 

        const query = 'UPDATE daily_posts SET post_title = $1, post_description = $2, post_hashtags = $3, post_tags = $4, post_outer_image = $5, post_category = $6,  updated_at=$7,updated_by = $8 WHERE id = $9 RETURNING *';

        const values = [post_title, post_description, post_hashtags, post_tags, post_outer_image, post_category, updated_at ,updated_by, id];

        const result = await pool.query(query, values);

        res.status(200).json({
            success: true,
            message: "post updated successfully",
            post: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
};


//Check Done
const deletepost = async (req, res) => {
    try {
        const {id} = req.params;

        const query = 'DELETE FROM daily_posts WHERE id = $1';
        const values = [id];
        await pool.query(query, values);

        res.status(200).json({
            success: true,
            message: "post deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
};



const getpost = async (req, res) => {
    try {
      const { limit, offset } = req.body;
      if (!(limit || offset)) {
        return res.status(302).json({
          success: false,
          message: "Limit and Offset is not given",
        });
      }
      const data = [];
      const result = await pool.query(
        "SELECT * FROM daily_posts ORDER BY id DESC LIMIT $1 OFFSET $2",
        [limit, offset]
      );
  
      await Promise.all(
        result.rows.map(async (post) => {
          const postData = { post_data: {}, post_likes: {}, post_comments: [] };
          postData.post_data = post;
  
          const result1 = await pool.query(
            "SELECT id FROM post_likes WHERE post_id=$1 ",
            [post.id]
          );
          postData.post_likes.likes_count = result1.rowCount;
  
          const result2 = await pool.query(
            "SELECT * FROM post_comments WHERE post_id=$1 AND comment_against_comment IS NULL",
            [post.id]
          );
  
          await Promise.all(
            result2.rows.map(async (comment) => {
              const comments = { top_level_comment: {}, comment_replies: [] };
  
              comments.top_level_comment = comment;
              const result3 = await pool.query(
                "SELECT * FROM post_comments WHERE post_id=$1 AND comment_against_comment=$2 ",
                [post.id, comment.id]
              );
              comments.comment_replies = result3.rows;
              postData.post_comments.push(comments);
            })
          );
  
          data.push(postData);
        })
      );
  
      res.status(200).json({
        success: true,
        result: {
          post_count: data.length,
          all_post_data: data,
        },
      });
    } catch (error) {
      console.error("Error in reading :", error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };





//Daily Comments on the Post
//Check Done
const createcomment = async (req, res) => {
    try {
        const {post_id, user_id, comment, comment_against_comment,created_by, updated_by } = req.body;


        const query = 'INSERT INTO post_comments (post_id,user_id,comment,comment_against_comment,created_by,updated_by) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

        const values = [post_id, user_id, comment, comment_against_comment,  created_by,  updated_by];

        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: "post created successfully",
            doctor: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
};


//Check Done
const updatecomment = async (req, res) => {
    try {
        const id = req.params.id;
        const { post_id, user_id, comment, comment_against_comment,updated_by } = req.body;

        const updated_at = currentTimestamp;

        const query = 'UPDATE post_comments SET post_id = $1, user_id = $2, comment = $3, comment_against_comment = $4, updated_at=$5, updated_by = $6 WHERE id = $7 RETURNING *';
        const values = [post_id, user_id, comment, comment_against_comment,updated_at, updated_by, id];
        const result = await pool.query(query, values);

        res.status(200).json({
            success: true,
            message: "post updated successfully",
            doctor: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
};

//Foregin Constraints Fail it to delete the comment
const deletecomment = async (req, res) => {
    try {
        const {id} = req.params;

        const query = 'DELETE FROM post_comments WHERE id = $1';
        const values = [id];
        await pool.query(query, values);

        res.status(200).json({
            success: true,
            message: "post deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
};

//Check Done
const getcomment = async (req, res) => {
    try {
        const query = 'SELECT * FROM post_comments ORDER BY id ASC';
        const result = await pool.query(query);
        res.status(200).json({
            success: true,
            message: "post fetched successfully",
            data:result.rows
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}



const createpostsaved = async (req, res) => {
    try {
        const {post_id, user_id} = req.body;
        const saved_date = currentTimestamp

        const result1=await pool.query('SELECT * FROM daily_post_saved WHERE post_id=$1',[post_id])
        if(result1.rowCount!=0)
            {
                return res.status(409).json({
                    success:false,
                    message:'Post already saved'
                })
            }
        const query = 'INSERT INTO daily_post_saved (post_id, user_id, saved_date) VALUES ($1, $2, $3) RETURNING *';
        const values = [post_id, user_id, saved_date];
        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: "post saved successfully",
            post: result.rows[0]

        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}


//Check Done
const updatepostsaved = async (req, res) => {
    try {
        const id = req.params.id;
        const { post_id, user_id } = req.body;
        const saved_date = currentTimestamp

        
        const query = 'UPDATE daily_post_saved SET post_id = $1, user_id = $2, saved_date = $3 WHERE id = $4 RETURNING *';
        const values = [post_id, user_id, saved_date, id];
        const result = await pool.query(query, values);

        res.status(200).json({
            success: true,
            message: "post saved updated successfully",
            post: result.rows[0]
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}

//Check Done
const deletepostsaved = async (req, res) => {

    try {
        const id = req.params.id;

        const query = 'DELETE FROM daily_post_saved WHERE id = $1';
        const values = [id];
        await pool.query(query, values);

        res.status(200).json({
            success: true,
            message: "post saved deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}

//Check Done
const getpostsaved = async (req, res) => {
    try {
        const query = 'SELECT * FROM daily_post_saved ORDER BY id ASC';
        const result = await pool.query(query)
        res.status(200).json({
            success: true,
            message: "post saved fetched successfully",
            post: result.rows
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}



//Check Done
const daily_post_image = async (req,res)=>{
    try {
        const {post_id} = req.body
        const post_image = req.file.path

        const query = "INSERT INTO daily_post_images (post_id, post_image) VALUES ($1,$2) RETURNING *"
        const value = [post_id, post_image]
        const result = await pool.query(query,value);
        res.status(201).json({
            success: true,
            message: "Post Image created successfully",
            post: result.rows[0],
        });


    } catch (error) {
         console.error(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}

//Check Done
const update_daily_post_image = async (req, res) => {
    try {
        const {post_id} = req.body;
        const post_image = req.file.path

        const {id} = req.params

        const updatePostImage = await pool.query('SELECT * FROM daily_post_images WHERE id=$1', [id]);
        if (!updatePostImage.rows.length) {
            return res.status(404).json({
                success: false,
                message: "daily_post_image not found"
            });
        }

        const query = 'UPDATE daily_post_images SET post_image=$1, post_id=$2 WHERE id=$3 RETURNING *';
        const values = [post_image, post_id, id];

        const result = await pool.query(query, values);

        res.status(200).json({
            success: true,
            message: "daily_post_image updated successfully",
            daily_post_image: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}

//Check Done
const delete_daily_post_image = async (req, res) => {
    try {
        const { id } = req.params;

        const deletePostImage = await pool.query('DELETE FROM daily_post_images WHERE id=$1 RETURNING *', [id]);

        if (!deletePostImage.rows.length) {
            return res.status(404).json({
                success: false,
                message: "daily_post_image not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "daily_post_image deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}


//Check Done
const read_daily_post_image = async (req, res) => {
    try {
        const { id } = req.params;

        const query = 'SELECT * FROM daily_post_images WHERE post_id=$1';
        const values = [id];

        const result = await pool.query(query, values);

        if (!result.rows.length) {
            return res.status(404).json({
                success: false,
                message: "daily_post_image not found"
            });
        }

        res.status(200).json({
            success: true,
            daily_post_image: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}



//daily_post_likes
//Check Done
const createpost_like = async (req, res) => {
    try {
        const { post_id, user_id} = req.body;
        const last_updated_at = currentTimestamp

        const query = 'INSERT INTO posts_likes (post_id,user_id,last_updated_at) VALUES ($1, $2, $3) RETURNING *';
        const values = [ post_id,user_id,last_updated_at];
        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: "Post Like created successfully",
            data: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
};



const updatepost_like = async (req, res) => {
    try {
        const id = req.params.id;
        const { post_id,user_id} = req.body;
        const last_updated_at = currentTimestamp

        const query = 'UPDATE posts_likes SET post_id = $1, user_id = $2, last_updated_at =$3 WHERE id = $4 RETURNING *';

        const values = [post_id,user_id,last_updated_at,id];
        const result = await pool.query(query, values);

        if(result.rowCount == 0){
            res.status(200).json({
                success: false,
                message: "Id not found",
               
            });
        }
        res.status(200).json({
            success: true,
            message: "Post Like Updated successfully",
            data: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
};


//Check Done
const deletepost_like= async (req, res) => {
    try {
        const id = req.params.id;

        const query = 'DELETE FROM posts_likes WHERE id = $1';
        const values = [id];
        await pool.query(query, values);

        res.status(200).json({
            success: true,
            message: "Post Like deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
}

//Check Done
const getpost_like = async (req, res) => {
    try {
        const { id } = req.params; 
        const query = 'SELECT * FROM posts_likes WHERE id = $1';
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "fetched successfully",
            data: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: `Internal server Error ${error.message}`
        });
    }
};
    


module.exports = { createcomment, updatecomment, deletecomment, getcomment, createpost, updatepost, deletepost, getpost, createpostsaved, updatepostsaved, deletepostsaved, getpostsaved,daily_post_image,update_daily_post_image,delete_daily_post_image,read_daily_post_image,createpost_like,updatepost_like,deletepost_like,getpost_like }