/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    font-family: 'Handlee', cursive;\\n}\\n\\n:root {\\n    --brand-color: #2BD6B7;\\n}\\n\\nhtml {\\n    height: 120vh;\\n}\\n\\n \\n\\n.material-symbols-outlined {\\n    cursor: pointer;\\n    user-select: none;\\n    -webkit-tap-highlight-color: transparent;\\n  font-variation-settings:\\n  'FILL' 0,\\n  'wght' 200,\\n  'GRAD' 0,\\n  'opsz' 48\\n}\\n\\n/* header */\\nheader {\\n    width: 100%;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    background-color: rgba(255,255,255,0.9);\\n}\\n.header-container {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 2rem;\\n    padding-top: 1rem; \\n    padding-bottom: 1rem;\\n}\\n\\n.title {\\n    font-size: 2.5rem;\\n    cursor: pointer;\\n    user-select: none;\\n}\\n\\n.menu {\\n    font-size: 36px;\\n    \\n}\\n\\n.logo {\\n    font-size: 36px;\\n    color: #f5f5f5;\\n    background-color: var(--brand-color);\\n    padding: 0.5rem;\\n    margin-bottom: 8px;\\n    border-radius:100%\\n}\\n\\nmain {\\n    margin-top: 5rem;\\n    padding: 2rem;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n/* menu and buttons */\\n#add-task {\\n    position: fixed;\\n    top: 80vh;\\n    right: 10vw;\\n    font-size: 64px;\\n    color: var(--brand-color);\\n    font-variation-settings: 'FILL' 1, 'opsz' 48;\\n    transition: transform ease 1s;\\n}\\n\\n#add-task.clicked {\\n    transform: rotate(135deg);\\n}\\n\\n/* new task form */\\n.add-task-container {\\n    position: fixed;\\n    align-self: center;\\n    transition: transform ease 0.5s;\\n}\\n.hidden {\\n    transform: scale(0)\\n\\n}\\n#add-task-form {\\n    background-color: var(--brand-color);\\n    color: white;\\n    font-size: 24px;\\n    font-weight: 600;\\n    border-radius: 1rem;\\n    height: 20rem;\\n    padding: 2rem;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: baseline;\\n    gap: 1.5rem;\\n}\\n\\n\\n\\n.form-item {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 12px;\\n}\\n\\n.form-item.title-input {\\n    flex-direction: column;\\n    gap: 0;\\n}\\ninput {\\n    border: hidden;\\n    border-radius: 2px;\\n}\\n#project-form-input {\\n    width: 6rem;\\n    text-align: center;\\n}\\n\\n#date-form-input {\\n    width: 5.8rem;\\n}\\n\\n#form-add-button {\\n    margin-top: auto;\\n    margin-right: auto;\\n    margin-left: auto;\\n    font-size: 48px;\\n    font-variation-settings: 'FILL' 1;\\n}\\n\\n\\n\\n\\n/* task items */\\n.content-title {\\n    font-size: 2rem;\\n    margin-bottom: 2rem;\\n}\\n\\n.items-container {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n    padding-right: 1rem;\\n}\\n\\n.item-container {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-wrap: wrap;\\n    font-size: 20px;\\n    border-bottom: 1px solid black;\\n}\\n\\n.item-title.crossed {\\n    text-decoration: line-through;\\n}\\n\\n.item-icons {\\n    display: flex;\\n    margin-left: auto;\\n    gap: 1rem;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/itemComponent.js":
/*!*****************************************!*\
  !*** ./src/components/itemComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createItemComponent(task) {\n  const itemComponent = document.createElement(\"div\");\n  itemComponent.classList.add(\"item-container\");\n  itemComponent.id = task.id;\n  const isDone = task.done ? \"crossed\" : \"\";\n  itemComponent.innerHTML = `\n\n        <div class=\"item-title ${isDone}\">${task.title}</div>\n        <div class=\"item-icons\">\n        <span class=\"material-symbols-outlined\">\n            edit_note\n        </span>\n        <span class=\"material-symbols-outlined delete-item-button\"> delete </span>\n        <span class=\"material-symbols-outlined done-button\"> done </span>\n        </div>\n\n    `;\n  return itemComponent;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createItemComponent);\n\n\n//# sourceURL=webpack://todo-list/./src/components/itemComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageLoad */ \"./src/modules/pageLoad.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/DomModule.js":
/*!**********************************!*\
  !*** ./src/modules/DomModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearPageContent\": () => (/* binding */ clearPageContent),\n/* harmony export */   \"displayAllTasks\": () => (/* binding */ displayAllTasks),\n/* harmony export */   \"displayPageTitle\": () => (/* binding */ displayPageTitle)\n/* harmony export */ });\n/* harmony import */ var _itemModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemModule */ \"./src/modules/itemModule.js\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ \"./src/modules/pageLoad.js\");\n\n\n\nconst content = document.getElementById(\"content\");\nconst menu = document.getElementById(\"menu\");\nconst addTaskButton = document.getElementById(\"add-task\");\nconst addTaskForm = document.querySelector(\".add-task-container\");\nconst addTaskFormButton = document.getElementById(\"form-add-button\");\n\nfunction clearPageContent() {\n  while (content.firstChild) {\n    content.removeChild(content.lastChild);\n  }\n}\n\nfunction deleteClickHandler(button) {\n  button.addEventListener(\"click\", (e) => {\n    const taskContainer = e.target.closest(\".item-container\");\n    _itemModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(taskContainer.id);\n    taskContainer.remove();\n  });\n}\n\nfunction doneClickHandler(button) {\n  button.addEventListener(\"click\", (e) => {\n    const taskContainer = e.target.closest(\".item-container\");\n    taskContainer.firstElementChild.classList.toggle(\"crossed\");\n    _itemModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleDone(taskContainer.id);\n  });\n}\n\nfunction displayPageTitle(title) {\n  const contentTitle = document.createElement(\"div\");\n  contentTitle.classList.add(\"content-title\");\n  contentTitle.innerHTML = title;\n  content.appendChild(contentTitle);\n}\n\nfunction displayAllTasks(tasks) {\n  const itemsContainer = document.createElement(\"div\");\n  itemsContainer.classList.add(\"items-container\");\n  tasks.forEach((task) => {\n    itemsContainer.appendChild(_itemModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display(task));\n  });\n  content.appendChild(itemsContainer);\n\n  // Assign buttons after each display\n  const deleteTaskButtons = document.querySelectorAll(\".delete-item-button\");\n  deleteTaskButtons.forEach((button) => {\n    deleteClickHandler(button);\n  });\n\n  const completeTaskButtons = document.querySelectorAll(\".done-button\");\n  completeTaskButtons.forEach((button) => {\n    doneClickHandler(button);\n  });\n}\n\nmenu.addEventListener(\"click\", () => {\n  // PLACEHOLDER DEBUG\n});\n\nfunction displayAddForm() {\n  addTaskButton.classList.toggle(\"clicked\");\n  addTaskForm.classList.toggle(\"hidden\");\n}\n\nfunction addNewTask() {\n  const projectFormInput = document.getElementById(\"project-form-input\");\n  const addTaskDueDate = document.getElementById(\"date-form-input\");\n  const addTaskTitle = document.getElementById(\"title-form-input\");\n\n  // eslint-disable-next-line no-unused-vars\n  const addedTask = new _itemModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n    addTaskTitle.value,\n    addTaskDueDate.value,\n    \" \",\n    projectFormInput.value\n  );\n\n  (0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\naddTaskButton.addEventListener(\"click\", displayAddForm);\naddTaskFormButton.addEventListener(\"click\", () => {\n  displayAddForm();\n  addNewTask();\n  (0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/DomModule.js?");

