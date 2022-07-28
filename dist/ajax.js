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
	else if(typeof exports === 'object')
		exports["ajax"] = factory();
	else
		root["ajax"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ajax.js":
/*!*********************!*\
  !*** ./src/ajax.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ajax\": function() { return /* binding */ ajax; }\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar timeout = null;\nvar xhrs = [];\nfunction ajax(options) {\n  var xhr = getHTTP();\n  xhrs.push(xhr);\n  return new Promise(function (resolve, reject) {\n    options = options || {};\n    var contentType = options.contentType || 'application/json';\n    var method = options.method === undefined ? 'get' : options.method;\n    var url = options.url;\n    options.responseType = options.responseType === undefined ? 'json' : options.responseType;\n    options.serialize = options.serialize === undefined ? true : options.serialize;\n    options.onsuccess = options.onsuccess || callback;\n    options.onload = options.onload || callback;\n    options.onerror = options.onerror || callback;\n    var data = options.serialize ? serialize(options.data) : options.data;\n\n    if (options.data && contentType === 'application/json') {\n      data = JSON.stringify(options.data);\n    }\n\n    xhr.open(method, url, true);\n    xhr.responseType = options.responseType;\n    xhr.setRequestHeader(\"Content-Type\", contentType);\n    if (options.xhr) options.xhr(xhr);\n\n    xhr.onprogress = function (e) {\n      var loaded = e.loaded,\n          total = e.total;\n      var percent = Math.round(loaded / total * 100);\n      xhr.percent = percent;\n\n      if (typeof options.onprogress === 'function') {\n        options.onprogress(loaded, total);\n      }\n\n      if (typeof ajax.onprogress === 'function') {\n        var progresses = [];\n        xhrs.filter(function (xhr) {\n          if (xhr.status !== 200 || xhr.percent === 100) return false;\n          progresses.push(xhr.percent);\n          return true;\n        });\n        ajax.onprogress(Math.min.apply(Math, progresses.concat([100])));\n      }\n    };\n\n    xhr.send(data);\n\n    xhr.onerror = function (e) {\n      if (options.onerror) options.onerror(e);\n      reject(e);\n    };\n\n    if (options.onloadend) {\n      xhr.addEventListener('loadend', options.onloadend);\n    }\n\n    if (options.onload) {\n      xhr.addEventListener('load', options.onload);\n    }\n\n    if (options.onerror) {\n      xhr.addEventListener('error', options.onerror);\n    }\n\n    xhr.addEventListener('readystatechange', function () {\n      if (xhr.readyState !== 4) {\n        if (xhr.status > 300) reject(xhr);\n        return;\n      }\n\n      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {\n        if (options.onsuccess) {\n          options.onsuccess(xhr.response);\n        }\n\n        var res = xhr;\n\n        if (typeof ajax.response === 'function') {\n          res = ajax.response(xhr);\n        }\n\n        resolve(res);\n      } else {\n        reject(xhr);\n      }\n    });\n  });\n  /**\r\n   * @returns {XMLHttpRequest}\r\n   */\n\n  function getHTTP() {\n    if (XMLHttpRequest) {\n      return new XMLHttpRequest();\n    } else if (ActiveXObject) {\n      return new ActiveXObject(\"Microsoft.XMLHTTP\");\n    }\n  }\n  /**\r\n   * @param {object} data \r\n   */\n\n\n  function serialize(data) {\n    if (!data) return;\n    var keys = Object.keys(data);\n    var serial = \"\";\n    keys.map(function (key, index) {\n      serial += key + (data[key] ? \"=\" + data[key] : '') + (index < keys.length - 1 ? '&' : '');\n    });\n    return encodeURI(serial);\n  }\n\n  function callback(param) {\n    return param;\n  }\n}\n\najax.get = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'get'\n  }, options));\n};\n\najax.post = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'post'\n  }, options));\n};\n\najax.put = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'put'\n  }, options));\n};\n\najax.patch = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'patch'\n  }, options));\n};\n\najax.delete = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'delete'\n  }, options));\n};\n\najax.purge = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'purge'\n  }, options));\n};\n\n//# sourceURL=webpack://ajax/./src/ajax.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ajax.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	__webpack_exports__ = __webpack_exports__.ajax;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});