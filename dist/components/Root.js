"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _xterm = require("xterm");

var _Cursor = _interopRequireDefault(require("./Cursor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Root is used when calling the custom `render()` method
 * (found in xterm-renderer/render/index.js)
 * As opposed to mixing the XTermRenderer in a React-DOM project
 * and using the `<Terminal>` root component
 */
var Root =
/*#__PURE__*/
function () {
  function Root() {
    _classCallCheck(this, Root);

    this.root = new _xterm.Terminal({
      cursorBlink: true
    });
    this.position = [1, 1];
    this.children = [];
  }

  _createClass(Root, [{
    key: "_moveToCursorOrEndOfInput",
    value: function _moveToCursorOrEndOfInput() {
      // first, try and find any <cursor /> components
      var cursorChildren = this.children.filter(function (child) {
        return child instanceof _Cursor["default"];
      }); // if there are more than one, error out

      if (cursorChildren.length > 1) {
        // eslint-disable-next-line
        console.error('multiple <cursor /> components are not allowed!');
      } // if there is 1 cursor


      if (cursorChildren.length === 1) {
        // move the xterm cursor to the cursor component's position
        var cursor = cursorChildren[0];
        return this.root.write("\x1B[".concat(cursor.position[0], ";").concat(cursor.position[1], "H"));
      } // if there are no <cursor /> components, then
      // move the xterm cursor to the bottom/end of input


      var maxChild = this.children.reduce(function (currMax, child) {
        return child.position[0] > currMax.position[0] || child.position[0] === currMax.position[0] && child.position[1] >= currMax.position[1] ? child : currMax;
      }, {
        position: [0, 0],
        text: ''
      });
      this.root.write("\x1B[".concat(maxChild.position[0], ";").concat(maxChild.position[1] + maxChild.text ? maxChild.text.length + 1 : 0, "H"));
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      if (child.props.children && typeof child.props.children !== 'string') {
        console.error('Nested components are not supported!', child.props.children);
        return;
      }

      this.children.push(child);
      child.appendChild(child.props.children);

      this._moveToCursorOrEndOfInput();
    }
  }, {
    key: "appendBefore",
    value: function appendBefore(child, beforeChild) {
      this.position = beforeChild.position;
      this.children.push(child);
      child.appendChild(child.props.children);

      this._moveToCursorOrEndOfInput();
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      this.children = this.children.filter(function (_child) {
        return _child.position !== child.position;
      });
      child.removeSelf();

      this._moveToCursorOrEndOfInput();
    }
  }]);

  return Root;
}();

var _default = Root;
exports["default"] = _default;