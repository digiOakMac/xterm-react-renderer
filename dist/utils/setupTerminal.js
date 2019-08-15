"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupTerminal = setupTerminal;

var _reconciler = _interopRequireDefault(require("../reconciler/"));

var _xterm = require("xterm");

var _createElement = require("../utils/createElement");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function setupTerminal(element, options) {
  var container = (0, _createElement.createElement)('ROOT');
  var term = container.root;
  term.open(element);

  var node = _reconciler["default"].createContainer(container);

  if (options) {
    options.theme && term.setOption('theme', options.theme);
    options.fontFamily && term.setOption('fontFamily', options.fontFamily);
  }

  return {
    container: node,
    terminal: container.root
  };
}