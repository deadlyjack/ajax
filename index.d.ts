declare module '@deadlyjack/ajax' {
  interface AjaxOptions {
    url: string;
    method: 'get' | 'post' | 'delete' | 'patch' | string;
    data: object;
    responseType:
      | 'html'
      | 'json'
      | 'svg'
      | 'text'
      | 'xml'
      | 'arraybuffer'
      | 'document';
    contentType:
      | 'application/json'
      | 'application/x-www-form-urlencoded'
      | 'multipart/form-data';
    /**
     * Wheater to serialze the given data or not. Default value of serialize id true.
     */
    serialize: boolean;
    onsuccess: (xhr: XMLHttpRequest) => void;
    onload: (xhr: XMLHttpRequest) => void;
    onerror: (xhr: XMLHttpRequest) => void;
    onloadend: (xhr: XMLHttpRequest) => void;
    xhr: (xhr: XMLHttpRequest) => void;
  }
  interface Ajax {
    (options: AjaxOptions): Promise<XMLHttpRequest | object>;
    get(url: string, data?: AjaxOptions): Promise<XMLHttpRequest | object>;
    post(url: string, data?: AjaxOptions): Promise<XMLHttpRequest | object>;
    delete(url: string, data?: AjaxOptions): Promise<XMLHttpRequest | object>;
    patch(url: string, data?: AjaxOptions): Promise<XMLHttpRequest | object>;
    put(url: string, data?: AjaxOptions): Promise<XMLHttpRequest | object>;
    purge(url: string, data?: AjaxOptions): Promise<XMLHttpRequest | object>;
    head(url: string, data?: AjaxOptions): Promise<XMLHttpRequest | object>;
  }

  var ajax: Ajax;
  export default ajax;
}
