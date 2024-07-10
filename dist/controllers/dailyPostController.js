"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var pool = require('../database/db.js');
var currentTimestamp = new Date();
//Check Done
var createpost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, post_title, post_description, post_hashtags, post_tags, post_category, created_by, updated_by, post_outer_image, query, values, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, post_title = _req$body.post_title, post_description = _req$body.post_description, post_hashtags = _req$body.post_hashtags, post_tags = _req$body.post_tags, post_category = _req$body.post_category, created_by = _req$body.created_by, updated_by = _req$body.updated_by;
          post_outer_image = req.file.path;
          query = 'INSERT INTO daily_posts (post_title, post_description, post_hashtags, post_tags, post_outer_image, post_category,  created_by,  updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
          values = [post_title, post_description, post_hashtags, post_tags, post_outer_image, post_category, created_by, updated_by];
          _context.next = 7;
          return pool.query(query, values);
        case 7:
          result = _context.sent;
          res.status(201).json({
            success: true,
            message: "Post created successfully",
            post: result.rows[0]
          });
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            success: false,
            message: "Internal Server Error ".concat(_context.t0.message)
          });
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function createpost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//Check Done
var updatepost = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, _req$body2, post_title, post_description, post_hashtags, post_tags, post_category, updated_by, post_outer_image, updated_at, query, values, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, post_title = _req$body2.post_title, post_description = _req$body2.post_description, post_hashtags = _req$body2.post_hashtags, post_tags = _req$body2.post_tags, post_category = _req$body2.post_category, updated_by = _req$body2.updated_by;
          post_outer_image = req.file.path;
          updated_at = currentTimestamp;
          query = 'UPDATE daily_posts SET post_title = $1, post_description = $2, post_hashtags = $3, post_tags = $4, post_outer_image = $5, post_category = $6,  updated_at=$7,updated_by = $8 WHERE id = $9 RETURNING *';
          values = [post_title, post_description, post_hashtags, post_tags, post_outer_image, post_category, updated_at, updated_by, id];
          _context2.next = 9;
          return pool.query(query, values);
        case 9:
          result = _context2.sent;
          res.status(200).json({
            success: true,
            message: "post updated successfully",
            post: result.rows[0]
          });
          _context2.next = 17;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context2.t0.message)
          });
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function updatepost(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//Check Done
var deletepost = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, query, values;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          query = 'DELETE FROM daily_posts WHERE id = $1';
          values = [id];
          _context3.next = 6;
          return pool.query(query, values);
        case 6:
          res.status(200).json({
            success: true,
            message: "post deleted successfully"
          });
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context3.t0.message)
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function deletepost(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getpost = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, limit, offset, data, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$body3 = req.body, limit = _req$body3.limit, offset = _req$body3.offset;
          if (limit || offset) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(302).json({
            success: false,
            message: "Limit and Offset is not given"
          }));
        case 4:
          data = [];
          _context6.next = 7;
          return pool.query("SELECT * FROM daily_posts ORDER BY id DESC LIMIT $1 OFFSET $2", [limit, offset]);
        case 7:
          result = _context6.sent;
          _context6.next = 10;
          return Promise.all(result.rows.map( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(post) {
              var postData, result1, result2;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    postData = {
                      post_data: {},
                      post_likes: {},
                      post_comments: []
                    };
                    postData.post_data = post;
                    _context5.next = 4;
                    return pool.query("SELECT id FROM post_likes WHERE post_id=$1 ", [post.id]);
                  case 4:
                    result1 = _context5.sent;
                    postData.post_likes.likes_count = result1.rowCount;
                    _context5.next = 8;
                    return pool.query("SELECT * FROM post_comments WHERE post_id=$1 AND comment_against_comment IS NULL", [post.id]);
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
                              return pool.query("SELECT * FROM post_comments WHERE post_id=$1 AND comment_against_comment=$2 ", [post.id, comment.id]);
                            case 4:
                              result3 = _context4.sent;
                              comments.comment_replies = result3.rows;
                              postData.post_comments.push(comments);
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
                    data.push(postData);
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
        case 10:
          res.status(200).json({
            success: true,
            result: {
              post_count: data.length,
              all_post_data: data
            }
          });
          _context6.next = 17;
          break;
        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](0);
          console.error("Error in reading :", _context6.t0);
          res.status(500).json({
            success: false,
            message: "Internal Server Error"
          });
        case 17:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 13]]);
  }));
  return function getpost(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//Daily Comments on the Post
//Check Done
var createcomment = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body4, post_id, user_id, comment, comment_against_comment, created_by, updated_by, query, values, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body4 = req.body, post_id = _req$body4.post_id, user_id = _req$body4.user_id, comment = _req$body4.comment, comment_against_comment = _req$body4.comment_against_comment, created_by = _req$body4.created_by, updated_by = _req$body4.updated_by;
          query = 'INSERT INTO post_comments (post_id,user_id,comment,comment_against_comment,created_by,updated_by) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
          values = [post_id, user_id, comment, comment_against_comment, created_by, updated_by];
          _context7.next = 6;
          return pool.query(query, values);
        case 6:
          result = _context7.sent;
          res.status(201).json({
            success: true,
            message: "post created successfully",
            doctor: result.rows[0]
          });
          _context7.next = 14;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context7.t0.message)
          });
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function createcomment(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

//Check Done
var updatecomment = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, _req$body5, post_id, user_id, comment, comment_against_comment, updated_by, updated_at, query, values, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          id = req.params.id;
          _req$body5 = req.body, post_id = _req$body5.post_id, user_id = _req$body5.user_id, comment = _req$body5.comment, comment_against_comment = _req$body5.comment_against_comment, updated_by = _req$body5.updated_by;
          updated_at = currentTimestamp;
          query = 'UPDATE post_comments SET post_id = $1, user_id = $2, comment = $3, comment_against_comment = $4, updated_at=$5, updated_by = $6 WHERE id = $7 RETURNING *';
          values = [post_id, user_id, comment, comment_against_comment, updated_at, updated_by, id];
          _context8.next = 8;
          return pool.query(query, values);
        case 8:
          result = _context8.sent;
          res.status(200).json({
            success: true,
            message: "post updated successfully",
            doctor: result.rows[0]
          });
          _context8.next = 16;
          break;
        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context8.t0.message)
          });
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 12]]);
  }));
  return function updatecomment(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

//Foregin Constraints Fail it to delete the comment
var deletecomment = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var id, query, values;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          id = req.params.id;
          query = 'DELETE FROM post_comments WHERE id = $1';
          values = [id];
          _context9.next = 6;
          return pool.query(query, values);
        case 6:
          res.status(200).json({
            success: true,
            message: "post deleted successfully"
          });
          _context9.next = 13;
          break;
        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context9.t0.message)
          });
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 9]]);
  }));
  return function deletecomment(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

//Check Done
var getcomment = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var query, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          query = 'SELECT * FROM post_comments ORDER BY id ASC';
          _context10.next = 4;
          return pool.query(query);
        case 4:
          result = _context10.sent;
          res.status(200).json({
            success: true,
            message: "post fetched successfully",
            data: result.rows
          });
          _context10.next = 12;
          break;
        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context10.t0.message)
          });
        case 12:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 8]]);
  }));
  return function getcomment(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();
var createpostsaved = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body6, post_id, user_id, saved_date, result1, query, values, result;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _req$body6 = req.body, post_id = _req$body6.post_id, user_id = _req$body6.user_id;
          saved_date = currentTimestamp;
          _context11.next = 5;
          return pool.query('SELECT * FROM daily_post_saved WHERE post_id=$1', [post_id]);
        case 5:
          result1 = _context11.sent;
          if (!(result1.rowCount != 0)) {
            _context11.next = 8;
            break;
          }
          return _context11.abrupt("return", res.status(409).json({
            success: false,
            message: 'Post already saved'
          }));
        case 8:
          query = 'INSERT INTO daily_post_saved (post_id, user_id, saved_date) VALUES ($1, $2, $3) RETURNING *';
          values = [post_id, user_id, saved_date];
          _context11.next = 12;
          return pool.query(query, values);
        case 12:
          result = _context11.sent;
          res.status(201).json({
            success: true,
            message: "post saved successfully",
            post: result.rows[0]
          });
          _context11.next = 20;
          break;
        case 16:
          _context11.prev = 16;
          _context11.t0 = _context11["catch"](0);
          console.log(_context11.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context11.t0.message)
          });
        case 20:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 16]]);
  }));
  return function createpostsaved(_x19, _x20) {
    return _ref11.apply(this, arguments);
  };
}();

