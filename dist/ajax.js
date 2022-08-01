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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ajax\": function() { return /* binding */ ajax; }\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar timeout = null;\nvar xhrs = [];\nfunction ajax() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var xhr = getHTTP();\n  var _options$contentType = options.contentType,\n      contentType = _options$contentType === void 0 ? 'application/json' : _options$contentType,\n      _options$responseType = options.responseType,\n      responseType = _options$responseType === void 0 ? ajax.responseType || 'json' : _options$responseType,\n      _options$method = options.method,\n      method = _options$method === void 0 ? 'get' : _options$method,\n      _options$onprogress = options.onprogress,\n      onprogress = _options$onprogress === void 0 ? function () {} : _options$onprogress,\n      _options$onsuccess = options.onsuccess,\n      onsuccess = _options$onsuccess === void 0 ? function () {} : _options$onsuccess,\n      _options$onerror = options.onerror,\n      onerror = _options$onerror === void 0 ? function () {} : _options$onerror,\n      _options$onload = options.onload,\n      onload = _options$onload === void 0 ? function () {} : _options$onload,\n      _options$onloadend = options.onloadend,\n      onloadend = _options$onloadend === void 0 ? function () {} : _options$onloadend,\n      _options$onabort = options.onabort,\n      onabort = _options$onabort === void 0 ? function () {} : _options$onabort,\n      _options$ontimeout = options.ontimeout,\n      ontimeout = _options$ontimeout === void 0 ? function () {} : _options$ontimeout,\n      _options$configure = options.configure,\n      configure = _options$configure === void 0 ? function () {} : _options$configure,\n      _options$mimeType = options.mimeType,\n      mimeType = _options$mimeType === void 0 ? 'text/xml' : _options$mimeType,\n      data = options.data,\n      url = options.url;\n  return new Promise(function (resolve, reject) {\n    var body;\n\n    if (data && contentType === 'application/json') {\n      body = JSON.stringify(data);\n    }\n\n    xhr.addEventListener('load', onload);\n    xhr.addEventListener('abort', onabort);\n    xhr.addEventListener('loadend', onloadend);\n    xhr.addEventListener('timeout', ontimeout);\n    xhr.addEventListener('progress', progress);\n    xhr.addEventListener('error', handleError);\n    xhr.addEventListener('readystatechange', onreadystatechange);\n    xhr.open(method, url, true);\n    xhr.setRequestHeader(\"Content-Type\", contentType);\n    xhr.overrideMimeType(mimeType);\n    configure(xhr);\n    xhr.send(body);\n\n    function onreadystatechange() {\n      var readyState = xhr.readyState,\n          status = xhr.status;\n\n      if (readyState === 2) {\n        if (status >= 200 && status < 300) {\n          xhr.responseType = responseType;\n        } else {\n          xhr.responseType = 'text';\n        }\n      } else if (readyState === 4) {\n        if (status >= 200 && status < 300) {\n          var res = xhr;\n\n          if (typeof ajax.response === 'function') {\n            res = ajax.response(res);\n          }\n\n          onsuccess(res);\n          resolve(res);\n        } else {\n          handleError();\n        }\n      }\n    }\n\n    function progress(e) {\n      var loaded = e.loaded,\n          total = e.total;\n      var percent = Math.round(loaded / total * 100);\n      xhr.percent = percent;\n\n      if (typeof onprogress === 'function') {\n        onprogress(loaded, total);\n      }\n\n      if (typeof ajax.onprogress === 'function') {\n        var progresses = [];\n        xhrs = xhrs.filter(function (xhr) {\n          if (xhr.status !== 200 || xhr.percent === 100) return false;\n          progresses.push(xhr.percent);\n          return true;\n        });\n        ajax.onprogress(Math.min.apply(Math, progresses.concat([100])));\n      }\n    }\n\n    function handleError() {\n      var res = xhr;\n\n      if (responseType === 'json') {\n        Object.defineProperty(xhr, 'response', {\n          value: JSON.parse(xhr.responseText)\n        });\n      }\n\n      if (typeof ajax.response === 'function') {\n        res = ajax.response(xhr);\n      }\n\n      onerror(res);\n      reject(res);\n    }\n  });\n  /**\r\n  * @returns {XMLHttpRequest}\r\n  */\n\n  function getHTTP() {\n    var xhr;\n\n    if (XMLHttpRequest) {\n      xhr = new XMLHttpRequest();\n    } else if (ActiveXObject) {\n      xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\n    }\n\n    xhrs.push(xhr);\n    return xhr;\n  }\n}\n\najax.get = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'get'\n  }, options));\n};\n\najax.post = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'post'\n  }, options));\n};\n\najax.put = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'put'\n  }, options));\n};\n\najax.patch = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'patch'\n  }, options));\n};\n\najax.delete = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'delete'\n  }, options));\n};\n\najax.purge = function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return ajax(_objectSpread({\n    url: url,\n    method: 'purge'\n  }, options));\n};\n\n//# sourceURL=webpack://ajax/./src/ajax.js?");

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