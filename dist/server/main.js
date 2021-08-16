/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/crud/crud.ctrl.js":
/*!**********************************!*\
  !*** ./server/crud/crud.ctrl.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _generators_http_HttpResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generators/http/HttpResponse */ "./server/generators/http/HttpResponse.js");
/* harmony import */ var _generators_ws_WSResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generators/ws/WSResponse */ "./server/generators/ws/WSResponse.js");
/* harmony import */ var _crud_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crud.model */ "./server/crud/crud.model.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function crudCtrl(route, wsInfo) {
  var router = express__WEBPACK_IMPORTED_MODULE_3___default().Router();
  var model = (0,_crud_model__WEBPACK_IMPORTED_MODULE_6__.default)(route); // Broadcast json response by ws

  var wsJsonBroadCast = function wsJsonBroadCast() {
    var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';
    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ok';
    _generators_ws_WSResponse__WEBPACK_IMPORTED_MODULE_5__.default.jsonBroadCast(wsInfo, status, data, message, route.name, method);
  }; // ===== HTTP HANDLING =====


  router.get('/', /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(req, res) {
      var httpResponse, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              httpResponse = new _generators_http_HttpResponse__WEBPACK_IMPORTED_MODULE_4__.default(res, route.name);
              _context.prev = 1;
              _context.next = 4;
              return model.find(_objectSpread({}, req.query));

            case 4:
              data = _context.sent;
              httpResponse.json(200, data);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              httpResponse.json(500, null, 'Unable to read data');

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  router.get('/:id', /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(req, res) {
      var httpResponse, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              httpResponse = new _generators_http_HttpResponse__WEBPACK_IMPORTED_MODULE_4__.default(res, route.name + '/' + req.params.id);
              _context2.prev = 1;
              _context2.next = 4;
              return model.findById(req.params.id);

            case 4:
              data = _context2.sent;

              if (!data) {
                httpResponse.json(404, null, 'Resource not found.');
              } else {
                httpResponse.json(200, data);
              }

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              httpResponse.json(500, null, _context2.t0.message);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  router.post('/', /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(req, res) {
      var httpResponse, newData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              httpResponse = new _generators_http_HttpResponse__WEBPACK_IMPORTED_MODULE_4__.default(res, route.name + '/' + req.params.id);
              _context3.prev = 1;
              newData = new model(_objectSpread({}, req.body));
              console.log(req.body, newData);
              _context3.next = 6;
              return newData.save();

            case 6:
              httpResponse.json(201, newData, 'Item created!');
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              httpResponse.json(201, null, _context3.t0.message);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  router.put('/:id', /*#__PURE__*/function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(req, res) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              delete req.body._id;
              _context4.prev = 1;
              _context4.next = 4;
              return model.updateOne({
                _id: req.params.id
              }, _objectSpread({}, req.body));

            case 4:
              res.status(200).json({
                message: 'Item Updated!'
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](1);
              res.status(422).json(_context4.t0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 7]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
  router["delete"]('/:id', /*#__PURE__*/function () {
    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(req, res) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return model.deleteOne({
                _id: req.params.id
              });

            case 3:
              res.status(200).json({
                message: 'Item deleted!'
              });
              _context5.next = 9;
              break;

            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              res.status(422).json(_context5.t0);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 6]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }()); // ===== END HTTP HANDLING =====
  // ===== Web Socket HANDLING =====

  router.ws('/post', function (ws, req) {
    ws.on('message', /*#__PURE__*/function () {
      var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6(msg) {
        var newData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                newData = new model(JSON.parse(msg));
                _context6.next = 4;
                return newData.save();

              case 4:
                console.log(newData);
                wsJsonBroadCast('post', 200, {
                  route: route.name,
                  posted: newData
                });
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                wsJsonBroadCast('post', 500, null, _context6.t0.message);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 8]]);
      }));

      return function (_x11) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
  router.ws('/put', function (ws, req) {
    ws.on('message', /*#__PURE__*/function () {
      var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7(msg) {
        var value, id, updated;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                value = JSON.parse(msg);
                id = value.id;
                delete value.id;
                _context7.next = 6;
                return model.updateOne({
                  _id: id
                }, value);

              case 6:
                _context7.next = 8;
                return model.findOne({
                  _id: id
                });

              case 8:
                updated = _context7.sent;
                wsJsonBroadCast('put', 200, {
                  route: route.name,
                  updated: updated
                });
                _context7.next = 15;
                break;

              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](0);
                wsJsonBroadCast('put', 422, null, _context7.t0.message);

              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 12]]);
      }));

      return function (_x12) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
  router.ws('/delete', function (ws, req) {
    ws.on('message', /*#__PURE__*/function () {
      var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8(msg) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return model.deleteOne({
                  _id: JSON.parse(msg).id
                });

              case 3:
                wsJsonBroadCast('delete', 200, {
                  route: route.name,
                  deletedId: JSON.parse(msg).id
                });
                _context8.next = 9;
                break;

              case 6:
                _context8.prev = 6;
                _context8.t0 = _context8["catch"](0);
                wsJsonBroadCast('delete', 422, null, _context8.t0.message);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 6]]);
      }));

      return function (_x13) {
        return _ref8.apply(this, arguments);
      };
    }());
  }); // ===== END WS HANDLING====

  return router;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (crudCtrl);

