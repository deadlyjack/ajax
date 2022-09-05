const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATH';
const PUT = 'PUT';
const DELETE = 'DELETE';
const PURGE = 'PURGE';

let xhrs = [];
export function ajax(options = {}) {
    const xhr = getHTTP();

    const {
        contentType = 'application/json',
        responseType = ajax.responseType || 'json',
        method = GET,
        onprogress = () => { },
        onsuccess = () => { },
        onerror = () => { },
        onload = () => { },
        onloadend = () => { },
        onabort = () => { },
        ontimeout = () => { },
        configure = () => { },
        mimeType = 'text/xml',
        data,
        url,
    } = options;

    return new Promise((resolve, reject) => {
        let body;

        if (data && contentType === 'application/json') {
            body = JSON.stringify(data);
        }

        xhr.addEventListener('load', onload);
        xhr.addEventListener('abort', onabort);
        xhr.addEventListener('loadend', onloadend);
        xhr.addEventListener('timeout', ontimeout);
        xhr.addEventListener('progress', progress);
        xhr.addEventListener('error', handleError);
        xhr.addEventListener('readystatechange', onreadystatechange);

        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", contentType);
        xhr.overrideMimeType(mimeType);
        configure(xhr);
        xhr.send(body);

        function onreadystatechange() {
            const { readyState, status } = xhr;

            if (readyState === 2) {
                if (status >= 200 && status < 300) {
                    xhr.responseType = responseType;
                } else {
                    xhr.responseType = 'text';
                }
            } else if (readyState === 4) {
                if (status >= 200 && status < 300) {
                    let res = xhr;

                    if (typeof ajax.response === 'function') {
                        res = ajax.response(res);
                    }

                    onsuccess(res);
                    resolve(res);
                } else {
                    handleError();
                }
            }
        }

        function progress(e) {
            const { loaded, total } = e;
            const percent = Math.round(loaded / total * 100);
            xhr.percent = percent;

            if (typeof onprogress === 'function') {
                onprogress(loaded, total);
            }

            if (typeof ajax.onprogress === 'function') {
                const progresses = [];
                xhrs = xhrs.filter((xhr) => {
                    if (xhr.status !== 200 || xhr.percent === 100) return false;
                    progresses.push(xhr.percent);
                    return true;
                });

                ajax.onprogress(Math.min(...progresses, 100));
            }
        }

        function handleError() {
            let res = xhr;

            if (responseType === 'json') {
                let json;

                try {
                    json = JSON.parse(xhr.responseText);
                } catch (error) {
                    json = xhr.responseText;
                }

                Object.defineProperty(xhr, 'response', {
                    value: json,
                });
            }

            if (typeof ajax.response === 'function') {
                res = ajax.response(xhr);
            }

            onerror(res);
            reject(res);
        }
    });

    /**
    * @returns {XMLHttpRequest}
    */
    function getHTTP() {
        let xhr;
        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhrs.push(xhr);
        return xhr;
    }
}


ajax.get = function (url, options = {}) {
    return ajax({
        url,
        method: GET,
        ...options
    });
}

ajax.post = function (url, options = {}) {
    return ajax({
        url,
        method: POST,
        ...options
    });
}

ajax.put = function (url, options = {}) {
    return ajax({
        url,
        method: PUT,
        ...options
    });
}

ajax.patch = function (url, options = {}) {
    return ajax({
        url,
        method: PATCH,
        ...options
    });
}

ajax.delete = function (url, options = {}) {
    return ajax({
        url,
        method: DELETE,
        ...options
    });
}

ajax.purge = function (url, options = {}) {
    return ajax({
        url,
        method: PURGE,
        ...options
    });
}
