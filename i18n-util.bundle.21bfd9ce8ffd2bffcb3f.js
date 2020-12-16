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

/***/ "./src/LocaleUtil.js":
/*!***************************!*\
  !*** ./src/LocaleUtil.js ***!
  \***************************/
/***/ ((module) => {

eval("const LOCALE_COOKIE_KEY = 'okta_user_lang';\n\nconst getLocale = () => {\n  const supportedLocales = [\n    'en',\n    'ja',\n  ];\n  // check locale passed in query param\n  let locale = document.location.hash.split('?locale=')[1];\n  if (!locale) {\n    // check locale in cookie\n    if (document.cookie.indexOf(LOCALE_COOKIE_KEY) !== -1) {\n      locale = getCookieValue(LOCALE_COOKIE_KEY);\n    } else {\n      // check locale in browser\n      locale = navigator.language;\n    }\n  }\n\n  // default to en\n  if (!supportedLocales.includes(locale)) {\n    console.info('using default locale');\n    locale = 'en';\n  }\n  setLocaleCookie(locale);\n  return locale;\n};\n\nconst getCookieValue = (cookieName) => {\n  var b = document.cookie.match('(^|;)\\\\s*' + cookieName + '\\\\s*=\\\\s*([^;]+)');\n  return b ? b.pop() : '';\n};\n\nconst setLocaleCookie = (locale) => {\n  if (document.cookie.indexOf(LOCALE_COOKIE_KEY) === -1) {\n    document.cookie = `${LOCALE_COOKIE_KEY}=${locale}`;\n  }\n};\n\nmodule.exports = {\n  getLocale,\n  setLocaleCookie\n}; \n\n\n//# sourceURL=webpack://i18n-util/./src/LocaleUtil.js?");

/***/ }),

/***/ "./src/UrlUtil.js":
/*!************************!*\
  !*** ./src/UrlUtil.js ***!
  \************************/
/***/ ((module) => {

eval("\nconst getAliasUrl = (location) => {\n  let cshid = null;\n  if (location.hash && location.hash.length > 0) {\n    cshid = location.hash.split('#')[1];\n  }\n  var path = location.href.split('#')[0];\n  if (cshid) {\n    path += `#cshid=${cshid}`;\n  }\n  return path;\n};\n\nconst getRedirectUrl = ({locale, aliasUrl}) =>  {\n  // add locale to url path and remove query param\n  const env = 'prod';\n  const fileName = 'okta_help.htm';\n  const host = aliasUrl.split('/okta_help.htm')[0];\n  const cshid = aliasUrl.split('okta_help.htm')[1].split('?locale=')[0];\n  const redirectUrl = `${host}/${locale}/${env}/${fileName}${cshid}`;\n  return redirectUrl;\n\n};\n\nmodule.exports = {\n  getAliasUrl,\n  getRedirectUrl\n}; \n\n\n//# sourceURL=webpack://i18n-util/./src/UrlUtil.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LocaleUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocaleUtil */ \"./src/LocaleUtil.js\");\n/* harmony import */ var _LocaleUtil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LocaleUtil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UrlUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlUtil */ \"./src/UrlUtil.js\");\n/* harmony import */ var _UrlUtil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UrlUtil__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nconst location = {\n  hash: document.location.hash,\n  href: document.location.href,\n};\n\n// Construct alias url with cshid\nlet aliasUrl = (0,_UrlUtil__WEBPACK_IMPORTED_MODULE_1__.getAliasUrl)(location);\n\n// Extract locale from query\nconst locale = (0,_LocaleUtil__WEBPACK_IMPORTED_MODULE_0__.getLocale)();\n\n// Update alias url to include locale in path and remove from query param\nconst redirectUrl = (0,_UrlUtil__WEBPACK_IMPORTED_MODULE_1__.getRedirectUrl)({locale, aliasUrl});\n\n// redirect to alias url\ndocument.location.replace(redirectUrl);\n\n\n\n//# sourceURL=webpack://i18n-util/./src/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;