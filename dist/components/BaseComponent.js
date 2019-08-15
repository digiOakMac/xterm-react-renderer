"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-console */

/**
 *
 * BaseComponent is a base parent class that all other components (except Root & Terminal)
 * inherit from. It contains several methods that must be implemented:
 *
 * - `appendChild(child)`
 *    render the new child, update sibling positions & update the root terminal
 *    `position` value to reflect the appended child
 *
 * - `replaceChild(child)`
 *    replace the current child (usually text) with the new `child` value,
 *    usually involves removing the characters of the old text + writing the new
 *    ones, updating sibling positions in the process.
 *
 * - `updatePosition(deltaRow, deltaCol)`
 *    render the output of this component in old position + delta.
 *    Must also remove the old output
 *
 * - `removeSelf()`
 *    remove the output of this component (usually involves removing
 *    the characters that this component renders from the terminal output)
 *
 */
var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent(root, props) {
    _classCallCheck(this, BaseComponent);

    this.root = root;
    this.props = props;
    this.terminal = this.root.root;
    this.position = [this.root.position[0], this.root.position[1]];
  }

  _createClass(BaseComponent, [{
    key: "goToPosition",
    value: function goToPosition() {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.position[0];
      var col = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.position[1];
      this.terminal.write("\x1B[".concat(row, ";").concat(col, "H"));
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(_text) {
      console.error('replaceChild not implemented!');
    }
  }, {
    key: "appendChild",
    value: function appendChild(_text) {
      console.error('appendChild not implemented!');
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(_deltaRow, _deltaCol) {
      console.error('updatePosition not implemented!', this);
    }
  }, {
    key: "removeSelf",
    value: function removeSelf() {
      console.error('removeSelf not implemented!');
    }
  }]);

  return BaseComponent;
}();

var _default = BaseComponent;
exports["default"] = _default;