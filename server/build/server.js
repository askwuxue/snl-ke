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

/***/ "./configs/db.ts":
/*!***********************!*\
  !*** ./configs/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    host: 'localhost',\r\n    port: 3306,\r\n    user: 'root',\r\n    password: 'root',\r\n    database: 'snl'\r\n};\r\n\n\n//# sourceURL=webpack://server/./configs/db.ts?");

/***/ }),

/***/ "./configs/server.ts":
/*!***************************!*\
  !*** ./configs/server.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    port: 8080\r\n};\r\n\n\n//# sourceURL=webpack://server/./configs/server.ts?");

/***/ }),

/***/ "./libs/database.ts":
/*!**************************!*\
  !*** ./libs/database.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// TODO mysql不支持异步操作，使用的是回调函数的方式。所以使用mysql/promise\r\nconst promise_1 = __importDefault(__webpack_require__(/*! mysql2/promise */ \"mysql2/promise\"));\r\n// 导入DB配置\r\nconst db_1 = __importDefault(__webpack_require__(/*! ../configs/db */ \"./configs/db.ts\"));\r\n// TODO 创建连接池\r\nexports.default = promise_1.default.createPool(db_1.default);\r\n\n\n//# sourceURL=webpack://server/./libs/database.ts?");

/***/ }),

/***/ "./libs/server.ts":
/*!************************!*\
  !*** ./libs/server.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst koa_1 = __importDefault(__webpack_require__(/*! koa */ \"koa\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! ../configs/server */ \"./configs/server.ts\"));\r\nconst app = new koa_1.default();\r\nconst { port } = server_1.default;\r\napp.listen(port, () => {\r\n    console.log(`server started at port ${port}`);\r\n});\r\nexports.default = app;\r\n\n\n//# sourceURL=webpack://server/./libs/server.ts?");

/***/ }),

/***/ "./models/banner.ts":
/*!**************************!*\
  !*** ./models/banner.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getAllBanners = void 0;\r\nconst database_1 = __importDefault(__webpack_require__(/*! ../libs/database */ \"./libs/database.ts\"));\r\n// 返回的是Promise类型的BannerData数组\r\nasync function getAllBanners() {\r\n    // TODO mysql查询到的数组中，数据是rows, files是连接相关的信息。\r\n    const result = await database_1.default.query('SELECT * from banner_table;');\r\n    // TODO 将result 强制转成BannerData类型的数组\r\n    const rows = result[0];\r\n    return rows;\r\n}\r\nexports.getAllBanners = getAllBanners;\r\n\n\n//# sourceURL=webpack://server/./models/banner.ts?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst server_1 = __importDefault(__webpack_require__(/*! ../libs/server */ \"./libs/server.ts\"));\r\nconst banner_1 = __webpack_require__(/*! ../models/banner */ \"./models/banner.ts\");\r\nserver_1.default.use(async (ctx) => {\r\n    // 返回的是一个Promise对象，Promise的结果是BannerData类型的数组\r\n    ctx.body = await banner_1.getAllBanners();\r\n});\r\n// 使用Redis\r\n// app.use(async ctx => {\r\n//     ctx.body = await redis.get('a');\r\n// })\r\n\n\n//# sourceURL=webpack://server/./src/server.tsx?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("koa");;

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");;

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