"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraftJs = void 0;
Object.defineProperty(exports, "Editor", {
  enumerable: true,
  get: function get() {
    return _reactDraftWysiwyg.Editor;
  }
});
exports.generateUUID = exports.draftToHtml = exports.TextAreaAutosize = void 0;
exports.groupBy = groupBy;
var _react = _interopRequireDefault(require("react"));
var PkgTextAreaAutosize = _interopRequireWildcard(require("react-textarea-autosize"));
var DraftJs = _interopRequireWildcard(require("draft-js"));
exports.DraftJs = DraftJs;
var draftToHtml = _interopRequireWildcard(require("draftjs-to-html"));
exports.draftToHtml = draftToHtml;
var _reactDraftWysiwyg = require("react-draft-wysiwyg");
var _UUID = _interopRequireDefault(require("../UUID"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var generateUUID = exports.generateUUID = function generateUUID() {
  return _UUID["default"].uuid();
};
var TextAreaAutosize = exports.TextAreaAutosize = function TextAreaAutosize(props) {
  return /*#__PURE__*/_react["default"].createElement(PkgTextAreaAutosize, props);
};
function groupBy(list, keyGetter) {
  var map = new Map();
  list.forEach(function (item) {
    var key = keyGetter(item);
    var collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}