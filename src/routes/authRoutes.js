const express=require('express')
const { registerUserInfo, verifyLoginOTPController, verifyEmailOTPController, loginUser, generateEmailVerifyOtp } = require('../controllers/authRouteController.js')
const fs = require('fs')

const routerAuth = express()

const path=require('path')
const multer= require('multer')
const dynamicController = require('../controllers/dynamicController.js')
const { generateEmailVerifyOtpValidation, loginUserValidation } = require('../helper/validation.js')

const storage=multer.diskStorage({
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
        const name=Date.now()+'-'+file.originalname;
        cb(null,name)
        
    }
})

// File type and size filter
const fileFilter = (req, file, cb) => {
    const filetypes = /png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Only PNG files are allowed!'));
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 500 * 1024 }, // 500KB
    fileFilter: fileFilter
});
routerAuth.post('/generate-otp-for-email-verify',generateEmailVerifyOtpValidation,generateEmailVerifyOtp)

routerAuth.post('/verifyemail',verifyEmailOTPController)

routerAuth.post('/registeruserinfo',upload.single('profile'),registerUserInfo)

routerAuth.post('/loginuser',loginUserValidation,loginUser)

routerAuth.post('/verifyotp',verifyLoginOTPController)


// routerAuth.post('/',dynamicController)


module.exports=routerAuth