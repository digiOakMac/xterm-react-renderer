"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseComponent2 = _interopRequireDefault(require("./BaseComponent"));

var _Cursor = _interopRequireDefault(require("./Cursor"));

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
 * Text uses the `write` method available through XTerm to
 * write text to the terminal
 */
var Text =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Text, _BaseComponent);

  function Text(root, props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, root, props));
    _this.text = props.children;
    return _this;
  }

  _createClass(Text, [{
    key: "goToPosition",
    value: function goToPosition() {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.position[0];
      var col = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.position[1];
      this.terminal.write("\x1B[".concat(row, ";").concat(col, "H"));
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(text) {
      // erase old text
      this.goToPosition(this.position[0], this.position[1] + this.text.length);
      this.terminal.write('\b \b'.repeat(this.text.length)); // write new text

      this.terminal.write("".concat(text));
      this.text = text;
    }
  }, {
    key: "appendChild",
    value: function appendChild(text) {
      this.text = text; // set this.position based off root's current position

      this.position = [this.root.position[0], this.root.position[1]]; // adjust sibling positions if this text is in the place of current children

      this.updateSiblingPositions(this.text.length); // go to this.position

      this.goToPosition(); // write the text to the terminal

      this.terminal.write("".concat(text)); // update root's position to account for the text length

      this.root.position = [this.position[0], this.position[1] + this.text.length];
    }
  }, {
    key: "updateSiblingPositions",
    value: function updateSiblingPositions(delta) {
      var _this2 = this;

      var children = this.root.children;
      var collidingChildren = children.filter(function (child) {
        return child.position[0] === _this2.position[0] && child.position[1] >= _this2.position[1] && child !== _this2;
      }); // sort the array so that children are not overwritten
      // by the deletion of future iterations
      // that is required when we call updatePosition.

      collidingChildren.sort(function (childA, childB) {
        if (delta > 0) {
          return childB.position[1] - childA.position[1];
        } else {
          return childA.position[1] - childB.position[1];
        }
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = collidingChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;
          console.log('updating child', child, child.position, this.position, this.text, delta);
          child.updatePosition(0, delta);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(deltaRow, deltaCol) {
      // go to 'old' position
      this.goToPosition(this.position[0], this.position[1] + this.text.length); // remove current text

      this.terminal.write('\b \b'.repeat(this.text.length)); // update position and go to it

      this.position = [this.position[0] + deltaRow, this.position[1] + deltaCol];
      this.goToPosition(); // write text back

      this.terminal.write("".concat(this.text));
    }
  }, {
    key: "removeSelf",
    value: function removeSelf() {
      this.goToPosition(this.position[0], this.position[1] + this.text.length);
      this.terminal.write('\b \b'.repeat(this.text.length)); // adjust sibling positions if this text is in the place of current children

      this.updateSiblingPositions(-this.text.length); // update root's position to account for the text length

      this.root.position = [this.position[0], this.position[1]];
    }
  }]);

  return Text;
}(_BaseComponent2["default"]);

var _default = Text;
exports["default"] = _default;