"use strict";

var _require = require('express'),
  Router = _require.Router;
var _require2 = require("../controllers/blog.controllers.js"),
  addLike = _require2.addLike,
  createBlogController = _require2.createBlogController,
  updateBlogController = _require2.updateBlogController,
  readBlogController = _require2.readBlogController,
  deleteBlogController = _require2.deleteBlogController,
  addComment = _require2.addComment,
  deleteComment = _require2.deleteComment,
  updateComment = _require2.updateComment;
var multer = require("multer");
var path = require('path');
var authentication = require('../middleware/authentication.js');
var fs = require('fs');
var _require3 = require('../helper/validation.js'),
  createBlogValidation = _require3.createBlogValidation,
  updateBlogsValidation = _require3.updateBlogsValidation;
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    var dirPath = path.join(__dirname, '../public/images');

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, {
        recursive: true
      });
    }
    cb(null, dirPath);
  },
  filename: function filename(req, file, cb) {
    var name = Date.now() + '-' + file.originalname;
    cb(null, name);
  }
});
var upload = multer({
  storage: storage
});
var blogRoute = Router();
//only admin routes
blogRoute.post("/createblog", upload.array('images', 10), createBlogValidation, createBlogController);
blogRoute.put("/updateblog", upload.array('images', 10), updateBlogsValidation, updateBlogController);
blogRoute["delete"]("/deleteblog", deleteBlogController);
blogRoute.post("/getblogs", authentication, readBlogController);
blogRoute.post("/addcomment", authentication, addComment);
blogRoute.put("/updatecomment", authentication, updateComment);
blogRoute["delete"]("/deletecomment", authentication, deleteComment);
blogRoute.post("/addlike", authentication, addLike);
module.exports = blogRoute;