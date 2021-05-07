/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../web/src/App.css":
/*!**************************!*\
  !*** ../web/src/App.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"50f0ce81b7ae6a9c21ffee3340c47094.css\");\n\n//# sourceURL=webpack://server/../web/src/App.css?");

/***/ }),

/***/ "../web/src/logo.svg":
/*!***************************!*\
  !*** ../web/src/logo.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6ce24c58023cc2f8fd88fe9d219db6c6.svg\");\n\n//# sourceURL=webpack://server/../web/src/logo.svg?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// TODO ts的引入模块方式 不是commonjs\r\nconst koa_1 = __importDefault(__webpack_require__(/*! koa */ \"koa\"));\r\nconst router_1 = __importDefault(__webpack_require__(/*! @koa/router */ \"@koa/router\"));\r\n// TODO 服务端渲染tsx\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\n// TODO webpack 配置alias配置编译环境的@  tsconfig.json 配置编辑器环境paths。写法是 \"@/*\": [\"xxx/*\"]\r\nconst App_1 = __importDefault(__webpack_require__(/*! @/App */ \"../web/src/App.tsx\"));\r\nconst app = new koa_1.default();\r\nconst router = new router_1.default();\r\nrouter.get('/', async (ctx) => {\r\n    // TODO 如果想要使用<APP /> 文件名后缀名必须是.tsx\r\n    ctx.body = server_1.default.renderToString(react_1.default.createElement(App_1.default, null));\r\n});\r\napp.use(router.routes());\r\napp.listen(8000, () => {\r\n    console.log('server started at port 8000...');\r\n});\r\n\n\n//# sourceURL=webpack://server/./src/server.tsx?");

/***/ }),

/***/ "../web/src/App.tsx":
/*!**************************!*\
  !*** ../web/src/App.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst logo_svg_1 = __importDefault(__webpack_require__(/*! ./logo.svg */ \"../web/src/logo.svg\"));\r\n__webpack_require__(/*! ./App.css */ \"../web/src/App.css\");\r\nfunction App() {\r\n    return (react_1.default.createElement(\"div\", { className: \"App\" },\r\n        react_1.default.createElement(\"h1\", null, \"Hello\"),\r\n        react_1.default.createElement(\"header\", { className: \"App-header\" },\r\n            react_1.default.createElement(\"img\", { src: logo_svg_1.default, className: \"App-logo\", alt: \"logo\" }),\r\n            react_1.default.createElement(\"p\", null,\r\n                \"Edit \",\r\n                react_1.default.createElement(\"code\", null, \"src/App.tsx\"),\r\n                \" and save to reload.\"),\r\n            react_1.default.createElement(\"a\", { className: \"App-link\", href: \"https://reactjs.org\", target: \"_blank\", rel: \"noopener noreferrer\" }, \"Learn React\"))));\r\n}\r\nexports.default = App;\r\n\n\n//# sourceURL=webpack://server/../web/src/App.tsx?");

/***/ }),

/***/ "@koa/router":
/*!******************************!*\
  !*** external "@koa/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@koa/router");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("koa");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});