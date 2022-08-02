!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ajax=t():e.ajax=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d(t,{ajax:function(){return u}});var i=[];function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=X(),n=e.contentType,o=void 0===n?"application/json":n,r=e.responseType,c=void 0===r?u.responseType||"json":r,a=e.method,s=void 0===a?"get":a,p=e.onprogress,f=void 0===p?function(){}:p,d=e.onsuccess,v=void 0===d?function(){}:d,l=e.onerror,y=void 0===l?function(){}:l,b=e.onload,g=void 0===b?function(){}:b,h=e.onloadend,j=void 0===h?function(){}:h,O=e.onabort,m=void 0===O?function(){}:O,P=e.ontimeout,x=void 0===P?function(){}:P,w=e.configure,T=void 0===w?function(){}:w,L=e.mimeType,E=void 0===L?"text/xml":L,M=e.data,S=e.url;return new Promise((function(e,n){var r;function a(){var e=t;if("json"===c){var o;try{o=JSON.parse(t.responseText)}catch(e){o=t.responseText}Object.defineProperty(t,"response",{value:o})}"function"==typeof u.response&&(e=u.response(t)),y(e),n(e)}M&&"application/json"===o&&(r=JSON.stringify(M)),t.addEventListener("load",g),t.addEventListener("abort",m),t.addEventListener("loadend",j),t.addEventListener("timeout",x),t.addEventListener("progress",(function(e){var n=e.loaded,o=e.total,r=Math.round(n/o*100);if(t.percent=r,"function"==typeof f&&f(n,o),"function"==typeof u.onprogress){var c=[];i=i.filter((function(e){return 200===e.status&&100!==e.percent&&(c.push(e.percent),!0)})),u.onprogress(Math.min.apply(Math,c.concat([100])))}})),t.addEventListener("error",a),t.addEventListener("readystatechange",(function(){var n=t.readyState,o=t.status;if(2===n)t.responseType=o>=200&&o<300?c:"text";else if(4===n)if(o>=200&&o<300){var r=t;"function"==typeof u.response&&(r=u.response(r)),v(r),e(r)}else a()})),t.open(s,S,!0),t.setRequestHeader("Content-Type",o),t.overrideMimeType(E),T(t),t.send(r)}));function X(){var e;return XMLHttpRequest?e=new XMLHttpRequest:ActiveXObject&&(e=new ActiveXObject("Microsoft.XMLHTTP")),i.push(e),e}}return u.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(o({url:e,method:"get"},t))},u.post=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(o({url:e,method:"post"},t))},u.put=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(o({url:e,method:"put"},t))},u.patch=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(o({url:e,method:"patch"},t))},u.delete=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(o({url:e,method:"delete"},t))},u.purge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(o({url:e,method:"purge"},t))},t.ajax}()}));