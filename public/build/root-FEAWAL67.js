import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  require_react_dom
} from "/build/_shared/chunk-BM5NT4T5.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// node_modules/logrocket/dist/build.umd.js
var require_build_umd = __commonJS({
  "node_modules/logrocket/dist/build.umd.js"(exports, module) {
    init_react();
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else {
        var a = factory();
        for (var i in a)
          (typeof exports === "object" ? exports : root)[i] = a[i];
      }
    })(exports, function() {
      return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module2 = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.l = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports2, name, getter) {
          if (!__webpack_require__.o(exports2, name)) {
            Object.defineProperty(exports2, name, { enumerable: true, get: getter });
          }
        };
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
        __webpack_require__.t = function(value, mode) {
          if (mode & 1)
            value = __webpack_require__(value);
          if (mode & 8)
            return value;
          if (mode & 4 && typeof value === "object" && value && value.__esModule)
            return value;
          var ns = /* @__PURE__ */ Object.create(null);
          __webpack_require__.r(ns);
          Object.defineProperty(ns, "default", { enumerable: true, value });
          if (mode & 2 && typeof value != "string")
            for (var key in value)
              __webpack_require__.d(ns, key, function(key2) {
                return value[key2];
              }.bind(null, key));
          return ns;
        };
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? function getDefault() {
            return module2["default"];
          } : function getModuleExports() {
            return module2;
          };
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 0);
      }({
        "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": function(module2, exports2) {
          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length)
              len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
          module2.exports = _arrayLikeToArray;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js": function(module2, exports2, __webpack_require__) {
          var arrayLikeToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr))
              return arrayLikeToArray(arr);
          }
          module2.exports = _arrayWithoutHoles;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/classCallCheck.js": function(module2, exports2) {
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          module2.exports = _classCallCheck;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/createClass.js": function(module2, exports2) {
          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              _defineProperties(Constructor, staticProps);
            return Constructor;
          }
          module2.exports = _createClass;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/defineProperty.js": function(module2, exports2) {
          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          module2.exports = _defineProperty;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(module2, exports2) {
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              "default": obj
            };
          }
          module2.exports = _interopRequireDefault;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js": function(module2, exports2, __webpack_require__) {
          var _typeof = __webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js")["default"];
          function _getRequireWildcardCache(nodeInterop) {
            if (typeof WeakMap !== "function")
              return null;
            var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
            var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
            return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
              return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
            })(nodeInterop);
          }
          function _interopRequireWildcard(obj, nodeInterop) {
            if (!nodeInterop && obj && obj.__esModule) {
              return obj;
            }
            if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
              return {
                "default": obj
              };
            }
            var cache = _getRequireWildcardCache(nodeInterop);
            if (cache && cache.has(obj)) {
              return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) {
              if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
            newObj["default"] = obj;
            if (cache) {
              cache.set(obj, newObj);
            }
            return newObj;
          }
          module2.exports = _interopRequireWildcard;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/iterableToArray.js": function(module2, exports2) {
          function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
              return Array.from(iter);
          }
          module2.exports = _iterableToArray;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/nonIterableSpread.js": function(module2, exports2) {
          function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          module2.exports = _nonIterableSpread;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js": function(module2, exports2, __webpack_require__) {
          var objectWithoutPropertiesLoose = __webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
          function _objectWithoutProperties(source, excluded) {
            if (source == null)
              return {};
            var target = objectWithoutPropertiesLoose(source, excluded);
            var key, i;
            if (Object.getOwnPropertySymbols) {
              var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
              for (i = 0; i < sourceSymbolKeys.length; i++) {
                key = sourceSymbolKeys[i];
                if (excluded.indexOf(key) >= 0)
                  continue;
                if (!Object.prototype.propertyIsEnumerable.call(source, key))
                  continue;
                target[key] = source[key];
              }
            }
            return target;
          }
          module2.exports = _objectWithoutProperties;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js": function(module2, exports2) {
          function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null)
              return {};
            var target = {};
            var sourceKeys = Object.keys(source);
            var key, i;
            for (i = 0; i < sourceKeys.length; i++) {
              key = sourceKeys[i];
              if (excluded.indexOf(key) >= 0)
                continue;
              target[key] = source[key];
            }
            return target;
          }
          module2.exports = _objectWithoutPropertiesLoose;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/toConsumableArray.js": function(module2, exports2, __webpack_require__) {
          var arrayWithoutHoles = __webpack_require__("./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
          var iterableToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/iterableToArray.js");
          var unsupportedIterableToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
          var nonIterableSpread = __webpack_require__("./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
          function _toConsumableArray(arr) {
            return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
          }
          module2.exports = _toConsumableArray;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/typeof.js": function(module2, exports2) {
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              module2.exports = _typeof = function _typeof2(obj2) {
                return typeof obj2;
              };
              module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
            } else {
              module2.exports = _typeof = function _typeof2(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
              module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
            }
            return _typeof(obj);
          }
          module2.exports = _typeof;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": function(module2, exports2, __webpack_require__) {
          var arrayLikeToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
          function _unsupportedIterableToArray(o, minLen) {
            if (!o)
              return;
            if (typeof o === "string")
              return arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor)
              n = o.constructor.name;
            if (n === "Map" || n === "Set")
              return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return arrayLikeToArray(o, minLen);
          }
          module2.exports = _unsupportedIterableToArray;
          module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
        },
        "./node_modules/webpack/buildin/global.js": function(module2, exports2) {
          var g;
          g = function() {
            return this;
          }();
          try {
            g = g || new Function("return this")();
          } catch (e) {
            if (typeof window === "object")
              g = window;
          }
          module2.exports = g;
        },
        "./packages/@apphub:logrocket-console/src/index.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = void 0;
          var _registerConsole = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-console/src/registerConsole.js"));
          var _default = _registerConsole.default;
          exports2.default = _default;
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-console/src/registerConsole.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = registerConsole;
          var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));
          var _enhanceFunc = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-utils/src/enhanceFunc.js"));
          var _logrocketExceptions = __webpack_require__("./packages/@apphub:logrocket-exceptions/src/index.js");
          function registerConsole(logger) {
            var unsubFunctions = [];
            var methods = ["log", "warn", "info", "error", "debug"];
            methods.forEach(function(method) {
              unsubFunctions.push((0, _enhanceFunc.default)(console, method, function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                logger.addEvent("lr.core.LogEvent", function() {
                  var consoleOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                  var isEnabled = consoleOptions.isEnabled;
                  if ((0, _typeof2.default)(isEnabled) === "object" && isEnabled[method] === false || isEnabled === false) {
                    return null;
                  }
                  if (method === "error" && consoleOptions.shouldAggregateConsoleErrors) {
                    _logrocketExceptions.Capture.captureMessage(logger, args[0], {}, true);
                  }
                  return {
                    logLevel: method.toUpperCase(),
                    args
                  };
                });
              }));
            });
            return function() {
              unsubFunctions.forEach(function(unsubFunction) {
                return unsubFunction();
              });
            };
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-exceptions/src/Capture.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.captureMessage = captureMessage;
          exports2.captureException = captureException;
          var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));
          var _TraceKit = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-utils/src/TraceKit.js"));
          var _stackTraceFromError = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js"));
          function isScalar(value) {
            return /boolean|number|string/.test((0, _typeof2.default)(value));
          }
          function scrub(data, options) {
            if (options) {
              var optionalScalars = [
                "level",
                "logger"
              ];
              for (var _i = 0, _optionalScalars = optionalScalars; _i < _optionalScalars.length; _i++) {
                var field = _optionalScalars[_i];
                var value = options[field];
                if (isScalar(value)) {
                  data[field] = value.toString();
                }
              }
              var optionalMaps = ["tags", "extra"];
              for (var _i2 = 0, _optionalMaps = optionalMaps; _i2 < _optionalMaps.length; _i2++) {
                var _field = _optionalMaps[_i2];
                var dirty = options[_field] || {};
                var scrubbed = {};
                for (var _i3 = 0, _Object$keys = Object.keys(dirty); _i3 < _Object$keys.length; _i3++) {
                  var key = _Object$keys[_i3];
                  var _value = dirty[key];
                  if (isScalar(_value)) {
                    scrubbed[key.toString()] = _value.toString();
                  }
                }
                data[_field] = scrubbed;
              }
            }
          }
          function captureMessage(logger, message) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var isConsole = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
            var data = {
              exceptionType: isConsole ? "CONSOLE" : "MESSAGE",
              message,
              browserHref: window.location ? window.location.href : ""
            };
            scrub(data, options);
            logger.addEvent("lr.core.Exception", function() {
              return data;
            });
          }
          function captureException(logger, exception) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var preppedTrace = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
            var trace = preppedTrace || _TraceKit.default.computeStackTrace(exception);
            var data = {
              exceptionType: "WINDOW",
              errorType: trace.name,
              message: trace.message,
              browserHref: window.location ? window.location.href : ""
            };
            scrub(data, options);
            var addEventOptions = {
              _stackTrace: (0, _stackTraceFromError.default)(trace)
            };
            logger.addEvent("lr.core.Exception", function() {
              return data;
            }, addEventOptions);
          }
        },
        "./packages/@apphub:logrocket-exceptions/src/index.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          Object.defineProperty(exports2, "registerExceptions", {
            enumerable: true,
            get: function get() {
              return _registerExceptions.default;
            }
          });
          exports2.Capture = void 0;
          var _registerExceptions = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-exceptions/src/registerExceptions.js"));
          var Capture = _interopRequireWildcard(__webpack_require__("./packages/@apphub:logrocket-exceptions/src/Capture.js"));
          exports2.Capture = Capture;
        },
        "./packages/@apphub:logrocket-exceptions/src/raven/raven.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          (function(global) {
            var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));
            var _TraceKit = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-utils/src/TraceKit.js"));
            var objectPrototype = Object.prototype;
            function isUndefined(what) {
              return what === void 0;
            }
            function isFunction(what) {
              return typeof what === "function";
            }
            function each(obj, callback) {
              var i, j;
              if (isUndefined(obj.length)) {
                for (i in obj) {
                  if (hasKey(obj, i)) {
                    callback.call(null, i, obj[i]);
                  }
                }
              } else {
                j = obj.length;
                if (j) {
                  for (i = 0; i < j; i++) {
                    callback.call(null, i, obj[i]);
                  }
                }
              }
            }
            function hasKey(object, key) {
              return objectPrototype.hasOwnProperty.call(object, key);
            }
            function fill(obj, name, replacement, track) {
              var orig = obj[name];
              obj[name] = replacement(orig);
              if (track) {
                track.push([obj, name, orig]);
              }
            }
            var _window = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
            var _document = _window.document;
            var Handler = /* @__PURE__ */ function() {
              function Handler2(_ref) {
                var captureException = _ref.captureException;
                (0, _classCallCheck2.default)(this, Handler2);
                this._errorHandler = this._errorHandler.bind(this);
                this._ignoreOnError = 0;
                this._wrappedBuiltIns = [];
                this.captureException = captureException;
                _TraceKit.default.report.subscribe(this._errorHandler);
                this._instrumentTryCatch();
              }
              (0, _createClass2.default)(Handler2, [{
                key: "uninstall",
                value: function uninstall() {
                  _TraceKit.default.report.unsubscribe(this._errorHandler);
                  var builtin;
                  while (this._wrappedBuiltIns.length) {
                    builtin = this._wrappedBuiltIns.shift();
                    var obj = builtin[0], name = builtin[1], orig = builtin[2];
                    obj[name] = orig;
                  }
                }
              }, {
                key: "_errorHandler",
                value: function _errorHandler(report) {
                  if (!this._ignoreOnError) {
                    this.captureException(report);
                  }
                }
              }, {
                key: "_ignoreNextOnError",
                value: function _ignoreNextOnError() {
                  var _this = this;
                  this._ignoreOnError += 1;
                  setTimeout(function() {
                    _this._ignoreOnError -= 1;
                  });
                }
              }, {
                key: "context",
                value: function context(options, func, args) {
                  if (isFunction(options)) {
                    args = func || [];
                    func = options;
                    options = void 0;
                  }
                  return this.wrap(options, func).apply(this, args);
                }
              }, {
                key: "wrap",
                value: function wrap(options, func, _before) {
                  var self2 = this;
                  if (isUndefined(func) && !isFunction(options)) {
                    return options;
                  }
                  if (isFunction(options)) {
                    func = options;
                    options = void 0;
                  }
                  if (!isFunction(func)) {
                    return func;
                  }
                  try {
                    if (func.__lr__) {
                      return func;
                    }
                    if (func.__lr_wrapper__) {
                      return func.__lr_wrapper__;
                    }
                    if (!Object.isExtensible(func)) {
                      return func;
                    }
                  } catch (e) {
                    return func;
                  }
                  function wrapped() {
                    var args = [], i = arguments.length, deep = !options || options && options.deep !== false;
                    if (_before && isFunction(_before)) {
                      _before.apply(this, arguments);
                    }
                    while (i--) {
                      args[i] = deep ? self2.wrap(options, arguments[i]) : arguments[i];
                    }
                    try {
                      return func.apply(this, args);
                    } catch (e) {
                      self2._ignoreNextOnError();
                      self2.captureException(_TraceKit.default.computeStackTrace(e), options);
                      throw e;
                    }
                  }
                  for (var property in func) {
                    if (hasKey(func, property)) {
                      wrapped[property] = func[property];
                    }
                  }
                  wrapped.prototype = func.prototype;
                  func.__lr_wrapper__ = wrapped;
                  wrapped.__lr__ = true;
                  wrapped.__inner__ = func;
                  return wrapped;
                }
              }, {
                key: "_instrumentTryCatch",
                value: function _instrumentTryCatch() {
                  var self2 = this;
                  var wrappedBuiltIns = self2._wrappedBuiltIns;
                  function wrapTimeFn(orig) {
                    return function(fn, t) {
                      var args = new Array(arguments.length);
                      for (var i2 = 0; i2 < args.length; ++i2) {
                        args[i2] = arguments[i2];
                      }
                      var originalCallback = args[0];
                      if (isFunction(originalCallback)) {
                        args[0] = self2.wrap(originalCallback);
                      }
                      if (orig.apply) {
                        return orig.apply(this, args);
                      } else {
                        return orig(args[0], args[1]);
                      }
                    };
                  }
                  function wrapEventTarget(global2) {
                    var proto = _window[global2] && _window[global2].prototype;
                    if (proto && proto.hasOwnProperty && proto.hasOwnProperty("addEventListener")) {
                      fill(proto, "addEventListener", function(orig) {
                        return function(evtName, fn, capture, secure) {
                          try {
                            if (fn && fn.handleEvent) {
                              fn.handleEvent = self2.wrap(fn.handleEvent);
                            }
                          } catch (err) {
                          }
                          var before;
                          return orig.call(this, evtName, self2.wrap(fn, void 0, before), capture, secure);
                        };
                      }, wrappedBuiltIns);
                      fill(proto, "removeEventListener", function(orig) {
                        return function(evt, fn, capture, secure) {
                          try {
                            fn = fn && (fn.__lr_wrapper__ ? fn.__lr_wrapper__ : fn);
                          } catch (e) {
                          }
                          return orig.call(this, evt, fn, capture, secure);
                        };
                      }, wrappedBuiltIns);
                    }
                  }
                  fill(_window, "setTimeout", wrapTimeFn, wrappedBuiltIns);
                  fill(_window, "setInterval", wrapTimeFn, wrappedBuiltIns);
                  if (_window.requestAnimationFrame) {
                    fill(_window, "requestAnimationFrame", function(orig) {
                      return function(cb) {
                        return orig(self2.wrap(cb));
                      };
                    }, wrappedBuiltIns);
                  }
                  var eventTargets = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
                  for (var i = 0; i < eventTargets.length; i++) {
                    wrapEventTarget(eventTargets[i]);
                  }
                  var $ = _window.jQuery || _window.$;
                  if ($ && $.fn && $.fn.ready) {
                    fill($.fn, "ready", function(orig) {
                      return function(fn) {
                        return orig.call(this, self2.wrap(fn));
                      };
                    }, wrappedBuiltIns);
                  }
                }
              }]);
              return Handler2;
            }();
            exports2.default = Handler;
            ;
            module2.exports = exports2.default;
          }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"));
        },
        "./packages/@apphub:logrocket-exceptions/src/registerExceptions.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = registerCore;
          var _raven = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-exceptions/src/raven/raven.js"));
          var Capture = _interopRequireWildcard(__webpack_require__("./packages/@apphub:logrocket-exceptions/src/Capture.js"));
          function registerCore(logger) {
            var raven = new _raven.default({
              captureException: function captureException(errorReport) {
                Capture.captureException(logger, null, null, errorReport);
              }
            });
            var rejectionHandler = function rejectionHandler2(evt) {
              logger.addEvent("lr.core.Exception", function() {
                return {
                  exceptionType: "UNHANDLED_REJECTION",
                  message: evt.reason || "Unhandled Promise rejection"
                };
              });
            };
            window.addEventListener("unhandledrejection", rejectionHandler);
            return function() {
              window.removeEventListener("unhandledrejection", rejectionHandler);
              raven.uninstall();
            };
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = stackTraceFromError;
          function stackTraceFromError(errorReport) {
            function makeNotNull(val) {
              return val === null ? void 0 : val;
            }
            return errorReport.stack ? errorReport.stack.map(function(frame) {
              return {
                lineNumber: makeNotNull(frame.line),
                columnNumber: makeNotNull(frame.column),
                fileName: makeNotNull(frame.url),
                functionName: makeNotNull(frame.func)
              };
            }) : void 0;
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-network/src/fetchIntercept.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = void 0;
          var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
          var _registerXHR = __webpack_require__("./packages/@apphub:logrocket-network/src/registerXHR.js");
          var interceptors = [];
          function makeInterceptor(fetch, fetchId) {
            var reversedInterceptors = interceptors.reduce(function(array, interceptor) {
              return [interceptor].concat(array);
            }, []);
            for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }
            var promise = Promise.resolve(args);
            reversedInterceptors.forEach(function(_ref) {
              var request = _ref.request, requestError = _ref.requestError;
              if (request || requestError) {
                promise = promise.then(function(args2) {
                  return request.apply(void 0, [fetchId].concat((0, _toConsumableArray2.default)(args2)));
                }, function(args2) {
                  return requestError.apply(void 0, [fetchId].concat((0, _toConsumableArray2.default)(args2)));
                });
              }
            });
            promise = promise.then(function(args2) {
              (0, _registerXHR.setActive)(false);
              var res;
              var err;
              try {
                res = fetch.apply(void 0, (0, _toConsumableArray2.default)(args2));
              } catch (_err) {
                err = _err;
              }
              (0, _registerXHR.setActive)(true);
              if (err) {
                throw err;
              }
              return res;
            });
            reversedInterceptors.forEach(function(_ref2) {
              var response = _ref2.response, responseError = _ref2.responseError;
              if (response || responseError) {
                promise = promise.then(function(res) {
                  return response(fetchId, res);
                }, function(err) {
                  return responseError && responseError(fetchId, err);
                });
              }
            });
            return promise;
          }
          function attach(env) {
            if (!env.fetch || !env.Promise) {
              return;
            }
            var isPolyfill = env.fetch.polyfill;
            env.fetch = function(fetch) {
              var fetchId = 0;
              return function() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }
                return makeInterceptor.apply(void 0, [fetch, fetchId++].concat(args));
              };
            }(env.fetch);
            if (isPolyfill) {
              env.fetch.polyfill = isPolyfill;
            }
          }
          var didAttach = false;
          var _default = {
            register: function register(interceptor) {
              if (!didAttach) {
                didAttach = true;
                attach(window);
              }
              interceptors.push(interceptor);
              return function() {
                var index = interceptors.indexOf(interceptor);
                if (index >= 0) {
                  interceptors.splice(index, 1);
                }
              };
            },
            clear: function clear() {
              interceptors = [];
            }
          };
          exports2.default = _default;
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-network/src/index.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = registerNetwork;
          var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));
          var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));
          var _registerFetch = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-network/src/registerFetch.js"));
          var _registerNetworkInformation = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-network/src/registerNetworkInformation.js"));
          var _registerXHR = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-network/src/registerXHR.js"));
          var _mapValues = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-utils/src/mapValues.js"));
          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              if (enumerableOnly)
                symbols = symbols.filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
              keys.push.apply(keys, symbols);
            }
            return keys;
          }
          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};
              if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                  (0, _defineProperty2.default)(target, key, source[key]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
              } else {
                ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
              }
            }
            return target;
          }
          function registerNetwork(logger) {
            var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
              isReactNative: false
            };
            var isReactNative = config.isReactNative, shouldAugmentNPS = config.shouldAugmentNPS, shouldParseXHRBlob = config.shouldParseXHRBlob;
            var ignoredNetwork = {};
            var truncate = function truncate2(data) {
              var limit = 1024 * 1e3 * 4;
              var str = data;
              if ((0, _typeof2.default)(data) === "object" && data != null) {
                var proto = Object.getPrototypeOf(data);
                if (proto === Object.prototype || proto === null) {
                  str = JSON.stringify(data);
                }
              }
              if (str && str.length && str.length > limit && typeof str === "string") {
                var beginning = str.substring(0, 1e3);
                return "".concat(beginning, " ... LogRocket truncating to first 1000 characters.\n      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference#network");
              }
              return data;
            };
            var addRequest = function addRequest2(reqId, request) {
              var method = request.method;
              logger.addEvent("lr.network.RequestEvent", function() {
                var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$isEnabled = _ref.isEnabled, isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled, _ref$requestSanitizer = _ref.requestSanitizer, requestSanitizer = _ref$requestSanitizer === void 0 ? function(f) {
                  return f;
                } : _ref$requestSanitizer;
                if (!isEnabled) {
                  return null;
                }
                var sanitized = null;
                try {
                  sanitized = requestSanitizer(_objectSpread(_objectSpread({}, request), {}, {
                    reqId
                  }));
                } catch (err) {
                  console.error(err);
                }
                if (sanitized) {
                  var url = sanitized.url;
                  if (typeof document !== "undefined" && typeof document.createElement === "function") {
                    var a = document.createElement("a");
                    a.href = sanitized.url;
                    url = a.href;
                  }
                  return {
                    reqId,
                    url,
                    headers: (0, _mapValues.default)(sanitized.headers, function(headerValue) {
                      return "".concat(headerValue);
                    }),
                    body: truncate(sanitized.body),
                    method,
                    referrer: sanitized.referrer || void 0,
                    mode: sanitized.mode || void 0,
                    credentials: sanitized.credentials || void 0
                  };
                }
                ignoredNetwork[reqId] = true;
                return null;
              });
            };
            var addResponse = function addResponse2(reqId, response) {
              var method = response.method, status = response.status;
              logger.addEvent("lr.network.ResponseEvent", function() {
                var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$isEnabled = _ref2.isEnabled, isEnabled = _ref2$isEnabled === void 0 ? true : _ref2$isEnabled, _ref2$responseSanitiz = _ref2.responseSanitizer, responseSanitizer = _ref2$responseSanitiz === void 0 ? function(f) {
                  return f;
                } : _ref2$responseSanitiz;
                if (!isEnabled) {
                  return null;
                } else if (ignoredNetwork[reqId]) {
                  delete ignoredNetwork[reqId];
                  return null;
                }
                var sanitized = null;
                try {
                  sanitized = responseSanitizer(_objectSpread(_objectSpread({}, response), {}, {
                    reqId
                  }));
                } catch (err) {
                  console.error(err);
                }
                if (sanitized) {
                  return {
                    reqId,
                    status: sanitized.status,
                    headers: (0, _mapValues.default)(sanitized.headers, function(headerValue) {
                      return "".concat(headerValue);
                    }),
                    body: truncate(sanitized.body),
                    method
                  };
                }
                return {
                  reqId,
                  status,
                  headers: {},
                  body: null,
                  method
                };
              });
            };
            var isIgnored = function isIgnored2(reqId) {
              return logger.isDisabled || ignoredNetwork[reqId] === true;
            };
            var unsubFetch = (0, _registerFetch.default)({
              addRequest,
              addResponse,
              isIgnored
            });
            var unsubXHR = (0, _registerXHR.default)({
              addRequest,
              addResponse,
              isIgnored,
              logger,
              shouldAugmentNPS,
              shouldParseXHRBlob
            });
            var unsubNetworkInformation = isReactNative ? function() {
            } : (0, _registerNetworkInformation.default)(logger);
            return function() {
              unsubNetworkInformation();
              unsubFetch();
              unsubXHR();
            };
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-network/src/registerFetch.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = registerFetch;
          var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));
          var _mapValues = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-utils/src/mapValues.js"));
          var _fetchIntercept = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-network/src/fetchIntercept.js"));
          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              if (enumerableOnly)
                symbols = symbols.filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
              keys.push.apply(keys, symbols);
            }
            return keys;
          }
          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};
              if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                  (0, _defineProperty2.default)(target, key, source[key]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
              } else {
                ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
              }
            }
            return target;
          }
          function makeObjectFromHeaders(headers) {
            if (headers == null || typeof headers.forEach !== "function") {
              return headers;
            }
            var result = {};
            headers.forEach(function(value, key) {
              if (result[key]) {
                result[key] = "".concat(result[key], ",").concat(value);
              } else {
                result[key] = "".concat(value);
              }
            });
            return result;
          }
          var stringifyHeaders = function stringifyHeaders2(headers) {
            return (0, _mapValues.default)(makeObjectFromHeaders(headers), function(value) {
              return "".concat(value);
            });
          };
          function pluckFetchFields() {
            var arg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return {
              url: arg.url,
              headers: stringifyHeaders(arg.headers),
              method: arg.method && arg.method.toUpperCase(),
              referrer: arg.referrer || void 0,
              mode: arg.mode || void 0,
              credentials: arg.credentials || void 0
            };
          }
          function registerFetch(_ref) {
            var addRequest = _ref.addRequest, addResponse = _ref.addResponse, isIgnored = _ref.isIgnored;
            var LOGROCKET_FETCH_LABEL = "fetch-";
            var fetchMethodMap = {};
            var unregister = _fetchIntercept.default.register({
              request: function request(fetchId) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                var p;
                if (typeof Request !== "undefined" && args[0] instanceof Request) {
                  var clonedText;
                  try {
                    clonedText = args[0].clone().text();
                  } catch (err) {
                    clonedText = Promise.resolve("LogRocket fetch error: ".concat(err.message));
                  }
                  p = clonedText.then(function(body) {
                    return _objectSpread(_objectSpread({}, pluckFetchFields(args[0])), {}, {
                      body
                    });
                  }, function(err) {
                    return _objectSpread(_objectSpread({}, pluckFetchFields(args[0])), {}, {
                      body: "LogRocket fetch error: ".concat(err.message)
                    });
                  });
                } else {
                  p = Promise.resolve(_objectSpread(_objectSpread({}, pluckFetchFields(args[1])), {}, {
                    url: "".concat(args[0]),
                    body: (args[1] || {}).body
                  }));
                }
                return p.then(function(req) {
                  fetchMethodMap[fetchId] = req.method;
                  addRequest("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), req);
                  return args;
                });
              },
              requestError: function requestError(fetchId, error) {
                return Promise.reject(error);
              },
              response: function response(fetchId, _response) {
                var clonedText;
                if (isIgnored("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId))) {
                  return _response;
                }
                try {
                  clonedText = _response.clone().text();
                } catch (err) {
                  clonedText = Promise.resolve("LogRocket fetch error: ".concat(err.message));
                }
                clonedText.catch(function(error) {
                  if (error.name === "AbortError" && error instanceof DOMException) {
                    return;
                  }
                  throw error;
                }).then(function(data) {
                  var responseHash = {
                    url: _response.url,
                    status: _response.status,
                    headers: stringifyHeaders(_response.headers),
                    body: data,
                    method: fetchMethodMap[fetchId]
                  };
                  delete fetchMethodMap[fetchId];
                  addResponse("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), responseHash);
                });
                return _response;
              },
              responseError: function responseError(fetchId, error) {
                var response = {
                  url: void 0,
                  status: 0,
                  headers: {},
                  body: "".concat(error)
                };
                addResponse("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), response);
                return Promise.reject(error);
              }
            });
            return unregister;
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-network/src/registerNetworkInformation.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = registerNetworkInformation;
          var EFFECTIVE_TYPE_VALS = {
            "slow-2g": "SLOW2G",
            "2g": "TWOG",
            "3g": "THREEG",
            "4g": "FOURG"
          };
          function registerNetworkInformation(logger) {
            var lastStatus = void 0;
            function sendNetworkInformation() {
              var newStatus = {
                online: window.navigator.onLine,
                effectiveType: "UNKOWN"
              };
              if (!window.navigator.onLine) {
                newStatus.effectiveType = "NONE";
              } else if (window.navigator.connection && window.navigator.connection.effectiveType) {
                newStatus.effectiveType = EFFECTIVE_TYPE_VALS[window.navigator.connection.effectiveType] || "UNKNOWN";
              }
              if (lastStatus && newStatus.online === lastStatus.online && newStatus.effectiveType === lastStatus.effectiveType) {
                return;
              }
              lastStatus = newStatus;
              logger.addEvent("lr.network.NetworkStatusEvent", function() {
                var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$isEnabled = _ref.isEnabled, isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled;
                if (!isEnabled) {
                  return null;
                }
                return newStatus;
              });
            }
            setTimeout(sendNetworkInformation);
            if (window.navigator.connection && typeof window.navigator.connection.addEventListener === "function") {
              window.navigator.connection.addEventListener("change", sendNetworkInformation);
            }
            window.addEventListener("online", sendNetworkInformation);
            window.addEventListener("offline", sendNetworkInformation);
            return function() {
              window.removeEventListener("offline", sendNetworkInformation);
              window.removeEventListener("online", sendNetworkInformation);
              if (window.navigator.connection && typeof window.navigator.connection.removeEventListener === "function") {
                window.navigator.connection.removeEventListener("change", sendNetworkInformation);
              }
            };
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-network/src/registerXHR.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.setActive = setActive;
          exports2.default = registerXHR;
          var _mapValues = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-utils/src/mapValues.js"));
          var _enhanceFunc = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-utils/src/enhanceFunc.js"));
          var _startsWith = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-utils/src/startsWith.js"));
          var _nps = __webpack_require__("./packages/@apphub:logrocket-utils/src/constants/nps.js");
          var isActive = true;
          function setActive(shouldBeActive) {
            isActive = shouldBeActive;
          }
          var currentXHRId = 0;
          function registerXHR(_ref) {
            var addRequest = _ref.addRequest, addResponse = _ref.addResponse, isIgnored = _ref.isIgnored, logger = _ref.logger, _ref$shouldAugmentNPS = _ref.shouldAugmentNPS, shouldAugmentNPS = _ref$shouldAugmentNPS === void 0 ? true : _ref$shouldAugmentNPS, _ref$shouldParseXHRBl = _ref.shouldParseXHRBlob, shouldParseXHRBlob = _ref$shouldParseXHRBl === void 0 ? false : _ref$shouldParseXHRBl;
            var _XHR = XMLHttpRequest;
            var xhrMap = /* @__PURE__ */ new WeakMap();
            var unsubscribedFromXhr = false;
            var LOGROCKET_XHR_LABEL = "xhr-";
            window._lrXMLHttpRequest = XMLHttpRequest;
            XMLHttpRequest = function XMLHttpRequest2(mozAnon, mozSystem) {
              var xhrObject = new _XHR(mozAnon, mozSystem);
              if (!isActive) {
                return xhrObject;
              }
              xhrMap.set(xhrObject, {
                xhrId: ++currentXHRId,
                headers: {}
              });
              var openOriginal = xhrObject.open;
              function openShim() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                try {
                  var url = args[1];
                  if (window.URL && typeof window.URL === "function" && url.search(_nps.WOOTRIC_RESPONSES_REGEX) === 0) {
                    var logrocketSessionURL = new window.URL(logger.recordingURL);
                    logrocketSessionURL.searchParams.set("nps", "wootric");
                    var urlObj = new window.URL(url);
                    var responseText = urlObj.searchParams.get("response[text]");
                    var feedback = responseText ? "".concat(responseText, "\n\n") : "";
                    urlObj.searchParams.set("response[text]", "".concat(feedback, "<").concat(logrocketSessionURL.href, "|View LogRocket session>"));
                    args[1] = urlObj.href;
                  }
                } catch (e) {
                }
                return openOriginal.apply(this, args);
              }
              var sendOriginal = xhrObject.send;
              function sendShim() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }
                try {
                  var currentXHR = xhrMap.get(xhrObject);
                  if (window.URL && typeof window.URL === "function" && currentXHR && currentXHR.url && currentXHR.url.search(_nps.DELIGHTED_RESPONSES_REGEX) === 0 && args.length && args[0].indexOf(_nps.DELIGHTED_FEEDBACK_PREFIX) !== -1) {
                    var recordingURL = new window.URL(logger.recordingURL);
                    recordingURL.searchParams.set("nps", "delighted");
                    var logrocketSessionURL = encodeURIComponent(recordingURL.href);
                    var data = args[0].split("&").map(function(dataString) {
                      if ((0, _startsWith.default)(dataString, _nps.DELIGHTED_FEEDBACK_PREFIX)) {
                        var isEmpty = dataString === _nps.DELIGHTED_FEEDBACK_PREFIX;
                        return "".concat(dataString).concat(isEmpty ? "" : "\n\n", "<").concat(logrocketSessionURL, "|View LogRocket session>");
                      }
                      return dataString;
                    }).join("&");
                    args[0] = data;
                  }
                } catch (e) {
                }
                return sendOriginal.apply(this, args);
              }
              if (shouldAugmentNPS) {
                xhrObject.open = openShim;
                xhrObject.send = sendShim;
              }
              (0, _enhanceFunc.default)(xhrObject, "open", function(method, url) {
                if (unsubscribedFromXhr) {
                  return;
                }
                var currentXHR = xhrMap.get(xhrObject);
                currentXHR.method = method;
                currentXHR.url = url;
              });
              (0, _enhanceFunc.default)(xhrObject, "send", function(data) {
                if (unsubscribedFromXhr) {
                  return;
                }
                var currentXHR = xhrMap.get(xhrObject);
                if (!currentXHR) {
                  return;
                }
                var request = {
                  url: currentXHR.url,
                  method: currentXHR.method && currentXHR.method.toUpperCase(),
                  headers: (0, _mapValues.default)(currentXHR.headers || {}, function(headerValues) {
                    return headerValues.join(", ");
                  }),
                  body: data
                };
                addRequest("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId), request);
              });
              (0, _enhanceFunc.default)(xhrObject, "setRequestHeader", function(header, value) {
                if (unsubscribedFromXhr) {
                  return;
                }
                var currentXHR = xhrMap.get(xhrObject);
                if (!currentXHR) {
                  return;
                }
                currentXHR.headers = currentXHR.headers || {};
                currentXHR.headers[header] = currentXHR.headers[header] || [];
                currentXHR.headers[header].push(value);
              });
              var xhrListeners = {
                readystatechange: function readystatechange() {
                  if (unsubscribedFromXhr) {
                    return;
                  }
                  if (xhrObject.readyState === 4) {
                    var currentXHR = xhrMap.get(xhrObject);
                    if (!currentXHR) {
                      return;
                    }
                    if (isIgnored("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId))) {
                      return;
                    }
                    var headerString = xhrObject.getAllResponseHeaders();
                    var headers = headerString.split(/[\r\n]+/).reduce(function(previous, current) {
                      var next = previous;
                      var headerParts = current.split(": ");
                      if (headerParts.length > 0) {
                        var key = headerParts.shift();
                        var value = headerParts.join(": ");
                        if (previous[key]) {
                          next[key] += ", ".concat(value);
                        } else {
                          next[key] = value;
                        }
                      }
                      return next;
                    }, {});
                    var body;
                    try {
                      switch (xhrObject.responseType) {
                        case "json":
                          body = logger._shouldCloneResponse ? JSON.parse(JSON.stringify(xhrObject.response)) : xhrObject.response;
                          break;
                        case "arraybuffer":
                        case "blob": {
                          body = xhrObject.response;
                          break;
                        }
                        case "document": {
                          body = xhrObject.responseXML;
                          break;
                        }
                        case "text":
                        case "": {
                          body = xhrObject.responseText;
                          break;
                        }
                        default: {
                          body = "";
                        }
                      }
                    } catch (err) {
                      body = "LogRocket: Error accessing response.";
                    }
                    var response = {
                      url: currentXHR.url,
                      status: xhrObject.status,
                      headers,
                      body,
                      method: (currentXHR.method || "").toUpperCase()
                    };
                    if (shouldParseXHRBlob && response.body instanceof Blob) {
                      var blobReader = new FileReader();
                      blobReader.readAsText(response.body);
                      blobReader.onload = function() {
                        try {
                          response.body = JSON.parse(blobReader.result);
                        } catch (_unused) {
                        }
                        addResponse("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId), response);
                      };
                    } else {
                      addResponse("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId), response);
                    }
                  }
                }
              };
              Object.keys(xhrListeners).forEach(function(key) {
                xhrObject.addEventListener(key, xhrListeners[key]);
              });
              return xhrObject;
            };
            XMLHttpRequest.prototype = _XHR.prototype;
            ["UNSENT", "OPENED", "HEADERS_RECEIVED", "LOADING", "DONE"].forEach(function(variable) {
              XMLHttpRequest[variable] = _XHR[variable];
            });
            return function() {
              unsubscribedFromXhr = true;
              XMLHttpRequest = _XHR;
            };
          }
        },
        "./packages/@apphub:logrocket-redux/src/createEnhancer.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = createEnhancer;
          var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));
          var _now = _interopRequireDefault(__webpack_require__("./packages/@apphub:now/src/index.js"));
          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              if (enumerableOnly)
                symbols = symbols.filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
              keys.push.apply(keys, symbols);
            }
            return keys;
          }
          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};
              if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                  (0, _defineProperty2.default)(target, key, source[key]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
              } else {
                ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
              }
            }
            return target;
          }
          var storeIdCounter = 0;
          function createEnhancer(logger) {
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$stateSanitizer = _ref.stateSanitizer, stateSanitizer = _ref$stateSanitizer === void 0 ? function(f) {
              return f;
            } : _ref$stateSanitizer, _ref$actionSanitizer = _ref.actionSanitizer, actionSanitizer = _ref$actionSanitizer === void 0 ? function(f) {
              return f;
            } : _ref$actionSanitizer;
            return function(createStore) {
              return function(reducer, initialState, enhancer) {
                var store = createStore(reducer, initialState, enhancer);
                var originalDispatch = store.dispatch;
                var storeId = storeIdCounter++;
                logger.addEvent("lr.redux.InitialState", function() {
                  var sanitizedState;
                  try {
                    sanitizedState = stateSanitizer(store.getState());
                  } catch (err) {
                    console.error(err.toString());
                  }
                  return {
                    state: sanitizedState,
                    storeId
                  };
                });
                var dispatch = function dispatch2(action) {
                  var start = (0, _now.default)();
                  var err;
                  var res;
                  try {
                    res = originalDispatch(action);
                  } catch (_err) {
                    err = _err;
                  } finally {
                    var duration = (0, _now.default)() - start;
                    logger.addEvent("lr.redux.ReduxAction", function() {
                      var sanitizedState = null;
                      var sanitizedAction = null;
                      try {
                        sanitizedState = stateSanitizer(store.getState());
                        sanitizedAction = actionSanitizer(action);
                      } catch (err2) {
                        console.error(err2.toString());
                      }
                      if (sanitizedState && sanitizedAction) {
                        return {
                          storeId,
                          action: sanitizedAction,
                          duration,
                          stateDelta: sanitizedState
                        };
                      }
                      return null;
                    });
                  }
                  if (err) {
                    throw err;
                  }
                  return res;
                };
                return _objectSpread(_objectSpread({}, store), {}, {
                  dispatch
                });
              };
            };
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-redux/src/createMiddleware.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = createMiddleware;
          var _now = _interopRequireDefault(__webpack_require__("./packages/@apphub:now/src/index.js"));
          var storeIdCounter = 0;
          function createMiddleware(logger) {
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$stateSanitizer = _ref.stateSanitizer, stateSanitizer = _ref$stateSanitizer === void 0 ? function(f) {
              return f;
            } : _ref$stateSanitizer, _ref$actionSanitizer = _ref.actionSanitizer, actionSanitizer = _ref$actionSanitizer === void 0 ? function(f) {
              return f;
            } : _ref$actionSanitizer;
            return function(store) {
              var storeId = storeIdCounter++;
              logger.addEvent("lr.redux.InitialState", function() {
                var sanitizedState;
                try {
                  sanitizedState = stateSanitizer(store.getState());
                } catch (err) {
                  console.error(err.toString());
                }
                return {
                  state: sanitizedState,
                  storeId
                };
              });
              return function(next) {
                return function(action) {
                  var start = (0, _now.default)();
                  var err;
                  var res;
                  try {
                    res = next(action);
                  } catch (_err) {
                    err = _err;
                  } finally {
                    var duration = (0, _now.default)() - start;
                    logger.addEvent("lr.redux.ReduxAction", function() {
                      var sanitizedState = null;
                      var sanitizedAction = null;
                      try {
                        sanitizedState = stateSanitizer(store.getState());
                        sanitizedAction = actionSanitizer(action);
                      } catch (err2) {
                        console.error(err2.toString());
                      }
                      if (sanitizedState && sanitizedAction) {
                        return {
                          storeId,
                          action: sanitizedAction,
                          duration,
                          stateDelta: sanitizedState
                        };
                      }
                      return null;
                    });
                  }
                  if (err) {
                    throw err;
                  }
                  return res;
                };
              };
            };
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-redux/src/index.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          Object.defineProperty(exports2, "createEnhancer", {
            enumerable: true,
            get: function get() {
              return _createEnhancer.default;
            }
          });
          Object.defineProperty(exports2, "createMiddleware", {
            enumerable: true,
            get: function get() {
              return _createMiddleware.default;
            }
          });
          var _createEnhancer = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-redux/src/createEnhancer.js"));
          var _createMiddleware = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-redux/src/createMiddleware.js"));
        },
        "./packages/@apphub:logrocket-utils/src/TraceKit.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          (function(global) {
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = void 0;
            var TraceKit = {
              collectWindowErrors: true,
              debug: false
            };
            var _window = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
            var _slice = [].slice;
            var UNKNOWN_FUNCTION = "?";
            var ERROR_TYPES_RE = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;
            function getLocationHref() {
              if (typeof document === "undefined" || typeof document.location === "undefined")
                return "";
              return document.location.href;
            }
            TraceKit.report = function reportModuleWrapper() {
              var handlers = [], lastArgs = null, lastException = null, lastExceptionStack = null;
              function subscribe(handler) {
                installGlobalHandler();
                handlers.push(handler);
              }
              function unsubscribe(handler) {
                for (var i = handlers.length - 1; i >= 0; --i) {
                  if (handlers[i] === handler) {
                    handlers.splice(i, 1);
                  }
                }
              }
              function unsubscribeAll() {
                uninstallGlobalHandler();
                handlers = [];
              }
              function notifyHandlers(stack, isWindowError) {
                var exception = null;
                if (isWindowError && !TraceKit.collectWindowErrors) {
                  return;
                }
                for (var i in handlers) {
                  if (handlers.hasOwnProperty(i)) {
                    try {
                      handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
                    } catch (inner) {
                      exception = inner;
                    }
                  }
                }
                if (exception) {
                  throw exception;
                }
              }
              var _oldOnerrorHandler, _onErrorHandlerInstalled;
              function traceKitWindowOnError(message, url, lineNo, colNo, ex) {
                var stack = null;
                if (lastExceptionStack) {
                  TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
                  processLastException();
                } else if (ex) {
                  stack = TraceKit.computeStackTrace(ex);
                  notifyHandlers(stack, true);
                } else {
                  var location = {
                    "url": url,
                    "line": lineNo,
                    "column": colNo
                  };
                  var name = void 0;
                  var msg = message;
                  var groups;
                  if ({}.toString.call(message) === "[object String]") {
                    var groups = message.match(ERROR_TYPES_RE);
                    if (groups) {
                      name = groups[1];
                      msg = groups[2];
                    }
                  }
                  location.func = UNKNOWN_FUNCTION;
                  stack = {
                    "name": name,
                    "message": msg,
                    "url": getLocationHref(),
                    "stack": [location]
                  };
                  notifyHandlers(stack, true);
                }
                if (_oldOnerrorHandler) {
                  return _oldOnerrorHandler.apply(this, arguments);
                }
                return false;
              }
              function installGlobalHandler() {
                if (_onErrorHandlerInstalled) {
                  return;
                }
                _oldOnerrorHandler = _window.onerror;
                _window.onerror = traceKitWindowOnError;
                _onErrorHandlerInstalled = true;
              }
              function uninstallGlobalHandler() {
                if (!_onErrorHandlerInstalled) {
                  return;
                }
                _window.onerror = _oldOnerrorHandler;
                _onErrorHandlerInstalled = false;
                _oldOnerrorHandler = void 0;
              }
              function processLastException() {
                var _lastExceptionStack = lastExceptionStack, _lastArgs = lastArgs;
                lastArgs = null;
                lastExceptionStack = null;
                lastException = null;
                notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
              }
              function report(ex, rethrow) {
                var args = _slice.call(arguments, 1);
                if (lastExceptionStack) {
                  if (lastException === ex) {
                    return;
                  } else {
                    processLastException();
                  }
                }
                var stack = TraceKit.computeStackTrace(ex);
                lastExceptionStack = stack;
                lastException = ex;
                lastArgs = args;
                setTimeout(function() {
                  if (lastException === ex) {
                    processLastException();
                  }
                }, stack.incomplete ? 2e3 : 0);
                if (rethrow !== false) {
                  throw ex;
                }
              }
              report.subscribe = subscribe;
              report.unsubscribe = unsubscribe;
              report.uninstall = unsubscribeAll;
              return report;
            }();
            TraceKit.computeStackTrace = function computeStackTraceWrapper() {
              function escapeRegExp(text) {
                return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&");
              }
              function escapeCodeAsRegExpForMatchingInsideHTML(body) {
                return escapeRegExp(body).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+");
              }
              function computeStackTraceFromStackProp(ex) {
                if (typeof ex.stack === "undefined" || !ex.stack)
                  return;
                var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, lines = ex.stack.split("\n"), stack = [], parts, element, reference = /^(.*) is undefined$/.exec(ex.message);
                for (var i = 0, j = lines.length; i < j; ++i) {
                  if (parts = chrome.exec(lines[i])) {
                    var isNative = parts[2] && parts[2].indexOf("native") !== -1;
                    element = {
                      "url": !isNative ? parts[2] : null,
                      "func": parts[1] || UNKNOWN_FUNCTION,
                      "args": isNative ? [parts[2]] : [],
                      "line": parts[3] ? +parts[3] : null,
                      "column": parts[4] ? +parts[4] : null
                    };
                  } else if (parts = winjs.exec(lines[i])) {
                    element = {
                      "url": parts[2],
                      "func": parts[1] || UNKNOWN_FUNCTION,
                      "args": [],
                      "line": +parts[3],
                      "column": parts[4] ? +parts[4] : null
                    };
                  } else if (parts = gecko.exec(lines[i])) {
                    element = {
                      "url": parts[3],
                      "func": parts[1] || UNKNOWN_FUNCTION,
                      "args": parts[2] ? parts[2].split(",") : [],
                      "line": parts[4] ? +parts[4] : null,
                      "column": parts[5] ? +parts[5] : null
                    };
                  } else {
                    continue;
                  }
                  if (!element.func && element.line) {
                    element.func = UNKNOWN_FUNCTION;
                  }
                  stack.push(element);
                }
                if (!stack.length) {
                  return null;
                }
                if (!stack[0].column && typeof ex.columnNumber !== "undefined") {
                  stack[0].column = ex.columnNumber + 1;
                }
                return {
                  "name": ex.name,
                  "message": ex.message,
                  "url": getLocationHref(),
                  "stack": stack
                };
              }
              function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
                var initial = {
                  "url": url,
                  "line": lineNo
                };
                if (initial.url && initial.line) {
                  stackInfo.incomplete = false;
                  if (!initial.func) {
                    initial.func = UNKNOWN_FUNCTION;
                  }
                  if (stackInfo.stack.length > 0) {
                    if (stackInfo.stack[0].url === initial.url) {
                      if (stackInfo.stack[0].line === initial.line) {
                        return false;
                      } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
                        stackInfo.stack[0].line = initial.line;
                        return false;
                      }
                    }
                  }
                  stackInfo.stack.unshift(initial);
                  stackInfo.partial = true;
                  return true;
                } else {
                  stackInfo.incomplete = true;
                }
                return false;
              }
              function computeStackTraceByWalkingCallerChain(ex, depth) {
                var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, stack = [], funcs = {}, recursion = false, parts, item, source;
                for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
                  if (curr === computeStackTrace || curr === TraceKit.report) {
                    continue;
                  }
                  item = {
                    "url": null,
                    "func": UNKNOWN_FUNCTION,
                    "line": null,
                    "column": null
                  };
                  if (curr.name) {
                    item.func = curr.name;
                  } else if (parts = functionName.exec(curr.toString())) {
                    item.func = parts[1];
                  }
                  if (typeof item.func === "undefined") {
                    try {
                      item.func = parts.input.substring(0, parts.input.indexOf("{"));
                    } catch (e) {
                    }
                  }
                  if (funcs["" + curr]) {
                    recursion = true;
                  } else {
                    funcs["" + curr] = true;
                  }
                  stack.push(item);
                }
                if (depth) {
                  stack.splice(0, depth);
                }
                var result = {
                  "name": ex.name,
                  "message": ex.message,
                  "url": getLocationHref(),
                  "stack": stack
                };
                augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
                return result;
              }
              function computeStackTrace(ex, depth) {
                var stack = null;
                depth = depth == null ? 0 : +depth;
                try {
                  stack = computeStackTraceFromStackProp(ex);
                  if (stack) {
                    return stack;
                  }
                } catch (e) {
                  if (TraceKit.debug) {
                    throw e;
                  }
                }
                try {
                  stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
                  if (stack) {
                    return stack;
                  }
                } catch (e) {
                  if (TraceKit.debug) {
                    throw e;
                  }
                }
                return {
                  "name": ex.name,
                  "message": ex.message,
                  "url": getLocationHref()
                };
              }
              computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
              computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;
              return computeStackTrace;
            }();
            var _default = TraceKit;
            exports2.default = _default;
            module2.exports = exports2.default;
          }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"));
        },
        "./packages/@apphub:logrocket-utils/src/constants/nps.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.DELIGHTED_FEEDBACK_PREFIX = exports2.DELIGHTED_RESPONSES_REGEX = exports2.WOOTRIC_RESPONSES_REGEX = void 0;
          var WOOTRIC_RESPONSES_REGEX = /^https:\/\/production.wootric.com\/responses/;
          exports2.WOOTRIC_RESPONSES_REGEX = WOOTRIC_RESPONSES_REGEX;
          var DELIGHTED_RESPONSES_REGEX = /^https:\/\/web.delighted.com\/e\/[a-zA-Z-]*\/c/;
          exports2.DELIGHTED_RESPONSES_REGEX = DELIGHTED_RESPONSES_REGEX;
          var DELIGHTED_FEEDBACK_PREFIX = "comment=";
          exports2.DELIGHTED_FEEDBACK_PREFIX = DELIGHTED_FEEDBACK_PREFIX;
        },
        "./packages/@apphub:logrocket-utils/src/enhanceFunc.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = enhanceFunc;
          function enhanceFunc(obj, method, handler) {
            var original = obj[method];
            function shim() {
              var res;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              if (original) {
                res = original.apply(this, args);
              }
              handler.apply(this, args);
              return res;
            }
            obj[method] = shim;
            return function() {
              obj[method] = original;
            };
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-utils/src/mapValues.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = mapValues;
          function mapValues(obj, f) {
            if (obj == null) {
              return {};
            }
            var res = {};
            Object.keys(obj).forEach(function(key) {
              res[key] = f(obj[key]);
            });
            return res;
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:logrocket-utils/src/startsWith.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = startsWith;
          function startsWith(value, search) {
            var pos = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            return value && search && value.substring(pos, pos + search.length) === search;
          }
          module2.exports = exports2.default;
        },
        "./packages/@apphub:now/src/index.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = void 0;
          var dateNow = Date.now.bind(Date);
          var loadTime = dateNow();
          var _default = typeof performance !== "undefined" && performance.now ? performance.now.bind(performance) : function() {
            return dateNow() - loadTime;
          };
          exports2.default = _default;
          module2.exports = exports2.default;
        },
        "./packages/logrocket/src/LogRocket.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = exports2.MAX_QUEUE_SIZE = void 0;
          var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));
          var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));
          var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));
          var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));
          var _logrocketNetwork = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-network/src/index.js"));
          var _logrocketExceptions = __webpack_require__("./packages/@apphub:logrocket-exceptions/src/index.js");
          var _logrocketConsole = _interopRequireDefault(__webpack_require__("./packages/@apphub:logrocket-console/src/index.js"));
          var _logrocketRedux = __webpack_require__("./packages/@apphub:logrocket-redux/src/index.js");
          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              if (enumerableOnly)
                symbols = symbols.filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
              keys.push.apply(keys, symbols);
            }
            return keys;
          }
          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};
              if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                  (0, _defineProperty2.default)(target, key, source[key]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
              } else {
                ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
              }
            }
            return target;
          }
          var MAX_QUEUE_SIZE = 1e3;
          exports2.MAX_QUEUE_SIZE = MAX_QUEUE_SIZE;
          var considerIngestServerOption = function considerIngestServerOption2() {
            var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ingestServer = _ref.ingestServer, options = (0, _objectWithoutProperties2.default)(_ref, ["ingestServer"]);
            if (ingestServer) {
              return _objectSpread({
                serverURL: "".concat(ingestServer, "/i"),
                statsURL: "".concat(ingestServer, "/s")
              }, options);
            }
            return options;
          };
          var LogRocket2 = /* @__PURE__ */ function() {
            function LogRocket3() {
              var _this = this;
              (0, _classCallCheck2.default)(this, LogRocket3);
              this._buffer = [];
              ["log", "info", "warn", "error", "debug"].forEach(function(method) {
                _this[method] = function() {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }
                  _this.addEvent("lr.core.LogEvent", function() {
                    var consoleOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (method === "error" && consoleOptions.shouldAggregateConsoleErrors) {
                      _logrocketExceptions.Capture.captureMessage(_this, args[0], {}, true);
                    }
                    return {
                      logLevel: method.toUpperCase(),
                      args
                    };
                  }, {
                    shouldCaptureStackTrace: true
                  });
                };
              });
              this._isInitialized = false;
              this._installed = [];
              window._lr_surl_cb = this.getSessionURL.bind(this);
            }
            (0, _createClass2.default)(LogRocket3, [{
              key: "addEvent",
              value: function addEvent(type, getMessage) {
                var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var time = Date.now();
                this._run(function(logger) {
                  logger.addEvent(type, getMessage, _objectSpread(_objectSpread({}, opts), {}, {
                    timeOverride: time
                  }));
                });
              }
            }, {
              key: "onLogger",
              value: function onLogger(logger) {
                this._logger = logger;
                while (this._buffer.length > 0) {
                  var f = this._buffer.shift();
                  f(this._logger);
                }
              }
            }, {
              key: "_run",
              value: function _run(f) {
                if (this._isDisabled) {
                  return;
                }
                if (this._logger) {
                  f(this._logger);
                } else {
                  if (this._buffer.length >= MAX_QUEUE_SIZE) {
                    this._isDisabled = true;
                    console.warn("LogRocket: script did not load. Check that you have a valid network connection.");
                    this.uninstall();
                    return;
                  }
                  this._buffer.push(f.bind(this));
                }
              }
            }, {
              key: "init",
              value: function init(appID) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!this._isInitialized) {
                  var _opts$shouldAugmentNP = opts.shouldAugmentNPS, shouldAugmentNPS = _opts$shouldAugmentNP === void 0 ? true : _opts$shouldAugmentNP, _opts$shouldParseXHRB = opts.shouldParseXHRBlob, shouldParseXHRBlob = _opts$shouldParseXHRB === void 0 ? false : _opts$shouldParseXHRB;
                  this._installed.push((0, _logrocketExceptions.registerExceptions)(this));
                  this._installed.push((0, _logrocketNetwork.default)(this, {
                    shouldAugmentNPS: !!shouldAugmentNPS,
                    shouldParseXHRBlob: !!shouldParseXHRBlob
                  }));
                  this._installed.push((0, _logrocketConsole.default)(this));
                  this._isInitialized = true;
                  this._run(function(logger) {
                    logger.init(appID, considerIngestServerOption(opts));
                  });
                }
              }
            }, {
              key: "start",
              value: function start() {
                this._run(function(logger) {
                  logger.start();
                });
              }
            }, {
              key: "uninstall",
              value: function uninstall() {
                this._installed.forEach(function(f) {
                  return f();
                });
                this._buffer = [];
                this._run(function(logger) {
                  logger.uninstall();
                });
              }
            }, {
              key: "identify",
              value: function identify(id, opts) {
                this._run(function(logger) {
                  logger.identify(id, opts);
                });
              }
            }, {
              key: "startNewSession",
              value: function startNewSession() {
                this._run(function(logger) {
                  logger.startNewSession();
                });
              }
            }, {
              key: "track",
              value: function track(customEventName, eventProperties) {
                this._run(function(logger) {
                  logger.track(customEventName, eventProperties);
                });
              }
            }, {
              key: "getSessionURL",
              value: function getSessionURL(cb) {
                if (typeof cb !== "function") {
                  throw new Error("LogRocket: must pass callback to getSessionURL()");
                }
                this._run(function(logger) {
                  if (logger.getSessionURL) {
                    logger.getSessionURL(cb);
                  } else {
                    cb(logger.recordingURL);
                  }
                });
              }
            }, {
              key: "getVersion",
              value: function getVersion(cb) {
                this._run(function(logger) {
                  cb(logger.version);
                });
              }
            }, {
              key: "captureMessage",
              value: function captureMessage(message) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                _logrocketExceptions.Capture.captureMessage(this, message, options);
              }
            }, {
              key: "captureException",
              value: function captureException(exception) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                _logrocketExceptions.Capture.captureException(this, exception, options);
              }
            }, {
              key: "version",
              get: function get() {
                return this._logger && this._logger.version;
              }
            }, {
              key: "sessionURL",
              get: function get() {
                return this._logger && this._logger.recordingURL;
              }
            }, {
              key: "recordingURL",
              get: function get() {
                return this._logger && this._logger.recordingURL;
              }
            }, {
              key: "recordingID",
              get: function get() {
                return this._logger && this._logger.recordingID;
              }
            }, {
              key: "threadID",
              get: function get() {
                return this._logger && this._logger.threadID;
              }
            }, {
              key: "tabID",
              get: function get() {
                return this._logger && this._logger.tabID;
              }
            }, {
              key: "reduxEnhancer",
              value: function reduxEnhancer() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return (0, _logrocketRedux.createEnhancer)(this, options);
              }
            }, {
              key: "reduxMiddleware",
              value: function reduxMiddleware() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return (0, _logrocketRedux.createMiddleware)(this, options);
              }
            }, {
              key: "isDisabled",
              get: function get() {
                return !!(this._isDisabled || this._logger && this._logger._isDisabled);
              }
            }]);
            return LogRocket3;
          }();
          exports2.default = LogRocket2;
        },
        "./packages/logrocket/src/makeLogRocket.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = makeLogRocket;
          var _LogRocket = _interopRequireDefault(__webpack_require__("./packages/logrocket/src/LogRocket.js"));
          var REACT_NATIVE_NOTICE = "LogRocket does not yet support React Native.";
          var makeNoopPolyfill = function makeNoopPolyfill2() {
            return {
              init: function init() {
              },
              uninstall: function uninstall() {
              },
              log: function log() {
              },
              info: function info() {
              },
              warn: function warn() {
              },
              error: function error() {
              },
              debug: function debug() {
              },
              addEvent: function addEvent() {
              },
              identify: function identify() {
              },
              start: function start() {
              },
              get threadID() {
                return null;
              },
              get recordingID() {
                return null;
              },
              get recordingURL() {
                return null;
              },
              reduxEnhancer: function reduxEnhancer() {
                return function(store) {
                  return function() {
                    return store.apply(void 0, arguments);
                  };
                };
              },
              reduxMiddleware: function reduxMiddleware() {
                return function() {
                  return function(next) {
                    return function(action) {
                      return next(action);
                    };
                  };
                };
              },
              track: function track() {
              },
              getSessionURL: function getSessionURL() {
              },
              getVersion: function getVersion() {
              },
              startNewSession: function startNewSession() {
              },
              onLogger: function onLogger() {
              },
              setClock: function setClock() {
              },
              captureMessage: function captureMessage() {
              },
              captureException: function captureException() {
              }
            };
          };
          function makeLogRocket() {
            var getLogger = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
            };
            if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
              throw new Error(REACT_NATIVE_NOTICE);
            }
            if (typeof window !== "undefined") {
              if (window._disableLogRocket) {
                return makeNoopPolyfill();
              }
              if (window.MutationObserver && window.WeakMap) {
                window._lrMutationObserver = window.MutationObserver;
                var instance = new _LogRocket.default();
                getLogger(instance);
                return instance;
              }
            }
            return makeNoopPolyfill();
          }
          module2.exports = exports2.default;
        },
        "./packages/logrocket/src/module-npm.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = void 0;
          var _setup = _interopRequireDefault(__webpack_require__("./packages/logrocket/src/setup.js"));
          var instance = (0, _setup.default)();
          var _default = instance;
          exports2.default = _default;
          module2.exports = exports2.default;
        },
        "./packages/logrocket/src/setup.js": function(module2, exports2, __webpack_require__) {
          "use strict";
          var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.default = setup;
          var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));
          var _makeLogRocket = _interopRequireDefault(__webpack_require__("./packages/logrocket/src/makeLogRocket.js"));
          var CDN_SERVER_MAP = {
            "cdn.logrocket.io": "https://r.logrocket.io",
            "cdn.lr-ingest.io": "https://r.lr-ingest.io",
            "cdn.lr-in.com": "https://r.lr-in.com",
            "cdn-staging.logrocket.io": "https://staging-i.logrocket.io",
            "cdn-staging.lr-ingest.io": "https://staging-i.lr-ingest.io",
            "cdn-staging.lr-in.com": "https://staging-i.lr-in.com"
          };
          function setup() {
            var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, enterpriseServer = _ref.enterpriseServer, _ref$sdkVersion = _ref.sdkVersion, sdkVersion = _ref$sdkVersion === void 0 ? "2.2.0" : _ref$sdkVersion, opts = (0, _objectWithoutProperties2.default)(_ref, ["enterpriseServer", "sdkVersion"]);
            var scriptOrigin = void 0 === "staging" ? "https://cdn-staging.logrocket.io" : "https://cdn.logrocket.io";
            var scriptIngest;
            if (sdkVersion === "script") {
              try {
                var scriptTag = document.currentScript;
                var matches = scriptTag.src.match(/^(https?:\/\/([^\\]+))\/.+$/);
                var scriptHostname = matches && matches[2];
                if (scriptHostname && CDN_SERVER_MAP[scriptHostname]) {
                  scriptOrigin = matches && matches[1];
                  scriptIngest = CDN_SERVER_MAP[scriptHostname];
                }
              } catch (_) {
              }
            } else {
              scriptOrigin = void 0 === "staging" ? "https://cdn-staging.lr-in.com" : "https://cdn.lr-in.com";
              scriptIngest = void 0 === "staging" ? "https://staging-i.lr-in.com" : "https://r.lr-in.com";
            }
            var sdkServer = opts.sdkServer || enterpriseServer;
            var ingestServer = opts.ingestServer || enterpriseServer || scriptIngest;
            var instance = (0, _makeLogRocket.default)(function() {
              var script = document.createElement("script");
              if (ingestServer) {
                if (typeof window.__SDKCONFIG__ === "undefined") {
                  window.__SDKCONFIG__ = {};
                }
                window.__SDKCONFIG__.serverURL = "".concat(ingestServer, "/i");
                window.__SDKCONFIG__.statsURL = "".concat(ingestServer, "/s");
              }
              if (sdkServer) {
                script.src = "".concat(sdkServer, "/logger.min.js");
              } else if (window.__SDKCONFIG__ && window.__SDKCONFIG__.loggerURL) {
                script.src = window.__SDKCONFIG__.loggerURL;
              } else if (window._lrAsyncScript) {
                script.src = window._lrAsyncScript;
              } else {
                script.src = "".concat(scriptOrigin, "/logger-1.min.js");
              }
              script.async = true;
              document.head.appendChild(script);
              script.onload = function() {
                if (typeof window._LRLogger === "function") {
                  instance.onLogger(new window._LRLogger({
                    sdkVersion
                  }));
                } else {
                  console.warn("LogRocket: script execution has been blocked by a product or service.");
                  instance.uninstall();
                }
              };
              script.onerror = function() {
                console.warn("LogRocket: script could not load. Check that you have a valid network connection.");
                instance.uninstall();
              };
            });
            return instance;
          }
          module2.exports = exports2.default;
        },
        0: function(module2, exports2, __webpack_require__) {
          module2.exports = __webpack_require__("./packages/logrocket/src/module-npm.js");
        }
      });
    });
  }
});

