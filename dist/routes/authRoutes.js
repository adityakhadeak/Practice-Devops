"use strict";

var express = require('express');
var _require = require('../controllers/authRouteController.js'),
  registerUserInfo = _require.registerUserInfo,
  verifyLoginOTPController = _require.verifyLoginOTPController,
  verifyEmailOTPController = _require.verifyEmailOTPController,
  loginUser = _require.loginUser,
  generateEmailVerifyOtp = _require.generateEmailVerifyOtp;
var fs = require('fs');
var routerAuth = express();
var path = require('path');
var multer = require('multer');
var dynamicController = require('../controllers/dynamicController.js');
var _require2 = require('../helper/validation.js'),
  generateEmailVerifyOtpValidation = _require2.generateEmailVerifyOtpValidation,
  loginUserValidation = _require2.loginUserValidation;
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

// File type and size filter
var fileFilter = function fileFilter(req, file, cb) {
  var filetypes = /png/;
  var mimetype = filetypes.test(file.mimetype);
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only PNG files are allowed!'));
  }
};
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 500 * 1024
  },
  // 500KB
  fileFilter: fileFilter
});
routerAuth.post('/generate-otp-for-email-verify', generateEmailVerifyOtpValidation, generateEmailVerifyOtp);
routerAuth.post('/verifyemail', verifyEmailOTPController);
routerAuth.post('/registeruserinfo', upload.single('profile'), registerUserInfo);
routerAuth.post('/loginuser', loginUserValidation, loginUser);
routerAuth.post('/verifyotp', verifyLoginOTPController);

// routerAuth.post('/',dynamicController)

module.exports = routerAuth;