/***/ }),

/***/ "./src/modules/itemModule.js":
/*!***********************************!*\
  !*** ./src/modules/itemModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _components_itemComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/itemComponent */ \"./src/components/itemComponent.js\");\n/* eslint-disable no-unused-vars */\n\n\nclass Task {\n  constructor(title, dueDate, description = \" \", project = \"none\") {\n    this.title = title;\n    this.dueDate = dueDate;\n    this.description = description;\n    this.project = project;\n    this.done = false;\n    // set the id to 0 if first, or to +1 of the last item\n    this.id = tasks.length ? +tasks[tasks.length - 1].id + 1 : 0;\n    this.add();\n  }\n\n  static display(task) {\n    return (0,_components_itemComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n  }\n\n  add() {\n    tasks.push(this);\n    Task.storeAllItems();\n  }\n\n  static remove(id) {\n    const taskIndex = tasks.findIndex((task) => task.id === Number(id));\n    if (taskIndex > -1) {\n      tasks.splice(taskIndex, 1);\n    }\n    Task.storeAllItems();\n  }\n\n  static toggleDone(id) {\n    const taskIndex = tasks.findIndex((task) => task.id === Number(id));\n    if (taskIndex > -1) {\n      tasks[taskIndex].done = !tasks[taskIndex].done;\n      Task.storeAllItems();\n    }\n  }\n\n  static storeAllItems() {\n    window.localStorage.clear();\n    window.localStorage.setItem(\"localTasks\", JSON.stringify(tasks));\n  }\n\n  static retrieveAllItems() {\n    return JSON.parse(window.localStorage.getItem(\"localTasks\"));\n  }\n}\n\nconst tasks = Task.retrieveAllItems() || [];\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/itemModule.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/homePage */ \"./src/pages/homePage.js\");\n/* harmony import */ var _DomModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomModule */ \"./src/modules/DomModule.js\");\n\n\n\nfunction loadPage() {\n  (0,_DomModule__WEBPACK_IMPORTED_MODULE_1__.clearPageContent)();\n  (0,_pages_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/pageLoad.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_DomModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DomModule */ \"./src/modules/DomModule.js\");\n/* harmony import */ var _modules_itemModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/itemModule */ \"./src/modules/itemModule.js\");\n\n\n\nfunction displayHomePage() {\n  (0,_modules_DomModule__WEBPACK_IMPORTED_MODULE_0__.displayPageTitle)(\"Home\");\n  (0,_modules_DomModule__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)(_modules_itemModule__WEBPACK_IMPORTED_MODULE_1__.tasks);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHomePage);\n\n\n//# sourceURL=webpack://todo-list/./src/pages/homePage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;