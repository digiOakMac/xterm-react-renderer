"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reconciler = _interopRequireDefault(require("../reconciler/"));

var _setupTerminal2 = require("../utils/setupTerminal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function render(element, htmlElement) {
  var _setupTerminal = (0, _setupTerminal2.setupTerminal)(htmlElement),
      container = _setupTerminal.container;

  _reconciler["default"].updateContainer(element, container, null);
}

var _default = render;
exports["default"] = _default;