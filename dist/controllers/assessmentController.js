"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var pool = require('../database/db.js');
var createAssessment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, category, assesment_name, status, created_by, updated_by, query1, values1, result1, query2, values2, result2;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, category = _req$body.category, assesment_name = _req$body.assesment_name, status = _req$body.status, created_by = _req$body.created_by, updated_by = _req$body.updated_by;
          console.log(category, assesment_name);
          _context.prev = 2;
          query1 = 'SELECT assesment_name FROM assesment_master WHERE category=$1 AND assesment_name=$2';
          values1 = [category, assesment_name];
          _context.next = 7;
          return pool.query(query1, values1);
        case 7:
          result1 = _context.sent;
          if (!(result1.rowCount != 0)) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(409).json({
            success: false,
            message: "Assesment already exist"
          }));
        case 10:
          query2 = 'INSERT INTO assesment_master (category,assesment_name,status,created_by,updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
          values2 = [category, assesment_name, status, created_by, updated_by];
          _context.next = 14;
          return pool.query(query2, values2);
        case 14:
          result2 = _context.sent;
          res.status(201).json({
            success: true,
            message: "Assessment created succesfully",
            result: result2.rows[0]
          });
          _context.next = 22;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 18]]);
  }));
  return function createAssessment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var readAssessment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body2, category, user_id, query1, values1, result1, query2, values2, result2, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, category = _req$body2.category, user_id = _req$body2.user_id;
          if (!(user_id != req.user.user_id)) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(401).json({
            success: false,
            message: "Unauthorized wrong token"
          }));
        case 4:
          query1 = 'SELECT id FROM assesment_master WHERE category=$1 AND status=$2';
          values1 = [category, 0];
          _context3.next = 8;
          return pool.query(query1, values1);
        case 8:
          result1 = _context3.sent;
          if (!(result1.rowCount == 0)) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            success: false,
            message: "Assessment not found"
          }));
        case 11:
          query2 = 'SELECT id, question FROM assesment_questions WHERE assesment_id=$1 AND status=$2';
          values2 = [result1.rows[0].id, 0];
          _context3.next = 15;
          return pool.query(query2, values2);
        case 15:
          result2 = _context3.sent;
          if (!(result2.rowCount == 0)) {
            _context3.next = 18;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            success: false,
            message: "Questions not found"
          }));
        case 18:
          data = [];
          _context3.next = 21;
          return Promise.all(result2.rows.map( /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(obj) {
              var _result3$rows$, _result3$rows$2, _result3$rows$3, _result3$rows$4;
              var query3, values3, result3, result4;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    query3 = 'SELECT option FROM assesment_questions_options WHERE question_id=$1';
                    values3 = [obj.id];
                    _context2.next = 4;
                    return pool.query(query3, values3);
                  case 4:
                    result3 = _context2.sent;
                    _context2.next = 7;
                    return pool.query('SELECT option FROM assesment_questions_options WHERE question_id=$1 AND is_correct=$2', [obj.id, 1]);
                  case 7:
                    result4 = _context2.sent;
                    data.push({
                      question: obj.question,
                      options: {
                        option1: (_result3$rows$ = result3.rows[0]) === null || _result3$rows$ === void 0 ? void 0 : _result3$rows$.option,
                        option2: (_result3$rows$2 = result3.rows[1]) === null || _result3$rows$2 === void 0 ? void 0 : _result3$rows$2.option,
                        option3: (_result3$rows$3 = result3.rows[2]) === null || _result3$rows$3 === void 0 ? void 0 : _result3$rows$3.option,
                        option4: (_result3$rows$4 = result3.rows[3]) === null || _result3$rows$4 === void 0 ? void 0 : _result3$rows$4.option
                      },
                      correct_option: result4.rows[0].option
                    });
                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x5) {
              return _ref3.apply(this, arguments);
            };
          }()));
        case 21:
          res.status(200).json({
            success: true,
            data: data
          });
          _context3.next = 28;
          break;
        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 28:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 24]]);
  }));
  return function readAssessment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateAssessment = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body3, id, category, assesment_name, status, updated_by, query1, values1, result1, currentDate, query2, values2, result2;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body3 = req.body, id = _req$body3.id, category = _req$body3.category, assesment_name = _req$body3.assesment_name, status = _req$body3.status, updated_by = _req$body3.updated_by;
          _context4.prev = 1;
          query1 = 'SELECT assesment_name FROM assesment_master WHERE id=$1';
          values1 = [id];
          _context4.next = 6;
          return pool.query(query1, values1);
        case 6:
          result1 = _context4.sent;
          if (!(result1.rowCount == 0)) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(401).json({
            success: false,
            message: "Assesment does not exist"
          }));
        case 9:
          currentDate = new Date();
          query2 = 'UPDATE  assesment_master SET category=$1, assesment_name=$2 ,status=$3 ,updated_by=$4, updated_at=$5 WHERE id=$6 RETURNING *';
          values2 = [category, assesment_name, status, updated_by, currentDate, id];
          _context4.next = 14;
          return pool.query(query2, values2);
        case 14:
          result2 = _context4.sent;
          res.status(200).json({
            success: true,
            message: "Assessment updated succesfully",
            result: result2.rows[0]
          });
          _context4.next = 22;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 22:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 18]]);
  }));
  return function updateAssessment(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteAssessment = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, result1, question_ids, result2;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.body.id;
          _context6.prev = 1;
          _context6.next = 4;
          return pool.query('SELECT id FROM assesment_master WHERE id=$1', [id]);
        case 4:
          result1 = _context6.sent;
          if (!(result1.rowCount == 0)) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            success: false,
            message: 'Assessment not found'
          }));
        case 7:
          question_ids = [];
          _context6.next = 10;
          return pool.query('SELECT id FROM assesment_questions WHERE assesment_id=$1', [result1.rows[0].id]);
        case 10:
          result2 = _context6.sent;
          result2.rows.map(function (obj) {
            question_ids.push(obj.id);
          });
          question_ids.map( /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return pool.query('DELETE FROM assesment_questions_options WHERE question_id = $1', [id]);
                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x10) {
              return _ref6.apply(this, arguments);
            };
          }());
          _context6.next = 15;
          return pool.query('DELETE FROM assesment_questions WHERE assesment_id = $1', [result1.rows[0].id]);
        case 15:
          _context6.next = 17;
          return pool.query('DELETE FROM assesment_master WHERE id = $1', [id]);
        case 17:
          res.status(200).json({
            success: true,
            message: "Assessment deleted successfully"
          });
          _context6.next = 24;
          break;
        case 20:
          _context6.prev = 20;
          _context6.t0 = _context6["catch"](1);
          console.log(_context6.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 20]]);
  }));
  return function deleteAssessment(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
var createAssessmentQuestionAndOptions = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body4, assesment_id, question, options, status, created_by, updated_by, query1, values1, result1, query2, values2, result2, question_id, optionsAdded;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body4 = req.body, assesment_id = _req$body4.assesment_id, question = _req$body4.question, options = _req$body4.options, status = _req$body4.status, created_by = _req$body4.created_by, updated_by = _req$body4.updated_by;
          _context8.prev = 1;
          query1 = 'SELECT question FROM assesment_questions WHERE question=$1 AND assesment_id=$2';
          values1 = [question, assesment_id];
          _context8.next = 6;
          return pool.query(query1, values1);
        case 6:
          result1 = _context8.sent;
          if (!(result1.rowCount != 0)) {
            _context8.next = 9;
            break;
          }
          return _context8.abrupt("return", res.status(401).json({
            success: false,
            message: "Question already exist"
          }));
        case 9:
          query2 = 'INSERT INTO assesment_questions (assesment_id,question, status, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
          values2 = [assesment_id, question, status, created_by, updated_by];
          _context8.next = 13;
          return pool.query(query2, values2);
        case 13:
          result2 = _context8.sent;
          question_id = result2.rows[0].id;
          optionsAdded = [];
          _context8.next = 18;
          return Promise.all(options.map( /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(obj) {
              var query4, values4, result4;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    query4 = 'INSERT INTO assesment_questions_options (question_id,option, is_correct, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
                    values4 = [question_id, obj.option, obj.is_correct, created_by, updated_by];
                    _context7.next = 4;
                    return pool.query(query4, values4);
                  case 4:
                    result4 = _context7.sent;
                    optionsAdded.push(result4.rows[0]);
                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x13) {
              return _ref8.apply(this, arguments);
            };
          }()));
        case 18:
          res.status(201).json({
            success: true,
            message: "Question created succesfully",
            result: {
              question: result2.rows[0],
              options: optionsAdded
            }
          });
          _context8.next = 25;
          break;
        case 21:
          _context8.prev = 21;
          _context8.t0 = _context8["catch"](1);
          console.log(_context8.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 25:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 21]]);
  }));
  return function createAssessmentQuestionAndOptions(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var createAssessmentQuestion = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body5, assesment_id, question, status, created_by, updated_by, query1, values1, result1, query2, values2, result2;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$body5 = req.body, assesment_id = _req$body5.assesment_id, question = _req$body5.question, status = _req$body5.status, created_by = _req$body5.created_by, updated_by = _req$body5.updated_by;
          _context9.prev = 1;
          query1 = 'SELECT question FROM assesment_questions WHERE question=$1 AND assesment_id=$2';
          values1 = [question, assesment_id];
          _context9.next = 6;
          return pool.query(query1, values1);
        case 6:
          result1 = _context9.sent;
          if (!(result1.rowCount != 0)) {
            _context9.next = 9;
            break;
          }
          return _context9.abrupt("return", res.status(409).json({
            success: false,
            message: "Question already exist"
          }));
        case 9:
          query2 = 'INSERT INTO assesment_questions (assesment_id,question, status, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
          values2 = [assesment_id, question, status, created_by, updated_by];
          _context9.next = 13;
          return pool.query(query2, values2);
        case 13:
          result2 = _context9.sent;
          res.status(201).json({
            success: true,
            message: "Question created succesfully",
            result: result2.rows[0]
          });
          _context9.next = 21;
          break;
        case 17:
          _context9.prev = 17;
          _context9.t0 = _context9["catch"](1);
          console.log(_context9.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 21:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 17]]);
  }));
  return function createAssessmentQuestion(_x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();
var updateAssessmentQuestion = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body6, id, question, status, updated_by, query1, values1, result1, currentDate, query2, values2, result2;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _req$body6 = req.body, id = _req$body6.id, question = _req$body6.question, status = _req$body6.status, updated_by = _req$body6.updated_by;
          _context10.prev = 1;
          query1 = 'SELECT question FROM assesment_questions WHERE id=$1';
          values1 = [id];
          _context10.next = 6;
          return pool.query(query1, values1);
        case 6:
          result1 = _context10.sent;
          if (!(result1.rowCount == 0)) {
            _context10.next = 9;
            break;
          }
          return _context10.abrupt("return", res.status(401).json({
            success: false,
            message: "Question does not exist"
          }));
        case 9:
          currentDate = new Date();
          query2 = 'UPDATE  assesment_questions SET question=$1, status=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *';
          values2 = [question, status, updated_by, currentDate, id];
          _context10.next = 14;
          return pool.query(query2, values2);
        case 14:
          result2 = _context10.sent;
          res.status(200).json({
            success: true,
            message: "Question updated succesfully",
            result: result2.rows[0]
          });
          _context10.next = 22;
          break;
        case 18:
          _context10.prev = 18;
          _context10.t0 = _context10["catch"](1);
          console.log(_context10.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 22:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 18]]);
  }));
  return function updateAssessmentQuestion(_x16, _x17) {
    return _ref10.apply(this, arguments);
  };
}();
var deleteAssessmentQuestion = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var id, result1;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          id = req.body.id;
          _context11.prev = 1;
          _context11.next = 4;
          return pool.query('SELECT id FROM assesment_questions WHERE id=$1', [id]);
        case 4:
          result1 = _context11.sent;
          if (!(result1.rowCount == 0)) {
            _context11.next = 7;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            success: false,
            message: 'Assessment Question not found'
          }));
        case 7:
          _context11.next = 9;
          return pool.query('DELETE FROM assesment_questions_options WHERE question_id = $1', [id]);
        case 9:
          _context11.next = 11;
          return pool.query('DELETE FROM assesment_questions WHERE id = $1', [id]);
        case 11:
          res.status(200).json({
            success: true,
            message: "Assessment Question deleted successfully"
          });
          _context11.next = 18;
          break;
        case 14:
          _context11.prev = 14;
          _context11.t0 = _context11["catch"](1);
          console.log(_context11.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 18:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 14]]);
  }));
  return function deleteAssessmentQuestion(_x18, _x19) {
    return _ref11.apply(this, arguments);
  };
}();
var createAssessmentQuestionOption = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body7, question_id, option, is_correct, created_by, updated_by, query1, values1, result1, query2, values2, result2;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _req$body7 = req.body, question_id = _req$body7.question_id, option = _req$body7.option, is_correct = _req$body7.is_correct, created_by = _req$body7.created_by, updated_by = _req$body7.updated_by;
          _context12.prev = 1;
          query1 = 'SELECT option FROM assesment_questions_options WHERE option=$1 AND question_id=$2';
          values1 = [option, question_id];
          _context12.next = 6;
          return pool.query(query1, values1);
        case 6:
          result1 = _context12.sent;
          if (!(result1.rowCount != 0)) {
            _context12.next = 9;
            break;
          }
          return _context12.abrupt("return", res.status(401).json({
            success: false,
            message: "Option already exist"
          }));
        case 9:
          query2 = 'INSERT INTO assesment_questions_options (question_id,option, is_correct, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
          values2 = [question_id, option, is_correct, created_by, updated_by];
          _context12.next = 13;
          return pool.query(query2, values2);
        case 13:
          result2 = _context12.sent;
          res.status(201).json({
            success: true,
            message: "Option created succesfully",
            result: result2.rows[0]
          });
          _context12.next = 21;
          break;
        case 17:
          _context12.prev = 17;
          _context12.t0 = _context12["catch"](1);
          console.log(_context12.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 21:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[1, 17]]);
  }));
  return function createAssessmentQuestionOption(_x20, _x21) {
    return _ref12.apply(this, arguments);
  };
}();
var updateAssessmentQuestionOption = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body8, id, option, is_correct, updated_by, query1, values1, result1, currentDate, query2, values2, result2;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _req$body8 = req.body, id = _req$body8.id, option = _req$body8.option, is_correct = _req$body8.is_correct, updated_by = _req$body8.updated_by;
          _context13.prev = 1;
          query1 = 'SELECT option FROM assesment_questions_options WHERE id=$1';
          values1 = [id];
          _context13.next = 6;
          return pool.query(query1, values1);
        case 6:
          result1 = _context13.sent;
          if (!(result1.rowCount == 0)) {
            _context13.next = 9;
            break;
          }
          return _context13.abrupt("return", res.status(401).json({
            success: false,
            message: "Option does not exist"
          }));
        case 9:
          currentDate = new Date();
          query2 = 'UPDATE  assesment_questions_options SET option=$1, is_correct=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *';
          values2 = [option, is_correct, updated_by, currentDate, id];
          _context13.next = 14;
          return pool.query(query2, values2);
        case 14:
          result2 = _context13.sent;
          res.status(200).json({
            success: true,
            message: "Option updated succesfully",
            result: result2.rows[0]
          });
          _context13.next = 22;
          break;
        case 18:
          _context13.prev = 18;
          _context13.t0 = _context13["catch"](1);
          console.log(_context13.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 22:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 18]]);
  }));
  return function updateAssessmentQuestionOption(_x22, _x23) {
    return _ref13.apply(this, arguments);
  };
}();
var deleteAssessmentQuestionOption = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var id, result1;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          id = req.body.id;
          _context14.prev = 1;
          _context14.next = 4;
          return pool.query('SELECT id FROM assesment_questions_options WHERE id=$1', [id]);
        case 4:
          result1 = _context14.sent;
          if (!(result1.rowCount == 0)) {
            _context14.next = 7;
            break;
          }
          return _context14.abrupt("return", res.status(404).json({
            success: false,
            message: 'Assessment Question Option not found'
          }));
        case 7:
          _context14.next = 9;
          return pool.query('DELETE FROM assesment_questions_options WHERE id = $1', [id]);
        case 9:
          res.status(200).json({
            success: true,
            message: "Assessment Question Option deleted successfully"
          });
          _context14.next = 16;
          break;
        case 12:
          _context14.prev = 12;
          _context14.t0 = _context14["catch"](1);
          console.log(_context14.t0.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 16:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 12]]);
  }));
  return function deleteAssessmentQuestionOption(_x24, _x25) {
    return _ref14.apply(this, arguments);
  };
}();
module.exports = {
  createAssessment: createAssessment,
  updateAssessment: updateAssessment,
  createAssessmentQuestionOption: createAssessmentQuestionOption,
  updateAssessmentQuestionOption: updateAssessmentQuestionOption,
  updateAssessmentQuestion: updateAssessmentQuestion,
  createAssessmentQuestion: createAssessmentQuestion,
  readAssessment: readAssessment,
  deleteAssessment: deleteAssessment,
  deleteAssessmentQuestion: deleteAssessmentQuestion,
  deleteAssessmentQuestionOption: deleteAssessmentQuestionOption,
  createAssessmentQuestionAndOptions: createAssessmentQuestionAndOptions
};