/***/ }),

/***/ "./server/crud/crud.model.js":
/*!***********************************!*\
  !*** ./server/crud/crud.model.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createModel)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generators_schema_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/schema/validation */ "./server/generators/schema/validation.js");


function createModel(route) {
  return mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(route.name, (0,_generators_schema_validation__WEBPACK_IMPORTED_MODULE_1__.default)(route.schema));
}

/***/ }),

/***/ "./server/crud/crud.router.js":
/*!************************************!*\
  !*** ./server/crud/crud.router.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crud_ctrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.ctrl */ "./server/crud/crud.ctrl.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ "./server/db.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var dbValues = Object.entries(_db__WEBPACK_IMPORTED_MODULE_1__.default);
var routes = dbValues.map(function (it) {
  return {
    name: it[0],
    schema: it[1]
  };
});

function createCrudRouter(app, wsInfo) {
  var _iterator = _createForOfIteratorHelper(routes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var r = _step.value;
      app.use('/api/' + r.name, (0,_crud_ctrl__WEBPACK_IMPORTED_MODULE_0__.default)(r, wsInfo));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCrudRouter);

/***/ }),

/***/ "./server/db.js":
/*!**********************!*\
  !*** ./server/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MONGO_URI": () => (/* binding */ MONGO_URI),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generators_schema_schemaType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generators/schema/schemaType */ "./server/generators/schema/schemaType.js");

var MONGO_URI = 'mongodb://localhost/test_db';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  users: {
    email: Email,
    password: Password,
    name: {
      required: true,
      type: Text,
      minLength: 4
    }
  },
  posts: {
    author: {
      type: ObjectId,
      ref: 'users'
    },
    message: Text,
    at: Date,
    likes: Number
  }
});

/***/ }),

/***/ "./server/generators/console/log.js":
/*!******************************************!*\
  !*** ./server/generators/console/log.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_0__);

var logger = console.log;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  error: function error(info) {
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return logger(chalk__WEBPACK_IMPORTED_MODULE_0___default().red.bold("".concat(code ? code : 'ERROR'), info));
  },
  success: function success(info) {
    return logger(chalk__WEBPACK_IMPORTED_MODULE_0___default().green('[SUCCESS]', info));
  },
  info: function info(data) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '[i]';
    return logger(chalk__WEBPACK_IMPORTED_MODULE_0___default().gray.bold("".concat(type), data));
  },
  warning: function warning(info) {
    return logger(chalk__WEBPACK_IMPORTED_MODULE_0___default().yellowBright.bold('[WARNING]', info));
  },
  strong: function strong(info) {
    return logger(chalk__WEBPACK_IMPORTED_MODULE_0___default().blueBright.bold('[*]', info));
  },
  input: function input(info) {
    return logger(chalk__WEBPACK_IMPORTED_MODULE_0___default().blueBright("".concat(info, " : ")));
  }
});

/***/ }),

