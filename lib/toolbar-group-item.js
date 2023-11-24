"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
  * <ToolbarGroupItem />
  */

function ToolbarGroupItem(props) {
  var name = props.name,
    group = props.group,
    renderItem = props.renderItem;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  function onClick() {
    setShow(!show);
  }
  var classShow = 'collapse' + (show ? ' show' : '');
  return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "toolbar-group-item"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-link btn-block text-left",
    type: "button",
    onClick: onClick
  }, name), /*#__PURE__*/_react["default"].createElement("div", {
    className: classShow
  }, /*#__PURE__*/_react["default"].createElement("ul", null, group.map(renderItem)))));
}
var _default = exports["default"] = ToolbarGroupItem;