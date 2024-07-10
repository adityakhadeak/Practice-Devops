"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var pool = require("../database/db.js");
var _require = require("express-validator"),
  validationResult = _require.validationResult;
var today = new Date();
var activeSessionController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, ops, table, column_values, micro_image, inner_image, errors, session_type, session_name, session_description, therapist, created_at, created_by, updated_at, updated_by, createActiveSessionMasterQuery, createActiveSessionMasterValues, createActiveSessionMaster, session_id, date, start_time, end_time, price, capacity, _created_at, _created_by, _updated_at, _updated_by, createSessionDetailsQuery, createSessionDetailsValue, createSessionDetails, id, createCompletedSessionQuerySesssionDetails, createCompletedSessionValueSessionDetails, dateOfCompletedSessionMaster, createCompletedSessionMasterQuery, createCompletedSessionMasterValue, createCompletedSessionMaster, row, completedSessionData, newDate, _completedSessionData, _session_id, _session_type, _session_name, _session_description, _therapist, _micro_image, _inner_image, _created_at2, _created_by2, _updated_at2, _updated_by2, createCompletedSessionQuery, createCompletedSessionValues, createCompletedSession, deleteActiveSessionMasterQuery, deleteActiveSessionMasterValue, deleteActiveSessionMaster, _session_id2, createCancelledSessionMasteQuery, createCancelledSessionMasteValues, createCancelledSessionMaster, _row, activeSessionMasterData, _activeSessionMasterD2, _session_id3, _session_type2, _session_name2, _session_description2, _therapist2, _micro_image2, _inner_image2, _created_at3, _created_by3, _updated_at3, _updated_by3, createCancelledSessionMasterQuery, createCancelledSessionMasterValues, newCancelledSession, _deleteActiveSessionMasterQuery, _deleteActiveSessionMasterValue, _deleteActiveSessionMaster, _id, readSessionDetailsQuery, readSessionDetailsValues, readActiveSessionMasterQuery, readActiveSessionMaster, readSessionDetails, fullData, _id2, _readSessionDetailsQuery, _readSessionDetailsValues, _readSessionDetails, readCompletedSessionMasterQuery, readCompletedSessionMaster, readCancelledSessionMasterQuery, readCancelledSessionMaster, _errors, _session_type3, _session_name3, _session_description3, _therapist3, _created_at4, _created_by4, _updated_at4, _updated_by4, _id3, updateActiveSessionMasterQuery, updateActiveSessionMasterValues, updateActiveSessionMaster, _column_values$update, _date, _start_time, _end_time, _price, _capacity, _created_at5, _created_by5, _updated_at5, _updated_by5, _session_id4, updateSessionDetailsQuery, updateSessionDetailsValue, result, updateSessionDetails, _session_id5, deletequery, deleteValues, deleteSessionDetailsquery, deleteSessionDetailsValues, deletedSessionDetails, deletedactiveSessionDetails, _session_id6, deleteCompletedSessionMasterQuery, deleteCompletedSessionMasterValues, deleteCompletedSessionMaster, _session_id7, deleteCancelledSessionMasterQuery, deleteCancelledSessionMasterValues, deleteCancelledSessionMaster;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //Collecting Data from the frontEnd in req.body
          _req$body = req.body, ops = _req$body.ops, table = _req$body.table, column_values = _req$body.column_values;
          micro_image = "";
          inner_image = "";
          if (req.files && req.files.length > 0) {
            micro_image = req.files[0] ? req.files[0].path : null;
            inner_image = req.files[1] ? req.files[1].path : null;
          }

          //Validating if all the fields are present in the json formate or not
          if (ops || table || column_values) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            success: false,
            message: "All fields are not provided"
          }));
        case 7:
          _context.t0 = ops;
          _context.next = _context.t0 === "create" ? 10 : _context.t0 === "read" ? 177 : _context.t0 === "update" ? 284 : _context.t0 === "delete" ? 350 : 446;
          break;
        case 10:
          _context.t1 = table;
          _context.next = _context.t1 === "active_session_master" ? 13 : _context.t1 === "session_details" ? 42 : _context.t1 === "completed_session_master" ? 68 : _context.t1 === "cancelled_session_master" ? 135 : 176;
          break;
        case 13:
          errors = validationResult(req);
          if (errors.isEmpty()) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));
        case 16:
          _context.prev = 16;
          session_type = column_values.session_type, session_name = column_values.session_name, session_description = column_values.session_description, therapist = column_values.therapist, created_at = column_values.created_at, created_by = column_values.created_by, updated_at = column_values.updated_at, updated_by = column_values.updated_by;
          if (session_type || session_name || session_description || therapist || created_at || created_by || updated_at || updated_by) {
            _context.next = 20;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Please Provide all the fields"
          }));
        case 20:
          createActiveSessionMasterQuery = "INSERT INTO active_session_master (session_type, session_name,session_description, therapist,micro_image, inner_image,created_at, created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *";
          createActiveSessionMasterValues = [session_type, session_name, session_description, therapist, micro_image, inner_image, created_at, created_by, updated_at, updated_by];
          _context.prev = 22;
          _context.next = 25;
          return pool.query(createActiveSessionMasterQuery, createActiveSessionMasterValues);
        case 25:
          createActiveSessionMaster = _context.sent;
          if (!(createActiveSessionMaster.rowCount != 0)) {
            _context.next = 30;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Session created Successfully",
            data: createActiveSessionMaster.rows
          }));
        case 30:
          throw new Error("Session not begin created");
        case 31:
          _context.next = 36;
          break;
        case 33:
          _context.prev = 33;
          _context.t2 = _context["catch"](22);
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Could not create table due to : ".concat(_context.t2.message)
          }));
        case 36:
          _context.next = 41;
          break;
        case 38:
          _context.prev = 38;
          _context.t3 = _context["catch"](16);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error : ".concat(_context.t3.message)
          }));
        case 41:
          return _context.abrupt("break", 177);
        case 42:
          _context.prev = 42;
          session_id = column_values.session_id, date = column_values.date, start_time = column_values.start_time, end_time = column_values.end_time, price = column_values.price, capacity = column_values.capacity, _created_at = column_values.created_at, _created_by = column_values.created_by, _updated_at = column_values.updated_at, _updated_by = column_values.updated_by;
          if (session_id || date || start_time || end_time || price || capacity || _created_at || _created_by || _updated_at || _updated_by) {
            _context.next = 46;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "All Fields are not Provided"
          }));
        case 46:
          createSessionDetailsQuery = "INSERT INTO session_details (session_id, date, start_time, end_time, price, capacity, created_at, created_by, updated_at, updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *";
          createSessionDetailsValue = [session_id, date, start_time, end_time, price, capacity, _created_at, _created_by, _updated_at, _updated_by];
          _context.prev = 48;
          _context.next = 51;
          return pool.query(createSessionDetailsQuery, createSessionDetailsValue);
        case 51:
          createSessionDetails = _context.sent;
          if (!(createSessionDetails.rowCount != 0)) {
            _context.next = 56;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Successfully created",
            data: createSessionDetails.rows
          }));
        case 56:
          throw new Error("Details is not being created");
        case 57:
          _context.next = 62;
          break;
        case 59:
          _context.prev = 59;
          _context.t4 = _context["catch"](48);
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Could not create table due to ".concat(_context.t4.message)
          }));
        case 62:
          _context.next = 67;
          break;
        case 64:
          _context.prev = 64;
          _context.t5 = _context["catch"](42);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error : ".concat(_context.t5.message)
          }));
        case 67:
          return _context.abrupt("break", 177);
        case 68:
          _context.prev = 68;
          id = column_values.id;
          if (id) {
            _context.next = 72;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "Session Should be provided"
          }));
        case 72:
          createCompletedSessionQuerySesssionDetails = "SELECT date FROM session_details WHERE session_id = $1";
          createCompletedSessionValueSessionDetails = [id];
          _context.prev = 74;
          _context.next = 77;
          return pool.query(createCompletedSessionQuerySesssionDetails, createCompletedSessionValueSessionDetails);
        case 77:
          dateOfCompletedSessionMaster = _context.sent;
          if (!(dateOfCompletedSessionMaster.rowCount == 0)) {
            _context.next = 80;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Session id is not found in the Session_Details Table"
          }));
        case 80:
          _context.next = 85;
          break;
        case 82:
          _context.prev = 82;
          _context.t6 = _context["catch"](74);
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "This error occured due to ".concat(_context.t6.message)
          }));
        case 85:
          createCompletedSessionMasterQuery = "SELECT * FROM active_session_master WHERE id = $1 ";
          createCompletedSessionMasterValue = [id];
          _context.prev = 87;
          _context.next = 90;
          return pool.query(createCompletedSessionMasterQuery, createCompletedSessionMasterValue);
        case 90:
          createCompletedSessionMaster = _context.sent;
          row = createCompletedSessionMaster.rows[0];
          completedSessionData = {
            session_id: row.id,
            session_type: row.session_type,
            session_name: row.session_name,
            session_description: row.session_description,
            therapist: row.therapist,
            micro_image: row.micro_image,
            inner_image: row.inner_image,
            created_at: today,
            created_by: row.created_by,
            updated_at: today,
            updated_by: row.updated_by
          };
          console.log(dateOfCompletedSessionMaster.rows[0].date);
          if (!(dateOfCompletedSessionMaster.rowCount != 0)) {
            _context.next = 124;
            break;
          }
          newDate = new Date(dateOfCompletedSessionMaster.rows[0].date);
          console.log(newDate, " newDate");
          if (!(newDate < today)) {
            _context.next = 123;
            break;
          }
          _completedSessionData = _objectSpread({}, completedSessionData), _session_id = _completedSessionData.session_id, _session_type = _completedSessionData.session_type, _session_name = _completedSessionData.session_name, _session_description = _completedSessionData.session_description, _therapist = _completedSessionData.therapist, _micro_image = _completedSessionData.micro_image, _inner_image = _completedSessionData.inner_image, _created_at2 = _completedSessionData.created_at, _created_by2 = _completedSessionData.created_by, _updated_at2 = _completedSessionData.updated_at, _updated_by2 = _completedSessionData.updated_by;
          createCompletedSessionQuery = "INSERT INTO completed_session_master (session_id, session_type, session_name,session_description, therapist,micro_image, inner_image,created_at, created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *";
          createCompletedSessionValues = [_session_id, _session_type, _session_name, _session_description, _therapist, _micro_image, _inner_image, _created_at2, _created_by2, _updated_at2, _updated_by2];
          _context.prev = 101;
          _context.next = 104;
          return pool.query(createCompletedSessionQuery, createCompletedSessionValues);
        case 104:
          createCompletedSession = _context.sent;
          if (!(createCompletedSession.rowCount != 0)) {
            _context.next = 115;
            break;
          }
          deleteActiveSessionMasterQuery = "DELETE FROM active_session_master WHERE id = $1";
          deleteActiveSessionMasterValue = [_session_id];
          _context.next = 110;
          return pool.query(deleteActiveSessionMasterQuery, deleteActiveSessionMasterValue);
        case 110:
          deleteActiveSessionMaster = _context.sent;
          if (!(deleteActiveSessionMaster.rowCount != 0)) {
            _context.next = 113;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Completed Session created Successfully",
            data: createCompletedSession.rows
          }));
        case 113:
          _context.next = 116;
          break;
        case 115:
          throw new Error("Session is already completed");
        case 116:
          _context.next = 121;
          break;
        case 118:
          _context.prev = 118;
          _context.t7 = _context["catch"](101);
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Error Due to: ".concat(_context.t7.message)
          }));
        case 121:
          _context.next = 124;
          break;
        case 123:
          throw new Error("Session is not completed till now");
        case 124:
          _context.next = 129;
          break;
        case 126:
          _context.prev = 126;
          _context.t8 = _context["catch"](87);
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Could not create the row due to :".concat(_context.t8.message)
          }));
        case 129:
          _context.next = 134;
          break;
        case 131:
          _context.prev = 131;
          _context.t9 = _context["catch"](68);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error : ".concat(_context.t9.message)
          }));
        case 134:
          return _context.abrupt("break", 177);
        case 135:
          _context.prev = 135;
          _session_id2 = column_values.session_id;
          if (_session_id2) {
            _context.next = 139;
            break;
          }
          return _context.abrupt("return", res.status(301).json({
            success: false,
            message: "All field should be provided"
          }));
        case 139:
          createCancelledSessionMasteQuery = "SELECT * FROM active_session_master WHERE id = $1";
          createCancelledSessionMasteValues = [_session_id2];
          _context.prev = 141;
          _context.next = 144;
          return pool.query(createCancelledSessionMasteQuery, createCancelledSessionMasteValues);
        case 144:
          createCancelledSessionMaster = _context.sent;
          if (!(createCancelledSessionMaster.rowCount != 0)) {
            _context.next = 164;
            break;
          }
          _row = createCancelledSessionMaster.rows[0];
          activeSessionMasterData = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
            session_id: _row.id,
            session_type: _row.session_type
          }, "session_type", _row.session_type), "session_name", _row.session_name), "session_description", _row.session_description), "therapist", _row.therapist), "micro_image", _row.micro_image), "inner_image", _row.inner_image), "created_at", today), "created_by", _row.created_by), "updated_at", today), "updated_by", _row.updated_by);
          _activeSessionMasterD2 = _objectSpread({}, activeSessionMasterData), _session_id3 = _activeSessionMasterD2.session_id, _session_type2 = _activeSessionMasterD2.session_type, _session_name2 = _activeSessionMasterD2.session_name, _session_description2 = _activeSessionMasterD2.session_description, _therapist2 = _activeSessionMasterD2.therapist, _micro_image2 = _activeSessionMasterD2.micro_image, _inner_image2 = _activeSessionMasterD2.inner_image, _created_at3 = _activeSessionMasterD2.created_at, _created_by3 = _activeSessionMasterD2.created_by, _updated_at3 = _activeSessionMasterD2.updated_at, _updated_by3 = _activeSessionMasterD2.updated_by;
          createCancelledSessionMasterQuery = "INSERT INTO cancelled_session_master (session_id, session_type, session_name,session_description, therapist,micro_image, inner_image,created_at, created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *";
          createCancelledSessionMasterValues = [_session_id3, _session_type2, _session_name2, _session_description2, _therapist2, _micro_image2, _inner_image2, _created_at3, _created_by3, _updated_at3, _updated_by3];
          _context.next = 153;
          return pool.query(createCancelledSessionMasterQuery, createCancelledSessionMasterValues);
        case 153:
          newCancelledSession = _context.sent;
          if (!(newCancelledSession.rowCount != 0)) {
            _context.next = 162;
            break;
          }
          _deleteActiveSessionMasterQuery = "DELETE FROM active_session_master WHERE id = $1";
          _deleteActiveSessionMasterValue = [_session_id3];
          _context.next = 159;
          return pool.query(_deleteActiveSessionMasterQuery, _deleteActiveSessionMasterValue);
        case 159:
          _deleteActiveSessionMaster = _context.sent;
          if (!(_deleteActiveSessionMaster.rowCount != 0)) {
            _context.next = 162;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Cancelled Session created Successfully",
            data: newCancelledSession.rows
          }));
        case 162:
          _context.next = 165;
          break;
        case 164:
          throw new Error();
        case 165:
          _context.next = 170;
          break;
        case 167:
          _context.prev = 167;
          _context.t10 = _context["catch"](141);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Could not add the Row because :".concat(err.message)
          }));
        case 170:
          _context.next = 175;
          break;
        case 172:
          _context.prev = 172;
          _context.t11 = _context["catch"](135);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error :".concat(_context.t11.message)
          }));
        case 175:
          return _context.abrupt("break", 177);
        case 176:
          return _context.abrupt("return", res.status(402).json({
            success: false,
            message: "Table not found"
          }));
        case 177:
          _context.t12 = table;
          _context.next = _context.t12 === "active_session_master" ? 180 : _context.t12 === "session_details" ? 213 : _context.t12 === "completed_session_master" ? 239 : _context.t12 === "cancelled_session_master" ? 261 : 283;
          break;
        case 180:
          _context.prev = 180;
          _id = column_values.id;
          if (_id) {
            _context.next = 184;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "Session Id needed"
          }));
        case 184:
          readSessionDetailsQuery = "SELECT * FROM session_details WHERE session_id = $1";
          readSessionDetailsValues = [_id];
          readActiveSessionMasterQuery = "SELECT * FROM active_session_master WHERE id = $1";
          _context.prev = 187;
          _context.next = 190;
          return pool.query(readActiveSessionMasterQuery, readSessionDetailsValues);
        case 190:
          readActiveSessionMaster = _context.sent;
          _context.next = 193;
          return pool.query(readSessionDetailsQuery, readSessionDetailsValues);
        case 193:
          readSessionDetails = _context.sent;
          if (!(readSessionDetails.rowCount == 0)) {
            _context.next = 196;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Session Details is not Found",
            data: readActiveSessionMaster.rows[0]
          }));
        case 196:
          if (!(readActiveSessionMaster.rowCount != 0 && readSessionDetails.rowCount != 0)) {
            _context.next = 201;
            break;
          }
          fullData = [].concat(_toConsumableArray(readActiveSessionMaster.rows), _toConsumableArray(readSessionDetails.rows));
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "All the Rows From the Active Session table",
            data: fullData
          }));
        case 201:
          throw new Error("Sesssion Details or the Active Session Master");
        case 202:
          _context.next = 207;
          break;
        case 204:
          _context.prev = 204;
          _context.t13 = _context["catch"](187);
          return _context.abrupt("return", res.status(302).json({
            succes: false,
            message: "Could perform the Operation due to error : ".concat(_context.t13.message)
          }));
        case 207:
          _context.next = 212;
          break;
        case 209:
          _context.prev = 209;
          _context.t14 = _context["catch"](180);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error :".concat(_context.t14.message)
          }));
        case 212:
          return _context.abrupt("break", 284);
        case 213:
          _context.prev = 213;
          _id2 = column_values.id;
          if (_id2) {
            _context.next = 217;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "Session Id needed"
          }));
        case 217:
          _readSessionDetailsQuery = "SELECT * FROM session_details WHERE session_id = $1";
          _readSessionDetailsValues = [_id2];
          _context.prev = 219;
          _context.next = 222;
          return pool.query(_readSessionDetailsQuery, _readSessionDetailsValues);
        case 222:
          _readSessionDetails = _context.sent;
          if (!(_readSessionDetails.rowCount != 0)) {
            _context.next = 227;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "All the Rows From the Session Details table",
            data: _readSessionDetails.rows[0]
          }));
        case 227:
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "No Data Found"
          }));
        case 228:
          _context.next = 233;
          break;
        case 230:
          _context.prev = 230;
          _context.t15 = _context["catch"](219);
          throw new Error();
        case 233:
          _context.next = 238;
          break;
        case 235:
          _context.prev = 235;
          _context.t16 = _context["catch"](213);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error :".concat(_context.t16.message)
          }));
        case 238:
          return _context.abrupt("break", 284);
        case 239:
          _context.prev = 239;
          readCompletedSessionMasterQuery = "SELECT * FROM completed_session_master";
          _context.prev = 241;
          _context.next = 244;
          return pool.query(readCompletedSessionMasterQuery);
        case 244:
          readCompletedSessionMaster = _context.sent;
          if (!(readCompletedSessionMaster.rowCount != 0)) {
            _context.next = 249;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "All the Rows From the Active Session table",
            data: readCompletedSessionMaster.rows
          }));
        case 249:
          throw new Error("Problem in Fetching Data");
        case 250:
          _context.next = 255;
          break;
        case 252:
          _context.prev = 252;
          _context.t17 = _context["catch"](241);
          return _context.abrupt("return", res.status(302).json({
            succes: false,
            message: "Could perform the Operation due to error : ".concat(_context.t17.message)
          }));
        case 255:
          _context.next = 260;
          break;
        case 257:
          _context.prev = 257;
          _context.t18 = _context["catch"](239);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error :".concat(_context.t18.message)
          }));
        case 260:
          return _context.abrupt("break", 284);
        case 261:
          _context.prev = 261;
          readCancelledSessionMasterQuery = "SELECT * FROM cancelled_session_master";
          _context.prev = 263;
          _context.next = 266;
          return pool.query(readCancelledSessionMasterQuery);
        case 266:
          readCancelledSessionMaster = _context.sent;
          if (!(readCancelledSessionMaster.rowCount != 0)) {
            _context.next = 271;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "All the Rows From the Active Session table",
            data: readCancelledSessionMaster.rows
          }));
        case 271:
          throw new Error("Problem in Fetching Data");
        case 272:
          _context.next = 277;
          break;
        case 274:
          _context.prev = 274;
          _context.t19 = _context["catch"](263);
          return _context.abrupt("return", res.status(302).json({
            succes: false,
            message: "Could perform the Operation due to error : ".concat(_context.t19.message)
          }));
        case 277:
          _context.next = 282;
          break;
        case 279:
          _context.prev = 279;
          _context.t20 = _context["catch"](261);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error :".concat(_context.t20.message)
          }));
        case 282:
          return _context.abrupt("break", 284);
        case 283:
          return _context.abrupt("return", res.status(402).json({
            success: false,
            message: "Table not found"
          }));
        case 284:
          _context.t21 = table;
          _context.next = _context.t21 === "active_session_master" ? 287 : _context.t21 === "session_details" ? 316 : 349;
          break;
        case 287:
          _errors = validationResult(req);
          if (_errors.isEmpty()) {
            _context.next = 290;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            errors: _errors.array()
          }));
        case 290:
          _context.prev = 290;
          _session_type3 = column_values.session_type, _session_name3 = column_values.session_name, _session_description3 = column_values.session_description, _therapist3 = column_values.therapist, _created_at4 = column_values.created_at, _created_by4 = column_values.created_by, _updated_at4 = column_values.updated_at, _updated_by4 = column_values.updated_by, _id3 = column_values.id;
          if (_session_type3 || _session_name3 || _session_description3 || _therapist3 || _created_at4 || _created_by4 || _updated_at4 || _updated_by4 || _id3) {
            _context.next = 294;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Please Provide all the fields"
          }));
        case 294:
          updateActiveSessionMasterQuery = "UPDATE active_session_master SET session_type = $1 , session_name = $2 , session_description = $3 , therapist =$4 , micro_image = $5 , inner_image = $6 , created_at =$7 , created_by =$8 , updated_at =$9 , updated_by=$10 WHERE id=$11";
          updateActiveSessionMasterValues = [_session_type3, _session_name3, _session_description3, _therapist3, micro_image, inner_image, _created_at4, _created_by4, _updated_at4, _updated_by4, _id3];
          _context.prev = 296;
          _context.next = 299;
          return pool.query(updateActiveSessionMasterQuery, updateActiveSessionMasterValues);
        case 299:
          updateActiveSessionMaster = _context.sent;
          if (!(updateActiveSessionMaster.rowCount != 0)) {
            _context.next = 304;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Session updated Successfully",
            data: updateActiveSessionMaster.rows
          }));
        case 304:
          throw new Error("Session not begin Updated");
        case 305:
          _context.next = 310;
          break;
        case 307:
          _context.prev = 307;
          _context.t22 = _context["catch"](296);
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Could not create Data due to : ".concat(_context.t22.message)
          }));
        case 310:
          _context.next = 315;
          break;
        case 312:
          _context.prev = 312;
          _context.t23 = _context["catch"](290);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error : ".concat(_context.t23.message)
          }));
        case 315:
          return _context.abrupt("break", 350);
        case 316:
          _context.prev = 316;
          _column_values$update = column_values.updated_values, _date = _column_values$update.date, _start_time = _column_values$update.start_time, _end_time = _column_values$update.end_time, _price = _column_values$update.price, _capacity = _column_values$update.capacity, _created_at5 = _column_values$update.created_at, _created_by5 = _column_values$update.created_by, _updated_at5 = _column_values$update.updated_at, _updated_by5 = _column_values$update.updated_by;
          console.log(_start_time);
          _session_id4 = column_values.session_id.session_id;
          console.log(_session_id4);
          if (_date && _start_time && _end_time && _price && _capacity && _created_at5 && _created_by5 && _updated_at5 && _updated_by5 && _session_id4) {
            _context.next = 323;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "All Fields are not Provided"
          }));
        case 323:
          updateSessionDetailsQuery = "UPDATE session_details SET date = $1, start_time = $2, end_time = $3, price = $4, capacity = $5, created_at = $6, created_by = $7, updated_at = $8, updated_by = $9 WHERE session_id = $10";
          updateSessionDetailsValue = [_date, _start_time, _end_time, _price, _capacity, _created_at5, _created_by5, _updated_at5, _updated_by5, _session_id4];
          _context.prev = 325;
          _context.next = 328;
          return pool.query(updateSessionDetailsQuery, updateSessionDetailsValue);
        case 328:
          result = _context.sent;
          _context.next = 331;
          return pool.query(updateSessionDetailsQuery, updateSessionDetailsValue);
        case 331:
          updateSessionDetails = _context.sent;
          console.log(updateSessionDetails.rowCount);
          if (!(updateSessionDetails.rowCount != 0)) {
            _context.next = 337;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateSessionDetails.rows
          }));
        case 337:
          throw new Error("Details is not being Upadated");
        case 338:
          _context.next = 343;
          break;
        case 340:
          _context.prev = 340;
          _context.t24 = _context["catch"](325);
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "Could not create table due to ".concat(_context.t24.message)
          }));
        case 343:
          _context.next = 348;
          break;
        case 345:
          _context.prev = 345;
          _context.t25 = _context["catch"](316);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error : ".concat(_context.t25.message)
          }));
        case 348:
          return _context.abrupt("break", 350);
        case 349:
          return _context.abrupt("return", res.status(402).json({
            success: false,
            message: "Table not found"
          }));
        case 350:
          _context.t26 = table;
          _context.next = _context.t26 === "active_session_master" ? 353 : _context.t26 === "completed_session_master" ? 378 : _context.t26 === "cancelled_session_master" ? 412 : 445;
          break;
        case 353:
          _context.prev = 353;
          _session_id5 = column_values.session_id;
          if (_session_id5) {
            _context.next = 357;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: "Id is not present"
          }));
        case 357:
          deletequery = "DELETE FROM active_session_master WHERE id = $1";
          deleteValues = [_session_id5];
          deleteSessionDetailsquery = "DELETE FROM session_details WHERE session_id = $1";
          deleteSessionDetailsValues = [_session_id5];
          _context.next = 363;
          return pool.query(deleteSessionDetailsquery, deleteSessionDetailsValues);
        case 363:
          deletedSessionDetails = _context.sent;
          if (!(deletedSessionDetails.rowCount != 0)) {
            _context.next = 371;
            break;
          }
          _context.next = 367;
          return pool.query(deletequery, deleteValues);
        case 367:
          deletedactiveSessionDetails = _context.sent;
          if (!(deletedactiveSessionDetails.rowCount == 0)) {
            _context.next = 370;
            break;
          }
          throw new Error("Invalid Data");
        case 370:
          return _context.abrupt("return", res.status(200).json({
            message: "Data delete Successfully",
            data: deletedSessionDetails.rows[0]
          }));
        case 371:
          _context.next = 377;
          break;
        case 373:
          _context.prev = 373;
          _context.t27 = _context["catch"](353);
          console.log(_context.t27);
          return _context.abrupt("return", res.status(404).json({
            message: _context.t27.meassage
          }));
        case 377:
          return _context.abrupt("break", 446);
        case 378:
          _context.prev = 378;
          _session_id6 = column_values.session_id;
          if (_session_id6) {
            _context.next = 382;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "All field should be provided"
          }));
        case 382:
          deleteCompletedSessionMasterQuery = "DELETE FROM completed_session_master WHERE session_id = $1";
          deleteCompletedSessionMasterValues = [_session_id6];
          _context.prev = 384;
          _context.next = 387;
          return pool.query("BEGIN");
        case 387:
          _context.next = 389;
          return pool.query(deleteCompletedSessionMasterQuery, deleteCompletedSessionMasterValues);
        case 389:
          deleteCompletedSessionMaster = _context.sent;
          if (!(deleteCompletedSessionMaster.rowCount != 0)) {
            _context.next = 396;
            break;
          }
          _context.next = 393;
          return pool.query("COMMIT");
        case 393:
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data is Deleted successfully",
            data: deleteCompletedSessionMaster.rows[0]
          }));
        case 396:
          _context.next = 398;
          return pool.query("ROLLBACK");
        case 398:
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "ID not found"
          }));
        case 399:
          _context.next = 406;
          break;
        case 401:
          _context.prev = 401;
          _context.t28 = _context["catch"](384);
          _context.next = 405;
          return pool.query("ROLLBACK");
        case 405:
          throw new Error("Not Able to fetch the data");
        case 406:
          _context.next = 411;
          break;
        case 408:
          _context.prev = 408;
          _context.t29 = _context["catch"](378);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error :".concat(_context.t29.message)
          }));
        case 411:
          return _context.abrupt("break", 446);
        case 412:
          _context.prev = 412;
          _session_id7 = column_values.session_id;
          if (_session_id7) {
            _context.next = 416;
            break;
          }
          return _context.abrupt("return", res.status(302).json({
            success: false,
            message: "All field should be provided"
          }));
        case 416:
          deleteCancelledSessionMasterQuery = "DELETE FROM cancelled_session_master WHERE session_id = $1";
          deleteCancelledSessionMasterValues = [_session_id7];
          _context.prev = 418;
          _context.next = 421;
          return pool.query("BEGIN");
        case 421:
          _context.next = 423;
          return pool.query(deleteCancelledSessionMasterQuery, deleteCancelledSessionMasterValues);
        case 423:
          deleteCancelledSessionMaster = _context.sent;
          if (!(deleteCancelledSessionMaster.rowCount != 0)) {
            _context.next = 430;
            break;
          }
          _context.next = 427;
          return pool.query("COMMIT");
        case 427:
          return _context.abrupt("return", res.status(200).json({
            success: true,
            message: "Data is Deleted successfully",
            data: deleteCancelledSessionMaster.rows[0]
          }));
        case 430:
          _context.next = 432;
          return pool.query("ROLLBACK");
        case 432:
          return _context.abrupt("return", res.status(302).json({
            success: true,
            message: "ID not found"
          }));
        case 433:
          _context.next = 440;
          break;
        case 435:
          _context.prev = 435;
          _context.t30 = _context["catch"](418);
          _context.next = 439;
          return pool.query("ROLLBACK");
        case 439:
          throw new Error("Not Able to fetch the data");
        case 440:
          _context.next = 445;
          break;
        case 442:
          _context.prev = 442;
          _context.t31 = _context["catch"](412);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal Server Error :".concat(_context.t31.message)
          }));
        case 445:
          return _context.abrupt("return", res.status(402).json({
            success: false,
            message: "Table not found"
          }));
        case 446:
          return _context.abrupt("return", res.status(402).json({
            success: false,
            message: "Operation not found to perform"
          }));
        case 447:
          _context.next = 453;
          break;
        case 449:
          _context.prev = 449;
          _context.t32 = _context["catch"](0);
          console.log(_context.t32);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: "Internal server Error :".concat(_context.t32.message)
          }));
        case 453:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 449], [16, 38], [22, 33], [42, 64], [48, 59], [68, 131], [74, 82], [87, 126], [101, 118], [135, 172], [141, 167], [180, 209], [187, 204], [213, 235], [219, 230], [239, 257], [241, 252], [261, 279], [263, 274], [290, 312], [296, 307], [316, 345], [325, 340], [353, 373], [378, 408], [384, 401], [412, 442], [418, 435]]);
  }));
  return function activeSessionController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = {
  activeSessionController: activeSessionController
};