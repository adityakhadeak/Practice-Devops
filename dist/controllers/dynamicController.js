"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var pool = require('../database/db.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var sendMail = require('../helper/mailer.js');
var fs = require('fs');
var path = require('path');
var generateOtp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", Math.floor(100000 + Math.random() * 900000));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function generateOtp() {
    return _ref.apply(this, arguments);
  };
}();
var dynamicController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body, operation, table_name, column_values, _req$body$column_valu, email, otp, query1, values1, result1, _req$body$column_valu2, _email, _otp, _query, _values, _result, user_details, category, _query2, _values2, _result2, query2, values2, result2, data, email1, _query3, _values3, _result3, generatedOTP, _query4, _values4, _result4, msg, _req$body$column_valu3, login_type, _email2, mobile, ip, _query5, _values5, _result5, user_id, _generatedOTP, _query6, _values6, _result6, _msg, _req$body$column_valu4, _category, assesment_name, status, created_by, updated_by, _query7, _values7, _result7, _query8, _values8, _result8, _req$body$column_valu5, assesment_id, question, options, status1, created_by1, updated_by1, _query9, _values9, _result9, _query10, _values10, _result10, _question_id, optionsAdded, _req$body$column_valu6, question_id, option, is_correct, created_by2, updated_by2, _query11, _values11, _result11, _query12, _values12, _result12, id, _result13, question_ids, _result14, id1, _result15, id2, _result16, _req$body$column_valu7, name, _email3, gender, occupation, college_name, currentTimestamp, _query13, _values13, _result17, query3, values3, result3, occupation_id, query4, value4, result4, query5, values5, result5, college_id, query6, values6, result6, _req$body$column_valu8, _id, _category2, _assesment_name, _status, _updated_by, _query14, _values14, _result18, currentDate, _query15, _values15, _result19, _req$body$column_valu9, _id2, _question, _status2, _updated_by2, _query16, _values16, _result20, _currentDate, _query17, _values17, _result21, _req$body$column_valu10, _id3, _option, _is_correct, _updated_by3, _query18, _values18, _result22, _currentDate2, _query19, _values19, _result23;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body = req.body, operation = _req$body.operation, table_name = _req$body.table_name, column_values = _req$body.column_values;
          console.log(req.body.column_values);
          _context5.t0 = operation;
          _context5.next = _context5.t0 === "read" ? 5 : _context5.t0 === "insert" ? 84 : _context5.t0 === "delete" ? 220 : _context5.t0 === "update" ? 290 : 412;
          break;
        case 5:
          _context5.t1 = table_name;
          _context5.next = _context5.t1 === "user_registration" ? 8 : _context5.t1 === "user_login" ? 29 : _context5.t1 === "assesment_master" ? 53 : 80;
          break;
        case 8:
          _context5.prev = 8;
          //// 2nd step in user registration verifyEmailOTPController
          _req$body$column_valu = req.body.column_values, email = _req$body$column_valu.email, otp = _req$body$column_valu.otp;
          query1 = 'SELECT id FROM user_registration WHERE email = $1 AND otp = $2';
          values1 = [email, otp];
          _context5.next = 14;
          return pool.query(query1, values1);
        case 14:
          result1 = _context5.sent;
          if (!(result1.rowCount === 1)) {
            _context5.next = 21;
            break;
          }
          _context5.next = 18;
          return pool.query("UPDATE user_registration SET is_email_verified = $1 WHERE email = $2", [1, email]);
        case 18:
          res.status(200).json({
            success: true,
            message: 'Email verified successfully'
          });
          _context5.next = 22;
          break;
        case 21:
          res.status(400).json({
            success: false,
            message: 'Invalid OTP'
          });
        case 22:
          _context5.next = 28;
          break;
        case 24:
          _context5.prev = 24;
          _context5.t2 = _context5["catch"](8);
          console.log(_context5.t2.message);
          res.status(400).json({
            success: false,
            message: "Internal server error"
          });
        case 28:
          return _context5.abrupt("break", 83);
        case 29:
          _context5.prev = 29;
          // 2nd step of user login
          _req$body$column_valu2 = req.body.column_values, _email = _req$body$column_valu2.email, _otp = _req$body$column_valu2.otp;
          _query = 'SELECT user_id FROM user_login WHERE email = $1 AND otp = $2';
          _values = [_email, _otp];
          _context5.next = 35;
          return pool.query(_query, _values);
        case 35:
          _result = _context5.sent;
          if (!(_result.rowCount === 1)) {
            _context5.next = 45;
            break;
          }
          _context5.next = 39;
          return pool.query("UPDATE user_login SET login_status = $1 WHERE email = $2", [1, _email]);
        case 39:
          _context5.next = 41;
          return pool.query("SELECT * FROM user_registration WHERE id = $1", [_result.rows[0].user_id]);
        case 41:
          user_details = _context5.sent;
          res.status(200).json({
            success: true,
            message: 'Correct',
            data: user_details.rows[0]
          });
          _context5.next = 46;
          break;
        case 45:
          res.status(400).json({
            success: false,
            message: 'Invalid OTP'
          });
        case 46:
          _context5.next = 52;
          break;
        case 48:
          _context5.prev = 48;
          _context5.t3 = _context5["catch"](29);
          console.log(_context5.t3.message);
          res.status(400).json({
            success: false,
            message: "Internal server error"
          });
        case 52:
          return _context5.abrupt("break", 83);
        case 53:
          category = req.body.column_values.category;
          _context5.prev = 54;
          _query2 = 'SELECT id FROM assesment_master WHERE category=$1 AND status=$2';
          _values2 = [category, 0];
          _context5.next = 59;
          return pool.query(_query2, _values2);
        case 59:
          _result2 = _context5.sent;
          if (!(_result2.rowCount == 0)) {
            _context5.next = 62;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: "Assessment not found"
          }));
        case 62:
          query2 = 'SELECT id, question FROM assesment_questions WHERE assesment_id=$1 AND status=$2';
          values2 = [_result2.rows[0].id, 0];
          _context5.next = 66;
          return pool.query(query2, values2);
        case 66:
          result2 = _context5.sent;
          if (!(result2.rowCount == 0)) {
            _context5.next = 69;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: "Questions not found"
          }));
        case 69:
          data = [];
          _context5.next = 72;
          return Promise.all(result2.rows.map( /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(obj) {
              var query3, values3, result3;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    query3 = 'SELECT option FROM assesment_questions_options WHERE question_id=$1';
                    values3 = [obj.id];
                    _context2.next = 4;
                    return pool.query(query3, values3);
                  case 4:
                    result3 = _context2.sent;
                    if (!(result3.rowCount == 0)) {
                      _context2.next = 7;
                      break;
                    }
                    return _context2.abrupt("return", res.status(404).json({
                      success: false,
                      message: "Options not found"
                    }));
                  case 7:
                    data.push({
                      question: obj.question,
                      options: {
                        option1: result3.rows[0].option,
                        option2: result3.rows[1].option,
                        option3: result3.rows[2].option,
                        option4: result3.rows[3].option
                      }
                    });
                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }()));
        case 72:
          res.status(200).json({
            success: true,
            data: data
          });
          _context5.next = 79;
          break;
        case 75:
          _context5.prev = 75;
          _context5.t4 = _context5["catch"](54);
          console.log(_context5.t4.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 79:
          return _context5.abrupt("break", 83);
        case 80:
          console.log("Invalid Table Name");
          res.status(404).json({
            success: false,
            message: "Invalid Table Name"
          });
          return _context5.abrupt("break", 83);
        case 83:
          return _context5.abrupt("break", 415);
        case 84:
          _context5.t5 = table_name;
          _context5.next = _context5.t5 === "user_registration" ? 87 : _context5.t5 === "user_login" ? 116 : _context5.t5 === "assesment_master" ? 146 : _context5.t5 === "assesment_questions" ? 168 : _context5.t5 === "assesment_questions_options" ? 194 : 216;
          break;
        case 87:
          console.log(req.body.column_values);
          //1st Step in user Registration generateEmailVerifyOtp
          email1 = req.body.column_values.email;
          _context5.prev = 89;
          //CHECKING IF THE USER EXISTS ALREADY OR NOT
          _query3 = 'SELECT * FROM user_registration WHERE email = $1';
          _values3 = [email1];
          _context5.next = 94;
          return pool.query(_query3, _values3);
        case 94:
          _result3 = _context5.sent;
          if (!(_result3.rowCount != 0)) {
            _context5.next = 97;
            break;
          }
          return _context5.abrupt("return", res.status(409).json({
            message: "Account with this email exists"
          }));
        case 97:
          _context5.next = 99;
          return generateOtp();
        case 99:
          generatedOTP = _context5.sent;
          _query4 = 'INSERT INTO user_registration (email,otp) VALUES ($1,$2) RETURNING *';
          _values4 = [email1, generatedOTP];
          _context5.next = 104;
          return pool.query(_query4, _values4);
        case 104:
          _result4 = _context5.sent;
          msg = "<p>Welcome to <b>Swasthmind</b></br><h1> Your OTP for Email Verification-".concat(generatedOTP, "</h1></p>");
          _context5.next = 108;
          return sendMail(email1, 'otp', msg);
        case 108:
          res.status(201).json({
            message: "OTP has been sent to your email "
          });
          _context5.next = 115;
          break;
        case 111:
          _context5.prev = 111;
          _context5.t6 = _context5["catch"](89);
          console.log(_context5.t6);
          res.status(500).json({
            message: "Internal Server Error"
          });
        case 115:
          return _context5.abrupt("break", 219);
        case 116:
          // 1st step of user login
          _req$body$column_valu3 = req.body.column_values, login_type = _req$body$column_valu3.login_type, _email2 = _req$body$column_valu3.email, mobile = _req$body$column_valu3.mobile, ip = _req$body$column_valu3.ip;
          _context5.prev = 117;
          if (!(login_type == 'email')) {
            _context5.next = 139;
            break;
          }
          //CHECKING IF THE USER EXISTS  OR NOT
          _query5 = 'SELECT * FROM user_registration WHERE email = $1';
          _values5 = [_email2];
          _context5.next = 123;
          return pool.query(_query5, _values5);
        case 123:
          _result5 = _context5.sent;
          if (!(_result5.rowCount == 0)) {
            _context5.next = 126;
            break;
          }
          return _context5.abrupt("return", res.status(409).json({
            message: "User does not exist"
          }));
        case 126:
          user_id = _result5.rows[0].id;
          _context5.next = 129;
          return generateOtp();
        case 129:
          _generatedOTP = _context5.sent;
          _query6 = 'INSERT INTO user_login (user_id,login_type,mobile,email,otp,ip) VALUES ($1,$2,$3,$4,$5,$6)';
          _values6 = [user_id, login_type, mobile, _email2, _generatedOTP, ip];
          _context5.next = 134;
          return pool.query(_query6, _values6);
        case 134:
          _result6 = _context5.sent;
          _msg = "<p>Hi <b>".concat(_result5.rows[0].name, "</b></br><h1>").concat(_generatedOTP, "</h1></p>");
          _context5.next = 138;
          return sendMail(_email2, 'otp', _msg);
        case 138:
          res.status(201).json({
            message: "OTP is sent to your email verification"
          });
        case 139:
          _context5.next = 145;
          break;
        case 141:
          _context5.prev = 141;
          _context5.t7 = _context5["catch"](117);
          console.log(_context5.t7);
          res.status(500).json({
            message: "Internal Server Error"
          });
        case 145:
          return _context5.abrupt("break", 219);
        case 146:
          // createAssessment 
          _req$body$column_valu4 = req.body.column_values, _category = _req$body$column_valu4.category, assesment_name = _req$body$column_valu4.assesment_name, status = _req$body$column_valu4.status, created_by = _req$body$column_valu4.created_by, updated_by = _req$body$column_valu4.updated_by;
          _context5.prev = 147;
          _query7 = 'SELECT assesment_name FROM assesment_master WHERE category=$1 AND assesment_name=$2';
          _values7 = [_category, assesment_name];
          _context5.next = 152;
          return pool.query(_query7, _values7);
        case 152:
          _result7 = _context5.sent;
          if (!(_result7.rowCount != 0)) {
            _context5.next = 155;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            success: false,
            message: "Assesment already exist"
          }));
        case 155:
          _query8 = 'INSERT INTO assesment_master (category,assesment_name,status,created_by,updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
          _values8 = [_category, assesment_name, status, created_by, updated_by];
          _context5.next = 159;
          return pool.query(_query8, _values8);
        case 159:
          _result8 = _context5.sent;
          res.status(201).json({
            success: true,
            message: "Assessment created succesfully",
            result: _result8.rows[0]
          });
          _context5.next = 167;
          break;
        case 163:
          _context5.prev = 163;
          _context5.t8 = _context5["catch"](147);
          console.log(_context5.t8.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 167:
          return _context5.abrupt("break", 219);
        case 168:
          // const { assesment_id, question, status: status1, created_by: created_by1, updated_by: updated_by1 } = req.body.column_values
          // try {
          //     const query1 = 'SELECT question FROM assesment_questions WHERE question=$1 AND assesment_id=$2'
          //     const values1 = [question, assesment_id]
          //     const result1 = await pool.query(query1, values1)
          //     if (result1.rowCount != 0) {
          //         return res.status(401).json({
          //             success: false,
          //             message: "Question already exist"
          //         })
          //     }
          //     const query2 = 'INSERT INTO assesment_questions (assesment_id,question, status, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *'
          //     const values2 = [assesment_id, question, status1, created_by1, updated_by1]
          //     const result2 = await pool.query(query2, values2)
          //     res.status(201).json({
          //         success: true,
          //         message: "Question created succesfully",
          //         result: result2.rows[0]
          //     })
          // } catch (error) {
          //     console.log(error.message)
          //     res.status(500).json({
          //         success: false,
          //         message: "Internal server error"
          //     })
          // }
          _req$body$column_valu5 = req.body.column_values, assesment_id = _req$body$column_valu5.assesment_id, question = _req$body$column_valu5.question, options = _req$body$column_valu5.options, status1 = _req$body$column_valu5.status, created_by1 = _req$body$column_valu5.created_by, updated_by1 = _req$body$column_valu5.updated_by;
          _context5.prev = 169;
          _query9 = 'SELECT question FROM assesment_questions WHERE question=$1 AND assesment_id=$2';
          _values9 = [question, assesment_id];
          _context5.next = 174;
          return pool.query(_query9, _values9);
        case 174:
          _result9 = _context5.sent;
          if (!(_result9.rowCount != 0)) {
            _context5.next = 177;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            success: false,
            message: "Question already exist"
          }));
        case 177:
          _query10 = 'INSERT INTO assesment_questions (assesment_id,question, status, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
          _values10 = [assesment_id, question, status1, created_by1, updated_by1];
          _context5.next = 181;
          return pool.query(_query10, _values10);
        case 181:
          _result10 = _context5.sent;
          _question_id = _result10.rows[0].id;
          optionsAdded = [];
          _context5.next = 186;
          return Promise.all(options.map( /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(obj) {
              var query4, values4, result4;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    query4 = 'INSERT INTO assesment_questions_options (question_id,option, is_correct, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
                    values4 = [_question_id, obj.option, obj.is_correct, created_by1, updated_by1];
                    _context3.next = 4;
                    return pool.query(query4, values4);
                  case 4:
                    result4 = _context3.sent;
                    optionsAdded.push(result4.rows[0]);
                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x4) {
              return _ref4.apply(this, arguments);
            };
          }()));
        case 186:
          res.status(201).json({
            success: true,
            message: "Question created succesfully",
            result: {
              question: _result10.rows[0],
              options: optionsAdded
            }
          });
          _context5.next = 193;
          break;
        case 189:
          _context5.prev = 189;
          _context5.t9 = _context5["catch"](169);
          console.log(_context5.t9.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 193:
          return _context5.abrupt("break", 219);
        case 194:
          _req$body$column_valu6 = req.body.column_values, question_id = _req$body$column_valu6.question_id, option = _req$body$column_valu6.option, is_correct = _req$body$column_valu6.is_correct, created_by2 = _req$body$column_valu6.created_by, updated_by2 = _req$body$column_valu6.updated_by;
          _context5.prev = 195;
          _query11 = 'SELECT option FROM assesment_questions_options WHERE option=$1 AND question_id=$2';
          _values11 = [option, question_id];
          _context5.next = 200;
          return pool.query(_query11, _values11);
        case 200:
          _result11 = _context5.sent;
          if (!(_result11.rowCount != 0)) {
            _context5.next = 203;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            success: false,
            message: "Option already exist"
          }));
        case 203:
          _query12 = 'INSERT INTO assesment_questions_options (question_id,option, is_correct, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
          _values12 = [question_id, option, is_correct, created_by2, updated_by2];
          _context5.next = 207;
          return pool.query(_query12, _values12);
        case 207:
          _result12 = _context5.sent;
          res.status(201).json({
            success: true,
            message: "Option created succesfully",
            result: _result12.rows[0]
          });
          _context5.next = 215;
          break;
        case 211:
          _context5.prev = 211;
          _context5.t10 = _context5["catch"](195);
          console.log(_context5.t10.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 215:
          return _context5.abrupt("break", 219);
        case 216:
          console.log("Invalid Table Name");
          res.status(404).json({
            success: false,
            message: "Invalid Table Name"
          });
          return _context5.abrupt("break", 219);
        case 219:
          return _context5.abrupt("break", 415);
        case 220:
          _context5.t11 = table_name;
          _context5.next = _context5.t11 === "user_registration" ? 223 : _context5.t11 === "user_login" ? 224 : _context5.t11 === "assesment_master" ? 225 : _context5.t11 === "assesment_questions" ? 250 : _context5.t11 === "assesment_questions_options" ? 269 : 286;
          break;
        case 223:
          return _context5.abrupt("break", 289);
        case 224:
          return _context5.abrupt("break", 289);
        case 225:
          id = req.body.column_values.id;
          _context5.prev = 226;
          _context5.next = 229;
          return pool.query('SELECT id FROM assesment_master WHERE id=$1', [id]);
        case 229:
          _result13 = _context5.sent;
          if (!(_result13.rowCount == 0)) {
            _context5.next = 232;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: 'Assessment not found'
          }));
        case 232:
          question_ids = [];
          _context5.next = 235;
          return pool.query('SELECT id FROM assesment_questions WHERE assesment_id=$1', [_result13.rows[0].id]);
        case 235:
          _result14 = _context5.sent;
          _result14.rows.map(function (obj) {
            question_ids.push(obj.id);
          });
          question_ids.map( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return pool.query('DELETE FROM assesment_questions_options WHERE question_id = $1', [id]);
                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function (_x5) {
              return _ref5.apply(this, arguments);
            };
          }());
          _context5.next = 240;
          return pool.query('DELETE FROM assesment_questions WHERE assesment_id = $1', [_result13.rows[0].id]);
        case 240:
          _context5.next = 242;
          return pool.query('DELETE FROM assesment_master WHERE id = $1', [id]);
        case 242:
          res.status(200).json({
            success: true,
            message: "Assessment deleted successfully"
          });
          _context5.next = 249;
          break;
        case 245:
          _context5.prev = 245;
          _context5.t12 = _context5["catch"](226);
          console.log(_context5.t12.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 249:
          return _context5.abrupt("break", 289);
        case 250:
          id1 = req.body.column_values.id;
          _context5.prev = 251;
          _context5.next = 254;
          return pool.query('SELECT id FROM assesment_questions WHERE id=$1', [id1]);
        case 254:
          _result15 = _context5.sent;
          if (!(_result15.rowCount == 0)) {
            _context5.next = 257;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: 'Assessment Question not found'
          }));
        case 257:
          _context5.next = 259;
          return pool.query('DELETE FROM assesment_questions_options WHERE question_id = $1', [id1]);
        case 259:
          _context5.next = 261;
          return pool.query('DELETE FROM assesment_questions WHERE id = $1', [id1]);
        case 261:
          res.status(200).json({
            success: true,
            message: "Assessment Question deleted successfully"
          });
          _context5.next = 268;
          break;
        case 264:
          _context5.prev = 264;
          _context5.t13 = _context5["catch"](251);
          console.log(_context5.t13.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 268:
          return _context5.abrupt("break", 289);
        case 269:
          id2 = req.body.column_values.id;
          _context5.prev = 270;
          _context5.next = 273;
          return pool.query('SELECT id FROM assesment_questions_options WHERE id=$1', [id2]);
        case 273:
          _result16 = _context5.sent;
          if (!(_result16.rowCount == 0)) {
            _context5.next = 276;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: 'Assessment Question Option not found'
          }));
        case 276:
          _context5.next = 278;
          return pool.query('DELETE FROM assesment_questions_options WHERE id = $1', [id2]);
        case 278:
          res.status(200).json({
            success: true,
            message: "Assessment Question Option deleted successfully"
          });
          _context5.next = 285;
          break;
        case 281:
          _context5.prev = 281;
          _context5.t14 = _context5["catch"](270);
          console.log(_context5.t14.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 285:
          return _context5.abrupt("break", 289);
        case 286:
          console.log("Invalid Table Name");
          res.status(404).json({
            success: false,
            message: "Invalid Table Name"
          });
          return _context5.abrupt("break", 289);
        case 289:
          return _context5.abrupt("break", 415);
        case 290:
          _context5.t15 = table_name;
          _context5.next = _context5.t15 === "user_registration" ? 293 : _context5.t15 === "assesment_master" ? 339 : _context5.t15 === "assesment_questions" ? 362 : _context5.t15 === "assesment_questions_options" ? 385 : 408;
          break;
        case 293:
          //3rd step of user Registration getting the user data  registerUserInfo
          _req$body$column_valu7 = req.body.column_values, name = _req$body$column_valu7.name, _email3 = _req$body$column_valu7.email, gender = _req$body$column_valu7.gender, occupation = _req$body$column_valu7.occupation, college_name = _req$body$column_valu7.college_name;
          _context5.prev = 294;
          currentTimestamp = new Date(); //CHECKING IF THE OCCUPATION IS PRESENT IN THE OCCUPATION_MASTER table_name OR NOT 
          _query13 = 'SELECT * FROM occupation_master WHERE occupation = $1';
          _values13 = [occupation];
          _context5.next = 300;
          return pool.query(_query13, _values13);
        case 300:
          _result17 = _context5.sent;
          if (!(_result17.rowCount == 0)) {
            _context5.next = 310;
            break;
          }
          query3 = 'INSERT INTO occupation_master (occupation,created_at,created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5)';
          values3 = [occupation, currentTimestamp, 1, currentTimestamp, 1];
          _context5.next = 306;
          return pool.query(query3, values3);
        case 306:
          result3 = _context5.sent;
          occupation_id = result3.rows[0].id;
          _context5.next = 311;
          break;
        case 310:
          occupation_id = _result17.rows[0].id;
        case 311:
          //CHECKING IF THE COLLEGE IS PRESENT IN THE COLLEGE_MASTER table_name OR NOT 
          query4 = 'SELECT * FROM college_master WHERE college= $1';
          value4 = [college_name];
          _context5.next = 315;
          return pool.query(query4, value4);
        case 315:
          result4 = _context5.sent;
          if (!(result4.rowCount == 0)) {
            _context5.next = 325;
            break;
          }
          query5 = 'INSERT INTO college_master (college,created_at,created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5)';
          values5 = [college_name, currentTimestamp, 1, currentTimestamp, 1];
          _context5.next = 321;
          return pool.query(query5, values5);
        case 321:
          result5 = _context5.sent;
          college_id = result5.rows[0].id;
          _context5.next = 326;
          break;
        case 325:
          college_id = result4.rows[0].id;
        case 326:
          // const profile_image = 'images/' + req.file.filename
          // const generatedOTP = await generateOtp()
          query6 = 'UPDATE user_registration SET name=$1, gender=$2,occupation=$3,college_name=$4 where email=$5';
          values6 = [name, gender, occupation_id, college_id, _email3];
          _context5.next = 330;
          return pool.query(query6, values6);
        case 330:
          result6 = _context5.sent;
          // const contentType = req.file.mimetype;
          // const fileExtention = contentType.slice(6)
          // const newFileName = `${result6.rows[0].id}-${result6.rows[0].name}.${fileExtention}`;

          // Update the file name in the storage destination directory
          // const newPath = path.join(__dirname, '../public/images', newFileName);
          // fs.renameSync(path.join(__dirname, '../public/images', req.file.filename), newPath);

          // const result7 = await pool.query('UPDATE user_registration SET profile =$1 WHERE id=$2 RETURNING *', [newFileName, result6.rows[0].id])

          // const msg = `<p>Hi <b>${name}</b></br><h1>${generatedOTP}</h1></p>`
          // await sendMail(email, 'otp', msg)

          res.status(201).json({
            message: "User Registered Successfully"
          });
          _context5.next = 338;
          break;
        case 334:
          _context5.prev = 334;
          _context5.t16 = _context5["catch"](294);
          console.log(_context5.t16);
          res.status(500).json({
            message: "Internal Server Error"
          });
        case 338:
          return _context5.abrupt("break", 411);
        case 339:
          //Update assesment 
          _req$body$column_valu8 = req.body.column_values, _id = _req$body$column_valu8.id, _category2 = _req$body$column_valu8.category, _assesment_name = _req$body$column_valu8.assesment_name, _status = _req$body$column_valu8.status, _updated_by = _req$body$column_valu8.updated_by;
          _context5.prev = 340;
          _query14 = 'SELECT assesment_name FROM assesment_master WHERE id=$1';
          _values14 = [_id];
          _context5.next = 345;
          return pool.query(_query14, _values14);
        case 345:
          _result18 = _context5.sent;
          if (!(_result18.rowCount == 0)) {
            _context5.next = 348;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            success: false,
            message: "Assesment does not exist"
          }));
        case 348:
          currentDate = new Date();
          _query15 = 'UPDATE  assesment_master SET category=$1, assesment_name=$2 ,status=$3 ,updated_by=$4, updated_at=$5 WHERE id=$6 RETURNING *';
          _values15 = [_category2, _assesment_name, _status, _updated_by, currentDate, _id];
          _context5.next = 353;
          return pool.query(_query15, _values15);
        case 353:
          _result19 = _context5.sent;
          res.status(200).json({
            success: true,
            message: "Assessment updated succesfully",
            result: _result19.rows[0]
          });
          _context5.next = 361;
          break;
        case 357:
          _context5.prev = 357;
          _context5.t17 = _context5["catch"](340);
          console.log(_context5.t17.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 361:
          return _context5.abrupt("break", 411);
        case 362:
          _req$body$column_valu9 = req.body.column_values, _id2 = _req$body$column_valu9.id, _question = _req$body$column_valu9.question, _status2 = _req$body$column_valu9.status, _updated_by2 = _req$body$column_valu9.updated_by;
          _context5.prev = 363;
          _query16 = 'SELECT question FROM assesment_questions WHERE id=$1';
          _values16 = [_id2];
          _context5.next = 368;
          return pool.query(_query16, _values16);
        case 368:
          _result20 = _context5.sent;
          if (!(_result20.rowCount == 0)) {
            _context5.next = 371;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            success: false,
            message: "Question does not exist"
          }));
        case 371:
          _currentDate = new Date();
          _query17 = 'UPDATE  assesment_questions SET question=$1, status=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *';
          _values17 = [_question, _status2, _updated_by2, _currentDate, _id2];
          _context5.next = 376;
          return pool.query(_query17, _values17);
        case 376:
          _result21 = _context5.sent;
          res.status(200).json({
            success: true,
            message: "Question updated succesfully",
            result: _result21.rows[0]
          });
          _context5.next = 384;
          break;
        case 380:
          _context5.prev = 380;
          _context5.t18 = _context5["catch"](363);
          console.log(_context5.t18.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 384:
          return _context5.abrupt("break", 411);
        case 385:
          _req$body$column_valu10 = req.body.column_values, _id3 = _req$body$column_valu10.id, _option = _req$body$column_valu10.option, _is_correct = _req$body$column_valu10.is_correct, _updated_by3 = _req$body$column_valu10.updated_by;
          _context5.prev = 386;
          _query18 = 'SELECT option FROM assesment_questions_options WHERE id=$1';
          _values18 = [_id3];
          _context5.next = 391;
          return pool.query(_query18, _values18);
        case 391:
          _result22 = _context5.sent;
          if (!(_result22.rowCount == 0)) {
            _context5.next = 394;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            success: false,
            message: "Option does not exist"
          }));
        case 394:
          _currentDate2 = new Date();
          _query19 = 'UPDATE  assesment_questions_options SET option=$1, is_correct=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *';
          _values19 = [_option, _is_correct, _updated_by3, _currentDate2, _id3];
          _context5.next = 399;
          return pool.query(_query19, _values19);
        case 399:
          _result23 = _context5.sent;
          res.status(200).json({
            success: true,
            message: "Question updated succesfully",
            result: _result23.rows[0]
          });
          _context5.next = 407;
          break;
        case 403:
          _context5.prev = 403;
          _context5.t19 = _context5["catch"](386);
          console.log(_context5.t19.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 407:
          return _context5.abrupt("break", 411);
        case 408:
          console.log("Invalid Table Name");
          res.status(404).json({
            success: false,
            message: "Invalid Table Name"
          });
          return _context5.abrupt("break", 411);
        case 411:
          return _context5.abrupt("break", 415);
        case 412:
          console.log("Invalid Operation");
          res.status(404).json({
            success: false,
            message: "Invalid Operation"
          });
          return _context5.abrupt("break", 415);
        case 415:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[8, 24], [29, 48], [54, 75], [89, 111], [117, 141], [147, 163], [169, 189], [195, 211], [226, 245], [251, 264], [270, 281], [294, 334], [340, 357], [363, 380], [386, 403]]);
  }));
  return function dynamicController(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
module.exports = dynamicController;