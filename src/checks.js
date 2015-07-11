// TODO Add test for symbols

module.exports = {
  isArray: function(ar) {
    return Array.isArray(ar);
  },

  isBoolean: function(arg) {
    return typeof arg === 'boolean';
  },

  isNull: function(arg) {
    return arg === null;
  },

  isNullOrUndefined: function(arg) {
    return arg == null;
  },

  isNumber: function(arg) {
    return typeof arg === 'number';
  },

  isString: function(arg) {
    return typeof arg === 'string';
  },

  isSymbol: function(arg) {
    return typeof arg === 'symbol';
  },

  isUndefined: function(arg) {
    return arg === void 0;
  },

  isRegExp: function(re) {
    return this.isObject(re) && this.objectToString(re) === '[object RegExp]';
  },

  isObject: function(arg) {
    return typeof arg === 'object' && arg !== null;
  },

  isDate: function(d) {
    return this.isObject(d) && this.objectToString(d) === '[object Date]';
  },

  isError: function(e) {
    return this.isObject(e) &&
      (this.objectToString(e) === '[object Error]' || e instanceof Error);
  },

  isFunction: function(arg) {
    return typeof arg === 'function';
  },

  isPrimitive: function(arg) {
    return arg === null ||
      typeof arg === 'boolean' ||
      typeof arg === 'number' ||
      typeof arg === 'string' ||
      typeof arg === 'symbol' || // ES6 symbol
      typeof arg === 'undefined';
  },

  isBuffer: function(arg) {
    return Buffer.isBuffer(arg);
  },

  isBrowserHostObject: function(arg) {
    switch (objectToString(arg)) {
      case '[object File]':
      case '[object Blob]':
      case '[object FormData]':
        return true;
      default:
        return false;
    }
  },

  objectToString: function(o) {
    return Object.prototype.toString.call(o);
  },

  isWrapperType: function(obj) {
    return this.isNumber(obj) || this.isString(obj) || this.isBoolean(obj);
  }
}
