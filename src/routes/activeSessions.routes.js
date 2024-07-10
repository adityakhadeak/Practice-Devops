const { Router } = require('express')
const { activeSessionController } = require("../controllers/activeSessions.controllers.js");
const multer = require("multer");
const path = require('path')
const route = Router();
const authentication = require('../middleware/authentication')
const fs = require('fs');
const { activeSessionMasterValidation } = require('../helper/validation.js');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dirPath = path.join(__dirname, '../public/images');

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
})





route.post("/sessions",authentication,upload.array('images', 10), activeSessionMasterValidation,activeSessionController);

module.exports = route