interface ajaxOptions {
  url: string;
  method: "get" | "post" | "delete" | "patch" | string;
  data: object,
  responseType: "html" | "json" | "svg" | "text" | "xml" | "arraybuffer" | "document";
  contentType: "application/json" | "application/x-www-form-urlencoded" | "multipart/form-data";
  response: boolean;
  serialize: boolean;
  onsuccess: (xhr: Object) => void;
  onload: (xhr: XMLHttpRequest) => void;
  onerror: (xhr: XMLHttpRequest) => void;
  onloadend: (xhr: XMLHttpRequest) => void;
  xhr: (xhr: XMLHttpRequest) => void;
}

declare module "@deadlyjack/ajax" {
  function ajax(options: ajaxOptions): Promise<XMLHttpRequest | object>;
  export default ajax;
}