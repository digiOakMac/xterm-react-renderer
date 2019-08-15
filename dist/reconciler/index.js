"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactReconciler = _interopRequireDefault(require("react-reconciler"));

var _emptyObject = _interopRequireDefault(require("fbjs/lib/emptyObject"));

var _emptyFunction = _interopRequireDefault(require("fbjs/lib/emptyFunction"));

var _createElement = require("../utils/createElement");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var XTermRenderer = (0, _reactReconciler["default"])({
  createInstance: function createInstance(type, props, _internalInstanceHandle) {
    return (0, _createElement.createElement)(type, props);
  },
  createTextInstance: function createTextInstance(text, _rootContainerInstance, _internalInstanceHandle) {
    return text;
  },
  finalizeInitialChildren: function finalizeInitialChildren(_wordElement, _type, _props) {
    return false;
  },
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  prepareForCommit: function prepareForCommit(_container) {
    (0, _emptyFunction["default"])();
  },
  prepareUpdate: function prepareUpdate(_instance, _type, oldProps, newProps, _rootContainerInstance, _hostContext) {
    if (oldProps.children !== newProps.children) {
      return {
        children: newProps.children
      };
    }

    return null;
  },
  getRootHostContext: function getRootHostContext(instance) {
    return (0, _createElement.getHostContextNode)(instance);
  },
  getChildHostContext: function getChildHostContext() {
    return _emptyObject["default"];
  },
  shouldSetTextContent: function shouldSetTextContent(_type, _props) {
    return false;
  },
  cloneInstance: function cloneInstance(_instance, _updatePayload, type, _oldProps, newProps, _internalInstanceHandle, _keepChildren, _recyclableInstance) {
    if (_oldProps.children !== newProps.children) {
      return {
        children: newProps.children
      };
    }

    return (0, _createElement.createElement)(type, newProps);
  },
  removeChild: function removeChild() {
    (0, _emptyFunction["default"])();
  },
  removeChildFromContainer: function removeChildFromContainer(container, child) {
    console.log('removeChildFromContainer', child);
    container.removeChild(child);
  },
  appendChildToContainer: function appendChildToContainer(container, child) {
    console.log('appendChildToContainer', child);
    container.appendChild(child);
  },
  replaceContainerChildren: function replaceContainerChildren(_container, _newChildren) {
    (0, _emptyFunction["default"])();
  },
  insertInContainerBefore: function insertInContainerBefore(container, child, beforeChild) {
    console.log('insertInContainerBefore', child, beforeChild);
    container.appendBefore(child, beforeChild);
  },
  appendInitialChild: function appendInitialChild(_parentInstance, _child) {
    (0, _emptyFunction["default"])();
  },
  commitTextUpdate: function commitTextUpdate(_textInstance, _oldText, _newText) {
    (0, _emptyFunction["default"])();
  },
  commitUpdate: function commitUpdate(instance, updatePayload, _type, _oldProps, _newProps, _internalInstanceHandle) {
    if (updatePayload) {
      instance.replaceChild(updatePayload.children);
    }
  },
  resetAfterCommit: function resetAfterCommit(_info) {
    (0, _emptyFunction["default"])();
  },
  now: function now() {
    return performance.now();
  },
  supportsMutation: true,
  supportsPersistence: false
});
var _default = XTermRenderer;
exports["default"] = _default;