/***/ "./server/generators/http/HttpResponse.js":
/*!************************************************!*\
  !*** ./server/generators/http/HttpResponse.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HttpResponse)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console/log */ "./server/generators/console/log.js");




var HttpResponse = /*#__PURE__*/function () {
  function HttpResponse(res, route) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HttpResponse);

    this.response = res;
    this.route = route;
    this.method = method;
  }
  /**
   * Provide the appropriate response object after a request
   * @param {number} status Response status code
   * @param {string} message Response message text
   * @param {object} data Response content object
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HttpResponse, [{
    key: "json",
    value: function json() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ok';

      if (status > 300) {
        _console_log__WEBPACK_IMPORTED_MODULE_2__.default.error("[".concat(this.method.toUpperCase(), "] /").concat(this.route, " : ").concat(message), status);
      } else {
        _console_log__WEBPACK_IMPORTED_MODULE_2__.default.info("[".concat(this.method.toUpperCase(), "] /").concat(this.route, " : Data sent with success"), status);
      }

      return this.response.status(status).json({
        status: status,
        message: message,
        data: data
      });
    }
  }]);

  return HttpResponse;
}();



/***/ }),

/***/ "./server/generators/schema/schema.router.js":
/*!***************************************************!*\
  !*** ./server/generators/schema/schema.router.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../db */ "./server/db.js");
/* harmony import */ var _http_HttpResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/HttpResponse */ "./server/generators/http/HttpResponse.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function stringifyAttribute(schema) {
  var newSchema = {};
  var _TYPES_ = {
    'Date': Date,
    'Number': Number,
    'Boolean': Boolean,
    'ObjectId': (mongoose__WEBPACK_IMPORTED_MODULE_4___default().Types.ObjectId)
  };

  for (var attr in schema) {
    var founded = false;

    for (var subAttr in _TYPES_) {
      if (schema[attr] === _TYPES_[subAttr]) {
        newSchema[attr] = subAttr;
        founded = true;
        break;
      } else {
        if (schema[attr].type && schema[attr].type === _TYPES_[subAttr]) {
          newSchema[attr] = _objectSpread(_objectSpread({}, schema[attr]), {}, {
            type: subAttr
          });
          founded = true;
          break;
        }
      }
    }

    if (!founded) {
      newSchema[attr] = schema[attr];
    }
  }

  return newSchema;
}

function stringifySchema(schema) {
  var newSchema = {};

  for (var attr in schema) {
    newSchema[attr] = stringifyAttribute(schema[attr]);
  }

  return newSchema;
}

function createSchemaRouter(app) {
  var router = express__WEBPACK_IMPORTED_MODULE_1___default().Router();
  router.get('/', function (req, res) {
    var httpResponse = new _http_HttpResponse__WEBPACK_IMPORTED_MODULE_3__.default(res, 'schema');
    httpResponse.json(200, stringifySchema(_db__WEBPACK_IMPORTED_MODULE_2__.default));
  });
  router.get('/:name', function (req, res) {
    var name = req.params.name;
    var httpResponse = new _http_HttpResponse__WEBPACK_IMPORTED_MODULE_3__.default(res, 'schema/' + name);

    if (!(name in _db__WEBPACK_IMPORTED_MODULE_2__.default)) {
      httpResponse.json(404, null, 'The collection name provided does not exists');
    } else {
      httpResponse.json(200, _db__WEBPACK_IMPORTED_MODULE_2__.default[name]);
    }
  });
  app.use('/api/schema', router);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSchemaRouter);

/***/ }),