//Check Done
var updatepostsaved = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var id, _req$body7, post_id, user_id, saved_date, query, values, result;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          id = req.params.id;
          _req$body7 = req.body, post_id = _req$body7.post_id, user_id = _req$body7.user_id;
          saved_date = currentTimestamp;
          query = 'UPDATE daily_post_saved SET post_id = $1, user_id = $2, saved_date = $3 WHERE id = $4 RETURNING *';
          values = [post_id, user_id, saved_date, id];
          _context12.next = 8;
          return pool.query(query, values);
        case 8:
          result = _context12.sent;
          res.status(200).json({
            success: true,
            message: "post saved updated successfully",
            post: result.rows[0]
          });
          _context12.next = 16;
          break;
        case 12:
          _context12.prev = 12;
          _context12.t0 = _context12["catch"](0);
          console.log(_context12.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context12.t0.message)
          });
        case 16:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 12]]);
  }));
  return function updatepostsaved(_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}();

//Check Done
var deletepostsaved = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var id, query, values;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          id = req.params.id;
          query = 'DELETE FROM daily_post_saved WHERE id = $1';
          values = [id];
          _context13.next = 6;
          return pool.query(query, values);
        case 6:
          res.status(200).json({
            success: true,
            message: "post saved deleted successfully"
          });
          _context13.next = 13;
          break;
        case 9:
          _context13.prev = 9;
          _context13.t0 = _context13["catch"](0);
          console.log(_context13.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context13.t0.message)
          });
        case 13:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 9]]);
  }));
  return function deletepostsaved(_x23, _x24) {
    return _ref13.apply(this, arguments);
  };
}();

