"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var pool = require("../database/db.js");
var _require = require('express-validator'),
  validationResult = _require.validationResult;
var path = require('path');
var fs = require('fs');
var date = new Date();
var createBlogController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var errors, blogs_outer_img, blogs_inner_img, _req$body, blogs_title, blogs_description, blogs_hash_tags, blogs_tags, blogs_category, author_name, created_by, updated_by, createBlogQuery, createBlogValues, createBlogResult, contentType1, fileExtention1, contentType2, fileExtention2, newFileName1, newFileName2, newPath1, newPath2, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          errors = validationResult(req);
          if (errors.isEmpty()) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            success: false,
            message: 'Errors',
            errors: errors.array()
          }));
        case 4:
          blogs_outer_img = "";
          blogs_inner_img = "";
          if (req.files && req.files.length > 0) {
            blogs_outer_img = req.files[0] ? req.files[0].path : null;
            blogs_inner_img = req.files[1] ? req.files[1].path : null;
          }
          _req$body = req.body, blogs_title = _req$body.blogs_title, blogs_description = _req$body.blogs_description, blogs_hash_tags = _req$body.blogs_hash_tags, blogs_tags = _req$body.blogs_tags, blogs_category = _req$body.blogs_category, author_name = _req$body.author_name, created_by = _req$body.created_by, updated_by = _req$body.updated_by;
          createBlogQuery = "INSERT INTO blogs(blogs_title, blogs_description, blogs_hash_tags, blogs_tags, blogs_outer_img, blogs_inner_img, blogs_category, author_name, created_by, updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *";
          createBlogValues = [blogs_title, blogs_description, blogs_hash_tags, blogs_tags, blogs_outer_img, blogs_inner_img, blogs_category, author_name, created_by, updated_by];
          _context.next = 12;
          return pool.query(createBlogQuery, createBlogValues);
        case 12:
          createBlogResult = _context.sent;
          contentType1 = req.files[0].mimetype;
          fileExtention1 = contentType1.slice(6);
          contentType2 = req.files[1].mimetype;
          fileExtention2 = contentType2.slice(6);
          newFileName1 = "outer".concat(date.getDate()).concat(date.getMonth() + 1).concat(date.getFullYear()).concat(createBlogResult.rows[0].id, ".").concat(fileExtention1);
          newFileName2 = "inner".concat(date.getDate()).concat(date.getMonth() + 1).concat(date.getFullYear()).concat(createBlogResult.rows[0].id, ".").concat(fileExtention2);
          newPath1 = path.join(__dirname, '../public/images', newFileName1);
          newPath2 = path.join(__dirname, '../public/images', newFileName2);
          fs.renameSync(path.join(__dirname, '../public/images', req.files[0].filename), newPath1);
          fs.renameSync(path.join(__dirname, '../public/images', req.files[1].filename), newPath2);
          _context.next = 25;
          return pool.query('UPDATE blogs SET blogs_outer_img=$1, blogs_inner_img=$2 where id=$3 RETURNING *', [newFileName1, newFileName2, createBlogResult.rows[0].id]);
        case 25:
          result = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Blog Successfully created",
            data: result.rows
          }));
        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            message: "Internal Server Error"
          });
        case 33:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 29]]);
  }));
  return function createBlogController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateBlogController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var errors, blogs_outer_img, blogs_inner_img, _req$body2, blogs_title, blogs_description, blogs_hash_tags, blogs_tags, blogs_category, author_name, updated_by, id, getBlog, contentType1, fileExtention1, contentType2, fileExtention2, newFileName1, newFileName2, newPath1, newPath2, updateBlogQuery, updateBlogValues, updateBlogResult;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          errors = validationResult(req);
          if (errors.isEmpty()) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            success: false,
            message: 'Errors',
            errors: errors.array()
          }));
        case 4:
          blogs_outer_img = "";
          blogs_inner_img = "";
          if (req.files && req.files.length > 0) {
            blogs_outer_img = req.files[0] ? req.files[0].path : null;
            blogs_inner_img = req.files[1] ? req.files[1].path : null;
          }
          _req$body2 = req.body, blogs_title = _req$body2.blogs_title, blogs_description = _req$body2.blogs_description, blogs_hash_tags = _req$body2.blogs_hash_tags, blogs_tags = _req$body2.blogs_tags, blogs_category = _req$body2.blogs_category, author_name = _req$body2.author_name, updated_by = _req$body2.updated_by, id = _req$body2.id;
          _context2.next = 10;
          return pool.query('SELECT blogs_outer_img, blogs_inner_img FROM blogs WHERE id=$1', [id]);
        case 10:
          getBlog = _context2.sent;
          contentType1 = req.files[0].mimetype;
          fileExtention1 = contentType1.slice(6);
          contentType2 = req.files[1].mimetype;
          fileExtention2 = contentType2.slice(6);
          newFileName1 = "outer".concat(date.getDate()).concat(date.getMonth() + 1).concat(date.getFullYear()).concat(id, ".").concat(fileExtention1);
          newFileName2 = "inner".concat(date.getDate()).concat(date.getMonth() + 1).concat(date.getFullYear()).concat(id, ".").concat(fileExtention2);
          newPath1 = path.join(__dirname, '../public/images', newFileName1);
          newPath2 = path.join(__dirname, '../public/images', newFileName2);
          fs.unlinkSync(path.join(__dirname, '../public/images', getBlog.rows[0].blogs_outer_img));
          fs.unlinkSync(path.join(__dirname, '../public/images', getBlog.rows[0].blogs_inner_img));
          fs.renameSync(path.join(__dirname, '../public/images', req.files[0].filename), newPath1);
          fs.renameSync(path.join(__dirname, '../public/images', req.files[1].filename), newPath2);
          updateBlogQuery = "UPDATE blogs SET blogs_title=$1, blogs_description=$2, blogs_hash_tags=$3, blogs_tags=$4, blogs_outer_img=$5, blogs_inner_img=$6, blogs_category=$7, author_name=$8, updated_by=$9 WHERE id = $10 RETURNING *";
          updateBlogValues = [blogs_title, blogs_description, blogs_hash_tags, blogs_tags, newFileName1, newFileName2, blogs_category, author_name, updated_by, id];
          _context2.next = 27;
          return pool.query(updateBlogQuery, updateBlogValues);
        case 27:
          updateBlogResult = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            message: "Blog Successfully Updated",
            data: updateBlogResult.rows
          }));
        case 31:
          _context2.prev = 31;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            message: "Internal Server Error"
          });
        case 35:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 31]]);
  }));
  return function updateBlogController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteBlogController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var blog_id, result1, result2, result3;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          blog_id = req.body.blog_id;
          if (blog_id) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(302).json({
            success: false,
            message: "Id is required for deleting the Blog"
          }));
        case 4:
          _context3.next = 6;
          return pool.query("DELETE FROM blogs_likes WHERE blog_id=$1", [blog_id]);
        case 6:
          result1 = _context3.sent;
          _context3.next = 9;
          return pool.query("DELETE FROM blogs_comments WHERE blog_id=$1", [blog_id]);
        case 9:
          result2 = _context3.sent;
          _context3.next = 12;
          return pool.query("DELETE FROM blogs WHERE id=$1", [blog_id]);
        case 12:
          result3 = _context3.sent;
          if (!(result1.rowCount != 0 && result2.rowCount != 0 && result3.rowCount != 0 || result1.rowCount == 0 && result2.rowCount == 0 && result3.rowCount != 0 || result1.rowCount == 0 && result2.rowCount != 0 && result3.rowCount != 0 || result1.rowCount != 0 && result2.rowCount == 0 && result3.rowCount != 0)) {
            _context3.next = 17;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            message: "Blog deleted Successfully"
          }));
        case 17:
          return _context3.abrupt("return", res.status(200).json({
            success: false,
            message: "Id not Found"
          }));
        case 18:
          _context3.next = 24;
          break;
        case 20:
          _context3.prev = 20;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            success: false,
            message: "Internal Server Error"
          });
        case 24:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 20]]);
  }));
  return function deleteBlogController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var readBlogController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, limit, offset, user_id, data, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$body3 = req.body, limit = _req$body3.limit, offset = _req$body3.offset, user_id = _req$body3.user_id;
          if (!(user_id != req.user.user_id)) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            success: false,
            message: "Unauthorized wrong token"
          }));
        case 4:
          if (limit || offset) {
            _context6.next = 6;
            break;
          }
          return _context6.abrupt("return", res.status(302).json({
            success: false,
            message: "Limit and Offset is not given"
          }));
        case 6:
          data = [];
          _context6.next = 9;
          return pool.query("SELECT * FROM blogs ORDER BY created_at DESC LIMIT $1 OFFSET $2", [limit, offset]);
        case 9:
          result = _context6.sent;
          _context6.next = 12;
          return Promise.all(result.rows.map( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(blog) {
              var blogData, result1, result2;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    blogData = {
                      blog_data: {},
                      blog_likes: {},
                      blog_comments: []
                    };
                    blogData.blog_data = blog;
                    _context5.next = 4;
                    return pool.query("SELECT id FROM blogs_likes WHERE blog_id=$1 ", [blog.id]);
                  case 4:
                    result1 = _context5.sent;
                    blogData.blog_likes.likes_count = result1.rowCount;
                    _context5.next = 8;
                    return pool.query("SELECT * FROM blogs_comments WHERE blog_id=$1 AND comment_against_comment IS NULL", [blog.id]);
                  case 8:
                    result2 = _context5.sent;
                    _context5.next = 11;
                    return Promise.all(result2.rows.map( /*#__PURE__*/function () {
                      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(comment) {
                        var comments, result3;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                            case 0:
                              comments = {
                                top_level_comment: {},
                                comment_replies: []
                              };
                              comments.top_level_comment = comment;
                              _context4.next = 4;
                              return pool.query("SELECT * FROM blogs_comments WHERE blog_id=$1 AND comment_against_comment=$2 ", [blog.id, comment.id]);
                            case 4:
                              result3 = _context4.sent;
                              comments.comment_replies = result3.rows;
                              blogData.blog_comments.push(comments);
                            case 7:
                            case "end":
                              return _context4.stop();
                          }
                        }, _callee4);
                      }));
                      return function (_x10) {
                        return _ref6.apply(this, arguments);
                      };
                    }()));
                  case 11:
                    data.push(blogData);
                  case 12:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x9) {
              return _ref5.apply(this, arguments);
            };
          }()));
        case 12:
          res.status(200).json({
            success: true,
            result: {
              blog_count: data.length,
              all_blogs_data: data
            }
          });
          _context6.next = 19;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](0);
          console.error("Error in reading Blogs:", _context6.t0);
          res.status(500).json({
            success: false,
            message: "Internal Server Error"
          });
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 15]]);
  }));
  return function readBlogController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//ADD LIKE CONTROLLER BOTH ON THE SAME CONTROLLER