/***/ "./server/generators/schema/schemaType.js":
/*!************************************************!*\
  !*** ./server/generators/schema/schemaType.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

__webpack_require__.g.Text = 'Text'; // Store String that correspond to mongo String dataType

__webpack_require__.g.Email = 'Email'; // Store email 

__webpack_require__.g.Password = 'Password'; // Store password 

__webpack_require__.g.File = 'File'; // Store file but it uploadUrl in mongo db,

__webpack_require__.g.Date = Date;
__webpack_require__.g.Number = Number;
__webpack_require__.g.Boolean = Boolean;
__webpack_require__.g.ObjectId = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./server/generators/schema/validation.js":
/*!************************************************!*\
  !*** ./server/generators/schema/validation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var Schema = (mongoose__WEBPACK_IMPORTED_MODULE_3___default().Schema);

var validateEmail = function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}; // default email schema


var defaultEmailSchema = {
  type: String,
  trim: true,
  //lowercase: true,
  //unique: true,
  //required: true,
  validate: [validateEmail, 'Please provide a valid email address'],
  match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
}; // default password schema

var defaultPasswordSchema = {
  type: String,
  match: /.{4,}/
}; // Mongoose default validations

var MONGOOSE_VALIDATIONS = {
  "STRING": ['minlength', 'maxlength', 'match', 'enum', 'uppercase', 'lowercase', 'trim', 'required', 'validate', 'default'],
  "NUMBER": ['min', 'max', 'enum', 'required', 'validate', 'default'],
  "DATE": ['min', 'max', 'required', 'validate', 'default']
}; // get intersection of array

var arrIntersection = function arrIntersection(arr1, arr2) {
  return arr1.filter(function (x) {
    return arr2.includes(x);
  });
};
/**
 * 
 * @param {object} ourSchema  like a mongo schema with 
 * {File : input file, Text: input text, Number for input number }
 * @returns object that is mongoose schema
 */


var generateMongoSchema = function generateMongoSchema(ourSchema) {
  var builtSchema = {};

  for (var _i = 0, _Object$entries = Object.entries(ourSchema); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value !== null && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(value) === 'object' && !Array.isArray(value)) {
      builtSchema = _objectSpread(_objectSpread({}, builtSchema), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, getSchemaFromObjectValue(value)));
    } else if (Array.isArray(value)) {
      builtSchema = _objectSpread(_objectSpread({}, builtSchema), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
    } else {
      builtSchema = _objectSpread(_objectSpread({}, builtSchema), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, getDefaultSchema(value)));
    }
  }

  return new Schema(builtSchema);
};

function getSchemaFromObjectValue(value) {
  var type = value['type'];
  var fieldSchema = {};
  if (type === 'Email' || type === 'Text' || type === String || type === Boolean) fieldSchema = _objectSpread(_objectSpread({}, value), getDefaultSchema(type));

  if (type === 'Password' || type === 'File' || type === Date) {
    var typeUpperCase = type === Date ? 'DATE' : 'STRING';
    fieldSchema = getDefaultSchema(type);
    fieldSchema = _objectSpread(_objectSpread({}, fieldSchema), foundedMongoValidation(value, typeUpperCase));
  }

  if (type === (mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId)) fieldSchema = _objectSpread({}, value);
  return fieldSchema;
}

function foundedMongoValidation(obj, type) {
  var schema = {};
  var validations = Object.keys(obj);
  var foundedValidations = arrIntersection(validations, MONGOOSE_VALIDATIONS[type]);
  foundedValidations.forEach(function (val) {
    schema[val] = obj[val];
  });
  return schema;
}

function getDefaultSchema(type) {
  var defaultSchema = {};

  switch (type) {
    case 'Text':
      defaultSchema = {
        type: String
      };
      break;

    case 'Email':
      defaultSchema = defaultEmailSchema;
      break;

    case 'Password':
      defaultSchema = defaultPasswordSchema;
      break;

    case 'File':
      defaultSchema = {
        type: String
      };
      break;

    case Number:
      defaultSchema = {
        type: Number
      };
      break;

    case Date:
      defaultSchema = {
        type: Date
      };
      break;

    case Boolean:
      defaultSchema = {
        type: Boolean
      };
      break;

    case String:
      defaultSchema = {
        type: String
      };
      break;
  }

  return defaultSchema;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMongoSchema);

