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

/**
 * Br simulates the writeln method to
 * 'write' a fake carriage return
 */
var Br =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Br, _BaseComponent);

  function Br(root, props) {
    var _this;

    _classCallCheck(this, Br);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Br).call(this, root, props));
    _this.text = '';
    return _this;
  }

  _createClass(Br, [{
    key: "appendChild",
    value: function appendChild(child) {
      if (child !== undefined && child !== null) {
        // eslint-disable-next-line no-console
        console.error('<br /> does not accept children! Received:', child);
      } // set this.position based off root's current position


      this.position = [this.root.position[0], this.root.position[1]]; // update root's position to account for the new line

      this.root.position = [this.position[0] + 1, 1];
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(child) {
      if (child !== undefined && child !== null) {
        // eslint-disable-next-line no-console
        console.error('<br /> does not accept children! Received:', child);
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(deltaRow, deltaCol) {
      this.position = [this.position[0] + deltaRow, this.position[1] + deltaCol];
    }
  }, {
    key: "updateSiblingPositions",
    value: function updateSiblingPositions(deltaRow) {
      var _this2 = this;

      // find all children 'below' this line
      var childrenToUpdate = this.root.children.filter(function (child) {
        return child !== _this2 && child.position[0] > _this2.position[0];
      }); // move them by deltaRow rows

      childrenToUpdate.forEach(function (child) {
        return child.updatePosition(deltaRow, 0);
      });
    }
  }, {
    key: "removeSelf",
    value: function removeSelf() {
      this.updateSiblingPositions(-1);
    }
  }]);

  return Br;
}(_BaseComponent2["default"]);

var _default = Br;
exports["default"] = _default;