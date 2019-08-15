"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.getHostContextNode = getHostContextNode;

var _components = require("../components/");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ROOT_NODE_INSTANCE = null;

function getHostContextNode(rootNode) {
  if (_typeof(rootNode) !== undefined) {
    // rootNode.root.clear();
    return ROOT_NODE_INSTANCE = rootNode;
  } else {
    // eslint-disable-next-line
    console.warn("".concat(rootNode, " is not an instance of XTerm constructor."));
    return ROOT_NODE_INSTANCE = new _components.Root();
  }
}

// Creates an element with an element type, props and a root instance
function createElement(type, props) {
  var COMPONENTS = {
    ROOT: function ROOT() {
      return new _components.Root();
    },
    terminal: function terminal() {
      return new _components.Terminal();
    },
    text: function text() {
      return new _components.Text(ROOT_NODE_INSTANCE, props);
    },
    line: function line() {
      return new _components.Line(ROOT_NODE_INSTANCE, props);
    },
    br: function br() {
      return new _components.Br(ROOT_NODE_INSTANCE, props);
    },
    cursor: function cursor() {
      return new _components.Cursor(ROOT_NODE_INSTANCE, props);
    },
    "default": undefined
  };
  return COMPONENTS[type]() || COMPONENTS["default"];
}