/***/ }),

/***/ "./server/generators/ws/WSResponse.js":
/*!********************************************!*\
  !*** ./server/generators/ws/WSResponse.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WSResponse)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console/log */ "./server/generators/console/log.js");




var WSResponse = /*#__PURE__*/function () {
  /**
   * @param {string} route Current route
   * @param {string} method POST or DELETE
   */
  function WSResponse(route, method) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WSResponse);

    this.route = route;
    this.method = method;
  }
  /**
   * Provide the appropriate HTTP response object after a request
   * @param {object} socket The client socket
   * @param {number} status Response status code
   * @param {string} message Response message text
   * @param {object} data Response content object
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WSResponse, [{
    key: "json",
    value: function json(socket) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ok';

      if (status > 300) {
        _console_log__WEBPACK_IMPORTED_MODULE_2__.default.error("[WS:".concat(this.method.toUpperCase(), "] /").concat(this.route, " : ").concat(message), status);
      } else {
        _console_log__WEBPACK_IMPORTED_MODULE_2__.default.info("[WS:".concat(this.method.toUpperCase(), "] /").concat(this.route, " : Data sent with success"), status);
      }

      return socket.send(JSON.stringify({
        status: status,
        message: message,
        data: data
      }));
    }
    /**
     * Provide the appropriate WS response object after a request 
     * @param {object} wsInfo General app socket
     * @param {number} status Response status code
     * @param {string} message Response message text
     * @param {object} data Response content object
     */

  }], [{
    key: "jsonBroadCast",
    value: function jsonBroadCast(wsInfo) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ok';
      var route = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var method = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'GET';
      this.method = method;
      wsInfo.clients.forEach(function (client) {
        var response = new WSResponse(route, method);
        response.json(client, status, data, message);
      });
    }
  }]);

  return WSResponse;
}();



/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-ws":
/*!*****************************!*\
  !*** external "express-ws" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("express-ws");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./server/index.safe.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _crud_crud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud/crud.router */ "./server/crud/crud.router.js");
/* harmony import */ var _generators_console_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators/console/log */ "./server/generators/console/log.js");
/* harmony import */ var _generators_schema_schema_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generators/schema/schema.router */ "./server/generators/schema/schema.router.js");
/* harmony import */ var express_ws__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-ws */ "express-ws");
/* harmony import */ var express_ws__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_ws__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./db */ "./server/db.js");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_8__);









/* Start local mongodb server if local_db is true */

_generators_console_log__WEBPACK_IMPORTED_MODULE_4__.default.info('running safe mode');
var _process = process,
    platform = _process.platform;

try {
  console.log(platform === 'linux');

  if (platform === 'linux') {
    _generators_console_log__WEBPACK_IMPORTED_MODULE_4__.default.input('Mot de passe');
    (0,child_process__WEBPACK_IMPORTED_MODULE_8__.execSync)('sudo service mongod start');
    _generators_console_log__WEBPACK_IMPORTED_MODULE_4__.default.success('Mongo service started sucessfully !');
  }
} catch (e) {
  _generators_console_log__WEBPACK_IMPORTED_MODULE_4__.default.error("Unabled to start mongod service... \nPlease install mongo on your machine.");
}
/* END */


var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var wsInfo = express_ws__WEBPACK_IMPORTED_MODULE_6___default()(app).getWss();
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());
mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_db__WEBPACK_IMPORTED_MODULE_7__.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})["catch"](function (err) {
  return _generators_console_log__WEBPACK_IMPORTED_MODULE_4__.default.error('Unable to connect to Mongo database');
});
(0,_crud_crud_router__WEBPACK_IMPORTED_MODULE_3__.default)(app, wsInfo);
(0,_generators_schema_schema_router__WEBPACK_IMPORTED_MODULE_5__.default)(app);
var PORT = process.env.PORT || 3790;
app.listen(PORT, function (_) {
  return _generators_console_log__WEBPACK_IMPORTED_MODULE_4__.default.success('Server is started');
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map