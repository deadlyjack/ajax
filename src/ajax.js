/**
 * 
 * @param {object} [options]
 * @param {string} [options.url] URL
 * @param {"get"|"post"|"delete"|"patch"|string} [options.method] method of the request
 * @param {object} [options.data] request data
 * @param {"html"|"json"|"svg"|"text"|"xml"|"arraybuffer"|"document"} [options.responseType] response type
 * @param {"application/json"|"application/x-www-form-urlencoded"|"multipart/form-data"} [options.contentType] reqruest content type
 * @param {function(response):void} [options.onsuccess] callback function
 * @param {function(response):void} [options.onload]  callback function
 * @param {function} [options.onloadend]  callbackfunction
 * @param {boolean} [options.response] if true return response instread of xhr object
 * @param {function(xhr):void} [options.xhr] configure xhr object
 * @param {function(err):void} [options.onerror] callback function
 * @param {boolean} [options.serialize = true] serialize object or not
 * @returns {Promise<XMLHttpRequest|Object>}
 */
function ajax(options) {
    const xhr = getHTTP();
    const response = options.response === undefined ? true : options.response;

    return new Promise((resolve, reject) => {
        options = options || {};

        const contentType = options.contentType;
        const method = options.method === undefined ? 'get' : options.method;
        const url = options.url;

        options.responseType = options.responseType === undefined ? 'json' : options.responseType;
        options.serialize = options.serialize === undefined ? true : options.serialize;
        options.onsuccess = options.onsuccess || callback;
        options.onload = options.onload || callback;
        options.onerror = options.onerror || callback;

        let data = options.serialize ? serialize(options.data) : options.data;

        if (options.data && contentType === 'application/json') {
            data = JSON.stringify(options.data);
        }

        xhr.open(method, url, true);
        xhr.responseType = options.responseType;
        if (contentType) xhr.setRequestHeader("Content-Type", contentType);
        if (options.xhr) options.xhr(xhr);
        xhr.send(data);

        xhr.onerror = function (e) {
            if (options.onerror) options.onerror(e);
            reject(e);
        };

        if (options.onloadend) {
            xhr.addEventListener('loadend', options.onloadend);
        }
        if (options.onload) {
            xhr.addEventListener('load', options.onload);
        }
        if (options.onerror) {
            xhr.addEventListener('error', options.onerror);
        }

        xhr.addEventListener('readystatechange', function () {

            if (xhr.readyState !== 4) {
                if (xhr.status > 300) reject(response ? xhr.response || xhr.statusText : xhr);
                return;
            }

            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
                if (options.onsuccess) {
                    options.onsuccess(xhr.response);
                }
                resolve(response ? xhr.response : xhr);
            } else {
                reject(response ? xhr.response || xhr.statusText : xhr);
            }

        });
    });

    /**
     * @returns {XMLHttpRequest}
     */
    function getHTTP() {
        if (XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    /**
     * @param {object} data 
     */
    function serialize(data) {
        if (!data) return;
        const keys = Object.keys(data);
        let serial = "";
        keys.map((key, index) => {
            serial += key + (data[key] ? ("=" + data[key]) : '') + (index < keys.length - 1 ? '&' : '');
        });

        return encodeURI(serial);
    }

    function callback(param) {
        return param;
    }
}

export default ajax;