// node_modules/logrocket-react/dist/index.js
var require_dist = __commonJS({
  "node_modules/logrocket-react/dist/index.js"(exports, module) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = setupReact;
    var _reactDom = require_react_dom();
    var getInstanceFromNode = void 0;
    var secret = _reactDom.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    if (secret && secret.Events && secret.Events[0]) {
      getInstanceFromNode = secret.Events[0];
    } else {
      console.warn("logrocket-react does not work with this version of React");
    }
    function setupReact() {
      var listener = function listener2(event) {
        try {
          var fiberNode = getInstanceFromNode(event.target);
          var names = [];
          var currentElement = fiberNode;
          while (currentElement) {
            var name = typeof currentElement.elementType === "function" && currentElement.elementType.displayName;
            if (name) {
              names.push(name);
            }
            currentElement = currentElement.return;
          }
          event.__lrName = names;
        } catch (err) {
          console.error("logrocket-react caught an error while hooking into React. Please make sure you are using the correct version of logrocket-react for your version of react-dom.");
        }
      };
      document.body.addEventListener("click", listener, { capture: true, passive: true });
    }
    module.exports = exports["default"];
  }
});

// browser-route-module:/sandbox/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/components/LogRocket.client.tsx
init_react();
var import_logrocket = __toESM(require_build_umd());
var import_logrocket_react = __toESM(require_dist());
function LogRocket_client_default() {
  (0, import_logrocket_react.default)(import_logrocket.default);
  return null;
}

// app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null), /* @__PURE__ */ React.createElement(ClientOnly, null, () => /* @__PURE__ */ React.createElement(LogRocket_client_default, null))));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-FEAWAL67.js.map
