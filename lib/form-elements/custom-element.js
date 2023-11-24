"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _componentHeader = _interopRequireDefault(require("./component-header"));
var _componentLabel = _interopRequireDefault(require("./component-label"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CustomElement = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CustomElement, _Component);
  var _super = _createSuper(CustomElement);
  function CustomElement(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, CustomElement);
    _this = _super.call(this, props);
    _this.inputField = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  (0, _createClass2["default"])(CustomElement, [{
    key: "render",
    value: function render() {
      var bare = this.props.data.bare;
      var props = {};
      props.name = this.props.data.field_name;
      props.defaultValue = this.props.defaultValue;
      if (this.props.mutable && this.props.data.forwardRef) {
        props.ref = this.inputField;
      }
      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      // Return if component is invalid.
      if (!this.props.data.component) return null;
      var Element = this.props.data.component;
      var baseClasses = 'SortableItem rfb-item';
      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: baseClasses,
        style: _objectSpread({}, this.props.style)
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), bare ? /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
        data: this.props.data
      }, this.props.data.props, props)) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], (0, _extends2["default"])({
        className: "form-label"
      }, this.props)), /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
        data: this.props.data
      }, this.props.data.props, props))));
    }
  }]);
  return CustomElement;
}(_react.Component);
CustomElement.propTypes = {};
var _default = exports["default"] = CustomElement;