"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var pool = require('../database/db.js');
var dynamicController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, operation, table_name, column_values, result, id, query, question_id, queryOptions, question, created_by1, updated_by1, insertQuestionQuery, _question_id, options, created_by, updated_by, optionsAdded, _question_id2, deleteQuery, _id, deleteQuestionQuery, id1, option, is_correct, _updated_by, query1, values1, result1, currentDate, query2, values2, result2, _id2, _question, _updated_by2, updated_at, updateQuestionQuery;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, operation = _req$body.operation, table_name = _req$body.table_name, column_values = _req$body.column_values;
          _context2.prev = 1;
          _context2.t0 = operation;
          _context2.next = _context2.t0 === "read" ? 5 : _context2.t0 === "create" ? 24 : _context2.t0 === "delete" ? 42 : _context2.t0 === "update" ? 61 : 96;
          break;
        case 5:
          _context2.t1 = table_name;
          _context2.next = _context2.t1 === "match_therapist_questions" ? 8 : _context2.t1 === "match_therapist_questions_options" ? 15 : 22;
          break;
        case 8:
          id = column_values.id;
          query = "SELECT question, created_at, created_by, updated_at, updated_by, id FROM match_therapist_questions WHERE id = $1";
          _context2.next = 12;
          return pool.query(query, [id]);
        case 12:
          result = _context2.sent;
          res.status(200).send(result.rows);
          return _context2.abrupt("break", 23);
        case 15:
          question_id = column_values.question_id;
          queryOptions = "SELECT  question_id, option, is_correct, created_at, created_by, updated_at, updated_by FROM match_therapist_questions_options WHERE question_id = $1";
          _context2.next = 19;
          return pool.query(queryOptions, [question_id]);
        case 19:
          result = _context2.sent;
          res.status(200).send(result.rows);
          return _context2.abrupt("break", 23);
        case 22:
          res.status(400).send("Invalid table name");
        case 23:
          return _context2.abrupt("break", 97);
        case 24:
          _context2.t2 = table_name;
          _context2.next = _context2.t2 === "match_therapist_questions" ? 27 : _context2.t2 === "match_therapist_questions_options" ? 34 : 40;
          break;
        case 27:
          question = column_values.question, created_by1 = column_values.created_by, updated_by1 = column_values.updated_by;
          insertQuestionQuery = "INSERT INTO match_therapist_questions(question,created_by,updated_by ) VALUES($1,$2,$3) RETURNING *";
          _context2.next = 31;
          return pool.query(insertQuestionQuery, [question, created_by1, updated_by1]);
        case 31:
          result = _context2.sent;
          res.status(201).send({
            message: "Record inserted successfully",
            question: result.rows[0]
          });
          return _context2.abrupt("break", 41);
        case 34:
          // const { question_id, option, is_correct, created_by, updated_by } = column_values;
          // const insertOptionsQuery = `INSERT INTO match_therapist_questions_options(question_id, option, is_correct, created_by, updated_by) VALUES($1, $2, $3, $4, $5) RETURNING *`;
          // result = await pool.query(insertOptionsQuery, [question_id, option, is_correct, created_by, updated_by]);
          // res.status(201).send({ message: "option inserted successfully", option: result.rows[0] });
          _question_id = column_values.question_id, options = column_values.options, created_by = column_values.created_by, updated_by = column_values.updated_by;
          optionsAdded = [];
          _context2.next = 38;
          return Promise.all(options.map( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(obj) {
              var query4, values4, result4;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    query4 = 'INSERT INTO match_therapist_questions_options (question_id,option, is_correct, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *';
                    values4 = [_question_id, obj.option, obj.is_correct, created_by, updated_by];
                    _context.next = 4;
                    return pool.query(query4, values4);
                  case 4:
                    result4 = _context.sent;
                    optionsAdded.push(result4.rows[0]);
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 38:
          res.status(201).json({
            success: true,
            message: "Options added succesfully",
            result: {
              options: optionsAdded
            }
          });
          return _context2.abrupt("break", 41);
        case 40:
          res.status(400).send("Invalid table name");
        case 41:
          return _context2.abrupt("break", 97);
        case 42:
          _context2.t3 = table_name;
          _context2.next = _context2.t3 === "match_therapist_questions_options" ? 45 : _context2.t3 === "match_therapist_questions" ? 52 : 59;
          break;
        case 45:
          _question_id2 = column_values.question_id;
          deleteQuery = "DELETE FROM match_therapist_questions_options WHERE question_id = $1";
          _context2.next = 49;
          return pool.query(deleteQuery, [_question_id2]);
        case 49:
          result = _context2.sent;
          res.status(200).send({
            message: "Option deleted successfully"
          });
          return _context2.abrupt("break", 60);
        case 52:
          _id = column_values.id;
          deleteQuestionQuery = "DELETE FROM match_therapist_questions WHERE id = $1";
          _context2.next = 56;
          return pool.query(deleteQuestionQuery, [_id]);
        case 56:
          result = _context2.sent;
          res.status(200).send({
            message: "Question deleted successfully"
          });
          return _context2.abrupt("break", 60);
        case 59:
          res.status(400).send("Invalid table name");
        case 60:
          return _context2.abrupt("break", 97);
        case 61:
          _context2.prev = 61;
          _context2.t4 = table_name;
          _context2.next = _context2.t4 === "match_therapist_questions_options" ? 65 : _context2.t4 === "match_therapist_questions" ? 81 : 88;
          break;
        case 65:
          // const { option, question_id } = column_values;
          // // const updateQuery = `UPDATE match_therapist_questions_options SET option = $1 WHERE question_id = $2`;
          // // result = await pool.query(updateQuery, [option, question_id]);
          // // if (result.rowCount > 0) {
          // //     res.status(200).send({ message: "Option updated successfully" });
          // // } else {
          // //     res.status(404).send({ message: "Option not found" });
          // // }
          id1 = column_values.id, option = column_values.option, is_correct = column_values.is_correct, _updated_by = column_values.updated_by;
          query1 = 'SELECT option FROM match_therapist_questions_options WHERE id=$1';
          values1 = [id1];
          _context2.next = 70;
          return pool.query(query1, values1);
        case 70:
          result1 = _context2.sent;
          if (!(result1.rowCount == 0)) {
            _context2.next = 73;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            success: false,
            message: "Option does not exist"
          }));
        case 73:
          currentDate = new Date();
          query2 = 'UPDATE match_therapist_questions_options SET option=$1, is_correct=$2 ,updated_by=$3, updated_at=$4 WHERE id=$5 RETURNING *';
          values2 = [option, is_correct, _updated_by, currentDate, id1];
          _context2.next = 78;
          return pool.query(query2, values2);
        case 78:
          result2 = _context2.sent;
          res.status(200).json({
            success: true,
            message: "Option updated succesfully",
            result: result2.rows[0]
          });
          return _context2.abrupt("break", 89);
        case 81:
          _id2 = column_values.id, _question = column_values.question, _updated_by2 = column_values.updated_by, updated_at = column_values.updated_at;
          updateQuestionQuery = "UPDATE match_therapist_questions SET question = $1, updated_by=$2,updated_at=$3  WHERE id = $4 RETURNING *";
          _context2.next = 85;
          return pool.query(updateQuestionQuery, [_question, _updated_by2, updated_at, _id2]);
        case 85:
          result = _context2.sent;
          if (result.rowCount > 0) {
            res.status(200).send({
              message: "Question updated successfully",
              question: result.rows[0]
            });
          } else {
            res.status(404).send({
              message: "Question not found"
            });
          }
          return _context2.abrupt("break", 89);
        case 88:
          res.status(400).send("Invalid table name");
        case 89:
          _context2.next = 95;
          break;
        case 91:
          _context2.prev = 91;
          _context2.t5 = _context2["catch"](61);
          console.error("Error updating record:", _context2.t5);
          res.status(500).send({
            message: "Internal Server Error",
            error: _context2.t5.message
          });
        case 95:
          return _context2.abrupt("break", 97);
        case 96:
          res.status(400).send("Invalid operation");
        case 97:
          _context2.next = 103;
          break;
        case 99:
          _context2.prev = 99;
          _context2.t6 = _context2["catch"](1);
          console.error("Error processing request:", _context2.t6);
          res.status(500).send({
            message: "Internal Server Error",
            error: _context2.t6.message
          });
        case 103:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 99], [61, 91]]);
  }));
  return function dynamicController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = dynamicController;