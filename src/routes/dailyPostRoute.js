const express = require('express');
const routerDailyPost = express()
const authentication = require('../middleware/authentication');

const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dirPath = path.join(__dirname, '../public/daily_posts');

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    cb(null, dirPath);
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name)

  }
})


const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000 * 1024
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
})


function checkFileType(file, cb) {
  const filetypes = /png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Images only with the Extension PNGs");
  }
}



const { createpost, updatepost, deletepost, getpost, getcomment, createcomment, updatecomment, deletecomment, createpostsaved, updatepostsaved, deletepostsaved, getpostsaved, getpost_like, createpost_like, updatepost_like, deletepost_like, daily_post_image, read_daily_post_image, update_daily_post_image, delete_daily_post_image, } = require('../controllers/dailyPostController');

//daily_post_routes
//Completed
routerDailyPost.post('/daily_posts', authentication, upload.single('outer_image'), createpost);
routerDailyPost.get('/daily_posts', getpost);
routerDailyPost.put('/daily_posts/:id', authentication, upload.single("outer_image"), updatepost);
routerDailyPost.delete('/daily_posts/:id', authentication, deletepost);



//daily_post_comments_routes
//Completed
routerDailyPost.get('/get/post_comments/:id', getcomment);
routerDailyPost.post('/create/post_comments', authentication, createcomment);
routerDailyPost.put('/update/post_comments/:id', authentication, updatecomment);
routerDailyPost.delete('/delete/post_comments/:id', authentication, deletecomment);



//daily_post_saved_routes
//Completed
routerDailyPost.post('/create/daily_posts_saved', authentication, createpostsaved);
routerDailyPost.put('/update/daily_posts_saved/:id', authentication, updatepostsaved);
routerDailyPost.delete('/delete/daily_posts_saved/:id', authentication, deletepostsaved);
routerDailyPost.get('/get/daily_posts_saved', getpostsaved);



//daily_post_likes_routes
routerDailyPost.get('/get/post_likes/:id', getpost_like);
routerDailyPost.post('/create/post_likes', authentication, createpost_like);
routerDailyPost.put('/update/post_likes/:id', authentication, updatepost_like);
routerDailyPost.delete('/delete/post_likes/:id', authentication, deletepost_like);



//daily_post_images_routes

routerDailyPost.post('/create/daily_post_images', authentication, upload.single('post_image'), daily_post_image);
routerDailyPost.get('/get/daily_post_images/:id', read_daily_post_image);
routerDailyPost.put('/put/daily_post_images/:id', authentication, upload.single("post_image"), update_daily_post_image);
routerDailyPost.delete('/delete/daily_post_images/:id', authentication, delete_daily_post_image);

//daily_post_image_routes
routerDailyPost.post("/daily_post_images", upload.array('images', 10), daily_post_image);
routerDailyPost.put("/daily_post_images", upload.array('images', 10), update_daily_post_image);
routerDailyPost.get('/daily_post_images/:id', read_daily_post_image);
routerDailyPost.delete('/daily_post_images/:id', delete_daily_post_image);




module.exports = routerDailyPost
