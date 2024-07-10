
const { check, validationResult } = require('express-validator');


const generateEmailVerifyOtpValidation = async (req, res, next) => {
    const { email, mobile } = req.body;

    if (email) {
        await check('email', 'Enter a valid email address').isEmail().run(req)
    } else if (mobile) {
        await check('mobile', 'Enter a valid mobile number').isMobilePhone().run(req)
    } else {
        return res.status(400).json({
            success: false,
            message: 'Either email or mobile number must be provided',
        })
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation Errors',
            errors: errors.array(),
        })
    }

    next();
}

const loginUserValidation = async (req, res, next) => {
    const { login_type } = req.body

    if (login_type === 'email') {
        await check('email', 'Email is required').notEmpty().run(req)
        await check('email', 'Enter a valid email address').isEmail().run(req)
    } else if (login_type === 'mobile') {
        await check('mobile', 'Mobile number is required').notEmpty().run(req)
        await check('mobile', 'Enter a valid mobile number').isMobilePhone().run(req)
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation Errors',
            errors: errors.array(),
        });
    }

    next();
};

const createReelValidation = [
    check('reel_title', 'Reel title is required').not().isEmpty().isString(),
    check('reel_description', 'Reel description is required').not().isEmpty().isString(),
    check('reel_hash_tags', 'Reel hash tags are required').not().isEmpty().isString(),
    check('reel_tags', 'Reel tags are required').not().isEmpty().isString(),
    check('reel_category', 'Reel category is required').not().isEmpty().isString(),
    check('created_by', 'Invalid created_by value').notEmpty().isInt(),
    check('updated_by', 'Invalid updated_by value').notEmpty().isInt(),
    check('reel', 'Reel video file is required').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Reel video file is required');
        }
        
        if (req.file.mimetype !== 'video/mp4') {

            throw new Error('Only MP4 files are allowed for reel videos');
        }
        if (req.file.size > 1024 * 1024) { // 1MB
            throw new Error('Reel video file size should not exceed 1MB');
        }
        return true;
    })

];

const updateReelValidation = [
    check('reel_title', 'Reel title is required').not().isEmpty().isString(),
    check('reel_description', 'Reel description is required').not().isEmpty().isString(),
    check('reel_hash_tags', 'Reel hash tags are required').not().isEmpty().isString(),
    check('reel_tags', 'Reel tags are required').not().isEmpty().isString(),
    check('reel_category', 'Reel category is required').not().isEmpty().isString(),
    check('updated_by', 'Invalid updated_by value').notEmpty().isInt(),
    check('reel', 'Reel video file is required').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Reel video file is required');
        }
        
        if (req.file.mimetype !== 'video/mp4') {

            throw new Error('Only MP4 files are allowed for reel videos');
        }
        if (req.file.size > 1024 * 1024) { // 1MB
            throw new Error('Reel video file size should not exceed 1MB');
        }
        return true;
    })

];

const activeSessionMasterValidation = [
    check('column_values[session_type]', 'Session Type is required').not().isEmpty().isString(),
    check('column_values[session_name]', 'Session Name is required').not().isEmpty().isString(),
    check('column_values[session_description]', 'Session Description are required').not().isEmpty().isString(),
    check('column_values[therapist]', 'Therapist Id are required').not().isEmpty().isString(),
    check('column_values[created_by]', 'Invalid created_by value').notEmpty().isInt(),
    check('column_values[updated_by]', 'Invalid updated_by value').notEmpty().isInt(),
    check('images', 'Thumbnails Images is required').custom((value, { req }) => {
        if(req.files.length != 2 || req.files.length == 0){
            throw new Error("Upload Both the files");
        }
        req.files.forEach(file => {
            if (file.mimetype != 'image/png') {
                throw new Error('Only png images are allowed for Thumbnails');
            }
            if (file.size > 1024 * 1024) { // 1MB
                throw new Error('Reel video file size should not exceed 1MB');
            }
        });
        
        return true;
    })
]


const createBlogValidation =[
    check('blogs_title', 'Blogs title is required').not().isEmpty().isString(),
    check('blogs_description', 'Blogs description is required').not().isEmpty().isString(),
    check('blogs_hash_tags', 'Blogs hash tags are required').not().isEmpty().isString(),
    check('blogs_tags', 'Blogs tags are required').not().isEmpty().isString(),
    check('blogs_category', 'Blogs category is required').not().isEmpty().isString(),
    check('created_by', 'Invalid created_by value').notEmpty().isInt(),
    check('updated_by', 'Invalid updated_by value').notEmpty().isInt(),
    check('images', 'Blogs Thumbnail file is required').custom((value, { req }) => {
        if(req.files.length != 2 || req.files.length == 0){
            throw new Error("Upload Both the files");
        }
        req.files.forEach(file => {
            if (file.mimetype != 'image/png') {
                throw new Error('Only png images are allowed for Thumbnails');
            }
            if (file.size > 1024 * 1024) { // 1MB
                throw new Error('Reel video file size should not exceed 1MB');
            }
        });
        
        return true;
    })

];
const updateBlogsValidation = [
    check('blogs_title', 'Blogs title is required').not().isEmpty().isString(),
    check('blogs_description', 'Blogs description is required').not().isEmpty().isString(),
    check('blogs_hash_tags', 'Blogs hash tags are required').not().isEmpty().isString(),
    check('blogs_tags', 'Blogs tags are required').not().isEmpty().isString(),
    check('blogs_category', 'Blogs category is required').not().isEmpty().isString(),
    check('updated_by', 'Invalid updated_by value').notEmpty().isInt(),
    check('images', 'Blogs video file is required').custom((value, { req }) => {
        if(req.files.length != 2 || req.files.length == 0){
            throw new Error("Upload Both the files");
        }
        req.files.forEach(file => {
            if (file.mimetype != 'image/png') {
                throw new Error('Only png images are allowed for Thumbnails');
            }
            if (file.size > 1024 * 1024) { // 1MB
                throw new Error('Reel video file size should not exceed 1MB');
            }
        });
        
        return true;
    })

];


const saveFCMTokenValidation=[
    check('user_id',"User ID required!").not().isEmpty(),
    check('token',"Token required!").not().isEmpty()
]

const sendNotificationToSpecificDeviceValidation=[
    check('registrationtoken','Registration token is required!').not().isEmpty(),
    check('title',"Title is required!").not().isEmpty(),
    check('body',"Body is required!").not().isEmpty()
]

const sendNotificationToMultipleDeviceValidation=[
    check('title',"Title is required!").not().isEmpty(),
    check('body',"Body is required!").not().isEmpty()
]
const sendNotificationToTopicsValidation=[
    check('topic',"Topic is required!").not().isEmpty(),
    check('title',"Title is required!").not().isEmpty(),
    check('body',"Body is required!").not().isEmpty()
]

const subscribe_unsubscribeToTopicValidation=[
    check('topic',"Topic is required!").not().isEmpty()
]

module.exports = { createReelValidation,updateReelValidation,activeSessionMasterValidation,createBlogValidation, updateBlogsValidation ,generateEmailVerifyOtpValidation,loginUserValidation,saveFCMTokenValidation,sendNotificationToSpecificDeviceValidation,sendNotificationToMultipleDeviceValidation,sendNotificationToTopicsValidation,subscribe_unsubscribeToTopicValidation};