//Check Done
var getpostsaved = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var query, result;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          query = 'SELECT * FROM daily_post_saved ORDER BY id ASC';
          _context14.next = 4;
          return pool.query(query);
        case 4:
          result = _context14.sent;
          res.status(200).json({
            success: true,
            message: "post saved fetched successfully",
            post: result.rows
          });
          _context14.next = 12;
          break;
        case 8:
          _context14.prev = 8;
          _context14.t0 = _context14["catch"](0);
          console.log(_context14.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context14.t0.message)
          });
        case 12:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 8]]);
  }));
  return function getpostsaved(_x25, _x26) {
    return _ref14.apply(this, arguments);
  };
}();

//Check Done
var daily_post_image = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var post_id, post_image, query, value, result;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          post_id = req.body.post_id;
          post_image = req.file.path;
          query = "INSERT INTO daily_post_images (post_id, post_image) VALUES ($1,$2) RETURNING *";
          value = [post_id, post_image];
          _context15.next = 7;
          return pool.query(query, value);
        case 7:
          result = _context15.sent;
          res.status(201).json({
            success: true,
            message: "Post Image created successfully",
            post: result.rows[0]
          });
          _context15.next = 15;
          break;
        case 11:
          _context15.prev = 11;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context15.t0.message)
          });
        case 15:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 11]]);
  }));
  return function daily_post_image(_x27, _x28) {
    return _ref15.apply(this, arguments);
  };
}();

