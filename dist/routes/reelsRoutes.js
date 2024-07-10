"use strict";

var express = require('express');
var _require = require('../controllers/reelsController'),
  fetchreels = _require.fetchreels,
  addreel = _require.addreel,
  addcomment = _require.addcomment,
  handlelike = _require.handlelike,
  updatecomment = _require.updatecomment,
  deletecomment = _require.deletecomment,
  deletereel = _require.deletereel,
  updatereel = _require.updatereel;
var path = require('path');
var fs = require('fs');
var routerReels = express();
var multer = require('multer');
var _require2 = require('../helper/validation'),
  createReelValidation = _require2.createReelValidation,
  updateReelValidation = _require2.updateReelValidation;
var authentication = require('../middleware/authentication');
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    var dirPath = path.join(__dirname, '../public/reels');

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

//only admin routes
routerReels.post('/addreel', upload.single('reel'), createReelValidation, addreel);
routerReels.put('/updatereel', upload.single('reel'), updateReelValidation, updatereel);
routerReels["delete"]('/deletereel', deletereel);
routerReels.get('/fetchreels', authentication, fetchreels);
routerReels.post('/addcomment', authentication, addcomment);
routerReels.post('/handlelike', authentication, handlelike);
routerReels.put('/updatecomment', authentication, updatecomment);
routerReels["delete"]('/deletecomment', authentication, deletecomment);
module.exports = routerReels;