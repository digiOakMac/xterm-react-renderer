"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseComponent2 = _interopRequireDefault(require("./BaseComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Cursor =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Cursor, _BaseComponent);

  function Cursor(root, props) {
    _classCallCheck(this, Cursor);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cursor).call(this, root, props));
  }

  _createClass(Cursor, [{
    key: "appendChild",
    value: function appendChild(child) {
      if (child !== undefined && child !== null) {
        // eslint-disable-next-line no-console
        console.error('<cursor /> does not accept children! Received:', child);
      } // set this.position based off root's current position


      this.position = [this.root.position[0], this.root.position[1]];
      console.log('cursor position', this.position);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(child) {
      if (child !== undefined && child !== null) {
        // eslint-disable-next-line no-console
        console.error('<cursor /> does not accept children! Received:', child);
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(deltaRow, deltaCol) {
      this.position = [this.position[0] + deltaRow, this.position[1] + deltaCol];
      console.log('cursor position', this.position);
    }
  }, {
    key: "removeSelf",
    value: function removeSelf() {
      /* noop */
    }
  }]);

  return Cursor;
}(_BaseComponent2["default"]);

var _default = Cursor;
exports["default"] = _default;