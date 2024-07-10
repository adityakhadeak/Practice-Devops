"use strict";

var _require = require('express'),
  Router = _require.Router;
var _require2 = require("../controllers/activeSessions.controllers.js"),
  activeSessionController = _require2.activeSessionController;
var multer = require("multer");
var path = require('path');
var route = Router();
var authentication = require('../middleware/authentication');
var fs = require('fs');
var _require3 = require('../helper/validation.js'),
  activeSessionMasterValidation = _require3.activeSessionMasterValidation;
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
route.post("/sessions", authentication, upload.array('images', 10), activeSessionMasterValidation, activeSessionController);
module.exports = route;