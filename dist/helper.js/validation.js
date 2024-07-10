"use strict";

var _require = require('express-validator'),
  check = _require.check;
var createReelValidation = [check('reel_title', 'Reel title is required').not().isEmpty().isString(), check('reel_description', 'Reel description is required').not().isEmpty().isString(), check('reel_hash_tags', 'Reel hash tags are required').not().isEmpty().isString(), check('reel_tags', 'Reel tags are required').not().isEmpty().isString(), check('reel_category', 'Reel category is required').not().isEmpty().isString(), check('created_by', 'Invalid created_by value').notEmpty().isInt(), check('updated_by', 'Invalid updated_by value').notEmpty().isInt(), check('reel', 'Reel video file is required').custom(function (value, _ref) {
  var req = _ref.req;
  if (!req.file) {
    throw new Error('Reel video file is required');
  }
  if (req.file.mimetype !== 'video/mp4') {
    throw new Error('Only MP4 files are allowed for reel videos');
  }
  if (req.file.size > 1024 * 1024) {
    // 1MB
    throw new Error('Reel video file size should not exceed 1MB');
  }
  return true;
})];
var updateReelValidation = [check('reel_title', 'Reel title is required').not().isEmpty().isString(), check('reel_description', 'Reel description is required').not().isEmpty().isString(), check('reel_hash_tags', 'Reel hash tags are required').not().isEmpty().isString(), check('reel_tags', 'Reel tags are required').not().isEmpty().isString(), check('reel_category', 'Reel category is required').not().isEmpty().isString(), check('updated_by', 'Invalid updated_by value').notEmpty().isInt(), check('reel', 'Reel video file is required').custom(function (value, _ref2) {
  var req = _ref2.req;
  if (!req.file) {
    throw new Error('Reel video file is required');
  }
  if (req.file.mimetype !== 'video/mp4') {
    throw new Error('Only MP4 files are allowed for reel videos');
  }
  if (req.file.size > 1024 * 1024) {
    // 1MB
    throw new Error('Reel video file size should not exceed 1MB');
  }
  return true;
})];
var activeSessionMasterValidation = [check('column_values[session_type]', 'Session Type is required').not().isEmpty().isString(), check('column_values[session_name]', 'Session Name is required').not().isEmpty().isString(), check('column_values[session_description]', 'Session Description are required').not().isEmpty().isString(), check('column_values[therapist]', 'Therapist Id are required').not().isEmpty().isString(), check('column_values[created_by]', 'Invalid created_by value').notEmpty().isInt(), check('column_values[updated_by]', 'Invalid updated_by value').notEmpty().isInt(), check('images', 'Thumbnails Images is required').custom(function (value, _ref3) {
  var req = _ref3.req;
  if (req.files.length != 2 || req.files.length == 0) {
    throw new Error("Upload Both the files");
  }
  req.files.forEach(function (file) {
    if (file.mimetype != 'image/png') {
      throw new Error('Only png images are allowed for Thumbnails');
    }
    if (file.size > 1024 * 1024) {
      // 1MB
      throw new Error('Reel video file size should not exceed 1MB');
    }
  });
  return true;
})];
var createBlogValidation = [check('blogs_title', 'Blogs title is required').not().isEmpty().isString(), check('blogs_description', 'Blogs description is required').not().isEmpty().isString(), check('blogs_hash_tags', 'Blogs hash tags are required').not().isEmpty().isString(), check('blogs_tags', 'Blogs tags are required').not().isEmpty().isString(), check('blogs_category', 'Blogs category is required').not().isEmpty().isString(), check('created_by', 'Invalid created_by value').notEmpty().isInt(), check('updated_by', 'Invalid updated_by value').notEmpty().isInt(), check('images', 'Blogs Thumbnail file is required').custom(function (value, _ref4) {
  var req = _ref4.req;
  if (req.files.length != 2 || req.files.length == 0) {
    throw new Error("Upload Both the files");
  }
  req.files.forEach(function (file) {
    if (file.mimetype != 'image/png') {
      throw new Error('Only png images are allowed for Thumbnails');
    }
    if (file.size > 1024 * 1024) {
      // 1MB
      throw new Error('Reel video file size should not exceed 1MB');
    }
  });
  return true;
})];
var updateBlogsValidation = [check('blogs_title', 'Blogs title is required').not().isEmpty().isString(), check('blogs_description', 'Blogs description is required').not().isEmpty().isString(), check('blogs_hash_tags', 'Blogs hash tags are required').not().isEmpty().isString(), check('blogs_tags', 'Blogs tags are required').not().isEmpty().isString(), check('blogs_category', 'Blogs category is required').not().isEmpty().isString(), check('updated_by', 'Invalid updated_by value').notEmpty().isInt(), check('images', 'Blogs video file is required').custom(function (value, _ref5) {
  var req = _ref5.req;
  if (req.files.length != 2 || req.files.length == 0) {
    throw new Error("Upload Both the files");
  }
  req.files.forEach(function (file) {
    if (file.mimetype != 'image/png') {
      throw new Error('Only png images are allowed for Thumbnails');
    }
    if (file.size > 1024 * 1024) {
      // 1MB
      throw new Error('Reel video file size should not exceed 1MB');
    }
  });
  return true;
})];
module.exports = {
  createReelValidation: createReelValidation,
  updateReelValidation: updateReelValidation,
  activeSessionMasterValidation: activeSessionMasterValidation,
  createBlogValidation: createBlogValidation,
  updateBlogsValidation: updateBlogsValidation
};