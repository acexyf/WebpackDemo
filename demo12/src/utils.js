
var toString = Object.prototype.toString;


export function isArray(val) {
  return toString.call(val) === '[object Array]';
}


export function isUndefined(val) {
  return typeof val === 'undefined';
}

export function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}


export function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

export function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}


export function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}


export function isString(val) {
  return typeof val === 'string';
}


export function isNumber(val) {
  return typeof val === 'number';
}


export function isObject(val) {
  return val !== null && typeof val === 'object';
}


export function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}


export function isDate(val) {
  return toString.call(val) === '[object Date]';
}


export function isFile(val) {
  return toString.call(val) === '[object File]';
}

export function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

export function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

export function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}


export function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}


export function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

export function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}


export function forEach(obj, fn) {
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  if (typeof obj !== 'object') {
    obj = [obj];
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}


export function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

export function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}


