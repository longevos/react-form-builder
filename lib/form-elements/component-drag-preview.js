"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxDragPreview = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var boxStyles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move'
};
var styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)'
};
var Box = function Box(_ref) {
  var title = _ref.title,
    color = _ref.color;
  var backgroundColor = color ? '#059862' : 'white';
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, boxStyles), {}, {
      backgroundColor: backgroundColor
    })
  }, title);
};
var BoxDragPreview = exports.BoxDragPreview = function BoxDragPreview(_ref2) {
  var item = _ref2.item;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    tickTock = _useState2[0],
    setTickTock = _useState2[1];
  var text = item.data.content ? item.data.content : item.data.label ? item.data.label : item.data.text;
  var isLongText = text.length > 20;
  var previewText = isLongText ? "".concat(text.slice(0, 20), "...") : text;

  // useEffect(function subscribeToIntervalTick() {
  //     const interval = setInterval(() => {
  //         setTickTock(!tickTock);
  //     }, 500);
  //     return () => clearInterval(interval);
  // }, [tickTock]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles,
    role: "BoxPreview"
  }, /*#__PURE__*/_react["default"].createElement(Box, {
    title: previewText,
    color: tickTock
  }));
};