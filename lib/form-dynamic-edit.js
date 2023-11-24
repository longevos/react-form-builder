"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var FormElementsEditor = function FormElementsEditor(props) {
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    dynamic = _React$useState2[0],
    setDynamic = _React$useState2[1];
  _react["default"].useEffect(function () {
    var loadDynamic = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var x;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(require('./form-elements-edit'));
              });
            case 2:
              x = _context.sent;
              setDynamic(function () {
                return x["default"];
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function loadDynamic() {
        return _ref.apply(this, arguments);
      };
    }();
    loadDynamic();
  }, []);
  if (!dynamic) {
    return /*#__PURE__*/_react["default"].createElement("div", null, "Loading...");
  }
  var Component = dynamic;
  return /*#__PURE__*/_react["default"].createElement(Component, props);
};
var _default = exports["default"] = FormElementsEditor;