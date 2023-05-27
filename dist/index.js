'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bignumber = require('@ethersproject/bignumber');
var address = require('@ethersproject/address');
var constants = require('@ethersproject/constants');
var contracts = require('@ethersproject/contracts');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var lodash_clonedeep = {exports: {}};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
}(lodash_clonedeep, lodash_clonedeep.exports));

var cloneDeep = lodash_clonedeep.exports;

/*
 *      bignumber.js v9.0.1
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


var
  isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,

  mathceil = Math.ceil,
  mathfloor = Math.floor,

  bignumberError = '[BigNumber Error] ',
  tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

  BASE = 1e14,
  LOG_BASE = 14,
  MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
  // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
  POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  SQRT_BASE = 1e7,

  // EDITABLE
  // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
  // the arguments to toExponential, toFixed, toFormat, and toPrecision.
  MAX = 1E9;                                   // 0 to MAX_INT32


/*
 * Create and return a BigNumber constructor.
 */
function clone(configObject) {
  var div, convertBase, parseNumeric,
    P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
    ONE = new BigNumber(1),


    //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


    // The default values below must be integers within the inclusive ranges stated.
    // The values can also be changed at run-time using BigNumber.set.

    // The maximum number of decimal places for operations involving division.
    DECIMAL_PLACES = 20,                     // 0 to MAX

    // The rounding mode used when rounding to the above decimal places, and when using
    // toExponential, toFixed, toFormat and toPrecision, and round (default value).
    // UP         0 Away from zero.
    // DOWN       1 Towards zero.
    // CEIL       2 Towards +Infinity.
    // FLOOR      3 Towards -Infinity.
    // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    ROUNDING_MODE = 4,                       // 0 to 8

    // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

    // The exponent value at and beneath which toString returns exponential notation.
    // Number type: -7
    TO_EXP_NEG = -7,                         // 0 to -MAX

    // The exponent value at and above which toString returns exponential notation.
    // Number type: 21
    TO_EXP_POS = 21,                         // 0 to MAX

    // RANGE : [MIN_EXP, MAX_EXP]

    // The minimum exponent value, beneath which underflow to zero occurs.
    // Number type: -324  (5e-324)
    MIN_EXP = -1e7,                          // -1 to -MAX

    // The maximum exponent value, above which overflow to Infinity occurs.
    // Number type:  308  (1.7976931348623157e+308)
    // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
    MAX_EXP = 1e7,                           // 1 to MAX

    // Whether to use cryptographically-secure random number generation, if available.
    CRYPTO = false,                          // true or false

    // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP        0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN      1 The remainder has the same sign as the dividend.
    //             This modulo mode is commonly known as 'truncated division' and is
    //             equivalent to (a % n) in JavaScript.
    // FLOOR     3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
    // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
    //             The remainder is always positive.
    //
    // The truncated division, floored division, Euclidian division and IEEE 754 remainder
    // modes are commonly used for the modulus operation.
    // Although the other rounding modes can also be used, they may not give useful results.
    MODULO_MODE = 1,                         // 0 to 9

    // The maximum number of significant digits of the result of the exponentiatedBy operation.
    // If POW_PRECISION is 0, there will be unlimited significant digits.
    POW_PRECISION = 0,                    // 0 to MAX

    // The format specification used by the BigNumber.prototype.toFormat method.
    FORMAT = {
      prefix: '',
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ',',
      decimalSeparator: '.',
      fractionGroupSize: 0,
      fractionGroupSeparator: '\xA0',      // non-breaking space
      suffix: ''
    },

    // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
    // '-', '.', whitespace, or repeated character.
    // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
    ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


  //------------------------------------------------------------------------------------------


  // CONSTRUCTOR


  /*
   * The BigNumber constructor and exported function.
   * Create and return a new instance of a BigNumber object.
   *
   * v {number|string|BigNumber} A numeric value.
   * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
   */
  function BigNumber(v, b) {
    var alphabet, c, caseChanged, e, i, isNum, len, str,
      x = this;

    // Enable constructor call without `new`.
    if (!(x instanceof BigNumber)) return new BigNumber(v, b);

    if (b == null) {

      if (v && v._isBigNumber === true) {
        x.s = v.s;

        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }

        return;
      }

      if ((isNum = typeof v == 'number') && v * 0 == 0) {

        // Use `1 / n` to handle minus zero also.
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;

        // Fast path for integers, where n < 2147483648 (2**31).
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++);

          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }

          return;
        }

        str = String(v);
      } else {

        if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

        x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
      }

      // Decimal point?
      if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

      // Exponential form?
      if ((i = str.search(/e/i)) > 0) {

        // Determine exponent.
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {

        // Integer.
        e = str.length;
      }

    } else {

      // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
      intCheck(b, 2, ALPHABET.length, 'Base');

      // Allow exponential notation to be used with base 10 argument, while
      // also rounding to DECIMAL_PLACES as with other bases.
      if (b == 10) {
        x = new BigNumber(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }

      str = String(v);

      if (isNum = typeof v == 'number') {

        // Avoid potential interpretation of Infinity and NaN as base 44+ values.
        if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

        x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
          throw Error
           (tooManyDigits + v);
        }
      } else {
        x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
      }

      alphabet = ALPHABET.slice(0, b);
      e = i = 0;

      // Check that str is a valid base b number.
      // Don't use RegExp, so alphabet can contain special characters.
      for (len = str.length; i < len; i++) {
        if (alphabet.indexOf(c = str.charAt(i)) < 0) {
          if (c == '.') {

            // If '.' is not the first character and it has not be found before.
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {

            // Allow e.g. hexadecimal 'FF' as well as 'ff'.
            if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                str == str.toLowerCase() && (str = str.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }

          return parseNumeric(x, String(v), isNum, b);
        }
      }

      // Prevent later check for length on converted number.
      isNum = false;
      str = convertBase(str, b, 10, x.s);

      // Decimal point?
      if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
      else e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48; i++);

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(--len) === 48;);

    if (str = str.slice(i, ++len)) {
      len -= i;

      // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
      if (isNum && BigNumber.DEBUG &&
        len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
          throw Error
           (tooManyDigits + (x.s * v));
      }

       // Overflow?
      if ((e = e - i - 1) > MAX_EXP) {

        // Infinity.
        x.c = x.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];

        // Transform base

        // e is the base 10 exponent.
        // i is where to slice str to get the first element of the coefficient array.
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;  // i < 1

        if (i < len) {
          if (i) x.c.push(+str.slice(0, i));

          for (len -= LOG_BASE; i < len;) {
            x.c.push(+str.slice(i, i += LOG_BASE));
          }

          i = LOG_BASE - (str = str.slice(i)).length;
        } else {
          i -= len;
        }

        for (; i--; str += '0');
        x.c.push(+str);
      }
    } else {

      // Zero.
      x.c = [x.e = 0];
    }
  }


  // CONSTRUCTOR PROPERTIES


  BigNumber.clone = clone;

  BigNumber.ROUND_UP = 0;
  BigNumber.ROUND_DOWN = 1;
  BigNumber.ROUND_CEIL = 2;
  BigNumber.ROUND_FLOOR = 3;
  BigNumber.ROUND_HALF_UP = 4;
  BigNumber.ROUND_HALF_DOWN = 5;
  BigNumber.ROUND_HALF_EVEN = 6;
  BigNumber.ROUND_HALF_CEIL = 7;
  BigNumber.ROUND_HALF_FLOOR = 8;
  BigNumber.EUCLID = 9;


  /*
   * Configure infrequently-changing library-wide settings.
   *
   * Accept an object with the following optional properties (if the value of a property is
   * a number, it must be an integer within the inclusive range stated):
   *
   *   DECIMAL_PLACES   {number}           0 to MAX
   *   ROUNDING_MODE    {number}           0 to 8
   *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
   *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
   *   CRYPTO           {boolean}          true or false
   *   MODULO_MODE      {number}           0 to 9
   *   POW_PRECISION       {number}           0 to MAX
   *   ALPHABET         {string}           A string of two or more unique characters which does
   *                                     not contain '.'.
   *   FORMAT           {object}           An object with some of the following properties:
   *     prefix                 {string}
   *     groupSize              {number}
   *     secondaryGroupSize     {number}
   *     groupSeparator         {string}
   *     decimalSeparator       {string}
   *     fractionGroupSize      {number}
   *     fractionGroupSeparator {string}
   *     suffix                 {string}
   *
   * (The values assigned to the above FORMAT object properties are not checked for validity.)
   *
   * E.g.
   * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
   *
   * Ignore properties/parameters set to null or undefined, except for ALPHABET.
   *
   * Return an object with the properties current values.
   */
  BigNumber.config = BigNumber.set = function (obj) {
    var p, v;

    if (obj != null) {

      if (typeof obj == 'object') {

        // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
        // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }

        // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
        // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }

        // EXPONENTIAL_AT {number|number[]}
        // Integer, -MAX to MAX inclusive or
        // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
        // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }

        // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
        // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
        // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
        if (obj.hasOwnProperty(p = 'RANGE')) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error
               (bignumberError + p + ' cannot be zero: ' + v);
            }
          }
        }

        // CRYPTO {boolean} true or false.
        // '[BigNumber Error] CRYPTO not true or false: {v}'
        // '[BigNumber Error] crypto unavailable'
        if (obj.hasOwnProperty(p = 'CRYPTO')) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != 'undefined' && crypto &&
               (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error
                 (bignumberError + 'crypto unavailable');
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error
             (bignumberError + p + ' not true or false: ' + v);
          }
        }

        // MODULO_MODE {number} Integer, 0 to 9 inclusive.
        // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }

        // POW_PRECISION {number} Integer, 0 to MAX inclusive.
        // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }

        // FORMAT {object}
        // '[BigNumber Error] FORMAT not an object: {v}'
        if (obj.hasOwnProperty(p = 'FORMAT')) {
          v = obj[p];
          if (typeof v == 'object') FORMAT = v;
          else throw Error
           (bignumberError + p + ' not an object: ' + v);
        }

        // ALPHABET {string}
        // '[BigNumber Error] ALPHABET invalid: {v}'
        if (obj.hasOwnProperty(p = 'ALPHABET')) {
          v = obj[p];

          // Disallow if only one character,
          // or if it contains '+', '-', '.', whitespace, or a repeated character.
          if (typeof v == 'string' && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
            ALPHABET = v;
          } else {
            throw Error
             (bignumberError + p + ' invalid: ' + v);
          }
        }

      } else {

        // '[BigNumber Error] Object expected: {v}'
        throw Error
         (bignumberError + 'Object expected: ' + obj);
      }
    }

    return {
      DECIMAL_PLACES: DECIMAL_PLACES,
      ROUNDING_MODE: ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO: CRYPTO,
      MODULO_MODE: MODULO_MODE,
      POW_PRECISION: POW_PRECISION,
      FORMAT: FORMAT,
      ALPHABET: ALPHABET
    };
  };


  /*
   * Return true if v is a BigNumber instance, otherwise return false.
   *
   * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
   *
   * v {any}
   *
   * '[BigNumber Error] Invalid BigNumber: {v}'
   */
  BigNumber.isBigNumber = function (v) {
    if (!v || v._isBigNumber !== true) return false;
    if (!BigNumber.DEBUG) return true;

    var i, n,
      c = v.c,
      e = v.e,
      s = v.s;

    out: if ({}.toString.call(c) == '[object Array]') {

      if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

        // If the first element is zero, the BigNumber value must be zero.
        if (c[0] === 0) {
          if (e === 0 && c.length === 1) return true;
          break out;
        }

        // Calculate number of digits that c[0] should have, based on the exponent.
        i = (e + 1) % LOG_BASE;
        if (i < 1) i += LOG_BASE;

        // Calculate number of digits of c[0].
        //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
        if (String(c[0]).length == i) {

          for (i = 0; i < c.length; i++) {
            n = c[i];
            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
          }

          // Last element cannot be zero, unless it is the only element.
          if (n !== 0) return true;
        }
      }

    // Infinity/NaN
    } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
      return true;
    }

    throw Error
      (bignumberError + 'Invalid BigNumber: ' + v);
  };


  /*
   * Return a new BigNumber whose value is the maximum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.maximum = BigNumber.max = function () {
    return maxOrMin(arguments, P.lt);
  };


  /*
   * Return a new BigNumber whose value is the minimum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.minimum = BigNumber.min = function () {
    return maxOrMin(arguments, P.gt);
  };


  /*
   * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
   * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
   * zeros are produced).
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
   * '[BigNumber Error] crypto unavailable'
   */
  BigNumber.random = (function () {
    var pow2_53 = 0x20000000000000;

    // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
    // Check if Math.random() produces more than 32 bits of randomness.
    // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
    // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
    var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
     ? function () { return mathfloor(Math.random() * pow2_53); }
     : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
       (Math.random() * 0x800000 | 0); };

    return function (dp) {
      var a, b, e, k, v,
        i = 0,
        c = [],
        rand = new BigNumber(ONE);

      if (dp == null) dp = DECIMAL_PLACES;
      else intCheck(dp, 0, MAX);

      k = mathceil(dp / LOG_BASE);

      if (CRYPTO) {

        // Browsers supporting crypto.getRandomValues.
        if (crypto.getRandomValues) {

          a = crypto.getRandomValues(new Uint32Array(k *= 2));

          for (; i < k;) {

            // 53 bits:
            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
            //                                     11111 11111111 11111111
            // 0x20000 is 2^21.
            v = a[i] * 0x20000 + (a[i + 1] >>> 11);

            // Rejection sampling:
            // 0 <= v < 9007199254740992
            // Probability that v >= 9e15, is
            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
            if (v >= 9e15) {
              b = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b[0];
              a[i + 1] = b[1];
            } else {

              // 0 <= v <= 8999999999999999
              // 0 <= (v % 1e14) <= 99999999999999
              c.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;

        // Node.js supporting crypto.randomBytes.
        } else if (crypto.randomBytes) {

          // buffer
          a = crypto.randomBytes(k *= 7);

          for (; i < k;) {

            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
            // 0x100000000 is 2^32, 0x1000000 is 2^24
            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
            // 0 <= v < 9007199254740992
            v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
               (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
               (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {

              // 0 <= (v % 1e14) <= 99999999999999
              c.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error
           (bignumberError + 'crypto unavailable');
        }
      }

      // Use Math.random.
      if (!CRYPTO) {

        for (; i < k;) {
          v = random53bitInt();
          if (v < 9e15) c[i++] = v % 1e14;
        }
      }

      k = c[--i];
      dp %= LOG_BASE;

      // Convert trailing digits to zeros according to dp.
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c[i] = mathfloor(k / v) * v;
      }

      // Remove trailing elements which are zero.
      for (; c[i] === 0; c.pop(), i--);

      // Zero?
      if (i < 0) {
        c = [e = 0];
      } else {

        // Remove leading elements which are zero and adjust exponent accordingly.
        for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

        // Count the digits of the first element of c to determine leading zeros, and...
        for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

        // adjust the exponent accordingly.
        if (i < LOG_BASE) e -= LOG_BASE - i;
      }

      rand.e = e;
      rand.c = c;
      return rand;
    };
  })();


   /*
   * Return a BigNumber whose value is the sum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.sum = function () {
    var i = 1,
      args = arguments,
      sum = new BigNumber(args[0]);
    for (; i < args.length;) sum = sum.plus(args[i++]);
    return sum;
  };


  // PRIVATE FUNCTIONS


  // Called by BigNumber and BigNumber.prototype.toString.
  convertBase = (function () {
    var decimal = '0123456789';

    /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. toBaseOut('255', 10, 16) returns [15, 15].
     * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
     */
    function toBaseOut(str, baseIn, baseOut, alphabet) {
      var j,
        arr = [0],
        arrL,
        i = 0,
        len = str.length;

      for (; i < len;) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

        arr[0] += alphabet.indexOf(str.charAt(i++));

        for (j = 0; j < arr.length; j++) {

          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }

      return arr.reverse();
    }

    // Convert a numeric string of baseIn to a numeric string of baseOut.
    // If the caller is toString, we are converting from base 10 to baseOut.
    // If the caller is BigNumber, we are converting from baseIn to base 10.
    return function (str, baseIn, baseOut, sign, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y,
        i = str.indexOf('.'),
        dp = DECIMAL_PLACES,
        rm = ROUNDING_MODE;

      // Non-integer.
      if (i >= 0) {
        k = POW_PRECISION;

        // Unlimited precision.
        POW_PRECISION = 0;
        str = str.replace('.', '');
        y = new BigNumber(baseIn);
        x = y.pow(str.length - i);
        POW_PRECISION = k;

        // Convert str as if an integer, then restore the fraction part by dividing the
        // result by its base raised to a power.

        y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
         10, baseOut, decimal);
        y.e = y.c.length;
      }

      // Convert the number as integer.

      xc = toBaseOut(str, baseIn, baseOut, callerIsToString
       ? (alphabet = ALPHABET, decimal)
       : (alphabet = decimal, ALPHABET));

      // xc now represents str as an integer and converted to baseOut. e is the exponent.
      e = k = xc.length;

      // Remove trailing zeros.
      for (; xc[--k] == 0; xc.pop());

      // Zero?
      if (!xc[0]) return alphabet.charAt(0);

      // Does str represent an integer? If so, no need for the division.
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;

        // The sign is needed for correct rounding.
        x.s = sign;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }

      // xc now represents str converted to baseOut.

      // THe index of the rounding digit.
      d = e + dp + 1;

      // The rounding digit: the digit to the right of the digit that may be rounded up.
      i = xc[d];

      // Look at the rounding digits and mode to determine whether to round up.

      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;

      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
            : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
             rm == (x.s < 0 ? 8 : 7));

      // If the index of the rounding digit is not greater than zero, or xc represents
      // zero, then the result of the base conversion is zero or, if rounding up, a value
      // such as 0.00001.
      if (d < 1 || !xc[0]) {

        // 1^-dp or 0
        str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {

        // Truncate xc to the required number of decimal places.
        xc.length = d;

        // Round up?
        if (r) {

          // Rounding up may mean the previous digit has to be rounded up and so on.
          for (--baseOut; ++xc[--d] > baseOut;) {
            xc[d] = 0;

            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }

        // Determine trailing zeros.
        for (k = xc.length; !xc[--k];);

        // E.g. [4, 11, 15] becomes 4bf.
        for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

        // Add leading zeros, decimal point and trailing zeros as required.
        str = toFixedPoint(str, e, alphabet.charAt(0));
      }

      // The caller will add the sign.
      return str;
    };
  })();


  // Perform division in the specified base. Called by div and convertBase.
  div = (function () {

    // Assume non-zero x and k.
    function multiply(x, k, base) {
      var m, temp, xlo, xhi,
        carry = 0,
        i = x.length,
        klo = k % SQRT_BASE,
        khi = k / SQRT_BASE | 0;

      for (x = x.slice(); i--;) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m = khi * xlo + xhi * klo;
        temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
        carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base;
      }

      if (carry) x = [carry].concat(x);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, cmp;

      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {

        for (i = cmp = 0; i < aL; i++) {

          if (a[i] != b[i]) {
            cmp = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return cmp;
    }

    function subtract(a, b, aL, base) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1; a.splice(0, 1));
    }

    // x: dividend, y: divisor.
    return function (x, y, dp, rm, base) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
        yL, yz,
        s = x.s == y.s ? 1 : -1,
        xc = x.c,
        yc = y.c;

      // Either NaN, Infinity or 0?
      if (!xc || !xc[0] || !yc || !yc[0]) {

        return new BigNumber(

         // Return NaN if either NaN, or both Infinity or 0.
         !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

          // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
          xc && xc[0] == 0 || !yc ? s * 0 : s / 0
       );
      }

      q = new BigNumber(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;

      if (!base) {
        base = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }

      // Result exponent may be one less then the current value of e.
      // The coefficients of the BigNumbers from convertBase may have trailing zeros.
      for (i = 0; yc[i] == (xc[i] || 0); i++);

      if (yc[i] > (xc[i] || 0)) e--;

      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;

        // Normalise xc and yc so highest order digit of yc is >= base / 2.

        n = mathfloor(base / (yc[0] + 1));

        // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
        // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
        if (n > 1) {
          yc = multiply(yc, n, base);
          xc = multiply(xc, n, base);
          yL = yc.length;
          xL = xc.length;
        }

        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;

        // Add zeros to make remainder as long as divisor.
        for (; remL < yL; rem[remL++] = 0);
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base / 2) yc0++;
        // Not necessary, but to prevent trial digit n > base, when using base 3.
        // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

        do {
          n = 0;

          // Compare divisor and remainder.
          cmp = compare(yc, rem, yL, remL);

          // If divisor < remainder.
          if (cmp < 0) {

            // Calculate trial digit, n.

            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

            // n is how many times the divisor goes into the current remainder.
            n = mathfloor(rem0 / yc0);

            //  Algorithm:
            //  product = divisor multiplied by trial digit (n).
            //  Compare product and remainder.
            //  If product is greater than remainder:
            //    Subtract divisor from product, decrement trial digit.
            //  Subtract product from remainder.
            //  If product was less than remainder at the last compare:
            //    Compare new remainder and divisor.
            //    If remainder is greater than divisor:
            //      Subtract divisor from remainder, increment trial digit.

            if (n > 1) {

              // n may be > base only when base is 3.
              if (n >= base) n = base - 1;

              // product = divisor * trial digit.
              prod = multiply(yc, n, base);
              prodL = prod.length;
              remL = rem.length;

              // Compare product and remainder.
              // If product > remainder then trial digit n too high.
              // n is 1 too high about 5% of the time, and is not known to have
              // ever been more than 1 too high.
              while (compare(prod, rem, prodL, remL) == 1) {
                n--;

                // Subtract divisor from product.
                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                prodL = prod.length;
                cmp = 1;
              }
            } else {

              // n is 0 or 1, cmp is -1.
              // If n is 0, there is no need to compare yc and rem again below,
              // so change cmp to 1 to avoid it.
              // If n is 1, leave cmp as -1, so yc and rem are compared again.
              if (n == 0) {

                // divisor < remainder, so n must be at least 1.
                cmp = n = 1;
              }

              // product = divisor
              prod = yc.slice();
              prodL = prod.length;
            }

            if (prodL < remL) prod = [0].concat(prod);

            // Subtract product from remainder.
            subtract(rem, prod, remL, base);
            remL = rem.length;

             // If product was < remainder.
            if (cmp == -1) {

              // Compare divisor and new remainder.
              // If divisor < new remainder, subtract divisor from remainder.
              // Trial digit n too low.
              // n is 1 too low about 5% of the time, and very rarely 2 too low.
              while (compare(yc, rem, yL, remL) < 1) {
                n++;

                // Subtract divisor from remainder.
                subtract(rem, yL < remL ? yz : yc, remL, base);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          } // else cmp === 1 and n will be 0

          // Add the next digit, n, to the result array.
          qc[i++] = n;

          // Update the remainder.
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);

        more = rem[0] != null;

        // Leading zero?
        if (!qc[0]) qc.splice(0, 1);
      }

      if (base == BASE) {

        // To calculate q.e, first get the number of digits of qc[0].
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

      // Caller is convertBase.
      } else {
        q.e = e;
        q.r = +more;
      }

      return q;
    };
  })();


  /*
   * Return a string representing the value of BigNumber n in fixed-point or exponential
   * notation rounded to the specified decimal places or significant digits.
   *
   * n: a BigNumber.
   * i: the index of the last digit required (i.e. the digit that may be rounded up).
   * rm: the rounding mode.
   * id: 1 (toExponential) or 2 (toPrecision).
   */
  function format(n, i, rm, id) {
    var c0, e, ne, len, str;

    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);

    if (!n.c) return n.toString();

    c0 = n.c[0];
    ne = n.e;

    if (i == null) {
      str = coeffToString(n.c);
      str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
       ? toExponential(str, ne)
       : toFixedPoint(str, ne, '0');
    } else {
      n = round(new BigNumber(n), i, rm);

      // n.e may have changed if the value was rounded up.
      e = n.e;

      str = coeffToString(n.c);
      len = str.length;

      // toPrecision returns exponential notation if the number of significant digits
      // specified is less than the number of digits necessary to represent the integer
      // part of the value in fixed-point notation.

      // Exponential notation.
      if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

        // Append zeros?
        for (; len < i; str += '0', len++);
        str = toExponential(str, e);

      // Fixed-point notation.
      } else {
        i -= ne;
        str = toFixedPoint(str, e, '0');

        // Append zeros?
        if (e + 1 > len) {
          if (--i > 0) for (str += '.'; i--; str += '0');
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len) str += '.';
            for (; i--; str += '0');
          }
        }
      }
    }

    return n.s < 0 && c0 ? '-' + str : str;
  }


  // Handle BigNumber.max and BigNumber.min.
  function maxOrMin(args, method) {
    var n,
      i = 1,
      m = new BigNumber(args[0]);

    for (; i < args.length; i++) {
      n = new BigNumber(args[i]);

      // If any number is NaN, return NaN.
      if (!n.s) {
        m = n;
        break;
      } else if (method.call(m, n)) {
        m = n;
      }
    }

    return m;
  }


  /*
   * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
   * Called by minus, plus and times.
   */
  function normalise(n, c, e) {
    var i = 1,
      j = c.length;

     // Remove trailing zeros.
    for (; !c[--j]; c.pop());

    // Calculate the base 10 exponent. First get the number of digits of c[0].
    for (j = c[0]; j >= 10; j /= 10, i++);

    // Overflow?
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

      // Infinity.
      n.c = n.e = null;

    // Underflow?
    } else if (e < MIN_EXP) {

      // Zero.
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c;
    }

    return n;
  }


  // Handle values that fail the validity test in BigNumber.
  parseNumeric = (function () {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      dotAfter = /^([^.]+)\.$/,
      dotBefore = /^\.([^.]+)$/,
      isInfinityOrNaN = /^-?(Infinity|NaN)$/,
      whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

    return function (x, str, isNum, b) {
      var base,
        s = isNum ? str : str.replace(whitespaceOrPlus, '');

      // No exception on ±Infinity or NaN.
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {

          // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
          s = s.replace(basePrefix, function (m, p1, p2) {
            base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
            return !b || b == base ? p1 : m;
          });

          if (b) {
            base = b;

            // E.g. '1.' to '1', '.1' to '0.1'
            s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
          }

          if (str != s) return new BigNumber(s, base);
        }

        // '[BigNumber Error] Not a number: {n}'
        // '[BigNumber Error] Not a base {b} number: {n}'
        if (BigNumber.DEBUG) {
          throw Error
            (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
        }

        // NaN
        x.s = null;
      }

      x.c = x.e = null;
    }
  })();


  /*
   * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
   * If r is truthy, it is known that there are more digits after the rounding digit.
   */
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd,
      xc = x.c,
      pows10 = POWS_TEN;

    // if x is not Infinity or NaN...
    if (xc) {

      // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
      // n is a base 1e14 number, the value of the element of array x.c containing rd.
      // ni is the index of n within x.c.
      // d is the number of digits of n.
      // i is the index of rd within n including leading zeros.
      // j is the actual index of rd within n (if < 0, rd is a leading zero).
      out: {

        // Get the number of digits of the first element of xc.
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
        i = sd - d;

        // If the rounding digit is in the first element of xc...
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];

          // Get the rounding digit at index j of n.
          rd = n / pows10[d - j - 1] % 10 | 0;
        } else {
          ni = mathceil((i + 1) / LOG_BASE);

          if (ni >= xc.length) {

            if (r) {

              // Needed by sqrt.
              for (; xc.length <= ni; xc.push(0));
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];

            // Get the number of digits of n.
            for (d = 1; k >= 10; k /= 10, d++);

            // Get the index of rd within n.
            i %= LOG_BASE;

            // Get the index of rd within n, adjusted for leading zeros.
            // The number of leading zeros of n is given by LOG_BASE - d.
            j = i - LOG_BASE + d;

            // Get the rounding digit at index j of n.
            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
          }
        }

        r = r || sd < 0 ||

        // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
         xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

        r = rm < 4
         ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
         : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
           rm == (x.s < 0 ? 8 : 7));

        if (sd < 1 || !xc[0]) {
          xc.length = 0;

          if (r) {

            // Convert sd to decimal places.
            sd -= x.e + 1;

            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {

            // Zero.
            xc[0] = x.e = 0;
          }

          return x;
        }

        // Remove excess digits.
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];

          // E.g. 56700 becomes 56000 if 7 is the rounding digit.
          // j > 0 means i > number of leading zeros of n.
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }

        // Round up?
        if (r) {

          for (; ;) {

            // If the digit to be rounded up is in the first element of xc...
            if (ni == 0) {

              // i will be the length of xc[0] before k is added.
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++);

              // if i != k the length has increased.
              if (i != k) {
                x.e++;
                if (xc[0] == BASE) xc[0] = 1;
              }

              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE) break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }

        // Remove trailing zeros.
        for (i = xc.length; xc[--i] === 0; xc.pop());
      }

      // Overflow? Infinity.
      if (x.e > MAX_EXP) {
        x.c = x.e = null;

      // Underflow? Zero.
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }

    return x;
  }


  function valueOf(n) {
    var str,
      e = n.e;

    if (e === null) return n.toString();

    str = coeffToString(n.c);

    str = e <= TO_EXP_NEG || e >= TO_EXP_POS
      ? toExponential(str, e)
      : toFixedPoint(str, e, '0');

    return n.s < 0 ? '-' + str : str;
  }


  // PROTOTYPE/INSTANCE METHODS


  /*
   * Return a new BigNumber whose value is the absolute value of this BigNumber.
   */
  P.absoluteValue = P.abs = function () {
    var x = new BigNumber(this);
    if (x.s < 0) x.s = 1;
    return x;
  };


  /*
   * Return
   *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
   *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
   *   0 if they have the same value,
   *   or null if the value of either is NaN.
   */
  P.comparedTo = function (y, b) {
    return compare(this, new BigNumber(y, b));
  };


  /*
   * If dp is undefined or null or true or false, return the number of decimal places of the
   * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   *
   * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.decimalPlaces = P.dp = function (dp, rm) {
    var c, n, v,
      x = this;

    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      return round(new BigNumber(x), dp + x.e + 1, rm);
    }

    if (!(c = x.c)) return null;
    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

    // Subtract the number of trailing zeros of the last number.
    if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
    if (n < 0) n = 0;

    return n;
  };


  /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
   * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */
  P.dividedBy = P.div = function (y, b) {
    return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
  };


  /*
   * Return a new BigNumber whose value is the integer part of dividing the value of this
   * BigNumber by the value of BigNumber(y, b).
   */
  P.dividedToIntegerBy = P.idiv = function (y, b) {
    return div(this, new BigNumber(y, b), 0, 1);
  };


  /*
   * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
   *
   * If m is present, return the result modulo m.
   * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
   * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
   *
   * The modular power operation works efficiently when x, n, and m are integers, otherwise it
   * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
   *
   * n {number|string|BigNumber} The exponent. An integer.
   * [m] {number|string|BigNumber} The modulus.
   *
   * '[BigNumber Error] Exponent not an integer: {n}'
   */
  P.exponentiatedBy = P.pow = function (n, m) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
      x = this;

    n = new BigNumber(n);

    // Allow NaN and ±Infinity, but not other non-integers.
    if (n.c && !n.isInteger()) {
      throw Error
        (bignumberError + 'Exponent not an integer: ' + valueOf(n));
    }

    if (m != null) m = new BigNumber(m);

    // Exponent of MAX_SAFE_INTEGER is 15.
    nIsBig = n.e > 14;

    // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

      // The sign of the result of pow when x is negative depends on the evenness of n.
      // If +n overflows to ±Infinity, the evenness of n would be not be known.
      y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
      return m ? y.mod(m) : y;
    }

    nIsNeg = n.s < 0;

    if (m) {

      // x % m returns NaN if abs(m) is zero, or m is NaN.
      if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

      isModExp = !nIsNeg && x.isInteger() && m.isInteger();

      if (isModExp) x = x.mod(m);

    // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
    // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
      // [1, 240000000]
      ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
      // [80000000000000]  [99999750000000]
      : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

      // If x is negative and n is odd, k = -0, else k = 0.
      k = x.s < 0 && isOdd(n) ? -0 : 0;

      // If x >= 1, k = ±Infinity.
      if (x.e > -1) k = 1 / k;

      // If n is negative return ±0, else return ±Infinity.
      return new BigNumber(nIsNeg ? 1 / k : k);

    } else if (POW_PRECISION) {

      // Truncating each coefficient array to a length of k after each multiplication
      // equates to truncating significant digits to POW_PRECISION + [28, 41],
      // i.e. there will be a minimum of 28 guard digits retained.
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }

    if (nIsBig) {
      half = new BigNumber(0.5);
      if (nIsNeg) n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }

    y = new BigNumber(ONE);

    // Performs 54 loop iterations for n of 9007199254740991.
    for (; ;) {

      if (nIsOdd) {
        y = y.times(x);
        if (!y.c) break;

        if (k) {
          if (y.c.length > k) y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
        }
      }

      if (i) {
        i = mathfloor(i / 2);
        if (i === 0) break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);

        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0) break;
          nIsOdd = i % 2;
        }
      }

      x = x.times(x);

      if (k) {
        if (x.c && x.c.length > k) x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
      }
    }

    if (isModExp) return y;
    if (nIsNeg) y = ONE.div(y);

    return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
   * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
   */
  P.integerValue = function (rm) {
    var n = new BigNumber(this);
    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };


  /*
   * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isEqualTo = P.eq = function (y, b) {
    return compare(this, new BigNumber(y, b)) === 0;
  };


  /*
   * Return true if the value of this BigNumber is a finite number, otherwise return false.
   */
  P.isFinite = function () {
    return !!this.c;
  };


  /*
   * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isGreaterThan = P.gt = function (y, b) {
    return compare(this, new BigNumber(y, b)) > 0;
  };


  /*
   * Return true if the value of this BigNumber is greater than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */
  P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
    return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

  };


  /*
   * Return true if the value of this BigNumber is an integer, otherwise return false.
   */
  P.isInteger = function () {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };


  /*
   * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isLessThan = P.lt = function (y, b) {
    return compare(this, new BigNumber(y, b)) < 0;
  };


  /*
   * Return true if the value of this BigNumber is less than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */
  P.isLessThanOrEqualTo = P.lte = function (y, b) {
    return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
  };


  /*
   * Return true if the value of this BigNumber is NaN, otherwise return false.
   */
  P.isNaN = function () {
    return !this.s;
  };


  /*
   * Return true if the value of this BigNumber is negative, otherwise return false.
   */
  P.isNegative = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this BigNumber is positive, otherwise return false.
   */
  P.isPositive = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
   */
  P.isZero = function () {
    return !!this.c && this.c[0] == 0;
  };


  /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber minus the value of
   * BigNumber(y, b).
   */
  P.minus = function (y, b) {
    var i, j, t, xLTy,
      x = this,
      a = x.s;

    y = new BigNumber(y, b);
    b = y.s;

    // Either NaN?
    if (!a || !b) return new BigNumber(NaN);

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }

    var xe = x.e / LOG_BASE,
      ye = y.e / LOG_BASE,
      xc = x.c,
      yc = y.c;

    if (!xe || !ye) {

      // Either Infinity?
      if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

      // Either zero?
      if (!xc[0] || !yc[0]) {

        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

         // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
         ROUNDING_MODE == 3 ? -0 : 0);
      }
    }

    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();

    // Determine which is the bigger number.
    if (a = xe - ye) {

      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }

      t.reverse();

      // Prepend zeros to equalise exponents.
      for (b = a; b--; t.push(0));
      t.reverse();
    } else {

      // Exponents equal. Check digit by digit.
      j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

      for (a = b = 0; b < j; b++) {

        if (xc[b] != yc[b]) {
          xLTy = xc[b] < yc[b];
          break;
        }
      }
    }

    // x < y? Point xc to the array of the bigger number.
    if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

    b = (j = yc.length) - (i = xc.length);

    // Append zeros to xc if shorter.
    // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
    if (b > 0) for (; b--; xc[i++] = 0);
    b = BASE - 1;

    // Subtract yc from xc.
    for (; j > a;) {

      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b);
        --xc[i];
        xc[j] += BASE;
      }

      xc[j] -= yc[j];
    }

    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] == 0; xc.splice(0, 1), --ye);

    // Zero?
    if (!xc[0]) {

      // Following IEEE 754 (2008) 6.3,
      // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }

    // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
    // for finite x and y.
    return normalise(y, xc, ye);
  };


  /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
   * BigNumber(y, b). The result depends on the value of MODULO_MODE.
   */
  P.modulo = P.mod = function (y, b) {
    var q, s,
      x = this;

    y = new BigNumber(y, b);

    // Return NaN if x is Infinity or NaN, or y is NaN or zero.
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber(NaN);

    // Return x if y is Infinity or x is zero.
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber(x);
    }

    if (MODULO_MODE == 9) {

      // Euclidian division: q = sign(y) * floor(x / abs(y))
      // r = x - qy    where  0 <= r < abs(y)
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }

    y = x.minus(q.times(y));

    // To match JavaScript %, ensure sign of zero is sign of dividend.
    if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

    return y;
  };


  /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
   * of BigNumber(y, b).
   */
  P.multipliedBy = P.times = function (y, b) {
    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
      base, sqrtBase,
      x = this,
      xc = x.c,
      yc = (y = new BigNumber(y, b)).c;

    // Either NaN, ±Infinity or ±0?
    if (!xc || !yc || !xc[0] || !yc[0]) {

      // Return NaN if either is NaN, or one is 0 and the other is Infinity.
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;

        // Return ±Infinity if either is ±Infinity.
        if (!xc || !yc) {
          y.c = y.e = null;

        // Return ±0 if either is ±0.
        } else {
          y.c = [0];
          y.e = 0;
        }
      }

      return y;
    }

    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;

    // Ensure xc points to longer array and xcL to its length.
    if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

    // Initialise the result array with zeros.
    for (i = xcL + ycL, zc = []; i--; zc.push(0));

    base = BASE;
    sqrtBase = SQRT_BASE;

    for (i = ycL; --i >= 0;) {
      c = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;

      for (k = xcL, j = i + k; j > i;) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
        c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base;
      }

      zc[j] = c;
    }

    if (c) {
      ++e;
    } else {
      zc.splice(0, 1);
    }

    return normalise(y, zc, e);
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber negated,
   * i.e. multiplied by -1.
   */
  P.negated = function () {
    var x = new BigNumber(this);
    x.s = -x.s || null;
    return x;
  };


  /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber plus the value of
   * BigNumber(y, b).
   */
  P.plus = function (y, b) {
    var t,
      x = this,
      a = x.s;

    y = new BigNumber(y, b);
    b = y.s;

    // Either NaN?
    if (!a || !b) return new BigNumber(NaN);

    // Signs differ?
     if (a != b) {
      y.s = -b;
      return x.minus(y);
    }

    var xe = x.e / LOG_BASE,
      ye = y.e / LOG_BASE,
      xc = x.c,
      yc = y.c;

    if (!xe || !ye) {

      // Return ±Infinity if either ±Infinity.
      if (!xc || !yc) return new BigNumber(a / 0);

      // Either zero?
      // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
      if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
    }

    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();

    // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }

      t.reverse();
      for (; a--; t.push(0));
      t.reverse();
    }

    a = xc.length;
    b = yc.length;

    // Point xc to the longer array, and b to the shorter length.
    if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

    // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
    for (a = 0; b;) {
      a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
      xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }

    if (a) {
      xc = [a].concat(xc);
      ++ye;
    }

    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    // ye = MAX_EXP + 1 possible
    return normalise(y, xc, ye);
  };


  /*
   * If sd is undefined or null or true or false, return the number of significant digits of
   * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   * If sd is true include integer-part trailing zeros in the count.
   *
   * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
   *                     boolean: whether to count integer-part trailing zeros: true or false.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */
  P.precision = P.sd = function (sd, rm) {
    var c, n, v,
      x = this;

    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      return round(new BigNumber(x), sd, rm);
    }

    if (!(c = x.c)) return null;
    v = c.length - 1;
    n = v * LOG_BASE + 1;

    if (v = c[v]) {

      // Subtract the number of trailing zeros of the last element.
      for (; v % 10 == 0; v /= 10, n--);

      // Add the number of digits of the first element.
      for (v = c[0]; v >= 10; v /= 10, n++);
    }

    if (sd && x.e + 1 > n) n = x.e + 1;

    return n;
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
   * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
   *
   * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
   */
  P.shiftedBy = function (k) {
    intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    return this.times('1e' + k);
  };


  /*
   *  sqrt(-n) =  N
   *  sqrt(N) =  N
   *  sqrt(-I) =  N
   *  sqrt(I) =  I
   *  sqrt(0) =  0
   *  sqrt(-0) = -0
   *
   * Return a new BigNumber whose value is the square root of the value of this BigNumber,
   * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */
  P.squareRoot = P.sqrt = function () {
    var m, n, r, rep, t,
      x = this,
      c = x.c,
      s = x.s,
      e = x.e,
      dp = DECIMAL_PLACES + 4,
      half = new BigNumber('0.5');

    // Negative/NaN/Infinity/zero?
    if (s !== 1 || !c || !c[0]) {
      return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
    }

    // Initial estimate.
    s = Math.sqrt(+valueOf(x));

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c);
      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new BigNumber(n);
    } else {
      r = new BigNumber(s + '');
    }

    // Check for zero.
    // r could be zero if MIN_EXP is changed after the this value was created.
    // This would cause a division by zero (x/t) and hence Infinity below, which would cause
    // coeffToString to throw.
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3) s = 0;

      // Newton-Raphson iteration.
      for (; ;) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));

        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

          // The exponent of r may here be one less than the final result exponent,
          // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
          // are indexed correctly.
          if (r.e < e) --s;
          n = n.slice(s - 3, s + 1);

          // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
          // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
          // iteration.
          if (n == '9999' || !rep && n == '4999') {

            // On the first iteration only, check to see if rounding up gives the
            // exact result as the nines may infinitely repeat.
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);

              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }

            dp += 4;
            s += 4;
            rep = 1;
          } else {

            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
            // result. If not, then there are further digits and m will be truthy.
            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

              // Truncate to the first rounding digit.
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m = !r.times(r).eq(x);
            }

            break;
          }
        }
      }
    }

    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
  };


  /*
   * Return a string representing the value of this BigNumber in exponential notation and
   * rounded using ROUNDING_MODE to dp fixed decimal places.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.toExponential = function (dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };


  /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounding
   * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
   * but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.toFixed = function (dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };


  /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounded
   * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
   * of the format or FORMAT object (see BigNumber.set).
   *
   * The formatting object may contain some or all of the properties shown below.
   *
   * FORMAT = {
   *   prefix: '',
   *   groupSize: 3,
   *   secondaryGroupSize: 0,
   *   groupSeparator: ',',
   *   decimalSeparator: '.',
   *   fractionGroupSize: 0,
   *   fractionGroupSeparator: '\xA0',      // non-breaking space
   *   suffix: ''
   * };
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   * [format] {object} Formatting options. See FORMAT pbject above.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   * '[BigNumber Error] Argument not an object: {format}'
   */
  P.toFormat = function (dp, rm, format) {
    var str,
      x = this;

    if (format == null) {
      if (dp != null && rm && typeof rm == 'object') {
        format = rm;
        rm = null;
      } else if (dp && typeof dp == 'object') {
        format = dp;
        dp = rm = null;
      } else {
        format = FORMAT;
      }
    } else if (typeof format != 'object') {
      throw Error
        (bignumberError + 'Argument not an object: ' + format);
    }

    str = x.toFixed(dp, rm);

    if (x.c) {
      var i,
        arr = str.split('.'),
        g1 = +format.groupSize,
        g2 = +format.secondaryGroupSize,
        groupSeparator = format.groupSeparator || '',
        intPart = arr[0],
        fractionPart = arr[1],
        isNeg = x.s < 0,
        intDigits = isNeg ? intPart.slice(1) : intPart,
        len = intDigits.length;

      if (g2) i = g1, g1 = g2, g2 = i, len -= i;

      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
        if (isNeg) intPart = '-' + intPart;
      }

      str = fractionPart
       ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
        ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
         '$&' + (format.fractionGroupSeparator || ''))
        : fractionPart)
       : intPart;
    }

    return (format.prefix || '') + str + (format.suffix || '');
  };


  /*
   * Return an array of two BigNumbers representing the value of this BigNumber as a simple
   * fraction with an integer numerator and an integer denominator.
   * The denominator will be a positive non-zero value less than or equal to the specified
   * maximum denominator. If a maximum denominator is not specified, the denominator will be
   * the lowest value necessary to represent the number exactly.
   *
   * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
   *
   * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
   */
  P.toFraction = function (md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
      x = this,
      xc = x.c;

    if (md != null) {
      n = new BigNumber(md);

      // Throw if md is less than one or is not an integer, unless it is Infinity.
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error
          (bignumberError + 'Argument ' +
            (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
      }
    }

    if (!xc) return new BigNumber(x);

    d = new BigNumber(ONE);
    n1 = d0 = new BigNumber(ONE);
    d1 = n0 = new BigNumber(ONE);
    s = coeffToString(xc);

    // Determine initial denominator.
    // d is a power of 10 and the minimum max denominator that specifies the value exactly.
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber(s);

    // n0 = d1 = 0
    n0.c[0] = 0;

    for (; ;)  {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1) break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }

    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;

    // Determine which fraction is closer to x, n0/d0 or n1/d1
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
        div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

    MAX_EXP = exp;

    return r;
  };


  /*
   * Return the value of this BigNumber converted to a number primitive.
   */
  P.toNumber = function () {
    return +valueOf(this);
  };


  /*
   * Return a string representing the value of this BigNumber rounded to sd significant digits
   * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
   * necessary to represent the integer part of the value in fixed-point notation, then use
   * exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */
  P.toPrecision = function (sd, rm) {
    if (sd != null) intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };


  /*
   * Return a string representing the value of this BigNumber in base b, or base 10 if b is
   * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
   * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
   * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
   * TO_EXP_NEG, return exponential notation.
   *
   * [b] {number} Integer, 2 to ALPHABET.length inclusive.
   *
   * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
   */
  P.toString = function (b) {
    var str,
      n = this,
      s = n.s,
      e = n.e;

    // Infinity or NaN?
    if (e === null) {
      if (s) {
        str = 'Infinity';
        if (s < 0) str = '-' + str;
      } else {
        str = 'NaN';
      }
    } else {
      if (b == null) {
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS
         ? toExponential(coeffToString(n.c), e)
         : toFixedPoint(coeffToString(n.c), e, '0');
      } else if (b === 10) {
        n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str = toFixedPoint(coeffToString(n.c), n.e, '0');
      } else {
        intCheck(b, 2, ALPHABET.length, 'Base');
        str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
      }

      if (s < 0 && n.c[0]) str = '-' + str;
    }

    return str;
  };


  /*
   * Return as toString, but do not accept a base argument, and include the minus sign for
   * negative zero.
   */
  P.valueOf = P.toJSON = function () {
    return valueOf(this);
  };


  P._isBigNumber = true;

  P[Symbol.toStringTag] = 'BigNumber';

  // Node.js v10.12.0+
  P[Symbol.for('nodejs.util.inspect.custom')] = P.valueOf;

  if (configObject != null) BigNumber.set(configObject);

  return BigNumber;
}


// PRIVATE HELPER FUNCTIONS

// These functions don't need access to variables,
// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}


// Return a coefficient array as a string of base 10 digits.
function coeffToString(a) {
  var s, z,
    i = 1,
    j = a.length,
    r = a[0] + '';

  for (; i < j;) {
    s = a[i++] + '';
    z = LOG_BASE - s.length;
    for (; z--; s = '0' + s);
    r += s;
  }

  // Determine trailing zeros.
  for (j = r.length; r.charCodeAt(--j) === 48;);

  return r.slice(0, j + 1 || 1);
}


// Compare the value of BigNumbers x and y.
function compare(x, y) {
  var a, b,
    xc = x.c,
    yc = y.c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either NaN?
  if (!i || !j) return null;

  a = xc && !xc[0];
  b = yc && !yc[0];

  // Either zero?
  if (a || b) return a ? b ? 0 : -j : i;

  // Signs differ?
  if (i != j) return i;

  a = i < 0;
  b = k == l;

  // Either Infinity?
  if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

  // Compare exponents.
  if (!b) return k > l ^ a ? 1 : -1;

  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

  // Compare lengths.
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}


/*
 * Check that n is a primitive number, an integer, and in range, otherwise throw.
 */
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error
     (bignumberError + (name || 'Argument') + (typeof n == 'number'
       ? n < min || n > max ? ' out of range: ' : ' not an integer: '
       : ' not a primitive number: ') + String(n));
  }
}


// Assumes finite n.
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}


function toExponential(str, e) {
  return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
   (e < 0 ? 'e' : 'e+') + e;
}


function toFixedPoint(str, e, z) {
  var len, zs;

  // Negative exponent?
  if (e < 0) {

    // Prepend zeros.
    for (zs = z + '.'; ++e; zs += z);
    str = zs + str;

  // Positive exponent
  } else {
    len = str.length;

    // Append zeros.
    if (++e > len) {
      for (zs = z, e -= len; --e; zs += z);
      str += zs;
    } else if (e < len) {
      str = str.slice(0, e) + '.' + str.slice(e);
    }
  }

  return str;
}


// EXPORT


var BigNumber = clone();

BigNumber.config({
    EXPONENTIAL_AT: [-100, 100],
    ROUNDING_MODE: 1,
    DECIMAL_PLACES: 18,
});
const ZERO = bnum(0);
const ONE = bnum(1);
const INFINITY = bnum('Infinity');
function scale(input, decimalPlaces) {
    const scalePow = new BigNumber(decimalPlaces.toString());
    const scaleMul = new BigNumber(10).pow(scalePow);
    return input.times(scaleMul);
}
function bnum(val) {
    return new BigNumber(val.toString());
}

const isSameAddress = (address1, address2) => address.getAddress(address1) === address.getAddress(address2);
/// Parses a fixed-point decimal string into a BigNumber
/// If we do not have enough decimals to express the number, we truncate it
function safeParseFixed(value, decimals = 0) {
    const [integer, fraction] = value.split('.');
    if (!fraction) {
        return bignumber.parseFixed(value, decimals);
    }
    const safeValue = integer + '.' + fraction.slice(0, decimals);
    return bignumber.parseFixed(safeValue, decimals);
}

exports.SwapTypes = void 0;
(function (SwapTypes) {
    SwapTypes[SwapTypes["SwapExactIn"] = 0] = "SwapExactIn";
    SwapTypes[SwapTypes["SwapExactOut"] = 1] = "SwapExactOut";
})(exports.SwapTypes || (exports.SwapTypes = {}));
exports.PoolTypes = void 0;
(function (PoolTypes) {
    PoolTypes[PoolTypes["Weighted"] = 0] = "Weighted";
    PoolTypes[PoolTypes["Stable"] = 1] = "Stable";
    PoolTypes[PoolTypes["Element"] = 2] = "Element";
    PoolTypes[PoolTypes["MetaStable"] = 3] = "MetaStable";
    PoolTypes[PoolTypes["Linear"] = 4] = "Linear";
    PoolTypes[PoolTypes["Gyro2"] = 5] = "Gyro2";
    PoolTypes[PoolTypes["Gyro3"] = 6] = "Gyro3";
    PoolTypes[PoolTypes["GyroE"] = 7] = "GyroE";
})(exports.PoolTypes || (exports.PoolTypes = {}));
exports.PoolFilter = void 0;
(function (PoolFilter) {
    PoolFilter["All"] = "All";
    PoolFilter["Weighted"] = "Weighted";
    PoolFilter["Stable"] = "Stable";
    PoolFilter["MetaStable"] = "MetaStable";
    PoolFilter["LBP"] = "LiquidityBootstrapping";
    PoolFilter["Investment"] = "Investment";
    PoolFilter["Element"] = "Element";
    PoolFilter["AaveLinear"] = "AaveLinear";
    PoolFilter["StablePhantom"] = "StablePhantom";
    PoolFilter["ERC4626Linear"] = "ERC4626Linear";
    PoolFilter["ComposableStable"] = "ComposableStable";
    PoolFilter["Gyro2"] = "Gyro2";
    PoolFilter["Gyro3"] = "Gyro3";
    PoolFilter["GyroE"] = "GyroE";
})(exports.PoolFilter || (exports.PoolFilter = {}));

const BZERO = BigInt(0);
const BONE = BigInt(1);
const _require = (b, message) => {
    if (!b)
        throw new Error(message);
};
class MathSol {
    /**
     * @dev Returns the addition of two unsigned integers of 256 bits, reverting on overflow.
     */
    // add(a: bigint, b: bigint): bigint {
    //     const c = a + b;
    //     // _require(c >= a, Errors.ADD_OVERFLOW);
    //     return c;
    // }
    /**
     * @dev Returns the addition of two signed integers, reverting on overflow.
     */
    static add(a, b) {
        const c = a + b;
        _require((b >= 0 && c >= a) || (b < 0 && c < a), 'Errors.ADD_OVERFLOW');
        return c;
    }
    /**
     * @dev Returns the subtraction of two unsigned integers of 256 bits, reverting on overflow.
     */
    static sub(a, b) {
        _require(b <= a, 'Errors.SUB_OVERFLOW');
        const c = a - b;
        return c;
    }
    /**
     * @dev Returns the subtraction of two signed integers, reverting on overflow.
     */
    // sub(int256 a, int256 b) internal pure returns (int256) {
    //     int256 c = a - b;
    //     // _require((b >= 0 && c <= a) || (b < 0 && c > a), Errors.SUB_OVERFLOW);
    //     return c;
    // }
    /**
     * @dev Returns the largest of two numbers of 256 bits.
     */
    static max(a, b) {
        return a >= b ? a : b;
    }
    /**
     * @dev Returns the smallest of two numbers of 256 bits.
     */
    static min(a, b) {
        return a < b ? a : b;
    }
    static mul(a, b) {
        const c = a * b;
        _require(a == BZERO || c / a == b, 'Errors.MUL_OVERFLOW');
        return c;
    }
    static div(a, b, roundUp) {
        return roundUp ? this.divUp(a, b) : this.divDown(a, b);
    }
    static divDown(a, b) {
        _require(b != BZERO, 'Errors.ZERO_DIVISION');
        return a / b;
    }
    static divUp(a, b) {
        _require(b != BZERO, 'Errors.ZERO_DIVISION');
        if (a == BZERO) {
            return BZERO;
        }
        else {
            return BONE + (a - BONE) / b;
        }
    }
    static mulUpFixed(a, b) {
        const product = a * b;
        _require(a == BZERO || product / a == b, 'Errors.MUL_OVERFLOW');
        if (product == BZERO) {
            return BZERO;
        }
        else {
            // The traditional divUp formula is:
            // divUp(x, y) := (x + y - 1) / y
            // To avoid intermediate overflow in the addition, we distribute the division and get:
            // divUp(x, y) := (x - 1) / y + 1
            // Note that this requires x != 0, which we already tested for.
            return (product - BONE) / this.ONE + BONE;
        }
    }
    // Modification: Taken from the fixed point class
    // Same as divDown in Smart Contract FixedPoint.sol
    static divDownFixed(a, b) {
        _require(b != BZERO, 'Errors.ZERO_DIVISION');
        if (a == BZERO) {
            return BZERO;
        }
        else {
            const aInflated = a * this.ONE;
            // _require(aInflated / a == ONE, Errors.DIV_INTERNAL); // mul overflow
            return aInflated / b;
        }
    }
    // Modification: Taken from the fixed point class
    static divUpFixed(a, b) {
        _require(b != BZERO, 'Errors.ZERO_DIVISION');
        if (a == BZERO) {
            return BZERO;
        }
        else {
            const aInflated = a * this.ONE;
            _require(aInflated / a == this.ONE, 'Errors.DIV_INTERNAL'); // mul overflow
            // The traditional divUp formula is:
            // divUp(x, y) := (x + y - 1) / y
            // To avoid intermediate overflow in the addition, we distribute the division and get:
            // divUp(x, y) := (x - 1) / y + 1
            // Note that this requires x != 0, which we already tested for.
            return (aInflated - BONE) / b + BONE;
        }
    }
    // Modification: Taken from the fixed point class
    static powUpFixed(x, y) {
        const raw = LogExpMath.pow(x, y);
        const maxError = this.add(this.mulUpFixed(raw, this.MAX_POW_RELATIVE_ERROR), BONE);
        return this.add(raw, maxError);
    }
    static powDown(x, y) {
        const raw = LogExpMath.pow(x, y);
        const maxError = this.add(this.mulUpFixed(raw, this.MAX_POW_RELATIVE_ERROR), BONE);
        return this.sub(raw, maxError);
    }
    // Modification: Taken from the fixed point class
    static complementFixed(x) {
        return x < this.ONE ? this.ONE - x : BZERO;
    }
    // This is the same as mulDown in Smart Contracts FixedPoint.sol
    static mulDownFixed(a, b) {
        const product = a * b;
        _require(a == BZERO || product / a == b, 'Errors.MUL_OVERFLOW');
        return product / this.ONE;
    }
}
// Modification: Taken from the fixed point class
MathSol.ONE = BigInt('1000000000000000000'); // 18 decimal places
MathSol.MAX_POW_RELATIVE_ERROR = BigInt(10000);
class LogExpMath {
    // All arguments and return values are 18 decimal fixed point numbers.
    static pow(x, y) {
        if (y === BZERO) {
            // We solve the 0^0 indetermination by making it equal one.
            return this.ONE_18;
        }
        if (x == BZERO) {
            return BZERO;
        }
        // Instead of computing x^y directly, we instead rely on the properties of logarithms and exponentiation to
        // arrive at that result. In particular, exp(ln(x)) = x, and ln(x^y) = y * ln(x). This means
        // x^y = exp(y * ln(x)).
        // The ln function takes a signed value, so we need to make sure x fits in the signed 256 bit range.
        _require(x <
            BigInt('57896044618658097711785492504343953926634992332820282019728792003956564819968'), 'Errors.X_OUT_OF_BOUNDS');
        const x_int256 = x;
        // We will compute y * ln(x) in a single step. Depending on the value of x, we can either use ln or ln_36. In
        // both cases, we leave the division by ONE_18 (due to fixed point multiplication) to the end.
        // This prevents y * ln(x) from overflowing, and at the same time guarantees y fits in the signed 256 bit range.
        _require(y < this.MILD_EXPONENT_BOUND, 'Errors.Y_OUT_OF_BOUNDS');
        const y_int256 = y;
        let logx_times_y;
        if (this.LN_36_LOWER_BOUND < x_int256 &&
            x_int256 < this.LN_36_UPPER_BOUND) {
            const ln_36_x = this._ln_36(x_int256);
            // ln_36_x has 36 decimal places, so multiplying by y_int256 isn't as straightforward, since we can't just
            // bring y_int256 to 36 decimal places, as it might overflow. Instead, we perform two 18 decimal
            // multiplications and add the results: one with the first 18 decimals of ln_36_x, and one with the
            // (downscaled) last 18 decimals.
            logx_times_y =
                (ln_36_x / this.ONE_18) * y_int256 +
                    ((ln_36_x % this.ONE_18) * y_int256) / this.ONE_18;
        }
        else {
            logx_times_y = this._ln(x_int256) * y_int256;
        }
        logx_times_y /= this.ONE_18;
        // Finally, we compute exp(y * ln(x)) to arrive at x^y
        _require(this.MIN_NATURAL_EXPONENT <= logx_times_y &&
            logx_times_y <= this.MAX_NATURAL_EXPONENT, 'Errors.PRODUCT_OUT_OF_BOUNDS');
        // return uint256(exp(logx_times_y));
        return this.exp(logx_times_y);
    }
    static exp(x) {
        _require(x >= this.MIN_NATURAL_EXPONENT && x <= this.MAX_NATURAL_EXPONENT, 'Errors.INVALID_EXPONENT');
        if (x < 0) {
            // We only handle positive exponents: e^(-x) is computed as 1 / e^x. We can safely make x positive since it
            // fits in the signed 256 bit range (as it is larger than MIN_NATURAL_EXPONENT).
            // Fixed point division requires multiplying by ONE_18.
            return (this.ONE_18 * this.ONE_18) / this.exp(BigInt(-1) * x);
        }
        // First, we use the fact that e^(x+y) = e^x * e^y to decompose x into a sum of powers of two, which we call x_n,
        // where x_n == 2^(7 - n), and e^x_n = a_n has been precomputed. We choose the first x_n, x0, to equal 2^7
        // because all larger powers are larger than MAX_NATURAL_EXPONENT, and therefore not present in the
        // decomposition.
        // At the end of this process we will have the product of all e^x_n = a_n that apply, and the remainder of this
        // decomposition, which will be lower than the smallest x_n.
        // exp(x) = k_0 * a_0 * k_1 * a_1 * ... + k_n * a_n * exp(remainder), where each k_n equals either 0 or 1.
        // We mutate x by subtracting x_n, making it the remainder of the decomposition.
        // The first two a_n (e^(2^7) and e^(2^6)) are too large if stored as 18 decimal numbers, and could cause
        // intermediate overflows. Instead we store them as plain integers, with 0 decimals.
        // Additionally, x0 + x1 is larger than MAX_NATURAL_EXPONENT, which means they will not both be present in the
        // decomposition.
        // For each x_n, we test if that term is present in the decomposition (if x is larger than it), and if so deduct
        // it and compute the accumulated product.
        let firstAN;
        if (x >= this.x0) {
            x -= this.x0;
            firstAN = this.a0;
        }
        else if (x >= this.x1) {
            x -= this.x1;
            firstAN = this.a1;
        }
        else {
            firstAN = BigInt(1); // One with no decimal places
        }
        // We now transform x into a 20 decimal fixed point number, to have enhanced precision when computing the
        // smaller terms.
        x *= BigInt(100);
        // `product` is the accumulated product of all a_n (except a0 and a1), which starts at 20 decimal fixed point
        // one. Recall that fixed point multiplication requires dividing by ONE_20.
        let product = this.ONE_20;
        if (x >= this.x2) {
            x -= this.x2;
            product = (product * this.a2) / this.ONE_20;
        }
        if (x >= this.x3) {
            x -= this.x3;
            product = (product * this.a3) / this.ONE_20;
        }
        if (x >= this.x4) {
            x -= this.x4;
            product = (product * this.a4) / this.ONE_20;
        }
        if (x >= this.x5) {
            x -= this.x5;
            product = (product * this.a5) / this.ONE_20;
        }
        if (x >= this.x6) {
            x -= this.x6;
            product = (product * this.a6) / this.ONE_20;
        }
        if (x >= this.x7) {
            x -= this.x7;
            product = (product * this.a7) / this.ONE_20;
        }
        if (x >= this.x8) {
            x -= this.x8;
            product = (product * this.a8) / this.ONE_20;
        }
        if (x >= this.x9) {
            x -= this.x9;
            product = (product * this.a9) / this.ONE_20;
        }
        // x10 and x11 are unnecessary here since we have high enough precision already.
        // Now we need to compute e^x, where x is small (in particular, it is smaller than x9). We use the Taylor series
        // expansion for e^x: 1 + x + (x^2 / 2!) + (x^3 / 3!) + ... + (x^n / n!).
        let seriesSum = this.ONE_20; // The initial one in the sum, with 20 decimal places.
        let term; // Each term in the sum, where the nth term is (x^n / n!).
        // The first term is simply x.
        term = x;
        seriesSum += term;
        // Each term (x^n / n!) equals the previous one times x, divided by n. Since x is a fixed point number,
        // multiplying by it requires dividing by this.ONE_20, but dividing by the non-fixed point n values does not.
        term = (term * x) / this.ONE_20 / BigInt(2);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(3);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(4);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(5);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(6);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(7);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(8);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(9);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(10);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(11);
        seriesSum += term;
        term = (term * x) / this.ONE_20 / BigInt(12);
        seriesSum += term;
        // 12 Taylor terms are sufficient for 18 decimal precision.
        // We now have the first a_n (with no decimals), and the product of all other a_n present, and the Taylor
        // approximation of the exponentiation of the remainder (both with 20 decimals). All that remains is to multiply
        // all three (one 20 decimal fixed point multiplication, dividing by this.ONE_20, and one integer multiplication),
        // and then drop two digits to return an 18 decimal value.
        return (((product * seriesSum) / this.ONE_20) * firstAN) / BigInt(100);
    }
    static _ln_36(x) {
        // Since ln(1) = 0, a value of x close to one will yield a very small result, which makes using 36 digits
        // worthwhile.
        // First, we transform x to a 36 digit fixed point value.
        x *= this.ONE_18;
        // We will use the following Taylor expansion, which converges very rapidly. Let z = (x - 1) / (x + 1).
        // ln(x) = 2 * (z + z^3 / 3 + z^5 / 5 + z^7 / 7 + ... + z^(2 * n + 1) / (2 * n + 1))
        // Recall that 36 digit fixed point division requires multiplying by ONE_36, and multiplication requires
        // division by ONE_36.
        const z = ((x - this.ONE_36) * this.ONE_36) / (x + this.ONE_36);
        const z_squared = (z * z) / this.ONE_36;
        // num is the numerator of the series: the z^(2 * n + 1) term
        let num = z;
        // seriesSum holds the accumulated sum of each term in the series, starting with the initial z
        let seriesSum = num;
        // In each step, the numerator is multiplied by z^2
        num = (num * z_squared) / this.ONE_36;
        seriesSum += num / BigInt(3);
        num = (num * z_squared) / this.ONE_36;
        seriesSum += num / BigInt(5);
        num = (num * z_squared) / this.ONE_36;
        seriesSum += num / BigInt(7);
        num = (num * z_squared) / this.ONE_36;
        seriesSum += num / BigInt(9);
        num = (num * z_squared) / this.ONE_36;
        seriesSum += num / BigInt(11);
        num = (num * z_squared) / this.ONE_36;
        seriesSum += num / BigInt(13);
        num = (num * z_squared) / this.ONE_36;
        seriesSum += num / BigInt(15);
        // 8 Taylor terms are sufficient for 36 decimal precision.
        // All that remains is multiplying by 2 (non fixed point).
        return seriesSum * BigInt(2);
    }
    /**
     * @dev Internal natural logarithm (ln(a)) with signed 18 decimal fixed point argument.
     */
    static _ln(a) {
        if (a < this.ONE_18) {
            // Since ln(a^k) = k * ln(a), we can compute ln(a) as ln(a) = ln((1/a)^(-1)) = - ln((1/a)). If a is less
            // than one, 1/a will be greater than one, and this if statement will not be entered in the recursive call.
            // Fixed point division requires multiplying by this.ONE_18.
            return BigInt(-1) * this._ln((this.ONE_18 * this.ONE_18) / a);
        }
        // First, we use the fact that ln^(a * b) = ln(a) + ln(b) to decompose ln(a) into a sum of powers of two, which
        // we call x_n, where x_n == 2^(7 - n), which are the natural logarithm of precomputed quantities a_n (that is,
        // ln(a_n) = x_n). We choose the first x_n, x0, to equal 2^7 because the exponential of all larger powers cannot
        // be represented as 18 fixed point decimal numbers in 256 bits, and are therefore larger than a.
        // At the end of this process we will have the sum of all x_n = ln(a_n) that apply, and the remainder of this
        // decomposition, which will be lower than the smallest a_n.
        // ln(a) = k_0 * x_0 + k_1 * x_1 + ... + k_n * x_n + ln(remainder), where each k_n equals either 0 or 1.
        // We mutate a by subtracting a_n, making it the remainder of the decomposition.
        // For reasons related to how `exp` works, the first two a_n (e^(2^7) and e^(2^6)) are not stored as fixed point
        // numbers with 18 decimals, but instead as plain integers with 0 decimals, so we need to multiply them by
        // this.ONE_18 to convert them to fixed point.
        // For each a_n, we test if that term is present in the decomposition (if a is larger than it), and if so divide
        // by it and compute the accumulated sum.
        let sum = BZERO;
        if (a >= this.a0 * this.ONE_18) {
            a /= this.a0; // Integer, not fixed point division
            sum += this.x0;
        }
        if (a >= this.a1 * this.ONE_18) {
            a /= this.a1; // Integer, not fixed point division
            sum += this.x1;
        }
        // All other a_n and x_n are stored as 20 digit fixed point numbers, so we convert the sum and a to this format.
        sum *= BigInt(100);
        a *= BigInt(100);
        // Because further a_n are  20 digit fixed point numbers, we multiply by ONE_20 when dividing by them.
        if (a >= this.a2) {
            a = (a * this.ONE_20) / this.a2;
            sum += this.x2;
        }
        if (a >= this.a3) {
            a = (a * this.ONE_20) / this.a3;
            sum += this.x3;
        }
        if (a >= this.a4) {
            a = (a * this.ONE_20) / this.a4;
            sum += this.x4;
        }
        if (a >= this.a5) {
            a = (a * this.ONE_20) / this.a5;
            sum += this.x5;
        }
        if (a >= this.a6) {
            a = (a * this.ONE_20) / this.a6;
            sum += this.x6;
        }
        if (a >= this.a7) {
            a = (a * this.ONE_20) / this.a7;
            sum += this.x7;
        }
        if (a >= this.a8) {
            a = (a * this.ONE_20) / this.a8;
            sum += this.x8;
        }
        if (a >= this.a9) {
            a = (a * this.ONE_20) / this.a9;
            sum += this.x9;
        }
        if (a >= this.a10) {
            a = (a * this.ONE_20) / this.a10;
            sum += this.x10;
        }
        if (a >= this.a11) {
            a = (a * this.ONE_20) / this.a11;
            sum += this.x11;
        }
        // a is now a small number (smaller than a_11, which roughly equals 1.06). This means we can use a Taylor series
        // that converges rapidly for values of `a` close to one - the same one used in ln_36.
        // Let z = (a - 1) / (a + 1).
        // ln(a) = 2 * (z + z^3 / 3 + z^5 / 5 + z^7 / 7 + ... + z^(2 * n + 1) / (2 * n + 1))
        // Recall that 20 digit fixed point division requires multiplying by ONE_20, and multiplication requires
        // division by ONE_20.
        const z = ((a - this.ONE_20) * this.ONE_20) / (a + this.ONE_20);
        const z_squared = (z * z) / this.ONE_20;
        // num is the numerator of the series: the z^(2 * n + 1) term
        let num = z;
        // seriesSum holds the accumulated sum of each term in the series, starting with the initial z
        let seriesSum = num;
        // In each step, the numerator is multiplied by z^2
        num = (num * z_squared) / this.ONE_20;
        seriesSum += num / BigInt(3);
        num = (num * z_squared) / this.ONE_20;
        seriesSum += num / BigInt(5);
        num = (num * z_squared) / this.ONE_20;
        seriesSum += num / BigInt(7);
        num = (num * z_squared) / this.ONE_20;
        seriesSum += num / BigInt(9);
        num = (num * z_squared) / this.ONE_20;
        seriesSum += num / BigInt(11);
        // 6 Taylor terms are sufficient for 36 decimal precision.
        // Finally, we multiply by 2 (non fixed point) to compute ln(remainder)
        seriesSum *= BigInt(2);
        // We now have the sum of all x_n present, and the Taylor approximation of the logarithm of the remainder (both
        // with 20 decimals). All that remains is to sum these two, and then drop two digits to return a 18 decimal
        // value.
        return (sum + seriesSum) / BigInt(100);
    }
}
// All fixed point multiplications and divisions are inlined. This means we need to divide by ONE when multiplying
// two numbers, and multiply by ONE when dividing them.
// All arguments and return values are 18 decimal fixed point numbers.
LogExpMath.ONE_18 = BigInt('1000000000000000000');
// Internally, intermediate values are computed with higher precision as 20 decimal fixed point numbers, and in the
// case of ln36, 36 decimals.
LogExpMath.ONE_20 = BigInt('100000000000000000000');
LogExpMath.ONE_36 = BigInt('1000000000000000000000000000000000000');
// The domain of natural exponentiation is bound by the word size and number of decimals used.
//
// Because internally the result will be stored using 20 decimals, the largest possible result is
// (2^255 - 1) / 10^20, which makes the largest exponent ln((2^255 - 1) / 10^20) = 130.700829182905140221.
// The smallest possible result is 10^(-18), which makes largest negative argument
// ln(10^(-18)) = -41.446531673892822312.
// We use 130.0 and -41.0 to have some safety margin.
LogExpMath.MAX_NATURAL_EXPONENT = BigInt('130000000000000000000');
LogExpMath.MIN_NATURAL_EXPONENT = BigInt('-41000000000000000000');
// Bounds for ln_36's argument. Both ln(0.9) and ln(1.1) can be represented with 36 decimal places in a fixed point
// 256 bit integer.
LogExpMath.LN_36_LOWER_BOUND = BigInt(LogExpMath.ONE_18) - BigInt('100000000000000000');
LogExpMath.LN_36_UPPER_BOUND = BigInt(LogExpMath.ONE_18) + BigInt('100000000000000000');
LogExpMath.MILD_EXPONENT_BOUND = BigInt(2) ** BigInt(254) / LogExpMath.ONE_20;
// 18 decimal constants
LogExpMath.x0 = BigInt('128000000000000000000'); // 2ˆ7
LogExpMath.a0 = BigInt('38877084059945950922200000000000000000000000000000000000'); // eˆ(x0) (no decimals)
LogExpMath.x1 = BigInt('64000000000000000000'); // 2ˆ6
LogExpMath.a1 = BigInt('6235149080811616882910000000'); // eˆ(x1) (no decimals)
// 20 decimal constants
LogExpMath.x2 = BigInt('3200000000000000000000'); // 2ˆ5
LogExpMath.a2 = BigInt('7896296018268069516100000000000000'); // eˆ(x2)
LogExpMath.x3 = BigInt('1600000000000000000000'); // 2ˆ4
LogExpMath.a3 = BigInt('888611052050787263676000000'); // eˆ(x3)
LogExpMath.x4 = BigInt('800000000000000000000'); // 2ˆ3
LogExpMath.a4 = BigInt('298095798704172827474000'); // eˆ(x4)
LogExpMath.x5 = BigInt('400000000000000000000'); // 2ˆ2
LogExpMath.a5 = BigInt('5459815003314423907810'); // eˆ(x5)
LogExpMath.x6 = BigInt('200000000000000000000'); // 2ˆ1
LogExpMath.a6 = BigInt('738905609893065022723'); // eˆ(x6)
LogExpMath.x7 = BigInt('100000000000000000000'); // 2ˆ0
LogExpMath.a7 = BigInt('271828182845904523536'); // eˆ(x7)
LogExpMath.x8 = BigInt('50000000000000000000'); // 2ˆ-1
LogExpMath.a8 = BigInt('164872127070012814685'); // eˆ(x8)
LogExpMath.x9 = BigInt('25000000000000000000'); // 2ˆ-2
LogExpMath.a9 = BigInt('128402541668774148407'); // eˆ(x9)
LogExpMath.x10 = BigInt('12500000000000000000'); // 2ˆ-3
LogExpMath.a10 = BigInt('113314845306682631683'); // eˆ(x10)
LogExpMath.x11 = BigInt('6250000000000000000'); // 2ˆ-4
LogExpMath.a11 = BigInt('106449445891785942956'); // eˆ(x11)

const MAX_INVARIANT_RATIO = BigInt('3000000000000000000'); // 3e18
// The following function are BigInt versions implemented by Sergio.
// BigInt was requested from integrators as it is more efficient.
// Swap outcomes formulas should match exactly those from smart contracts.
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _calcOutGivenIn$3(balanceIn, weightIn, balanceOut, weightOut, amountIn, fee) {
    // is it necessary to check ranges of variables? same for the other functions
    amountIn = subtractFee$1(amountIn, fee);
    const exponent = MathSol.divDownFixed(weightIn, weightOut);
    const denominator = MathSol.add(balanceIn, amountIn);
    const base = MathSol.divUpFixed(balanceIn, denominator);
    const power = MathSol.powUpFixed(base, exponent);
    return MathSol.mulDownFixed(balanceOut, MathSol.complementFixed(power));
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _calcInGivenOut$3(balanceIn, weightIn, balanceOut, weightOut, amountOut, fee) {
    const base = MathSol.divUpFixed(balanceOut, balanceOut - amountOut);
    const exponent = MathSol.divUpFixed(weightOut, weightIn);
    const power = MathSol.powUpFixed(base, exponent);
    const ratio = MathSol.sub(power, MathSol.ONE);
    const amountIn = MathSol.mulUpFixed(balanceIn, ratio);
    return addFee$2(amountIn, fee);
}
function subtractFee$1(amount, fee) {
    const feeAmount = MathSol.mulUpFixed(amount, fee);
    return amount - feeAmount;
}
function addFee$2(amount, fee) {
    return MathSol.divUpFixed(amount, MathSol.complementFixed(fee));
}
// TO DO - Swap old versions of these in Pool for the BigInt version
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOutBigInt(balanceIn, weightIn, balanceOut, weightOut, amountIn, fee) {
    const numerator = MathSol.mulUpFixed(balanceIn, weightOut);
    let denominator = MathSol.mulUpFixed(balanceOut, weightIn);
    const feeComplement = MathSol.complementFixed(fee);
    denominator = MathSol.mulUpFixed(denominator, feeComplement);
    const base = MathSol.divUpFixed(balanceIn, MathSol.add(MathSol.mulUpFixed(amountIn, feeComplement), balanceIn));
    const exponent = MathSol.divUpFixed(weightIn + weightOut, weightOut);
    denominator = MathSol.mulUpFixed(denominator, MathSol.powUpFixed(base, exponent));
    return MathSol.divUpFixed(numerator, denominator);
    //        -(
    //            (Bi * wo) /
    //            (Bo * (-1 + f) * (Bi / (Ai + Bi - Ai * f)) ** ((wi + wo) / wo) * wi)
    //        )
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOutBigInt(balanceIn, weightIn, balanceOut, weightOut, amountOut, fee) {
    let numerator = MathSol.mulUpFixed(balanceIn, weightOut);
    const feeComplement = MathSol.complementFixed(fee);
    const base = MathSol.divUpFixed(balanceOut, MathSol.sub(balanceOut, amountOut));
    const exponent = MathSol.divUpFixed(weightIn + weightOut, weightIn);
    numerator = MathSol.mulUpFixed(numerator, MathSol.powUpFixed(base, exponent));
    const denominator = MathSol.mulUpFixed(MathSol.mulUpFixed(balanceOut, weightIn), feeComplement);
    return MathSol.divUpFixed(numerator, denominator);
    //        -(
    //            (Bi * (Bo / (-Ao + Bo)) ** ((wi + wo) / wi) * wo) /
    //            (Bo * (-1 + f) * wi)
    //        )
}
/**
 * Calculates BPT for given tokens in. Note all numbers use upscaled amounts. e.g. 1USDC = 1e18.
 * @param balances Pool balances.
 * @param normalizedWeights Token weights.
 * @param amountsIn Amount of each token.
 * @param bptTotalSupply Total BPT of pool.
 * @param swapFeePercentage Swap fee percentage.
 * @returns BPT out.
 */
function _calcBptOutGivenExactTokensIn$1(balances, normalizedWeights, amountsIn, bptTotalSupply, swapFeePercentage) {
    const balanceRatiosWithFee = new Array(amountsIn.length);
    let invariantRatioWithFees = BZERO;
    for (let i = 0; i < balances.length; i++) {
        balanceRatiosWithFee[i] = MathSol.divDownFixed(MathSol.add(balances[i], amountsIn[i]), balances[i]);
        invariantRatioWithFees = MathSol.add(invariantRatioWithFees, MathSol.mulDownFixed(balanceRatiosWithFee[i], normalizedWeights[i]));
    }
    let invariantRatio = MathSol.ONE;
    for (let i = 0; i < balances.length; i++) {
        let amountInWithoutFee;
        if (balanceRatiosWithFee[i] > invariantRatioWithFees) {
            const nonTaxableAmount = MathSol.mulDownFixed(balances[i], MathSol.sub(invariantRatioWithFees, MathSol.ONE));
            const taxableAmount = MathSol.sub(amountsIn[i], nonTaxableAmount);
            const swapFee = MathSol.mulUpFixed(taxableAmount, swapFeePercentage);
            amountInWithoutFee = MathSol.add(nonTaxableAmount, MathSol.sub(taxableAmount, swapFee));
        }
        else {
            amountInWithoutFee = amountsIn[i];
        }
        const balanceRatio = MathSol.divDownFixed(MathSol.add(balances[i], amountInWithoutFee), balances[i]);
        invariantRatio = MathSol.mulDownFixed(invariantRatio, MathSol.powDown(balanceRatio, normalizedWeights[i]));
    }
    if (invariantRatio > MathSol.ONE) {
        return MathSol.mulDownFixed(bptTotalSupply, MathSol.sub(invariantRatio, MathSol.ONE));
    }
    else {
        return BZERO;
    }
}
function _calcTokensOutGivenExactBptIn$1(balances, bptAmountIn, totalBPT) {
    /**********************************************************************************************
    // exactBPTInForTokensOut                                                                    //
    // (per token)                                                                               //
    // aO = amountOut                  /        bptIn         \                                  //
    // b = balance           a0 = b * | ---------------------  |                                 //
    // bptIn = bptAmountIn             \       totalBPT       /                                  //
    // bpt = totalBPT                                                                            //
    **********************************************************************************************/
    // Since we're computing an amount out, we round down overall. This means rounding down on both the
    // multiplication and division.
    const bptRatio = MathSol.divDownFixed(bptAmountIn, totalBPT);
    const amountsOut = new Array(balances.length);
    for (let i = 0; i < balances.length; i++) {
        amountsOut[i] = MathSol.mulDownFixed(balances[i], bptRatio);
    }
    return amountsOut;
}
function _calcTokenOutGivenExactBptIn$1(balance, normalizedWeight, bptAmountIn, bptTotalSupply, swapFeePercentage) {
    /*****************************************************************************************
        // exactBPTInForTokenOut                                                                //
        // a = amountOut                                                                        //
        // b = balance                     /      /    totalBPT - bptIn       \    (1 / w)  \   //
        // bptIn = bptAmountIn    a = b * |  1 - | --------------------------  | ^           |  //
        // bpt = totalBPT                  \      \       totalBPT            /             /   //
        // w = weight                                                                           //
        *****************************************************************************************/
    // Token out, so we round down overall. The multiplication rounds down, but the power rounds up (so the base
    // rounds up). Because (totalBPT - bptIn) / totalBPT <= 1, the exponent rounds down.
    // Calculate the factor by which the invariant will decrease after burning BPTAmountIn
    const invariantRatio = MathSol.divUpFixed(MathSol.sub(bptTotalSupply, bptAmountIn), bptTotalSupply);
    // Calculate by how much the token balance has to decrease to match invariantRatio
    const balanceRatio = MathSol.powUpFixed(invariantRatio, MathSol.divDownFixed(MathSol.ONE, normalizedWeight));
    // Because of rounding up, balanceRatio can be greater than one. Using complement prevents reverts.
    const amountOutWithoutFee = MathSol.mulDownFixed(balance, MathSol.complementFixed(balanceRatio));
    // We can now compute how much excess balance is being withdrawn as a result of the virtual swaps, which result
    // in swap fees.
    // Swap fees are typically charged on 'token in', but there is no 'token in' here, so we apply it
    // to 'token out'. This results in slightly larger price impact. Fees are rounded up.
    const taxableAmount = MathSol.mulUpFixed(amountOutWithoutFee, MathSol.complementFixed(normalizedWeight));
    const nonTaxableAmount = MathSol.sub(amountOutWithoutFee, taxableAmount);
    const swapFee = MathSol.mulUpFixed(taxableAmount, swapFeePercentage);
    const amountOut = MathSol.add(nonTaxableAmount, MathSol.sub(taxableAmount, swapFee));
    return amountOut;
}
function _calcBptInGivenExactTokensOut$1(balances, normalizedWeights, amountsOut, bptTotalSupply, swapFeePercentage) {
    // BPT in, so we round up overall.
    const balanceRatiosWithoutFee = new Array(amountsOut.length);
    let invariantRatioWithoutFees = BZERO;
    for (let i = 0; i < balances.length; i++) {
        balanceRatiosWithoutFee[i] = MathSol.divUpFixed(MathSol.sub(balances[i], amountsOut[i]), balances[i]);
        invariantRatioWithoutFees = MathSol.add(invariantRatioWithoutFees, MathSol.mulUpFixed(balanceRatiosWithoutFee[i], normalizedWeights[i]));
    }
    const invariantRatio = _computeExitExactTokensOutInvariantRatio(balances, normalizedWeights, amountsOut, balanceRatiosWithoutFee, invariantRatioWithoutFees, swapFeePercentage);
    return MathSol.mulUpFixed(bptTotalSupply, MathSol.complementFixed(invariantRatio));
}
const _calcTokenInGivenExactBptOut$1 = (balance, normalizedWeight, bptAmountOut, bptTotalSupply, swapFee) => {
    /*****************************************************************************************
    // tokenInForExactBptOut                                                                //
    // a = amountIn                                                                         //
    // b = balance                      /  /     bpt + bptOut     \    (1 / w)      \       //
    // bptOut = bptAmountOut   a = b * |  | ---------------------- | ^          - 1  |      //
    // bpt = bptTotalSupply             \  \         bpt          /                 /       //
    // w = normalizedWeight                                                                 //
    *****************************************************************************************/
    // Token in, so we round up overall
    // Calculate the factor by which the invariant will increase after minting `bptAmountOut`
    const invariantRatio = MathSol.divUpFixed(MathSol.add(bptTotalSupply, bptAmountOut), bptTotalSupply);
    if (invariantRatio > MAX_INVARIANT_RATIO) {
        throw new Error('MAX_OUT_BPT_FOR_TOKEN_IN');
    }
    // Calculate by how much the token balance has to increase to cause `invariantRatio`
    const balanceRatio = MathSol.powUpFixed(invariantRatio, MathSol.divUpFixed(MathSol.ONE, normalizedWeight));
    const amountInWithoutFee = MathSol.mulUpFixed(balance, MathSol.sub(balanceRatio, MathSol.ONE));
    // We can now compute how much extra balance is being deposited and used in virtual swaps, and charge swap fees accordingly
    const taxablePercentage = MathSol.complementFixed(normalizedWeight);
    const taxableAmount = MathSol.mulUpFixed(amountInWithoutFee, taxablePercentage);
    const nonTaxableAmount = MathSol.sub(amountInWithoutFee, taxableAmount);
    return MathSol.add(nonTaxableAmount, MathSol.divUpFixed(taxableAmount, MathSol.complementFixed(swapFee)));
};
/**
 * @dev Intermediate function to avoid stack-too-deep errors.
 */
function _computeExitExactTokensOutInvariantRatio(balances, normalizedWeights, amountsOut, balanceRatiosWithoutFee, invariantRatioWithoutFees, swapFeePercentage) {
    let invariantRatio = MathSol.ONE;
    for (let i = 0; i < balances.length; i++) {
        // Swap fees are typically charged on 'token in', but there is no 'token in' here, so we apply it to
        // 'token out'. This results in slightly larger price impact.
        let amountOutWithFee;
        if (invariantRatioWithoutFees > balanceRatiosWithoutFee[i]) {
            const nonTaxableAmount = MathSol.mulDownFixed(balances[i], MathSol.complementFixed(invariantRatioWithoutFees));
            const taxableAmount = MathSol.sub(amountsOut[i], nonTaxableAmount);
            const taxableAmountPlusFees = MathSol.divUpFixed(taxableAmount, MathSol.complementFixed(swapFeePercentage));
            amountOutWithFee = MathSol.add(nonTaxableAmount, taxableAmountPlusFees);
        }
        else {
            amountOutWithFee = amountsOut[i];
        }
        const balanceRatio = MathSol.divDownFixed(MathSol.sub(balances[i], amountOutWithFee), balances[i]);
        invariantRatio = MathSol.mulDownFixed(invariantRatio, MathSol.powDown(balanceRatio, normalizedWeights[i]));
    }
    return invariantRatio;
}
// Invariant is used to collect protocol swap fees by comparing its value between two times.
// So we can round always to the same direction. It is also used to initiate the BPT amount
// and, because there is a minimum BPT, we round down the invariant.
function _calculateInvariant$3(normalizedWeights, balances) {
    /**********************************************************************************************
    // invariant               _____                                                             //
    // wi = weight index i      | |      wi                                                      //
    // bi = balance index i     | |  bi ^   = i                                                  //
    // i = invariant                                                                             //
    **********************************************************************************************/
    let invariant = MathSol.ONE;
    for (let i = 0; i < normalizedWeights.length; i++) {
        invariant = MathSol.mulDownFixed(invariant, MathSol.powDown(balances[i], normalizedWeights[i]));
    }
    if (invariant < 0)
        throw Error('Weighted Invariant < 0');
    return invariant;
}
function _calcDueProtocolSwapFeeBptAmount(totalSupply, previousInvariant, currentInvariant, protocolSwapFeePercentage) {
    // We round down to prevent issues in the Pool's accounting, even if it means paying slightly less in protocol
    // fees to the Vault.
    const growth = MathSol.divDownFixed(currentInvariant, previousInvariant);
    // Shortcut in case there was no growth when comparing the current against the previous invariant.
    // This shouldn't happen outside of rounding errors, but have this safeguard nonetheless to prevent the Pool
    // from entering a locked state in which joins and exits revert while computing accumulated swap fees.
    if (growth <= MathSol.ONE) {
        return BZERO;
    }
    // Assuming the Pool is balanced and token weights have not changed, a growth of the invariant translates into
    // proportional growth of all token balances. The protocol is due a percentage of that growth: more precisely,
    // it is due `k = protocol fee * (growth - 1) * balance / growth` for each token.
    // We compute the amount of BPT to mint for the protocol that would allow it to proportionally exit the Pool and
    // receive these balances. Note that the total BPT supply will increase when minting, so we need to account for
    // this in order to compute the percentage of Pool ownership the protocol will have.
    // The formula is:
    //
    // toMint = supply * k / (1 - k)
    // We compute protocol fee * (growth - 1) / growth, as we'll use that value twice.
    // There is no need to use SafeMath since we already checked growth is strictly greater than one.
    const k = MathSol.divDownFixed(MathSol.mulDownFixed(protocolSwapFeePercentage, growth - MathSol.ONE), growth);
    const numerator = MathSol.mulDownFixed(totalSupply, k);
    const denominator = MathSol.complementFixed(k);
    return denominator == BZERO
        ? BZERO
        : MathSol.divDownFixed(numerator, denominator);
}
// spotPriceAfterSwap
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOut$4(amount, poolPairData) {
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const wi = parseFloat(bignumber.formatFixed(poolPairData.weightIn, 18));
    const wo = parseFloat(bignumber.formatFixed(poolPairData.weightOut, 18));
    const Ai = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum(-((Bi * wo) /
        (Bo * (-1 + f) * (Bi / (Ai + Bi - Ai * f)) ** ((wi + wo) / wo) * wi)));
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOut$4(amount, poolPairData) {
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const wi = parseFloat(bignumber.formatFixed(poolPairData.weightIn, 18));
    const wo = parseFloat(bignumber.formatFixed(poolPairData.weightOut, 18));
    const Ao = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum(-((Bi * (Bo / (-Ao + Bo)) ** ((wi + wo) / wi) * wo) /
        (Bo * (-1 + f) * wi)));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForBPTOut$2(amount, poolPairData) {
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bbpt = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const wi = parseFloat(bignumber.formatFixed(poolPairData.weightIn, 18));
    const Ai = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum((Bi * ((Ai + Bi + Ai * f * (-1 + wi)) / Bi) ** (1 - wi)) /
        (Bbpt * (1 + f * (-1 + wi)) * wi));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapBptOutGivenExactTokenInBigInt(balanceIn, balanceOut, weightIn, amountIn, swapFeeRatio) {
    const feeFactor = MathSol.ONE -
        MathSol.mulDownFixed(MathSol.complementFixed(weightIn), swapFeeRatio);
    const denominatorFactor = MathSol.powDown(MathSol.ONE + (amountIn * feeFactor) / balanceIn, MathSol.complementFixed(weightIn));
    return MathSol.divDownFixed(MathSol.ONE, (balanceOut * weightIn * feeFactor) / (balanceIn * denominatorFactor));
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactBPTInForTokenOut$2(amount, poolPairData) {
    const Bbpt = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const wo = parseFloat(bignumber.formatFixed(poolPairData.weightOut, 18));
    const Aibpt = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee));
    return bnum(((1 - Aibpt / Bbpt) ** ((-1 + wo) / wo) *
        Bbpt *
        (1 + f * (-1 + wo)) *
        wo) /
        Bo);
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapBPTInForExactTokenOut$2(amount, poolPairData) {
    const Bbpt = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, 18));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const wo = parseFloat(bignumber.formatFixed(poolPairData.weightOut, 18));
    const Ao = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum((Bbpt *
        (1 + f * (-1 + wo)) *
        wo *
        (1 + (Ao * (-1 + f - f * wo)) / Bo) ** (-1 + wo)) /
        Bo);
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactBPTOut$3(amount, poolPairData) {
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bbpt = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, 18));
    const wi = parseFloat(bignumber.formatFixed(poolPairData.weightIn, 18));
    const Aobpt = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum((((Aobpt + Bbpt) / Bbpt) ** (1 / wi) * Bi) /
        ((Aobpt + Bbpt) * (1 + f * (-1 + wi)) * wi));
}
/////////
///  Derivatives of spotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$5(amount, poolPairData) {
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const wi = parseFloat(bignumber.formatFixed(poolPairData.weightIn, 18));
    const wo = parseFloat(bignumber.formatFixed(poolPairData.weightOut, 18));
    const Ai = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum((wi + wo) / (Bo * (Bi / (Ai + Bi - Ai * f)) ** (wi / wo) * wi));
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$5(amount, poolPairData) {
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const wi = parseFloat(bignumber.formatFixed(poolPairData.weightIn, 18));
    const wo = parseFloat(bignumber.formatFixed(poolPairData.weightOut, 18));
    const Ao = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum(-((Bi * (Bo / (-Ao + Bo)) ** (wo / wi) * wo * (wi + wo)) /
        ((Ao - Bo) ** 2 * (-1 + f) * wi ** 2)));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForBPTOut$1(amount, poolPairData) {
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bbpt = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, 18));
    const wi = parseFloat(bignumber.formatFixed(poolPairData.weightIn, 18));
    const Ai = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum(-((-1 + wi) / (Bbpt * ((Ai + Bi + Ai * f * (-1 + wi)) / Bi) ** wi * wi)));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactBPTOut$1(amount, poolPairData) {
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bbpt = parseFloat(bignumber.formatFixed(poolPairData.balanceOut.toNumber(), 18));
    const wi = parseFloat(bignumber.formatFixed(poolPairData.weightIn, 18));
    const Aobpt = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum(-((((Aobpt + Bbpt) / Bbpt) ** (1 / wi) * Bi * (-1 + wi)) /
        ((Aobpt + Bbpt) ** 2 * (1 + f * (-1 + wi)) * wi ** 2)));
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactBPTInForTokenOut$1(amount, poolPairData) {
    const Bbpt = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, 18));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const wo = parseFloat(bignumber.formatFixed(poolPairData.weightOut, 18));
    const Aibpt = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    return bnum(-(((1 + f * (-1 + wo)) * (-1 + wo)) /
        ((1 - Aibpt / Bbpt) ** (1 / wo) * Bo)));
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapBPTInForExactTokenOut$1(amount, poolPairData) {
    const Bbpt = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, 18));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const wo = parseFloat(bignumber.formatFixed(poolPairData.weightOut));
    const Ao = amount.toNumber();
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee));
    return bnum(-((Bbpt *
        (1 + f * (-1 + wo)) ** 2 *
        (-1 + wo) *
        wo *
        (1 + (Ao * (-1 + f - f * wo)) / Bo) ** (-2 + wo)) /
        Bo ** 2));
}

var weightedMath = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _calcOutGivenIn: _calcOutGivenIn$3,
    _calcInGivenOut: _calcInGivenOut$3,
    _spotPriceAfterSwapExactTokenInForTokenOutBigInt: _spotPriceAfterSwapExactTokenInForTokenOutBigInt,
    _spotPriceAfterSwapTokenInForExactTokenOutBigInt: _spotPriceAfterSwapTokenInForExactTokenOutBigInt,
    _calcBptOutGivenExactTokensIn: _calcBptOutGivenExactTokensIn$1,
    _calcTokensOutGivenExactBptIn: _calcTokensOutGivenExactBptIn$1,
    _calcTokenOutGivenExactBptIn: _calcTokenOutGivenExactBptIn$1,
    _calcBptInGivenExactTokensOut: _calcBptInGivenExactTokensOut$1,
    _calcTokenInGivenExactBptOut: _calcTokenInGivenExactBptOut$1,
    _calculateInvariant: _calculateInvariant$3,
    _calcDueProtocolSwapFeeBptAmount: _calcDueProtocolSwapFeeBptAmount,
    _spotPriceAfterSwapExactTokenInForTokenOut: _spotPriceAfterSwapExactTokenInForTokenOut$4,
    _spotPriceAfterSwapTokenInForExactTokenOut: _spotPriceAfterSwapTokenInForExactTokenOut$4,
    _spotPriceAfterSwapExactTokenInForBPTOut: _spotPriceAfterSwapExactTokenInForBPTOut$2,
    _spotPriceAfterSwapBptOutGivenExactTokenInBigInt: _spotPriceAfterSwapBptOutGivenExactTokenInBigInt,
    _spotPriceAfterSwapExactBPTInForTokenOut: _spotPriceAfterSwapExactBPTInForTokenOut$2,
    _spotPriceAfterSwapBPTInForExactTokenOut: _spotPriceAfterSwapBPTInForExactTokenOut$2,
    _spotPriceAfterSwapTokenInForExactBPTOut: _spotPriceAfterSwapTokenInForExactBPTOut$3,
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut: _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$5,
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut: _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$5,
    _derivativeSpotPriceAfterSwapExactTokenInForBPTOut: _derivativeSpotPriceAfterSwapExactTokenInForBPTOut$1,
    _derivativeSpotPriceAfterSwapTokenInForExactBPTOut: _derivativeSpotPriceAfterSwapTokenInForExactBPTOut$1,
    _derivativeSpotPriceAfterSwapExactBPTInForTokenOut: _derivativeSpotPriceAfterSwapExactBPTInForTokenOut$1,
    _derivativeSpotPriceAfterSwapBPTInForExactTokenOut: _derivativeSpotPriceAfterSwapBPTInForExactTokenOut$1
});

var PairTypes$2;
(function (PairTypes) {
    PairTypes[PairTypes["BptToToken"] = 0] = "BptToToken";
    PairTypes[PairTypes["TokenToBpt"] = 1] = "TokenToBpt";
    PairTypes[PairTypes["TokenToToken"] = 2] = "TokenToToken";
})(PairTypes$2 || (PairTypes$2 = {}));
class WeightedPool {
    constructor(id, address, swapFee, totalWeight, totalShares, tokens, tokensList) {
        this.poolType = exports.PoolTypes.Weighted;
        this.MAX_IN_RATIO = bignumber.parseFixed('0.3', 18);
        this.MAX_OUT_RATIO = bignumber.parseFixed('0.3', 18);
        this.isLBP = false;
        this.id = id;
        this.address = address;
        this.swapFee = bignumber.parseFixed(swapFee, 18);
        this.totalShares = bignumber.parseFixed(totalShares, 18);
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.totalWeight = bignumber.parseFixed(totalWeight, 18);
    }
    static fromPool(pool, isLBP) {
        if (!pool.totalWeight)
            throw new Error('WeightedPool missing totalWeight');
        const weightedPool = new WeightedPool(pool.id, pool.address, pool.swapFee, pool.totalWeight, pool.totalShares, pool.tokens, pool.tokensList);
        if (isLBP)
            weightedPool.isLBP = true;
        return weightedPool;
    }
    parsePoolPairData(tokenIn, tokenOut) {
        const tokenIndexIn = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenIn));
        if (tokenIndexIn < 0)
            throw 'Pool does not contain tokenIn';
        const tI = this.tokens[tokenIndexIn];
        const balanceIn = tI.balance;
        const decimalsIn = tI.decimals;
        const weightIn = bignumber.parseFixed(tI.weight, 18)
            .mul(constants.WeiPerEther)
            .div(this.totalWeight);
        const tokenIndexOut = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenOut));
        if (tokenIndexOut < 0)
            throw 'Pool does not contain tokenOut';
        const tO = this.tokens[tokenIndexOut];
        const balanceOut = tO.balance;
        const decimalsOut = tO.decimals;
        const weightOut = bignumber.parseFixed(tO.weight, 18)
            .mul(constants.WeiPerEther)
            .div(this.totalWeight);
        let pairType;
        if (tokenIn == this.address) {
            pairType = PairTypes$2.BptToToken;
        }
        else if (tokenOut == this.address) {
            pairType = PairTypes$2.TokenToBpt;
        }
        else {
            pairType = PairTypes$2.TokenToToken;
        }
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            balanceIn: bignumber.parseFixed(balanceIn, decimalsIn),
            balanceOut: bignumber.parseFixed(balanceOut, decimalsOut),
            pairType: pairType,
            weightIn: weightIn,
            weightOut: weightOut,
            swapFee: this.swapFee,
        };
        return poolPairData;
    }
    getNormalizedWeights() {
        return this.tokens.map((t) => bignumber.parseFixed(t.weight, 18).mul(constants.WeiPerEther).div(this.totalWeight).toBigInt());
    }
    // Normalized liquidity is an abstract term that can be thought of the
    // inverse of the slippage. It is proportional to the token balances in the
    // pool but also depends on the shape of the invariant curve.
    // As a standard, we define normalized liquidity in tokenOut
    getNormalizedLiquidity(poolPairData) {
        // this should be different if tokenIn or tokenOut are the BPT
        return bnum(bignumber.formatFixed(poolPairData.balanceOut
            .mul(poolPairData.weightIn)
            .div(poolPairData.weightIn.add(poolPairData.weightOut)), poolPairData.decimalsOut));
    }
    getLimitAmountSwap(poolPairData, swapType) {
        if (swapType === exports.SwapTypes.SwapExactIn) {
            return bnum(bignumber.formatFixed(poolPairData.balanceIn.mul(this.MAX_IN_RATIO).div(constants.WeiPerEther), poolPairData.decimalsIn));
        }
        else {
            return bnum(bignumber.formatFixed(poolPairData.balanceOut.mul(this.MAX_OUT_RATIO).div(constants.WeiPerEther), poolPairData.decimalsOut));
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (isSameAddress(this.address, token)) {
            this.totalShares = newBalance;
        }
        // token is underlying in the pool
        const T = this.tokens.find((t) => isSameAddress(t.address, token));
        if (!T)
            throw Error('Pool does not contain this token');
        T.balance = bignumber.formatFixed(newBalance, T.decimals);
    }
    // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
    // i.e. when using token with 2decimals 0.002 should be returned as 0
    // Uses ROUND_DOWN mode (1)
    // calcOutGivenIn
    _exactTokenInForTokenOut(poolPairData, amount) {
        if (amount.isNaN())
            return amount;
        const amountIn = bignumber.parseFixed(amount.dp(18, 1).toString(), 18).toBigInt();
        const decimalsIn = poolPairData.decimalsIn;
        const decimalsOut = poolPairData.decimalsOut;
        const balanceIn = takeToPrecision18(poolPairData.balanceIn, decimalsIn).toBigInt();
        const balanceOut = takeToPrecision18(poolPairData.balanceOut, decimalsOut).toBigInt();
        const normalizedWeightIn = poolPairData.weightIn.toBigInt();
        const normalizedWeightOut = poolPairData.weightOut.toBigInt();
        const swapFee = poolPairData.swapFee.toBigInt();
        let returnAmt;
        try {
            if (poolPairData.pairType === PairTypes$2.TokenToBpt) {
                returnAmt = _calcBptOutGivenExactTokensIn$1([balanceIn, BigInt(1)], [normalizedWeightIn, MathSol.ONE - normalizedWeightIn], [amountIn, BigInt(0)], balanceOut, swapFee);
            }
            else if (poolPairData.pairType === PairTypes$2.BptToToken) {
                returnAmt = _calcTokenOutGivenExactBptIn$1(balanceOut, normalizedWeightOut, amountIn, balanceIn, swapFee);
            }
            else {
                returnAmt = _calcOutGivenIn$3(balanceIn, normalizedWeightIn, balanceOut, normalizedWeightOut, amountIn, swapFee);
            }
            // return human scaled
            return scale(bnum(returnAmt.toString()), -18);
        }
        catch (err) {
            return ZERO;
        }
    }
    // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
    // i.e. when using token with 2decimals 0.002 should be returned as 0
    // Uses ROUND_UP mode (0)
    // calcInGivenOut
    _tokenInForExactTokenOut(poolPairData, amount) {
        if (amount.isNaN())
            return amount;
        const amountOut = bignumber.parseFixed(amount.dp(18, 1).toString(), 18).toBigInt();
        const decimalsIn = poolPairData.decimalsIn;
        const decimalsOut = poolPairData.decimalsOut;
        const balanceIn = takeToPrecision18(poolPairData.balanceIn, decimalsIn).toBigInt();
        const balanceOut = takeToPrecision18(poolPairData.balanceOut, decimalsOut).toBigInt();
        const normalizedWeightIn = poolPairData.weightIn.toBigInt();
        const normalizedWeightOut = poolPairData.weightOut.toBigInt();
        const swapFee = poolPairData.swapFee.toBigInt();
        let returnAmt;
        try {
            if (poolPairData.pairType === PairTypes$2.TokenToBpt) {
                returnAmt = _calcTokenInGivenExactBptOut$1(balanceIn, normalizedWeightIn, amountOut, balanceOut, swapFee);
            }
            else if (poolPairData.pairType === PairTypes$2.BptToToken) {
                returnAmt = _calcBptInGivenExactTokensOut$1([balanceOut, BigInt(1)], [normalizedWeightOut, MathSol.ONE - normalizedWeightOut], [amountOut, BigInt(0)], balanceIn, swapFee);
            }
            else {
                returnAmt = _calcInGivenOut$3(balanceIn, normalizedWeightIn, balanceOut, normalizedWeightOut, amountOut, swapFee);
            }
            // return human scaled
            return scale(bnum(returnAmt.toString()), -18);
        }
        catch (err) {
            return ZERO;
        }
    }
    /**
     * _calcTokensOutGivenExactBptIn
     * @param bptAmountIn EVM scale.
     * @returns EVM scale.
     */
    _calcTokensOutGivenExactBptIn(bptAmountIn) {
        // token balances are stored in human scale and must be EVM for maths
        const balancesEvm = this.tokens
            .filter((t) => !isSameAddress(t.address, this.address))
            .map((t) => bignumber.parseFixed(t.balance, t.decimals).toBigInt());
        let returnAmt;
        try {
            returnAmt = _calcTokensOutGivenExactBptIn$1(balancesEvm, bptAmountIn.toBigInt(), this.totalShares.toBigInt());
            return returnAmt.map((a) => bignumber.BigNumber.from(a.toString()));
        }
        catch (err) {
            return new Array(balancesEvm.length).fill(ZERO);
        }
    }
    /**
     * _calcBptOutGivenExactTokensIn
     * @param amountsIn EVM Scale
     * @returns EVM Scale
     */
    _calcBptOutGivenExactTokensIn(amountsIn) {
        try {
            // token balances are stored in human scale and must be EVM for maths
            const balancesEvm = this.tokens
                .filter((t) => !isSameAddress(t.address, this.address))
                .map((t) => bignumber.parseFixed(t.balance, t.decimals).toBigInt());
            const bptAmountOut = _calcBptOutGivenExactTokensIn$1(balancesEvm, this.getNormalizedWeights(), amountsIn.map((a) => a.toBigInt()), this.totalShares.toBigInt(), this.swapFee.toBigInt());
            return bignumber.BigNumber.from(bptAmountOut.toString());
        }
        catch (err) {
            return constants.Zero;
        }
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        if (poolPairData.pairType === PairTypes$2.TokenToBpt) {
            return _spotPriceAfterSwapExactTokenInForBPTOut$2(amount, poolPairData);
        }
        else if (poolPairData.pairType === PairTypes$2.BptToToken) {
            return _spotPriceAfterSwapExactBPTInForTokenOut$2(amount, poolPairData);
        }
        else {
            return _spotPriceAfterSwapExactTokenInForTokenOut$4(amount, poolPairData);
        }
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        if (poolPairData.pairType === PairTypes$2.TokenToBpt) {
            return _spotPriceAfterSwapTokenInForExactBPTOut$3(amount, poolPairData);
        }
        else if (poolPairData.pairType === PairTypes$2.BptToToken) {
            return _spotPriceAfterSwapBPTInForExactTokenOut$2(amount, poolPairData);
        }
        else {
            return _spotPriceAfterSwapTokenInForExactTokenOut$4(amount, poolPairData);
        }
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        if (poolPairData.pairType === PairTypes$2.TokenToBpt) {
            return _derivativeSpotPriceAfterSwapExactTokenInForBPTOut$1(amount, poolPairData);
        }
        else if (poolPairData.pairType === PairTypes$2.BptToToken) {
            return _derivativeSpotPriceAfterSwapExactBPTInForTokenOut$1(amount, poolPairData);
        }
        else {
            return _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$5(amount, poolPairData);
        }
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$5(amount, poolPairData);
    }
}

// All functions are adapted from the solidity ones to be found on:
// https://github.com/balancer-labs/balancer-core-v2/blob/master/contracts/pools/stable/StableMath.sol
// TODO: implement all up and down rounding variations
/**********************************************************************************************
    // invariant                                                                                 //
    // D = invariant to compute                                                                  //
    // A = amplifier                n * D^2 + A * n^n * S * (n^n * P / D^(n−1))                  //
    // S = sum of balances         ____________________________________________                  //
    // P = product of balances    (n+1) * D + ( A * n^n − 1)* (n^n * P / D^(n−1))                //
    // n = number of tokens                                                                      //
    **********************************************************************************************/
function _invariant$1(amp, // amp
balances // balances
) {
    let sum = ZERO;
    const totalCoins = balances.length;
    for (let i = 0; i < totalCoins; i++) {
        sum = sum.plus(balances[i]);
    }
    if (sum.isZero()) {
        return ZERO;
    }
    let prevInv = ZERO;
    let inv = sum;
    // amp is passed as an ethers bignumber while maths uses bignumber.js
    const ampAdjusted = bnum(bignumber.formatFixed(amp, 3));
    const ampTimesNpowN = ampAdjusted.times(totalCoins ** totalCoins); // A*n^n
    for (let i = 0; i < 255; i++) {
        let P_D = bnum(totalCoins).times(balances[0]);
        for (let j = 1; j < totalCoins; j++) {
            //P_D is rounded up
            P_D = P_D.times(balances[j]).times(totalCoins).div(inv);
        }
        prevInv = inv;
        //inv is rounded up
        inv = bnum(totalCoins)
            .times(inv)
            .times(inv)
            .plus(ampTimesNpowN.times(sum).times(P_D))
            .div(bnum(totalCoins + 1)
            .times(inv)
            .plus(ampTimesNpowN.minus(1).times(P_D)));
        // Equality with the precision of 1
        if (inv.gt(prevInv)) {
            if (inv.minus(prevInv).lt(bnum(10 ** -18))) {
                break;
            }
        }
        else if (prevInv.minus(inv).lt(bnum(10 ** -18))) {
            break;
        }
    }
    //Result is rounded up
    return inv;
}
// Adapted from StableMath.sol, _outGivenIn()
// * Added swap fee at very first line
/**********************************************************************************************
    // outGivenIn token x for y - polynomial equation to solve                                   //
    // ay = amount out to calculate                                                              //
    // by = balance token out                                                                    //
    // y = by - ay                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               y^2 + ( S - ----------  - 1) * y -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but y                                                           //
    // P = product of final balances but y                                                       //
    **********************************************************************************************/
function _exactTokenInForTokenOut$2(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    let tokenAmountIn = amount;
    tokenAmountIn = tokenAmountIn
        .times(constants.WeiPerEther.sub(swapFee).toString())
        .div(constants.WeiPerEther.toString());
    //Invariant is rounded up
    const inv = _invariant$1(amp, balances);
    let p = inv;
    let sum = ZERO;
    const totalCoins = bnum(balances.length);
    let n_pow_n = ONE;
    let x = ZERO;
    for (let i = 0; i < balances.length; i++) {
        n_pow_n = n_pow_n.times(totalCoins);
        if (i == tokenIndexIn) {
            x = balances[i].plus(tokenAmountIn);
        }
        else if (i != tokenIndexOut) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    //Calculate out balance
    const y = _solveAnalyticalBalance$1(sum, inv, amp, n_pow_n, p);
    //Result is rounded down
    // return balances[tokenIndexOut] > y ? balances[tokenIndexOut].minus(y) : 0;
    return balances[tokenIndexOut].minus(y);
}
// Adapted from StableMath.sol, _inGivenOut()
// * Added swap fee at very last line
/**********************************************************************************************
    // inGivenOut token x for y - polynomial equation to solve                                   //
    // ax = amount in to calculate                                                               //
    // bx = balance token in                                                                     //
    // x = bx + ax                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               x^2 + ( S - ----------  - 1) * x -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but x                                                           //
    // P = product of final balances but x                                                       //
    **********************************************************************************************/
function _tokenInForExactTokenOut$2(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountOut = amount;
    //Invariant is rounded up
    const inv = _invariant$1(amp, balances);
    let p = inv;
    let sum = ZERO;
    const totalCoins = bnum(balances.length);
    let n_pow_n = ONE;
    let x = ZERO;
    for (let i = 0; i < balances.length; i++) {
        n_pow_n = n_pow_n.times(totalCoins);
        if (i == tokenIndexOut) {
            x = balances[i].minus(tokenAmountOut);
        }
        else if (i != tokenIndexIn) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    //Calculate in balance
    const y = _solveAnalyticalBalance$1(sum, inv, amp, n_pow_n, p);
    //Result is rounded up
    return y
        .minus(balances[tokenIndexIn])
        .multipliedBy(constants.WeiPerEther.toString())
        .div(constants.WeiPerEther.sub(swapFee).toString());
}
//This function calcuates the analytical solution to find the balance required
function _solveAnalyticalBalance$1(sum, inv, amp, n_pow_n, p) {
    // amp is passed as an ethers bignumber while maths uses bignumber.js
    const oldBN_amp = bnum(bignumber.formatFixed(amp, 3));
    //Round up p
    p = p.times(inv).div(oldBN_amp.times(n_pow_n).times(n_pow_n));
    //Round down b
    const b = sum.plus(inv.div(oldBN_amp.times(n_pow_n)));
    //Round up c
    // let c = inv >= b
    //     ? inv.minus(b).plus(Math.sqrtUp(inv.minus(b).times(inv.minus(b)).plus(p.times(4))))
    //     : Math.sqrtUp(b.minus(inv).times(b.minus(inv)).plus(p.times(4))).minus(b.minus(inv));
    let c;
    if (inv.gte(b)) {
        c = inv
            .minus(b)
            .plus(inv.minus(b).times(inv.minus(b)).plus(p.times(4)).sqrt());
    }
    else {
        c = b
            .minus(inv)
            .times(b.minus(inv))
            .plus(p.times(4))
            .sqrt()
            .minus(b.minus(inv));
    }
    //Round up y
    return c.div(2);
}
//////////////////////
////  These functions have been added exclusively for the SORv2
//////////////////////
function _poolDerivatives$2(amp, balances, tokenIndexIn, tokenIndexOut, is_first_derivative, wrt_out) {
    const totalCoins = balances.length;
    const D = _invariant$1(amp, balances);
    let S = ZERO;
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn && i != tokenIndexOut) {
            S = S.plus(balances[i]);
        }
    }
    const x = balances[tokenIndexIn];
    const y = balances[tokenIndexOut];
    // amp is passed as an ethers bignumber while maths uses bignumber.js
    const ampAdjusted = bnum(bignumber.formatFixed(amp, 3));
    const a = ampAdjusted.times(totalCoins ** totalCoins); // = ampTimesNpowN
    const b = S.minus(D).times(a).plus(D);
    const twoaxy = bnum(2).times(a).times(x).times(y);
    const partial_x = twoaxy.plus(a.times(y).times(y)).plus(b.times(y));
    const partial_y = twoaxy.plus(a.times(x).times(x)).plus(b.times(x));
    let ans;
    if (is_first_derivative) {
        ans = partial_x.div(partial_y);
    }
    else {
        const partial_xx = bnum(2).times(a).times(y);
        const partial_yy = bnum(2).times(a).times(x);
        const partial_xy = partial_xx.plus(partial_yy).plus(b);
        const numerator = bnum(2)
            .times(partial_x)
            .times(partial_y)
            .times(partial_xy)
            .minus(partial_xx.times(partial_y.pow(2)))
            .minus(partial_yy.times(partial_x.pow(2)));
        const denominator = partial_x.pow(2).times(partial_y);
        ans = numerator.div(denominator);
        if (wrt_out) {
            ans = ans.times(partial_y).div(partial_x);
        }
    }
    return ans;
}
/////////
/// SpotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOut$3(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(constants.WeiPerEther.sub(swapFee).toString()).div(constants.WeiPerEther.toString()));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_exactTokenInForTokenOut$2(amount, poolPairData));
    let ans = _poolDerivatives$2(amp, balances, tokenIndexIn, tokenIndexOut, true, false);
    ans = ONE.div(ans.times(constants.WeiPerEther.sub(swapFee).toString()).div(constants.WeiPerEther.toString()));
    return ans;
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOut$3(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactTokenOut$2(amount, poolPairData)
        .times(constants.WeiPerEther.sub(swapFee).toString())
        .div(constants.WeiPerEther.toString());
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount);
    let ans = _poolDerivatives$2(amp, balances, tokenIndexIn, tokenIndexOut, true, true);
    ans = ONE.div(ans.times(constants.WeiPerEther.sub(swapFee).toString()).div(constants.WeiPerEther.toString()));
    return ans;
}
/////////
///  Derivatives of spotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$4(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(constants.WeiPerEther.sub(swapFee).toString()).div(constants.WeiPerEther.toString()));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_exactTokenInForTokenOut$2(amount, poolPairData));
    return _poolDerivatives$2(amp, balances, tokenIndexIn, tokenIndexOut, false, false);
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$4(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactTokenOut$2(amount, poolPairData)
        .times(constants.WeiPerEther.sub(swapFee).toString())
        .div(constants.WeiPerEther.toString());
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount);
    const feeFactor = constants.WeiPerEther.div(swapFee).toString();
    return _poolDerivatives$2(amp, balances, tokenIndexIn, tokenIndexOut, false, true).div(feeFactor);
}
// The following are used in front-end helper functions
function _feeFactor$1(balances, tokenIndex, swapFee) {
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    const currentWeight = balances[tokenIndex].div(sumBalances);
    const tokenBalancePercentageExcess = ONE.minus(currentWeight);
    return ONE.minus(tokenBalancePercentageExcess
        .times(swapFee.toString())
        .div(constants.WeiPerEther.toString()));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactBPTOut$2(amount, poolPairData) {
    const { amp, allBalances, balanceOut, tokenIndexIn, decimalsOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactBPTOut$1(amount, poolPairData);
    const feeFactor = _feeFactor$1(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in.times(feeFactor));
    let ans = _poolDerivativesBPT$2(amp, balances, bnum(bignumber.formatFixed(balanceOut, decimalsOut)).plus(amount), tokenIndexIn, true, true, true);
    ans = ONE.div(ans.times(feeFactor));
    return ans;
}
/*
Flow of calculations:
amountBPTOut -> newInvariant -> (amountInProportional, amountInAfterFee) ->
amountInPercentageExcess -> amountIn
*/
function _tokenInForExactBPTOut$1(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const bptAmountOut = amount;
    /**********************************************************************************************
    // TODO description                            //
    **********************************************************************************************/
    // Get current invariant
    const currentInvariant = _invariant$1(amp, balances);
    // Calculate new invariant
    const newInvariant = allBalances[tokenIndexOut]
        .plus(bptAmountOut)
        .div(allBalances[tokenIndexOut])
        .times(currentInvariant);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weight of token
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // get amountInAfterFee
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances$2(amp, balances, newInvariant, tokenIndexIn);
    const amountInAfterFee = newBalanceTokenIndex.minus(balances[tokenIndexIn]);
    // Get tokenBalancePercentageExcess
    const currentWeight = balances[tokenIndexIn].div(sumBalances);
    const tokenBalancePercentageExcess = ONE.minus(currentWeight);
    // return amountIn
    return amountInAfterFee.div(ONE.minus(tokenBalancePercentageExcess
        .times(swapFee.toString())
        .div(constants.WeiPerEther.toString())));
}
//This function calculates the balance of a given token (tokenIndex)
// given all the other balances and the invariant
function _getTokenBalanceGivenInvariantAndAllOtherBalances$2(amp, balances, inv, tokenIndex) {
    let p = inv;
    let sum = ZERO;
    const totalCoins = balances.length;
    let nPowN = ONE;
    let x = ZERO;
    for (let i = 0; i < totalCoins; i++) {
        nPowN = nPowN.times(totalCoins);
        if (i != tokenIndex) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    // Calculate token balance
    return _solveAnalyticalBalance$1(sum, inv, amp, nPowN, p);
}
function _poolDerivativesBPT$2(amp, balances, bptSupply, tokenIndexIn, is_first_derivative, is_BPT_out, wrt_out) {
    const totalCoins = balances.length;
    const D = _invariant$1(amp, balances);
    let S = ZERO;
    let D_P = D.div(totalCoins);
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn) {
            S = S.plus(balances[i]);
            D_P = D_P.times(D).div(balances[i].times(totalCoins));
        }
    }
    const x = balances[tokenIndexIn];
    // amp is passed as an ethers bignumber while maths uses bignumber.js
    const ampAdjusted = bnum(bignumber.formatFixed(amp, 3));
    const alpha = ampAdjusted.times(totalCoins ** totalCoins); // = ampTimesNpowN
    const beta = alpha.times(S);
    const gamma = ONE.minus(alpha);
    const partial_x = bnum(2)
        .times(alpha)
        .times(x)
        .plus(beta)
        .plus(gamma.times(D));
    const minus_partial_D = D_P.times(totalCoins + 1).minus(gamma.times(x));
    const partial_D = ZERO.minus(minus_partial_D);
    let ans;
    if (is_first_derivative) {
        ans = partial_x.div(minus_partial_D).times(bptSupply).div(D);
    }
    else {
        const partial_xx = bnum(2).times(alpha);
        const partial_xD = gamma;
        const n_times_nplusone = totalCoins * (totalCoins + 1);
        const partial_DD = ZERO.minus(D_P.times(n_times_nplusone).div(D));
        if (is_BPT_out) {
            const term1 = partial_xx.times(partial_D).div(partial_x.pow(2));
            const term2 = bnum(2).times(partial_xD).div(partial_x);
            const term3 = partial_DD.div(partial_D);
            ans = term1.minus(term2).plus(term3).times(D).div(bptSupply);
            if (wrt_out) {
                const D_prime = ZERO.minus(partial_x.div(partial_D));
                ans = ans.div(D_prime).times(D).div(bptSupply);
            }
        }
        else {
            ans = bnum(2)
                .times(partial_xD)
                .div(partial_D)
                .minus(partial_DD.times(partial_x).div(partial_D.pow(2)))
                .minus(partial_xx.div(partial_x));
            if (wrt_out) {
                ans = ans
                    .times(partial_x)
                    .div(minus_partial_D)
                    .times(bptSupply)
                    .div(D);
            }
        }
    }
    return ans;
}

var stableMath = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _invariant: _invariant$1,
    _exactTokenInForTokenOut: _exactTokenInForTokenOut$2,
    _tokenInForExactTokenOut: _tokenInForExactTokenOut$2,
    _spotPriceAfterSwapExactTokenInForTokenOut: _spotPriceAfterSwapExactTokenInForTokenOut$3,
    _spotPriceAfterSwapTokenInForExactTokenOut: _spotPriceAfterSwapTokenInForExactTokenOut$3,
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut: _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$4,
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut: _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$4,
    _spotPriceAfterSwapTokenInForExactBPTOut: _spotPriceAfterSwapTokenInForExactBPTOut$2
});

/*
Swap outcome and "spot price after swap" formulas for weighted, stable and linear pools.
Amounts are represented using bigint type. Swap outcomes formulas should
match exactly those from smart contracts.

Test cases are found in poolsMathWeighted.spec.ts, poolsMathStable.spec.ts poolsMathLinear.spec.ts.

It is necessary to review whether to use MathSol operations or native +,-,\*,/ case by case. MathSol operations are able to reproduce overflows while native operations produce a much more readable code. For instance, for "spot price after swap" native operations
are preferred since in this case there are not smart contract analogs, amount limits are assumed to have been checked elsewhere, and some formulas get complicated, specially for stable pools.
*/
const AMP_PRECISION = BigInt(1e3);
function _calculateInvariant$2(amp, balances) {
    /**********************************************************************************************
      // invariant                                                                                 //
      // D = invariant                                                  D^(n+1)                    //
      // A = amplification coefficient      A  n^n S + D = A D n^n + -----------                   //
      // S = sum of balances                                             n^n P                     //
      // P = product of balances                                                                   //
      // n = number of tokens                                                                      //
      *********x************************************************************************************/
    // Always round down, to match Vyper's arithmetic (which always truncates).
    let sum = BZERO;
    const numTokens = balances.length;
    for (let i = 0; i < numTokens; i++) {
        sum = sum + balances[i];
    }
    if (sum == BZERO) {
        return BZERO;
    }
    let prevInvariant = BZERO;
    let invariant = sum;
    const ampTimesTotal = amp * BigInt(numTokens);
    for (let i = 0; i < 255; i++) {
        let D_P = invariant;
        for (let j = 0; j < numTokens; j++) {
            // (D_P * invariant) / (balances[j] * numTokens)
            D_P = MathSol.divDown(MathSol.mul(D_P, invariant), MathSol.mul(balances[j], BigInt(numTokens)));
        }
        prevInvariant = invariant;
        invariant = MathSol.divDown(MathSol.mul(
        // (ampTimesTotal * sum) / AMP_PRECISION + D_P * numTokens
        MathSol.divDown(MathSol.mul(ampTimesTotal, sum), AMP_PRECISION) + MathSol.mul(D_P, BigInt(numTokens)), invariant), 
        // ((ampTimesTotal - _AMP_PRECISION) * invariant) / _AMP_PRECISION + (numTokens + 1) * D_P
        MathSol.divDown(MathSol.mul(ampTimesTotal - AMP_PRECISION, invariant), AMP_PRECISION) + MathSol.mul(BigInt(numTokens + 1), D_P));
        if (invariant > prevInvariant) {
            if (invariant - prevInvariant <= 1) {
                return invariant;
            }
        }
        else if (prevInvariant - invariant <= 1) {
            return invariant;
        }
    }
    throw new Error('Errors.STABLE_INVARIANT_DIDNT_CONVERGE');
}
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _calcOutGivenIn$2(amp, balances, tokenIndexIn, tokenIndexOut, amountIn, fee) {
    amountIn = subtractFee(amountIn, fee);
    const invariant = _calculateInvariant$2(amp, balances);
    const initBalance = balances[tokenIndexIn];
    balances[tokenIndexIn] = initBalance + amountIn;
    const finalBalanceOut = _getTokenBalanceGivenInvariantAndAllOtherBalances$1(amp, balances, invariant, tokenIndexOut);
    return balances[tokenIndexOut] - finalBalanceOut - BigInt(1);
}
function _calcInGivenOut$2(amp, balances, tokenIndexIn, tokenIndexOut, amountOut, fee) {
    const invariant = _calculateInvariant$2(amp, balances);
    balances[tokenIndexOut] = MathSol.sub(balances[tokenIndexOut], amountOut);
    const finalBalanceIn = _getTokenBalanceGivenInvariantAndAllOtherBalances$1(amp, balances, invariant, tokenIndexIn);
    let amountIn = MathSol.add(MathSol.sub(finalBalanceIn, balances[tokenIndexIn]), BigInt(1));
    amountIn = addFee$1(amountIn, fee);
    return amountIn;
}
function _calcBptOutGivenExactTokensIn(amp, balances, amountsIn, bptTotalSupply, swapFeePercentage) {
    // BPT out, so we round down overall.
    // First loop calculates the sum of all token balances, which will be used to calculate
    // the current weights of each token, relative to this sum
    let sumBalances = BigInt(0);
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances + balances[i];
    }
    // Calculate the weighted balance ratio without considering fees
    const balanceRatiosWithFee = new Array(amountsIn.length);
    // The weighted sum of token balance ratios with fee
    let invariantRatioWithFees = BigInt(0);
    for (let i = 0; i < balances.length; i++) {
        const currentWeight = MathSol.divDownFixed(balances[i], sumBalances);
        balanceRatiosWithFee[i] = MathSol.divDownFixed(balances[i] + amountsIn[i], balances[i]);
        invariantRatioWithFees =
            invariantRatioWithFees +
                MathSol.mulDownFixed(balanceRatiosWithFee[i], currentWeight);
    }
    // Second loop calculates new amounts in, taking into account the fee on the percentage excess
    const newBalances = new Array(balances.length);
    for (let i = 0; i < balances.length; i++) {
        let amountInWithoutFee;
        // Check if the balance ratio is greater than the ideal ratio to charge fees or not
        if (balanceRatiosWithFee[i] > invariantRatioWithFees) {
            const nonTaxableAmount = MathSol.mulDownFixed(balances[i], invariantRatioWithFees - MathSol.ONE);
            const taxableAmount = amountsIn[i] - nonTaxableAmount;
            // No need to use checked arithmetic for the swap fee, it is guaranteed to be lower than 50%
            amountInWithoutFee =
                nonTaxableAmount +
                    MathSol.mulDownFixed(taxableAmount, MathSol.ONE - swapFeePercentage);
        }
        else {
            amountInWithoutFee = amountsIn[i];
        }
        newBalances[i] = balances[i] + amountInWithoutFee;
    }
    // Get current and new invariants, taking swap fees into account
    const currentInvariant = _calculateInvariant$2(amp, balances);
    const newInvariant = _calculateInvariant$2(amp, newBalances);
    const invariantRatio = MathSol.divDownFixed(newInvariant, currentInvariant);
    // If the invariant didn't increase for any reason, we simply don't mint BPT
    if (invariantRatio > MathSol.ONE) {
        return MathSol.mulDownFixed(bptTotalSupply, invariantRatio - MathSol.ONE);
    }
    else {
        return BigInt(0);
    }
}
function _calcTokenInGivenExactBptOut(amp, balances, tokenIndexIn, bptAmountOut, bptTotalSupply, fee) {
    // Token in, so we round up overall.
    const currentInvariant = _calculateInvariant$2(amp, balances);
    const newInvariant = MathSol.mulUpFixed(MathSol.divUpFixed(MathSol.add(bptTotalSupply, bptAmountOut), bptTotalSupply), currentInvariant);
    // Calculate amount in without fee.
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances$1(amp, balances, newInvariant, tokenIndexIn);
    const amountInWithoutFee = MathSol.sub(newBalanceTokenIndex, balances[tokenIndexIn]);
    // First calculate the sum of all token balances, which will be used to calculate
    // the current weight of each token
    let sumBalances = BigInt(0);
    for (let i = 0; i < balances.length; i++) {
        sumBalances = MathSol.add(sumBalances, balances[i]);
    }
    // We can now compute how much extra balance is being deposited
    // and used in virtual swaps, and charge swap fees accordingly.
    const currentWeight = MathSol.divDownFixed(balances[tokenIndexIn], sumBalances);
    const taxablePercentage = MathSol.complementFixed(currentWeight);
    const taxableAmount = MathSol.mulUpFixed(amountInWithoutFee, taxablePercentage);
    const nonTaxableAmount = MathSol.sub(amountInWithoutFee, taxableAmount);
    return MathSol.add(nonTaxableAmount, MathSol.divUpFixed(taxableAmount, MathSol.sub(MathSol.ONE, fee)));
}
/*
Flow of calculations:
amountsTokenOut -> amountsOutProportional ->
amountOutPercentageExcess -> amountOutBeforeFee -> newInvariant -> amountBPTIn
*/
function _calcBptInGivenExactTokensOut(amp, balances, amountsOut, bptTotalSupply, swapFeePercentage) {
    // BPT in, so we round up overall.
    // First loop calculates the sum of all token balances, which will be used to calculate
    // the current weights of each token relative to this sum
    let sumBalances = BigInt(0);
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances + balances[i];
    }
    // Calculate the weighted balance ratio without considering fees
    const balanceRatiosWithoutFee = new Array(amountsOut.length);
    let invariantRatioWithoutFees = BigInt(0);
    for (let i = 0; i < balances.length; i++) {
        const currentWeight = MathSol.divUpFixed(balances[i], sumBalances);
        balanceRatiosWithoutFee[i] = MathSol.divUpFixed(balances[i] - amountsOut[i], balances[i]);
        invariantRatioWithoutFees =
            invariantRatioWithoutFees +
                MathSol.mulUpFixed(balanceRatiosWithoutFee[i], currentWeight);
    }
    // Second loop calculates new amounts in, taking into account the fee on the percentage excess
    const newBalances = new Array(balances.length);
    for (let i = 0; i < balances.length; i++) {
        // Swap fees are typically charged on 'token in', but there is no 'token in' here, so we apply it to
        // 'token out'. This results in slightly larger price impact.
        let amountOutWithFee;
        if (invariantRatioWithoutFees > balanceRatiosWithoutFee[i]) {
            const nonTaxableAmount = MathSol.mulDownFixed(balances[i], MathSol.complementFixed(invariantRatioWithoutFees));
            const taxableAmount = amountsOut[i] - nonTaxableAmount;
            // No need to use checked arithmetic for the swap fee, it is guaranteed to be lower than 50%
            amountOutWithFee =
                nonTaxableAmount +
                    MathSol.divUpFixed(taxableAmount, MathSol.ONE - swapFeePercentage);
        }
        else {
            amountOutWithFee = amountsOut[i];
        }
        newBalances[i] = balances[i] - amountOutWithFee;
    }
    // Get current and new invariants, taking into account swap fees
    const currentInvariant = _calculateInvariant$2(amp, balances);
    const newInvariant = _calculateInvariant$2(amp, newBalances);
    const invariantRatio = MathSol.divDownFixed(newInvariant, currentInvariant);
    // return amountBPTIn
    return MathSol.mulUpFixed(bptTotalSupply, MathSol.complementFixed(invariantRatio));
}
function _calcTokenOutGivenExactBptIn(amp, balances, tokenIndex, bptAmountIn, bptTotalSupply, swapFeePercentage) {
    // Token out, so we round down overall.
    const currentInvariant = _calculateInvariant$2(amp, balances);
    const newInvariant = MathSol.mulUpFixed(MathSol.divUpFixed(bptTotalSupply - bptAmountIn, bptTotalSupply), currentInvariant);
    // Calculate amount out without fee
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances$1(amp, balances, newInvariant, tokenIndex);
    const amountOutWithoutFee = balances[tokenIndex] - newBalanceTokenIndex;
    // First calculate the sum of all token balances, which will be used to calculate
    // the current weight of each token
    let sumBalances = BigInt(0);
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances + balances[i];
    }
    // We can now compute how much excess balance is being withdrawn as a result of the virtual swaps, which result
    // in swap fees.
    const currentWeight = MathSol.divDownFixed(balances[tokenIndex], sumBalances);
    const taxablePercentage = MathSol.complementFixed(currentWeight);
    // Swap fees are typically charged on 'token in', but there is no 'token in' here, so we apply it
    // to 'token out'. This results in slightly larger price impact. Fees are rounded up.
    const taxableAmount = MathSol.mulUpFixed(amountOutWithoutFee, taxablePercentage);
    const nonTaxableAmount = amountOutWithoutFee - taxableAmount;
    // No need to use checked arithmetic for the swap fee, it is guaranteed to be lower than 50%
    return (nonTaxableAmount +
        MathSol.mulDownFixed(taxableAmount, MathSol.ONE - swapFeePercentage));
}
function _calcTokensOutGivenExactBptIn(balances, bptAmountIn, bptTotalSupply) {
    /**********************************************************************************************
    // exactBPTInForTokensOut                                                                    //
    // (per token)                                                                               //
    // aO = tokenAmountOut             /        bptIn         \                                  //
    // b = tokenBalance      a0 = b * | ---------------------  |                                 //
    // bptIn = bptAmountIn             \     bptTotalSupply    /                                 //
    // bpt = bptTotalSupply                                                                      //
    **********************************************************************************************/
    // Since we're computing an amount out, we round down overall. This means rounding down on both the
    // multiplication and division.
    const bptRatio = MathSol.divDownFixed(bptAmountIn, bptTotalSupply);
    const amountsOut = new Array(balances.length);
    for (let i = 0; i < balances.length; i++) {
        amountsOut[i] = MathSol.mulDownFixed(balances[i], bptRatio);
    }
    return amountsOut;
}
function _getTokenBalanceGivenInvariantAndAllOtherBalances$1(amp, balances, invariant, tokenIndex) {
    // Rounds result up overall
    const ampTimesTotal = amp * BigInt(balances.length);
    let sum = balances[0];
    let P_D = balances[0] * BigInt(balances.length);
    for (let j = 1; j < balances.length; j++) {
        P_D = MathSol.divDown(MathSol.mul(MathSol.mul(P_D, balances[j]), BigInt(balances.length)), invariant);
        sum = sum + balances[j];
    }
    // No need to use safe math, based on the loop above `sum` is greater than or equal to `balances[tokenIndex]`
    sum = sum - balances[tokenIndex];
    const inv2 = MathSol.mul(invariant, invariant);
    // We remove the balance fromm c by multiplying it
    const c = MathSol.mul(MathSol.mul(MathSol.divUp(inv2, MathSol.mul(ampTimesTotal, P_D)), AMP_PRECISION), balances[tokenIndex]);
    const b = sum +
        MathSol.mul(MathSol.divDown(invariant, ampTimesTotal), AMP_PRECISION);
    // We iterate to find the balance
    let prevTokenBalance = BZERO;
    // We multiply the first iteration outside the loop with the invariant to set the value of the
    // initial approximation.
    let tokenBalance = MathSol.divUp(inv2 + c, invariant + b);
    for (let i = 0; i < 255; i++) {
        prevTokenBalance = tokenBalance;
        tokenBalance = MathSol.divUp(MathSol.mul(tokenBalance, tokenBalance) + c, MathSol.mul(tokenBalance, BigInt(2)) + b - invariant);
        if (tokenBalance > prevTokenBalance) {
            if (tokenBalance - prevTokenBalance <= 1) {
                return tokenBalance;
            }
        }
        else if (prevTokenBalance - tokenBalance <= 1) {
            return tokenBalance;
        }
    }
    throw new Error('Errors.STABLE_GET_BALANCE_DIDNT_CONVERGE');
}
function subtractFee(amount, fee) {
    const feeAmount = MathSol.mulUpFixed(amount, fee);
    return amount - feeAmount;
}
function addFee$1(amount, fee) {
    return MathSol.divUpFixed(amount, MathSol.complementFixed(fee));
}
/////////
/// SpotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOut$2(amp, balances, tokenIndexIn, tokenIndexOut, amountIn, fee) {
    const feeComplement = MathSol.complementFixed(fee);
    const balancesCopy = [...balances];
    balances[tokenIndexIn] = MathSol.add(balances[tokenIndexIn], MathSol.mulUpFixed(amountIn, feeComplement));
    balances[tokenIndexOut] = MathSol.sub(balances[tokenIndexOut], _calcOutGivenIn$2(amp, balancesCopy, tokenIndexIn, tokenIndexOut, amountIn, fee));
    let ans = _poolDerivatives$1(amp, balances, tokenIndexIn, tokenIndexOut, true, false);
    ans = MathSol.divDownFixed(MathSol.ONE, MathSol.mulDownFixed(ans, feeComplement));
    return ans;
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOut$2(amp, balances, tokenIndexIn, tokenIndexOut, amountOut, fee) {
    const balancesCopy = [...balances];
    const _in = _calcInGivenOut$2(amp, balancesCopy, tokenIndexIn, tokenIndexOut, amountOut, fee);
    balances[tokenIndexIn] = balances[tokenIndexIn] + _in;
    balances[tokenIndexOut] = MathSol.sub(balances[tokenIndexOut], amountOut);
    let ans = _poolDerivatives$1(amp, balances, tokenIndexIn, tokenIndexOut, true, true);
    const feeComplement = MathSol.complementFixed(fee);
    ans = MathSol.divUpFixed(MathSol.ONE, MathSol.mulUpFixed(ans, feeComplement));
    return ans;
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForBPTOut$1(amp, balances, tokenIndexIn, bptTotalSupply, amountIn
// assuming zero fee
) {
    balances[tokenIndexIn] = balances[tokenIndexIn] + amountIn;
    // working
    const amountsIn = balances.map((_value, index) => index == tokenIndexIn ? amountIn : BigInt(0));
    const finalBPTSupply = bptTotalSupply +
        _calcBptOutGivenExactTokensIn(amp, balances, amountsIn, bptTotalSupply, BigInt(0));
    let ans = _poolDerivativesBPT$1(amp, balances, finalBPTSupply, tokenIndexIn);
    ans = MathSol.divUpFixed(MathSol.ONE, ans);
    return ans;
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactBPTOut$1(amp, balances, tokenIndexIn, bptTotalSupply, amountOut
// assuming zero fee
) {
    const balancesCopy = [...balances];
    const _in = _calcTokenInGivenExactBptOut(amp, balancesCopy, tokenIndexIn, amountOut, bptTotalSupply, BigInt(0));
    balances[tokenIndexIn] = balances[tokenIndexIn] + _in;
    let ans = _poolDerivativesBPT$1(amp, balances, bptTotalSupply + amountOut, tokenIndexIn);
    ans = MathSol.divUpFixed(MathSol.ONE, ans); // ONE.div(ans.times(feeFactor));
    return ans;
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactBPTInForTokenOut$1(amp, balances, tokenIndexOut, bptTotalSupply, amountIn
// assuming zero fee
) {
    // balances copy not necessary?
    const _out = _calcTokenOutGivenExactBptIn(amp, balances, tokenIndexOut, amountIn, bptTotalSupply, BigInt(0));
    balances[tokenIndexOut] = balances[tokenIndexOut] - _out;
    const bptTotalSupplyAfter = MathSol.sub(bptTotalSupply, amountIn);
    const ans = _poolDerivativesBPT$1(amp, balances, bptTotalSupplyAfter, tokenIndexOut);
    return ans;
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapBPTInForExactTokenOut$1(amp, balances, tokenIndexOut, bptTotalSupply, amountOut) {
    balances[tokenIndexOut] = MathSol.sub(balances[tokenIndexOut], amountOut);
    const amountsOut = balances.map((_value, index) => index == tokenIndexOut ? amountOut : BigInt(0));
    const bptTotalSupplyAfter = bptTotalSupply -
        _calcBptInGivenExactTokensOut(amp, balances, amountsOut, bptTotalSupply, BigInt(0));
    const ans = _poolDerivativesBPT$1(amp, balances, bptTotalSupplyAfter, tokenIndexOut);
    return ans;
}
function _poolDerivatives$1(amp, balances, tokenIndexIn, tokenIndexOut, is_first_derivative, wrt_out) {
    const totalCoins = balances.length;
    const D = _calculateInvariant$2(amp, balances);
    let S = BigInt(0);
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn && i != tokenIndexOut) {
            S += balances[i];
        }
    }
    const x = balances[tokenIndexIn];
    const y = balances[tokenIndexOut];
    const a = amp * BigInt(totalCoins);
    const b = a * (S - D) + D * AMP_PRECISION;
    const twoaxy = BigInt(2) * a * x * y;
    const partial_x = twoaxy + a * y * y + b * y;
    const partial_y = twoaxy + a * x * x + b * x;
    let ans;
    if (is_first_derivative) {
        ans = MathSol.divUpFixed(partial_x, partial_y);
    }
    else {
        // Untested case:
        const partial_xx = BigInt(2) * a * y;
        const partial_yy = BigInt(2) * a * x;
        const partial_xy = partial_xx + partial_yy + b; // AMP_PRECISION missing
        const numerator = BigInt(2) * partial_x * partial_y * partial_xy -
            partial_xx * partial_y * partial_y +
            partial_yy * partial_x * partial_x;
        const denominator = partial_x * partial_x * partial_y;
        ans = MathSol.divUpFixed(numerator, denominator); // change the order to directly use integer operations
        if (wrt_out) {
            ans = MathSol.mulUpFixed(MathSol.mulUpFixed(ans, partial_y), partial_x);
        }
    }
    return ans;
}
function _poolDerivativesBPT$1(amp, balances, bptSupply, tokenIndexIn, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
is_first_derivative, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
is_BPT_out, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
wrt_out) {
    const totalCoins = balances.length;
    const D = _calculateInvariant$2(amp, balances);
    let S = BigInt(0);
    let D_P = D / BigInt(totalCoins);
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn) {
            S = S + balances[i];
            D_P = (D_P * D) / (BigInt(totalCoins) * balances[i]);
        }
    }
    const x = balances[tokenIndexIn];
    const alpha = amp * BigInt(totalCoins);
    const beta = alpha * S; // units = 10 ** 21
    const gamma = BigInt(AMP_PRECISION) - alpha;
    const partial_x = BigInt(2) * alpha * x + beta + gamma * D;
    const minus_partial_D = D_P * BigInt(totalCoins + 1) * AMP_PRECISION - gamma * x;
    const ans = MathSol.divUpFixed((partial_x * bptSupply) / minus_partial_D, D);
    /*
    if (is_first_derivative) {
        ans = MathSol.divUpFixed((partial_x * bptSupply) / minus_partial_D, D);
    } else {
        let partial_xx = bnum(2).times(alpha);
        let partial_xD = gamma;
        let n_times_nplusone = totalCoins * (totalCoins + 1);
        let partial_DD = bnum(0).minus( D_P.times(n_times_nplusone).div(D) );
        if (is_BPT_out) {
            let term1 = partial_xx.times(partial_D).div( partial_x.pow(2) );
            let term2 = bnum(2).times(partial_xD).div(partial_x);
            let term3 = partial_DD.div(partial_D);
            ans = (term1.minus(term2).plus(term3)).times(D).div(bptSupply)
            if (wrt_out) {
                let D_prime = bnum(0).minus( partial_x.div(partial_D) );
                ans = ans.div( D_prime ).times(D).div(bptSupply);
            }
        } else {
            ans = bnum(2).times(partial_xD).div(partial_D).minus(
                partial_DD.times(partial_x).div(partial_D.pow(2)) ).minus(
                partial_xx.div(partial_x) );
            if (wrt_out) {
                ans = ans.times(partial_x).div(minus_partial_D).times(bptSupply).div(D);
            }
        }
    }
*/
    return ans;
}

var stableMathBigInt = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _calcOutGivenIn: _calcOutGivenIn$2,
    _calcInGivenOut: _calcInGivenOut$2,
    _calcBptOutGivenExactTokensIn: _calcBptOutGivenExactTokensIn,
    _calcTokenInGivenExactBptOut: _calcTokenInGivenExactBptOut,
    _calcBptInGivenExactTokensOut: _calcBptInGivenExactTokensOut,
    _calcTokenOutGivenExactBptIn: _calcTokenOutGivenExactBptIn,
    _calcTokensOutGivenExactBptIn: _calcTokensOutGivenExactBptIn,
    _spotPriceAfterSwapExactTokenInForTokenOut: _spotPriceAfterSwapExactTokenInForTokenOut$2,
    _spotPriceAfterSwapTokenInForExactTokenOut: _spotPriceAfterSwapTokenInForExactTokenOut$2,
    _spotPriceAfterSwapExactTokenInForBPTOut: _spotPriceAfterSwapExactTokenInForBPTOut$1,
    _spotPriceAfterSwapTokenInForExactBPTOut: _spotPriceAfterSwapTokenInForExactBPTOut$1,
    _spotPriceAfterSwapExactBPTInForTokenOut: _spotPriceAfterSwapExactBPTInForTokenOut$1,
    _spotPriceAfterSwapBPTInForExactTokenOut: _spotPriceAfterSwapBPTInForExactTokenOut$1,
    _poolDerivatives: _poolDerivatives$1,
    _poolDerivativesBPT: _poolDerivativesBPT$1
});

class StablePool {
    constructor(id, address, amp, swapFee, totalShares, tokens, tokensList) {
        this.poolType = exports.PoolTypes.Stable;
        this.MAX_IN_RATIO = bignumber.parseFixed('0.3', 18);
        this.MAX_OUT_RATIO = bignumber.parseFixed('0.3', 18);
        this.id = id;
        this.address = address;
        this.amp = bignumber.parseFixed(amp, StablePool.AMP_DECIMALS);
        this.swapFee = bignumber.parseFixed(swapFee, 18);
        this.totalShares = bignumber.parseFixed(totalShares, 18);
        this.tokens = tokens;
        this.tokensList = tokensList;
    }
    static fromPool(pool) {
        if (!pool.amp)
            throw new Error('StablePool missing amp factor');
        return new StablePool(pool.id, pool.address, pool.amp, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList);
    }
    parsePoolPairData(tokenIn, tokenOut) {
        const tokenIndexIn = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenIn));
        if (tokenIndexIn < 0)
            throw 'Pool does not contain tokenIn';
        const tI = this.tokens[tokenIndexIn];
        const balanceIn = tI.balance;
        const decimalsIn = tI.decimals;
        const tokenIndexOut = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenOut));
        if (tokenIndexOut < 0)
            throw 'Pool does not contain tokenOut';
        const tO = this.tokens[tokenIndexOut];
        const balanceOut = tO.balance;
        const decimalsOut = tO.decimals;
        // Get all token balances
        const allBalances = this.tokens.map(({ balance }) => bnum(balance));
        const allBalancesScaled = this.tokens.map(({ balance }) => bignumber.parseFixed(balance, 18));
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            balanceIn: bignumber.parseFixed(balanceIn, decimalsIn),
            balanceOut: bignumber.parseFixed(balanceOut, decimalsOut),
            swapFee: this.swapFee,
            allBalances,
            allBalancesScaled,
            amp: this.amp,
            tokenIndexIn: tokenIndexIn,
            tokenIndexOut: tokenIndexOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
        };
        return poolPairData;
    }
    getNormalizedLiquidity(poolPairData) {
        // This is an approximation as the actual normalized liquidity is a lot more complicated to calculate
        return bnum(bignumber.formatFixed(poolPairData.balanceOut.mul(poolPairData.amp), poolPairData.decimalsOut + StablePool.AMP_DECIMALS));
    }
    getLimitAmountSwap(poolPairData, swapType) {
        // We multiply ratios by 10**-18 because we are in normalized space
        // so 0.5 should be 0.5 and not 500000000000000000
        // TODO: update bmath to use everything normalized
        if (swapType === exports.SwapTypes.SwapExactIn) {
            return bnum(bignumber.formatFixed(poolPairData.balanceIn.mul(this.MAX_IN_RATIO).div(constants.WeiPerEther), poolPairData.decimalsIn));
        }
        else {
            return bnum(bignumber.formatFixed(poolPairData.balanceOut.mul(this.MAX_OUT_RATIO).div(constants.WeiPerEther), poolPairData.decimalsOut));
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance;
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => isSameAddress(t.address, token));
            if (!T)
                throw Error('Pool does not contain this token');
            T.balance = bignumber.formatFixed(newBalance, T.decimals);
        }
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        try {
            if (amount.isZero())
                return ZERO;
            const amtWithFeeEvm = this.subtractSwapFeeAmount(bignumber.parseFixed(amount.dp(poolPairData.decimalsIn).toString(), poolPairData.decimalsIn), poolPairData.swapFee);
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = amtWithFeeEvm.mul(10 ** (18 - poolPairData.decimalsIn));
            const amt = _calcOutGivenIn$2(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((balance) => balance.toBigInt()), poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amtScaled.toBigInt(), BigInt(0));
            // return normalised amount
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_DOWN mode (1)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsOut, 1);
        }
        catch (err) {
            // console.error(`_evmoutGivenIn: ${err.message}`);
            return ZERO;
        }
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        try {
            if (amount.isZero())
                return ZERO;
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.dp(18).toString(), 18);
            let amt = _calcInGivenOut$2(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((balance) => balance.toBigInt()), poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amtScaled.toBigInt(), BigInt(0));
            // this is downscaleUp
            const scaleFactor = BigInt(10 ** (18 - poolPairData.decimalsIn));
            amt = (amt + scaleFactor - BigInt(1)) / scaleFactor;
            const amtWithFee = this.addSwapFeeAmount(bignumber.BigNumber.from(amt), poolPairData.swapFee);
            return bnum(amtWithFee.toString()).div(10 ** poolPairData.decimalsIn);
        }
        catch (err) {
            console.error(`_evminGivenOut: ${err.message}`);
            return ZERO;
        }
    }
    /**
     * _calcTokensOutGivenExactBptIn
     * @param bptAmountIn EVM scale.
     * @returns EVM scale.
     */
    _calcTokensOutGivenExactBptIn(bptAmountIn) {
        // token balances are stored in human scale and must be EVM for maths
        // Must take priceRate into consideration
        const balancesEvm = this.tokens
            .filter((t) => !isSameAddress(t.address, this.address))
            .map(({ balance, decimals }) => bignumber.parseFixed(balance, decimals).toBigInt());
        let returnAmt;
        try {
            returnAmt = _calcTokensOutGivenExactBptIn(balancesEvm, bptAmountIn.toBigInt(), this.totalShares.toBigInt());
            return returnAmt.map((a) => bignumber.BigNumber.from(a.toString()));
        }
        catch (err) {
            return new Array(balancesEvm.length).fill(ZERO);
        }
    }
    /**
     * _calcBptOutGivenExactTokensIn
     * @param amountsIn EVM Scale
     * @returns EVM Scale
     */
    _calcBptOutGivenExactTokensIn(amountsIn) {
        try {
            // token balances are stored in human scale and must be EVM for maths
            // Must take priceRate into consideration
            const balancesEvm = this.tokens
                .filter((t) => !isSameAddress(t.address, this.address))
                .map(({ balance, decimals }) => bignumber.parseFixed(balance, decimals).toBigInt());
            const bptAmountOut = _calcBptOutGivenExactTokensIn(this.amp.toBigInt(), balancesEvm, amountsIn.map((a) => a.toBigInt()), this.totalShares.toBigInt(), BigInt(0));
            return bignumber.BigNumber.from(bptAmountOut.toString());
        }
        catch (err) {
            return constants.Zero;
        }
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapExactTokenInForTokenOut$3(amount, poolPairData);
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapTokenInForExactTokenOut$3(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$4(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$4(amount, poolPairData);
    }
    subtractSwapFeeAmount(amount, swapFee) {
        // https://github.com/balancer-labs/balancer-v2-monorepo/blob/c18ff2686c61a8cbad72cdcfc65e9b11476fdbc3/pkg/pool-utils/contracts/BasePool.sol#L466
        const feeAmount = amount.mul(swapFee).add(constants.WeiPerEther.sub(1)).div(constants.WeiPerEther);
        return amount.sub(feeAmount);
    }
    addSwapFeeAmount(amount, swapFee) {
        // https://github.com/balancer-labs/balancer-v2-monorepo/blob/c18ff2686c61a8cbad72cdcfc65e9b11476fdbc3/pkg/pool-utils/contracts/BasePool.sol#L458
        const feeAmount = constants.WeiPerEther.sub(swapFee);
        return amount.mul(constants.WeiPerEther).add(feeAmount.sub(1)).div(feeAmount);
    }
}
StablePool.AMP_DECIMALS = 3;

class MetaStablePool {
    constructor(id, address, amp, swapFee, totalShares, tokens, tokensList) {
        this.poolType = exports.PoolTypes.MetaStable;
        this.MAX_IN_RATIO = bignumber.parseFixed('0.3', 18);
        this.MAX_OUT_RATIO = bignumber.parseFixed('0.3', 18);
        this.id = id;
        this.address = address;
        this.amp = bignumber.parseFixed(amp, MetaStablePool.AMP_DECIMALS);
        this.swapFee = bignumber.parseFixed(swapFee, 18);
        this.totalShares = bignumber.parseFixed(totalShares, 18);
        this.tokens = tokens;
        this.tokensList = tokensList;
    }
    static fromPool(pool) {
        if (!pool.amp)
            throw new Error('MetaStablePool missing amp factor');
        return new MetaStablePool(pool.id, pool.address, pool.amp, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList);
    }
    parsePoolPairData(tokenIn, tokenOut) {
        const tokenIndexIn = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenIn));
        if (tokenIndexIn < 0)
            throw 'Pool does not contain tokenIn';
        const tI = this.tokens[tokenIndexIn];
        const decimalsIn = tI.decimals;
        const tokenInPriceRate = bignumber.parseFixed(tI.priceRate, 18);
        const balanceIn = bignumber.formatFixed(bignumber.parseFixed(tI.balance, decimalsIn).mul(tokenInPriceRate).div(constants.WeiPerEther), decimalsIn);
        const tokenIndexOut = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenOut));
        if (tokenIndexOut < 0)
            throw 'Pool does not contain tokenOut';
        const tO = this.tokens[tokenIndexOut];
        const decimalsOut = tO.decimals;
        const tokenOutPriceRate = bignumber.parseFixed(tO.priceRate, 18);
        const balanceOut = bignumber.formatFixed(bignumber.parseFixed(tO.balance, decimalsOut).mul(tokenOutPriceRate).div(constants.WeiPerEther), decimalsOut);
        // Get all token balances
        const allBalances = this.tokens.map(({ balance, priceRate }) => bnum(balance).times(priceRate));
        const allBalancesScaled = this.tokens.map(({ balance, priceRate }) => bignumber.parseFixed(balance, 18).mul(bignumber.parseFixed(priceRate, 18)).div(constants.WeiPerEther));
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            balanceIn: bignumber.parseFixed(balanceIn, decimalsIn),
            balanceOut: bignumber.parseFixed(balanceOut, decimalsOut),
            swapFee: this.swapFee,
            allBalances,
            allBalancesScaled,
            amp: this.amp,
            tokenIndexIn: tokenIndexIn,
            tokenIndexOut: tokenIndexOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            tokenInPriceRate,
            tokenOutPriceRate,
        };
        return poolPairData;
    }
    getNormalizedLiquidity(poolPairData) {
        // This is an approximation as the actual normalized liquidity is a lot more complicated to calculate
        return bnum(bignumber.formatFixed(poolPairData.balanceOut.mul(poolPairData.amp), poolPairData.decimalsOut + MetaStablePool.AMP_DECIMALS));
    }
    getLimitAmountSwap(poolPairData, swapType) {
        // We multiply ratios by 10**-18 because we are in normalized space
        // so 0.5 should be 0.5 and not 500000000000000000
        // TODO: update bmath to use everything normalized
        // PoolPairData is using balances that have already been exchanged so need to convert back
        if (swapType === exports.SwapTypes.SwapExactIn) {
            return bnum(bignumber.formatFixed(poolPairData.balanceIn
                .mul(this.MAX_IN_RATIO)
                .div(poolPairData.tokenInPriceRate), poolPairData.decimalsIn));
        }
        else {
            return bnum(bignumber.formatFixed(poolPairData.balanceOut
                .mul(this.MAX_OUT_RATIO)
                .div(poolPairData.tokenOutPriceRate), poolPairData.decimalsOut));
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance;
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => isSameAddress(t.address, token));
            if (!T)
                throw Error('Pool does not contain this token');
            T.balance = bignumber.formatFixed(newBalance, T.decimals);
        }
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        try {
            if (amount.isZero())
                return ZERO;
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtWithFee = this.subtractSwapFeeAmount(bignumber.parseFixed(amount.dp(poolPairData.decimalsIn).toString(), poolPairData.decimalsIn), poolPairData.swapFee);
            const amountConverted = amtWithFee
                .mul(poolPairData.tokenInPriceRate)
                .div(constants.WeiPerEther);
            const returnAmt = _calcOutGivenIn$2(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((balance) => balance.toBigInt()), poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amountConverted.toBigInt(), BigInt(0));
            const returnEvmWithRate = bignumber.BigNumber.from(returnAmt)
                .mul(constants.WeiPerEther)
                .div(poolPairData.tokenOutPriceRate);
            return bnum(bignumber.formatFixed(returnEvmWithRate, 18));
        }
        catch (err) {
            // console.error(`_evmoutGivenIn: ${err.message}`);
            return ZERO;
        }
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        try {
            if (amount.isZero())
                return ZERO;
            const decimalsIn = poolPairData.decimalsIn;
            const decimalsOut = poolPairData.decimalsOut;
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const scalingFactorIn = poolPairData.tokenInPriceRate.toBigInt() *
                BigInt(10 ** (18 - decimalsIn));
            const scalingFactorOut = poolPairData.tokenOutPriceRate.toBigInt() *
                BigInt(10 ** (18 - decimalsOut));
            // eslint-disable-next-line prettier/prettier
            const amountBigInt = BigInt(amount
                .times(10 ** decimalsOut)
                .dp(0)
                .toString());
            const amountConverted = (amountBigInt * scalingFactorOut) / BigInt(10 ** 18);
            const returnAmount = _calcInGivenOut$2(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((balance) => balance.toBigInt()), poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amountConverted, BigInt(0));
            const returnAmountConverted = (returnAmount * BigInt(10 ** 18)) / scalingFactorIn;
            const returnAmtWithFee = this.addSwapFeeAmount(bignumber.BigNumber.from(returnAmountConverted), poolPairData.swapFee);
            return bnum(returnAmtWithFee.toString()).div(10 ** poolPairData.decimalsIn);
        }
        catch (err) {
            console.error(`_evminGivenOut: ${err.message}`);
            return ZERO;
        }
    }
    /**
     * _calcTokensOutGivenExactBptIn
     * @param bptAmountIn EVM scale.
     * @returns EVM scale.
     */
    _calcTokensOutGivenExactBptIn(bptAmountIn) {
        // token balances are stored in human scale and must be EVM for maths
        // Must take priceRate into consideration
        const balancesEvm = this.tokens
            .filter((t) => !isSameAddress(t.address, this.address))
            .map(({ balance, priceRate, decimals }) => bignumber.parseFixed(balance, 18)
            .mul(bignumber.parseFixed(priceRate, decimals))
            .div(constants.WeiPerEther)
            .toBigInt());
        let returnAmt;
        try {
            returnAmt = _calcTokensOutGivenExactBptIn(balancesEvm, bptAmountIn.toBigInt(), this.totalShares.toBigInt());
            return returnAmt.map((a) => bignumber.BigNumber.from(a.toString()));
        }
        catch (err) {
            return new Array(balancesEvm.length).fill(ZERO);
        }
    }
    /**
     * _calcBptOutGivenExactTokensIn
     * @param amountsIn EVM Scale
     * @returns EVM Scale
     */
    _calcBptOutGivenExactTokensIn(amountsIn) {
        try {
            // token balances are stored in human scale and must be EVM for maths
            // Must take priceRate into consideration
            const balancesEvm = this.tokens
                .filter((t) => !isSameAddress(t.address, this.address))
                .map(({ balance, priceRate, decimals }) => bignumber.parseFixed(balance, 18)
                .mul(bignumber.parseFixed(priceRate, decimals))
                .div(constants.WeiPerEther)
                .toBigInt());
            const bptAmountOut = _calcBptOutGivenExactTokensIn(this.amp.toBigInt(), balancesEvm, amountsIn.map((a) => a.toBigInt()), this.totalShares.toBigInt(), BigInt(0));
            return bignumber.BigNumber.from(bptAmountOut.toString());
        }
        catch (err) {
            return constants.Zero;
        }
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        const priceRateIn = bignumber.formatFixed(poolPairData.tokenInPriceRate, 18);
        const priceRateOut = bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18);
        const amountConverted = amount.times(bignumber.formatFixed(poolPairData.tokenInPriceRate, 18));
        const result = _spotPriceAfterSwapExactTokenInForTokenOut$3(amountConverted, poolPairData);
        return result.div(priceRateIn).times(priceRateOut);
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        const priceRateIn = bignumber.formatFixed(poolPairData.tokenInPriceRate, 18);
        const priceRateOut = bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18);
        const amountConverted = amount.times(bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18));
        const result = _spotPriceAfterSwapTokenInForExactTokenOut$3(amountConverted, poolPairData);
        return result.div(priceRateIn).times(priceRateOut);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        const priceRateOut = bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18);
        return _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$4(amount, poolPairData).times(priceRateOut);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        const priceRateIn = bignumber.formatFixed(poolPairData.tokenInPriceRate, 18);
        const priceRateOut = bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18);
        return _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$4(amount, poolPairData)
            .div(priceRateIn)
            .times(priceRateOut)
            .times(priceRateOut);
    }
    subtractSwapFeeAmount(amount, swapFee) {
        // https://github.com/balancer-labs/balancer-v2-monorepo/blob/c18ff2686c61a8cbad72cdcfc65e9b11476fdbc3/pkg/pool-utils/contracts/BasePool.sol#L466
        const feeAmount = amount.mul(swapFee).add(constants.WeiPerEther.sub(1)).div(constants.WeiPerEther);
        return amount.sub(feeAmount);
    }
    addSwapFeeAmount(amount, swapFee) {
        // https://github.com/balancer-labs/balancer-v2-monorepo/blob/c18ff2686c61a8cbad72cdcfc65e9b11476fdbc3/pkg/pool-utils/contracts/BasePool.sol#L458
        const feeAmount = constants.WeiPerEther.sub(swapFee);
        return amount.mul(constants.WeiPerEther).add(feeAmount.sub(1)).div(feeAmount);
    }
}
MetaStablePool.AMP_DECIMALS = 3;

function _calcBptOutPerMainIn(mainIn, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount out, so we round down overall.
    if (bptSupply == BigInt(0)) {
        return _toNominal(mainIn, params);
    }
    const previousNominalMain = _toNominal(mainBalance, params);
    const afterNominalMain = _toNominal(mainBalance + mainIn, params);
    const deltaNominalMain = afterNominalMain - previousNominalMain;
    const invariant = _calcInvariantUp(previousNominalMain, wrappedBalance, params);
    return MathSol.divDown(MathSol.mul(bptSupply, deltaNominalMain), invariant);
}
function _calcBptInPerMainOut(mainOut, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount in, so we round up overall.
    const previousNominalMain = _toNominal(mainBalance, params);
    const afterNominalMain = _toNominal(mainBalance - mainOut, params);
    const deltaNominalMain = previousNominalMain - afterNominalMain;
    const invariant = _calcInvariantDown(previousNominalMain, wrappedBalance, params);
    return MathSol.divUp(MathSol.mul(bptSupply, deltaNominalMain), invariant);
}
function _calcBptInPerWrappedOut(wrappedOut, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount in, so we round up overall.
    const nominalMain = _toNominal(mainBalance, params);
    const previousInvariant = _calcInvariantUp(nominalMain, wrappedBalance, params);
    const newWrappedBalance = wrappedBalance - wrappedOut;
    const newInvariant = _calcInvariantDown(nominalMain, newWrappedBalance, params);
    const newBptBalance = MathSol.divDown(MathSol.mul(bptSupply, newInvariant), previousInvariant);
    return bptSupply - newBptBalance;
}
function _calcWrappedOutPerMainIn(mainIn, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount out, so we round down overall.
    const previousNominalMain = _toNominal(mainBalance, params);
    const afterNominalMain = _toNominal(mainBalance + mainIn, params);
    const deltaNominalMain = afterNominalMain - previousNominalMain;
    return MathSol.divDownFixed(deltaNominalMain, params.rate);
}
function _calcWrappedInPerMainOut(mainOut, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount in, so we round up overall.
    const previousNominalMain = _toNominal(mainBalance, params);
    const afterNominalMain = _toNominal(mainBalance - mainOut, params);
    const deltaNominalMain = previousNominalMain - afterNominalMain;
    return MathSol.divUpFixed(deltaNominalMain, params.rate);
}
function _calcMainInPerBptOut(bptOut, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount in, so we round up overall.
    if (bptSupply == BigInt(0)) {
        return _fromNominal(bptOut, params);
    }
    const previousNominalMain = _toNominal(mainBalance, params);
    const invariant = _calcInvariantUp(previousNominalMain, wrappedBalance, params);
    const deltaNominalMain = MathSol.divUp(MathSol.mul(invariant, bptOut), bptSupply);
    const afterNominalMain = previousNominalMain + deltaNominalMain;
    const newMainBalance = _fromNominal(afterNominalMain, params);
    return newMainBalance - mainBalance;
}
function _calcMainOutPerBptIn(bptIn, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount out, so we round down overall.
    const previousNominalMain = _toNominal(mainBalance, params);
    const invariant = _calcInvariantDown(previousNominalMain, wrappedBalance, params);
    const deltaNominalMain = MathSol.divDown(MathSol.mul(invariant, bptIn), bptSupply);
    const afterNominalMain = previousNominalMain - deltaNominalMain;
    const newMainBalance = _fromNominal(afterNominalMain, params);
    return mainBalance - newMainBalance;
}
function _calcMainOutPerWrappedIn(wrappedIn, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount out, so we round down overall.
    const previousNominalMain = _toNominal(mainBalance, params);
    const deltaNominalMain = MathSol.mulDownFixed(wrappedIn, params.rate);
    const afterNominalMain = previousNominalMain - deltaNominalMain;
    const newMainBalance = _fromNominal(afterNominalMain, params);
    return mainBalance - newMainBalance;
}
function _calcMainInPerWrappedOut(wrappedOut, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount in, so we round up overall.
    const previousNominalMain = _toNominal(mainBalance, params);
    const deltaNominalMain = MathSol.mulUpFixed(wrappedOut, params.rate);
    const afterNominalMain = previousNominalMain + deltaNominalMain;
    const newMainBalance = _fromNominal(afterNominalMain, params);
    return newMainBalance - mainBalance;
}
function _calcBptOutPerWrappedIn(wrappedIn, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount out, so we round down overall.
    if (bptSupply == BigInt(0)) {
        // Return nominal DAI
        return MathSol.mulDownFixed(wrappedIn, params.rate);
    }
    const nominalMain = _toNominal(mainBalance, params);
    const previousInvariant = _calcInvariantUp(nominalMain, wrappedBalance, params);
    const newWrappedBalance = wrappedBalance + wrappedIn;
    const newInvariant = _calcInvariantDown(nominalMain, newWrappedBalance, params);
    const newBptBalance = MathSol.divDown(MathSol.mul(bptSupply, newInvariant), previousInvariant);
    return newBptBalance - bptSupply;
}
function _calcWrappedInPerBptOut(bptOut, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount in, so we round up overall.
    if (bptSupply == BigInt(0)) {
        // Return nominal DAI
        return MathSol.divUpFixed(bptOut, params.rate);
    }
    const nominalMain = _toNominal(mainBalance, params);
    const previousInvariant = _calcInvariantUp(nominalMain, wrappedBalance, params);
    const newBptBalance = bptSupply + bptOut;
    const newWrappedBalance = MathSol.divUpFixed(MathSol.divUp(MathSol.mul(newBptBalance, previousInvariant), bptSupply) - nominalMain, params.rate);
    return newWrappedBalance - wrappedBalance;
}
function _calcWrappedOutPerBptIn(bptIn, mainBalance, wrappedBalance, bptSupply, params) {
    // Amount out, so we round down overall.
    const nominalMain = _toNominal(mainBalance, params);
    const previousInvariant = _calcInvariantUp(nominalMain, wrappedBalance, params);
    const newBptBalance = bptSupply - bptIn;
    const newWrappedBalance = MathSol.divUpFixed(MathSol.divUp(MathSol.mul(newBptBalance, previousInvariant), bptSupply) - nominalMain, params.rate);
    return wrappedBalance - newWrappedBalance;
}
function _calcInvariantUp(nominalMainBalance, wrappedBalance, params) {
    return nominalMainBalance + MathSol.mulUpFixed(wrappedBalance, params.rate);
}
function _calcInvariantDown(nominalMainBalance, wrappedBalance, params) {
    return (nominalMainBalance + MathSol.mulDownFixed(wrappedBalance, params.rate));
}
function _toNominal(real, params) {
    // Fees are always rounded down: either direction would work but we need to be consistent, and rounding down
    // uses less gas.
    if (real < params.lowerTarget) {
        const fees = MathSol.mulDownFixed(params.lowerTarget - real, params.fee);
        return MathSol.sub(real, fees);
    }
    else if (real <= params.upperTarget) {
        return real;
    }
    else {
        const fees = MathSol.mulDownFixed(real - params.upperTarget, params.fee);
        return MathSol.sub(real, fees);
    }
}
function _fromNominal(nominal, params) {
    // Since real = nominal + fees, rounding down fees is equivalent to rounding down real.
    if (nominal < params.lowerTarget) {
        return MathSol.divDownFixed(nominal + MathSol.mulDownFixed(params.fee, params.lowerTarget), MathSol.ONE + params.fee);
    }
    else if (nominal <= params.upperTarget) {
        return nominal;
    }
    else {
        return MathSol.divDownFixed(nominal - MathSol.mulDownFixed(params.fee, params.upperTarget), MathSol.ONE - params.fee);
    }
}
function leftDerivativeToNominal(amount, params) {
    const oneMinusFee = MathSol.complementFixed(params.fee);
    const onePlusFee = MathSol.ONE + params.fee;
    if (amount <= params.lowerTarget) {
        return onePlusFee;
    }
    else if (amount <= params.upperTarget) {
        return MathSol.ONE;
    }
    else {
        return oneMinusFee;
    }
}
function rightDerivativeToNominal(amount, params) {
    const oneMinusFee = MathSol.complementFixed(params.fee);
    const onePlusFee = MathSol.ONE + params.fee;
    if (amount < params.lowerTarget) {
        return onePlusFee;
    }
    else if (amount < params.upperTarget) {
        return MathSol.ONE;
    }
    else {
        return oneMinusFee;
    }
}
function leftDerivativeFromNominal(amount, params) {
    const oneMinusFee = MathSol.complementFixed(params.fee);
    const onePlusFee = MathSol.ONE + params.fee;
    if (amount <= params.lowerTarget) {
        return MathSol.divUpFixed(MathSol.ONE, onePlusFee);
    }
    else if (amount <= params.upperTarget) {
        return MathSol.ONE;
    }
    else {
        return MathSol.divUpFixed(MathSol.ONE, oneMinusFee);
    }
}
function rightDerivativeFromNominal(amount, params) {
    const oneMinusFee = MathSol.complementFixed(params.fee);
    const onePlusFee = MathSol.ONE + params.fee;
    if (amount < params.lowerTarget) {
        return MathSol.divUpFixed(MathSol.ONE, onePlusFee);
    }
    else if (amount < params.upperTarget) {
        return MathSol.ONE;
    }
    else {
        return MathSol.divUpFixed(MathSol.ONE, oneMinusFee);
    }
}
/////////
/// SpotPriceAfterSwap
/////////
// PairType = 'main->BPT'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapBptOutPerMainIn(mainIn, mainBalance, wrappedBalance, bptSupply, params) {
    const finalMainBalance = mainIn + mainBalance;
    const previousNominalMain = _toNominal(mainBalance, params);
    const invariant = _calcInvariantDown(previousNominalMain, wrappedBalance, params);
    let poolFactor = MathSol.ONE;
    if (bptSupply != BigInt(0)) {
        poolFactor = MathSol.divUpFixed(invariant, bptSupply);
    }
    return MathSol.divUpFixed(poolFactor, rightDerivativeToNominal(finalMainBalance, params));
}
// PairType = 'main->BPT'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapMainInPerBptOut(bptOut, mainBalance, wrappedBalance, bptSupply, params) {
    const previousNominalMain = _toNominal(mainBalance, params);
    const invariant = _calcInvariantDown(previousNominalMain, wrappedBalance, params);
    let poolFactor = MathSol.ONE;
    if (bptSupply != BigInt(0)) {
        poolFactor = MathSol.divUpFixed(invariant, bptSupply);
    }
    const deltaNominalMain = MathSol.mulUpFixed(bptOut, poolFactor);
    const afterNominalMain = previousNominalMain + deltaNominalMain;
    return MathSol.mulUpFixed(poolFactor, rightDerivativeFromNominal(afterNominalMain, params));
}
// PairType = 'BPT->main'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapMainOutPerBptIn(bptIn, mainBalance, wrappedBalance, bptSupply, params) {
    const previousNominalMain = _toNominal(mainBalance, params);
    const invariant = _calcInvariantDown(previousNominalMain, wrappedBalance, params);
    const poolFactor = MathSol.divDownFixed(invariant, bptSupply);
    const deltaNominalMain = MathSol.mulDownFixed(bptIn, poolFactor);
    const afterNominalMain = MathSol.sub(previousNominalMain, deltaNominalMain);
    return MathSol.divUpFixed(MathSol.ONE, MathSol.mulUpFixed(poolFactor, leftDerivativeFromNominal(afterNominalMain, params)));
}
// PairType = 'BPT->main'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapBptInPerMainOut(mainOut, mainBalance, wrappedBalance, bptSupply, params) {
    const finalMainBalance = MathSol.sub(mainBalance, mainOut);
    const previousNominalMain = _toNominal(mainBalance, params);
    const invariant = _calcInvariantDown(previousNominalMain, wrappedBalance, params);
    const poolFactor = MathSol.divUpFixed(invariant, bptSupply);
    return MathSol.divUpFixed(leftDerivativeToNominal(finalMainBalance, params), poolFactor);
}
// PairType = 'main->wrapped'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapMainInPerWrappedOut(wrappedOut, mainBalance, wrappedBalance, bptSupply, params) {
    const previousNominalMain = _toNominal(mainBalance, params);
    const deltaNominalMain = MathSol.mulUpFixed(wrappedOut, params.rate);
    const afterNominalMain = previousNominalMain + deltaNominalMain;
    return MathSol.mulUpFixed(rightDerivativeFromNominal(afterNominalMain, params), params.rate);
}
// PairType = 'wrapped->main'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapWrappedInPerMainOut(mainOut, mainBalance, wrappedBalance, bptSupply, params) {
    const afterMain = mainBalance - mainOut;
    return MathSol.divUpFixed(leftDerivativeToNominal(afterMain, params), params.rate);
}
// PairType = 'main->wrapped'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapWrappedOutPerMainIn(mainIn, mainBalance, wrappedBalance, bptSupply, params) {
    return MathSol.divDownFixed(params.rate, rightDerivativeToNominal(mainBalance + mainIn, params));
}
// PairType = 'wrapped->main'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapMainOutPerWrappedIn(wrappedIn, mainBalance, wrappedBalance, bptSupply, params) {
    const previousNominalMain = _toNominal(mainBalance, params);
    const deltaNominalMain = MathSol.mulDownFixed(wrappedIn, params.rate);
    const afterNominalMain = previousNominalMain - deltaNominalMain;
    const inversePrice = MathSol.mulUpFixed(leftDerivativeFromNominal(afterNominalMain, params), params.rate);
    return MathSol.divUpFixed(MathSol.ONE, inversePrice);
}
// PairType = 'wrapped->BPT'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapBptOutPerWrappedIn(wrappedIn, mainBalance, wrappedBalance, bptSupply, params) {
    if (bptSupply == BigInt(0)) {
        return params.rate;
    }
    const nominalMain = _toNominal(mainBalance, params);
    const previousInvariant = _calcInvariantUp(nominalMain, wrappedBalance, params);
    return MathSol.divUpFixed(previousInvariant, MathSol.mulUpFixed(bptSupply, params.rate));
}
// PairType = 'BPT->wrapped'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapWrappedOutPerBptIn(bptIn, mainBalance, wrappedBalance, bptSupply, params) {
    const nominalMain = _toNominal(mainBalance, params);
    const previousInvariant = _calcInvariantUp(nominalMain, wrappedBalance, params);
    return MathSol.divUp(MathSol.mul(bptSupply, params.rate), previousInvariant);
}
// PairType = 'wrapped->BPT'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapWrappedInPerBptOut(bptOut, mainBalance, wrappedBalance, bptSupply, params) {
    if (bptSupply == BigInt(0)) {
        return MathSol.divUpFixed(MathSol.ONE, params.rate);
    }
    const nominalMain = _toNominal(mainBalance, params);
    const previousInvariant = _calcInvariantUp(nominalMain, wrappedBalance, params);
    return MathSol.divUpFixed(previousInvariant, MathSol.mulUpFixed(bptSupply, params.rate));
}
// PairType = 'BPT->wrapped'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapBptInPerWrappedOut(wrappedOut, mainBalance, wrappedBalance, bptSupply, params) {
    const nominalMain = _toNominal(mainBalance, params);
    const previousInvariant = _calcInvariantUp(nominalMain, wrappedBalance, params);
    return MathSol.divDown(MathSol.mul(bptSupply, params.rate), previousInvariant);
}
/////////
///  Derivatives of spotPriceAfterSwap
/////////
// Derivative of spot price is always zero, except at the target break points,
// where it is infinity in some sense. But we ignore this pathology, return zero
// and expect good behaviour at the optimization algorithm.

var PairTypes$1;
(function (PairTypes) {
    PairTypes[PairTypes["BptToMainToken"] = 0] = "BptToMainToken";
    PairTypes[PairTypes["MainTokenToBpt"] = 1] = "MainTokenToBpt";
    PairTypes[PairTypes["MainTokenToWrappedToken"] = 2] = "MainTokenToWrappedToken";
    PairTypes[PairTypes["WrappedTokenToMainToken"] = 3] = "WrappedTokenToMainToken";
    PairTypes[PairTypes["BptToWrappedToken"] = 4] = "BptToWrappedToken";
    PairTypes[PairTypes["WrappedTokenToBpt"] = 5] = "WrappedTokenToBpt";
})(PairTypes$1 || (PairTypes$1 = {}));
class LinearPool {
    constructor(id, address, swapFee, totalShares, tokens, tokensList, mainIndex, wrappedIndex, lowerTarget, upperTarget) {
        this.poolType = exports.PoolTypes.Linear;
        this.MAX_RATIO = bignumber.parseFixed('10', 18); // Specific for Linear pool types
        this.ALMOST_ONE = bignumber.parseFixed('0.99', 18);
        // Used for VirutalBpt and can be removed if SG is updated with VirtualBpt value
        this.MAX_TOKEN_BALANCE = bignumber.BigNumber.from('2').pow('112').sub('1');
        this.id = id;
        this.address = address;
        this.swapFee = bignumber.parseFixed(swapFee, 18);
        this.totalShares = bignumber.parseFixed(totalShares, 18);
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.mainIndex = mainIndex;
        this.bptIndex = this.tokensList.indexOf(this.address);
        this.wrappedIndex = wrappedIndex;
        this.wrappedDecimals = this.tokens[this.wrappedIndex].decimals;
        this.lowerTarget = bignumber.parseFixed(lowerTarget, 18); // Wrapped token will have same decimals as underlying
        this.upperTarget = bignumber.parseFixed(upperTarget, 18);
    }
    static fromPool(pool) {
        if (pool.mainIndex === undefined)
            throw new Error('LinearPool missing mainIndex');
        if (pool.wrappedIndex === undefined)
            throw new Error('LinearPool missing wrappedIndex');
        if (!pool.lowerTarget)
            throw new Error('LinearPool missing lowerTarget');
        if (!pool.upperTarget)
            throw new Error('LinearPool missing upperTarget');
        return new LinearPool(pool.id, pool.address, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList, pool.mainIndex, pool.wrappedIndex, pool.lowerTarget, pool.upperTarget);
    }
    parsePoolPairData(tokenIn, tokenOut) {
        let pairType;
        const tI = this.tokens.find((t) => isSameAddress(t.address, tokenIn));
        if (!tI)
            throw Error(`Pool does not contain token in ${tokenIn}`);
        const decimalsIn = tI.decimals;
        const balanceIn = bignumber.parseFixed(tI.balance, decimalsIn);
        const tO = this.tokens.find((t) => isSameAddress(t.address, tokenOut));
        if (!tO)
            throw Error(`Pool does not contain token out ${tokenOut}`);
        const decimalsOut = tO.decimals;
        const balanceOut = bignumber.parseFixed(tO.balance, decimalsOut);
        // Linear pools allow trading between token and pool BPT (phantom BPT)
        if (isSameAddress(tokenIn, this.address)) {
            if (isSameAddress(tokenOut, this.tokens[this.wrappedIndex].address))
                pairType = PairTypes$1.BptToWrappedToken;
            else
                pairType = PairTypes$1.BptToMainToken;
        }
        else if (isSameAddress(tokenOut, this.address)) {
            if (isSameAddress(tokenIn, this.tokens[this.wrappedIndex].address))
                pairType = PairTypes$1.WrappedTokenToBpt;
            else
                pairType = PairTypes$1.MainTokenToBpt;
        }
        else {
            if (isSameAddress(tokenIn, this.tokens[this.wrappedIndex].address))
                pairType = PairTypes$1.WrappedTokenToMainToken;
            else
                pairType = PairTypes$1.MainTokenToWrappedToken;
        }
        // Get all token balances scaled to 18
        const allBalancesScaled = this.tokens.map(({ balance }) => bignumber.parseFixed(balance, 18));
        // https://github.com/balancer-labs/balancer-v2-monorepo/blob/88a14eb623f6a22ef3f1afc5a8c49ebfa7eeceed/pkg/pool-linear/contracts/LinearPool.sol#L247
        // VirtualBPTSupply must be used for the maths
        // TO DO - SG should be updated to so that totalShares should return VirtualSupply
        const bptBalanceScaled = allBalancesScaled[this.bptIndex];
        const virtualBptSupply = this.MAX_TOKEN_BALANCE.sub(bptBalanceScaled);
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            pairType: pairType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            balanceIn: balanceIn,
            balanceOut: balanceOut,
            swapFee: this.swapFee,
            wrappedBalance: scale(bnum(this.tokens[this.wrappedIndex].balance), this.wrappedDecimals),
            wrappedBalanceScaled: allBalancesScaled[this.wrappedIndex],
            wrappedDecimals: this.wrappedDecimals,
            rate: bignumber.parseFixed(this.tokens[this.wrappedIndex].priceRate, 18),
            lowerTarget: this.lowerTarget,
            upperTarget: this.upperTarget,
            mainBalanceScaled: allBalancesScaled[this.mainIndex],
            bptBalanceScaled,
            virtualBptSupply,
        };
        return poolPairData;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getNormalizedLiquidity(poolPairData) {
        return bnum(0);
    }
    getLimitAmountSwap(poolPairData, swapType) {
        // Needs to return human scaled numbers
        const linearPoolPairData = poolPairData;
        const balanceOutHuman = scale(bnum(poolPairData.balanceOut.toString()), -poolPairData.decimalsOut);
        if (swapType === exports.SwapTypes.SwapExactIn) {
            if (linearPoolPairData.pairType === PairTypes$1.MainTokenToBpt) {
                return this._mainTokenInForExactBPTOut(poolPairData, balanceOutHuman
                    .times(this.ALMOST_ONE.toString())
                    .div(constants.WeiPerEther.toString()));
            }
            else if (linearPoolPairData.pairType === PairTypes$1.WrappedTokenToBpt) {
                // Swapping to BPT allows for a very large amount so using pre-minted amount as estimation
                return scale(bnum(this.MAX_TOKEN_BALANCE.toString()), -18);
            }
            else if (linearPoolPairData.pairType === PairTypes$1.BptToMainToken) {
                // Limit is amount of BPT in for pool balance of tokenOut
                // Amount must be in human scale
                return this._BPTInForExactMainTokenOut(linearPoolPairData, balanceOutHuman
                    .times(this.ALMOST_ONE.toString())
                    .div(constants.WeiPerEther.toString()));
            }
            else if (linearPoolPairData.pairType === PairTypes$1.BptToWrappedToken) {
                const limit = this._BPTInForExactWrappedTokenOut(poolPairData, balanceOutHuman
                    .times(this.ALMOST_ONE.toString())
                    .div(constants.WeiPerEther.toString()));
                // Returning Human scale
                return limit;
            }
            else if (linearPoolPairData.pairType ===
                PairTypes$1.MainTokenToWrappedToken ||
                linearPoolPairData.pairType ===
                    PairTypes$1.WrappedTokenToMainToken) {
                const limit = bnum(poolPairData.balanceOut
                    .mul(this.ALMOST_ONE)
                    .div(constants.WeiPerEther)
                    .toString());
                return scale(limit, -poolPairData.decimalsOut);
            }
            else
                return bnum(0);
        }
        else {
            if (linearPoolPairData.pairType === PairTypes$1.MainTokenToBpt ||
                linearPoolPairData.pairType === PairTypes$1.WrappedTokenToBpt) {
                const limit = bnum(poolPairData.balanceOut
                    .mul(this.MAX_RATIO)
                    .div(constants.WeiPerEther)
                    .toString());
                return scale(limit, -poolPairData.decimalsOut);
            }
            else if (linearPoolPairData.pairType === PairTypes$1.BptToMainToken ||
                linearPoolPairData.pairType === PairTypes$1.BptToWrappedToken ||
                linearPoolPairData.pairType ===
                    PairTypes$1.MainTokenToWrappedToken ||
                linearPoolPairData.pairType ===
                    PairTypes$1.WrappedTokenToMainToken) {
                const limit = bnum(poolPairData.balanceOut
                    .mul(this.ALMOST_ONE)
                    .div(constants.WeiPerEther)
                    .toString());
                return scale(limit, -poolPairData.decimalsOut);
            }
            else
                return bnum(0);
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        const T = this.tokens.find((t) => isSameAddress(t.address, token));
        if (!T)
            throw Error('Pool does not contain this token');
        // Converts to human scaled number and saves.
        T.balance = bignumber.formatFixed(newBalance, T.decimals);
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        if (poolPairData.pairType === PairTypes$1.MainTokenToBpt) {
            return this._exactMainTokenInForBPTOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.BptToMainToken) {
            return this._exactBPTInForMainTokenOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.WrappedTokenToBpt) {
            return this._exactWrappedTokenInForBPTOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.BptToWrappedToken) {
            return this._exactBPTInForWrappedTokenOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.MainTokenToWrappedToken) {
            return this._exactMainTokenInForWrappedOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.WrappedTokenToMainToken) {
            return this._exactWrappedTokenInForMainOut(poolPairData, amount);
        }
        else
            return bnum(0);
    }
    _exactWrappedTokenInForMainOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            const amt = _calcMainOutPerWrappedIn(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_DOWN mode (1)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsOut, 1);
        }
        catch (err) {
            return ZERO;
        }
    }
    _exactMainTokenInForWrappedOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            const amt = _calcWrappedOutPerMainIn(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_DOWN mode (1)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsOut, 1);
        }
        catch (err) {
            return ZERO;
        }
    }
    _exactMainTokenInForBPTOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            const amt = _calcBptOutPerMainIn(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_DOWN mode (1)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsOut, 1);
        }
        catch (err) {
            return ZERO;
        }
    }
    _exactBPTInForMainTokenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            const amt = _calcMainOutPerBptIn(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_DOWN mode (1)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsOut, 1);
        }
        catch (err) {
            return ZERO;
        }
    }
    _exactWrappedTokenInForBPTOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amt = _calcBptOutPerWrappedIn(bignumber.parseFixed(amount.toString(), 18).toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_DOWN mode (1)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsOut, 1);
        }
        catch (err) {
            return ZERO;
        }
    }
    _exactBPTInForWrappedTokenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            const amt = _calcWrappedOutPerBptIn(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_DOWN mode (1)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsOut, 1);
        }
        catch (err) {
            return ZERO;
        }
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        if (poolPairData.pairType === PairTypes$1.MainTokenToBpt) {
            return this._mainTokenInForExactBPTOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.BptToMainToken) {
            return this._BPTInForExactMainTokenOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.WrappedTokenToBpt) {
            return this._wrappedTokenInForExactBPTOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.BptToWrappedToken) {
            return this._BPTInForExactWrappedTokenOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.MainTokenToWrappedToken) {
            return this._mainTokenInForExactWrappedOut(poolPairData, amount);
        }
        else if (poolPairData.pairType === PairTypes$1.WrappedTokenToMainToken) {
            return this._wrappedTokenInForExactMainOut(poolPairData, amount);
        }
        else
            return bnum(0); // LinearPool does not support TokenToToken
    }
    _wrappedTokenInForExactMainOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            const amt = _calcWrappedInPerMainOut(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_DOWN mode (1)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsOut, 1);
        }
        catch (err) {
            return ZERO;
        }
    }
    _mainTokenInForExactWrappedOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            const amt = _calcMainInPerWrappedOut(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_DOWN mode (1)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsOut, 1);
        }
        catch (err) {
            return ZERO;
        }
    }
    _mainTokenInForExactBPTOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            // in = main
            // out = BPT
            const amt = _calcMainInPerBptOut(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_UP mode (0)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsIn, 0);
        }
        catch (err) {
            return ZERO;
        }
    }
    _BPTInForExactMainTokenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            const amt = _calcBptInPerMainOut(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_UP mode (0)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsIn, 0);
        }
        catch (err) {
            return ZERO;
        }
    }
    _wrappedTokenInForExactBPTOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = bignumber.parseFixed(amount.toString(), 18);
            const amt = _calcWrappedInPerBptOut(amtScaled.toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_UP mode (0)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsIn, 0);
        }
        catch (err) {
            return ZERO;
        }
    }
    _BPTInForExactWrappedTokenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amt = _calcBptInPerWrappedOut(
            // amtNoRate.toBigInt(),
            bignumber.parseFixed(amount.toString(), 18).toBigInt(), poolPairData.mainBalanceScaled.toBigInt(), poolPairData.wrappedBalanceScaled.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), {
                fee: poolPairData.swapFee.toBigInt(),
                lowerTarget: poolPairData.lowerTarget.toBigInt(),
                upperTarget: poolPairData.upperTarget.toBigInt(),
                rate: poolPairData.rate.toBigInt(),
            });
            // return human readable number
            // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
            // i.e. when using token with 2decimals 0.002 should be returned as 0
            // Uses ROUND_UP mode (0)
            return scale(bnum(amt.toString()), -18).dp(poolPairData.decimalsIn, 0);
        }
        catch (err) {
            return ZERO;
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcTokensOutGivenExactBptIn(bptAmountIn) {
        // Linear Pool doesn't have Exit Pool implementation
        return new Array(this.tokens.length).fill(constants.Zero);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcBptOutGivenExactTokensIn(amountsIn) {
        // Linear Pool doesn't have Join Pool implementation
        return constants.Zero;
    }
    // SPOT PRICES AFTER SWAP
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        const bigintAmount = bignumber.parseFixed(amount.dp(18).toString(), 18).toBigInt();
        const mainBalance = poolPairData.mainBalanceScaled.toBigInt();
        const wrappedBalance = poolPairData.wrappedBalanceScaled.toBigInt();
        const bptSupply = poolPairData.virtualBptSupply.toBigInt();
        const params = {
            fee: poolPairData.swapFee.toBigInt(),
            lowerTarget: poolPairData.lowerTarget.toBigInt(),
            upperTarget: poolPairData.upperTarget.toBigInt(),
            rate: poolPairData.rate.toBigInt(),
        };
        let result;
        if (poolPairData.pairType === PairTypes$1.MainTokenToBpt) {
            result = _spotPriceAfterSwapBptOutPerMainIn(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.BptToMainToken) {
            result = _spotPriceAfterSwapMainOutPerBptIn(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.WrappedTokenToBpt) {
            result = _spotPriceAfterSwapBptOutPerWrappedIn(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.BptToWrappedToken) {
            result = _spotPriceAfterSwapWrappedOutPerBptIn(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.MainTokenToWrappedToken) {
            result = _spotPriceAfterSwapWrappedOutPerMainIn(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.WrappedTokenToMainToken) {
            result = _spotPriceAfterSwapMainOutPerWrappedIn(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else
            return bnum(0);
        return scale(bnum(result.toString()), -18).dp(poolPairData.decimalsOut, 0);
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        const bigintAmount = bignumber.parseFixed(amount.dp(18).toString(), 18).toBigInt();
        const mainBalance = poolPairData.mainBalanceScaled.toBigInt();
        const wrappedBalance = poolPairData.wrappedBalanceScaled.toBigInt();
        const bptSupply = poolPairData.virtualBptSupply.toBigInt();
        const params = {
            fee: poolPairData.swapFee.toBigInt(),
            lowerTarget: poolPairData.lowerTarget.toBigInt(),
            upperTarget: poolPairData.upperTarget.toBigInt(),
            rate: poolPairData.rate.toBigInt(),
        };
        let result;
        if (poolPairData.pairType === PairTypes$1.MainTokenToBpt) {
            result = _spotPriceAfterSwapMainInPerBptOut(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.BptToMainToken) {
            result = _spotPriceAfterSwapBptInPerMainOut(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.WrappedTokenToBpt) {
            result = _spotPriceAfterSwapWrappedInPerBptOut(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.BptToWrappedToken) {
            result = _spotPriceAfterSwapBptInPerWrappedOut(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.MainTokenToWrappedToken) {
            result = _spotPriceAfterSwapMainInPerWrappedOut(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else if (poolPairData.pairType === PairTypes$1.WrappedTokenToMainToken) {
            result = _spotPriceAfterSwapWrappedInPerMainOut(bigintAmount, mainBalance, wrappedBalance, bptSupply, params);
        }
        else
            return bnum(0);
        return scale(bnum(result.toString()), -18).dp(poolPairData.decimalsOut, 0);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    poolPairData, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    amount) {
        return bnum(0);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    poolPairData, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    amount) {
        return bnum(0);
    }
}

// calc_out_given_in (swap)
function _exactTokenInForTokenOut$1(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ai = amount.toNumber();
    return bnum(Bo -
        (Bi ** (1 - t) - (Ai + Bi) ** (1 - t) + Bo ** (1 - t)) **
            (1 / (1 - t)) -
        Math.abs(Ai -
            Bo +
            (Bi ** (1 - t) - (Ai + Bi) ** (1 - t) + Bo ** (1 - t)) **
                (1 / (1 - t))) *
            f);
}
// calc_in_given_out (swap)
function _tokenInForExactTokenOut$1(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ao = amount.toNumber();
    return bnum(-Bi +
        (Bi ** (1 - t) + Bo ** (1 - t) - (-Ao + Bo) ** (1 - t)) **
            (1 / (1 - t)) +
        Math.abs(-Ao -
            Bi +
            (Bi ** (1 - t) + Bo ** (1 - t) - (-Ao + Bo) ** (1 - t)) **
                (1 / (1 - t))) *
            f);
}
/////////
/// SpotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOut$1(amount, poolPairData) {
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ai = amount.toNumber();
    return bnum(1 /
        ((Bi ** (1 - t) - (Ai + Bi) ** (1 - t) + Bo ** (1 - t)) **
            (-1 + 1 / (1 - t)) /
            (Ai + Bi) ** t -
            Math.abs(1 -
                (Bi ** (1 - t) -
                    (Ai + Bi) ** (1 - t) +
                    Bo ** (1 - t)) **
                    (-1 + 1 / (1 - t)) /
                    (Ai + Bi) ** t) *
                f));
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOut$1(amount, poolPairData) {
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ao = amount.toNumber();
    return bnum((Bi ** (1 - t) + Bo ** (1 - t) - (-Ao + Bo) ** (1 - t)) **
        (-1 + 1 / (1 - t)) /
        (-Ao + Bo) ** t +
        Math.abs(-1 +
            (Bi ** (1 - t) + Bo ** (1 - t) - (-Ao + Bo) ** (1 - t)) **
                (-1 + 1 / (1 - t)) /
                (-Ao + Bo) ** t) *
            f);
}
/////////
///  Derivatives of spotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$3(amount, poolPairData) {
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ai = amount.toNumber();
    return bnum(-((-(((Bi ** (1 - t) - (Ai + Bi) ** (1 - t) + Bo ** (1 - t)) **
        (-2 + 1 / (1 - t)) *
        (-1 + 1 / (1 - t)) *
        (1 - t)) /
        (Ai + Bi) ** (2 * t)) -
        (Ai + Bi) ** (-1 - t) *
            (Bi ** (1 - t) - (Ai + Bi) ** (1 - t) + Bo ** (1 - t)) **
                (-1 + 1 / (1 - t)) *
            t -
        f *
            Math.abs(((Bi ** (1 - t) -
                (Ai + Bi) ** (1 - t) +
                Bo ** (1 - t)) **
                (-2 + 1 / (1 - t)) *
                (-1 + 1 / (1 - t)) *
                (1 - t)) /
                (Ai + Bi) ** (2 * t) +
                (Ai + Bi) ** (-1 - t) *
                    (Bi ** (1 - t) -
                        (Ai + Bi) ** (1 - t) +
                        Bo ** (1 - t)) **
                        (-1 + 1 / (1 - t)) *
                    t)) /
        ((Bi ** (1 - t) - (Ai + Bi) ** (1 - t) + Bo ** (1 - t)) **
            (-1 + 1 / (1 - t)) /
            (Ai + Bi) ** t -
            Math.abs(1 -
                (Bi ** (1 - t) -
                    (Ai + Bi) ** (1 - t) +
                    Bo ** (1 - t)) **
                    (-1 + 1 / (1 - t)) /
                    (Ai + Bi) ** t) *
                f) **
            2));
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$3(amount, poolPairData) {
    const f = parseFloat(bignumber.formatFixed(poolPairData.swapFee, 18));
    const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
    const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ao = amount.toNumber();
    return bnum(((Bi ** (1 - t) + Bo ** (1 - t) - (-Ao + Bo) ** (1 - t)) **
        (-2 + 1 / (1 - t)) *
        (-1 + 1 / (1 - t)) *
        (1 - t)) /
        (-Ao + Bo) ** (2 * t) +
        (-Ao + Bo) ** (-1 - t) *
            (Bi ** (1 - t) + Bo ** (1 - t) - (-Ao + Bo) ** (1 - t)) **
                (-1 + 1 / (1 - t)) *
            t +
        f *
            Math.abs(((Bi ** (1 - t) + Bo ** (1 - t) - (-Ao + Bo) ** (1 - t)) **
                (-2 + 1 / (1 - t)) *
                (-1 + 1 / (1 - t)) *
                (1 - t)) /
                (-Ao + Bo) ** (2 * t) +
                (-Ao + Bo) ** (-1 - t) *
                    (Bi ** (1 - t) +
                        Bo ** (1 - t) -
                        (-Ao + Bo) ** (1 - t)) **
                        (-1 + 1 / (1 - t)) *
                    t));
}
function getTimeTillExpiry(expiryTime, currentBlockTimestamp, unitSeconds) {
    let t = currentBlockTimestamp < expiryTime
        ? expiryTime - currentBlockTimestamp
        : 0;
    t = t / unitSeconds;
    return t;
}

class ElementPool {
    constructor(id, address, swapFee, totalShares, tokens, tokensList, expiryTime, unitSeconds, principalToken, baseToken) {
        this.poolType = exports.PoolTypes.Element;
        this.id = id;
        this.address = address;
        this.swapFee = bignumber.parseFixed(swapFee, 18);
        this.totalShares = bignumber.parseFixed(totalShares, 18);
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.expiryTime = expiryTime;
        this.unitSeconds = unitSeconds;
        this.principalToken = principalToken;
        this.baseToken = baseToken;
        this.currentBlockTimestamp = 0;
    }
    static fromPool(pool) {
        if (!pool.expiryTime)
            throw new Error('ElementPool missing expiryTime');
        if (!pool.unitSeconds)
            throw new Error('ElementPool missing unitSeconds');
        if (!pool.principalToken)
            throw new Error('ElementPool missing principalToken');
        if (!pool.baseToken)
            throw new Error('ElementPool missing baseToken');
        return new ElementPool(pool.id, pool.address, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList, pool.expiryTime, pool.unitSeconds, pool.principalToken, pool.baseToken);
    }
    setCurrentBlockTimestamp(timestamp) {
        this.currentBlockTimestamp = timestamp;
    }
    parsePoolPairData(tokenIn, tokenOut) {
        const tokenIndexIn = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenIn));
        if (tokenIndexIn < 0)
            throw 'Pool does not contain tokenIn';
        const tI = this.tokens[tokenIndexIn];
        const decimalsIn = tI.decimals;
        const tokenIndexOut = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenOut));
        if (tokenIndexOut < 0)
            throw 'Pool does not contain tokenOut';
        const tO = this.tokens[tokenIndexOut];
        const decimalsOut = tO.decimals;
        // We already add the virtual LP shares to the right balance
        const realBalanceIn = bignumber.parseFixed(tI.balance, decimalsIn);
        const realBalanceOut = bignumber.parseFixed(tO.balance, decimalsOut);
        let balanceIn = realBalanceIn;
        let balanceOut = realBalanceOut;
        if (tokenIn == this.principalToken) {
            balanceIn = realBalanceIn.add(this.totalShares);
        }
        else if (tokenOut == this.principalToken) {
            balanceOut = realBalanceOut.add(this.totalShares);
        }
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            principalToken: this.principalToken,
            baseToken: this.baseToken,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            balanceIn,
            balanceOut,
            swapFee: this.swapFee,
            totalShares: this.totalShares,
            expiryTime: this.expiryTime,
            unitSeconds: this.unitSeconds,
            currentBlockTimestamp: this.currentBlockTimestamp,
        };
        return poolPairData;
    }
    // Normalized liquidity is an abstract term that can be thought of the
    // inverse of the slippage. It is proportional to the token balances in the
    // pool but also depends on the shape of the invariant curve.
    // As a standard, we define normalized liquidity in tokenOut
    getNormalizedLiquidity(poolPairData) {
        // This could be refined by using the inverse of the slippage, but
        // in practice this won't have a big impact in path selection for
        // multi-hops so not a big priority
        return bnum(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
    }
    getLimitAmountSwap(poolPairData, swapType) {
        const MAX_OUT_RATIO = bignumber.parseFixed('0.3', 18);
        if (swapType === exports.SwapTypes.SwapExactIn) {
            // "Ai < (Bi**(1-t)+Bo**(1-t))**(1/(1-t))-Bi" must hold in order for
            // base of root to be non-negative
            const Bi = parseFloat(bignumber.formatFixed(poolPairData.balanceIn, poolPairData.decimalsIn));
            const Bo = parseFloat(bignumber.formatFixed(poolPairData.balanceOut, poolPairData.decimalsOut));
            const t = getTimeTillExpiry(this.expiryTime, this.currentBlockTimestamp, this.unitSeconds);
            return bnum((Bi ** (1 - t) + Bo ** (1 - t)) ** (1 / (1 - t)) - Bi);
        }
        else {
            return bnum(bignumber.formatFixed(poolPairData.balanceOut.mul(MAX_OUT_RATIO).div(constants.WeiPerEther), poolPairData.decimalsOut));
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance;
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => isSameAddress(t.address, token));
            if (!T)
                throw Error('Pool does not contain this token');
            T.balance = bignumber.formatFixed(newBalance, T.decimals);
        }
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _exactTokenInForTokenOut$1(amount, poolPairData);
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _tokenInForExactTokenOut$1(amount, poolPairData);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcTokensOutGivenExactBptIn(bptAmountIn) {
        // Missing maths for this
        return new Array(this.tokens.length).fill(constants.Zero);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcBptOutGivenExactTokensIn(amountsIn) {
        // Missing maths for this
        return constants.Zero;
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _spotPriceAfterSwapExactTokenInForTokenOut$1(amount, poolPairData);
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _spotPriceAfterSwapTokenInForExactTokenOut$1(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$3(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$3(amount, poolPairData);
    }
}

// All functions are adapted from the solidity ones to be found on:
// https://github.com/balancer-labs/balancer-core-v2/blob/master/contracts/pools/stable/StableMath.sol
// TODO: implement all up and down rounding variations
/**********************************************************************************************
    // invariant                                                                                 //
    // D = invariant to compute                                                                  //
    // A = amplifier                n * D^2 + A * n^n * S * (n^n * P / D^(n−1))                  //
    // S = sum of balances         ____________________________________________                  //
    // P = product of balances    (n+1) * D + ( A * n^n − 1)* (n^n * P / D^(n−1))                //
    // n = number of tokens                                                                      //
    **********************************************************************************************/
function _invariant(amp, // amp
balances // balances
) {
    let sum = ZERO;
    const totalCoins = balances.length;
    for (let i = 0; i < totalCoins; i++) {
        sum = sum.plus(balances[i]);
    }
    if (sum.isZero()) {
        return ZERO;
    }
    let prevInv = ZERO;
    let inv = sum;
    // amp is passed as an ethers bignumber while maths uses bignumber.js
    const ampAdjusted = bnum(bignumber.formatFixed(amp, 3));
    const ampTimesNpowN = ampAdjusted.times(totalCoins ** totalCoins); // A*n^n
    for (let i = 0; i < 255; i++) {
        let P_D = bnum(totalCoins).times(balances[0]);
        for (let j = 1; j < totalCoins; j++) {
            //P_D is rounded up
            P_D = P_D.times(balances[j]).times(totalCoins).div(inv);
        }
        prevInv = inv;
        //inv is rounded up
        inv = bnum(totalCoins)
            .times(inv)
            .times(inv)
            .plus(ampTimesNpowN.times(sum).times(P_D))
            .div(bnum(totalCoins + 1)
            .times(inv)
            .plus(ampTimesNpowN.minus(1).times(P_D)));
        // Equality with the precision of 1
        if (inv.gt(prevInv)) {
            if (inv.minus(prevInv).lt(bnum(10 ** -18))) {
                break;
            }
        }
        else if (prevInv.minus(inv).lt(bnum(10 ** -18))) {
            break;
        }
    }
    //Result is rounded up
    return inv;
}
// // This function has to be zero if the invariant D was calculated correctly
// // It was only used for double checking that the invariant was correct
// export function _invariantValueFunction(
//     amp: BigNumber, // amp
//     balances: BigNumber[], // balances
//     D: BigNumber
// ): BigNumber {
//     let invariantValueFunction;
//     let prod = ONE;
//     let sum = ZERO;
//     for (let i = 0; i < balances.length; i++) {
//         prod = prod.times(balances[i]);
//         sum = sum.plus(balances[i]);
//     }
//     let n = bnum(balances.length);
//     // NOT! working based on Daniel's equation: https://www.notion.so/Analytical-for-2-tokens-1cd46debef6648dd81f2d75bae941fea
//     // invariantValueFunction = amp.times(sum)
//     //     .plus((ONE.div(n.pow(n)).minus(amp)).times(D))
//     //     .minus((ONE.div(n.pow(n.times(2)).times(prod))).times(D.pow(n.plus(ONE))));
//     invariantValueFunction = D.pow(n.plus(ONE))
//         .div(n.pow(n).times(prod))
//         .plus(D.times(amp.times(n.pow(n)).minus(ONE)))
//         .minus(amp.times(n.pow(n)).times(sum));
//     return invariantValueFunction;
// }
// Adapted from StableMath.sol, _outGivenIn()
// * Added swap fee at very first line
/**********************************************************************************************
    // outGivenIn token x for y - polynomial equation to solve                                   //
    // ay = amount out to calculate                                                              //
    // by = balance token out                                                                    //
    // y = by - ay                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               y^2 + ( S - ----------  - 1) * y -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but y                                                           //
    // P = product of final balances but y                                                       //
    **********************************************************************************************/
function _exactTokenInForTokenOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    let tokenAmountIn = amount;
    tokenAmountIn = tokenAmountIn
        .times(constants.WeiPerEther.sub(swapFee).toString())
        .div(constants.WeiPerEther.toString());
    //Invariant is rounded up
    const inv = _invariant(amp, balances);
    let p = inv;
    let sum = ZERO;
    const totalCoins = bnum(balances.length);
    let n_pow_n = ONE;
    let x = ZERO;
    for (let i = 0; i < balances.length; i++) {
        n_pow_n = n_pow_n.times(totalCoins);
        if (i == tokenIndexIn) {
            x = balances[i].plus(tokenAmountIn);
        }
        else if (i != tokenIndexOut) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    //Calculate out balance
    const y = _solveAnalyticalBalance(sum, inv, amp, n_pow_n, p);
    //Result is rounded down
    // return balances[tokenIndexOut] > y ? balances[tokenIndexOut].minus(y) : 0;
    return balances[tokenIndexOut].minus(y);
}
// Adapted from StableMath.sol, _inGivenOut()
// * Added swap fee at very last line
/**********************************************************************************************
    // inGivenOut token x for y - polynomial equation to solve                                   //
    // ax = amount in to calculate                                                               //
    // bx = balance token in                                                                     //
    // x = bx + ax                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               x^2 + ( S - ----------  - 1) * x -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but x                                                           //
    // P = product of final balances but x                                                       //
    **********************************************************************************************/
function _tokenInForExactTokenOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountOut = amount;
    //Invariant is rounded up
    const inv = _invariant(amp, balances);
    let p = inv;
    let sum = ZERO;
    const totalCoins = bnum(balances.length);
    let n_pow_n = ONE;
    let x = ZERO;
    for (let i = 0; i < balances.length; i++) {
        n_pow_n = n_pow_n.times(totalCoins);
        if (i == tokenIndexOut) {
            x = balances[i].minus(tokenAmountOut);
        }
        else if (i != tokenIndexIn) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    //Calculate in balance
    const y = _solveAnalyticalBalance(sum, inv, amp, n_pow_n, p);
    //Result is rounded up
    return y
        .minus(balances[tokenIndexIn])
        .multipliedBy(constants.WeiPerEther.toString())
        .div(constants.WeiPerEther.sub(swapFee).toString());
}
/*
Flow of calculations:
amountBPTOut -> newInvariant -> (amountInProportional, amountInAfterFee) ->
amountInPercentageExcess -> amountIn
*/
function _tokenInForExactBPTOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, virtualBptSupply, decimalsOut, tokenIndexIn, swapFee, } = poolPairData;
    const balances = [...allBalances];
    const bptAmountOut = amount;
    // Get current invariant
    const currentInvariant = _invariant(amp, balances);
    // Calculate new invariant
    const bnumBalanceOut = bnum(bignumber.formatFixed(virtualBptSupply, decimalsOut));
    const newInvariant = bnumBalanceOut
        .plus(bptAmountOut)
        .div(bnumBalanceOut)
        .times(currentInvariant);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weight of token
    let sumBalances = bnum(0);
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // get amountInAfterFee
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances(amp, balances, newInvariant, tokenIndexIn);
    const amountInAfterFee = newBalanceTokenIndex.minus(balances[tokenIndexIn]);
    // Get tokenBalancePercentageExcess
    const currentWeight = balances[tokenIndexIn].div(sumBalances);
    const tokenBalancePercentageExcess = bnum(1).minus(currentWeight);
    // return amountIn
    const bnumSwapFee = bnum(bignumber.formatFixed(swapFee, 18));
    return amountInAfterFee.div(bnum(1).minus(tokenBalancePercentageExcess.times(bnumSwapFee)));
}
function _BPTInForExactTokenOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, virtualBptSupply, decimalsIn, tokenIndexOut, swapFee, } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountOut = amount;
    // Get current invariant
    const currentInvariant = _invariant(amp, balances);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weights of each token relative to the sum of all balances
    let sumBalances = bnum(0);
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // Calculate the weighted balance ratio without considering fees
    const currentWeight = balances[tokenIndexOut].div(sumBalances);
    const tokenBalanceRatioWithoutFee = balances[tokenIndexOut]
        .minus(tokenAmountOut)
        .div(balances[tokenIndexOut]);
    const weightedBalanceRatio = bnum(1).minus(bnum(1).minus(tokenBalanceRatioWithoutFee).times(currentWeight));
    // calculate new amounts in taking into account the fee on the % excess
    const tokenBalancePercentageExcess = weightedBalanceRatio
        .minus(tokenBalanceRatioWithoutFee)
        .div(bnum(1).minus(tokenBalanceRatioWithoutFee));
    const bnumSwapFee = bnum(bignumber.formatFixed(swapFee, 18));
    const amountOutBeforeFee = tokenAmountOut.div(bnum(1).minus(bnumSwapFee.times(tokenBalancePercentageExcess)));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amountOutBeforeFee);
    // get new invariant taking into account swap fees
    const newInvariant = _invariant(amp, balances);
    // return amountBPTIn
    const bnumBalanceIn = bnum(bignumber.formatFixed(virtualBptSupply, decimalsIn));
    return bnumBalanceIn.times(bnum(1).minus(newInvariant.div(currentInvariant)));
}
//This function calculates the balance of a given token (tokenIndex)
// given all the other balances and the invariant
function _getTokenBalanceGivenInvariantAndAllOtherBalances(amp, balances, inv, tokenIndex) {
    let p = inv;
    let sum = ZERO;
    const totalCoins = balances.length;
    let nPowN = ONE;
    let x = ZERO;
    for (let i = 0; i < totalCoins; i++) {
        nPowN = nPowN.times(totalCoins);
        if (i != tokenIndex) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    // Calculate token balance
    return _solveAnalyticalBalance(sum, inv, amp, nPowN, p);
}
//This function calcuates the analytical solution to find the balance required
function _solveAnalyticalBalance(sum, inv, amp, n_pow_n, p) {
    // amp is passed as an ethers bignumber while maths uses bignumber.js
    const oldBN_amp = bnum(bignumber.formatFixed(amp, 3));
    //Round up p
    p = p.times(inv).div(oldBN_amp.times(n_pow_n).times(n_pow_n));
    //Round down b
    const b = sum.plus(inv.div(oldBN_amp.times(n_pow_n)));
    //Round up c
    // let c = inv >= b
    //     ? inv.minus(b).plus(Math.sqrtUp(inv.minus(b).times(inv.minus(b)).plus(p.times(4))))
    //     : Math.sqrtUp(b.minus(inv).times(b.minus(inv)).plus(p.times(4))).minus(b.minus(inv));
    let c;
    if (inv.gte(b)) {
        c = inv
            .minus(b)
            .plus(inv.minus(b).times(inv.minus(b)).plus(p.times(4)).sqrt());
    }
    else {
        c = b
            .minus(inv)
            .times(b.minus(inv))
            .plus(p.times(4))
            .sqrt()
            .minus(b.minus(inv));
    }
    //Round up y
    return c.div(2);
}
//////////////////////
////  These functions have been added exclusively for the SORv2
//////////////////////
function _exactTokenInForBPTOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, virtualBptSupply, tokenIndexIn, swapFee, decimalsOut, } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountIn = amount;
    // Get current invariant
    const currentInvariant = _invariant(amp, balances);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weights of each token relative to the sum of all balances
    let sumBalances = bnum(0);
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // Calculate the weighted balance ratio without considering fees
    const currentWeight = balances[tokenIndexIn].div(sumBalances);
    const tokenBalanceRatioWithoutFee = balances[tokenIndexIn]
        .plus(tokenAmountIn)
        .div(balances[tokenIndexIn]);
    const weightedBalanceRatio = bnum(1).plus(tokenBalanceRatioWithoutFee.minus(bnum(1)).times(currentWeight));
    // calculate new amountIn taking into account the fee on the % excess
    // Percentage of the amount supplied that will be implicitly swapped for other tokens in the pool
    const tokenBalancePercentageExcess = tokenBalanceRatioWithoutFee
        .minus(weightedBalanceRatio)
        .div(tokenBalanceRatioWithoutFee.minus(bnum(1)));
    const bnumSwapFee = bnum(bignumber.formatFixed(swapFee, 18));
    const amountInAfterFee = tokenAmountIn.times(bnum(1).minus(bnumSwapFee.times(tokenBalancePercentageExcess)));
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amountInAfterFee);
    // get new invariant taking into account swap fees
    const newInvariant = _invariant(amp, balances);
    const bnumBalanceOut = bnum(bignumber.formatFixed(virtualBptSupply, decimalsOut));
    return bnumBalanceOut.times(newInvariant.div(currentInvariant).minus(bnum(1)));
}
/*
Flow of calculations:
amountBPTin -> newInvariant -> (amountOutProportional, amountOutBeforeFee) ->
amountOutPercentageExcess -> amountOut
*/
function _exactBPTInForTokenOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const bptAmountIn = amount;
    /**********************************************************************************************
    // TODO description                            //
    **********************************************************************************************/
    // Get current invariant
    const currentInvariant = _invariant(amp, balances);
    // Calculate new invariant
    const bnumBalanceIn = bnum(bignumber.formatFixed(poolPairData.virtualBptSupply, 18));
    const newInvariant = bnumBalanceIn
        .minus(bptAmountIn)
        .div(bnumBalanceIn)
        .times(currentInvariant);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weight of token
    let sumBalances = bnum(0);
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances(amp, balances, newInvariant, tokenIndexOut);
    const amountOutBeforeFee = balances[tokenIndexOut].minus(newBalanceTokenIndex);
    // Calculate tokenBalancePercentageExcess
    const currentWeight = balances[tokenIndexOut].div(sumBalances);
    const tokenBalancePercentageExcess = bnum(1).minus(currentWeight);
    const ans = amountOutBeforeFee.times(ONE.minus(tokenBalancePercentageExcess
        .times(swapFee.toString())
        .div(constants.WeiPerEther.toString())));
    return ans;
}
function _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, is_first_derivative, wrt_out) {
    const totalCoins = balances.length;
    const D = _invariant(amp, balances);
    let S = ZERO;
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn && i != tokenIndexOut) {
            S = S.plus(balances[i]);
        }
    }
    const x = balances[tokenIndexIn];
    const y = balances[tokenIndexOut];
    // amp is passed as an ethers bignumber while maths uses bignumber.js
    const ampAdjusted = bnum(bignumber.formatFixed(amp, 3));
    const a = ampAdjusted.times(totalCoins ** totalCoins); // = ampTimesNpowN
    const b = S.minus(D).times(a).plus(D);
    const twoaxy = bnum(2).times(a).times(x).times(y);
    const partial_x = twoaxy.plus(a.times(y).times(y)).plus(b.times(y));
    const partial_y = twoaxy.plus(a.times(x).times(x)).plus(b.times(x));
    let ans;
    if (is_first_derivative) {
        ans = partial_x.div(partial_y);
    }
    else {
        const partial_xx = bnum(2).times(a).times(y);
        const partial_yy = bnum(2).times(a).times(x);
        const partial_xy = partial_xx.plus(partial_yy).plus(b);
        const numerator = bnum(2)
            .times(partial_x)
            .times(partial_y)
            .times(partial_xy)
            .minus(partial_xx.times(partial_y.pow(2)))
            .minus(partial_yy.times(partial_x.pow(2)));
        const denominator = partial_x.pow(2).times(partial_y);
        ans = numerator.div(denominator);
        if (wrt_out) {
            ans = ans.times(partial_y).div(partial_x);
        }
    }
    return ans;
}
/////////
/// SpotPriceAfterSwap
/////////
function _poolDerivativesBPT(amp, balances, bptSupply, tokenIndexIn, is_first_derivative, is_BPT_out, wrt_out) {
    const totalCoins = balances.length;
    const D = _invariant(amp, balances);
    let S = ZERO;
    let D_P = D.div(totalCoins);
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn) {
            S = S.plus(balances[i]);
            D_P = D_P.times(D).div(balances[i].times(totalCoins));
        }
    }
    const x = balances[tokenIndexIn];
    const alpha = bnum(amp.toString()).times(totalCoins ** totalCoins); // = ampTimesNpowN
    const beta = alpha.times(S);
    const gamma = ONE.minus(alpha);
    const partial_x = bnum(2)
        .times(alpha)
        .times(x)
        .plus(beta)
        .plus(gamma.times(D));
    const minus_partial_D = D_P.times(totalCoins + 1).minus(gamma.times(x));
    const partial_D = ZERO.minus(minus_partial_D);
    let ans;
    if (is_first_derivative) {
        ans = partial_x.div(minus_partial_D).times(bptSupply).div(D);
    }
    else {
        const partial_xx = bnum(2).times(alpha);
        const partial_xD = gamma;
        const n_times_nplusone = totalCoins * (totalCoins + 1);
        const partial_DD = ZERO.minus(D_P.times(n_times_nplusone).div(D));
        if (is_BPT_out) {
            const term1 = partial_xx.times(partial_D).div(partial_x.pow(2));
            const term2 = bnum(2).times(partial_xD).div(partial_x);
            const term3 = partial_DD.div(partial_D);
            ans = term1.minus(term2).plus(term3).times(D).div(bptSupply);
            if (wrt_out) {
                const D_prime = ZERO.minus(partial_x.div(partial_D));
                ans = ans.div(D_prime).times(D).div(bptSupply);
            }
        }
        else {
            ans = bnum(2)
                .times(partial_xD)
                .div(partial_D)
                .minus(partial_DD.times(partial_x).div(partial_D.pow(2)))
                .minus(partial_xx.div(partial_x));
            if (wrt_out) {
                ans = ans
                    .times(partial_x)
                    .div(minus_partial_D)
                    .times(bptSupply)
                    .div(D);
            }
        }
    }
    return ans;
}
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOut(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(constants.WeiPerEther.sub(swapFee).toString()).div(constants.WeiPerEther.toString()));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_exactTokenInForTokenOut(amount, poolPairData));
    let ans = _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, true, false);
    ans = ONE.div(ans.times(constants.WeiPerEther.sub(swapFee).toString()).div(constants.WeiPerEther.toString()));
    return ans;
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOut(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactTokenOut(amount, poolPairData)
        .times(constants.WeiPerEther.sub(swapFee).toString())
        .div(constants.WeiPerEther.toString());
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount);
    let ans = _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, true, true);
    ans = ONE.div(ans.times(constants.WeiPerEther.sub(swapFee).toString()).div(constants.WeiPerEther.toString()));
    return ans;
}
function _feeFactor(balances, tokenIndex, swapFee) {
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    const currentWeight = balances[tokenIndex].div(sumBalances);
    const tokenBalancePercentageExcess = ONE.minus(currentWeight);
    return ONE.minus(tokenBalancePercentageExcess
        .times(swapFee.toString())
        .div(constants.WeiPerEther.toString()));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForBPTOut(amount, poolPairData) {
    const { amp, allBalances, virtualBptSupply, decimalsOut, tokenIndexIn, swapFee, } = poolPairData;
    const balances = [...allBalances];
    const feeFactor = _feeFactor(balances, tokenIndexIn, swapFee);
    let bnumBalanceOut = bnum(bignumber.formatFixed(virtualBptSupply, decimalsOut));
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(feeFactor));
    bnumBalanceOut = bnumBalanceOut.plus(_exactTokenInForBPTOut(amount, poolPairData));
    let ans = _poolDerivativesBPT(amp, balances, bnumBalanceOut, tokenIndexIn, true, true, false);
    ans = bnum(1).div(ans.times(feeFactor));
    return ans;
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactBPTOut(amount, poolPairData) {
    const { amp, allBalances, virtualBptSupply, tokenIndexIn, decimalsOut, swapFee, } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactBPTOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in.times(feeFactor));
    let bnumBalanceOut = bnum(bignumber.formatFixed(virtualBptSupply, decimalsOut));
    bnumBalanceOut = bnumBalanceOut.plus(amount);
    let ans = _poolDerivativesBPT(amp, balances, bnumBalanceOut, tokenIndexIn, true, true, true);
    ans = ONE.div(ans.times(feeFactor));
    return ans;
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactBPTInForTokenOut(amount, poolPairData) {
    const { amp, allBalances, virtualBptSupply, tokenIndexOut, swapFee, decimalsIn, } = poolPairData;
    const balances = [...allBalances];
    const _out = _exactBPTInForTokenOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexOut, swapFee);
    let bnumBalanceIn = bnum(bignumber.formatFixed(virtualBptSupply, decimalsIn));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_out.div(feeFactor));
    bnumBalanceIn = bnumBalanceIn.minus(amount);
    const ans = _poolDerivativesBPT(amp, balances, bnumBalanceIn, tokenIndexOut, true, false, false).div(feeFactor);
    return ans;
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapBPTInForExactTokenOut(amount, poolPairData) {
    const { amp, allBalances, virtualBptSupply, decimalsIn, tokenIndexOut, swapFee, } = poolPairData;
    const balances = [...allBalances];
    const feeFactor = _feeFactor(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount.div(feeFactor));
    let bnumBalanceIn = bnum(bignumber.formatFixed(virtualBptSupply, decimalsIn));
    bnumBalanceIn = bnumBalanceIn.minus(_BPTInForExactTokenOut(amount, poolPairData));
    const ans = _poolDerivativesBPT(amp, balances, bnumBalanceIn, tokenIndexOut, true, false, true).div(feeFactor);
    return ans;
}
/////////
///  Derivatives of spotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$2(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(constants.WeiPerEther.sub(swapFee).toString()).div(constants.WeiPerEther.toString()));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_exactTokenInForTokenOut(amount, poolPairData));
    return _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, false, false);
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$2(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const bnumSwapFee = bnum(bignumber.formatFixed(swapFee, 18));
    const _in = _tokenInForExactTokenOut(amount, poolPairData).times(bnum(1).minus(bnumSwapFee));
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount);
    const feeFactor = bnum(1).minus(bnumSwapFee);
    return _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, false, true).div(feeFactor);
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForBPTOut(amount, poolPairData) {
    const { amp, allBalances, balanceOut, decimalsOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const feeFactor = _feeFactor(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(feeFactor));
    let bnumBalanceOut = bnum(bignumber.formatFixed(balanceOut, decimalsOut));
    bnumBalanceOut = bnumBalanceOut.plus(_exactTokenInForBPTOut(amount, poolPairData));
    const ans = _poolDerivativesBPT(amp, balances, bnumBalanceOut, tokenIndexIn, false, true, false);
    return ans;
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactBPTOut(amount, poolPairData) {
    const { amp, allBalances, balanceOut, decimalsOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactBPTOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in.times(feeFactor));
    let bnumBalanceOut = bnum(bignumber.formatFixed(balanceOut, decimalsOut));
    bnumBalanceOut = bnumBalanceOut.plus(amount);
    return _poolDerivativesBPT(amp, balances, bnumBalanceOut, tokenIndexIn, false, true, true).div(feeFactor);
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapBPTInForExactTokenOut(amount, poolPairData) {
    const { amp, allBalances, balanceIn, decimalsIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _BPTInForExactTokenOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount.div(feeFactor));
    let bnumBalanceIn = bnum(bignumber.formatFixed(balanceIn, decimalsIn));
    bnumBalanceIn = bnumBalanceIn.minus(_in);
    const ans = _poolDerivativesBPT(amp, balances, bnumBalanceIn, tokenIndexOut, false, false, true);
    return ans.div(feeFactor.pow(2));
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactBPTInForTokenOut(amount, poolPairData) {
    const { amp, allBalances, balanceIn, decimalsIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _out = _exactBPTInForTokenOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_out.div(feeFactor));
    let bnumBalanceIn = bnum(bignumber.formatFixed(balanceIn, decimalsIn));
    bnumBalanceIn = bnumBalanceIn.minus(amount);
    const ans = _poolDerivativesBPT(amp, balances, bnumBalanceIn, tokenIndexOut, false, false, false);
    return ans.div(feeFactor);
}

var PairTypes;
(function (PairTypes) {
    PairTypes[PairTypes["BptToToken"] = 0] = "BptToToken";
    PairTypes[PairTypes["TokenToBpt"] = 1] = "TokenToBpt";
    PairTypes[PairTypes["TokenToToken"] = 2] = "TokenToToken";
})(PairTypes || (PairTypes = {}));
class PhantomStablePool {
    constructor(id, address, amp, swapFee, totalShares, tokens, tokensList) {
        this.poolType = exports.PoolTypes.MetaStable;
        this.ALMOST_ONE = bignumber.parseFixed('0.99', 18);
        this.id = id;
        this.address = address;
        this.amp = bignumber.parseFixed(amp, PhantomStablePool.AMP_DECIMALS);
        this.swapFee = bignumber.parseFixed(swapFee, 18);
        this.totalShares = bignumber.parseFixed(totalShares, 18);
        this.tokens = tokens;
        this.tokensList = tokensList;
    }
    static fromPool(pool) {
        if (!pool.amp)
            throw new Error('PhantomStablePool missing amp factor');
        return new PhantomStablePool(pool.id, pool.address, pool.amp, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList);
    }
    // Remove BPT from Balances and update indices
    static removeBPT(poolPairData) {
        const poolPairDataNoBpt = cloneDeep(poolPairData);
        const bptIndex = poolPairData.bptIndex;
        if (bptIndex != -1) {
            poolPairDataNoBpt.allBalances.splice(bptIndex, 1);
            poolPairDataNoBpt.allBalancesScaled.splice(bptIndex, 1);
            if (bptIndex < poolPairData.tokenIndexIn)
                poolPairDataNoBpt.tokenIndexIn -= 1;
            if (bptIndex < poolPairData.tokenIndexOut)
                poolPairDataNoBpt.tokenIndexOut -= 1;
        }
        return poolPairDataNoBpt;
    }
    parsePoolPairData(tokenIn, tokenOut) {
        const tokenIndexIn = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenIn));
        if (tokenIndexIn < 0)
            throw 'Pool does not contain tokenIn';
        const tI = this.tokens[tokenIndexIn];
        const balanceIn = bnum(tI.balance)
            .times(bnum(tI.priceRate))
            .dp(tI.decimals)
            .toString();
        const decimalsIn = tI.decimals;
        const tokenInPriceRate = bignumber.parseFixed(tI.priceRate, 18);
        const tokenIndexOut = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenOut));
        if (tokenIndexOut < 0)
            throw 'Pool does not contain tokenOut';
        const tO = this.tokens[tokenIndexOut];
        const balanceOut = bnum(tO.balance)
            .times(bnum(tO.priceRate))
            .dp(tO.decimals)
            .toString();
        const decimalsOut = tO.decimals;
        const tokenOutPriceRate = bignumber.parseFixed(tO.priceRate, 18);
        // Get all token balances
        const allBalances = this.tokens.map(({ balance, priceRate }) => bnum(balance).times(priceRate));
        const allBalancesScaled = this.tokens.map(({ balance, priceRate }) => bignumber.parseFixed(balance, 18).mul(bignumber.parseFixed(priceRate, 18)).div(constants.WeiPerEther));
        // Phantom pools allow trading between token and pool BPT
        let pairType;
        if (isSameAddress(tokenIn, this.address)) {
            pairType = PairTypes.BptToToken;
        }
        else if (isSameAddress(tokenOut, this.address)) {
            pairType = PairTypes.TokenToBpt;
        }
        else {
            pairType = PairTypes.TokenToToken;
        }
        const bptIndex = this.tokensList.indexOf(this.address);
        // VirtualBPTSupply must be used for the maths
        const virtualBptSupply = this.totalShares;
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            pairType: pairType,
            bptIndex: bptIndex,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            balanceIn: bignumber.parseFixed(balanceIn, decimalsIn),
            balanceOut: bignumber.parseFixed(balanceOut, decimalsOut),
            swapFee: this.swapFee,
            allBalances,
            allBalancesScaled,
            amp: this.amp,
            tokenIndexIn: tokenIndexIn,
            tokenIndexOut: tokenIndexOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            tokenInPriceRate,
            tokenOutPriceRate,
            virtualBptSupply,
        };
        return PhantomStablePool.removeBPT(poolPairData);
    }
    getNormalizedLiquidity(poolPairData) {
        // This is an approximation as the actual normalized liquidity is a lot more complicated to calculate
        return bnum(bignumber.formatFixed(poolPairData.balanceOut.mul(poolPairData.amp), poolPairData.decimalsOut + PhantomStablePool.AMP_DECIMALS));
    }
    getLimitAmountSwap(poolPairData, swapType) {
        // PoolPairData is using balances that have already been exchanged so need to convert back
        if (swapType === exports.SwapTypes.SwapExactIn) {
            // Return max valid amount of tokenIn
            // As an approx - use almost the total balance of token out as we can add any amount of tokenIn and expect some back
            return bnum(bignumber.formatFixed(poolPairData.balanceOut
                .mul(this.ALMOST_ONE)
                .div(poolPairData.tokenOutPriceRate), poolPairData.decimalsOut));
        }
        else {
            // Return max amount of tokenOut - approx is almost all balance
            return bnum(bignumber.formatFixed(poolPairData.balanceOut
                .mul(this.ALMOST_ONE)
                .div(poolPairData.tokenOutPriceRate), poolPairData.decimalsOut));
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is underlying in the pool
        const T = this.tokens.find((t) => isSameAddress(t.address, token));
        if (!T)
            throw Error('Pool does not contain this token');
        T.balance = bignumber.formatFixed(newBalance, T.decimals);
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        try {
            // This code assumes that decimalsIn and decimalsOut is 18
            if (amount.isZero())
                return ZERO;
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            // In Phantom Pools every time there is a swap (token per token, bpt per token or token per bpt), we substract the fee from the amount in
            const amtWithFeeEvm = this.subtractSwapFeeAmount(bignumber.parseFixed(amount.dp(18).toString(), 18), poolPairData.swapFee);
            const amountConvertedEvm = amtWithFeeEvm
                .mul(poolPairData.tokenInPriceRate)
                .div(constants.WeiPerEther);
            let returnEvm;
            if (poolPairData.pairType === PairTypes.TokenToBpt) {
                const amountsInBigInt = Array(poolPairData.allBalancesScaled.length).fill(BigInt(0));
                amountsInBigInt[poolPairData.tokenIndexIn] =
                    amountConvertedEvm.toBigInt();
                returnEvm = _calcBptOutGivenExactTokensIn(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((b) => b.toBigInt()), amountsInBigInt, poolPairData.virtualBptSupply.toBigInt(), BigInt(0));
            }
            else if (poolPairData.pairType === PairTypes.BptToToken) {
                returnEvm = _calcTokenOutGivenExactBptIn(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((b) => b.toBigInt()), poolPairData.tokenIndexOut, amountConvertedEvm.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), BigInt(0));
            }
            else {
                returnEvm = _calcOutGivenIn$2(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((b) => b.toBigInt()), poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amountConvertedEvm.toBigInt(), BigInt(0));
            }
            const returnEvmWithRate = bignumber.BigNumber.from(returnEvm)
                .mul(constants.WeiPerEther)
                .div(poolPairData.tokenOutPriceRate);
            // Return human scaled
            return bnum(bignumber.formatFixed(returnEvmWithRate, 18));
        }
        catch (err) {
            // console.error(`PhantomStable _evmoutGivenIn: ${err.message}`);
            return ZERO;
        }
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        try {
            // This code assumes that decimalsIn and decimalsOut is 18
            if (amount.isZero())
                return ZERO;
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amountConvertedEvm = bignumber.parseFixed(amount.dp(18).toString(), 18)
                .mul(poolPairData.tokenOutPriceRate)
                .div(constants.WeiPerEther);
            let returnEvm;
            if (poolPairData.pairType === PairTypes.TokenToBpt) {
                returnEvm = _calcTokenInGivenExactBptOut(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((b) => b.toBigInt()), poolPairData.tokenIndexIn, amountConvertedEvm.toBigInt(), poolPairData.virtualBptSupply.toBigInt(), BigInt(0));
            }
            else if (poolPairData.pairType === PairTypes.BptToToken) {
                const amountsOutBigInt = Array(poolPairData.allBalancesScaled.length).fill(BigInt(0));
                amountsOutBigInt[poolPairData.tokenIndexOut] =
                    amountConvertedEvm.toBigInt();
                returnEvm = _calcBptInGivenExactTokensOut(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((b) => b.toBigInt()), amountsOutBigInt, poolPairData.virtualBptSupply.toBigInt(), BigInt(0) // Fee is handled below
                );
            }
            else {
                returnEvm = _calcInGivenOut$2(this.amp.toBigInt(), poolPairData.allBalancesScaled.map((b) => b.toBigInt()), poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amountConvertedEvm.toBigInt(), BigInt(0) // Fee is handled below
                );
            }
            // In Phantom Pools every time there is a swap (token per token, bpt per token or token per bpt), we substract the fee from the amount in
            const returnEvmWithRate = bignumber.BigNumber.from(returnEvm)
                .mul(constants.WeiPerEther)
                .div(poolPairData.tokenInPriceRate);
            const returnEvmWithFee = this.addSwapFeeAmount(returnEvmWithRate, poolPairData.swapFee);
            // return human number
            return bnum(bignumber.formatFixed(returnEvmWithFee, 18));
        }
        catch (err) {
            console.error(`PhantomStable _evminGivenOut: ${err.message}`);
            return ZERO;
        }
    }
    /**
     * _calcTokensOutGivenExactBptIn
     * @param bptAmountIn EVM scale.
     * @returns EVM scale.
     */
    _calcTokensOutGivenExactBptIn(bptAmountIn) {
        // token balances are stored in human scale and must be EVM for maths
        // Must take priceRate into consideration
        const balancesEvm = this.tokens
            .filter((t) => !isSameAddress(t.address, this.address))
            .map(({ balance, priceRate, decimals }) => bignumber.parseFixed(balance, 18)
            .mul(bignumber.parseFixed(priceRate, decimals))
            .div(constants.WeiPerEther)
            .toBigInt());
        let returnAmt;
        try {
            returnAmt = _calcTokensOutGivenExactBptIn(balancesEvm, bptAmountIn.toBigInt(), this.totalShares.toBigInt());
            return returnAmt.map((a) => bignumber.BigNumber.from(a.toString()));
        }
        catch (err) {
            return new Array(balancesEvm.length).fill(ZERO);
        }
    }
    /**
     * _calcBptOutGivenExactTokensIn
     * @param amountsIn EVM Scale
     * @returns EVM Scale
     */
    _calcBptOutGivenExactTokensIn(amountsIn) {
        try {
            // token balances are stored in human scale and must be EVM for maths
            // Must take priceRate into consideration
            const balancesEvm = this.tokens
                .filter((t) => !isSameAddress(t.address, this.address))
                .map(({ balance, priceRate, decimals }) => bignumber.parseFixed(balance, decimals)
                .mul(bignumber.parseFixed(priceRate, 18))
                .div(constants.WeiPerEther)
                .toBigInt());
            const bptAmountOut = _calcBptOutGivenExactTokensIn(this.amp.toBigInt(), balancesEvm, amountsIn.map((a) => a.toBigInt()), this.totalShares.toBigInt(), BigInt(0));
            return bignumber.BigNumber.from(bptAmountOut.toString());
        }
        catch (err) {
            return constants.Zero;
        }
    }
    // this is the multiplicative inverse of the derivative of _exactTokenInForTokenOut
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        const priceRateIn = bignumber.formatFixed(poolPairData.tokenInPriceRate, 18);
        const priceRateOut = bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18);
        const amountConverted = amount.times(bignumber.formatFixed(poolPairData.tokenInPriceRate, 18));
        let result;
        if (poolPairData.pairType === PairTypes.TokenToBpt) {
            result = _spotPriceAfterSwapExactTokenInForBPTOut(amountConverted, poolPairData);
        }
        else if (poolPairData.pairType === PairTypes.BptToToken) {
            result = _spotPriceAfterSwapExactBPTInForTokenOut(amountConverted, poolPairData);
        }
        else {
            result =
                _spotPriceAfterSwapExactTokenInForTokenOut(amountConverted, poolPairData);
        }
        return result.div(priceRateIn).times(priceRateOut);
    }
    // this is the derivative of _tokenInForExactTokenOut
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        const priceRateIn = bignumber.formatFixed(poolPairData.tokenInPriceRate, 18);
        const priceRateOut = bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18);
        const amountConverted = amount.times(bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18));
        let result;
        if (poolPairData.pairType === PairTypes.TokenToBpt) {
            result = _spotPriceAfterSwapTokenInForExactBPTOut(amountConverted, poolPairData);
        }
        else if (poolPairData.pairType === PairTypes.BptToToken) {
            result = _spotPriceAfterSwapBPTInForExactTokenOut(amountConverted, poolPairData);
        }
        else {
            result =
                _spotPriceAfterSwapTokenInForExactTokenOut(amountConverted, poolPairData);
        }
        return result.div(priceRateIn).times(priceRateOut);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        const priceRateOut = bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18);
        const amountConverted = amount.times(bignumber.formatFixed(poolPairData.tokenInPriceRate, 18));
        let result;
        if (poolPairData.pairType === PairTypes.TokenToBpt) {
            result =
                _derivativeSpotPriceAfterSwapExactTokenInForBPTOut(amountConverted, poolPairData);
        }
        else if (poolPairData.pairType === PairTypes.BptToToken) {
            result =
                _derivativeSpotPriceAfterSwapExactBPTInForTokenOut(amountConverted, poolPairData);
        }
        else {
            result =
                _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$2(amountConverted, poolPairData);
        }
        return result.times(priceRateOut);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        const priceRateIn = bignumber.formatFixed(poolPairData.tokenInPriceRate, 18);
        const priceRateOut = bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18);
        const amountConverted = amount.times(bignumber.formatFixed(poolPairData.tokenOutPriceRate, 18));
        let result;
        if (poolPairData.pairType === PairTypes.TokenToBpt) {
            result =
                _derivativeSpotPriceAfterSwapTokenInForExactBPTOut(amountConverted, poolPairData);
        }
        else if (poolPairData.pairType === PairTypes.BptToToken) {
            result =
                _derivativeSpotPriceAfterSwapBPTInForExactTokenOut(amountConverted, poolPairData);
        }
        else {
            result =
                _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$2(amountConverted, poolPairData);
        }
        return result.div(priceRateIn).times(priceRateOut).times(priceRateOut);
    }
    subtractSwapFeeAmount(amount, swapFee) {
        // https://github.com/balancer-labs/balancer-v2-monorepo/blob/c18ff2686c61a8cbad72cdcfc65e9b11476fdbc3/pkg/pool-utils/contracts/BasePool.sol#L466
        const feeAmount = amount.mul(swapFee).add(constants.WeiPerEther.sub(1)).div(constants.WeiPerEther);
        return amount.sub(feeAmount);
    }
    addSwapFeeAmount(amount, swapFee) {
        // https://github.com/balancer-labs/balancer-v2-monorepo/blob/c18ff2686c61a8cbad72cdcfc65e9b11476fdbc3/pkg/pool-utils/contracts/BasePool.sol#L458
        const feeAmount = constants.WeiPerEther.sub(swapFee);
        return amount.mul(constants.WeiPerEther).add(feeAmount.sub(1)).div(feeAmount);
    }
}
PhantomStablePool.AMP_DECIMALS = 3;

// SQRT constants
const SQRT_1E_NEG_1 = bignumber.BigNumber.from('316227766016837933');
const SQRT_1E_NEG_3 = bignumber.BigNumber.from('31622776601683793');
const SQRT_1E_NEG_5 = bignumber.BigNumber.from('3162277660168379');
const SQRT_1E_NEG_7 = bignumber.BigNumber.from('316227766016837');
const SQRT_1E_NEG_9 = bignumber.BigNumber.from('31622776601683');
const SQRT_1E_NEG_11 = bignumber.BigNumber.from('3162277660168');
const SQRT_1E_NEG_13 = bignumber.BigNumber.from('316227766016');
const SQRT_1E_NEG_15 = bignumber.BigNumber.from('31622776601');
const SQRT_1E_NEG_17 = bignumber.BigNumber.from('3162277660');
// High precision
const ONE_XP = bignumber.BigNumber.from(10).pow(38); // 38 decimal places
// Small number to prevent rounding errors
const SMALL = bignumber.BigNumber.from(10).pow(8); // 1e-10 in normal precision
// Swap Limit factor
const SWAP_LIMIT_FACTOR = bignumber.BigNumber.from('999999000000000000');

/////////
/// ARITHMETIC HELPERS
/////////
function mulUp(a, b) {
    const product = a.mul(b);
    return product.sub(1).div(constants.WeiPerEther).add(1);
}
function divUp(a, b) {
    const aInflated = a.mul(constants.WeiPerEther);
    return aInflated.sub(1).div(b).add(1);
}
function mulDown(a, b) {
    const product = a.mul(b);
    return product.div(constants.WeiPerEther);
}
function divDown(a, b) {
    const aInflated = a.mul(constants.WeiPerEther);
    return aInflated.div(b);
}
function mulXpU(a, b) {
    return a.mul(b).div(ONE_XP);
}
function divXpU(a, b) {
    if (b.isZero())
        throw new Error('ZERO DIVISION');
    return a.mul(ONE_XP).div(b);
}
function mulDownMagU(a, b) {
    return a.mul(b).div(constants.WeiPerEther);
}
function divDownMagU(a, b) {
    if (b.isZero())
        throw new Error('ZERO DIVISION');
    return a.mul(constants.WeiPerEther).div(b);
}
function mulUpMagU(a, b) {
    const product = a.mul(b);
    if (product.gt(0))
        return product.sub(1).div(constants.WeiPerEther).add(1);
    else if (product.lt(0))
        return product.add(1).div(constants.WeiPerEther).sub(1);
    else
        return bignumber.BigNumber.from(0);
}
function divUpMagU(a, b) {
    if (b.isZero())
        throw new Error('ZERO DIVISION');
    if (b.lt(0)) {
        b = b.mul(-1);
        a = a.mul(-1);
    }
    if (a.isZero()) {
        return bignumber.BigNumber.from(0);
    }
    else {
        if (a.gt(0))
            return a.mul(constants.WeiPerEther).sub(1).div(b).add(1);
        else
            return a.mul(constants.WeiPerEther).add(1).div(b.sub(1));
    }
}
function mulUpXpToNpU(a, b) {
    const TenPower19 = bignumber.BigNumber.from(10).pow(19);
    const b1 = b.div(TenPower19);
    const b2 = b.isNegative()
        ? b.mul(-1).mod(TenPower19).mul(-1)
        : b.mod(TenPower19);
    const prod1 = a.mul(b1);
    const prod2 = a.mul(b2);
    return prod1.lte(0) && prod2.lte(0)
        ? prod1.add(prod2.div(TenPower19)).div(TenPower19)
        : prod1.add(prod2.div(TenPower19)).sub(1).div(TenPower19).add(1);
}
function mulDownXpToNpU(a, b) {
    const TenPower19 = bignumber.BigNumber.from(10).pow(19);
    const b1 = b.div(TenPower19);
    const b2 = b.isNegative()
        ? b.mul(-1).mod(TenPower19).mul(-1)
        : b.mod(TenPower19);
    const prod1 = a.mul(b1);
    const prod2 = a.mul(b2);
    return prod1.gte(0) && prod2.gte(0)
        ? prod1.add(prod2.div(TenPower19)).div(TenPower19)
        : prod1.add(prod2.div(TenPower19)).add(1).div(TenPower19).sub(1);
}
/////////
/// SQUARE ROOT
/////////
function sqrt(input, tolerance) {
    if (input.isZero()) {
        return bignumber.BigNumber.from(0);
    }
    let guess = makeInitialGuess(input);
    // 7 iterations
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const i of new Array(7).fill(0)) {
        guess = guess.add(input.mul(constants.WeiPerEther).div(guess)).div(2);
    }
    // Check square is more or less correct (in some epsilon range)
    const guessSquared = guess.mul(guess).div(constants.WeiPerEther);
    if (!(guessSquared.lte(input.add(mulUp(guess, tolerance))) &&
        guessSquared.gte(input.sub(mulUp(guess, tolerance)))))
        throw new Error('GyroEPool: sqrt failed');
    return guess;
}
function makeInitialGuess(input) {
    if (input.gte(constants.WeiPerEther)) {
        return bignumber.BigNumber.from(2)
            .pow(intLog2Halved(input.div(constants.WeiPerEther)))
            .mul(constants.WeiPerEther);
    }
    else {
        if (input.lte('10')) {
            return SQRT_1E_NEG_17;
        }
        if (input.lte('100')) {
            return bignumber.BigNumber.from('10000000000');
        }
        if (input.lte('1000')) {
            return SQRT_1E_NEG_15;
        }
        if (input.lte('10000')) {
            return bignumber.BigNumber.from('100000000000');
        }
        if (input.lte('100000')) {
            return SQRT_1E_NEG_13;
        }
        if (input.lte('1000000')) {
            return bignumber.BigNumber.from('1000000000000');
        }
        if (input.lte('10000000')) {
            return SQRT_1E_NEG_11;
        }
        if (input.lte('100000000')) {
            return bignumber.BigNumber.from('10000000000000');
        }
        if (input.lte('1000000000')) {
            return SQRT_1E_NEG_9;
        }
        if (input.lte('10000000000')) {
            return bignumber.BigNumber.from('100000000000000');
        }
        if (input.lte('100000000000')) {
            return SQRT_1E_NEG_7;
        }
        if (input.lte('1000000000000')) {
            return bignumber.BigNumber.from('1000000000000000');
        }
        if (input.lte('10000000000000')) {
            return SQRT_1E_NEG_5;
        }
        if (input.lte('100000000000000')) {
            return bignumber.BigNumber.from('10000000000000000');
        }
        if (input.lte('1000000000000000')) {
            return SQRT_1E_NEG_3;
        }
        if (input.lte('10000000000000000')) {
            return bignumber.BigNumber.from('100000000000000000');
        }
        if (input.lte('100000000000000000')) {
            return SQRT_1E_NEG_1;
        }
        return input;
    }
}
function intLog2Halved(x) {
    let n = 0;
    for (let i = 128; i >= 2; i = i / 2) {
        const factor = bignumber.BigNumber.from(2).pow(i);
        if (x.gte(factor)) {
            x = x.div(factor);
            n += i / 2;
        }
    }
    return n;
}

/////////
/// Virtual Parameter calculations
/////////
function _findVirtualParams(invariant, sqrtAlpha, sqrtBeta) {
    return [divDown(invariant, sqrtBeta), mulDown(invariant, sqrtAlpha)];
}
/////////
/// Invariant Calculation
/////////
function _calculateInvariant$1(balances, // balances
sqrtAlpha, sqrtBeta) {
    /**********************************************************************************************
        // Calculate with quadratic formula
        // 0 = (1-sqrt(alpha/beta)*L^2 - (y/sqrt(beta)+x*sqrt(alpha))*L - x*y)
        // 0 = a*L^2 + b*L + c
        // here a > 0, b < 0, and c < 0, which is a special case that works well w/o negative numbers
        // taking mb = -b and mc = -c:                            (1/2)
        //                                  mb + (mb^2 + 4 * a * mc)^                   //
        //                   L =    ------------------------------------------          //
        //                                          2 * a                               //
        //                                                                              //
        **********************************************************************************************/
    const [a, mb, bSquare, mc] = _calculateQuadraticTerms(balances, sqrtAlpha, sqrtBeta);
    const invariant = _calculateQuadratic(a, mb, bSquare, mc);
    return invariant;
}
function _calculateQuadraticTerms(balances, sqrtAlpha, sqrtBeta) {
    const a = constants.WeiPerEther.sub(divDown(sqrtAlpha, sqrtBeta));
    const bterm0 = divDown(balances[1], sqrtBeta);
    const bterm1 = mulDown(balances[0], sqrtAlpha);
    const mb = bterm0.add(bterm1);
    const mc = mulDown(balances[0], balances[1]);
    // For better fixed point precision, calculate in expanded form w/ re-ordering of multiplications
    // b^2 = x^2 * alpha + x*y*2*sqrt(alpha/beta) + y^2 / beta
    let bSquare = mulDown(mulDown(mulDown(balances[0], balances[0]), sqrtAlpha), sqrtAlpha);
    const bSq2 = divDown(mulDown(mulDown(mulDown(balances[0], balances[1]), constants.WeiPerEther.mul(2)), sqrtAlpha), sqrtBeta);
    const bSq3 = divDown(mulDown(balances[1], balances[1]), mulUp(sqrtBeta, sqrtBeta));
    bSquare = bSquare.add(bSq2).add(bSq3);
    return [a, mb, bSquare, mc];
}
function _calculateQuadratic(a, mb, bSquare, mc) {
    const denominator = mulUp(a, constants.WeiPerEther.mul(2));
    // order multiplications for fixed point precision
    const addTerm = mulDown(mulDown(mc, constants.WeiPerEther.mul(4)), a);
    // The minus sign in the radicand cancels out in this special case, so we add
    const radicand = bSquare.add(addTerm);
    const sqrResult = sqrt(radicand, bignumber.BigNumber.from(5));
    // The minus sign in the numerator cancels out in this special case
    const numerator = mb.add(sqrResult);
    const invariant = divDown(numerator, denominator);
    return invariant;
}
/////////
/// Swap functions
/////////
// SwapType = 'swapExactIn'
function _calcOutGivenIn$1(balanceIn, balanceOut, amountIn, virtualParamIn, virtualParamOut) {
    /**********************************************************************************************
        // Described for X = `in' asset and Y = `out' asset, but equivalent for the other case       //
        // dX = incrX  = amountIn  > 0                                                               //
        // dY = incrY = amountOut < 0                                                                //
        // x = balanceIn             x' = x +  virtualParamX                                         //
        // y = balanceOut            y' = y +  virtualParamY                                         //
        // L  = inv.Liq                   /              L^2            \                            //
        //                   - dy = y' - |   --------------------------  |                           //
        //  x' = virtIn                   \          ( x' + dX)         /                            //
        //  y' = virtOut                                                                             //
        // Note that -dy > 0 is what the trader receives.                                            //
        // We exploit the fact that this formula is symmetric up to virtualParam{X,Y}.               //
        **********************************************************************************************/
    // The factors in total lead to a multiplicative "safety margin" between the employed virtual offsets
    // very slightly larger than 3e-18.
    const virtInOver = balanceIn.add(mulUp(virtualParamIn, constants.WeiPerEther.add(2)));
    const virtOutUnder = balanceOut.add(mulDown(virtualParamOut, constants.WeiPerEther.sub(1)));
    const amountOut = divDown(mulDown(virtOutUnder, amountIn), virtInOver.add(amountIn));
    if (amountOut.gt(balanceOut))
        throw new Error('ASSET_BOUNDS_EXCEEDED');
    return amountOut;
}
// SwapType = 'swapExactOut'
function _calcInGivenOut$1(balanceIn, balanceOut, amountOut, virtualParamIn, virtualParamOut) {
    /**********************************************************************************************
      // dX = incrX  = amountIn  > 0                                                               //
      // dY = incrY  = amountOut < 0                                                               //
      // x = balanceIn             x' = x +  virtualParamX                                         //
      // y = balanceOut            y' = y +  virtualParamY                                         //
      // x = balanceIn                                                                             //
      // L  = inv.Liq                /              L^2             \                              //
      //                     dx =   |   --------------------------  |  -  x'                       //
      // x' = virtIn                \         ( y' + dy)           /                               //
      // y' = virtOut                                                                              //
      // Note that dy < 0 < dx.                                                                    //
      **********************************************************************************************/
    if (amountOut.gt(balanceOut))
        throw new Error('ASSET_BOUNDS_EXCEEDED');
    // The factors in total lead to a multiplicative "safety margin" between the employed virtual offsets
    // very slightly larger than 3e-18.
    const virtInOver = balanceIn.add(mulUp(virtualParamIn, constants.WeiPerEther.add(2)));
    const virtOutUnder = balanceOut.add(mulDown(virtualParamOut, constants.WeiPerEther.sub(1)));
    const amountIn = divUp(mulUp(virtInOver, amountOut), virtOutUnder.sub(amountOut));
    return amountIn;
}
// /////////
// ///  Spot price function
// /////////
function _calculateNewSpotPrice$1(balances, inAmount, outAmount, virtualParamIn, virtualParamOut, swapFee) {
    /**********************************************************************************************
        // dX = incrX  = amountIn  > 0                                                               //
        // dY = incrY  = amountOut < 0                                                               //
        // x = balanceIn             x' = x +  virtualParamX                                         //
        // y = balanceOut            y' = y +  virtualParamY                                         //
        // s = swapFee                                                                               //
        // L  = inv.Liq                1   /     x' + (1 - s) * dx        \                          //
        //                     p_y =  --- |   --------------------------  |                          //
        // x' = virtIn                1-s  \         y' + dy              /                          //
        // y' = virtOut                                                                              //
        // Note that dy < 0 < dx.                                                                    //
        **********************************************************************************************/
    const afterFeeMultiplier = constants.WeiPerEther.sub(swapFee); // 1 - s
    const virtIn = balances[0].add(virtualParamIn); // x + virtualParamX = x'
    const numerator = virtIn.add(mulDown(afterFeeMultiplier, inAmount)); // x' + (1 - s) * dx
    const virtOut = balances[1].add(virtualParamOut); // y + virtualParamY = y'
    const denominator = mulDown(afterFeeMultiplier, virtOut.sub(outAmount)); // (1 - s) * (y' + dy)
    const newSpotPrice = divDown(numerator, denominator);
    return newSpotPrice;
}
// /////////
// ///  Derivatives of spotPriceAfterSwap
// /////////
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$1(balances, outAmount, virtualParamOut) {
    /**********************************************************************************************
        // dy = incrY  = amountOut < 0                                                               //
                                                                                                     //
        // y = balanceOut            y' = y +  virtualParamY = virtOut                               //
        //                                                                                           //
        //                                 /              1               \                          //
        //                  (p_y)' =   2  |   --------------------------  |                          //
        //                                 \           y' + dy            /                          //
        //                                                                                           //
        // Note that dy < 0                                                                          //
        **********************************************************************************************/
    const TWO = bignumber.BigNumber.from(2).mul(constants.WeiPerEther);
    const virtOut = balances[1].add(virtualParamOut); // y' = y + virtualParamY
    const denominator = virtOut.sub(outAmount); // y' + dy
    const derivative = divDown(TWO, denominator);
    return derivative;
}
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$1(balances, inAmount, outAmount, virtualParamIn, virtualParamOut, swapFee) {
    /**********************************************************************************************
        // dX = incrX  = amountIn  > 0                                                               //
        // dY = incrY  = amountOut < 0                                                               //
        // x = balanceIn             x' = x +  virtualParamX                                         //
        // y = balanceOut            y' = y +  virtualParamY                                         //
        // s = swapFee                                                                               //
        // L  = inv.Liq                1       /     x' + (1 - s) * dx        \                      //
        //                     p_y =  --- (2) |   --------------------------  |                      //
        // x' = virtIn                1-s      \         (y' + dy)^2          /                      //
        // y' = virtOut                                                                              //
        // Note that dy < 0 < dx.                                                                    //
        **********************************************************************************************/
    const TWO = bignumber.BigNumber.from(2).mul(constants.WeiPerEther);
    const afterFeeMultiplier = constants.WeiPerEther.sub(swapFee); // 1 - s
    const virtIn = balances[0].add(virtualParamIn); // x + virtualParamX = x'
    const numerator = virtIn.add(mulDown(afterFeeMultiplier, inAmount)); // x' + (1 - s) * dx
    const virtOut = balances[1].add(virtualParamOut); // y + virtualParamY = y'
    const denominator = mulDown(virtOut.sub(outAmount), virtOut.sub(outAmount)); // (y' + dy)^2
    const factor = divDown(TWO, afterFeeMultiplier); // 2 / (1 - s)
    const derivative = mulDown(factor, divDown(numerator, denominator));
    return derivative;
}
// /////////
// ///  Normalized Liquidity measured with respect to the in-asset.
// /////////
function _getNormalizedLiquidity$1(balances, virtualParamOut) {
    /**********************************************************************************************
    // x = balanceOut             x' = x +  virtualParamOut                                      //
    // s = swapFee                                                                               //
    //                                                                                           //
    //                             normalizedLiquidity =  0.5 * x'                               //
    //                                                                                           //
    // x' = virtOut                                                                              //
    // Note that balances = [balanceIn, balanceOut].                                             //
    **********************************************************************************************/
    const virtOut = balances[1].add(virtualParamOut);
    return virtOut.div(2);
}

////////
/// Normalize balances
////////
function _normalizeBalances(balances, decimals) {
    const scalingFactors = decimals.map((d) => bignumber.parseFixed('1', d));
    return balances.map((bal, index) => bal.mul(constants.WeiPerEther).div(scalingFactors[index]));
}
/////////
/// Fee calculations
/////////
function _reduceFee(amountIn, swapFee) {
    const feeAmount = amountIn.mul(swapFee).div(constants.WeiPerEther);
    return amountIn.sub(feeAmount);
}
function _addFee(amountIn, swapFee) {
    return amountIn.mul(constants.WeiPerEther).div(constants.WeiPerEther.sub(swapFee));
}

class Gyro2Pool {
    constructor(id, address, swapFee, totalShares, tokens, tokensList, sqrtAlpha, sqrtBeta) {
        this.poolType = exports.PoolTypes.Gyro2;
        this.id = id;
        this.address = address;
        this.swapFee = safeParseFixed(swapFee, 18);
        this.totalShares = safeParseFixed(totalShares, 18);
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.sqrtAlpha = safeParseFixed(sqrtAlpha, 18);
        this.sqrtBeta = safeParseFixed(sqrtBeta, 18);
    }
    static fromPool(pool) {
        if (!pool.sqrtAlpha || !pool.sqrtBeta)
            throw new Error('Pool missing Gyro2 sqrtAlpha and/or sqrtBeta params');
        return new Gyro2Pool(pool.id, pool.address, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList, pool.sqrtAlpha, pool.sqrtBeta);
    }
    parsePoolPairData(tokenIn, tokenOut) {
        const tokenInIndex = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenIn));
        if (tokenInIndex < 0)
            throw 'Pool does not contain tokenIn';
        const tI = this.tokens[tokenInIndex];
        const balanceIn = tI.balance;
        const decimalsIn = tI.decimals;
        const tokenOutIndex = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenOut));
        if (tokenOutIndex < 0)
            throw 'Pool does not contain tokenOut';
        const tO = this.tokens[tokenOutIndex];
        const balanceOut = tO.balance;
        const decimalsOut = tO.decimals;
        const tokenInIsToken0 = tokenInIndex === 0;
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            balanceIn: safeParseFixed(balanceIn, decimalsIn),
            balanceOut: safeParseFixed(balanceOut, decimalsOut),
            swapFee: this.swapFee,
            sqrtAlpha: tokenInIsToken0
                ? this.sqrtAlpha
                : divDown(constants.WeiPerEther, this.sqrtBeta),
            sqrtBeta: tokenInIsToken0
                ? this.sqrtBeta
                : divDown(constants.WeiPerEther, this.sqrtAlpha),
        };
        return poolPairData;
    }
    getNormalizedLiquidity(poolPairData) {
        const balances = [poolPairData.balanceIn, poolPairData.balanceOut];
        const normalizedBalances = _normalizeBalances(balances, [
            poolPairData.decimalsIn,
            poolPairData.decimalsOut,
        ]);
        const invariant = _calculateInvariant$1(normalizedBalances, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
        const [, virtualParamOut] = _findVirtualParams(invariant, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
        const normalisedLiquidity = _getNormalizedLiquidity$1(normalizedBalances, virtualParamOut);
        return bnum(bignumber.formatFixed(normalisedLiquidity, 18));
    }
    getLimitAmountSwap(poolPairData, swapType) {
        if (swapType === exports.SwapTypes.SwapExactIn) {
            const balances = [poolPairData.balanceIn, poolPairData.balanceOut];
            const normalizedBalances = _normalizeBalances(balances, [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
            ]);
            const invariant = _calculateInvariant$1(normalizedBalances, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const maxAmountInAssetInPool = mulDown(invariant, divDown(constants.WeiPerEther, poolPairData.sqrtAlpha).sub(divDown(constants.WeiPerEther, poolPairData.sqrtBeta))); // x+ = L * (1/sqrtAlpha - 1/sqrtBeta)
            const limitAmountIn = maxAmountInAssetInPool.sub(normalizedBalances[0]);
            const limitAmountInPlusSwapFee = divDown(limitAmountIn, constants.WeiPerEther.sub(poolPairData.swapFee));
            return bnum(bignumber.formatFixed(mulDown(limitAmountInPlusSwapFee, SWAP_LIMIT_FACTOR), 18));
        }
        else {
            return bnum(bignumber.formatFixed(mulDown(poolPairData.balanceOut, SWAP_LIMIT_FACTOR), poolPairData.decimalsOut));
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance;
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => isSameAddress(t.address, token));
            if (!T)
                throw Error('Pool does not contain this token');
            T.balance = bignumber.formatFixed(newBalance, T.decimals);
        }
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        try {
            const balances = [poolPairData.balanceIn, poolPairData.balanceOut];
            const normalizedBalances = _normalizeBalances(balances, [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
            ]);
            const invariant = _calculateInvariant$1(normalizedBalances, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const [virtualParamIn, virtualParamOut] = _findVirtualParams(invariant, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const inAmount = safeParseFixed(amount.toString(), 18);
            const inAmountLessFee = _reduceFee(inAmount, poolPairData.swapFee);
            const outAmount = _calcOutGivenIn$1(normalizedBalances[0], normalizedBalances[1], inAmountLessFee, virtualParamIn, virtualParamOut);
            return bnum(bignumber.formatFixed(outAmount, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        try {
            const outAmount = safeParseFixed(amount.toString(), 18);
            const balances = [poolPairData.balanceIn, poolPairData.balanceOut];
            const normalizedBalances = _normalizeBalances(balances, [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
            ]);
            const invariant = _calculateInvariant$1(normalizedBalances, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const [virtualParamIn, virtualParamOut] = _findVirtualParams(invariant, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const inAmountLessFee = _calcInGivenOut$1(normalizedBalances[0], normalizedBalances[1], outAmount, virtualParamIn, virtualParamOut);
            const inAmount = _addFee(inAmountLessFee, poolPairData.swapFee);
            return bnum(bignumber.formatFixed(inAmount, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcTokensOutGivenExactBptIn(bptAmountIn) {
        // Missing maths for this
        return new Array(this.tokens.length).fill(constants.Zero);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcBptOutGivenExactTokensIn(amountsIn) {
        // Missing maths for this
        return constants.Zero;
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        try {
            const balances = [poolPairData.balanceIn, poolPairData.balanceOut];
            const normalizedBalances = _normalizeBalances(balances, [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
            ]);
            const invariant = _calculateInvariant$1(normalizedBalances, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const [virtualParamIn, virtualParamOut] = _findVirtualParams(invariant, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const inAmount = safeParseFixed(amount.toString(), 18);
            const inAmountLessFee = _reduceFee(inAmount, poolPairData.swapFee);
            const outAmount = _calcOutGivenIn$1(normalizedBalances[0], normalizedBalances[1], inAmountLessFee, virtualParamIn, virtualParamOut);
            const newSpotPrice = _calculateNewSpotPrice$1(normalizedBalances, inAmount, outAmount, virtualParamIn, virtualParamOut, poolPairData.swapFee);
            return bnum(bignumber.formatFixed(newSpotPrice, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        try {
            const outAmount = safeParseFixed(amount.toString(), 18);
            const balances = [poolPairData.balanceIn, poolPairData.balanceOut];
            const normalizedBalances = _normalizeBalances(balances, [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
            ]);
            const invariant = _calculateInvariant$1(normalizedBalances, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const [virtualParamIn, virtualParamOut] = _findVirtualParams(invariant, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const inAmountLessFee = _calcInGivenOut$1(normalizedBalances[0], normalizedBalances[1], outAmount, virtualParamIn, virtualParamOut);
            const inAmount = _addFee(inAmountLessFee, poolPairData.swapFee);
            const newSpotPrice = _calculateNewSpotPrice$1(normalizedBalances, inAmount, outAmount, virtualParamIn, virtualParamOut, poolPairData.swapFee);
            return bnum(bignumber.formatFixed(newSpotPrice, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        try {
            const balances = [poolPairData.balanceIn, poolPairData.balanceOut];
            const normalizedBalances = _normalizeBalances(balances, [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
            ]);
            const invariant = _calculateInvariant$1(normalizedBalances, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const [virtualParamIn, virtualParamOut] = _findVirtualParams(invariant, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const inAmount = safeParseFixed(amount.toString(), 18);
            const inAmountLessFee = _reduceFee(inAmount, poolPairData.swapFee);
            const outAmount = _calcOutGivenIn$1(normalizedBalances[0], normalizedBalances[1], inAmountLessFee, virtualParamIn, virtualParamOut);
            const derivative = _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$1(normalizedBalances, outAmount, virtualParamOut);
            return bnum(bignumber.formatFixed(derivative, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        try {
            const outAmount = safeParseFixed(amount.toString(), 18);
            const balances = [poolPairData.balanceIn, poolPairData.balanceOut];
            const normalizedBalances = _normalizeBalances(balances, [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
            ]);
            const invariant = _calculateInvariant$1(normalizedBalances, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const [virtualParamIn, virtualParamOut] = _findVirtualParams(invariant, poolPairData.sqrtAlpha, poolPairData.sqrtBeta);
            const inAmountLessFee = _calcInGivenOut$1(normalizedBalances[0], normalizedBalances[1], outAmount, virtualParamIn, virtualParamOut);
            const inAmount = _addFee(inAmountLessFee, poolPairData.swapFee);
            const derivative = _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$1(normalizedBalances, inAmount, outAmount, virtualParamIn, virtualParamOut, poolPairData.swapFee);
            return bnum(bignumber.formatFixed(derivative, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
}

// POW3 constant
// Threshold of x where the normal method of computing x^3 would overflow and we need a workaround.
// Equal to 4.87e13 scaled; 4.87e13 is the point x where x**3 * 10**36 = (x**2 native) * (x native) ~ 2**256
const _SAFE_LARGE_POW3_THRESHOLD = bignumber.BigNumber.from(10).pow(29).mul(487);
const MIDDECIMAL = bignumber.BigNumber.from(10).pow(9); // splits the fixed point decimals into two equal parts.
// Stopping criterion for the Newton iteration that computes the invariant:
// - Stop if the step width doesn't shrink anymore by at least a factor _INVARIANT_SHRINKING_FACTOR_PER_STEP.
// - ... but in any case, make at least _INVARIANT_MIN_ITERATIONS iterations. This is useful to compensate for a
// less-than-ideal starting point, which is important when alpha is small.
const _INVARIANT_SHRINKING_FACTOR_PER_STEP = 8;
const _INVARIANT_MIN_ITERATIONS = 5;

// Helpers
function _safeLargePow3ADown(l, root3Alpha, d) {
    let ret = bignumber.BigNumber.from(0);
    if (l.lte(_SAFE_LARGE_POW3_THRESHOLD)) {
        // Simple case where there is no overflow
        ret = l.mul(l).div(constants.WeiPerEther).mul(l).div(constants.WeiPerEther);
        ret = ret.sub(ret
            .mul(root3Alpha)
            .div(constants.WeiPerEther)
            .mul(root3Alpha)
            .div(constants.WeiPerEther)
            .mul(root3Alpha)
            .div(constants.WeiPerEther));
        ret = ret.mul(constants.WeiPerEther).div(d);
    }
    else {
        ret = l.mul(l).div(constants.WeiPerEther);
        // Compute l^2 * l * (1 - root3Alpha^3)
        // The following products split up the factors into different groups of decimal places to reduce temorary
        // blowup and prevent overflow.
        // No precision is lost.
        ret = ret.mul(l.div(constants.WeiPerEther)).add(ret.mul(l.mod(constants.WeiPerEther)).div(constants.WeiPerEther));
        let x = ret;
        for (let i = 0; i < 3; i++) {
            x = x
                .mul(root3Alpha.div(MIDDECIMAL))
                .div(MIDDECIMAL)
                .add(x.mul(root3Alpha.mod(MIDDECIMAL)));
        }
        ret = ret.sub(x);
        // We perform half-precision division to reduce blowup.
        // In contrast to the above multiplications, this loses precision if d is small. However, tests show that,
        // for the l and d values considered here, the precision lost would be below the precision of the fixed
        // point type itself, so nothing is actually lost.
        ret = ret.mul(MIDDECIMAL).div(d.div(MIDDECIMAL));
    }
    return ret;
}

/////////
/// Invariant Calculation
/////////
// Invariant is used to collect protocol swap fees by comparing its value between two times.
// So we can round always to the same direction. It is also used to initiate the BPT amount
// and, because there is a minimum BPT, we round down the invariant.
// Argument root3Alpha = cube root of the lower price bound (symmetric across assets)
// Note: all price bounds for the pool are alpha and 1/alpha
function _calculateInvariant(balances, root3Alpha) {
    /**********************************************************************************************
// Calculate root of cubic:
// (1-alpha)L^3 - (x+y+z) * alpha^(2/3) * L^2 - (x*y + y*z + x*z) * alpha^(1/3) * L - x*y*z = 0
// These coefficients are a,b,c,d respectively
// here, a > 0, b < 0, c < 0, and d < 0
// taking mb = -b and mc = -c
/**********************************************************************************************/
    const [a, mb, mc, md] = _calculateCubicTerms(balances, root3Alpha);
    return _calculateCubic(a, mb, mc, md, root3Alpha);
}
/** @dev Prepares quadratic terms for input to _calculateCubic
 *  assumes a > 0, b < 0, c <= 0, and d <= 0 and returns a, -b, -c, -d
 *  terms come from cubic in Section 3.1.1
 *  argument root3Alpha = cube root of alpha
 */
function _calculateCubicTerms(balances, root3Alpha) {
    const alpha23 = mulDown(root3Alpha, root3Alpha); // alpha to the power of (2/3)
    const alpha = mulDown(alpha23, root3Alpha);
    const a = constants.WeiPerEther.sub(alpha);
    const bterm = balances[0].add(balances[1]).add(balances[2]);
    const mb = mulDown(mulDown(bterm, root3Alpha), root3Alpha);
    const cterm = mulDown(balances[0], balances[1])
        .add(mulDown(balances[1], balances[2]))
        .add(mulDown(balances[2], balances[0]));
    const mc = mulDown(cterm, root3Alpha);
    const md = mulDown(mulDown(balances[0], balances[1]), balances[2]);
    return [a, mb, mc, md];
}
/** @dev Calculate the maximal root of the polynomial a L^3 - mb L^2 - mc L - md.
 *   This root is always non-negative, and it is the unique positive root unless mb == mc == md == 0. */
function _calculateCubic(a, mb, mc, md, root3Alpha) {
    let rootEst = _calculateCubicStartingPoint(a, mb, mc);
    rootEst = _runNewtonIteration(a, mb, mc, md, root3Alpha, rootEst);
    return rootEst;
}
/** @dev Starting point for Newton iteration. Safe with all cubic polynomials where the coefficients have the appropriate
 *   signs, but calibrated to the particular polynomial for computing the invariant. */
function _calculateCubicStartingPoint(a, mb, mc) {
    const radic = mulUp(mb, mb).add(mulUp(mulUp(a, mc), constants.WeiPerEther.mul(3)));
    const lmin = divUp(mb, a.mul(3)).add(divUp(sqrt(radic, bignumber.BigNumber.from(5)), a.mul(3)));
    // This formula has been found experimentally. It is exact for alpha -> 1, where the factor is 1.5. All
    // factors > 1 are safe. For small alpha values, it is more efficient to fallback to a larger factor.
    const alpha = constants.WeiPerEther.sub(a); // We know that a is in [0, 1].
    const factor = alpha.gte(constants.WeiPerEther.div(2)) ? constants.WeiPerEther.mul(3).div(2) : constants.WeiPerEther.mul(2);
    const l0 = mulUp(lmin, factor);
    return l0;
}
/** @dev Find a root of the given polynomial with the given starting point l.
 *   Safe iff l > the local minimum.
 *   Note that f(l) may be negative for the first iteration and will then be positive (up to rounding errors).
 *   f'(l) is always positive for the range of values we consider.
 *   See write-up, Appendix A. */
function _runNewtonIteration(a, mb, mc, md, root3Alpha, rootEst) {
    let deltaAbsPrev = bignumber.BigNumber.from(0);
    for (let iteration = 0; iteration < 255; ++iteration) {
        // The delta to the next step can be positive or negative, so we represent a positive and a negative part
        // separately. The signed delta is delta_plus - delta_minus, but we only ever consider its absolute value.
        const [deltaAbs, deltaIsPos] = _calcNewtonDelta(a, mb, mc, md, root3Alpha, rootEst);
        // ^ Note: If we ever set _INVARIANT_MIN_ITERATIONS=0, the following should include `iteration >= 1`.
        if (deltaAbs.lte(1) ||
            (iteration >= _INVARIANT_MIN_ITERATIONS && deltaIsPos))
            // This should mathematically never happen. Thus, the numerical error dominates at this point.
            return rootEst;
        if (iteration >= _INVARIANT_MIN_ITERATIONS &&
            deltaAbs.gte(deltaAbsPrev.div(bignumber.BigNumber.from(_INVARIANT_SHRINKING_FACTOR_PER_STEP)))) {
            // The iteration has stalled and isn't making significant progress anymore.
            return rootEst;
        }
        deltaAbsPrev = deltaAbs;
        if (deltaIsPos)
            rootEst = rootEst.add(deltaAbs);
        else
            rootEst = rootEst.sub(deltaAbs);
    }
    throw new Error('Gyro3Pool: Newton Method did not converge on required invariant');
}
// -f(l)/f'(l), represented as an absolute value and a sign. Require that l is sufficiently large so that f is strictly increasing.
function _calcNewtonDelta(a, mb, mc, md, root3Alpha, rootEst) {
    // The following is equal to dfRootEst^3 * a but with an order of operations optimized for precision.
    // Subtraction does not underflow since rootEst is chosen so that it's always above the (only) local minimum.
    let dfRootEst = bignumber.BigNumber.from(0);
    const rootEst2 = mulDown(rootEst, rootEst);
    dfRootEst = rootEst2.mul(3);
    dfRootEst = dfRootEst.sub(mulDown(mulDown(mulDown(dfRootEst, root3Alpha), root3Alpha), root3Alpha));
    dfRootEst = dfRootEst.sub(mulDown(rootEst, mb).mul(2)).sub(mc);
    const deltaMinus = _safeLargePow3ADown(rootEst, root3Alpha, dfRootEst);
    // NB: We could order the operations here in much the same way we did above to reduce errors. But tests show
    // that this has no significant effect, and it would lead to more complex code.
    let deltaPlus = mulDown(mulDown(rootEst, rootEst), mb);
    deltaPlus = divDown(deltaPlus.add(mulDown(rootEst, mc)), dfRootEst);
    deltaPlus = deltaPlus.add(divDown(md, dfRootEst));
    const deltaIsPos = deltaPlus.gte(deltaMinus);
    const deltaAbs = deltaIsPos
        ? deltaPlus.sub(deltaMinus)
        : deltaMinus.sub(deltaPlus);
    return [deltaAbs, deltaIsPos];
}
/////////
/// Swap Amount Calculations
/////////
/** @dev Computes how many tokens can be taken out of a pool if `amountIn` are sent, given the
 * current balances and weights.
 * Changed signs compared to original algorithm to account for amountOut < 0.
 * See Proposition 12 in 3.1.4.*/
function _calcOutGivenIn(balanceIn, balanceOut, amountIn, virtualOffset) {
    /**********************************************************************************************
        // Described for X = `in' asset and Z = `out' asset, but equivalent for the other case       //
        // dX = incrX  = amountIn  > 0                                                               //
        // dZ = incrZ = amountOut < 0                                                                //
        // x = balanceIn             x' = x +  virtualOffset                                         //
        // z = balanceOut            z' = z +  virtualOffset                                         //
        // L  = inv.Liq                   /            x' * z'          \                            //
        //                   - dZ = z' - |   --------------------------  |                           //
        //  x' = virtIn                   \          ( x' + dX)         /                            //
        //  z' = virtOut                                                                             //
        // Note that -dz > 0 is what the trader receives.                                            //
        // We exploit the fact that this formula is symmetric up to virtualParam{X,Y,Z}.             //
        **********************************************************************************************/
    // The factors in total lead to a multiplicative "safety margin" between the employed virtual offsets
    // very slightly larger than 3e-18, compensating for the maximum multiplicative error in the invariant
    // computation.
    const virtInOver = balanceIn.add(mulUp(virtualOffset, constants.WeiPerEther.add(2)));
    const virtOutUnder = balanceOut.add(mulDown(virtualOffset, constants.WeiPerEther.sub(1)));
    const amountOut = virtOutUnder.mul(amountIn).div(virtInOver.add(amountIn));
    if (amountOut.gt(balanceOut))
        throw new Error('ASSET_BOUNDS_EXCEEDED');
    return amountOut;
}
/** @dev Computes how many tokens must be sent to a pool in order to take `amountOut`, given the
 * currhent balances and weights.
 * Similar to the one before but adapting bc negative values (amountOut would be negative).*/
function _calcInGivenOut(balanceIn, balanceOut, amountOut, virtualOffset) {
    /**********************************************************************************************
        // Described for X = `in' asset and Z = `out' asset, but equivalent for the other case       //
        // dX = incrX  = amountIn  > 0                                                               //
        // dZ = incrZ = amountOut < 0                                                                //
        // x = balanceIn             x' = x +  virtualOffset                                         //
        // z = balanceOut            z' = z +  virtualOffset                                         //
        // L  = inv.Liq            /            x' * z'          \             x' * dZ               //
        //                   dX = |   --------------------------  | - x' = ---------------           //
        //  x' = virtIn            \          ( z' + dZ)         /             z' - dZ               //
        //  z' = virtOut                                                                             //
        // Note that dz < 0 < dx.                                                                    //
        // We exploit the fact that this formula is symmetric and does not depend on which asset is  //
        // which.
        // We assume that the virtualOffset carries a relative +/- 3e-18 error due to the invariant  //
        // calculation add an appropriate safety margin.                                             //
        **********************************************************************************************/
    // Note that this in particular reverts if amountOut > balanceOut, i.e., if the trader tries to take more out of
    // the pool than is in it.
    if (amountOut.gt(balanceOut))
        throw new Error('ASSET_BOUNDS_EXCEEDED');
    // The factors in total lead to a multiplicative "safety margin" between the employed virtual offsets
    // very slightly larger than 3e-18, compensating for the maximum multiplicative error in the invariant
    // computation.
    const virtInOver = balanceIn.add(mulUp(virtualOffset, constants.WeiPerEther.add(2)));
    const virtOutUnder = balanceOut.add(mulDown(virtualOffset, constants.WeiPerEther.sub(1)));
    const amountIn = divUp(mulUp(virtInOver, amountOut), virtOutUnder.sub(amountOut));
    return amountIn;
}
// /////////
// ///  Spot price function
// /////////
function _calculateNewSpotPrice(balances, inAmount, outAmount, virtualOffsetInOut, swapFee) {
    /**********************************************************************************************
        // dX = incrX  = amountIn  > 0                                                               //
        // dZ = incrZ  = amountOut < 0                                                               //
        // x = balanceIn             x' = x +  virtualOffsetInOut                                     //
        // z = balanceOut            z' = z +  virtualOffsetInOut                                     //
        // s = swapFee                                                                               //
        // L  = inv.Liq                1   /     x' + (1 - s) * dx        \                          //
        //                     p_z =  --- |   --------------------------  |                          //
        // x' = virtIn                1-s  \         z' + dz              /                          //
        // z' = virtOut                                                                              //
        // Note that dz < 0 < dx.                                                                    //
        **********************************************************************************************/
    const afterFeeMultiplier = constants.WeiPerEther.sub(swapFee); // 1 - s
    const virtIn = balances[0].add(virtualOffsetInOut); // x + virtualOffsetInOut = x'
    const numerator = virtIn.add(mulDown(afterFeeMultiplier, inAmount)); // x' + (1 - s) * dx
    const virtOut = balances[1].add(virtualOffsetInOut); // z + virtualOffsetInOut = y'
    const denominator = mulDown(afterFeeMultiplier, virtOut.sub(outAmount)); // (1 - s) * (z' + dz)
    const newSpotPrice = divDown(numerator, denominator);
    return newSpotPrice;
}
// /////////
// ///  Derivatives of spotPriceAfterSwap
// /////////
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(balances, outAmount, virtualOffsetInOut) {
    /**********************************************************************************************
        // dz = incrZ  = amountOut < 0                                                               //
                                                                                                     //
        // z = balanceOut            z' = z +  virtualOffsetInOut = virtOut                          //
        //                                                                                           //
        //                                 /              1               \                          //
        //                  (p_z)' =   2  |   --------------------------  |                          //
        //                                 \           z' + dz            /                          //
        //                                                                                           //
        // Note that dz < 0                                                                          //
        **********************************************************************************************/
    const TWO = bignumber.BigNumber.from(2).mul(constants.WeiPerEther);
    const virtOut = balances[1].add(virtualOffsetInOut); // z' = z + virtualOffsetInOut
    const denominator = virtOut.sub(outAmount); // z' + dz
    const derivative = divDown(TWO, denominator);
    return derivative;
}
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(balances, inAmount, outAmount, virtualOffsetInOut, swapFee) {
    /**********************************************************************************************
        // dX = incrX  = amountIn  > 0                                                               //
        // dZ = incrZ  = amountOut < 0                                                               //
        // x = balanceIn             x' = x +  virtualOffsetInOut                                    //
        // z = balanceOut            z' = z +  virtualOffsetInOut                                    //
        // s = swapFee                                                                               //
        // L  = inv.Liq                1       /     x' + (1 - s) * dx        \                      //
        //                     p_z =  --- (2) |   --------------------------  |                      //
        // x' = virtIn                1-s      \         (z' + dz)^2          /                      //
        // z' = virtOut                                                                              //
        // Note that dz < 0 < dx.                                                                    //
        **********************************************************************************************/
    const TWO = bignumber.BigNumber.from(2).mul(constants.WeiPerEther);
    const afterFeeMultiplier = constants.WeiPerEther.sub(swapFee); // 1 - s
    const virtIn = balances[0].add(virtualOffsetInOut); // x + virtualOffsetInOut = x'
    const numerator = virtIn.add(mulDown(afterFeeMultiplier, inAmount)); // x' + (1 - s) * dx
    const virtOut = balances[1].add(virtualOffsetInOut); // z + virtualOffsetInOut = z'
    const denominator = mulDown(virtOut.sub(outAmount), virtOut.sub(outAmount));
    // (z' + dz)^2
    const factor = divDown(TWO, afterFeeMultiplier); // 2 / (1 - s)
    const derivative = mulDown(factor, divDown(numerator, denominator));
    return derivative;
}
// /////////
// ///  Normalized Liquidity measured with respect to the out-asset.
// ///  NB This is the same function as for the 2-CLP because the marginal trading curve of the 3-CLP
// ///  is a 2-CLP curve. We use different virtual offsets, of course.
// /////////
function _getNormalizedLiquidity(balances, virtualParamOut) {
    /**********************************************************************************************
    // x = balanceOut             x' = x +  virtualParamOut                                      //
    // s = swapFee                                                                               //
    //                                                                                           //
    //                             normalizedLiquidity = 0.5 * x'                                //
    //                                                                                           //
    // x' = virtOut                                                                              //
    // Note that balances = [balanceIn, balanceOut, balanceTertiary].                            //
    **********************************************************************************************/
    const virtOut = balances[1].add(virtualParamOut);
    return virtOut.div(2);
}

class Gyro3Pool {
    constructor(id, address, swapFee, totalShares, tokens, tokensList, root3Alpha) {
        this.poolType = exports.PoolTypes.Gyro3;
        this.id = id;
        this.address = address;
        this.swapFee = safeParseFixed(swapFee, 18);
        this.totalShares = safeParseFixed(totalShares, 18);
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.root3Alpha = safeParseFixed(root3Alpha, 18);
    }
    static findToken(list, tokenAddress, error) {
        const token = list.find((t) => address.getAddress(t.address) === address.getAddress(tokenAddress));
        if (!token)
            throw new Error(error);
        return token;
    }
    static fromPool(pool) {
        if (!pool.root3Alpha)
            throw new Error('Pool missing root3Alpha');
        if (safeParseFixed(pool.root3Alpha, 18).lte(0) ||
            safeParseFixed(pool.root3Alpha, 18).gte(constants.WeiPerEther))
            throw new Error('Invalid root3Alpha parameter');
        if (pool.tokens.length !== 3)
            throw new Error('Gyro3Pool must contain three tokens only');
        return new Gyro3Pool(pool.id, pool.address, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList, pool.root3Alpha);
    }
    parsePoolPairData(tokenIn, tokenOut) {
        const tI = Gyro3Pool.findToken(this.tokens, tokenIn, 'Pool does not contain tokenIn');
        const balanceIn = tI.balance;
        const decimalsIn = tI.decimals;
        const tO = Gyro3Pool.findToken(this.tokens, tokenOut, 'Pool does not contain tokenOut');
        const balanceOut = tO.balance;
        const decimalsOut = tO.decimals;
        const tokenTertiary = this.tokens.find((t) => address.getAddress(t.address) !== address.getAddress(tokenOut) &&
            address.getAddress(t.address) !== address.getAddress(tokenIn));
        if (!tokenTertiary)
            throw new Error('Pool does not contain a valid third token');
        const balanceTertiary = tokenTertiary.balance;
        const decimalsTertiary = tokenTertiary.decimals;
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            decimalsTertiary: Number(decimalsTertiary),
            balanceIn: safeParseFixed(balanceIn, decimalsIn),
            balanceOut: safeParseFixed(balanceOut, decimalsOut),
            balanceTertiary: safeParseFixed(balanceTertiary, decimalsTertiary),
            swapFee: this.swapFee,
        };
        return poolPairData;
    }
    getNormalizedLiquidity(poolPairData) {
        const balances = [
            poolPairData.balanceIn,
            poolPairData.balanceOut,
            poolPairData.balanceTertiary,
        ];
        const decimals = [
            poolPairData.decimalsIn,
            poolPairData.decimalsOut,
            poolPairData.decimalsTertiary,
        ];
        const normalizedBalances = _normalizeBalances(balances, decimals);
        const invariant = _calculateInvariant(normalizedBalances, this.root3Alpha);
        const virtualOffsetInOut = mulDown(invariant, this.root3Alpha);
        const normalisedLiquidity = _getNormalizedLiquidity(normalizedBalances, virtualOffsetInOut);
        return bnum(bignumber.formatFixed(normalisedLiquidity, 18));
    }
    getLimitAmountSwap(poolPairData, swapType) {
        if (swapType === exports.SwapTypes.SwapExactIn) {
            const balances = [
                poolPairData.balanceIn,
                poolPairData.balanceOut,
                poolPairData.balanceTertiary,
            ];
            const decimals = [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
                poolPairData.decimalsTertiary,
            ];
            const normalizedBalances = _normalizeBalances(balances, decimals);
            const invariant = _calculateInvariant(normalizedBalances, this.root3Alpha);
            const a = mulDown(invariant, this.root3Alpha);
            const maxAmountInAssetInPool = divDown(mulDown(normalizedBalances[0].add(a), normalizedBalances[1].add(a)), a).sub(a); // (x + a)(y + a) / a - a
            const limitAmountIn = maxAmountInAssetInPool.sub(normalizedBalances[0]);
            const limitAmountInPlusSwapFee = divDown(limitAmountIn, constants.WeiPerEther.sub(poolPairData.swapFee));
            return bnum(bignumber.formatFixed(mulDown(limitAmountInPlusSwapFee, SWAP_LIMIT_FACTOR), 18));
        }
        else {
            return bnum(bignumber.formatFixed(mulDown(poolPairData.balanceOut, SWAP_LIMIT_FACTOR), poolPairData.decimalsOut));
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance;
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => isSameAddress(t.address, token));
            if (!T)
                throw Error('Pool does not contain this token');
            T.balance = bignumber.formatFixed(newBalance, T.decimals);
        }
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        try {
            const balances = [
                poolPairData.balanceIn,
                poolPairData.balanceOut,
                poolPairData.balanceTertiary,
            ];
            const decimals = [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
                poolPairData.decimalsTertiary,
            ];
            const normalizedBalances = _normalizeBalances(balances, decimals);
            const invariant = _calculateInvariant(normalizedBalances, this.root3Alpha);
            const virtualOffsetInOut = mulDown(invariant, this.root3Alpha);
            const inAmount = safeParseFixed(amount.toString(), 18);
            const inAmountLessFee = _reduceFee(inAmount, poolPairData.swapFee);
            const outAmount = _calcOutGivenIn(normalizedBalances[0], normalizedBalances[1], inAmountLessFee, virtualOffsetInOut);
            return bnum(bignumber.formatFixed(outAmount, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        try {
            const outAmount = safeParseFixed(amount.toString(), 18);
            const balances = [
                poolPairData.balanceIn,
                poolPairData.balanceOut,
                poolPairData.balanceTertiary,
            ];
            const decimals = [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
                poolPairData.decimalsTertiary,
            ];
            const normalizedBalances = _normalizeBalances(balances, decimals);
            const invariant = _calculateInvariant(normalizedBalances, this.root3Alpha);
            const virtualOffsetInOut = mulDown(invariant, this.root3Alpha);
            const inAmountLessFee = _calcInGivenOut(normalizedBalances[0], normalizedBalances[1], outAmount, virtualOffsetInOut);
            const inAmount = _addFee(inAmountLessFee, poolPairData.swapFee);
            return bnum(bignumber.formatFixed(inAmount, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcTokensOutGivenExactBptIn(bptAmountIn) {
        // Missing maths for this
        return new Array(this.tokens.length).fill(constants.Zero);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcBptOutGivenExactTokensIn(amountsIn) {
        // Missing maths for this
        return constants.Zero;
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        try {
            const balances = [
                poolPairData.balanceIn,
                poolPairData.balanceOut,
                poolPairData.balanceTertiary,
            ];
            const decimals = [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
                poolPairData.decimalsTertiary,
            ];
            const normalizedBalances = _normalizeBalances(balances, decimals);
            const invariant = _calculateInvariant(normalizedBalances, this.root3Alpha);
            const virtualOffsetInOut = mulDown(invariant, this.root3Alpha);
            const inAmount = safeParseFixed(amount.toString(), 18);
            const inAmountLessFee = _reduceFee(inAmount, poolPairData.swapFee);
            const outAmount = _calcOutGivenIn(normalizedBalances[0], normalizedBalances[1], inAmountLessFee, virtualOffsetInOut);
            const newSpotPrice = _calculateNewSpotPrice(normalizedBalances, inAmount, outAmount, virtualOffsetInOut, poolPairData.swapFee);
            return bnum(bignumber.formatFixed(newSpotPrice, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        try {
            const outAmount = safeParseFixed(amount.toString(), 18);
            const balances = [
                poolPairData.balanceIn,
                poolPairData.balanceOut,
                poolPairData.balanceTertiary,
            ];
            const decimals = [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
                poolPairData.decimalsTertiary,
            ];
            const normalizedBalances = _normalizeBalances(balances, decimals);
            const invariant = _calculateInvariant(normalizedBalances, this.root3Alpha);
            const virtualOffsetInOut = mulDown(invariant, this.root3Alpha);
            const inAmountLessFee = _calcInGivenOut(normalizedBalances[0], normalizedBalances[1], outAmount, virtualOffsetInOut);
            const inAmount = _addFee(inAmountLessFee, poolPairData.swapFee);
            const newSpotPrice = _calculateNewSpotPrice(normalizedBalances, inAmount, outAmount, virtualOffsetInOut, poolPairData.swapFee);
            return bnum(bignumber.formatFixed(newSpotPrice, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        try {
            const balances = [
                poolPairData.balanceIn,
                poolPairData.balanceOut,
                poolPairData.balanceTertiary,
            ];
            const decimals = [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
                poolPairData.decimalsTertiary,
            ];
            const normalizedBalances = _normalizeBalances(balances, decimals);
            const invariant = _calculateInvariant(normalizedBalances, this.root3Alpha);
            const virtualOffsetInOut = mulDown(invariant, this.root3Alpha);
            const inAmount = safeParseFixed(amount.toString(), 18);
            const inAmountLessFee = _reduceFee(inAmount, poolPairData.swapFee);
            const outAmount = _calcOutGivenIn(normalizedBalances[0], normalizedBalances[1], inAmountLessFee, virtualOffsetInOut);
            const derivative = _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(normalizedBalances, outAmount, virtualOffsetInOut);
            return bnum(bignumber.formatFixed(derivative, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        try {
            const outAmount = safeParseFixed(amount.toString(), 18);
            const balances = [
                poolPairData.balanceIn,
                poolPairData.balanceOut,
                poolPairData.balanceTertiary,
            ];
            const decimals = [
                poolPairData.decimalsIn,
                poolPairData.decimalsOut,
                poolPairData.decimalsTertiary,
            ];
            const normalizedBalances = _normalizeBalances(balances, decimals);
            const invariant = _calculateInvariant(normalizedBalances, this.root3Alpha);
            const virtualOffsetInOut = mulDown(invariant, this.root3Alpha);
            const inAmountLessFee = _calcInGivenOut(normalizedBalances[0], normalizedBalances[1], outAmount, virtualOffsetInOut);
            const inAmount = _addFee(inAmountLessFee, poolPairData.swapFee);
            const derivative = _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(normalizedBalances, inAmount, outAmount, virtualOffsetInOut, poolPairData.swapFee);
            return bnum(bignumber.formatFixed(derivative, 18));
        }
        catch (error) {
            return bnum(0);
        }
    }
}

const MAX_BALANCES = bignumber.BigNumber.from(10).pow(34); // 1e16 in normal precision
// Invariant calculation
const MAX_INVARIANT = bignumber.BigNumber.from(10).pow(37).mul(3); // 3e19 in normal precision

/////////
/// FEE CALCULATION
/////////
function reduceFee(amountIn, swapFee) {
    const feeAmount = mulDown(amountIn, swapFee);
    return amountIn.sub(feeAmount);
}
function addFee(amountIn, swapFee) {
    return divDown(amountIn, constants.WeiPerEther.sub(swapFee));
}
////////
/// BALANCE CALCULATION
////////
function normalizeBalances(balances, decimals) {
    const scalingFactors = decimals.map((d) => bignumber.parseFixed('1', d));
    return balances.map((bal, index) => bal.mul(constants.WeiPerEther).div(scalingFactors[index]));
}
function balancesFromTokenInOut(balanceTokenIn, balanceTokenOut, tokenInIsToken0) {
    return tokenInIsToken0
        ? [balanceTokenIn, balanceTokenOut]
        : [balanceTokenOut, balanceTokenIn];
}
/////////
/// INVARIANT CALC
/////////
function calcAtAChi(x, y, p, d) {
    const dSq2 = mulXpU(d.dSq, d.dSq);
    // (cx - sy) * (w/lambda + z) / lambda
    //      account for 2 factors of dSq (4 s,c factors)
    const termXp = divXpU(divDownMagU(divDownMagU(d.w, p.lambda).add(d.z), p.lambda), dSq2);
    let val = mulDownXpToNpU(mulDownMagU(x, p.c).sub(mulDownMagU(y, p.s)), termXp);
    // (x lambda s + y lambda c) * u, note u > 0
    let termNp = mulDownMagU(mulDownMagU(x, p.lambda), p.s).add(mulDownMagU(mulDownMagU(y, p.lambda), p.c));
    val = val.add(mulDownXpToNpU(termNp, divXpU(d.u, dSq2)));
    // (sx+cy) * v, note v > 0
    termNp = mulDownMagU(x, p.s).add(mulDownMagU(y, p.c));
    val = val.add(mulDownXpToNpU(termNp, divXpU(d.v, dSq2)));
    return val;
}
function calcInvariantSqrt(x, y, p, d) {
    let val = calcMinAtxAChiySqPlusAtxSq(x, y, p, d).add(calc2AtxAtyAChixAChiy(x, y, p, d));
    val = val.add(calcMinAtyAChixSqPlusAtySq(x, y, p, d));
    const err = mulUpMagU(x, x).add(mulUpMagU(y, y)).div(ONE_XP);
    val = val.gt(0) ? sqrt(val, bignumber.BigNumber.from(5)) : bignumber.BigNumber.from(0);
    return [val, err];
}
function calcMinAtxAChiySqPlusAtxSq(x, y, p, d) {
    let termNp = mulUpMagU(mulUpMagU(mulUpMagU(x, x), p.c), p.c).add(mulUpMagU(mulUpMagU(mulUpMagU(y, y), p.s), p.s));
    termNp = termNp.sub(mulDownMagU(mulDownMagU(mulDownMagU(x, y), p.c.mul(2)), p.s));
    const termXp = mulXpU(d.u, d.u)
        .add(divDownMagU(mulXpU(d.u.mul(2), d.v), p.lambda))
        .add(divDownMagU(divDownMagU(mulXpU(d.v, d.v), p.lambda), p.lambda));
    let val = mulDownXpToNpU(termNp.mul(-1), termXp);
    val = val.add(mulDownXpToNpU(divDownMagU(divDownMagU(termNp.sub(9), p.lambda), p.lambda), divXpU(ONE_XP, d.dSq)));
    return val;
}
function calc2AtxAtyAChixAChiy(x, y, p, d) {
    let termNp = mulDownMagU(mulDownMagU(mulDownMagU(x, x).sub(mulUpMagU(y, y)), p.c.mul(2)), p.s);
    const xy = mulDownMagU(y, x.mul(2));
    termNp = termNp
        .add(mulDownMagU(mulDownMagU(xy, p.c), p.c))
        .sub(mulDownMagU(mulDownMagU(xy, p.s), p.s));
    let termXp = mulXpU(d.z, d.u).add(divDownMagU(divDownMagU(mulXpU(d.w, d.v), p.lambda), p.lambda));
    termXp = termXp.add(divDownMagU(mulXpU(d.w, d.u).add(mulXpU(d.z, d.v)), p.lambda));
    termXp = divXpU(termXp, mulXpU(mulXpU(mulXpU(d.dSq, d.dSq), d.dSq), d.dSq));
    const val = mulDownXpToNpU(termNp, termXp);
    return val;
}
function calcMinAtyAChixSqPlusAtySq(x, y, p, d) {
    let termNp = mulUpMagU(mulUpMagU(mulUpMagU(x, x), p.s), p.s).add(mulUpMagU(mulUpMagU(mulUpMagU(y, y), p.c), p.c));
    termNp = termNp.add(mulUpMagU(mulUpMagU(mulUpMagU(x, y), p.s.mul(2)), p.c));
    let termXp = mulXpU(d.z, d.z).add(divDownMagU(divDownMagU(mulXpU(d.w, d.w), p.lambda), p.lambda));
    termXp = termXp.add(divDownMagU(mulXpU(d.z.mul(2), d.w), p.lambda));
    termXp = divXpU(termXp, mulXpU(mulXpU(mulXpU(d.dSq, d.dSq), d.dSq), d.dSq));
    let val = mulDownXpToNpU(termNp.mul(-1), termXp);
    val = val.add(mulDownXpToNpU(termNp.sub(9), divXpU(ONE_XP, d.dSq)));
    return val;
}
function calcAChiAChiInXp(p, d) {
    const dSq3 = mulXpU(mulXpU(d.dSq, d.dSq), d.dSq);
    let val = mulUpMagU(p.lambda, divXpU(mulXpU(d.u.mul(2), d.v), dSq3));
    val = val.add(mulUpMagU(mulUpMagU(divXpU(mulXpU(d.u.add(1), d.u.add(1)), dSq3), p.lambda), p.lambda));
    val = val.add(divXpU(mulXpU(d.v, d.v), dSq3));
    const termXp = divUpMagU(d.w, p.lambda).add(d.z);
    val = val.add(divXpU(mulXpU(termXp, termXp), dSq3));
    return val;
}
/////////
/// SWAP AMOUNT CALC
/////////
function checkAssetBounds(params, derived, invariant, newBal, assetIndex) {
    if (assetIndex === 0) {
        const xPlus = maxBalances0(params, derived, invariant);
        if (newBal.gt(MAX_BALANCES) || newBal.gt(xPlus))
            throw new Error('ASSET BOUNDS EXCEEDED');
    }
    else {
        const yPlus = maxBalances1(params, derived, invariant);
        if (newBal.gt(MAX_BALANCES) || newBal.gt(yPlus))
            throw new Error('ASSET BOUNDS EXCEEDED');
    }
}
function maxBalances0(p, d, r) {
    const termXp1 = divXpU(d.tauBeta.x.sub(d.tauAlpha.x), d.dSq);
    const termXp2 = divXpU(d.tauBeta.y.sub(d.tauAlpha.y), d.dSq);
    let xp = mulDownXpToNpU(mulDownMagU(mulDownMagU(r.y, p.lambda), p.c), termXp1);
    xp = xp.add(termXp2.gt(bignumber.BigNumber.from(0))
        ? mulDownMagU(r.y, p.s)
        : mulDownXpToNpU(mulUpMagU(r.x, p.s), termXp2));
    return xp;
}
function maxBalances1(p, d, r) {
    const termXp1 = divXpU(d.tauBeta.x.sub(d.tauAlpha.x), d.dSq);
    const termXp2 = divXpU(d.tauBeta.y.sub(d.tauAlpha.y), d.dSq);
    let yp = mulDownXpToNpU(mulDownMagU(mulDownMagU(r.y, p.lambda), p.s), termXp1);
    yp = yp.add(termXp2.gt(bignumber.BigNumber.from(0))
        ? mulDownMagU(r.y, p.c)
        : mulDownXpToNpU(mulUpMagU(r.x, p.c), termXp2));
    return yp;
}
function calcYGivenX(x, params, d, r) {
    const ab = {
        x: virtualOffset0(params, d, r),
        y: virtualOffset1(params, d, r),
    };
    const y = solveQuadraticSwap(params.lambda, x, params.s, params.c, r, ab, d.tauBeta, d.dSq);
    return y;
}
function calcXGivenY(y, params, d, r) {
    const ba = {
        x: virtualOffset1(params, d, r),
        y: virtualOffset0(params, d, r),
    };
    const x = solveQuadraticSwap(params.lambda, y, params.c, params.s, r, ba, {
        x: d.tauAlpha.x.mul(-1),
        y: d.tauAlpha.y,
    }, d.dSq);
    return x;
}
function virtualOffset0(p, d, r, switchTau) {
    const tauValue = switchTau ? d.tauAlpha : d.tauBeta;
    const termXp = divXpU(tauValue.x, d.dSq);
    let a = tauValue.x.gt(bignumber.BigNumber.from(0))
        ? mulUpXpToNpU(mulUpMagU(mulUpMagU(r.x, p.lambda), p.c), termXp)
        : mulUpXpToNpU(mulDownMagU(mulDownMagU(r.y, p.lambda), p.c), termXp);
    a = a.add(mulUpXpToNpU(mulUpMagU(r.x, p.s), divXpU(tauValue.y, d.dSq)));
    return a;
}
function virtualOffset1(p, d, r, switchTau) {
    const tauValue = switchTau ? d.tauBeta : d.tauAlpha;
    const termXp = divXpU(tauValue.x, d.dSq);
    let b = tauValue.x.lt(bignumber.BigNumber.from(0))
        ? mulUpXpToNpU(mulUpMagU(mulUpMagU(r.x, p.lambda), p.s), termXp.mul(-1))
        : mulUpXpToNpU(mulDownMagU(mulDownMagU(r.y.mul(-1), p.lambda), p.s), termXp);
    b = b.add(mulUpXpToNpU(mulUpMagU(r.x, p.c), divXpU(tauValue.y, d.dSq)));
    return b;
}
function solveQuadraticSwap(lambda, x, s, c, r, ab, tauBeta, dSq) {
    const lamBar = {
        x: ONE_XP.sub(divDownMagU(divDownMagU(ONE_XP, lambda), lambda)),
        y: ONE_XP.sub(divUpMagU(divUpMagU(ONE_XP, lambda), lambda)),
    };
    const q = {
        a: bignumber.BigNumber.from(0),
        b: bignumber.BigNumber.from(0),
        c: bignumber.BigNumber.from(0),
    };
    const xp = x.sub(ab.x);
    if (xp.gt(bignumber.BigNumber.from(0))) {
        q.b = mulUpXpToNpU(mulDownMagU(mulDownMagU(xp.mul(-1), s), c), divXpU(lamBar.y, dSq));
    }
    else {
        q.b = mulUpXpToNpU(mulUpMagU(mulUpMagU(xp.mul(-1), s), c), divXpU(lamBar.x, dSq).add(1));
    }
    const sTerm = {
        x: divXpU(mulDownMagU(mulDownMagU(lamBar.y, s), s), dSq),
        y: divXpU(mulUpMagU(mulUpMagU(lamBar.x, s), s), dSq.add(1)).add(1),
    };
    sTerm.x = ONE_XP.sub(sTerm.x);
    sTerm.y = ONE_XP.sub(sTerm.y);
    q.c = calcXpXpDivLambdaLambda(x, r, lambda, s, c, tauBeta, dSq).mul(-1);
    q.c = q.c.add(mulDownXpToNpU(mulDownMagU(r.y, r.y), sTerm.y)); // r.y ===  currentInv + err
    q.c = q.c.gt(bignumber.BigNumber.from(0))
        ? sqrt(q.c, bignumber.BigNumber.from(5))
        : bignumber.BigNumber.from(0);
    if (q.b.sub(q.c).gt(bignumber.BigNumber.from(0))) {
        q.a = mulUpXpToNpU(q.b.sub(q.c), divXpU(ONE_XP, sTerm.y).add(1));
    }
    else {
        q.a = mulUpXpToNpU(q.b.sub(q.c), divXpU(ONE_XP, sTerm.x));
    }
    return q.a.add(ab.y);
}
function calcXpXpDivLambdaLambda(x, r, lambda, s, c, tauBeta, dSq) {
    const sqVars = {
        x: mulXpU(dSq, dSq),
        y: mulUpMagU(r.x, r.x),
    };
    const q = {
        a: bignumber.BigNumber.from(0),
        b: bignumber.BigNumber.from(0),
        c: bignumber.BigNumber.from(0),
    };
    let termXp = divXpU(mulXpU(tauBeta.x, tauBeta.y), sqVars.x);
    if (termXp.gt(bignumber.BigNumber.from(0))) {
        q.a = mulUpMagU(sqVars.y, s.mul(2));
        q.a = mulUpXpToNpU(mulUpMagU(q.a, c), termXp.add(7));
    }
    else {
        q.a = mulDownMagU(mulDownMagU(r.y, r.y), s.mul(2)); // r.y ===  currentInv + err
        q.a = mulUpXpToNpU(mulDownMagU(q.a, c), termXp);
    }
    if (tauBeta.x.lt(bignumber.BigNumber.from(0))) {
        q.b = mulUpXpToNpU(mulUpMagU(mulUpMagU(r.x, x), c.mul(2)), divXpU(tauBeta.x, dSq).mul(-1).add(3));
    }
    else {
        q.b = mulUpXpToNpU(mulDownMagU(mulDownMagU(r.y.mul(-1), x), c.mul(2)), divXpU(tauBeta.x, dSq));
    }
    q.a = q.a.add(q.b);
    termXp = divXpU(mulXpU(tauBeta.y, tauBeta.y), sqVars.x).add(7);
    q.b = mulUpMagU(sqVars.y, s);
    q.b = mulUpXpToNpU(mulUpMagU(q.b, s), termXp);
    q.c = mulUpXpToNpU(mulDownMagU(mulDownMagU(r.y.mul(-1), x), s.mul(2)), divXpU(tauBeta.y, dSq));
    q.b = q.b.add(q.c).add(mulUpMagU(x, x));
    q.b = q.b.gt(bignumber.BigNumber.from(0))
        ? divUpMagU(q.b, lambda)
        : divDownMagU(q.b, lambda);
    q.a = q.a.add(q.b);
    q.a = q.a.gt(bignumber.BigNumber.from(0))
        ? divUpMagU(q.a, lambda)
        : divDownMagU(q.a, lambda);
    termXp = divXpU(mulXpU(tauBeta.x, tauBeta.x), sqVars.x).add(7);
    const val = mulUpMagU(mulUpMagU(sqVars.y, c), c);
    return mulUpXpToNpU(val, termXp).add(q.a);
}

/////////
/// SPOT PRICE AFTER SWAP CALCULATIONS
/////////
function calcSpotPriceYGivenX(x, params, d, r) {
    const ab = {
        x: virtualOffset0(params, d, r),
        y: virtualOffset1(params, d, r),
    };
    const newSpotPriceFactor = solveDerivativeQuadraticSwap(params.lambda, x, params.s, params.c, r, ab, d.tauBeta, d.dSq);
    return newSpotPriceFactor;
}
function calcSpotPriceXGivenY(y, params, d, r) {
    const ba = {
        x: virtualOffset1(params, d, r),
        y: virtualOffset0(params, d, r),
    };
    const newSpotPriceFactor = solveDerivativeQuadraticSwap(params.lambda, y, params.c, params.s, r, ba, {
        x: d.tauAlpha.x.mul(-1),
        y: d.tauAlpha.y,
    }, d.dSq);
    return newSpotPriceFactor;
}
function solveDerivativeQuadraticSwap(lambda, x, s, c, r, ab, tauBeta, dSq) {
    const lamBar = {
        x: ONE_XP.sub(divDownMagU(divDownMagU(ONE_XP, lambda), lambda)),
        y: ONE_XP.sub(divUpMagU(divUpMagU(ONE_XP, lambda), lambda)),
    };
    const q = {
        a: bignumber.BigNumber.from(0),
        b: bignumber.BigNumber.from(0),
        c: bignumber.BigNumber.from(0),
    };
    const xp = x.sub(ab.x);
    q.b = mulUpXpToNpU(mulDownMagU(s, c), divXpU(lamBar.y, dSq));
    const sTerm = {
        x: divXpU(mulDownMagU(mulDownMagU(lamBar.y, s), s), dSq),
        y: divXpU(mulUpMagU(mulUpMagU(lamBar.x, s), s), dSq.add(1)).add(1),
    };
    sTerm.x = ONE_XP.sub(sTerm.x);
    sTerm.y = ONE_XP.sub(sTerm.y);
    q.c = calcXpXpDivLambdaLambda(x, r, lambda, s, c, tauBeta, dSq).mul(-1);
    q.c = q.c.add(mulDownXpToNpU(mulDownMagU(r.y, r.y), sTerm.y)); // r.y ===  currentInv + err
    q.c = q.c.gt(bignumber.BigNumber.from(0))
        ? sqrt(q.c, bignumber.BigNumber.from(5))
        : bignumber.BigNumber.from(0);
    q.c = mulDown(mulDown(q.c, lambda), lambda);
    q.c = divDown(xp, q.c);
    if (q.b.sub(q.c).gt(bignumber.BigNumber.from(0))) {
        q.a = mulUpXpToNpU(q.b.sub(q.c), divXpU(ONE_XP, sTerm.y).add(1));
    }
    else {
        q.a = mulUpXpToNpU(q.b.sub(q.c), divXpU(ONE_XP, sTerm.x));
    }
    return q.a;
}
/////////
/// SPOT PRICE DERIVATIVE CALCULATIONS
/////////
function setup(balances, params, derived, fee, rVec, ixVar) {
    const r = rVec.y;
    const { c, s, lambda } = params;
    const [x0, y0] = balances;
    const a = virtualOffset0(params, derived, rVec);
    const b = virtualOffset1(params, derived, rVec);
    const ls = constants.WeiPerEther.sub(divDown(constants.WeiPerEther, mulDown(lambda, lambda)));
    const f = constants.WeiPerEther.sub(fee);
    let R;
    if (ixVar === 0) {
        R = sqrt(mulDown(mulDown(r, r), constants.WeiPerEther.sub(mulDown(ls, mulDown(s, s)))).sub(divDown(mulDown(x0.sub(a), x0.sub(a)), mulDown(lambda, lambda))), bignumber.BigNumber.from(5));
    }
    else {
        R = sqrt(mulDown(mulDown(r, r), constants.WeiPerEther.sub(mulDown(ls, mulDown(c, c)))).sub(divDown(mulDown(y0.sub(b), y0.sub(b)), mulDown(lambda, lambda))), bignumber.BigNumber.from(5));
    }
    return { x0, y0, c, s, lambda, a, b, ls, f, r, R };
}
function normalizedLiquidityYIn(balances, params, derived, fee, rVec) {
    const { y0, c, s, lambda, b, ls, R } = setup(balances, params, derived, fee, rVec, 1);
    const returnValue = divDown(mulDown(divDown(constants.WeiPerEther, constants.WeiPerEther.sub(mulDown(ls, mulDown(c, c)))), mulDown(R, mulDown(mulDown(mulDown(mulDown(mulDown(ls, s), c), mulDown(lambda, lambda)), R).sub(y0.sub(b)), mulDown(mulDown(mulDown(mulDown(ls, s), c), mulDown(lambda, lambda)), R).sub(y0.sub(b))))), mulDown(mulDown(lambda, lambda), mulDown(R, R)).add(mulDown(y0.sub(b), y0.sub(b))));
    return returnValue;
}
function normalizedLiquidityXIn(balances, params, derived, fee, rVec) {
    const { x0, c, s, lambda, a, ls, R } = setup(balances, params, derived, fee, rVec, 0);
    const returnValue = divDown(mulDown(divDown(constants.WeiPerEther, constants.WeiPerEther.sub(mulDown(ls, mulDown(s, s)))), mulDown(R, mulDown(mulDown(mulDown(mulDown(mulDown(ls, s), c), mulDown(lambda, lambda)), R).sub(x0.sub(a)), mulDown(mulDown(mulDown(mulDown(ls, s), c), mulDown(lambda, lambda)), R).sub(x0.sub(a))))), mulDown(mulDown(lambda, lambda), mulDown(R, R)).add(mulDown(x0.sub(a), x0.sub(a))));
    return returnValue;
}
function dPyDXIn(balances, params, derived, fee, rVec) {
    const { x0, c, s, lambda, a, ls, R } = setup(balances, params, derived, fee, rVec, 0);
    const returnValue = divDown(mulDown(constants.WeiPerEther.sub(mulDown(ls, mulDown(s, s))), divDown(constants.WeiPerEther, mulDown(mulDown(lambda, lambda), R)).add(divDown(mulDown(x0.sub(a), x0.sub(a)), mulDown(mulDown(mulDown(lambda, lambda), mulDown(lambda, lambda)), mulDown(R, mulDown(R, R)))))), mulDown(mulDown(mulDown(ls, s), c).sub(divDown(x0.sub(a), mulDown(mulDown(lambda, lambda), R))), mulDown(mulDown(ls, s), c).sub(divDown(x0.sub(a), mulDown(mulDown(lambda, lambda), R)))));
    return returnValue;
}
function dPxDYIn(balances, params, derived, fee, rVec) {
    const { y0, c, s, lambda, b, ls, R } = setup(balances, params, derived, fee, rVec, 1);
    const returnValue = divDown(mulDown(constants.WeiPerEther.sub(mulDown(ls, mulDown(c, c))), divDown(constants.WeiPerEther, mulDown(mulDown(lambda, lambda), R)).add(divDown(mulDown(y0.sub(b), y0.sub(b)), mulDown(mulDown(mulDown(lambda, lambda), mulDown(lambda, lambda)), mulDown(R, mulDown(R, R)))))), mulDown(mulDown(mulDown(ls, s), c).sub(divDown(y0.sub(b), mulDown(mulDown(lambda, lambda), R))), mulDown(mulDown(ls, s), c).sub(divDown(y0.sub(b), mulDown(mulDown(lambda, lambda), R)))));
    return returnValue;
}
function dPxDXOut(balances, params, derived, fee, rVec) {
    const { x0, s, lambda, a, ls, R, f } = setup(balances, params, derived, fee, rVec, 0);
    const returnValue = mulDown(divDown(constants.WeiPerEther, mulDown(f, constants.WeiPerEther.sub(mulDown(ls, mulDown(s, s))))), divDown(constants.WeiPerEther, mulDown(mulDown(lambda, lambda), R)).add(divDown(mulDown(x0.sub(a), x0.sub(a)), mulDown(mulDown(mulDown(lambda, lambda), mulDown(lambda, lambda)), mulDown(mulDown(R, R), R)))));
    return returnValue;
}
function dPyDYOut(balances, params, derived, fee, rVec) {
    const { y0, c, lambda, b, ls, R, f } = setup(balances, params, derived, fee, rVec, 1);
    const returnValue = mulDown(divDown(constants.WeiPerEther, mulDown(f, constants.WeiPerEther.sub(mulDown(ls, mulDown(c, c))))), divDown(constants.WeiPerEther, mulDown(mulDown(lambda, lambda), R)).add(divDown(mulDown(y0.sub(b), y0.sub(b)), mulDown(mulDown(mulDown(lambda, lambda), mulDown(lambda, lambda)), mulDown(mulDown(R, R), R)))));
    return returnValue;
}

function calculateNormalizedLiquidity(balances, params, derived, r, fee, tokenInIsToken0) {
    if (tokenInIsToken0) {
        return normalizedLiquidityXIn(balances, params, derived, fee, r);
    }
    else {
        return normalizedLiquidityYIn(balances, params, derived, fee, r);
    }
}
function calculateInvariantWithError(balances, params, derived) {
    const [x, y] = balances;
    if (x.add(y).gt(MAX_BALANCES))
        throw new Error('MAX ASSETS EXCEEDED');
    const AtAChi = calcAtAChi(x, y, params, derived);
    const invariantResult = calcInvariantSqrt(x, y, params, derived);
    const square_root = invariantResult[0];
    let err = invariantResult[1];
    if (square_root.gt(0)) {
        err = divUpMagU(err.add(1), square_root.mul(2));
    }
    else {
        err = err.gt(0)
            ? sqrt(err, bignumber.BigNumber.from(5))
            : bignumber.BigNumber.from(10).pow(9);
    }
    err = mulUpMagU(params.lambda, x.add(y))
        .div(ONE_XP)
        .add(err)
        .add(1)
        .mul(20);
    const mulDenominator = divXpU(ONE_XP, calcAChiAChiInXp(params, derived).sub(ONE_XP));
    const invariant = mulDownXpToNpU(AtAChi.add(square_root).sub(err), mulDenominator);
    err = mulUpXpToNpU(err, mulDenominator);
    err = err
        .add(mulUpXpToNpU(invariant, mulDenominator)
        .mul(params.lambda
        .mul(params.lambda)
        .div(bignumber.BigNumber.from(10).pow(36)))
        .mul(40)
        .div(ONE_XP))
        .add(1);
    if (invariant.add(err).gt(MAX_INVARIANT))
        throw new Error('MAX INVARIANT EXCEEDED');
    return [invariant, err];
}
function calcOutGivenIn(balances, amountIn, tokenInIsToken0, params, derived, invariant) {
    if (amountIn.lt(SMALL))
        return bignumber.BigNumber.from(0);
    const ixIn = Number(!tokenInIsToken0);
    const ixOut = Number(tokenInIsToken0);
    const calcGiven = tokenInIsToken0 ? calcYGivenX : calcXGivenY;
    const balInNew = balances[ixIn].add(amountIn);
    checkAssetBounds(params, derived, invariant, balInNew, ixIn);
    const balOutNew = calcGiven(balInNew, params, derived, invariant);
    const amountOut = balances[ixOut].sub(balOutNew);
    if (amountOut.lt(0)) {
        // Should never happen; check anyways to catch a numerical bug.
        throw new Error('ASSET BOUNDS EXCEEDED 1');
    }
    return amountOut;
}
function calcInGivenOut(balances, amountOut, tokenInIsToken0, params, derived, invariant) {
    if (amountOut.lt(SMALL))
        return bignumber.BigNumber.from(0);
    const ixIn = Number(!tokenInIsToken0);
    const ixOut = Number(tokenInIsToken0);
    const calcGiven = tokenInIsToken0 ? calcXGivenY : calcYGivenX;
    if (amountOut.gt(balances[ixOut]))
        throw new Error('ASSET BOUNDS EXCEEDED 2');
    const balOutNew = balances[ixOut].sub(amountOut);
    const balInNew = calcGiven(balOutNew, params, derived, invariant);
    checkAssetBounds(params, derived, invariant, balInNew, ixIn);
    const amountIn = balInNew.sub(balances[ixIn]);
    if (amountIn.lt(0))
        // Should never happen; check anyways to catch a numerical bug.
        throw new Error('ASSET BOUNDS EXCEEDED 3');
    return amountIn;
}
function calcSpotPriceAfterSwapOutGivenIn(balances, amountIn, tokenInIsToken0, params, derived, invariant, swapFee) {
    const ixIn = Number(!tokenInIsToken0);
    const f = constants.WeiPerEther.sub(swapFee);
    const calcSpotPriceGiven = tokenInIsToken0
        ? calcSpotPriceYGivenX
        : calcSpotPriceXGivenY;
    const balInNew = balances[ixIn].add(amountIn);
    const newSpotPriceFactor = calcSpotPriceGiven(balInNew, params, derived, invariant);
    return divDown(constants.WeiPerEther, mulDown(newSpotPriceFactor, f));
}
function calcSpotPriceAfterSwapInGivenOut(balances, amountOut, tokenInIsToken0, params, derived, invariant, swapFee) {
    const ixOut = Number(tokenInIsToken0);
    const f = constants.WeiPerEther.sub(swapFee);
    const calcSpotPriceGiven = tokenInIsToken0
        ? calcSpotPriceXGivenY
        : calcSpotPriceYGivenX;
    const balOutNew = balances[ixOut].sub(amountOut);
    const newSpotPriceFactor = calcSpotPriceGiven(balOutNew, params, derived, invariant);
    return divDown(newSpotPriceFactor, f);
}
function calcDerivativePriceAfterSwapOutGivenIn(balances, tokenInIsToken0, params, derived, invariant, swapFee) {
    const ixIn = Number(!tokenInIsToken0);
    const newDerivativeSpotPriceFactor = ixIn
        ? dPxDYIn(balances, params, derived, swapFee, invariant)
        : dPyDXIn(balances, params, derived, swapFee, invariant);
    return newDerivativeSpotPriceFactor;
}
function calcDerivativeSpotPriceAfterSwapInGivenOut(balances, tokenInIsToken0, params, derived, invariant, swapFee) {
    const ixIn = Number(!tokenInIsToken0);
    const newDerivativeSpotPriceFactor = ixIn
        ? dPxDXOut(balances, params, derived, swapFee, invariant)
        : dPyDYOut(balances, params, derived, swapFee, invariant);
    return newDerivativeSpotPriceFactor;
}

class GyroEPool {
    constructor(id, address, swapFee, totalShares, tokens, tokensList, gyroEParams, derivedGyroEParams) {
        this.poolType = exports.PoolTypes.GyroE;
        this.id = id;
        this.address = address;
        this.swapFee = safeParseFixed(swapFee, 18);
        this.totalShares = safeParseFixed(totalShares, 18);
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.gyroEParams = {
            alpha: safeParseFixed(gyroEParams.alpha, 18),
            beta: safeParseFixed(gyroEParams.beta, 18),
            c: safeParseFixed(gyroEParams.c, 18),
            s: safeParseFixed(gyroEParams.s, 18),
            lambda: safeParseFixed(gyroEParams.lambda, 18),
        };
        this.derivedGyroEParams = {
            tauAlpha: {
                x: safeParseFixed(derivedGyroEParams.tauAlphaX, 38),
                y: safeParseFixed(derivedGyroEParams.tauAlphaY, 38),
            },
            tauBeta: {
                x: safeParseFixed(derivedGyroEParams.tauBetaX, 38),
                y: safeParseFixed(derivedGyroEParams.tauBetaY, 38),
            },
            u: safeParseFixed(derivedGyroEParams.u, 38),
            v: safeParseFixed(derivedGyroEParams.v, 38),
            w: safeParseFixed(derivedGyroEParams.w, 38),
            z: safeParseFixed(derivedGyroEParams.z, 38),
            dSq: safeParseFixed(derivedGyroEParams.dSq, 38),
        };
    }
    static fromPool(pool) {
        const { alpha, beta, c, s, lambda, tauAlphaX, tauAlphaY, tauBetaX, tauBetaY, u, v, w, z, dSq, } = pool;
        const gyroEParams = {
            alpha,
            beta,
            c,
            s,
            lambda,
        };
        const derivedGyroEParams = {
            tauAlphaX,
            tauAlphaY,
            tauBetaX,
            tauBetaY,
            u,
            v,
            w,
            z,
            dSq,
        };
        if (!Object.values(gyroEParams).every((el) => el) ||
            !Object.values(derivedGyroEParams).every((el) => el))
            throw new Error('Pool missing GyroE params and/or GyroE derived params');
        return new GyroEPool(pool.id, pool.address, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList, gyroEParams, derivedGyroEParams);
    }
    parsePoolPairData(tokenIn, tokenOut) {
        const tokenInIndex = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenIn));
        if (tokenInIndex < 0)
            throw 'Pool does not contain tokenIn';
        const tI = this.tokens[tokenInIndex];
        const balanceIn = tI.balance;
        const decimalsIn = tI.decimals;
        const tokenOutIndex = this.tokens.findIndex((t) => address.getAddress(t.address) === address.getAddress(tokenOut));
        if (tokenOutIndex < 0)
            throw 'Pool does not contain tokenOut';
        const tO = this.tokens[tokenOutIndex];
        const balanceOut = tO.balance;
        const decimalsOut = tO.decimals;
        const tokenInIsToken0 = tokenInIndex === 0;
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            balanceIn: safeParseFixed(balanceIn, decimalsIn),
            balanceOut: safeParseFixed(balanceOut, decimalsOut),
            swapFee: this.swapFee,
            tokenInIsToken0,
        };
        return poolPairData;
    }
    getNormalizedLiquidity(poolPairData) {
        const normalizedBalances = normalizeBalances([poolPairData.balanceIn, poolPairData.balanceOut], [poolPairData.decimalsIn, poolPairData.decimalsOut]);
        const orderedNormalizedBalances = balancesFromTokenInOut(normalizedBalances[0], normalizedBalances[1], poolPairData.tokenInIsToken0);
        const [currentInvariant, invErr] = calculateInvariantWithError(orderedNormalizedBalances, this.gyroEParams, this.derivedGyroEParams);
        const invariant = {
            x: currentInvariant.add(invErr.mul(2)),
            y: currentInvariant,
        };
        const normalizedLiquidity = calculateNormalizedLiquidity(orderedNormalizedBalances, this.gyroEParams, this.derivedGyroEParams, invariant, this.swapFee, poolPairData.tokenInIsToken0);
        return bnum(bignumber.formatFixed(normalizedLiquidity, 18));
    }
    getLimitAmountSwap(poolPairData, swapType) {
        if (swapType === exports.SwapTypes.SwapExactIn) {
            const normalizedBalances = normalizeBalances([poolPairData.balanceIn, poolPairData.balanceOut], [poolPairData.decimalsIn, poolPairData.decimalsOut]);
            const orderedNormalizedBalances = balancesFromTokenInOut(normalizedBalances[0], normalizedBalances[1], poolPairData.tokenInIsToken0);
            const [currentInvariant, invErr] = calculateInvariantWithError(orderedNormalizedBalances, this.gyroEParams, this.derivedGyroEParams);
            const invariant = {
                x: currentInvariant.add(invErr.mul(2)),
                y: currentInvariant,
            };
            const virtualOffsetFunc = poolPairData.tokenInIsToken0
                ? virtualOffset0
                : virtualOffset1;
            const maxAmountInAssetInPool = virtualOffsetFunc(this.gyroEParams, this.derivedGyroEParams, invariant).sub(virtualOffsetFunc(this.gyroEParams, this.derivedGyroEParams, invariant, true));
            const limitAmountIn = maxAmountInAssetInPool.sub(normalizedBalances[0]);
            const limitAmountInPlusSwapFee = divDown(limitAmountIn, constants.WeiPerEther.sub(poolPairData.swapFee));
            return bnum(bignumber.formatFixed(mulDown(limitAmountInPlusSwapFee, SWAP_LIMIT_FACTOR), 18));
        }
        else {
            return bnum(bignumber.formatFixed(mulDown(poolPairData.balanceOut, SWAP_LIMIT_FACTOR), poolPairData.decimalsOut));
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance;
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => isSameAddress(t.address, token));
            if (!T)
                throw Error('Pool does not contain this token');
            T.balance = bignumber.formatFixed(newBalance, T.decimals);
        }
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        const normalizedBalances = normalizeBalances([poolPairData.balanceIn, poolPairData.balanceOut], [poolPairData.decimalsIn, poolPairData.decimalsOut]);
        const orderedNormalizedBalances = balancesFromTokenInOut(normalizedBalances[0], normalizedBalances[1], poolPairData.tokenInIsToken0);
        const [currentInvariant, invErr] = calculateInvariantWithError(orderedNormalizedBalances, this.gyroEParams, this.derivedGyroEParams);
        const invariant = {
            x: currentInvariant.add(invErr.mul(2)),
            y: currentInvariant,
        };
        const inAmount = safeParseFixed(amount.toString(), 18);
        const inAmountLessFee = reduceFee(inAmount, poolPairData.swapFee);
        const outAmount = calcOutGivenIn(orderedNormalizedBalances, inAmountLessFee, poolPairData.tokenInIsToken0, this.gyroEParams, this.derivedGyroEParams, invariant);
        return bnum(bignumber.formatFixed(outAmount, 18));
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        const normalizedBalances = normalizeBalances([poolPairData.balanceIn, poolPairData.balanceOut], [poolPairData.decimalsIn, poolPairData.decimalsOut]);
        const orderedNormalizedBalances = balancesFromTokenInOut(normalizedBalances[0], normalizedBalances[1], poolPairData.tokenInIsToken0);
        const [currentInvariant, invErr] = calculateInvariantWithError(orderedNormalizedBalances, this.gyroEParams, this.derivedGyroEParams);
        const invariant = {
            x: currentInvariant.add(invErr.mul(2)),
            y: currentInvariant,
        };
        const outAmount = safeParseFixed(amount.toString(), 18);
        const inAmountLessFee = calcInGivenOut(orderedNormalizedBalances, outAmount, poolPairData.tokenInIsToken0, this.gyroEParams, this.derivedGyroEParams, invariant);
        const inAmount = addFee(inAmountLessFee, poolPairData.swapFee);
        return bnum(bignumber.formatFixed(inAmount, 18));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcTokensOutGivenExactBptIn(bptAmountIn) {
        // Missing maths for this
        return new Array(this.tokens.length).fill(constants.Zero);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _calcBptOutGivenExactTokensIn(amountsIn) {
        // Missing maths for this
        return constants.Zero;
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        const normalizedBalances = normalizeBalances([poolPairData.balanceIn, poolPairData.balanceOut], [poolPairData.decimalsIn, poolPairData.decimalsOut]);
        const orderedNormalizedBalances = balancesFromTokenInOut(normalizedBalances[0], normalizedBalances[1], poolPairData.tokenInIsToken0);
        const [currentInvariant, invErr] = calculateInvariantWithError(orderedNormalizedBalances, this.gyroEParams, this.derivedGyroEParams);
        const invariant = {
            x: currentInvariant.add(invErr.mul(2)),
            y: currentInvariant,
        };
        const inAmount = safeParseFixed(amount.toString(), 18);
        const inAmountLessFee = reduceFee(inAmount, poolPairData.swapFee);
        const newSpotPrice = calcSpotPriceAfterSwapOutGivenIn(orderedNormalizedBalances, inAmountLessFee, poolPairData.tokenInIsToken0, this.gyroEParams, this.derivedGyroEParams, invariant, poolPairData.swapFee);
        return bnum(bignumber.formatFixed(newSpotPrice, 18));
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        const normalizedBalances = normalizeBalances([poolPairData.balanceIn, poolPairData.balanceOut], [poolPairData.decimalsIn, poolPairData.decimalsOut]);
        const orderedNormalizedBalances = balancesFromTokenInOut(normalizedBalances[0], normalizedBalances[1], poolPairData.tokenInIsToken0);
        const [currentInvariant, invErr] = calculateInvariantWithError(orderedNormalizedBalances, this.gyroEParams, this.derivedGyroEParams);
        const invariant = {
            x: currentInvariant.add(invErr.mul(2)),
            y: currentInvariant,
        };
        const outAmount = safeParseFixed(amount.toString(), 18);
        const newSpotPrice = calcSpotPriceAfterSwapInGivenOut(orderedNormalizedBalances, outAmount, poolPairData.tokenInIsToken0, this.gyroEParams, this.derivedGyroEParams, invariant, poolPairData.swapFee);
        return bnum(bignumber.formatFixed(newSpotPrice, 18));
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        const inAmount = safeParseFixed(amount.toString(), 18);
        const normalizedBalances = normalizeBalances([poolPairData.balanceIn, poolPairData.balanceOut], [poolPairData.decimalsIn, poolPairData.decimalsOut]);
        const orderedNormalizedBalances = balancesFromTokenInOut(normalizedBalances[0], normalizedBalances[1], poolPairData.tokenInIsToken0);
        const [currentInvariant, invErr] = calculateInvariantWithError(orderedNormalizedBalances, this.gyroEParams, this.derivedGyroEParams);
        const invariant = {
            x: currentInvariant.add(invErr.mul(2)),
            y: currentInvariant,
        };
        const derivative = calcDerivativePriceAfterSwapOutGivenIn([
            orderedNormalizedBalances[0].add(reduceFee(inAmount, poolPairData.swapFee)),
            orderedNormalizedBalances[1],
        ], poolPairData.tokenInIsToken0, this.gyroEParams, this.derivedGyroEParams, invariant, poolPairData.swapFee);
        return bnum(bignumber.formatFixed(derivative, 18));
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        const normalizedBalances = normalizeBalances([poolPairData.balanceIn, poolPairData.balanceOut], [poolPairData.decimalsIn, poolPairData.decimalsOut]);
        const orderedNormalizedBalances = balancesFromTokenInOut(normalizedBalances[0], normalizedBalances[1], poolPairData.tokenInIsToken0);
        const [currentInvariant, invErr] = calculateInvariantWithError(orderedNormalizedBalances, this.gyroEParams, this.derivedGyroEParams);
        const invariant = {
            x: currentInvariant.add(invErr.mul(2)),
            y: currentInvariant,
        };
        const outAmount = safeParseFixed(amount.toString(), 18);
        const derivative = calcDerivativeSpotPriceAfterSwapInGivenOut([
            orderedNormalizedBalances[0],
            orderedNormalizedBalances[1].sub(outAmount),
        ], poolPairData.tokenInIsToken0, this.gyroEParams, this.derivedGyroEParams, invariant, poolPairData.swapFee);
        return bnum(bignumber.formatFixed(derivative, 18));
    }
}

function parseNewPool(pool, currentBlockTimestamp = 0) {
    // We're not interested in any pools which don't allow swapping
    if (!pool.swapEnabled)
        return undefined;
    let newPool;
    try {
        if (pool.poolType === 'Weighted' || pool.poolType === 'Investment') {
            newPool = WeightedPool.fromPool(pool, false);
        }
        else if (pool.poolType === 'LiquidityBootstrapping') {
            newPool = WeightedPool.fromPool(pool, true);
        }
        else if (pool.poolType === 'Stable') {
            newPool = StablePool.fromPool(pool);
        }
        else if (pool.poolType === 'MetaStable') {
            newPool = MetaStablePool.fromPool(pool);
        }
        else if (pool.poolType === 'Element') {
            newPool = ElementPool.fromPool(pool);
            newPool.setCurrentBlockTimestamp(currentBlockTimestamp);
        }
        else if (pool.poolType.toString().includes('Linear'))
            newPool = LinearPool.fromPool(pool);
        else if (pool.poolType === 'StablePhantom' ||
            pool.poolType === 'ComposableStable')
            newPool = PhantomStablePool.fromPool(pool);
        else if (pool.poolType === 'Gyro2')
            newPool = Gyro2Pool.fromPool(pool);
        else if (pool.poolType === 'Gyro3')
            newPool = Gyro3Pool.fromPool(pool);
        else if (pool.poolType === 'GyroE')
            newPool = GyroEPool.fromPool(pool);
        else {
            console.error(`Unknown pool type or type field missing: ${pool.poolType} ${pool.id}`);
            return undefined;
        }
    }
    catch (err) {
        console.error(`parseNewPool: ${err.message}`);
        return undefined;
    }
    return newPool;
}
// TODO: Add cases for pairType = [BTP->token, token->BTP] and poolType = [weighted, stable]
function getOutputAmountSwap(pool, poolPairData, swapType, amount) {
    // TODO: check if necessary to check if amount > limitAmount
    if (swapType === exports.SwapTypes.SwapExactIn) {
        if (poolPairData.poolType !== exports.PoolTypes.Linear &&
            poolPairData.balanceIn.isZero()) {
            return ZERO;
        }
        else {
            return pool._exactTokenInForTokenOut(poolPairData, amount);
        }
    }
    else {
        if (poolPairData.balanceOut.isZero()) {
            return ZERO;
        }
        else if (scale(amount, poolPairData.decimalsOut).gte(poolPairData.balanceOut.toString())) {
            return INFINITY;
        }
        else {
            return pool._tokenInForExactTokenOut(poolPairData, amount);
        }
    }
}

// priceErrorTolerance is how close we expect prices after swap to be in SOR
// suggested paths
const priceErrorTolerance = process.env.PRICE_ERROR_TOLERANCE || '0.00001';
const PRICE_ERROR_TOLERANCE = new BigNumber(priceErrorTolerance);
// infinitesimal is an amount that's used to initialize swap amounts so they are
// not zero or the path's limit.
// It's also used in the calculation of derivatives in pool maths
// const infinitesimal: string = process.env.INFINITESIMAL || '0.000001';
const infinitesimal = '0.01'; // Increasing INFINITESIMAL to '0.01' to test derivative sensitivity
const INFINITESIMAL = new BigNumber(infinitesimal);

const MINIMUM_VALUE = bnum('0.000000000000000001');
function getHighestLimitAmountsForPaths(paths, maxPools) {
    if (paths.length === 0)
        return [];
    const limitAmounts = [];
    for (let i = 0; i < maxPools; i++) {
        if (i < paths.length) {
            const limitAmount = paths[i].limitAmount;
            limitAmounts.push(limitAmount);
        }
    }
    return limitAmounts;
}
function getEffectivePriceSwapForPath(path, swapType, amount, inputDecimals, outputDecimals, costReturnToken) {
    if (amount.lt(INFINITESIMAL)) {
        // Return spot price as code below would be 0/0 = undefined
        // or small_amount/0 or 0/small_amount which would cause bugs
        return getSpotPriceAfterSwapForPath(path, swapType, amount);
    }
    let outputAmountSwap = getOutputAmountSwapForPath(path, swapType, amount, inputDecimals);
    const gasCost = bnum(bignumber.formatFixed(costReturnToken, outputDecimals)).times(path.pools.length);
    if (swapType === exports.SwapTypes.SwapExactIn) {
        outputAmountSwap = outputAmountSwap.minus(gasCost);
        if (outputAmountSwap.lte(ZERO))
            return INFINITY;
        return amount.div(outputAmountSwap); // amountIn/AmountOut
    }
    else {
        amount = amount.plus(gasCost);
        return outputAmountSwap.div(amount); // amountIn/AmountOut
    }
}
function getOutputAmountSwapForPath(path, swapType, amount, inputDecimals) {
    // First of all check if the amount is above limit, if so, return 0 for
    // 'swapExactIn' or Inf for swapExactOut
    if (amount.gt(bnum(bignumber.formatFixed(path.limitAmount, inputDecimals)))) {
        if (swapType === exports.SwapTypes.SwapExactIn) {
            return ZERO;
        }
        else {
            return INFINITY;
        }
    }
    const amounts = getAmounts(path, swapType, amount);
    if (swapType === exports.SwapTypes.SwapExactIn) {
        return amounts[amounts.length - 1];
    }
    else {
        return amounts[0];
    }
}
function getAmounts(path, swapType, amount) {
    const pools = path.pools;
    const poolPairData = path.poolPairData;
    const ans = [amount];
    if (swapType === exports.SwapTypes.SwapExactIn) {
        for (let i = 0; i < pools.length; i++) {
            ans.push(getOutputAmountSwap(pools[i], poolPairData[i], swapType, ans[ans.length - 1]));
        }
    }
    else {
        const n = pools.length;
        for (let i = 0; i < pools.length; i++) {
            ans.unshift(getOutputAmountSwap(pools[n - 1 - i], poolPairData[n - 1 - i], swapType, ans[0]));
        }
    }
    return ans;
}
function getProdsSpotPrices(path, swapType, amounts) {
    const pools = path.pools;
    const poolPairData = path.poolPairData;
    const ans = [bnum(1)];
    const n = pools.length;
    let oneIfExactOut = 0;
    if (swapType === exports.SwapTypes.SwapExactOut)
        oneIfExactOut = 1;
    for (let i = 0; i < pools.length; i++) {
        ans.unshift(getSpotPriceAfterSwap(pools[n - 1 - i], poolPairData[n - 1 - i], swapType, amounts[n - 1 - i + oneIfExactOut]).times(ans[0]));
    }
    return ans;
}
function getProdsFirstSpotPrices(path, swapType, amounts) {
    if (swapType !== exports.SwapTypes.SwapExactOut)
        // Throw error?
        return [bnum(0)];
    const pools = path.pools;
    const poolPairData = path.poolPairData;
    const ans = [bnum(1)];
    for (let i = 0; i < pools.length; i++) {
        ans.push(getSpotPriceAfterSwap(pools[i], poolPairData[i], swapType, amounts[i + 1]).times(ans[ans.length - 1]));
    }
    return ans;
}
function getSpotPriceAfterSwapForPath(path, swapType, amount) {
    const amounts = getAmounts(path, swapType, amount);
    const prodsSpotPrices = getProdsSpotPrices(path, swapType, amounts);
    return prodsSpotPrices[0];
}
// TODO: Add cases for pairType = [BTP->token, token->BTP] and poolType = [weighted, stable]
function getSpotPriceAfterSwap(pool, poolPairData, swapType, amount) {
    // TODO: check if necessary to check if amount > limitAmount
    if (swapType === exports.SwapTypes.SwapExactIn) {
        if (poolPairData.balanceIn.isZero()) {
            return ZERO;
        }
    }
    else {
        if (poolPairData.balanceOut.isZero()) {
            return ZERO;
        }
        if (scale(amount, poolPairData.decimalsOut).gte(poolPairData.balanceOut.toString()))
            return INFINITY;
    }
    if (swapType === exports.SwapTypes.SwapExactIn) {
        return pool._spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount);
    }
    else {
        return pool._spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount);
    }
}
function getDerivativeSpotPriceAfterSwapForPath(path, swapType, amount) {
    const poolPairData = path.poolPairData;
    const pools = path.pools;
    const n = pools.length;
    const amounts = getAmounts(path, swapType, amount);
    const prodsSpotPrices = getProdsSpotPrices(path, swapType, amounts);
    let ans = bnum(0);
    if (swapType === exports.SwapTypes.SwapExactIn) {
        for (let i = 0; i < n; i++) {
            const newTerm = getDerivativeSpotPriceAfterSwap(pools[i], poolPairData[i], swapType, amounts[i]).times(prodsSpotPrices[i + 1]);
            ans = ans.plus(newTerm);
        }
    }
    else {
        const prodsFirstSpotPrices = getProdsFirstSpotPrices(path, swapType, amounts);
        for (let i = 0; i < n; i++) {
            let newTerm = getDerivativeSpotPriceAfterSwap(pools[i], poolPairData[i], swapType, amounts[i + 1]).times(prodsSpotPrices[i + 1]);
            newTerm = newTerm
                .times(prodsSpotPrices[i + 1])
                .times(prodsFirstSpotPrices[i]);
            // The following option is more efficient but returns less precision due to the division
            /*          let thisSpotPrice = getSpotPriceAfterSwap(pools[i], poolPairData[i], swapType, amounts[i + 1]);
            newTerm = newTerm.div(thisSpotPrice).times(prodsSpotPrices[0]);*/
            ans = ans.plus(newTerm);
        }
    }
    if (ans.eq(bnum(0)))
        ans = MINIMUM_VALUE;
    return ans;
}
// TODO: Add cases for pairType = [BPT->token, token->BPT] and poolType = [weighted, stable]
function getDerivativeSpotPriceAfterSwap(pool, poolPairData, swapType, amount) {
    // TODO: check if necessary to check if amount > limitAmount
    if (swapType === exports.SwapTypes.SwapExactIn) {
        if (poolPairData.balanceIn.isZero()) {
            return ZERO;
        }
    }
    else {
        if (poolPairData.balanceOut.isZero()) {
            return ZERO;
        }
        if (scale(amount, poolPairData.decimalsOut).gte(poolPairData.balanceOut.toString()))
            return INFINITY;
    }
    if (swapType === exports.SwapTypes.SwapExactIn) {
        return pool._derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount);
    }
    else {
        return pool._derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount);
    }
}
// We need do pass 'pools' here because this function has to update the pools state
// in case a pool is used twice in two different paths
function EVMgetOutputAmountSwap(pool, poolPairData, swapType, amount) {
    //we recalculate the pool pair data since balance updates are not reflected immediately in cached poolPairData
    poolPairData = pool.parsePoolPairData(poolPairData.tokenIn, poolPairData.tokenOut);
    const { balanceIn, balanceOut, tokenIn, tokenOut } = poolPairData;
    let returnAmount;
    if (swapType === exports.SwapTypes.SwapExactIn) {
        if (poolPairData.poolType !== exports.PoolTypes.Linear &&
            poolPairData.balanceIn.isZero()) {
            return ZERO;
        }
    }
    else {
        if (poolPairData.balanceOut.isZero()) {
            return ZERO;
        }
        if (scale(amount, poolPairData.decimalsOut).gte(poolPairData.balanceOut.toString()))
            return INFINITY;
    }
    if (swapType === exports.SwapTypes.SwapExactIn) {
        if (pool.poolType === exports.PoolTypes.Element) {
            // TODO this will just be part of below once maths available
            returnAmount = getOutputAmountSwap(pool, poolPairData, swapType, amount);
        }
        else if (pool.poolType in exports.PoolTypes) {
            // Will accept/return normalised values
            returnAmount = pool._exactTokenInForTokenOut(poolPairData, amount);
        }
        else {
            throw Error('Unsupported swap');
        }
    }
    else {
        if (pool.poolType === exports.PoolTypes.Element) {
            // TODO this will just be part of below once maths available
            returnAmount = getOutputAmountSwap(pool, poolPairData, swapType, amount);
        }
        else if (pool.poolType in exports.PoolTypes) {
            // Will accept/return normalised values
            returnAmount = pool._tokenInForExactTokenOut(poolPairData, amount);
        }
        else {
            throw Error('Unsupported swap');
        }
    }
    const amountIn = swapType === exports.SwapTypes.SwapExactIn ? amount : returnAmount;
    const amountOut = swapType === exports.SwapTypes.SwapExactIn ? returnAmount : amount;
    // Update balances of tokenIn and tokenOut
    pool.updateTokenBalanceForPool(tokenIn, balanceIn.add(bignumber.parseFixed(amountIn.dp(poolPairData.decimalsIn).toString(), poolPairData.decimalsIn)));
    pool.updateTokenBalanceForPool(tokenOut, balanceOut.sub(bignumber.parseFixed(amountOut.dp(poolPairData.decimalsOut).toString(), poolPairData.decimalsOut)));
    return returnAmount;
}
function takeToPrecision18(amount, decimals) {
    for (let i = 0; i < 18 - decimals; i++) {
        amount = amount.mul(10);
    }
    return amount;
}

const optimizeSwapAmounts = (paths, swapType, totalSwapAmount, initialSwapAmounts, highestLimitAmounts, inputDecimals, outputDecimals, initialNumPaths, maxPools, costReturnToken) => {
    // First get the optimal totalReturn to trade 'totalSwapAmount' with
    // one path only (b=1). Then increase the number of pools as long as
    // improvementCondition is true (see more information below)
    let bestTotalReturnConsideringFees = swapType === exports.SwapTypes.SwapExactIn ? INFINITY.times(-1) : INFINITY;
    let bestSwapAmounts = [];
    let bestPaths = [];
    let swapAmounts = initialSwapAmounts.map((amount) => bnum(bignumber.formatFixed(amount, inputDecimals)));
    for (let b = initialNumPaths; b <= paths.length; b++) {
        if (b != initialNumPaths) {
            // We already had a previous iteration and are adding another pool this new iteration
            // swapAmounts.push(ONE); // Initialize new swapAmount with 1 wei to
            // make sure that it won't be considered as a non viable amount (which would
            // be the case if it started at 0)
            // Start new path at 1/b of totalSwapAmount (i.e. if this is the 5th pool, we start with
            // 20% of the totalSwapAmount for this new swapAmount added). However, we need to make sure
            // that this value is not higher then the bth limit of the paths available otherwise there
            // won't be any possible path to process this swapAmount:
            const humanTotalSwapAmount = bignumber.formatFixed(totalSwapAmount, inputDecimals);
            const newSwapAmount = BigNumber.min.apply(null, [
                bnum(humanTotalSwapAmount).times(bnum(1 / b)),
                bignumber.formatFixed(highestLimitAmounts[b - 1], inputDecimals),
            ]);
            // We need then to multiply all current
            // swapAmounts by 1-newSwapAmount/totalSwapAmount.
            swapAmounts.forEach((swapAmount, i) => {
                swapAmounts[i] = swapAmount.times(ONE.minus(newSwapAmount.div(humanTotalSwapAmount)));
            });
            if (!newSwapAmount.isZero())
                swapAmounts.push(newSwapAmount);
        }
        const { paths: selectedPaths, swapAmounts: bestAmounts } = optimizePathDistribution(paths, swapType, totalSwapAmount, swapAmounts, inputDecimals, outputDecimals, costReturnToken);
        swapAmounts = bestAmounts;
        const totalReturn = calcTotalReturn(selectedPaths, swapType, swapAmounts, inputDecimals);
        // Calculates the number of pools in all the paths to include the gas costs
        const totalNumberOfPools = selectedPaths.reduce((acc, path) => acc + path.swaps.length, 0);
        // improvementCondition is true if we are improving the totalReturn
        // Notice that totalReturn has to be maximized for 'swapExactIn'
        // and MINIMIZED for 'swapExactOut'
        // This is because for the case of 'swapExactOut', totalReturn means the
        // amount of tokenIn needed to buy totalSwapAmount of tokenOut
        const costReturnTokenHuman = bignumber.formatFixed(costReturnToken, outputDecimals);
        let improvementCondition = false;
        let totalReturnConsideringFees = ZERO;
        const gasFees = bnum(totalNumberOfPools).times(costReturnTokenHuman);
        if (swapType === exports.SwapTypes.SwapExactIn) {
            totalReturnConsideringFees = totalReturn.minus(gasFees);
            improvementCondition = totalReturnConsideringFees.isGreaterThan(bestTotalReturnConsideringFees);
        }
        else {
            totalReturnConsideringFees = totalReturn.plus(gasFees);
            improvementCondition = totalReturnConsideringFees.isLessThan(bestTotalReturnConsideringFees);
        }
        // Stop if improvement has stopped
        if (!improvementCondition)
            break;
        bestSwapAmounts = [...swapAmounts]; // Copy to avoid linking variables
        bestPaths = [...selectedPaths];
        bestTotalReturnConsideringFees = totalReturnConsideringFees;
        // Stop if max number of pools has been reached
        if (totalNumberOfPools >= maxPools)
            break;
    }
    // 0 swap amounts can occur due to rounding errors but we don't want to pass those on so filter out
    bestPaths = bestPaths.filter((_, i) => !bestSwapAmounts[i].isZero());
    bestSwapAmounts = bestSwapAmounts.filter((swapAmount) => !swapAmount.isZero());
    return [bestPaths, bestSwapAmounts, bestTotalReturnConsideringFees];
};
/**
 * For a fixed number of possible paths, finds the optimal distribution of swap amounts to maximise output
 */
const optimizePathDistribution = (allPaths, swapType, totalSwapAmount, initialSwapAmounts, inputDecimals, outputDecimals, costReturnToken) => {
    let [selectedPaths, exceedingAmounts] = getBestPathIds(allPaths, swapType, initialSwapAmounts, inputDecimals, outputDecimals, costReturnToken);
    let swapAmounts = initialSwapAmounts;
    // Trivial case of only allowing a single path
    if (initialSwapAmounts.length === 1) {
        return {
            swapAmounts,
            paths: selectedPaths,
        };
    }
    const humanTotalSwapAmount = bnum(bignumber.formatFixed(totalSwapAmount, inputDecimals));
    // We store the next set of paths to consider separately so that can always retrieve the previous paths
    let newSelectedPaths = selectedPaths;
    // We now loop to iterateSwapAmounts until we converge.
    const historyOfSortedPathIds = [];
    let sortedPathIdsJSON = JSON.stringify(newSelectedPaths.map(({ id }) => id).sort());
    while (!historyOfSortedPathIds.includes(sortedPathIdsJSON)) {
        // Local minima can result in infinite loops
        // We then maintain a log of the sorted paths ids which we have already considered to prevent getting stuck
        historyOfSortedPathIds.push(sortedPathIdsJSON);
        selectedPaths = newSelectedPaths;
        [swapAmounts, exceedingAmounts] = iterateSwapAmounts(selectedPaths, swapType, humanTotalSwapAmount, swapAmounts, exceedingAmounts);
        [newSelectedPaths, exceedingAmounts] = getBestPathIds(allPaths, swapType, swapAmounts, inputDecimals, outputDecimals, costReturnToken);
        if (newSelectedPaths.length === 0)
            break;
        const pathIds = newSelectedPaths.map(({ id }) => id).sort();
        sortedPathIdsJSON = JSON.stringify(pathIds);
    }
    return {
        swapAmounts,
        paths: selectedPaths,
    };
};
const formatSwaps$1 = (bestPaths, swapType, totalSwapAmount, bestSwapAmounts) => {
    //// Prepare swap data from paths
    const swaps = [];
    let highestSwapAmt = bestSwapAmounts[0];
    let largestSwapPath = bestPaths[0];
    let bestTotalReturn = ZERO; // Reset totalReturn as this time it will be
    // calculated with the EVM maths so the return is exactly what the user will get
    // after executing the transaction (given there are no front-runners)
    bestPaths.forEach((path, i) => {
        const swapAmount = bestSwapAmounts[i];
        if (swapAmount.gt(highestSwapAmt)) {
            highestSwapAmt = swapAmount;
            largestSwapPath = path;
        }
        // // TODO: remove. To debug only!
        /*
        console.log(
            'Prices should be all very close (unless one of the paths is on the limit!'
        );
        console.log(
            getSpotPriceAfterSwapForPath(path, swapType, swapAmount).toNumber()
        );
        */
        const poolPairData = path.poolPairData;
        const pathSwaps = [];
        const amounts = [];
        let returnAmount;
        const n = poolPairData.length;
        amounts.push(swapAmount);
        if (swapType === exports.SwapTypes.SwapExactIn) {
            for (let i = 0; i < n; i++) {
                amounts.push(EVMgetOutputAmountSwap(path.pools[i], poolPairData[i], exports.SwapTypes.SwapExactIn, amounts[amounts.length - 1]));
                const swap = {
                    pool: path.swaps[i].pool,
                    tokenIn: path.swaps[i].tokenIn,
                    tokenOut: path.swaps[i].tokenOut,
                    swapAmount: amounts[i].toString(),
                    tokenInDecimals: path.poolPairData[i].decimalsIn,
                    tokenOutDecimals: path.poolPairData[i].decimalsOut,
                    returnAmount: amounts[amounts.length - 1].toString(),
                };
                pathSwaps.push(swap);
            }
            returnAmount = amounts[n];
        }
        else {
            for (let i = 0; i < n; i++) {
                amounts.unshift(EVMgetOutputAmountSwap(path.pools[n - 1 - i], poolPairData[n - 1 - i], exports.SwapTypes.SwapExactOut, amounts[0]));
                const swap = {
                    pool: path.swaps[n - 1 - i].pool,
                    tokenIn: path.swaps[n - 1 - i].tokenIn,
                    tokenOut: path.swaps[n - 1 - i].tokenOut,
                    swapAmount: amounts[1].toString(),
                    tokenInDecimals: path.poolPairData[n - 1 - i].decimalsIn,
                    tokenOutDecimals: path.poolPairData[n - 1 - i].decimalsOut,
                    returnAmount: amounts[0].toString(),
                };
                pathSwaps.unshift(swap);
            }
            returnAmount = amounts[0];
        }
        swaps.push(pathSwaps);
        bestTotalReturn = bestTotalReturn.plus(returnAmount);
    });
    // Since the individual swapAmounts for each path are integers, the sum of all swapAmounts
    // might not be exactly equal to the totalSwapAmount the user requested. We need to correct that rounding error
    // and we do that by adding the rounding error to the first path.
    if (swaps.length > 0) {
        const totalSwapAmountWithRoundingErrors = bestSwapAmounts.reduce((a, b) => a.plus(b), ZERO);
        const dust = totalSwapAmount.minus(totalSwapAmountWithRoundingErrors);
        if (swapType === exports.SwapTypes.SwapExactIn) {
            // As swap is ExactIn, add dust to input pool
            swaps[0][0].swapAmount = bnum(swaps[0][0].swapAmount)
                .plus(dust)
                .toString();
        }
        else {
            // As swap is ExactOut, add dust to output pool
            const firstPathLastPoolIndex = bestPaths[0].swaps.length - 1;
            swaps[0][firstPathLastPoolIndex].swapAmount = bnum(swaps[0][firstPathLastPoolIndex].swapAmount)
                .plus(dust)
                .toString();
        }
    }
    if (bestTotalReturn.eq(0))
        return [[], ZERO, ZERO];
    const marketSp = getSpotPriceAfterSwapForPath(largestSwapPath, swapType, ZERO);
    return [swaps, bestTotalReturn, marketSp];
};
//  For a given list of swapAmounts, gets list of pools with best effective price for these amounts
//  Always choose best pool for highest swapAmount first, then 2nd swapAmount and so on. This is
//  because it's best to use the best effective price for the highest amount to be traded
function getBestPathIds(originalPaths, swapType, swapAmounts, inputDecimals, outputDecimals, costReturnToken) {
    const selectedPaths = [];
    const selectedPathExceedingAmounts = [];
    const paths = cloneDeep(originalPaths); // Deep copy to avoid changing the original path data
    // Sort swapAmounts in descending order without changing original: https://stackoverflow.com/a/42442909
    const sortedSwapAmounts = [...swapAmounts].sort((a, b) => {
        return b.minus(a).toNumber();
    });
    sortedSwapAmounts.forEach((swapAmount) => {
        // Find path that has best effective price
        let bestPathIndex = -1;
        let bestEffectivePrice = INFINITY; // Start with worst price possible
        paths.forEach((path, i) => {
            // Do not consider this path if its limit is below swapAmount
            if (bnum(bignumber.formatFixed(path.limitAmount, inputDecimals)).gte(swapAmount)) {
                // Calculate effective price of this path for this swapAmount
                // If path.limitAmount = swapAmount we set effectivePrice as
                // Infinity because we know this path is maxed out and we want
                // to select other paths that can still be improved on
                let effectivePrice;
                if (bnum(bignumber.formatFixed(path.limitAmount, inputDecimals)).eq(swapAmount)) {
                    effectivePrice = INFINITY;
                }
                else {
                    // TODO for optimization: pass already calculated limitAmount as input
                    // to getEffectivePriceSwapForPath()
                    effectivePrice = getEffectivePriceSwapForPath(path, swapType, swapAmount, inputDecimals, outputDecimals, costReturnToken);
                }
                if (effectivePrice.lte(bestEffectivePrice)) {
                    bestEffectivePrice = effectivePrice;
                    bestPathIndex = i;
                }
            }
        });
        if (bestPathIndex === -1) {
            selectedPaths.push({
                id: '',
                swaps: [],
                poolPairData: [],
                limitAmount: bignumber.BigNumber.from('0'),
                pools: [],
            });
            selectedPathExceedingAmounts.push(ZERO);
            return;
        }
        else {
            selectedPaths.push(paths[bestPathIndex]);
            selectedPathExceedingAmounts.push(swapAmount.minus(bnum(bignumber.formatFixed(paths[bestPathIndex].limitAmount, inputDecimals))));
            paths.splice(bestPathIndex, 1); // Remove path from list
        }
    });
    return [selectedPaths, selectedPathExceedingAmounts];
}
// This functions finds the swapAmounts such that all the paths that have viable swapAmounts (i.e.
// that are not negative or equal to limitAmount) bring their respective prices after swap to the
// same price (which means that this is the optimal solution for the paths analyzed)
function iterateSwapAmounts(selectedPaths, swapType, totalSwapAmount, swapAmounts, exceedingAmounts) {
    let priceError = ONE; // Initialize priceError just so that while starts
    let prices = [];
    // // Since this is the beginning of an iteration with a new set of paths, we
    // // set any swapAmounts that were 0 previously to 1 wei or at the limit
    // // to limit minus 1 wei just so that they
    // // are considered as viable for iterateSwapAmountsApproximation(). If they were
    // // left at 0 iterateSwapAmountsApproximation() would consider them already outside
    // // the viable range and would not iterate on them. This is useful when
    // // iterateSwapAmountsApproximation() is being repeatedly called within the while loop
    // // below, but not when a new execution of iterateSwapAmounts() happens with new
    // // paths.
    // for (let i = 0; i < swapAmounts.length; ++i) {
    //     if (swapAmounts[i].isZero()) {
    //         // Very small amount: TODO put in config file
    //         const epsilon = totalSwapAmount.times(INFINITESIMAL);
    //         swapAmounts[i] = epsilon;
    //         exceedingAmounts[i] = exceedingAmounts[i].plus(epsilon);
    //     }
    //     if (exceedingAmounts[i].isZero()) {
    //         // Very small amount: TODO put in config file
    //         const epsilon = totalSwapAmount.times(INFINITESIMAL);
    //         swapAmounts[i] = swapAmounts[i].minus(epsilon); // Very small amount
    //         exceedingAmounts[i] = exceedingAmounts[i].minus(epsilon);
    //     }
    // }
    let iterationCount = 0;
    while (priceError.isGreaterThan(PRICE_ERROR_TOLERANCE)) {
        [prices, swapAmounts, exceedingAmounts] =
            iterateSwapAmountsApproximation(selectedPaths, swapType, totalSwapAmount, swapAmounts, exceedingAmounts, iterationCount);
        const maxPrice = BigNumber.max.apply(null, prices);
        const minPrice = BigNumber.min.apply(null, prices);
        priceError = maxPrice.minus(minPrice).div(minPrice);
        iterationCount++;
        if (iterationCount > 100)
            break;
    }
    return [swapAmounts, exceedingAmounts];
}
function iterateSwapAmountsApproximation(selectedPaths, swapType, totalSwapAmount, swapAmounts, exceedingAmounts, // This is the amount by which swapAmount exceeds the pool limit_amount
iterationCount) {
    let sumInverseDerivativeSPaSs = ZERO;
    let sumSPaSDividedByDerivativeSPaSs = ZERO;
    const SPaSs = [];
    const derivativeSPaSs = [];
    // We only iterate on the swapAmounts that are viable (i.e. no negative or > than path limit)
    // OR if this is the first time "iterateSwapAmountsApproximation" is called
    // within "iterateSwapAmounts()". In this case swapAmounts should be considered viable
    // also if they are on the limit.
    swapAmounts.forEach((swapAmount, i) => {
        // if (swapAmount.gt(ZERO) && exceedingAmounts[i].lt(ZERO)) {
        if ((iterationCount == 0 &&
            swapAmount.gte(ZERO) &&
            exceedingAmounts[i].lte(ZERO)) ||
            (iterationCount != 0 &&
                swapAmount.gt(ZERO) &&
                exceedingAmounts[i].lt(ZERO))) {
            const path = selectedPaths[i];
            const SPaS = getSpotPriceAfterSwapForPath(path, swapType, swapAmount);
            SPaSs.push(SPaS);
            const derivative_SPaS = getDerivativeSpotPriceAfterSwapForPath(path, swapType, swapAmount);
            derivativeSPaSs.push(derivative_SPaS);
            sumInverseDerivativeSPaSs = sumInverseDerivativeSPaSs.plus(ONE.div(derivative_SPaS));
            sumSPaSDividedByDerivativeSPaSs =
                sumSPaSDividedByDerivativeSPaSs.plus(SPaS.div(derivative_SPaS));
        }
        else {
            // This swapAmount is not viable but we push to keep list length consistent
            derivativeSPaSs.push(bnum('NaN'));
            SPaSs.push(bnum('NaN'));
        }
    });
    // // This division using BigNumber below lost precision. Its result was for example
    // 1.042818e-12 while using normal js math operations it was
    // 1.0428184989387553e-12. This loss of precision caused an important bug
    // let weighted_average_SPaS = sumSPaSDividedByDerivativeSPaSs.div(
    //     sumInverseDerivativeSPaSs
    // );
    const weighted_average_SPaS = bnum(sumSPaSDividedByDerivativeSPaSs.toNumber() /
        sumInverseDerivativeSPaSs.toNumber());
    swapAmounts.forEach((swapAmount, i) => {
        if ((iterationCount == 0 &&
            swapAmount.gte(ZERO) &&
            exceedingAmounts[i].lte(ZERO)) ||
            (iterationCount != 0 &&
                swapAmount.gt(ZERO) &&
                exceedingAmounts[i].lt(ZERO))) {
            const deltaSwapAmount = weighted_average_SPaS
                .minus(SPaSs[i])
                .div(derivativeSPaSs[i]);
            swapAmounts[i] = swapAmounts[i].plus(deltaSwapAmount);
            exceedingAmounts[i] = exceedingAmounts[i].plus(deltaSwapAmount);
        }
    });
    // Make sure no input amount is negative or above the path limit
    while (BigNumber.min.apply(null, swapAmounts).lt(ZERO) ||
        BigNumber.max.apply(null, exceedingAmounts).gt(ZERO)) {
        [swapAmounts, exceedingAmounts] = redistributeInputAmounts(swapAmounts, exceedingAmounts, derivativeSPaSs);
    }
    const pricesForViableAmounts = []; // Get prices for all non-negative AND below-limit input amounts
    let swapAmountsSumWithRoundingErrors = ZERO;
    swapAmounts.forEach((swapAmount, i) => {
        swapAmountsSumWithRoundingErrors =
            swapAmountsSumWithRoundingErrors.plus(swapAmount);
        if ((iterationCount == 0 &&
            swapAmount.gte(ZERO) &&
            exceedingAmounts[i].lte(ZERO)) ||
            (iterationCount != 0 &&
                swapAmount.gt(ZERO) &&
                exceedingAmounts[i].lt(ZERO)))
            pricesForViableAmounts.push(getSpotPriceAfterSwapForPath(selectedPaths[i], swapType, swapAmount));
    });
    const roundingError = totalSwapAmount.minus(swapAmountsSumWithRoundingErrors);
    // console.log("Rounding error")
    // console.log(roundingError.div(totalSwapAmount).toNumber())
    // // let errorLimit = totalSwapAmount.times(bnum(0.001))
    // // if(roundingError>errorLimit)
    // //     throw "Rounding error in iterateSwapAmountsApproximation() too large";
    // Add rounding error to make sum be exactly equal to totalSwapAmount to avoid error compounding
    // Add to the first swapAmount that is already not zero or at the limit
    // AND only if swapAmount would not leave the viable range (i.e. swapAmoung
    // would still be >0 and <limit) after adding the error
    // I.d. we need: (swapAmount+error)>0 AND (exceedingAmount+error)<0
    for (let i = 0; i < swapAmounts.length; ++i) {
        if (swapAmounts[i].gt(ZERO) && exceedingAmounts[i].lt(ZERO)) {
            if (swapAmounts[i].plus(roundingError).gt(ZERO) &&
                exceedingAmounts[i].plus(roundingError).lt(ZERO)) {
                swapAmounts[i] = swapAmounts[i].plus(roundingError);
                exceedingAmounts[i] = exceedingAmounts[i].plus(roundingError);
                break;
            }
        }
    }
    return [pricesForViableAmounts, swapAmounts, exceedingAmounts];
}
function redistributeInputAmounts(swapAmounts, exceedingAmounts, derivativeSPaSs) {
    let sumInverseDerivativeSPaSsForViableAmounts = ZERO;
    let sumInverseDerivativeSPaSsForNegativeAmounts = ZERO;
    let sumInverseDerivativeSPaSsForExceedingAmounts = ZERO;
    let sumNegativeOrExceedingSwapAmounts = ZERO;
    swapAmounts.forEach((swapAmount, i) => {
        // Amount is negative
        if (swapAmount.lte(ZERO)) {
            sumNegativeOrExceedingSwapAmounts =
                sumNegativeOrExceedingSwapAmounts.plus(swapAmount);
            sumInverseDerivativeSPaSsForNegativeAmounts =
                sumInverseDerivativeSPaSsForNegativeAmounts.plus(ONE.div(derivativeSPaSs[i]));
        }
        // Amount is above limit (exceeding > 0)
        else if (exceedingAmounts[i].gte(ZERO)) {
            sumNegativeOrExceedingSwapAmounts =
                sumNegativeOrExceedingSwapAmounts.plus(exceedingAmounts[i]);
            sumInverseDerivativeSPaSsForExceedingAmounts =
                sumInverseDerivativeSPaSsForExceedingAmounts.plus(ONE.div(derivativeSPaSs[i]));
        }
        // Sum the inverse of the derivative if the swapAmount is viable,
        // i.e. if swapAmount > 0 or swapAmount < limit
        else
            sumInverseDerivativeSPaSsForViableAmounts =
                sumInverseDerivativeSPaSsForViableAmounts.plus(ONE.div(derivativeSPaSs[i]));
    });
    // Now redestribute sumNegativeOrExceedingSwapAmounts
    // to non-exceeding pools if sumNegativeOrExceedingSwapAmounts > 0
    // or to non zero swapAmount pools if sumNegativeOrExceedingSwapAmounts < 0
    swapAmounts.forEach((swapAmount, i) => {
        if (swapAmount.lte(ZERO)) {
            swapAmounts[i] = ZERO;
            exceedingAmounts[i] = exceedingAmounts[i].minus(swapAmount);
        }
        else if (exceedingAmounts[i].gte(ZERO)) {
            swapAmounts[i] = swapAmounts[i].minus(exceedingAmounts[i]); // This is the same as swapAmounts[i] = pathLimitAmounts[i]
            exceedingAmounts[i] = ZERO;
        }
        else {
            const deltaSwapAmount = sumNegativeOrExceedingSwapAmounts
                .times(ONE.div(derivativeSPaSs[i]))
                .div(sumInverseDerivativeSPaSsForViableAmounts);
            swapAmounts[i] = swapAmounts[i].plus(deltaSwapAmount);
            exceedingAmounts[i] = exceedingAmounts[i].plus(deltaSwapAmount);
        }
    });
    // If there were no viable amounts (i.e all amounts were either negative or above limit)
    // We run this extra loop to redistribute the excess
    if (sumInverseDerivativeSPaSsForViableAmounts.isZero()) {
        if (sumNegativeOrExceedingSwapAmounts.lt(ZERO)) {
            // This means we need to redistribute to the exceeding amounts that
            // were now set to the limit
            swapAmounts.forEach((swapAmount, i) => {
                if (exceedingAmounts[i].isZero()) {
                    const deltaSwapAmount = sumNegativeOrExceedingSwapAmounts
                        .times(ONE.div(derivativeSPaSs[i]))
                        .div(sumInverseDerivativeSPaSsForExceedingAmounts);
                    swapAmounts[i] = swapAmounts[i].plus(deltaSwapAmount);
                    exceedingAmounts[i] =
                        exceedingAmounts[i].plus(deltaSwapAmount);
                }
            });
        }
        else {
            // This means we need to redistribute to the negative amounts that
            // were now set to zero
            swapAmounts.forEach((swapAmount, i) => {
                if (swapAmounts[i].isZero()) {
                    const deltaSwapAmount = sumNegativeOrExceedingSwapAmounts
                        .times(ONE.div(derivativeSPaSs[i]))
                        .div(sumInverseDerivativeSPaSsForNegativeAmounts);
                    swapAmounts[i] = swapAmounts[i].plus(deltaSwapAmount);
                    exceedingAmounts[i] =
                        exceedingAmounts[i].plus(deltaSwapAmount);
                }
            });
        }
    }
    return [swapAmounts, exceedingAmounts];
}
// TODO: calculate EVM return (use bmath) and update pool balances like current SOR
const calcTotalReturn = (paths, swapType, swapAmounts, inputDecimals) => {
    let totalReturn = new BigNumber(0);
    // changing the contents of pools (parameter passed as reference)
    paths.forEach((path, i) => {
        totalReturn = totalReturn.plus(getOutputAmountSwapForPath(path, swapType, swapAmounts[i], inputDecimals));
    });
    return totalReturn;
};

const getBestPaths = (paths, swapType, totalSwapAmount, inputDecimals, outputDecimals, maxPools, costReturnToken) => {
    // No paths available or totalSwapAmount == 0, return empty solution
    if (paths.length == 0 || totalSwapAmount.isZero()) {
        return [[], ZERO, ZERO, ZERO];
    }
    // Before we start the main loop, we first check if there is enough liquidity for this totalSwapAmount
    const highestLimitAmounts = getHighestLimitAmountsForPaths(paths, maxPools);
    const sumLimitAmounts = highestLimitAmounts.reduce((r, pathLimit) => {
        r.push(pathLimit.add(r[r.length - 1] || constants.Zero));
        return r;
    }, []);
    // If the cumulative limit across all paths is lower than totalSwapAmount then no solution is possible
    if (totalSwapAmount.gt(sumLimitAmounts[sumLimitAmounts.length - 1])) {
        return [[], ZERO, ZERO, ZERO]; // Not enough liquidity, return empty
    }
    // We use the highest limits to define the initial number of pools considered and the initial guess for swapAmounts.
    const initialNumPaths = sumLimitAmounts.findIndex((cumulativeLimit) => 
    // If below is true, it means we have enough liquidity
    totalSwapAmount.lte(cumulativeLimit)) + 1;
    const initialSwapAmounts = highestLimitAmounts.slice(0, initialNumPaths);
    //  Since the sum of the first i highest limits will be less than totalSwapAmount, we remove the difference to the last swapAmount
    //  so we are sure that the sum of swapAmounts will be equal to totalSwapAmount
    const difference = sumLimitAmounts[initialNumPaths - 1].sub(totalSwapAmount);
    initialSwapAmounts[initialSwapAmounts.length - 1] =
        initialSwapAmounts[initialSwapAmounts.length - 1].sub(difference);
    const [bestPaths, bestSwapAmounts, bestTotalReturnConsideringFees] = optimizeSwapAmounts(paths, swapType, totalSwapAmount, initialSwapAmounts, highestLimitAmounts, inputDecimals, outputDecimals, initialNumPaths, maxPools, costReturnToken);
    const [swaps, bestTotalReturn, marketSp] = formatSwaps$1(bestPaths, swapType, bnum(bignumber.formatFixed(totalSwapAmount, inputDecimals)), bestSwapAmounts);
    if (bestTotalReturn.eq(0))
        return [[], ZERO, ZERO, ZERO];
    return [swaps, bestTotalReturn, marketSp, bestTotalReturnConsideringFees];
};

var vaultAbi = [
	{
		inputs: [
			{
				internalType: "contract IAuthorizer",
				name: "authorizer",
				type: "address"
			},
			{
				internalType: "contract IWETH",
				name: "weth",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "pauseWindowDuration",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "bufferPeriodDuration",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "contract IAuthorizer",
				name: "newAuthorizer",
				type: "address"
			}
		],
		name: "AuthorizerChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "ExternalBalanceTransfer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "contract IFlashLoanRecipient",
				name: "recipient",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "feeAmount",
				type: "uint256"
			}
		],
		name: "FlashLoan",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "int256",
				name: "delta",
				type: "int256"
			}
		],
		name: "InternalBalanceChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bool",
				name: "paused",
				type: "bool"
			}
		],
		name: "PausedStateChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "address",
				name: "liquidityProvider",
				type: "address"
			},
			{
				indexed: false,
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				indexed: false,
				internalType: "int256[]",
				name: "deltas",
				type: "int256[]"
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "protocolFeeAmounts",
				type: "uint256[]"
			}
		],
		name: "PoolBalanceChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "address",
				name: "assetManager",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "int256",
				name: "cashDelta",
				type: "int256"
			},
			{
				indexed: false,
				internalType: "int256",
				name: "managedDelta",
				type: "int256"
			}
		],
		name: "PoolBalanceManaged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "address",
				name: "poolAddress",
				type: "address"
			},
			{
				indexed: false,
				internalType: "enum IVault.PoolSpecialization",
				name: "specialization",
				type: "uint8"
			}
		],
		name: "PoolRegistered",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "relayer",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "RelayerApprovalChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "tokenIn",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "tokenOut",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			}
		],
		name: "TokensDeregistered",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				indexed: false,
				internalType: "address[]",
				name: "assetManagers",
				type: "address[]"
			}
		],
		name: "TokensRegistered",
		type: "event"
	},
	{
		inputs: [
		],
		name: "WETH",
		outputs: [
			{
				internalType: "contract IWETH",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "enum IVault.SwapKind",
				name: "kind",
				type: "uint8"
			},
			{
				components: [
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "assetInIndex",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "assetOutIndex",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					}
				],
				internalType: "struct IVault.BatchSwapStep[]",
				name: "swaps",
				type: "tuple[]"
			},
			{
				internalType: "contract IAsset[]",
				name: "assets",
				type: "address[]"
			},
			{
				components: [
					{
						internalType: "address",
						name: "sender",
						type: "address"
					},
					{
						internalType: "bool",
						name: "fromInternalBalance",
						type: "bool"
					},
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "bool",
						name: "toInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.FundManagement",
				name: "funds",
				type: "tuple"
			},
			{
				internalType: "int256[]",
				name: "limits",
				type: "int256[]"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "batchSwap",
		outputs: [
			{
				internalType: "int256[]",
				name: "assetDeltas",
				type: "int256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			}
		],
		name: "deregisterTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address payable",
				name: "recipient",
				type: "address"
			},
			{
				components: [
					{
						internalType: "contract IAsset[]",
						name: "assets",
						type: "address[]"
					},
					{
						internalType: "uint256[]",
						name: "minAmountsOut",
						type: "uint256[]"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					},
					{
						internalType: "bool",
						name: "toInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.ExitPoolRequest",
				name: "request",
				type: "tuple"
			}
		],
		name: "exitPool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IFlashLoanRecipient",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "flashLoan",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "selector",
				type: "bytes4"
			}
		],
		name: "getActionId",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getAuthorizer",
		outputs: [
			{
				internalType: "contract IAuthorizer",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getDomainSeparator",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			}
		],
		name: "getInternalBalance",
		outputs: [
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			}
		],
		name: "getNextNonce",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getPausedState",
		outputs: [
			{
				internalType: "bool",
				name: "paused",
				type: "bool"
			},
			{
				internalType: "uint256",
				name: "pauseWindowEndTime",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "bufferPeriodEndTime",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			}
		],
		name: "getPool",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "enum IVault.PoolSpecialization",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			}
		],
		name: "getPoolTokenInfo",
		outputs: [
			{
				internalType: "uint256",
				name: "cash",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "managed",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastChangeBlock",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "assetManager",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			}
		],
		name: "getPoolTokens",
		outputs: [
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "lastChangeBlock",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getProtocolFeesCollector",
		outputs: [
			{
				internalType: "contract ProtocolFeesCollector",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				internalType: "address",
				name: "relayer",
				type: "address"
			}
		],
		name: "hasApprovedRelayer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				components: [
					{
						internalType: "contract IAsset[]",
						name: "assets",
						type: "address[]"
					},
					{
						internalType: "uint256[]",
						name: "maxAmountsIn",
						type: "uint256[]"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					},
					{
						internalType: "bool",
						name: "fromInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.JoinPoolRequest",
				name: "request",
				type: "tuple"
			}
		],
		name: "joinPool",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "enum IVault.PoolBalanceOpKind",
						name: "kind",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "contract IERC20",
						name: "token",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					}
				],
				internalType: "struct IVault.PoolBalanceOp[]",
				name: "ops",
				type: "tuple[]"
			}
		],
		name: "managePoolBalance",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "enum IVault.UserBalanceOpKind",
						name: "kind",
						type: "uint8"
					},
					{
						internalType: "contract IAsset",
						name: "asset",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "sender",
						type: "address"
					},
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					}
				],
				internalType: "struct IVault.UserBalanceOp[]",
				name: "ops",
				type: "tuple[]"
			}
		],
		name: "manageUserBalance",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "enum IVault.SwapKind",
				name: "kind",
				type: "uint8"
			},
			{
				components: [
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "assetInIndex",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "assetOutIndex",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					}
				],
				internalType: "struct IVault.BatchSwapStep[]",
				name: "swaps",
				type: "tuple[]"
			},
			{
				internalType: "contract IAsset[]",
				name: "assets",
				type: "address[]"
			},
			{
				components: [
					{
						internalType: "address",
						name: "sender",
						type: "address"
					},
					{
						internalType: "bool",
						name: "fromInternalBalance",
						type: "bool"
					},
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "bool",
						name: "toInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.FundManagement",
				name: "funds",
				type: "tuple"
			}
		],
		name: "queryBatchSwap",
		outputs: [
			{
				internalType: "int256[]",
				name: "",
				type: "int256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "enum IVault.PoolSpecialization",
				name: "specialization",
				type: "uint8"
			}
		],
		name: "registerPool",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				internalType: "address[]",
				name: "assetManagers",
				type: "address[]"
			}
		],
		name: "registerTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IAuthorizer",
				name: "newAuthorizer",
				type: "address"
			}
		],
		name: "setAuthorizer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "paused",
				type: "bool"
			}
		],
		name: "setPaused",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "relayer",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setRelayerApproval",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "enum IVault.SwapKind",
						name: "kind",
						type: "uint8"
					},
					{
						internalType: "contract IAsset",
						name: "assetIn",
						type: "address"
					},
					{
						internalType: "contract IAsset",
						name: "assetOut",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					}
				],
				internalType: "struct IVault.SingleSwap",
				name: "singleSwap",
				type: "tuple"
			},
			{
				components: [
					{
						internalType: "address",
						name: "sender",
						type: "address"
					},
					{
						internalType: "bool",
						name: "fromInternalBalance",
						type: "bool"
					},
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "bool",
						name: "toInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.FundManagement",
				name: "funds",
				type: "tuple"
			},
			{
				internalType: "uint256",
				name: "limit",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swap",
		outputs: [
			{
				internalType: "uint256",
				name: "amountCalculated",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		stateMutability: "payable",
		type: "receive"
	}
];

const EMPTY_SWAPINFO = {
    tokenAddresses: [],
    swaps: [],
    swapAmount: constants.Zero,
    swapAmountForSwaps: constants.Zero,
    tokenIn: '',
    tokenInForSwaps: '',
    tokenOut: '',
    tokenOutFromSwaps: '',
    returnAmount: constants.Zero,
    returnAmountConsideringFees: constants.Zero,
    returnAmountFromSwaps: constants.Zero,
    marketSp: constants.Zero.toString(),
};

const Lido = {
    Networks: [1, 42],
    stETH: {
        1: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        42: '0x4803bb90d18a1cb7a2187344fe4feb0e07878d05',
    },
    wstETH: {
        1: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
        42: '0xa387b91e393cfb9356a460370842bc8dbb2f29af',
    },
    WETH: {
        1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        42: '0xdfcea9088c8a88a76ff74892c1457c17dfeef9c1',
    },
    DAI: {
        1: '0x6b175474e89094c44da98b954eedeac495271d0f',
        42: '0x04df6e4121c27713ed22341e7c7df330f56f289b',
    },
    USDC: {
        1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        42: '0xc2569dd7d0fd715b054fbf16e75b001e5c0c1115',
    },
    USDT: {
        1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        42: '0xcc08220af469192c53295fdd34cfb8df29aa17ab',
    },
    StaticPools: {
        // DAI/USDC/USDT
        staBal: {
            1: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',
            42: '0x45f78862bd3aa5205e63141fa7f2d35f38eb87c30000000000000000000000fd',
        },
        // WETH/DAI (WETH/USDC on Kovan)
        wethDai: {
            1: '0x0b09dea16768f0799065c475be02919503cb2a3500020000000000000000001a',
            42: '0x3a19030ed746bd1c3f2b0f996ff9479af04c5f0a000200000000000000000004',
        },
        // WETH/wstETH Lido Pool
        wstEthWeth: {
            1: '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080',
            42: '0xe08590bde837eb9b2d42aa1196469d6e08fe96ec000200000000000000000101',
        },
    },
};
const Routes = {
    1: {},
    42: {},
};
// MAINNET STATIC ROUTES FOR LIDO <> Stable
// DAI/wstETH: DAI > WETH > wstETH
Routes[1][`${Lido.DAI[1]}${Lido.wstETH[1]}0`] = {
    name: 'DAI/wstETH-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
    ],
};
// wstETH/DAI: wstETH > WETH > DAI
Routes[1][`${Lido.wstETH[1]}${Lido.DAI[1]}0`] = {
    name: 'wstETH/DAI-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
    ],
};
// DAI/wstETH: DAI > WETH > wstETH
Routes[1][`${Lido.DAI[1]}${Lido.wstETH[1]}1`] = {
    name: 'DAI/wstETH-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/DAI: wstETH > WETH > DAI
Routes[1][`${Lido.wstETH[1]}${Lido.DAI[1]}1`] = {
    name: 'wstETH/DAI-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// USDC/wstETH: USDC > DAI > WETH > wstETH
Routes[1][`${Lido.USDC[1]}${Lido.wstETH[1]}0`] = {
    name: 'USDC/wstETH-SwapExactIn',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDC[1], Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[1][`${Lido.USDC[1]}${Lido.wstETH[1]}1`] = {
    name: 'USDC/wstETH-SwapExactOut',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDC[1], Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/USDC: wstETH > WETH > DAI > USDC
Routes[1][`${Lido.wstETH[1]}${Lido.USDC[1]}0`] = {
    name: 'wstETH/USDC-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1], Lido.USDC[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[1][`${Lido.wstETH[1]}${Lido.USDC[1]}1`] = {
    name: 'wstETH/USDC-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1], Lido.USDC[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// USDT/wstETH: USDT > DAI > WETH > wstETH
Routes[1][`${Lido.USDT[1]}${Lido.wstETH[1]}0`] = {
    name: 'USDT/wstETH-SwapExactIn',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDT[1], Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[1][`${Lido.USDT[1]}${Lido.wstETH[1]}1`] = {
    name: 'USDT/wstETH-SwapExactOut',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDT[1], Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/USDT: wstETH > WETH > DAI > USDT
Routes[1][`${Lido.wstETH[1]}${Lido.USDT[1]}0`] = {
    name: 'wstETH/USDT-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1], Lido.USDT[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[1][`${Lido.wstETH[1]}${Lido.USDT[1]}1`] = {
    name: 'wstETH/USDT-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1], Lido.USDT[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// KOVAN STATIC ROUTES FOR LIDO <> Stable
// USDC/wstETH: USDC > WETH > wstETH
Routes[42][`${Lido.USDC[42]}${Lido.wstETH[42]}0`] = {
    name: 'USDC/wstETH-SwapExactIn',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDC[42], Lido.WETH[42], Lido.wstETH[42]],
    swaps: [
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
    ],
};
// wstETH/USDC: wstETH > WETH > USDC
Routes[42][`${Lido.wstETH[42]}${Lido.USDC[42]}0`] = {
    name: 'wstETH/USDC-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[42], Lido.WETH[42], Lido.USDC[42]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
    ],
};
// USDC/wstETH: USDC > WETH > wstETH
Routes[42][`${Lido.USDC[42]}${Lido.wstETH[42]}1`] = {
    name: 'USDC/wstETH-SwapExactOut',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDC[42], Lido.WETH[42], Lido.wstETH[42]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/USDC: wstETH > WETH > USDC
Routes[42][`${Lido.wstETH[42]}${Lido.USDC[42]}1`] = {
    name: 'wstETH/USDC-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[42], Lido.WETH[42], Lido.USDC[42]],
    swaps: [
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// DAI/wstETH: DAI > USDC > WETH > wstETH
Routes[42][`${Lido.DAI[42]}${Lido.wstETH[42]}0`] = {
    name: 'DAI/wstETH-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.DAI[42],
        Lido.USDC[42],
        Lido.WETH[42],
        Lido.wstETH[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[42][`${Lido.DAI[42]}${Lido.wstETH[42]}1`] = {
    name: 'DAI/wstETH-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.DAI[42],
        Lido.USDC[42],
        Lido.WETH[42],
        Lido.wstETH[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/DAI: wstETH > WETH > USDC > DAI
Routes[42][`${Lido.wstETH[42]}${Lido.DAI[42]}0`] = {
    name: 'wstETH/DAI-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.wstETH[42],
        Lido.WETH[42],
        Lido.USDC[42],
        Lido.DAI[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[42][`${Lido.wstETH[42]}${Lido.DAI[42]}1`] = {
    name: 'wstETH/DAI-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.wstETH[42],
        Lido.WETH[42],
        Lido.USDC[42],
        Lido.DAI[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// USDT/wstETH: USDT > USDC > WETH > wstETH
Routes[42][`${Lido.USDT[42]}${Lido.wstETH[42]}0`] = {
    name: 'USDT/wstETH-SwapExactIn',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.USDT[42],
        Lido.USDC[42],
        Lido.WETH[42],
        Lido.wstETH[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[42][`${Lido.USDT[42]}${Lido.wstETH[42]}1`] = {
    name: 'USDT/wstETH-SwapExactOut',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.USDT[42],
        Lido.USDC[42],
        Lido.WETH[42],
        Lido.wstETH[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/USDT: wstETH > WETH > USDC > USDT
Routes[42][`${Lido.wstETH[42]}${Lido.USDT[42]}0`] = {
    name: 'wstETH/USDT-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [
        Lido.wstETH[42],
        Lido.WETH[42],
        Lido.USDC[42],
        Lido.USDT[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[42][`${Lido.wstETH[42]}${Lido.USDT[42]}1`] = {
    name: 'wstETH/USDT-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [
        Lido.wstETH[42],
        Lido.WETH[42],
        Lido.USDC[42],
        Lido.USDT[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// Only want static routes for Lido <> Stable
function isLidoStableSwap(chainId, tokenIn, tokenOut) {
    if (!Lido.Networks.includes(chainId))
        return false;
    tokenIn = tokenIn.toLowerCase();
    tokenOut = tokenOut.toLowerCase();
    if ((tokenIn === Lido.wstETH[chainId] && tokenOut === Lido.DAI[chainId]) ||
        (tokenIn === Lido.wstETH[chainId] && tokenOut === Lido.USDC[chainId]) ||
        (tokenIn === Lido.wstETH[chainId] && tokenOut === Lido.USDT[chainId]) ||
        (tokenIn === Lido.DAI[chainId] && tokenOut === Lido.wstETH[chainId]) ||
        (tokenIn === Lido.USDC[chainId] && tokenOut === Lido.wstETH[chainId]) ||
        (tokenIn === Lido.USDT[chainId] && tokenOut === Lido.wstETH[chainId]) ||
        (tokenIn === Lido.stETH[chainId] && tokenOut === Lido.DAI[chainId]) ||
        (tokenIn === Lido.stETH[chainId] && tokenOut === Lido.USDC[chainId]) ||
        (tokenIn === Lido.stETH[chainId] && tokenOut === Lido.USDT[chainId]) ||
        (tokenIn === Lido.DAI[chainId] && tokenOut === Lido.stETH[chainId]) ||
        (tokenIn === Lido.USDC[chainId] && tokenOut === Lido.stETH[chainId]) ||
        (tokenIn === Lido.USDT[chainId] && tokenOut === Lido.stETH[chainId]))
        return true;
    else
        return false;
}
// Uses Vault queryBatchSwap to get return amount for swap
function queryBatchSwap$1(swapType, swaps, assets, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const vaultAddr = '0xBA12222222228d8Ba445958a75a0704d566BF2C8';
        const vaultContract = new contracts.Contract(vaultAddr, vaultAbi, provider);
        const funds = {
            sender: constants.AddressZero,
            recipient: constants.AddressZero,
            fromInternalBalance: false,
            toInternalBalance: false,
        };
        try {
            const deltas = yield vaultContract.callStatic.queryBatchSwap(swapType, swaps, assets, funds);
            // negative amounts represent tokens (or ETH) sent by the Vault
            if (swapType === exports.SwapTypes.SwapExactIn)
                return deltas[assets.length - 1].mul(-1);
            else
                return deltas[0];
        }
        catch (err) {
            console.error(`SOR - Lido Static Route QueryBatchSwap Error. No swaps.`);
            return constants.Zero;
        }
    });
}
/*
Spot Price for path is product of each pools SP for relevant tokens.
(See helpersClass getSpotPriceAfterSwapForPath)
*/
function calculateMarketSp(swapType, swaps, assets, pools) {
    const spotPrices = [];
    for (let i = 0; i < swaps.length; i++) {
        const swap = swaps[i];
        // Find matching pool from list so we can use balances, etc
        const pool = pools.filter((p) => p.id === swap.poolId);
        if (pool.length !== 1)
            return bnum(0);
        // This will get a specific pool type so we can call parse and spot price functions
        const newPool = parseNewPool(pool[0]);
        if (!newPool)
            return bnum(0);
        // Parses relevant balances, etc
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const poolPairData = newPool.parsePoolPairData(assets[swap.assetInIndex], assets[swap.assetOutIndex]);
        // Calculate current spot price
        let spotPrice;
        if (swapType === exports.SwapTypes.SwapExactIn)
            spotPrice = newPool._spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, ZERO);
        // Amount = 0 to just get current SP
        else
            spotPrice = newPool._spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, ZERO); // Amount = 0 to just get current SP
        // console.log(`${swap.poolId} ${spotPrice.toString()}`);
        spotPrices.push(spotPrice);
    }
    // SP for Path is product of all
    return spotPrices.reduce((a, b) => a.times(b));
}
function getStEthRate(provider, chainId) {
    return __awaiter(this, void 0, void 0, function* () {
        // Call stEthPerToken or tokensPerStETH to get the scaling factors in each direction.
        const wstETHContract = new contracts.Contract(Lido.wstETH[chainId], ['function tokensPerStEth() external view returns (uint256)'], provider);
        const rate = yield wstETHContract.tokensPerStEth();
        return rate;
    });
}
/*
Used when SOR doesn't support paths with more than one hop.
Enables swapping of stables <> wstETH via WETH/DAI pool which has good liquidity.
*/
function getLidoStaticSwaps(pools, chainId, tokenIn, tokenOut, swapType, swapAmount, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        // Check for stETH tokens and convert to use wstETH for routing
        let isWrappingIn, isWrappingOut = false;
        if (tokenIn === Lido.stETH[chainId]) {
            tokenIn = Lido.wstETH[chainId];
            isWrappingIn = true;
        }
        if (tokenOut === Lido.stETH[chainId]) {
            tokenOut = Lido.wstETH[chainId];
            isWrappingOut = true;
        }
        const swapInfo = cloneDeep(EMPTY_SWAPINFO);
        const staticRoute = Routes[chainId][`${tokenIn}${tokenOut}${swapType}`];
        if (!staticRoute)
            return swapInfo;
        swapInfo.tokenAddresses = staticRoute.tokenAddresses;
        swapInfo.swaps = staticRoute.swaps;
        swapInfo.swapAmount = swapAmount;
        // if (swapType === SwapTypes.SwapExactIn)
        //     swapInfo.swapAmount = scale(swapAmount, staticRoute.tokenInDecimals).dp(
        //         0
        //     );
        // else
        //     swapInfo.swapAmount = scale(
        //         swapAmount,
        //         staticRoute.tokenOutDecimals
        //     ).dp(0);
        swapInfo.swaps[0].amount = swapInfo.swapAmount.toString();
        if (isWrappingIn)
            swapInfo.tokenIn = Lido.stETH[chainId];
        else
            swapInfo.tokenIn = tokenIn;
        if (isWrappingOut)
            swapInfo.tokenOut = Lido.stETH[chainId];
        else
            swapInfo.tokenOut = tokenOut;
        // Calculate SP as product of all pool SP in path
        swapInfo.marketSp = calculateMarketSp(swapType, swapInfo.swaps, swapInfo.tokenAddresses, pools).toString();
        // Unlike main SOR here we haven't calculated the return amount for swaps so use query call on Vault to get value.
        swapInfo.returnAmount = yield queryBatchSwap$1(swapType, swapInfo.swaps, swapInfo.tokenAddresses, provider);
        if (swapInfo.returnAmount.isZero()) {
            return cloneDeep(EMPTY_SWAPINFO);
        }
        // Considering fees shouldn't matter as there won't be alternative options on V1
        swapInfo.returnAmountConsideringFees = swapInfo.returnAmount;
        return swapInfo;
    });
}

// The unbutton ERC-20 wrapper is a generic wrapper which wraps any rebasing token
// into a fixed balance version.
// https://github.com/buttonwood-protocol/button-wrappers/blob/main/contracts/UnbuttonToken.sol#L18
const TokensToUnbuttonWrapperMap = {
    Networks: [1],
    1: {
        // underlying => wrapper
        // AMPL => WAMPL
        '0xd46ba6d942050d489dbd938a2c909a5d5039a161': '0xedb171c18ce90b633db442f2a6f72874093b49ef',
        // aAMPL -> ubAAMPL
        '0x1e6bb68acec8fefbd87d192be09bb274170a0548': '0xF03387d8d0FF326ab586A58E0ab4121d106147DF',
    },
};
// Returns the current wrapper exchange rate,
// ie) number of wrapper tokens for 1e18 (ONE) underlying token
function getWrapperRate(provider, wrapperAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const ubWrapper = new contracts.Contract(wrapperAddress, [
            'function underlyingToWrapper(uint256 amount) external view returns (uint256)',
        ], provider);
        return ubWrapper.underlyingToWrapper(constants.WeiPerEther);
    });
}

var WrapTypes;
(function (WrapTypes) {
    WrapTypes[WrapTypes["None"] = 0] = "None";
    WrapTypes[WrapTypes["ETH"] = 1] = "ETH";
    WrapTypes[WrapTypes["stETH"] = 2] = "stETH";
    WrapTypes[WrapTypes["Unbutton"] = 3] = "Unbutton";
})(WrapTypes || (WrapTypes = {}));
function getWrappedInfo(provider, swapType, tokenIn, tokenOut, config, swapAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        // The Subgraph returns tokens in lower case format so we must match this
        tokenIn = tokenIn.toLowerCase();
        tokenOut = tokenOut.toLowerCase();
        let swapAmountForSwaps = swapAmount;
        let tokenInForSwaps = tokenIn;
        let tokenInWrapType = WrapTypes.None;
        let tokenOutForSwaps = tokenOut;
        let tokenOutWrapType = WrapTypes.None;
        let tokenInRate = constants.WeiPerEther;
        let tokenOutRate = constants.WeiPerEther;
        //--------------------------------------------------------------------------
        // ETH/WETH
        // Handle ETH wrapping
        if (tokenIn === constants.AddressZero) {
            tokenInForSwaps = config.weth.toLowerCase();
            tokenInWrapType = WrapTypes.ETH;
        }
        // Handle WETH unwrapping
        if (tokenOut === constants.AddressZero) {
            tokenOutForSwaps = config.weth.toLowerCase();
            tokenOutWrapType = WrapTypes.ETH;
        }
        //--------------------------------------------------------------------------
        // stETH/wstETH
        // Handle stETH wrapping
        if (tokenIn === Lido.stETH[config.chainId]) {
            tokenInForSwaps = Lido.wstETH[config.chainId];
            tokenInWrapType = WrapTypes.stETH;
            const rate = yield getStEthRate(provider, config.chainId);
            tokenInRate = rate;
            if (swapType === exports.SwapTypes.SwapExactIn)
                swapAmountForSwaps = swapAmount.mul(rate).div(constants.WeiPerEther);
        }
        // Handle wstETH unwrapping
        if (tokenOut === Lido.stETH[config.chainId]) {
            tokenOutForSwaps = Lido.wstETH[config.chainId];
            tokenOutWrapType = WrapTypes.stETH;
            const rate = yield getStEthRate(provider, config.chainId);
            tokenOutRate = rate;
            if (swapType === exports.SwapTypes.SwapExactOut)
                swapAmountForSwaps = swapAmount.mul(rate).div(constants.WeiPerEther);
        }
        //--------------------------------------------------------------------------
        // ubTokens
        // Gets a list of all the tokens and their unbutton wrappers
        const tokensToUBWrapperMap = TokensToUnbuttonWrapperMap[config.chainId] || {};
        // Handle token unbutton wrapping
        if (tokensToUBWrapperMap[tokenIn]) {
            tokenInForSwaps = tokensToUBWrapperMap[tokenIn];
            tokenInWrapType = WrapTypes.Unbutton;
            tokenInRate = yield getWrapperRate(provider, tokenInForSwaps);
            if (swapType === exports.SwapTypes.SwapExactIn)
                swapAmountForSwaps = swapAmount.mul(tokenInRate).div(constants.WeiPerEther);
        }
        // Handle unbutton token unwrapping
        if (tokensToUBWrapperMap[tokenOut]) {
            tokenOutForSwaps = tokensToUBWrapperMap[tokenOut];
            tokenOutWrapType = WrapTypes.Unbutton;
            tokenOutRate = yield getWrapperRate(provider, tokenOutForSwaps);
            if (swapType === exports.SwapTypes.SwapExactOut)
                swapAmountForSwaps = swapAmount.mul(tokenOutRate).div(constants.WeiPerEther);
        }
        //--------------------------------------------------------------------------
        return {
            swapAmountOriginal: swapAmount,
            swapAmountForSwaps: swapAmountForSwaps,
            tokenIn: {
                addressOriginal: tokenIn,
                addressForSwaps: tokenInForSwaps,
                wrapType: tokenInWrapType,
                rate: tokenInRate,
            },
            tokenOut: {
                addressOriginal: tokenOut,
                addressForSwaps: tokenOutForSwaps,
                wrapType: tokenOutWrapType,
                rate: tokenOutRate,
            },
        };
    });
}
function setWrappedInfo(swapInfo, swapType, wrappedInfo, config) {
    if (swapInfo.swaps.length === 0)
        return swapInfo;
    swapInfo.tokenIn = wrappedInfo.tokenIn.addressOriginal;
    swapInfo.tokenOut = wrappedInfo.tokenOut.addressOriginal;
    swapInfo.swapAmountForSwaps = swapInfo.swapAmount;
    swapInfo.returnAmountFromSwaps = swapInfo.returnAmount;
    swapInfo.tokenInForSwaps = wrappedInfo.tokenIn.addressForSwaps;
    swapInfo.tokenOutFromSwaps = wrappedInfo.tokenOut.addressForSwaps;
    // No wrapping required
    if (wrappedInfo.tokenIn.wrapType === WrapTypes.None &&
        wrappedInfo.tokenOut.wrapType === WrapTypes.None) {
        return swapInfo;
    }
    //--------------------------------------------------------------------------
    // Wrappers which are 1:1 (ETH/WETH), ie UnscaledWrappers
    // Replace weth with ZERO/ETH in assets for Vault to handle ETH directly
    if (wrappedInfo.tokenIn.wrapType === WrapTypes.ETH ||
        wrappedInfo.tokenOut.wrapType === WrapTypes.ETH) {
        swapInfo.tokenAddresses = swapInfo.tokenAddresses.map((addr) => isSameAddress(addr, config.weth) ? constants.AddressZero : addr);
    }
    //--------------------------------------------------------------------------
    // Wrappers which are NOT 1:1 (stETH/wstETH, AMPL/WAMPL, all ubTokens etc)
    // ie ScaledWrappers
    const isScaledWrapper = (wrapType) => wrapType === WrapTypes.stETH || wrapType === WrapTypes.Unbutton;
    // Scaling required for wrappers which don't scale 1:1 with the underlying token
    // swap amount and return amounts are scaled if swap type is SwapExact
    // Handle swap amount scaling
    if ((isScaledWrapper(wrappedInfo.tokenIn.wrapType) &&
        swapType === exports.SwapTypes.SwapExactIn) ||
        (isScaledWrapper(wrappedInfo.tokenOut.wrapType) &&
            swapType === exports.SwapTypes.SwapExactOut)) {
        swapInfo.swapAmount = wrappedInfo.swapAmountOriginal;
        swapInfo.swapAmountForSwaps = wrappedInfo.swapAmountForSwaps;
    }
    // Handle return amount scaling
    // SwapExactIn, unwrapped out, returnAmount is unwrapped amount out, returnAmountForSwaps is wrapped amount out
    if (swapType === exports.SwapTypes.SwapExactIn &&
        isScaledWrapper(wrappedInfo.tokenOut.wrapType)) {
        swapInfo.returnAmount = swapInfo.returnAmount
            .mul(constants.WeiPerEther)
            .div(wrappedInfo.tokenOut.rate);
        swapInfo.returnAmountConsideringFees =
            swapInfo.returnAmountConsideringFees
                .mul(constants.WeiPerEther)
                .div(wrappedInfo.tokenOut.rate);
    }
    // SwapExactOut, unwrapped in, returnAmount us unwrapped amount in, returnAmountForSwaps is wrapped amount in
    if (swapType === exports.SwapTypes.SwapExactOut &&
        isScaledWrapper(wrappedInfo.tokenIn.wrapType)) {
        swapInfo.returnAmount = swapInfo.returnAmount
            .mul(constants.WeiPerEther)
            .div(wrappedInfo.tokenIn.rate);
        swapInfo.returnAmountConsideringFees =
            swapInfo.returnAmountConsideringFees
                .mul(constants.WeiPerEther)
                .div(wrappedInfo.tokenIn.rate);
    }
    return swapInfo;
}

/**
 * @returns an array of deduplicated token addresses used in the provided swaps
 */
const getTokenAddresses = (swaps) => {
    const tokenAddressesSet = new Set(swaps.flatMap((sequence) => sequence.flatMap((swap) => [
        swap.tokenIn,
        swap.tokenOut,
    ])));
    return [...tokenAddressesSet];
};
/**
 * @returns an array of deduplicated token addresses used in the provided swaps
 */
const getTokenAddressesForSwap = (swaps) => {
    const tokenAddressesSet = new Set(swaps.flatMap((swap) => [swap.tokenIn, swap.tokenOut]));
    return [...tokenAddressesSet];
};
/**
 * @dev Assumes that intermediate swaps have been properly formatted using the zero sentinel value
 * @returns the total amount of tokens used in the described batchSwap
 */
const getTotalSwapAmount = (swaps) => {
    return swaps.reduce((acc, { amount }) => acc.add(amount), constants.Zero);
};
/**
 * Formats a sequence of swaps to the format expected by the Balance Vault.
 * @dev Intermediate swaps' amounts are replaced with the sentinel value of zero
 *      and exact output sequences are reversed.
 * @param swapKind - a SwapTypes enum for whether the swap has an exact input or exact output
 * @param sequence - a sequence of swaps which form a path from the input token to the output token
 * @param tokenAddresses - an array of all the token address which are involved in the batchSwap
 * @returns
 */
const formatSequence = (swapKind, sequence, tokenAddresses) => {
    if (swapKind === exports.SwapTypes.SwapExactOut) {
        // GIVEN_OUT sequences must be passed to the vault in reverse order.
        // After reversing the sequence we can treat them almost equivalently to GIVEN_IN sequences
        sequence = sequence.reverse();
    }
    return sequence.map((swap, i) => {
        var _a;
        // Multihop swaps can be executed by passing an `amountIn` value of zero for a swap. This will cause the amount out
        // of the previous swap to be used as the amount in of the current one. In such a scenario, `tokenIn` must equal the
        // previous swap's `tokenOut`.
        let amountScaled = '0';
        // First swap needs to be given a value so we inject this from SOR solution
        if (i === 0) {
            // If it's a GIVEN_IN swap then swapAmount is in terms of tokenIn
            // and vice versa for GIVEN_OUT
            const scalingFactor = swapKind === exports.SwapTypes.SwapExactIn
                ? swap.tokenInDecimals
                : swap.tokenOutDecimals;
            amountScaled = scale(bnum(swap.swapAmount), scalingFactor)
                .decimalPlaces(0, 1)
                .toString();
        }
        const scalingFactorReturn = swapKind === exports.SwapTypes.SwapExactIn
            ? swap.tokenOutDecimals
            : swap.tokenInDecimals;
        const returnScaled = scale(bnum((_a = swap.returnAmount) !== null && _a !== void 0 ? _a : '0'), scalingFactorReturn)
            .decimalPlaces(0, 1)
            .toString();
        const assetInIndex = tokenAddresses.indexOf(swap.tokenIn);
        const assetOutIndex = tokenAddresses.indexOf(swap.tokenOut);
        return {
            poolId: swap.pool,
            assetInIndex,
            assetOutIndex,
            amount: amountScaled,
            userData: '0x',
            returnAmount: returnScaled,
        };
    });
};
function formatSwaps(swapsOriginal, swapType, swapAmount, tokenIn, tokenOut, returnAmount, returnAmountConsideringFees, marketSp) {
    if (swapsOriginal.length === 0) {
        return cloneDeep(EMPTY_SWAPINFO);
    }
    const swapsClone = cloneDeep(swapsOriginal);
    const tokenAddresses = getTokenAddresses(swapsClone);
    const swaps = swapsClone.flatMap((sequence) => formatSequence(swapType, sequence, tokenAddresses));
    // We need to account for any rounding losses by adding dust to first path
    const dust = swapAmount.sub(getTotalSwapAmount(swaps));
    if (dust.gt(0)) {
        swaps[0].amount = bignumber.BigNumber.from(swaps[0].amount).add(dust).toString();
    }
    const swapInfo = {
        swapAmount,
        swapAmountForSwaps: swapAmount,
        returnAmount,
        returnAmountFromSwaps: returnAmount,
        returnAmountConsideringFees,
        swaps,
        tokenAddresses,
        tokenIn,
        tokenOut,
        marketSp,
    };
    return swapInfo;
}

class PoolCacher {
    constructor(poolDataService) {
        this.poolDataService = poolDataService;
        this.pools = [];
        this._finishedFetching = false;
    }
    get finishedFetching() {
        return this._finishedFetching;
    }
    getPools(useBpts) {
        const pools = cloneDeep(this.pools);
        // If we use join/exit paths add the pool token to its token list
        if (useBpts) {
            for (const pool of pools) {
                if (pool.poolType === 'Weighted' ||
                    pool.poolType === 'Investment') {
                    const BptAsToken = {
                        address: pool.address,
                        balance: pool.totalShares,
                        decimals: 18,
                        priceRate: '1',
                        weight: '0',
                    };
                    pool.tokens.push(BptAsToken);
                    pool.tokensList.push(pool.address);
                }
            }
        }
        return pools;
    }
    /*
     * Saves updated pools data to internal cache.
     */
    fetchPools() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.pools = yield this.poolDataService.getPools();
                this._finishedFetching = true;
                return true;
            }
            catch (err) {
                // On error clear all caches and return false so user knows to try again.
                this._finishedFetching = false;
                this.pools = [];
                console.error(`Error: fetchPools(): ${err}`);
                return false;
            }
        });
    }
}

const BOOSTED_PATHS_MAX_LENGTH = 7;
const filterPoolsByType = (pools, poolTypeFilter) => {
    if (poolTypeFilter === exports.PoolFilter.All)
        return pools;
    return pools.filter((p) => p.poolType === poolTypeFilter);
};
/*
The purpose of this function is to build dictionaries of direct pools
and plausible hop pools.
*/
function filterPoolsOfInterest(allPools, tokenIn, tokenOut, maxPools) {
    const directPools = {};
    const hopsIn = {};
    const hopsOut = {};
    Object.keys(allPools).forEach((id) => {
        const pool = allPools[id];
        const tokenListSet = new Set(pool.tokensList);
        const containsTokenIn = tokenListSet.has(tokenIn.toLowerCase());
        const containsTokenOut = tokenListSet.has(tokenOut.toLowerCase());
        // This is a direct pool as has both tokenIn and tokenOut
        if (containsTokenIn && containsTokenOut) {
            directPools[pool.id] = pool;
            return;
        }
        if (maxPools > 1) {
            if (containsTokenIn && !containsTokenOut) {
                for (const hopToken of tokenListSet) {
                    if (!hopsIn[hopToken])
                        hopsIn[hopToken] = new Set([]);
                    hopsIn[hopToken].add(pool.id);
                }
            }
            else if (!containsTokenIn && containsTokenOut) {
                for (const hopToken of [...tokenListSet]) {
                    if (!hopsOut[hopToken])
                        hopsOut[hopToken] = new Set([]);
                    hopsOut[hopToken].add(pool.id);
                }
            }
        }
    });
    return [directPools, hopsIn, hopsOut];
}
function producePaths(tokenIn, tokenOut, directPools, hopsIn, hopsOut, pools) {
    const paths = [];
    // Create direct paths
    for (const id in directPools) {
        const path = createPath([tokenIn, tokenOut], [pools[id]]);
        paths.push(path);
    }
    for (const hopToken in hopsIn) {
        if (hopsOut[hopToken]) {
            let highestNormalizedLiquidityFirst = ZERO; // Aux variable to find pool with most liquidity for pair (tokenIn -> hopToken)
            let highestNormalizedLiquidityFirstPoolId; // Aux variable to find pool with most liquidity for pair (tokenIn -> hopToken)
            let highestNormalizedLiquiditySecond = ZERO; // Aux variable to find pool with most liquidity for pair (hopToken -> tokenOut)
            let highestNormalizedLiquiditySecondPoolId; // Aux variable to find pool with most liquidity for pair (hopToken -> tokenOut)
            for (const poolInId of [...hopsIn[hopToken]]) {
                const poolIn = pools[poolInId];
                const poolPairData = poolIn.parsePoolPairData(tokenIn, hopToken);
                const normalizedLiquidity = poolIn.getNormalizedLiquidity(poolPairData);
                // Cannot be strictly greater otherwise highestNormalizedLiquidityPoolId = 0 if hopTokens[i] balance is 0 in this pool.
                if (normalizedLiquidity.isGreaterThanOrEqualTo(highestNormalizedLiquidityFirst)) {
                    highestNormalizedLiquidityFirst = normalizedLiquidity;
                    highestNormalizedLiquidityFirstPoolId = poolIn.id;
                }
            }
            for (const poolOutId of [...hopsOut[hopToken]]) {
                const poolOut = pools[poolOutId];
                const poolPairData = poolOut.parsePoolPairData(hopToken, tokenOut);
                const normalizedLiquidity = poolOut.getNormalizedLiquidity(poolPairData);
                // Cannot be strictly greater otherwise highestNormalizedLiquidityPoolId = 0 if hopTokens[i] balance is 0 in this pool.
                if (normalizedLiquidity.isGreaterThanOrEqualTo(highestNormalizedLiquiditySecond)) {
                    highestNormalizedLiquiditySecond = normalizedLiquidity;
                    highestNormalizedLiquiditySecondPoolId = poolOut.id;
                }
            }
            if (highestNormalizedLiquidityFirstPoolId &&
                highestNormalizedLiquiditySecondPoolId) {
                const path = createPath([tokenIn, hopToken, tokenOut], [
                    pools[highestNormalizedLiquidityFirstPoolId],
                    pools[highestNormalizedLiquiditySecondPoolId],
                ]);
                paths.push(path);
            }
        }
    }
    return paths;
}
// We build a directed graph for the boosted pools.
// Nodes are tokens and edges are triads: [pool.id, tokenIn, tokenOut].
// The current criterion for including a pool into this graph is the following:
// (a) We include every linear pool.
// (b) Among phantom pools, we include those that contain the pool token of a linear pool.
// (c) Among every pool, we include those that contain the pool token of
// a pool from the previous step.
// (d) We include connections of tokenIn and tokenOut to WETH (only highest liquidity for each).
// (e) When tokenIn or tokenOut are tokens offered at an LBP, we also include
// the LBPs and the corresponding highest liquidity connections of the raising tokens with WETH.
// (f) We include the pool weth/wsteth
//
// To build the paths using boosted pools we use the following algorithm.
// Given a tokenIn and a tokenOut belonging to the graph, we want to find
// all the connecting paths inside the graph, with the properties:
// (a) They do not visit the same token twice
// (b) They do not use the same pool twice in a row (since this
// would never be optimal).
// These paths can be organized as a directed tree having tokenIn as a root.
// We build this tree by adding at each step all the possible continuations for
// each branch. When a branch reaches tokenOut, we write down the corresponding path.
// We only allow paths up to length BOOSTED_PATHS_MAX_LENGTH = 7
function getBoostedGraph(tokenIn, tokenOut, poolsAllDict, config) {
    const wethAddress = config.weth.toLowerCase();
    const graphPoolsSet = new Set();
    const linearPools = [];
    const phantomPools = [];
    // Here we add all linear pools, take note of phantom pools,
    // add LBP pools with tokenIn or tokenOut and their corresponding
    // highest liquidity WETH connections
    for (const id in poolsAllDict) {
        const pool = poolsAllDict[id];
        if (pool.poolType == exports.PoolTypes.Linear) {
            linearPools.push(pool);
            graphPoolsSet.add(pool);
        }
        else {
            // Here we asssume that phantom pools are exactly those that
            // are not linear and have their pool token in their tokensList.
            const tokensList = pool.tokensList.map((address) => address.toLowerCase());
            if (tokensList.includes(pool.address)) {
                phantomPools.push(pool);
            }
            if (config.lbpRaisingTokens) {
                const raisingTokens = config.lbpRaisingTokens.map((address) => address.toLowerCase());
                if (pool.isLBP) {
                    const raisingTokenIn = getRaisingToken(pool, raisingTokens, tokenIn);
                    if (raisingTokenIn) {
                        graphPoolsSet.add(pool);
                        if (raisingTokenIn !== wethAddress) {
                            const bestRaisingTokenInToWeth = getHighestLiquidityPool(raisingTokenIn, wethAddress, poolsAllDict);
                            if (bestRaisingTokenInToWeth) {
                                graphPoolsSet.add(poolsAllDict[bestRaisingTokenInToWeth]);
                            }
                        }
                    }
                    const raisingTokenOut = getRaisingToken(pool, raisingTokens, tokenOut);
                    if (raisingTokenOut) {
                        graphPoolsSet.add(pool);
                        if (raisingTokenOut !== wethAddress) {
                            const bestWethToRaisingTokenOut = getHighestLiquidityPool(wethAddress, raisingTokenOut, poolsAllDict);
                            if (bestWethToRaisingTokenOut) {
                                graphPoolsSet.add(poolsAllDict[bestWethToRaisingTokenOut]);
                            }
                        }
                    }
                }
            }
        }
    }
    // add highest liquidity pools with tokenIn and weth or tokenOut and weth
    const bestTokenInToWeth = getHighestLiquidityPool(tokenIn, wethAddress, poolsAllDict);
    if (bestTokenInToWeth) {
        graphPoolsSet.add(poolsAllDict[bestTokenInToWeth]);
    }
    const bestWethToTokenOut = getHighestLiquidityPool(wethAddress, tokenOut, poolsAllDict);
    if (bestWethToTokenOut) {
        graphPoolsSet.add(poolsAllDict[bestWethToTokenOut]);
    }
    if (linearPools.length == 0)
        return {};
    const linearPoolsAddresses = linearPools.map((pool) => pool.address);
    const secondStepPoolsSet = new Set();
    for (const pool of phantomPools) {
        for (const linearPoolAddress of linearPoolsAddresses) {
            if (pool.tokensList.includes(linearPoolAddress)) {
                graphPoolsSet.add(pool);
                secondStepPoolsSet.add(pool);
            }
        }
    }
    const secondStepPoolsAddresses = [...secondStepPoolsSet].map((pool) => pool.address);
    // Here we include every pool that has a pool token from the previous step
    for (const id in poolsAllDict) {
        const pool = poolsAllDict[id];
        for (const secondStepPoolAddress of secondStepPoolsAddresses) {
            if (pool.tokensList.includes(secondStepPoolAddress)) {
                graphPoolsSet.add(pool);
            }
        }
    }
    // add pool weth/wsteth when it exists
    if (config.wETHwstETH && poolsAllDict[config.wETHwstETH.id]) {
        graphPoolsSet.add(poolsAllDict[config.wETHwstETH.id]);
    }
    const graphPools = [...graphPoolsSet];
    const edgeDict = getNodesAndEdges(graphPools);
    return edgeDict;
}
function getNodesAndEdges(pools) {
    const edgesFromNode = {};
    for (const pool of pools) {
        const n = pool.tokensList.length;
        for (let i = 0; i < n; i++) {
            if (!edgesFromNode[pool.tokensList[i]])
                edgesFromNode[pool.tokensList[i]] = [];
            for (let j = 0; j < n; j++) {
                if (i == j)
                    continue;
                const edge = [
                    pool.id,
                    pool.tokensList[i],
                    pool.tokensList[j],
                ];
                edgesFromNode[pool.tokensList[i]].push(edge);
            }
        }
    }
    return edgesFromNode;
}
function getBoostedPaths(tokenIn, tokenOut, poolsAllDict, config) {
    const edgesFromNode = getBoostedGraph(tokenIn, tokenOut, poolsAllDict, config);
    const pathsInfo = [];
    const rootTreeEdge = {
        edge: ['', '', tokenIn],
        parentIndices: [-1, -1],
        visitedNodes: [],
    };
    const treeEdges = [[rootTreeEdge]];
    let iterate = true;
    while (iterate) {
        const n = treeEdges.length; // number of tree edge layers so far
        const newTreeEdges = [];
        // adds every possible treeEdge for each treeEdge of the previous layer
        for (let i = 0; i < treeEdges[n - 1].length; i++) {
            const treeEdge = treeEdges[n - 1][i];
            const token = treeEdge.edge[2];
            const edgesFromToken = edgesFromNode[token];
            if (!edgesFromToken)
                continue;
            for (const edge of edgesFromToken) {
                // skip if the node was already visited or
                // if the pool is the one from the previous edge
                if (treeEdge.visitedNodes.includes(edge[2]) ||
                    treeEdge.edge[0] == edge[0]) {
                    continue;
                }
                if (edge[2] == tokenOut) {
                    pathsInfo.push(getPathInfo(edge, treeEdge, treeEdges));
                }
                const newTreeEdge = {
                    edge: edge,
                    parentIndices: [n - 1, i],
                    visitedNodes: treeEdge.visitedNodes.concat(edge[1]),
                };
                newTreeEdges.push(newTreeEdge);
            }
        }
        if (newTreeEdges.length == 0) {
            iterate = false;
        }
        else
            treeEdges.push(newTreeEdges);
        if (n == BOOSTED_PATHS_MAX_LENGTH)
            iterate = false;
    }
    return pathsInfoToPaths(pathsInfo, poolsAllDict);
}
function getPathInfo(edge, treeEdge, treeEdges) {
    const pathEdges = [edge];
    pathEdges.unshift(treeEdge.edge);
    let indices = treeEdge.parentIndices;
    while (indices[0] !== -1) {
        pathEdges.unshift(treeEdges[indices[0]][indices[1]].edge);
        indices = treeEdges[indices[0]][indices[1]].parentIndices;
    }
    const pools = pathEdges.map((pathEdge) => pathEdge[0]);
    pools.splice(0, 1);
    const tokens = pathEdges.map((pathEdge) => pathEdge[2]);
    return [tokens, pools];
}
function pathsInfoToPaths(flexBoostedPathsInfo, poolsAllDict) {
    const paths = [];
    for (const boostedPathInfo of flexBoostedPathsInfo) {
        const pools = boostedPathInfo[1].map((id) => poolsAllDict[id]);
        // ignore paths of length 1 and 2
        if (pools.length > 2) {
            paths.push(createPath(boostedPathInfo[0], pools));
        }
    }
    return paths;
}
// Creates a path with pools.length hops
// i.e. tokens[0]>[Pool0]>tokens[1]>[Pool1]>tokens[2]>[Pool2]>tokens[3]
function createPath(tokens, pools) {
    let tI, tO;
    const swaps = [];
    const poolPairData = [];
    let id = '';
    for (let i = 0; i < pools.length; i++) {
        tI = tokens[i];
        tO = tokens[i + 1];
        const poolPair = pools[i].parsePoolPairData(tI, tO);
        poolPairData.push(poolPair);
        id = id + poolPair.id;
        const swap = {
            pool: pools[i].id,
            tokenIn: tI,
            tokenOut: tO,
            tokenInDecimals: poolPair.decimalsIn,
            tokenOutDecimals: poolPair.decimalsOut,
        };
        swaps.push(swap);
    }
    const path = {
        id,
        swaps,
        limitAmount: constants.Zero,
        poolPairData,
        pools,
    };
    return path;
}
function getHighestLiquidityPool(tokenIn, tokenOut, poolsOfInterest) {
    let highestNormalizedLiquidity = ZERO;
    let highestNormalizedLiquidityPoolId = null;
    for (const id in poolsOfInterest) {
        const pool = poolsOfInterest[id];
        const tokenListSet = new Set(pool.tokensList);
        // If pool doesn't have tokenIn or tokenOut then ignore
        if (!tokenListSet.has(tokenIn.toLowerCase()) ||
            !tokenListSet.has(tokenOut.toLowerCase()))
            continue;
        const poolPairData = pool.parsePoolPairData(tokenIn, tokenOut);
        const normalizedLiquidity = pool.getNormalizedLiquidity(poolPairData);
        // Cannot be strictly greater otherwise highestNormalizedLiquidityPoolId = 0 if hopTokens[i] balance is 0 in this pool.
        if (normalizedLiquidity.isGreaterThanOrEqualTo(highestNormalizedLiquidity)) {
            highestNormalizedLiquidity = normalizedLiquidity;
            highestNormalizedLiquidityPoolId = id;
        }
    }
    return highestNormalizedLiquidityPoolId;
}
// This function will only work correctly if the input is composable
// i.e. each path's token out = next path's token in
function composePaths(paths) {
    let id = '';
    let swaps = [];
    let poolPairData = [];
    let pools = [];
    for (const path of paths) {
        id += path.id;
        swaps = swaps.concat(path.swaps);
        poolPairData = poolPairData.concat(path.poolPairData);
        pools = pools.concat(path.pools);
    }
    const path = {
        id: id,
        swaps: swaps,
        poolPairData: poolPairData,
        limitAmount: constants.Zero,
        pools: pools,
    };
    return path;
}
/*
The staBAL3 pool (STABALADDR) is the main stable pool that holds DAI/USDC/USDT and has the staBAL3 BPT.
Metastable pools that contain a project token, i.e. TUSD, paired with staBAL3 BPT.
USDC connecting pool (USDCCONNECTINGPOOL) is a metastable pool containing USDC and staBAL3 BPT.
This setup should enable paths between the new project metastable pools and other liquidity. I.e. TUSD > BAL, which would look like:
TUSD>[TUSDstaBALPool]>staBAL3>[ConnectingPool]>USDC>[BalWeightedPool]>BAL
*/
function getPathsUsingStaBalPool(tokenIn, tokenOut, poolsAll, poolsFiltered, config) {
    var _a;
    // This will be the USDC/staBAL Connecting pool used in Polygon
    const usdcConnectingPoolInfo = config.usdcConnectingPool;
    if (!usdcConnectingPoolInfo)
        return [];
    const usdcConnectingPool = poolsAll[usdcConnectingPoolInfo.id];
    // staBal BPT token is the hop token between token and USDC connecting pool
    const hopTokenStaBal = (_a = config.staBal3Pool) === null || _a === void 0 ? void 0 : _a.address;
    if (!usdcConnectingPool || !hopTokenStaBal)
        return [];
    // Finds the best metastable Pool with tokenIn/staBal3Bpt or returns null if doesn't exist
    const metastablePoolIdIn = getHighestLiquidityPool(tokenIn, hopTokenStaBal, poolsFiltered);
    // Finds the best metastable Pool with tokenOut/staBal3Bpt or returns null if doesn't exist
    const metastablePoolIdOut = getHighestLiquidityPool(hopTokenStaBal, tokenOut, poolsFiltered);
    if (metastablePoolIdIn && !metastablePoolIdOut) {
        // First part of path is multihop through metaStablePool and USDC Connecting Pools
        // Last part of path is single hop through USDC/tokenOut highest liquidity pool
        // i.e. tokenIn>[metaStablePool]>staBAL>[usdcConnecting]>USDC>[HighLiqPool]>tokenOut
        const metaStablePoolIn = poolsFiltered[metastablePoolIdIn];
        // tokenIn > [metaStablePool] > staBal > [UsdcConnectingPool] > USDC
        const staBalPath = createPath([tokenIn, hopTokenStaBal, usdcConnectingPoolInfo.usdc], [metaStablePoolIn, usdcConnectingPool]);
        // Hop out as it is USDC > tokenOut
        const mostLiquidLastPool = getHighestLiquidityPool(usdcConnectingPoolInfo.usdc, tokenOut, poolsFiltered);
        // No USDC>tokenOut pool so return empty path
        if (mostLiquidLastPool === null)
            return [];
        const lastPool = poolsFiltered[mostLiquidLastPool];
        const pathEnd = createPath([usdcConnectingPoolInfo.usdc, tokenOut], [lastPool]);
        return [composePaths([staBalPath, pathEnd])];
    }
    if (!metastablePoolIdIn && metastablePoolIdOut) {
        // First part of path is single hop through tokenIn/USDC highest liquidity pool
        // Last part of path is multihop through USDC Connecting Pools and metaStablePool
        // i.e. i.e. tokenIn>[HighLiqPool]>USDC>[usdcConnecting]>staBAL>[metaStablePool]>tokenOut
        // Hop in as it is tokenIn > USDC
        const mostLiquidFirstPool = getHighestLiquidityPool(tokenIn, usdcConnectingPoolInfo.usdc, poolsFiltered);
        // No tokenIn>USDC pool so return empty path
        if (mostLiquidFirstPool === null)
            return [];
        const metaStablePoolIn = poolsFiltered[metastablePoolIdOut];
        const firstPool = poolsFiltered[mostLiquidFirstPool];
        // USDC > [UsdcConnectingPool] > staBal > [metaStablePool] > tokenOut
        const staBalPath = createPath([usdcConnectingPoolInfo.usdc, hopTokenStaBal, tokenOut], [usdcConnectingPool, metaStablePoolIn]);
        const pathStart = createPath([tokenIn, usdcConnectingPoolInfo.usdc], [firstPool]);
        return [composePaths([pathStart, staBalPath])];
    }
    // If we're here either the path doesn't use metastable pools (and so will not be routed through StaBAL)
    // or both input and output tokens are in metastable pools and so should be handled by existing multihop algorithm
    // (because it is tokenIn>[metaStablePoolIn]>staBal>[metaStablePoolOut]>tokenOut)
    //
    // We then return an empty set of paths
    return [];
}
function parseToPoolsDict(pools, timestamp) {
    return Object.fromEntries(cloneDeep(pools)
        .filter((pool) => pool.tokensList.length > 0 && pool.tokens[0].balance !== '0')
        .map((pool) => [pool.id, parseNewPool(pool, timestamp)])
        .filter(([, pool]) => pool !== undefined));
}
function getRaisingToken(pool, lbpRaisingTokens, token) {
    let theOtherToken;
    const tokensList = pool.tokensList;
    if (tokensList.includes(token) && !lbpRaisingTokens.includes(token)) {
        for (let i = 0; i < 2; i++) {
            if (tokensList[i] == token) {
                theOtherToken = tokensList[1 - i];
            }
        }
    }
    return theOtherToken;
}

function calculatePathLimits(paths, swapType) {
    let maxLiquidityAvailable = constants.Zero;
    paths.forEach((path) => {
        // Original parsedPoolPairForPath here but this has already been done.
        path.limitAmount = getLimitAmountSwapForPath(path, swapType);
        // if (path.limitAmount.isNaN()) throw 'path.limitAmount.isNaN';
        maxLiquidityAvailable = maxLiquidityAvailable.add(path.limitAmount);
    });
    const sortedPaths = paths.sort((a, b) => {
        return b.limitAmount.gt(a.limitAmount) ? 1 : -1;
    });
    return [sortedPaths, maxLiquidityAvailable];
}
function getLimitAmountSwapForPath(path, swapType) {
    const poolPairData = path.poolPairData;
    let limit;
    if (swapType === exports.SwapTypes.SwapExactIn) {
        limit = path.pools[poolPairData.length - 1].getLimitAmountSwap(poolPairData[poolPairData.length - 1], exports.SwapTypes.SwapExactIn);
        for (let i = poolPairData.length - 2; i >= 0; i--) {
            const poolLimitExactIn = path.pools[i].getLimitAmountSwap(poolPairData[i], exports.SwapTypes.SwapExactIn);
            const poolLimitExactOut = path.pools[i].getLimitAmountSwap(poolPairData[i], exports.SwapTypes.SwapExactOut);
            if (poolLimitExactOut.lte(limit)) {
                limit = poolLimitExactIn;
            }
            else {
                const pulledLimit = getOutputAmountSwap(path.pools[i], path.poolPairData[i], exports.SwapTypes.SwapExactOut, limit);
                limit = BigNumber.min(pulledLimit, poolLimitExactIn);
            }
        }
        if (limit.isZero())
            return constants.Zero;
        const result = bignumber.parseFixed(limit.dp(poolPairData[0].decimalsIn).toString(), poolPairData[0].decimalsIn);
        return result;
    }
    else {
        limit = path.pools[0].getLimitAmountSwap(poolPairData[0], exports.SwapTypes.SwapExactOut);
        for (let i = 1; i < poolPairData.length; i++) {
            const poolLimitExactIn = path.pools[i].getLimitAmountSwap(poolPairData[i], exports.SwapTypes.SwapExactIn);
            const poolLimitExactOut = path.pools[i].getLimitAmountSwap(poolPairData[i], exports.SwapTypes.SwapExactOut);
            if (poolLimitExactIn.lte(limit)) {
                limit = poolLimitExactOut;
            }
            else {
                const pushedLimit = getOutputAmountSwap(path.pools[i], path.poolPairData[i], exports.SwapTypes.SwapExactIn, limit);
                limit = BigNumber.min(pushedLimit, poolLimitExactOut);
            }
        }
        if (limit.isZero())
            return constants.Zero;
        return bignumber.parseFixed(limit
            .dp(poolPairData[poolPairData.length - 1].decimalsOut)
            .toString(), poolPairData[poolPairData.length - 1].decimalsOut);
    }
}

class RouteProposer {
    constructor(config) {
        this.config = config;
        this.cache = {};
    }
    /**
     * Given a list of pools and a desired input/output, returns a set of possible paths to route through
     */
    getCandidatePaths(tokenIn, tokenOut, swapType, pools, swapOptions) {
        tokenIn = tokenIn.toLowerCase();
        tokenOut = tokenOut.toLowerCase();
        if (pools.length === 0)
            return [];
        // If token pair has been processed before that info can be reused to speed up execution
        const cache = this.cache[`${tokenIn}${tokenOut}${swapType}${swapOptions.timestamp}`];
        // forceRefresh can be set to force fresh processing of paths/prices
        if (!swapOptions.forceRefresh && !!cache) {
            // Using pre-processed data from cache
            return cache.paths;
        }
        const poolsAllDict = parseToPoolsDict(pools, swapOptions.timestamp);
        const [directPools, hopsIn, hopsOut] = filterPoolsOfInterest(poolsAllDict, tokenIn, tokenOut, swapOptions.maxPools);
        const pathData = producePaths(tokenIn, tokenOut, directPools, hopsIn, hopsOut, poolsAllDict);
        const boostedPaths = getBoostedPaths(tokenIn, tokenOut, poolsAllDict, this.config);
        const pathsUsingStaBal = getPathsUsingStaBalPool(tokenIn, tokenOut, poolsAllDict, poolsAllDict, this.config);
        const combinedPathData = pathData
            .concat(...boostedPaths)
            .concat(...pathsUsingStaBal);
        const [paths] = calculatePathLimits(combinedPathData, swapType);
        this.cache[`${tokenIn}${tokenOut}${swapType}${swapOptions.timestamp}`] =
            {
                paths: paths,
            };
        return paths;
    }
    /**
     * Given a pool dictionary and a desired input/output, returns a set of possible paths to route through.
     * @param {string} tokenIn - Address of tokenIn
     * @param {string} tokenOut - Address of tokenOut
     * @param {SwapTypes} swapType - SwapExactIn where the amount of tokens in (sent to the Pool) is known or SwapExactOut where the amount of tokens out (received from the Pool) is known.
     * @param {PoolDictionary} poolsAllDict - Dictionary of pools.
     * @param {number }maxPools - Maximum number of pools to hop through.
     * @returns {NewPath[]} Array of possible paths sorted by liquidity.
     */
    getCandidatePathsFromDict(tokenIn, tokenOut, swapType, poolsAllDict, maxPools) {
        tokenIn = tokenIn.toLowerCase();
        tokenOut = tokenOut.toLowerCase();
        if (Object.keys(poolsAllDict).length === 0)
            return [];
        const [directPools, hopsIn, hopsOut] = filterPoolsOfInterest(poolsAllDict, tokenIn, tokenOut, maxPools);
        const pathData = producePaths(tokenIn, tokenOut, directPools, hopsIn, hopsOut, poolsAllDict);
        const boostedPaths = getBoostedPaths(tokenIn, tokenOut, poolsAllDict, this.config);
        const combinedPathData = pathData.concat(...boostedPaths);
        const [paths] = calculatePathLimits(combinedPathData, swapType);
        return paths;
    }
}

class SwapCostCalculator {
    constructor(config, tokenPriceService) {
        this.tokenPriceService = tokenPriceService;
        this.tokenPriceCache = {
            AddressZero: '1',
            [config.weth.toLowerCase()]: '1',
        };
    }
    /**
     * Calculate the cost of spending a certain amount of gas in terms of a token.
     * This allows us to determine whether an increased amount of tokens gained
     * is worth spending this extra gas (e.g. by including an extra pool in a swap)
     */
    convertGasCostToToken(tokenAddress, tokenDecimals, gasPriceWei, swapGas = bignumber.BigNumber.from('85000')) {
        return __awaiter(this, void 0, void 0, function* () {
            if (gasPriceWei.isZero() || swapGas.isZero())
                return constants.Zero;
            const tokenPrice = yield this.getNativeAssetPriceInToken(tokenAddress);
            const tokenPriceWei = bignumber.BigNumber.from(scale(bnum(tokenPrice), tokenDecimals).dp(0).toString());
            return gasPriceWei.mul(swapGas).mul(tokenPriceWei).div(constants.WeiPerEther);
        });
    }
    /**
     * @param tokenAddress - the address of the token for which to express the native asset in terms of
     * @param tokenPrice - the price of the native asset in terms of the provided token
     */
    setNativeAssetPriceInToken(tokenAddress, tokenPrice) {
        this.tokenPriceCache[tokenAddress.toLowerCase()] = tokenPrice;
    }
    /**
     * @param tokenAddress - the address of the token for which to express the native asset in terms of
     */
    getNativeAssetPriceInToken(tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if we have token price cached
            const cachedTokenPrice = this.tokenPriceCache[tokenAddress.toLowerCase()];
            if (cachedTokenPrice)
                return cachedTokenPrice;
            try {
                const ethPriceInToken = yield this.tokenPriceService.getNativeAssetPriceInToken(tokenAddress);
                //cache the price so we don't need to refetch it
                this.setNativeAssetPriceInToken(tokenAddress, ethPriceInToken);
                return ethPriceInToken;
            }
            catch (err) {
                console.log('Error Getting Token Price. Defaulting to 0.');
                console.log(err);
                return '0';
            }
        });
    }
}

class SOR {
    /**
     * @param {Provider} provider - Provider.
     * @param {SorConfig} config - Chain specific configuration for the SOR.
     * @param {PoolDataService} poolDataService - Generic service that fetches pool data from an external data source.
     * @param {TokenPriceService} tokenPriceService - Generic service that fetches token prices from an external price feed. Used in calculating swap cost.
     */
    constructor(provider, config, poolDataService, tokenPriceService) {
        this.provider = provider;
        this.config = config;
        this.defaultSwapOptions = {
            gasPrice: bignumber.parseFixed('50', 9),
            swapGas: bignumber.BigNumber.from('85000'),
            poolTypeFilter: exports.PoolFilter.All,
            maxPools: 4,
            timestamp: Math.floor(Date.now() / 1000),
            forceRefresh: false,
        };
        this.poolCacher = new PoolCacher(poolDataService);
        this.routeProposer = new RouteProposer(config);
        this.swapCostCalculator = new SwapCostCalculator(config, tokenPriceService);
    }
    getPools(useBpts) {
        return this.poolCacher.getPools(useBpts);
    }
    /**
     * fetchPools Retrieves pools information and saves to internal pools cache.
     * @returns {boolean} True if pools fetched successfully, False if not.
     */
    fetchPools() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.poolCacher.fetchPools();
        });
    }
    /**

    /**
     * getSwaps Retrieve information for best swap tokenIn>tokenOut.
     * @param {string} tokenIn - Address of tokenIn.
     * @param {string} tokenOut - Address of tokenOut.
     * @param {SwapTypes} swapType - SwapExactIn where the amount of tokens in (sent to the Pool) is known or SwapExactOut where the amount of tokens out (received from the Pool) is known.
     * @param {BigNumberish} swapAmount - Either amountIn or amountOut depending on the `swapType` value.
     * @param swapOptions
     * @param useBpts Set to true to consider join/exit weighted pool paths (these will need formatted and submitted via Relayer)
     * @returns Swap information including return amount and swaps structure to be submitted to Vault.
     */
    getSwaps(tokenIn, tokenOut, swapType, swapAmount, swapOptions, useBpts = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.poolCacher.finishedFetching)
                return cloneDeep(EMPTY_SWAPINFO);
            // Set any unset options to their defaults
            const options = Object.assign(Object.assign({}, this.defaultSwapOptions), swapOptions);
            if (this.useBpt !== useBpts) {
                options.forceRefresh = true;
                this.useBpt = useBpts;
            }
            const pools = this.poolCacher.getPools(useBpts);
            const filteredPools = filterPoolsByType(pools, options.poolTypeFilter);
            const wrappedInfo = yield getWrappedInfo(this.provider, swapType, tokenIn, tokenOut, this.config, bignumber.BigNumber.from(swapAmount));
            let swapInfo;
            if (isLidoStableSwap(this.config.chainId, tokenIn, tokenOut)) {
                swapInfo = yield getLidoStaticSwaps(filteredPools, this.config.chainId, wrappedInfo.tokenIn.addressForSwaps, wrappedInfo.tokenOut.addressForSwaps, swapType, wrappedInfo.swapAmountForSwaps, this.provider);
            }
            else {
                swapInfo = yield this.processSwaps(wrappedInfo.tokenIn.addressForSwaps, wrappedInfo.tokenOut.addressForSwaps, swapType, wrappedInfo.swapAmountForSwaps, filteredPools, options);
            }
            if (swapInfo.returnAmount.isZero())
                return swapInfo;
            swapInfo = setWrappedInfo(swapInfo, swapType, wrappedInfo, this.config);
            return swapInfo;
        });
    }
    /**
     * getCostOfSwapInToken Calculates and saves price of a swap in outputToken denomination. Used to determine if extra swaps are cost effective.
     * @param {string} outputToken - Address of outputToken.
     * @param {number} outputTokenDecimals - Decimals of outputToken.
     * @param {BigNumber} gasPrice - Gas price used to calculate cost.
     * @param {BigNumber} swapGas - Gas cost of a swap. Default=85000.
     * @returns {BigNumber} Price of a swap in outputToken denomination.
     */
    getCostOfSwapInToken(outputToken, outputTokenDecimals, gasPrice, swapGas) {
        return __awaiter(this, void 0, void 0, function* () {
            if (gasPrice.isZero())
                return constants.Zero;
            return this.swapCostCalculator.convertGasCostToToken(outputToken, outputTokenDecimals, gasPrice, swapGas);
        });
    }
    // Will process swap/pools data and return best swaps
    processSwaps(tokenIn, tokenOut, swapType, swapAmount, pools, swapOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (pools.length === 0)
                return cloneDeep(EMPTY_SWAPINFO);
            const paths = this.routeProposer.getCandidatePaths(tokenIn, tokenOut, swapType, pools, swapOptions);
            if (paths.length == 0)
                return cloneDeep(EMPTY_SWAPINFO);
            // Path is guaranteed to contain both tokenIn and tokenOut
            let tokenInDecimals;
            let tokenOutDecimals;
            paths[0].swaps.forEach((swap) => {
                // Inject token decimals to avoid having to query onchain
                if (isSameAddress(swap.tokenIn, tokenIn)) {
                    tokenInDecimals = swap.tokenInDecimals;
                }
                if (isSameAddress(swap.tokenOut, tokenOut)) {
                    tokenOutDecimals = swap.tokenOutDecimals;
                }
            });
            const costOutputToken = yield this.getCostOfSwapInToken(swapType === exports.SwapTypes.SwapExactIn ? tokenOut : tokenIn, swapType === exports.SwapTypes.SwapExactIn
                ? tokenOutDecimals
                : tokenInDecimals, swapOptions.gasPrice, swapOptions.swapGas);
            // Returns list of swaps
            const [swaps, total, marketSp, totalConsideringFees] = this.getBestPaths(paths, swapAmount, swapType, tokenInDecimals, tokenOutDecimals, costOutputToken, swapOptions.maxPools);
            const swapInfo = formatSwaps(swaps, swapType, swapAmount, tokenIn, tokenOut, total, totalConsideringFees, marketSp);
            return swapInfo;
        });
    }
    /**
     * Find optimal routes for trade from given candidate paths
     */
    getBestPaths(paths, swapAmount, swapType, tokenInDecimals, tokenOutDecimals, costOutputToken, maxPools) {
        // swapExactIn - total = total amount swap will return of tokenOut
        // swapExactOut - total = total amount of tokenIn required for swap
        const [inputDecimals, outputDecimals] = swapType === exports.SwapTypes.SwapExactIn
            ? [tokenInDecimals, tokenOutDecimals]
            : [tokenOutDecimals, tokenInDecimals];
        const [swaps, total, marketSp, totalConsideringFees] = getBestPaths(paths, swapType, swapAmount, inputDecimals, outputDecimals, maxPools, costOutputToken);
        return [
            swaps,
            bignumber.parseFixed(total.dp(outputDecimals, BigNumber.ROUND_FLOOR).toString(), outputDecimals),
            marketSp.toString(),
            bignumber.parseFixed(totalConsideringFees
                .dp(outputDecimals, BigNumber.ROUND_FLOOR)
                .toString(), outputDecimals),
        ];
    }
}

/////////
/// UI Helpers
/////////
// Get BPT amount for token amounts with zero-price impact
// This function is the same regardless of whether we are considering
// an Add or Remove liquidity operation: The spot prices of BPT in tokens
// are the same regardless.
function BPTForTokensZeroPriceImpact$2(balances, decimals, normalizedWeights, amounts, bptTotalSupply) {
    const amountBPTOut = amounts.reduce((totalBptOut, amountIn, i) => {
        // Calculate amount of BPT gained per token in
        const poolPairData = {
            balanceIn: balances[i],
            decimalsIn: decimals[i],
            balanceOut: bptTotalSupply,
            weightIn: normalizedWeights[i],
            swapFee: constants.Zero,
        };
        const BPTPrice = _spotPriceAfterSwapTokenInForExactBPTOut$3(ZERO, poolPairData);
        // Multiply by amountIn to get contribution to total bpt out
        const downscaledAmountIn = bignumber.formatFixed(amountIn, decimals[i]);
        const downscaledBptOut = bnum(downscaledAmountIn)
            .div(BPTPrice)
            .toString();
        return bignumber.BigNumber.from(totalBptOut).add(bignumber.parseFixed(downscaledBptOut, 18));
    }, constants.Zero);
    return bignumber.BigNumber.from(amountBPTOut);
}

/////////
/// UI Helpers
/////////
// Get BPT amount for token amounts with zero-price impact
// This function is the same regardless of whether we are considering
// an Add or Remove liquidity operation: The spot prices of BPT in tokens
// are the same regardless.
function BPTForTokensZeroPriceImpact$1(allBalances, decimals, amounts, // This has to have the same lenght as allBalances
bptTotalSupply, amp) {
    if (allBalances.length != amounts.length)
        throw 'allBalances and amounts have to have same length';
    // Calculate the amount of BPT adding this liquidity would result in
    // if there were no price impact, i.e. using the spot price of tokenIn/BPT
    // We downscale the pool balances once as this will be reused across tokens
    const allBalancesDownScaled = allBalances.map((balance, i) => bnum(bignumber.formatFixed(balance, decimals[i])));
    const amountBPTOut = amounts.reduce((totalBptOut, amountIn, i) => {
        // Calculate amount of BPT gained per token in
        const poolPairData = {
            amp: amp,
            allBalances: allBalancesDownScaled,
            tokenIndexIn: i,
            balanceOut: bptTotalSupply,
            decimalsOut: 18,
            swapFee: constants.Zero,
        };
        const BPTPrice = _spotPriceAfterSwapTokenInForExactBPTOut$2(ZERO, poolPairData);
        // Multiply by amountIn to get contribution to total bpt out
        const downscaledAmountIn = bignumber.formatFixed(amountIn, decimals[i]);
        const downscaledBptOut = bnum(downscaledAmountIn)
            .div(BPTPrice)
            .toString();
        return bignumber.BigNumber.from(totalBptOut).add(bignumber.parseFixed(downscaledBptOut, 18));
    }, constants.Zero);
    return bignumber.BigNumber.from(amountBPTOut);
}

/////////
/// UI Helpers
/////////
// Get BPT amount for token amounts with zero-price impact
// Amounts are stablecoin amounts (DAI, USDT, USDC)
// Since the phantom stable pool is actually metastable
// and their components are bDAI, bUSDT, bUSDC,
// we transform its balances according to the price rates
// to obtain units of DAI, USDT, USDC.
function BPTForTokensZeroPriceImpact(allBalances, // assuming that BPT balance was removed
decimals, // This should be [18, 18, 18]
amounts, // This has to have the same length as allBalances
virtualBptSupply, amp, fee, rates) {
    const amountsAfterFee = amounts.map((amountIn) => {
        const amount = bignumber.BigNumber.from(amountIn);
        const feeAmount = amount.mul(fee).div(constants.WeiPerEther);
        return amount.sub(feeAmount);
    });
    const transformedBalances = allBalances.map((balance, i) => {
        return bignumber.BigNumber.from(balance).mul(rates[i]).div(constants.WeiPerEther);
    });
    return BPTForTokensZeroPriceImpact$1(transformedBalances, decimals, amountsAfterFee, virtualBptSupply, amp);
}

/*
 * queryBatchSwap simulates a call to `batchSwap`, returning an array of Vault asset deltas. Calls to `swap` cannot be
 * simulated directly, but an equivalent `batchSwap` call can and will yield the exact same result.
 *
 * Each element in the array corresponds to the asset at the same index, and indicates the number of tokens (or ETH)
 * the Vault would take from the sender (if positive) or send to the recipient (if negative). The arguments it
 * receives are the same that an equivalent `batchSwap` call would receive.
 *
 * Unlike `batchSwap`, this function performs no checks on the sender or recipient field in the `funds` struct.
 * This makes it suitable to be called by off-chain applications via eth_call without needing to hold tokens,
 * approve them for the Vault, or even know a user's address.
 */
function queryBatchSwap(vaultContract, swapType, swaps, assets) {
    return __awaiter(this, void 0, void 0, function* () {
        const funds = {
            sender: constants.AddressZero,
            recipient: constants.AddressZero,
            fromInternalBalance: false,
            toInternalBalance: false,
        };
        return yield vaultContract.queryBatchSwap(swapType, swaps, assets, funds);
    });
}
/*
Use SOR to get swapInfo for tokenIn>tokenOut.
SwapInfos.swaps has path information.
*/
function getSorSwapInfo(tokenIn, tokenOut, swapType, amount, sor) {
    return __awaiter(this, void 0, void 0, function* () {
        const swapInfo = yield sor.getSwaps(tokenIn.toLowerCase(), tokenOut.toLowerCase(), swapType, amount);
        return swapInfo;
    });
}
/*
Format multiple individual swaps/assets into a single swap/asset.
*/
function batchSwaps(assetArray, swaps) {
    // assest addresses without duplicates
    const newAssetArray = [...new Set(assetArray.flat())];
    // Update indices of each swap to use new asset array
    swaps.forEach((swap, i) => {
        swap.forEach((poolSwap) => {
            poolSwap.assetInIndex = newAssetArray.indexOf(assetArray[i][poolSwap.assetInIndex]);
            poolSwap.assetOutIndex = newAssetArray.indexOf(assetArray[i][poolSwap.assetOutIndex]);
        });
    });
    // Join Swaps into a single batchSwap
    const batchedSwaps = swaps.flat();
    return { swaps: batchedSwaps, assets: newAssetArray };
}
/*
Uses SOR to create and query a batchSwap for multiple tokens in > single tokenOut.
For example can be used to join staBal3 with DAI/USDC/USDT.
*/
function queryBatchSwapTokensIn(sor, vaultContract, tokensIn, amountsIn, tokenOut) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const swaps = [];
        const assetArray = [];
        // get path information for each tokenIn
        for (let i = 0; i < tokensIn.length; i++) {
            const swap = yield getSorSwapInfo(tokensIn[i], tokenOut, exports.SwapTypes.SwapExactIn, amountsIn[i].toString(), sor);
            swaps.push(swap.swaps);
            assetArray.push(swap.tokenAddresses);
        }
        // Join swaps and assets together correctly
        const batchedSwaps = batchSwaps(assetArray, swaps);
        let amountTokenOut = '0';
        try {
            // Onchain query
            const deltas = yield queryBatchSwap(vaultContract, exports.SwapTypes.SwapExactIn, batchedSwaps.swaps, batchedSwaps.assets);
            amountTokenOut =
                (_a = deltas[batchedSwaps.assets.indexOf(tokenOut.toLowerCase())]) !== null && _a !== void 0 ? _a : '0';
        }
        catch (err) {
            console.error(`queryBatchSwapTokensIn error: ${err.message}`);
        }
        return {
            amountTokenOut,
            swaps: batchedSwaps.swaps,
            assets: batchedSwaps.assets,
        };
    });
}
/*
Uses SOR to create and query a batchSwap for a single token in > multiple tokens out.
For example can be used to exit staBal3 to DAI/USDC/USDT.
*/
function queryBatchSwapTokensOut(sor, vaultContract, tokenIn, amountsIn, tokensOut) {
    return __awaiter(this, void 0, void 0, function* () {
        const swaps = [];
        const assetArray = [];
        // get path information for each tokenOut
        for (let i = 0; i < tokensOut.length; i++) {
            const swap = yield getSorSwapInfo(tokenIn, tokensOut[i], exports.SwapTypes.SwapExactIn, amountsIn[i].toString(), sor);
            swaps.push(swap.swaps);
            assetArray.push(swap.tokenAddresses);
        }
        // Join swaps and assets together correctly
        const batchedSwaps = batchSwaps(assetArray, swaps);
        const amountTokensOut = Array(tokensOut.length).fill('0');
        try {
            // Onchain query
            const deltas = yield queryBatchSwap(vaultContract, exports.SwapTypes.SwapExactIn, batchedSwaps.swaps, batchedSwaps.assets);
            tokensOut.forEach((t, i) => {
                const amount = deltas[batchedSwaps.assets.indexOf(t.toLowerCase())];
                if (amount)
                    amountTokensOut[i] = amount.toString();
            });
        }
        catch (err) {
            console.error(`queryBatchSwapTokensOut error: ${err.message}`);
        }
        return {
            amountTokensOut,
            swaps: batchedSwaps.swaps,
            assets: batchedSwaps.assets,
        };
    });
}

exports.LinearPool = LinearPool;
exports.MetaStablePool = MetaStablePool;
exports.OldBigNumber = BigNumber;
exports.PhantomStablePool = PhantomStablePool;
exports.RouteProposer = RouteProposer;
exports.SOR = SOR;
exports.StableMathBigInt = stableMathBigInt;
exports.StableMaths = stableMath;
exports.StablePool = StablePool;
exports.WeightedMaths = weightedMath;
exports.WeightedPool = WeightedPool;
exports.ZERO = ZERO;
exports.bnum = bnum;
exports.formatSequence = formatSequence;
exports.getSpotPriceAfterSwapForPath = getSpotPriceAfterSwapForPath;
exports.getTokenAddressesForSwap = getTokenAddressesForSwap;
exports.parseToPoolsDict = parseToPoolsDict;
exports.phantomStableBPTForTokensZeroPriceImpact = BPTForTokensZeroPriceImpact;
exports.queryBatchSwapTokensIn = queryBatchSwapTokensIn;
exports.queryBatchSwapTokensOut = queryBatchSwapTokensOut;
exports.stableBPTForTokensZeroPriceImpact = BPTForTokensZeroPriceImpact$1;
exports.weightedBPTForTokensZeroPriceImpact = BPTForTokensZeroPriceImpact$2;
//# sourceMappingURL=index.js.map
