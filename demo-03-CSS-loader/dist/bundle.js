/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/image.js":
/*!**********************!*
  !*** ./src/image.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! ./image.css */ \"./src/image.css\");\n\nvar image = document.createElement(\"img\");\n\nimage.src = \"http://lorempixel.com/400/200/\";\n\ndocument.body.appendChild(image);\n\n//# sourceURL=webpack://demo-02/./src/image.js?");

/***/ }),

/***/ "./src/image.css":
/*!***********************!*
  !*** ./src/image.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nTypeError: The 'compilation' argument must be an instance of Compilation\\n    at getCompilationHooks (C:\\\\Users\\\\VUNG PC\\\\Desktop\\\\demo\\\\demo-03-CSS-loader\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptModulesPlugin.js:119:10)\\n    at C:\\\\Users\\\\VUNG PC\\\\Desktop\\\\demo\\\\demo-03-CSS-loader\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\CommonJsChunkFormatPlugin.js:30:19\\n    at Hook.eval [as call] (eval at create (C:\\\\Users\\\\VUNG PC\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:19:10), <anonymous>:5:1)\\n    at Hook.CALL_DELEGATE [as _call] (C:\\\\Users\\\\VUNG PC\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:14:14)\\n    at Compiler.newCompilation (C:\\\\Users\\\\VUNG PC\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:942:30)\\n    at C:\\\\Users\\\\VUNG PC\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:984:29\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\Users\\\\VUNG PC\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\\\Users\\\\VUNG PC\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:18:14)\\n    at Compiler.compile (C:\\\\Users\\\\VUNG PC\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:979:28)\\n    at Compiler.runAsChild (C:\\\\Users\\\\VUNG PC\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:494:8)\");\n\n//# sourceURL=webpack://demo-02/./src/image.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
(() => {
"use strict";
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
eval("\n\n__webpack_require__(/*! ./image */ \"./src/image.js\");\n\n//# sourceURL=webpack://demo-02/./src/index.js?");
})();

/******/ })()
;