//Check Done
var update_daily_post_image = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var post_id, post_image, id, updatePostImage, query, values, result;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          post_id = req.body.post_id;
          post_image = req.file.path;
          id = req.params.id;
          _context16.next = 6;
          return pool.query('SELECT * FROM daily_post_images WHERE id=$1', [id]);
        case 6:
          updatePostImage = _context16.sent;
          if (updatePostImage.rows.length) {
            _context16.next = 9;
            break;
          }
          return _context16.abrupt("return", res.status(404).json({
            success: false,
            message: "daily_post_image not found"
          }));
        case 9:
          query = 'UPDATE daily_post_images SET post_image=$1, post_id=$2 WHERE id=$3 RETURNING *';
          values = [post_image, post_id, id];
          _context16.next = 13;
          return pool.query(query, values);
        case 13:
          result = _context16.sent;
          res.status(200).json({
            success: true,
            message: "daily_post_image updated successfully",
            daily_post_image: result.rows[0]
          });
          _context16.next = 21;
          break;
        case 17:
          _context16.prev = 17;
          _context16.t0 = _context16["catch"](0);
          console.log(_context16.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context16.t0.message)
          });
        case 21:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 17]]);
  }));
  return function update_daily_post_image(_x29, _x30) {
    return _ref16.apply(this, arguments);
  };
}();

//Check Done
var delete_daily_post_image = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var id, deletePostImage;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          id = req.params.id;
          _context17.next = 4;
          return pool.query('DELETE FROM daily_post_images WHERE id=$1 RETURNING *', [id]);
        case 4:
          deletePostImage = _context17.sent;
          if (deletePostImage.rows.length) {
            _context17.next = 7;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            success: false,
            message: "daily_post_image not found"
          }));
        case 7:
          res.status(200).json({
            success: true,
            message: "daily_post_image deleted successfully"
          });
          _context17.next = 14;
          break;
        case 10:
          _context17.prev = 10;
          _context17.t0 = _context17["catch"](0);
          console.log(_context17.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context17.t0.message)
          });
        case 14:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 10]]);
  }));
  return function delete_daily_post_image(_x31, _x32) {
    return _ref17.apply(this, arguments);
  };
}();

//Check Done
var read_daily_post_image = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var id, query, values, result;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          id = req.params.id;
          query = 'SELECT * FROM daily_post_images WHERE post_id=$1';
          values = [id];
          _context18.next = 6;
          return pool.query(query, values);
        case 6:
          result = _context18.sent;
          if (result.rows.length) {
            _context18.next = 9;
            break;
          }
          return _context18.abrupt("return", res.status(404).json({
            success: false,
            message: "daily_post_image not found"
          }));
        case 9:
          res.status(200).json({
            success: true,
            daily_post_image: result.rows[0]
          });
          _context18.next = 16;
          break;
        case 12:
          _context18.prev = 12;
          _context18.t0 = _context18["catch"](0);
          console.log(_context18.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context18.t0.message)
          });
        case 16:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 12]]);
  }));
  return function read_daily_post_image(_x33, _x34) {
    return _ref18.apply(this, arguments);
  };
}();

