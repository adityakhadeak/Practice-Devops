"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var pool = require('../database/db.js');
var user_assement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, ops, table, column_values, user_id, assesment_id, datetime, payment_status, createUserAssesmentQuery, createUserAssesmentValues, createUserAssesment, _user_id, user_assesment_id, assesment_question_id, assesment_option, createUserAssesmentDetailsQuery, createUserAssesmentDetailsValues, createUserAssesmentDetails, _user_id2, readUserAssesmentQuery, readUserAssesmentValues, readUserAssesment, _user_id3, readUserAssesmentDetailsQuery, readUserAssesmentDetailsValues, readUserAssesmentDetails, _user_id4, _assesment_id, _datetime, _payment_status, updateUserAssesmentQuery, updateUserAssesmentValues, updateUserAssesment, _user_id5, _user_assesment_id, _assesment_question_id, _assesment_option, updateUserAssesmentDetailsQuery, updateUserAssesmentDetailsValues, updateUserAssesmentDetails, id, deleteUserAssesmentQuery, deleteUserAssesmentValues, deleteUserAssesment, _id, deleteUserAssesmentDetailsQuery, deleteUserAssesmentDetailsValues, deleteUserAssesmentDetails;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, ops = _req$body.ops, table = _req$body.table, column_values = _req$body.column_values;
          if (ops || table || column_values) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "All Fields are to be required"
          }));
        case 3:
          _context.t0 = ops;
          _context.next = _context.t0 === "create" ? 6 : _context.t0 === "read" ? 61 : _context.t0 === "update" ? 117 : _context.t0 === "delete" ? 171 : 243;
          break;
        case 6:
          _context.t1 = table;
          _context.next = _context.t1 === "user_assesment" ? 9 : _context.t1 === "user_assesment_details" ? 35 : 60;
          break;
        case 9:
          _context.prev = 9;
          user_id = column_values.user_id, assesment_id = column_values.assesment_id, datetime = column_values.datetime, payment_status = column_values.payment_status;
          if (user_id || assesment_id || datetime || payment_status) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "All fields should be provided"
          }));
        case 13:
          createUserAssesmentQuery = "INSERT INTO user_assesment (user_id, assesment_id, datetime, payment_status) VALUES ($1,$2,$3,$4) RETURNING *"; //inserting the details into the table
          createUserAssesmentValues = [user_id, assesment_id, datetime, payment_status]; //values to be inserted
          _context.prev = 15;
          _context.next = 18;
          return pool.query(createUserAssesmentQuery, createUserAssesmentValues);
        case 18:
          createUserAssesment = _context.sent;
          if (!(createUserAssesment.rowCount != 0)) {
            _context.next = 23;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data Successfully Saved",
            data: createUserAssesment.rows[0]
          }));
        case 23:
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "Data not Saved"
          }));
        case 24:
          _context.next = 29;
          break;
        case 26:
          _context.prev = 26;
          _context.t2 = _context["catch"](15);
          throw new Error("Error in creating the data ");
        case 29:
          _context.next = 34;
          break;
        case 31:
          _context.prev = 31;
          _context.t3 = _context["catch"](9);
          return _context.abrupt("return", res.status(500).json({
            success: true,
            message: "Internal server Error due to: ".concat(_context.t3.message)
          }));
        case 34:
          return _context.abrupt("break", 61);
        case 35:
          _context.prev = 35;
          _user_id = column_values.user_id, user_assesment_id = column_values.user_assesment_id, assesment_question_id = column_values.assesment_question_id, assesment_option = column_values.assesment_option;
          if (_user_id || user_assesment_id || assesment_question_id || assesment_option) {
            _context.next = 39;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "All fields should be provided"
          }));
        case 39:
          createUserAssesmentDetailsQuery = "INSERT INTO user_assesment_details (user_id, user_assesment_id, assesment_question_id, assesment_option) VALUES ($1,$2,$3,$4) RETURNING *"; //inserting the details into the table
          createUserAssesmentDetailsValues = [_user_id, user_assesment_id, assesment_question_id, assesment_option]; //values to be inserted
          _context.prev = 41;
          _context.next = 44;
          return pool.query(createUserAssesmentDetailsQuery, createUserAssesmentDetailsValues);
        case 44:
          createUserAssesmentDetails = _context.sent;
          if (!(createUserAssesmentDetails.rowCount != 0)) {
            _context.next = 49;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data Successfully Saved",
            data: createUserAssesmentDetails.rows[0]
          }));
        case 49:
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "Data not Saved"
          }));
        case 50:
          _context.next = 55;
          break;
        case 52:
          _context.prev = 52;
          _context.t4 = _context["catch"](41);
          throw new Error(_context.t4);
        case 55:
          _context.next = 60;
          break;
        case 57:
          _context.prev = 57;
          _context.t5 = _context["catch"](35);
          return _context.abrupt("return", res.status(500).json({
            success: true,
            message: "Internal server Error due to: ".concat(_context.t5.message)
          }));
        case 60:
          return _context.abrupt("return", res.status(402).json({
            success: false,
            message: "Table not found"
          }));
        case 61:
          _context.t6 = table;
          _context.next = _context.t6 === "user_assesment" ? 64 : _context.t6 === "user_assesment_details" ? 90 : 116;
          break;
        case 64:
          _context.prev = 64;
          _user_id2 = column_values.user_id;
          if (_user_id2) {
            _context.next = 68;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "All field need to be Provided"
          }));
        case 68:
          readUserAssesmentQuery = "SELECT * FROM user_assesment WHERE user_id = $1";
          readUserAssesmentValues = [_user_id2];
          _context.prev = 70;
          _context.next = 73;
          return pool.query(readUserAssesmentQuery, readUserAssesmentValues);
        case 73:
          readUserAssesment = _context.sent;
          if (!(readUserAssesment.rowCount != 0)) {
            _context.next = 78;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data Is Read Successfully",
            data: readUserAssesment.rows[0]
          }));
        case 78:
          return _context.abrupt("return", res.send(302).json({
            success: false,
            message: "Data not found"
          }));
        case 79:
          _context.next = 84;
          break;
        case 81:
          _context.prev = 81;
          _context.t7 = _context["catch"](70);
          throw new Error(_context.t7);
        case 84:
          _context.next = 89;
          break;
        case 86:
          _context.prev = 86;
          _context.t8 = _context["catch"](64);
          return _context.abrupt("return", res.send(500).json({
            success: false,
            message: "Internal Server Error ".concat(_context.t8.message)
          }));
        case 89:
          return _context.abrupt("break", 117);
        case 90:
          _context.prev = 90;
          _user_id3 = column_values.user_id;
          if (_user_id3) {
            _context.next = 94;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "All field need to be Provided"
          }));
        case 94:
          readUserAssesmentDetailsQuery = "SELECT * FROM user_assesment_details WHERE user_id = $1";
          readUserAssesmentDetailsValues = [_user_id3];
          _context.prev = 96;
          _context.next = 99;
          return pool.query(readUserAssesmentDetailsQuery, readUserAssesmentDetailsValues);
        case 99:
          readUserAssesmentDetails = _context.sent;
          if (!(readUserAssesmentDetails.rowCount != 0)) {
            _context.next = 104;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data Is Read Successfully",
            data: readUserAssesmentDetails.rows[0]
          }));
        case 104:
          return _context.abrupt("return", res.send(302).json({
            success: false,
            message: "Data not found"
          }));
        case 105:
          _context.next = 110;
          break;
        case 107:
          _context.prev = 107;
          _context.t9 = _context["catch"](96);
          throw new Error(_context.t9);
        case 110:
          _context.next = 115;
          break;
        case 112:
          _context.prev = 112;
          _context.t10 = _context["catch"](90);
          return _context.abrupt("return", res.send(500).json({
            success: false,
            message: "Internal Server Error ".concat(_context.t10.message)
          }));
        case 115:
          return _context.abrupt("break", 117);
        case 116:
          return _context.abrupt("return", res.status(402).json({
            success: false,
            message: "Table not found"
          }));
        case 117:
          _context.t11 = table;
          _context.next = _context.t11 === "user_assesment" ? 120 : _context.t11 === "user_assesment_details" ? 146 : 171;
          break;
        case 120:
          _context.prev = 120;
          _user_id4 = column_values.user_id, _assesment_id = column_values.assesment_id, _datetime = column_values.datetime, _payment_status = column_values.payment_status;
          if (_user_id4 || _assesment_id || _datetime || _payment_status) {
            _context.next = 124;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "All fields should be provided"
          }));
        case 124:
          updateUserAssesmentQuery = "UPDATE user_assesment SET user_id=$1, assesment_id=$2, datetime=$3, payment_status=$4"; //Updating the details into the table
          updateUserAssesmentValues = [_user_id4, _assesment_id, _datetime, _payment_status]; //values to be inserted
          _context.prev = 126;
          _context.next = 129;
          return pool.query(updateUserAssesmentQuery, updateUserAssesmentValues);
        case 129:
          updateUserAssesment = _context.sent;
          if (!(updateUserAssesment.rowCount != 0)) {
            _context.next = 134;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data Successfully update",
            data: updateUserAssesment.rows[0]
          }));
        case 134:
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "Data not update"
          }));
        case 135:
          _context.next = 140;
          break;
        case 137:
          _context.prev = 137;
          _context.t12 = _context["catch"](126);
          throw new Error("Error in updating the data ");
        case 140:
          _context.next = 145;
          break;
        case 142:
          _context.prev = 142;
          _context.t13 = _context["catch"](120);
          return _context.abrupt("return", res.status(500).json({
            success: true,
            message: "Internal server Error due to: ".concat(_context.t13.message)
          }));
        case 145:
          return _context.abrupt("break", 171);
        case 146:
          _context.prev = 146;
          _user_id5 = column_values.user_id, _user_assesment_id = column_values.user_assesment_id, _assesment_question_id = column_values.assesment_question_id, _assesment_option = column_values.assesment_option;
          if (_user_id5 || _user_assesment_id || _assesment_question_id || _assesment_option) {
            _context.next = 150;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "All fields should be provided"
          }));
        case 150:
          updateUserAssesmentDetailsQuery = "UPDATE user_assesment_details SET user_id=$1, user_assesment_id=$2, assesment_question_id=$3, assesment_option=$4"; //updating the details into the table
          updateUserAssesmentDetailsValues = [_user_id5, _user_assesment_id, _assesment_question_id, _assesment_option]; //values to be update
          _context.prev = 152;
          _context.next = 155;
          return pool.query(updateUserAssesmentDetailsQuery, updateUserAssesmentDetailsValues);
        case 155:
          updateUserAssesmentDetails = _context.sent;
          if (!(updateUserAssesmentDetails.rowCount != 0)) {
            _context.next = 160;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data Successfully update",
            data: updateUserAssesmentDetails.rows[0]
          }));
        case 160:
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "Data not update"
          }));
        case 161:
          _context.next = 166;
          break;
        case 163:
          _context.prev = 163;
          _context.t14 = _context["catch"](152);
          throw new Error(_context.t14);
        case 166:
          _context.next = 171;
          break;
        case 168:
          _context.prev = 168;
          _context.t15 = _context["catch"](146);
          return _context.abrupt("return", res.status(500).json({
            success: true,
            message: "Internal server Error due to: ".concat(_context.t15.message)
          }));
        case 171:
          _context.t16 = table;
          _context.next = _context.t16 === "user_assesment" ? 174 : _context.t16 === "user_assesment_details" ? 208 : 242;
          break;
        case 174:
          _context.prev = 174;
          id = column_values.id;
          if (id) {
            _context.next = 178;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "All field need to be Provided"
          }));
        case 178:
          deleteUserAssesmentQuery = "DELETE FROM user_assesment WHERE id = $1";
          deleteUserAssesmentValues = [id];
          _context.prev = 180;
          _context.next = 183;
          return pool.query('BEGIN');
        case 183:
          _context.next = 185;
          return pool.query(deleteUserAssesmentQuery, deleteUserAssesmentValues);
        case 185:
          deleteUserAssesment = _context.sent;
          if (!(deleteUserAssesment.rowCount != 0)) {
            _context.next = 192;
            break;
          }
          _context.next = 189;
          return pool.query('COMMIT');
        case 189:
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data Deleted Successfully",
            data: deleteUserAssesment.rows[0]
          }));
        case 192:
          _context.next = 194;
          return pool.query('ROLLBACK');
        case 194:
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Data not deleted or Id not Found"
          }));
        case 195:
          _context.next = 202;
          break;
        case 197:
          _context.prev = 197;
          _context.t17 = _context["catch"](180);
          _context.next = 201;
          return pool.query('ROLLBACK');
        case 201:
          throw new Error(_context.t17);
        case 202:
          _context.next = 207;
          break;
        case 204:
          _context.prev = 204;
          _context.t18 = _context["catch"](174);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error ".concat(_context.t18.message)
          }));
        case 207:
          return _context.abrupt("break", 243);
        case 208:
          _context.prev = 208;
          _id = column_values.id;
          if (_id) {
            _context.next = 212;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "All field need to be Provided"
          }));
        case 212:
          deleteUserAssesmentDetailsQuery = "DELETE FROM user_assesment_details WHERE id = $1";
          deleteUserAssesmentDetailsValues = [_id];
          _context.prev = 214;
          _context.next = 217;
          return pool.query('BEGIN');
        case 217:
          _context.next = 219;
          return pool.query(deleteUserAssesmentDetailsQuery, deleteUserAssesmentDetailsValues);
        case 219:
          deleteUserAssesmentDetails = _context.sent;
          if (!(deleteUserAssesmentDetails.rowCount != 0)) {
            _context.next = 226;
            break;
          }
          _context.next = 223;
          return pool.query('COMMIT');
        case 223:
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data Deleted Successfully",
            data: deleteUserAssesmentDetails.rows[0]
          }));
        case 226:
          _context.next = 228;
          return pool.query('ROLLBACK');
        case 228:
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Data not deleted or Id not Found"
          }));
        case 229:
          _context.next = 236;
          break;
        case 231:
          _context.prev = 231;
          _context.t19 = _context["catch"](214);
          _context.next = 235;
          return pool.query('ROLLBACK');
        case 235:
          throw new Error(_context.t19);
        case 236:
          _context.next = 241;
          break;
        case 238:
          _context.prev = 238;
          _context.t20 = _context["catch"](208);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error ".concat(_context.t20.message)
          }));
        case 241:
          return _context.abrupt("break", 243);
        case 242:
          return _context.abrupt("return", res.status(402).json({
            success: false,
            message: "Table not found"
          }));
        case 243:
          return _context.abrupt("return", res.status(402).json({
            success: false,
            message: "Operation not found to perform"
          }));
        case 244:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[9, 31], [15, 26], [35, 57], [41, 52], [64, 86], [70, 81], [90, 112], [96, 107], [120, 142], [126, 137], [146, 168], [152, 163], [174, 204], [180, 197], [208, 238], [214, 231]]);
  }));
  return function user_assement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = {
  user_assement: user_assement
};