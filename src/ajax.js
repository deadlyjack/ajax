let timeout = null;
const progresses = [];
export function ajax(options) {
    const xhr = getHTTP();

    return new Promise((resolve, reject) => {
        options = options || {};

        const contentType = options.contentType || 'application/json';
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
        xhr.setRequestHeader("Content-Type", contentType);
        if (options.xhr) options.xhr(xhr);

        xhr.onprogress = (e) => {
            const { loaded, total } = e;

            if (typeof options.onprogress === 'function') {
                options.onprogress(loaded, total);
            }

            if (typeof ajax.onprogress === 'function') {
                const percent = Math.floor(loaded / total * 100);
                progresses.push(percent);
                if (timeout) return;

                timeout = setTimeout(() => {
                    timeout = null;
                    ajax.onprogress(Math.min(...progresses));
                    progresses.length = 0;
                }, 3000);
            }

        }

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
                if (xhr.status > 300) reject(xhr);
                return;
            }

            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
                if (options.onsuccess) {
                    options.onsuccess(xhr.response);
                }
                resolve(xhr);
            } else {
                reject(xhr);
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

ajax.get = function (url, options = {}) {
    return ajax({
        url,
        method: 'get',
        ...options
    });
}

ajax.post = function (url, options = {}) {
    return ajax({
        url,
        method: 'post',
        ...options
    });
}

ajax.put = function (url, options = {}) {
    return ajax({
        url,
        method: 'put',
        ...options
    });
}

ajax.patch = function (url, options = {}) {
    return ajax({
        url,
        method: 'patch',
        ...options
    });
}

ajax.delete = function (url, options = {}) {
    return ajax({
        url,
        method: 'delete',
        ...options
    });
}

ajax.purge = function (url, options = {}) {
    return ajax({
        url,
        method: 'purge',
        ...options
    });
}