//daily_post_likes
//Check Done
var createpost_like = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var _req$body8, post_id, user_id, last_updated_at, query, values, result;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _req$body8 = req.body, post_id = _req$body8.post_id, user_id = _req$body8.user_id;
          last_updated_at = currentTimestamp;
          query = 'INSERT INTO posts_likes (post_id,user_id,last_updated_at) VALUES ($1, $2, $3) RETURNING *';
          values = [post_id, user_id, last_updated_at];
          _context19.next = 7;
          return pool.query(query, values);
        case 7:
          result = _context19.sent;
          res.status(201).json({
            success: true,
            message: "Post Like created successfully",
            data: result.rows[0]
          });
          _context19.next = 15;
          break;
        case 11:
          _context19.prev = 11;
          _context19.t0 = _context19["catch"](0);
          console.log(_context19.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context19.t0.message)
          });
        case 15:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 11]]);
  }));
  return function createpost_like(_x35, _x36) {
    return _ref19.apply(this, arguments);
  };
}();
var updatepost_like = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var id, _req$body9, post_id, user_id, last_updated_at, query, values, result;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          id = req.params.id;
          _req$body9 = req.body, post_id = _req$body9.post_id, user_id = _req$body9.user_id;
          last_updated_at = currentTimestamp;
          query = 'UPDATE posts_likes SET post_id = $1, user_id = $2, last_updated_at =$3 WHERE id = $4 RETURNING *';
          values = [post_id, user_id, last_updated_at, id];
          _context20.next = 8;
          return pool.query(query, values);
        case 8:
          result = _context20.sent;
          if (result.rowCount == 0) {
            res.status(200).json({
              success: false,
              message: "Id not found"
            });
          }
          res.status(200).json({
            success: true,
            message: "Post Like Updated successfully",
            data: result.rows[0]
          });
          _context20.next = 17;
          break;
        case 13:
          _context20.prev = 13;
          _context20.t0 = _context20["catch"](0);
          console.log(_context20.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context20.t0.message)
          });
        case 17:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 13]]);
  }));
  return function updatepost_like(_x37, _x38) {
    return _ref20.apply(this, arguments);
  };
}();

//Check Done
var deletepost_like = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var id, query, values;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          id = req.params.id;
          query = 'DELETE FROM posts_likes WHERE id = $1';
          values = [id];
          _context21.next = 6;
          return pool.query(query, values);
        case 6:
          res.status(200).json({
            success: true,
            message: "Post Like deleted successfully"
          });
          _context21.next = 13;
          break;
        case 9:
          _context21.prev = 9;
          _context21.t0 = _context21["catch"](0);
          console.log(_context21.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context21.t0.message)
          });
        case 13:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 9]]);
  }));
  return function deletepost_like(_x39, _x40) {
    return _ref21.apply(this, arguments);
  };
}();

//Check Done
var getpost_like = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var id, query, result;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          id = req.params.id;
          query = 'SELECT * FROM posts_likes WHERE id = $1';
          _context22.next = 5;
          return pool.query(query, [id]);
        case 5:
          result = _context22.sent;
          if (!(result.rows.length === 0)) {
            _context22.next = 8;
            break;
          }
          return _context22.abrupt("return", res.status(404).json({
            success: false,
            message: "not found"
          }));
        case 8:
          res.status(200).json({
            success: true,
            message: "fetched successfully",
            data: result.rows[0]
          });
          _context22.next = 15;
          break;
        case 11:
          _context22.prev = 11;
          _context22.t0 = _context22["catch"](0);
          console.error(_context22.t0);
          res.status(500).json({
            success: false,
            message: "Internal server Error ".concat(_context22.t0.message)
          });
        case 15:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 11]]);
  }));
  return function getpost_like(_x41, _x42) {
    return _ref22.apply(this, arguments);
  };
}();
module.exports = {
  createcomment: createcomment,
  updatecomment: updatecomment,
  deletecomment: deletecomment,
  getcomment: getcomment,
  createpost: createpost,
  updatepost: updatepost,
  deletepost: deletepost,
  getpost: getpost,
  createpostsaved: createpostsaved,
  updatepostsaved: updatepostsaved,
  deletepostsaved: deletepostsaved,
  getpostsaved: getpostsaved,
  daily_post_image: daily_post_image,
  update_daily_post_image: update_daily_post_image,
  delete_daily_post_image: delete_daily_post_image,
  read_daily_post_image: read_daily_post_image,
  createpost_like: createpost_like,
  updatepost_like: updatepost_like,
  deletepost_like: deletepost_like,
  getpost_like: getpost_like
};