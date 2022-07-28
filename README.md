# Very Small XHR

A simple, tiny library to make ajax calls.

## Usage

```javascript
import ajax from '@deadlyjack/ajax';

const options = {
  url: "https://example.com",
  method: "get",
  data: {
    test: "this is test"
  },
  responseType: "json",
  contentType: "application/json"
};
ajax(options)
.then(res=>{})
.catch(err=>{});

/**
 * @function ajax
 * @param {object} [options]
 * @param {string} [options.url] URL
 * @param {"get"|"post"|"delete"|"patch"|string} [options.method] method of the request
 * @param {object} [options.data] request data
 * @param {"html"|"json"|"svg"|"text"|"xml"|"arraybuffer"|"document"} [options.responseType] response type
 * @param {"application/json"|"application/x-www-form-urlencoded"} [options.contentType] reqruest content type
 * @param {function(response):void} [options.onsuccess] callback function
 * @param {function(response):void} [options.onload]  callback function
 * @param {function} [options.onloadend]  callbackfunction
 * @param {boolean} [options.response] if true return response instread of xhr object
 * @param {function(xhr):void} [options.xhr] configure xhr object
 * @param {function(err):void} [options.onerror] callback function
 * @param {boolean} [options.serialize = true] serialize object or not
 * @returns {Promise<XMLHttpRequest|Object>}
 */
```
