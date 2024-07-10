const {Router}=require('express')
const  { addLike, createBlogController, updateBlogController, readBlogController, deleteBlogController, addComment, deleteComment, updateComment  } =require( "../controllers/blog.controllers.js");
const multer = require("multer");
const path=require('path');
const authentication = require('../middleware/authentication.js');
const fs = require('fs');
const { createBlogValidation, updateBlogsValidation } = require('../helper/validation.js');

const storage = multer.diskStorage({
    destination:function(req,file,cb)
    {

      const dirPath = path.join(__dirname, '../public/images');

      // Check if the directory exists, if not, create it
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
  
      cb(null, dirPath);

    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name)
        
    }
})


const upload = multer({storage:storage})


const blogRoute = Router();
//only admin routes
blogRoute.post("/createblog",upload.array('images', 10),createBlogValidation,createBlogController);
blogRoute.put("/updateblog",upload.array('images', 10),updateBlogsValidation,updateBlogController);
blogRoute.delete("/deleteblog",deleteBlogController);


blogRoute.post("/getblogs",authentication, readBlogController);
blogRoute.post("/addcomment",authentication,addComment);
blogRoute.put("/updatecomment",authentication,updateComment);
blogRoute.delete("/deletecomment",authentication,deleteComment);
blogRoute.post("/addlike",authentication,addLike);

module.exports= blogRoute