var addLike = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body4, blog_id, user_id, addLikeQuery, addLikeValue, addLikeResult, addBlogLikeQuery, addBlogLikeQueryValue, addBlogLikeQueryResult, query, values, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body4 = req.body, blog_id = _req$body4.blog_id, user_id = _req$body4.user_id;
          if (!(user_id != req.user.user_id)) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", res.status(401).json({
            success: false,
            message: "Unauthorized wrong token"
          }));
        case 4:
          if (blog_id || user_id) {
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return", res.status(302).json({
            success: false,
            message: "Ids are not provided"
          }));
        case 6:
          addLikeQuery = "SELECT id FROM blogs_likes WHERE blog_id=$1 AND user_id=$2";
          addLikeValue = [blog_id, user_id];
          _context7.next = 10;
          return pool.query(addLikeQuery, addLikeValue);
        case 10:
          addLikeResult = _context7.sent;
          if (!(addLikeResult.rowCount == 0)) {
            _context7.next = 19;
            break;
          }
          addBlogLikeQuery = "INSERT INTO blogs_likes (blog_id,user_id,last_updated_at) VALUES ($1,$2,$3) RETURNING *";
          addBlogLikeQueryValue = [blog_id, user_id, date];
          _context7.next = 16;
          return pool.query(addBlogLikeQuery, addBlogLikeQueryValue);
        case 16:
          addBlogLikeQueryResult = _context7.sent;
          _context7.next = 24;
          break;
        case 19:
          query = "DELETE FROM blogs_likes WHERE blog_id=$1 AND user_id=$2";
          values = [blog_id, user_id];
          _context7.next = 23;
          return pool.query(query, values);
        case 23:
          result = _context7.sent;
        case 24:
          res.status(201).json({
            success: true,
            message: "Like updated successfully"
          });
          _context7.next = 31;
          break;
        case 27:
          _context7.prev = 27;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          res.status(500).json({
            message: "Internal Server Error"
          });
        case 31:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 27]]);
  }));
  return function addLike(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

//COMMENTS CONTROLLERS
var addComment = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body5, blog_id, user_id, comment, comment_against_comment, created_by, updated_by, query1, values1, result1;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$body5 = req.body, blog_id = _req$body5.blog_id, user_id = _req$body5.user_id, comment = _req$body5.comment, comment_against_comment = _req$body5.comment_against_comment, created_by = _req$body5.created_by, updated_by = _req$body5.updated_by;
          if (!(user_id != req.user.user_id)) {
            _context8.next = 4;
            break;
          }
          return _context8.abrupt("return", res.status(401).json({
            success: false,
            message: "Unauthorized wrong token"
          }));
        case 4:
          query1 = "INSERT INTO blogs_comments (blog_id,user_id,comment,comment_against_comment, created_by, updated_by) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *";
          values1 = [blog_id, user_id, comment, comment_against_comment, created_by, updated_by];
          _context8.next = 8;
          return pool.query(query1, values1);
        case 8:
          result1 = _context8.sent;
          res.status(201).json({
            success: true,
            message: "Comment added successfully",
            data: result1.rows
          });
          _context8.next = 16;
          break;
        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          res.status(500).json({
            message: "Internal Server Error"
          });
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 12]]);
  }));
  return function addComment(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteComment = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body6, comment_id, user_id, result1, result2;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$body6 = req.body, comment_id = _req$body6.comment_id, user_id = _req$body6.user_id;
          if (!(user_id != req.user.user_id)) {
            _context9.next = 4;
            break;
          }
          return _context9.abrupt("return", res.status(401).json({
            success: false,
            message: "Unauthorized wrong token"
          }));
        case 4:
          _context9.next = 6;
          return pool.query("DELETE FROM blogs_comments WHERE comment_against_comment=$1", [comment_id]);
        case 6:
          result1 = _context9.sent;
          _context9.next = 9;
          return pool.query("DELETE FROM blogs_comments WHERE id=$1", [comment_id]);
        case 9:
          result2 = _context9.sent;
          res.status(200).json({
            success: true,
            message: "Comment delete successfully"
          });
          _context9.next = 17;
          break;
        case 13:
          _context9.prev = 13;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          res.status(500).json({
            message: "Internal Server Error"
          });
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 13]]);
  }));
  return function deleteComment(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();
var updateComment = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body7, id, comment, user_id, result1, result2;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _req$body7 = req.body, id = _req$body7.comment_id, comment = _req$body7.comment, user_id = _req$body7.user_id;
          if (!(user_id != req.user.user_id)) {
            _context10.next = 4;
            break;
          }
          return _context10.abrupt("return", res.status(401).json({
            success: false,
            message: "Unauthorized wrong token"
          }));
        case 4:
          _context10.next = 6;
          return pool.query('SELECT * FROM blogs_comments WHERE id=$1', [id]);
        case 6:
          result1 = _context10.sent;
          if (!(result1.rows[0].user_id != user_id)) {
            _context10.next = 9;
            break;
          }
          return _context10.abrupt("return", res.status(401).json({
            success: "false",
            message: "Wrong user updating the comments"
          }));
        case 9:
          _context10.next = 11;
          return pool.query('UPDATE blogs_comments SET comment=$1, updated_at=$2, updated_by=$3 WHERE id=$4', [comment, date, user_id, id]);
        case 11:
          result2 = _context10.sent;
          res.status(200).json({
            success: true,
            message: "Comment updated successfully"
          });
          _context10.next = 19;
          break;
        case 15:
          _context10.prev = 15;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          res.status(500).json({
            message: "Internal Server Error"
          });
        case 19:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 15]]);
  }));
  return function updateComment(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();
module.exports = {
  createBlogController: createBlogController,
  readBlogController: readBlogController,
  deleteBlogController: deleteBlogController,
  updateBlogController: updateBlogController,
  addComment: addComment,
  updateComment: updateComment,
  deleteComment: deleteComment,
  addLike: addLike
};