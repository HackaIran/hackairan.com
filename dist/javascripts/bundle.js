/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./scripts/index.js */ "./client/scripts/index.js");

__webpack_require__(/*! ./stylesheets/index.sass */ "./client/stylesheets/index.sass");

__webpack_require__(/*! ./scripts/socket-test */ "./client/scripts/socket-test.js");

/***/ }),

/***/ "./client/scripts/index.js":
/*!*********************************!*\
  !*** ./client/scripts/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('It works!');

/***/ }),

/***/ "./client/scripts/model/socket.js":
/*!****************************************!*\
  !*** ./client/scripts/model/socket.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _socket2.default.connect('/');

/***/ }),

/***/ "./client/scripts/socket-test.js":
/*!***************************************!*\
  !*** ./client/scripts/socket-test.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _socket = __webpack_require__(/*! ./model/socket */ "./client/scripts/model/socket.js");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_socket2.default.emit('pong client', 'Hey there i\'m a new one!');

_socket2.default.on('ping server', function (message) {
    console.log(message);
    setTimeout(function () {
        _socket2.default.emit('pong client', 'Pong from ' + message.split(' ')[2]);
    }, 2000);
});

/***/ }),

/***/ "./client/stylesheets/index.sass":
/*!***************************************!*\
  !*** ./client/stylesheets/index.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?-url!../../node_modules/sass-loader/lib/loader.js!./index.sass */ "./node_modules/css-loader/index.js?-url!./node_modules/sass-loader/lib/loader.js!./client/stylesheets/index.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/after/index.js":
/*!*************************************!*\
  !*** ./node_modules/after/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),

/***/ "./node_modules/arraybuffer.slice/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arraybuffer.slice/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/blob/index.js":
/*!************************************!*\
  !*** ./node_modules/blob/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/component-bind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/component-inherit/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-inherit/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?-url!./node_modules/sass-loader/lib/loader.js!./client/stylesheets/index.sass":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader?-url!./node_modules/sass-loader/lib/loader.js!./client/stylesheets/index.sass ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }\n  body h1 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    font-size: 50px;\n    color: dimgrey;\n    font-weight: 100;\n    background: radial-gradient(#FFF, #717171);\n    text-shadow: 0 1px 2px #000; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");


/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:socket');
var index = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (global.location && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // other options for Node.js client
  var freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
Socket.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
Socket.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0)
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");
var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");
var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module requirements.
 */

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname !== global.location.hostname ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (self.supportsBinary && contentType === 'application/octet-stream') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (global.document) {
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(/*! ws */ 0);
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  WebSocket = NodeWebSocket;
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/engine.io-client/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var keys = __webpack_require__(/*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js");
var hasBinary = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");
var sliceBuffer = __webpack_require__(/*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js");
var after = __webpack_require__(/*! after */ "./node_modules/after/index.js");
var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");

var base64encoder;
if (global && global.ArrayBuffer) {
  base64encoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(/*! blob */ "./node_modules/blob/index.js");

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof global.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/utf8.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint, strict) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			if (strict) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
			return false;
		}
		return true;
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint, strict) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			if (!checkScalarValue(codePoint, strict)) {
				codePoint = 0xFFFD;
			}
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint, strict);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol(strict) {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol(strict)) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return utf8;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key, hasOwnProperty, object; }

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/has-binary2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-binary2/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/has-binary2/node_modules/isarray/index.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' ||
                        typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' ||
                        typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj)) ||
    (typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
    (withNativeBlob && obj instanceof Blob) ||
    (withNativeFile && obj instanceof File)
  ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/has-binary2/node_modules/isarray/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/has-binary2/node_modules/isarray/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/socket.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var url = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/lib/url.js");
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");
var Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
exports.Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");


/***/ }),

/***/ "./node_modules/socket.io-client/lib/manager.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/lib/manager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");
var Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");
var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:manager');
var indexOf = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");
var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/on.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-client/lib/on.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}


/***/ }),

/***/ "./node_modules/socket.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var toArray = __webpack_require__(/*! to-array */ "./node_modules/to-array/index.js");
var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:socket');
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var hasBin = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';

  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};

/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */

Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/url.js":
/*!**************************************************!*\
  !*** ./node_modules/socket.io-client/lib/url.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/socket.io-client/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/socket.io-parser/binary.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-parser/binary.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/socket.io-parser/node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");
var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/socket.io-parser/index.js":
/*!************************************************!*\
  !*** ./node_modules/socket.io-parser/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-parser/node_modules/debug/src/browser.js")('socket.io-parser');
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var binary = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/binary.js");
var isArray = __webpack_require__(/*! isarray */ "./node_modules/socket.io-parser/node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch(e){
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch(e){
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}


/***/ }),

/***/ "./node_modules/socket.io-parser/is-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-parser/is-buffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = isBuf;

var withNativeBuffer = typeof global.Buffer === 'function' && typeof global.Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof global.ArrayBuffer === 'function';

var isView = (function () {
  if (withNativeArrayBuffer && typeof global.ArrayBuffer.isView === 'function') {
    return global.ArrayBuffer.isView;
  } else {
    return function (obj) { return obj.buffer instanceof global.ArrayBuffer; };
  }
})();

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (withNativeBuffer && global.Buffer.isBuffer(obj)) ||
          (withNativeArrayBuffer && (obj instanceof global.ArrayBuffer || isView(obj)));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/socket.io-parser/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/isarray/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/isarray/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/to-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-array/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zY3JpcHRzL21vZGVsL3NvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2NyaXB0cy9zb2NrZXQtdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3R5bGVzaGVldHMvaW5kZXguc2Fzcz85ZGM4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXlidWZmZXIuc2xpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhY2tvMi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmxvYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1pbmhlcml0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zdHlsZXNoZWV0cy9pbmRleC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy14aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3htbGh0dHByZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi91dGY4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXMtYmluYXJ5Mi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLWJpbmFyeTIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhcy1jb3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmRleG9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFyc2Vxcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvaXMtYnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90by1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3llYXN0L2luZGV4LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImlvIiwiY29ubmVjdCIsInNvY2tldCIsImVtaXQiLCJvbiIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0Iiwic3BsaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0SkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDL0ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFtRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QzFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGOztBQUUzRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVztBQUN6RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdHVCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksVUFBVTtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUpBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQWlEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkRBQTJEO0FBQzNEO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU87QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3UkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsS0FBSyxZQUFZO0FBQ2pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxTQUFTO0FBQ3RCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLGFBQWEsOEJBQThCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoT0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQsZ0JBQWdCO0FBQzlFOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CLG9DQUFvQztBQUNwRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtDQUFrQyxPQUFPO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixZQUFZLFlBQVk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0EsT0FBTyxPQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLEVBQUU7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUM1bEJBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O3NEQ2xCQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLEtBQUs7QUFDTCw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILEVBQUUsMENBWUY7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlQRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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T0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ2pNQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sWUFBWTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUEsZSIsImZpbGUiOiIuL2phdmFzY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3NjcmlwdHMvaW5kZXguanMnXHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9pbmRleC5zYXNzJ1xyXG5cclxuXHJcbmltcG9ydCAnLi9zY3JpcHRzL3NvY2tldC10ZXN0JyIsIlxyXG5jb25zb2xlLmxvZygnSXQgd29ya3MhJyk7XHJcbiIsImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlvLmNvbm5lY3QoJy8nKTsiLCJpbXBvcnQgc29ja2V0IGZyb20gJy4vbW9kZWwvc29ja2V0J1xyXG5cclxuc29ja2V0LmVtaXQoJ3BvbmcgY2xpZW50JywgYEhleSB0aGVyZSBpJ20gYSBuZXcgb25lIWApXHJcblxyXG5zb2NrZXQub24oJ3Bpbmcgc2VydmVyJywgbWVzc2FnZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdwb25nIGNsaWVudCcsICdQb25nIGZyb20gJyArIG1lc3NhZ2Uuc3BsaXQoJyAnKVsyXSlcclxuICAgIH0sIDIwMDApXHJcbn0pIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBhZnRlclxuXG5mdW5jdGlvbiBhZnRlcihjb3VudCwgY2FsbGJhY2ssIGVycl9jYikge1xuICAgIHZhciBiYWlsID0gZmFsc2VcbiAgICBlcnJfY2IgPSBlcnJfY2IgfHwgbm9vcFxuICAgIHByb3h5LmNvdW50ID0gY291bnRcblxuICAgIHJldHVybiAoY291bnQgPT09IDApID8gY2FsbGJhY2soKSA6IHByb3h5XG5cbiAgICBmdW5jdGlvbiBwcm94eShlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAocHJveHkuY291bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZnRlciBjYWxsZWQgdG9vIG1hbnkgdGltZXMnKVxuICAgICAgICB9XG4gICAgICAgIC0tcHJveHkuY291bnRcblxuICAgICAgICAvLyBhZnRlciBmaXJzdCBlcnJvciwgcmVzdCBhcmUgcGFzc2VkIHRvIGVycl9jYlxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBiYWlsID0gdHJ1ZVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKVxuICAgICAgICAgICAgLy8gZnV0dXJlIGVycm9yIGNhbGxiYWNrcyB3aWxsIGdvIHRvIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZXJyX2NiXG4gICAgICAgIH0gZWxzZSBpZiAocHJveHkuY291bnQgPT09IDAgJiYgIWJhaWwpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4iLCIvKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBzbGljaW5nIGFuIGFycmF5YnVmZmVyIGV2ZW4gd2hlblxuICogQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlIGlzIG5vdCBzdXBwb3J0ZWRcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyYXlidWZmZXIsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYXJyYXlidWZmZXIuYnl0ZUxlbmd0aDtcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICBlbmQgPSBlbmQgfHwgYnl0ZXM7XG5cbiAgaWYgKGFycmF5YnVmZmVyLnNsaWNlKSB7IHJldHVybiBhcnJheWJ1ZmZlci5zbGljZShzdGFydCwgZW5kKTsgfVxuXG4gIGlmIChzdGFydCA8IDApIHsgc3RhcnQgKz0gYnl0ZXM7IH1cbiAgaWYgKGVuZCA8IDApIHsgZW5kICs9IGJ5dGVzOyB9XG4gIGlmIChlbmQgPiBieXRlcykgeyBlbmQgPSBieXRlczsgfVxuXG4gIGlmIChzdGFydCA+PSBieXRlcyB8fCBzdGFydCA+PSBlbmQgfHwgYnl0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG5cbiAgdmFyIGFidiA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGVuZCAtIHN0YXJ0KTtcbiAgZm9yICh2YXIgaSA9IHN0YXJ0LCBpaSA9IDA7IGkgPCBlbmQ7IGkrKywgaWkrKykge1xuICAgIHJlc3VsdFtpaV0gPSBhYnZbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5idWZmZXI7XG59O1xuIiwiXG4vKipcbiAqIEV4cG9zZSBgQmFja29mZmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrb2ZmO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYmFja29mZiB0aW1lciB3aXRoIGBvcHRzYC5cbiAqXG4gKiAtIGBtaW5gIGluaXRpYWwgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgWzEwMF1cbiAqIC0gYG1heGAgbWF4IHRpbWVvdXQgWzEwMDAwXVxuICogLSBgaml0dGVyYCBbMF1cbiAqIC0gYGZhY3RvcmAgWzJdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gQmFja29mZihvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB0aGlzLm1zID0gb3B0cy5taW4gfHwgMTAwO1xuICB0aGlzLm1heCA9IG9wdHMubWF4IHx8IDEwMDAwO1xuICB0aGlzLmZhY3RvciA9IG9wdHMuZmFjdG9yIHx8IDI7XG4gIHRoaXMuaml0dGVyID0gb3B0cy5qaXR0ZXIgPiAwICYmIG9wdHMuaml0dGVyIDw9IDEgPyBvcHRzLmppdHRlciA6IDA7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgYmFja29mZiBkdXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oKXtcbiAgdmFyIG1zID0gdGhpcy5tcyAqIE1hdGgucG93KHRoaXMuZmFjdG9yLCB0aGlzLmF0dGVtcHRzKyspO1xuICBpZiAodGhpcy5qaXR0ZXIpIHtcbiAgICB2YXIgcmFuZCA9ICBNYXRoLnJhbmRvbSgpO1xuICAgIHZhciBkZXZpYXRpb24gPSBNYXRoLmZsb29yKHJhbmQgKiB0aGlzLmppdHRlciAqIG1zKTtcbiAgICBtcyA9IChNYXRoLmZsb29yKHJhbmQgKiAxMCkgJiAxKSA9PSAwICA/IG1zIC0gZGV2aWF0aW9uIDogbXMgKyBkZXZpYXRpb247XG4gIH1cbiAgcmV0dXJuIE1hdGgubWluKG1zLCB0aGlzLm1heCkgfCAwO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtaW5pbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbihtaW4pe1xuICB0aGlzLm1zID0gbWluO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heGltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uKG1heCl7XG4gIHRoaXMubWF4ID0gbWF4O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGppdHRlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0Sml0dGVyID0gZnVuY3Rpb24oaml0dGVyKXtcbiAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XG59O1xuXG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG5cbiAgLy8gVXNlIGEgbG9va3VwIHRhYmxlIHRvIGZpbmQgdGhlIGluZGV4LlxuICB2YXIgbG9va3VwID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XG4gIH1cblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSldO1xuICAgICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSsxKV07XG4gICAgICBlbmNvZGVkMyA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzIpXTtcbiAgICAgIGVuY29kZWQ0ID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMyldO1xuXG4gICAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMyAmIDMpIDw8IDYpIHwgKGVuY29kZWQ0ICYgNjMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbiAgfTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qKlxuICogQ3JlYXRlIGEgYmxvYiBidWlsZGVyIGV2ZW4gd2hlbiB2ZW5kb3IgcHJlZml4ZXMgZXhpc3RcbiAqL1xuXG52YXIgQmxvYkJ1aWxkZXIgPSBnbG9iYWwuQmxvYkJ1aWxkZXJcbiAgfHwgZ2xvYmFsLldlYktpdEJsb2JCdWlsZGVyXG4gIHx8IGdsb2JhbC5NU0Jsb2JCdWlsZGVyXG4gIHx8IGdsb2JhbC5Nb3pCbG9iQnVpbGRlcjtcblxuLyoqXG4gKiBDaGVjayBpZiBCbG9iIGNvbnN0cnVjdG9yIGlzIHN1cHBvcnRlZFxuICovXG5cbnZhciBibG9iU3VwcG9ydGVkID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBhID0gbmV3IEJsb2IoWydoaSddKTtcbiAgICByZXR1cm4gYS5zaXplID09PSAyO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pKCk7XG5cbi8qKlxuICogQ2hlY2sgaWYgQmxvYiBjb25zdHJ1Y3RvciBzdXBwb3J0cyBBcnJheUJ1ZmZlclZpZXdzXG4gKiBGYWlscyBpbiBTYWZhcmkgNiwgc28gd2UgbmVlZCB0byBtYXAgdG8gQXJyYXlCdWZmZXJzIHRoZXJlLlxuICovXG5cbnZhciBibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXcgPSBibG9iU3VwcG9ydGVkICYmIChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYiA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShbMSwyXSldKTtcbiAgICByZXR1cm4gYi5zaXplID09PSAyO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pKCk7XG5cbi8qKlxuICogQ2hlY2sgaWYgQmxvYkJ1aWxkZXIgaXMgc3VwcG9ydGVkXG4gKi9cblxudmFyIGJsb2JCdWlsZGVyU3VwcG9ydGVkID0gQmxvYkJ1aWxkZXJcbiAgJiYgQmxvYkJ1aWxkZXIucHJvdG90eXBlLmFwcGVuZFxuICAmJiBCbG9iQnVpbGRlci5wcm90b3R5cGUuZ2V0QmxvYjtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBtYXBzIEFycmF5QnVmZmVyVmlld3MgdG8gQXJyYXlCdWZmZXJzXG4gKiBVc2VkIGJ5IEJsb2JCdWlsZGVyIGNvbnN0cnVjdG9yIGFuZCBvbGQgYnJvd3NlcnMgdGhhdCBkaWRuJ3RcbiAqIHN1cHBvcnQgaXQgaW4gdGhlIEJsb2IgY29uc3RydWN0b3IuXG4gKi9cblxuZnVuY3Rpb24gbWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2h1bmsgPSBhcnlbaV07XG4gICAgaWYgKGNodW5rLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICB2YXIgYnVmID0gY2h1bmsuYnVmZmVyO1xuXG4gICAgICAvLyBpZiB0aGlzIGlzIGEgc3ViYXJyYXksIG1ha2UgYSBjb3B5IHNvIHdlIG9ubHlcbiAgICAgIC8vIGluY2x1ZGUgdGhlIHN1YmFycmF5IHJlZ2lvbiBmcm9tIHRoZSB1bmRlcmx5aW5nIGJ1ZmZlclxuICAgICAgaWYgKGNodW5rLmJ5dGVMZW5ndGggIT09IGJ1Zi5ieXRlTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmsuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGNvcHkuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZiwgY2h1bmsuYnl0ZU9mZnNldCwgY2h1bmsuYnl0ZUxlbmd0aCkpO1xuICAgICAgICBidWYgPSBjb3B5LmJ1ZmZlcjtcbiAgICAgIH1cblxuICAgICAgYXJ5W2ldID0gYnVmO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBCbG9iQnVpbGRlckNvbnN0cnVjdG9yKGFyeSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcbiAgbWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgYmIuYXBwZW5kKGFyeVtpXSk7XG4gIH1cblxuICByZXR1cm4gKG9wdGlvbnMudHlwZSkgPyBiYi5nZXRCbG9iKG9wdGlvbnMudHlwZSkgOiBiYi5nZXRCbG9iKCk7XG59O1xuXG5mdW5jdGlvbiBCbG9iQ29uc3RydWN0b3IoYXJ5LCBvcHRpb25zKSB7XG4gIG1hcEFycmF5QnVmZmVyVmlld3MoYXJ5KTtcbiAgcmV0dXJuIG5ldyBCbG9iKGFyeSwgb3B0aW9ucyB8fCB7fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgaWYgKGJsb2JTdXBwb3J0ZWQpIHtcbiAgICByZXR1cm4gYmxvYlN1cHBvcnRzQXJyYXlCdWZmZXJWaWV3ID8gZ2xvYmFsLkJsb2IgOiBCbG9iQ29uc3RydWN0b3I7XG4gIH0gZWxzZSBpZiAoYmxvYkJ1aWxkZXJTdXBwb3J0ZWQpIHtcbiAgICByZXR1cm4gQmxvYkJ1aWxkZXJDb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59KSgpO1xuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiLyoqXG4gKiBTbGljZSByZWZlcmVuY2UuXG4gKi9cblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG5cbi8qKlxuICogQmluZCBgb2JqYCB0byBgZm5gLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBvciBzdHJpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgZm4pe1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGZuKSBmbiA9IG9ialtmbl07XG4gIGlmICgnZnVuY3Rpb24nICE9IHR5cGVvZiBmbikgdGhyb3cgbmV3IEVycm9yKCdiaW5kKCkgcmVxdWlyZXMgYSBmdW5jdGlvbicpO1xuICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG9iaiwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIH1cbn07XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSwgYil7XG4gIHZhciBmbiA9IGZ1bmN0aW9uKCl7fTtcbiAgZm4ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gIGEucHJvdG90eXBlID0gbmV3IGZuO1xuICBhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGE7XG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7IH1cXG4gIGJvZHkgaDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBjb2xvcjogZGltZ3JleTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNGRkYsICM3MTcxNzEpO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4ICMwMDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcblxuLyoqXG4gKiBFeHBvcnRzIHBhcnNlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKlxuICovXG5tb2R1bGUuZXhwb3J0cy5wYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHRyYW5zcG9ydHMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMvaW5kZXgnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6c29ja2V0Jyk7XG52YXIgaW5kZXggPSByZXF1aXJlKCdpbmRleG9mJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIHBhcnNldXJpID0gcmVxdWlyZSgncGFyc2V1cmknKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gU29ja2V0O1xuXG4vKipcbiAqIFNvY2tldCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVyaSBvciBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBTb2NrZXQgKHVyaSwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU29ja2V0KSkgcmV0dXJuIG5ldyBTb2NrZXQodXJpLCBvcHRzKTtcblxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICBpZiAodXJpICYmICdvYmplY3QnID09PSB0eXBlb2YgdXJpKSB7XG4gICAgb3B0cyA9IHVyaTtcbiAgICB1cmkgPSBudWxsO1xuICB9XG5cbiAgaWYgKHVyaSkge1xuICAgIHVyaSA9IHBhcnNldXJpKHVyaSk7XG4gICAgb3B0cy5ob3N0bmFtZSA9IHVyaS5ob3N0O1xuICAgIG9wdHMuc2VjdXJlID0gdXJpLnByb3RvY29sID09PSAnaHR0cHMnIHx8IHVyaS5wcm90b2NvbCA9PT0gJ3dzcyc7XG4gICAgb3B0cy5wb3J0ID0gdXJpLnBvcnQ7XG4gICAgaWYgKHVyaS5xdWVyeSkgb3B0cy5xdWVyeSA9IHVyaS5xdWVyeTtcbiAgfSBlbHNlIGlmIChvcHRzLmhvc3QpIHtcbiAgICBvcHRzLmhvc3RuYW1lID0gcGFyc2V1cmkob3B0cy5ob3N0KS5ob3N0O1xuICB9XG5cbiAgdGhpcy5zZWN1cmUgPSBudWxsICE9IG9wdHMuc2VjdXJlID8gb3B0cy5zZWN1cmVcbiAgICA6IChnbG9iYWwubG9jYXRpb24gJiYgJ2h0dHBzOicgPT09IGxvY2F0aW9uLnByb3RvY29sKTtcblxuICBpZiAob3B0cy5ob3N0bmFtZSAmJiAhb3B0cy5wb3J0KSB7XG4gICAgLy8gaWYgbm8gcG9ydCBpcyBzcGVjaWZpZWQgbWFudWFsbHksIHVzZSB0aGUgcHJvdG9jb2wgZGVmYXVsdFxuICAgIG9wdHMucG9ydCA9IHRoaXMuc2VjdXJlID8gJzQ0MycgOiAnODAnO1xuICB9XG5cbiAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQgfHwgZmFsc2U7XG4gIHRoaXMuaG9zdG5hbWUgPSBvcHRzLmhvc3RuYW1lIHx8XG4gICAgKGdsb2JhbC5sb2NhdGlvbiA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xuICB0aGlzLnBvcnQgPSBvcHRzLnBvcnQgfHwgKGdsb2JhbC5sb2NhdGlvbiAmJiBsb2NhdGlvbi5wb3J0XG4gICAgICA/IGxvY2F0aW9uLnBvcnRcbiAgICAgIDogKHRoaXMuc2VjdXJlID8gNDQzIDogODApKTtcbiAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnkgfHwge307XG4gIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHRoaXMucXVlcnkpIHRoaXMucXVlcnkgPSBwYXJzZXFzLmRlY29kZSh0aGlzLnF1ZXJ5KTtcbiAgdGhpcy51cGdyYWRlID0gZmFsc2UgIT09IG9wdHMudXBncmFkZTtcbiAgdGhpcy5wYXRoID0gKG9wdHMucGF0aCB8fCAnL2VuZ2luZS5pbycpLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLyc7XG4gIHRoaXMuZm9yY2VKU09OUCA9ICEhb3B0cy5mb3JjZUpTT05QO1xuICB0aGlzLmpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG4gIHRoaXMuZm9yY2VCYXNlNjQgPSAhIW9wdHMuZm9yY2VCYXNlNjQ7XG4gIHRoaXMuZW5hYmxlc1hEUiA9ICEhb3B0cy5lbmFibGVzWERSO1xuICB0aGlzLnRpbWVzdGFtcFBhcmFtID0gb3B0cy50aW1lc3RhbXBQYXJhbSB8fCAndCc7XG4gIHRoaXMudGltZXN0YW1wUmVxdWVzdHMgPSBvcHRzLnRpbWVzdGFtcFJlcXVlc3RzO1xuICB0aGlzLnRyYW5zcG9ydHMgPSBvcHRzLnRyYW5zcG9ydHMgfHwgWydwb2xsaW5nJywgJ3dlYnNvY2tldCddO1xuICB0aGlzLnRyYW5zcG9ydE9wdGlvbnMgPSBvcHRzLnRyYW5zcG9ydE9wdGlvbnMgfHwge307XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICcnO1xuICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG4gIHRoaXMucG9saWN5UG9ydCA9IG9wdHMucG9saWN5UG9ydCB8fCA4NDM7XG4gIHRoaXMucmVtZW1iZXJVcGdyYWRlID0gb3B0cy5yZW1lbWJlclVwZ3JhZGUgfHwgZmFsc2U7XG4gIHRoaXMuYmluYXJ5VHlwZSA9IG51bGw7XG4gIHRoaXMub25seUJpbmFyeVVwZ3JhZGVzID0gb3B0cy5vbmx5QmluYXJ5VXBncmFkZXM7XG4gIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSBmYWxzZSAhPT0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSA/IChvcHRzLnBlck1lc3NhZ2VEZWZsYXRlIHx8IHt9KSA6IGZhbHNlO1xuXG4gIGlmICh0cnVlID09PSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlKSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0ge307XG4gIGlmICh0aGlzLnBlck1lc3NhZ2VEZWZsYXRlICYmIG51bGwgPT0gdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCA9IDEwMjQ7XG4gIH1cblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeCB8fCBudWxsO1xuICB0aGlzLmtleSA9IG9wdHMua2V5IHx8IG51bGw7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZSB8fCBudWxsO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQgfHwgbnVsbDtcbiAgdGhpcy5jYSA9IG9wdHMuY2EgfHwgbnVsbDtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzIHx8IG51bGw7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgdGhpcy5mb3JjZU5vZGUgPSAhIW9wdHMuZm9yY2VOb2RlO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuICBpZiAoZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwpIHtcbiAgICBpZiAob3B0cy5leHRyYUhlYWRlcnMgJiYgT2JqZWN0LmtleXMob3B0cy5leHRyYUhlYWRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMubG9jYWxBZGRyZXNzKSB7XG4gICAgICB0aGlzLmxvY2FsQWRkcmVzcyA9IG9wdHMubG9jYWxBZGRyZXNzO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBvbiBoYW5kc2hha2VcbiAgdGhpcy5pZCA9IG51bGw7XG4gIHRoaXMudXBncmFkZXMgPSBudWxsO1xuICB0aGlzLnBpbmdJbnRlcnZhbCA9IG51bGw7XG4gIHRoaXMucGluZ1RpbWVvdXQgPSBudWxsO1xuXG4gIC8vIHNldCBvbiBoZWFydGJlYXRcbiAgdGhpcy5waW5nSW50ZXJ2YWxUaW1lciA9IG51bGw7XG4gIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IG51bGw7XG5cbiAgdGhpcy5vcGVuKCk7XG59XG5cblNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoU29ja2V0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcblxuLyoqXG4gKiBFeHBvc2UgZGVwcyBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHlcbiAqIGFuZCBzdGFuZGFsb25lIGJyb3dzZXIgYWNjZXNzLlxuICovXG5cblNvY2tldC5Tb2NrZXQgPSBTb2NrZXQ7XG5Tb2NrZXQuVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi90cmFuc3BvcnQnKTtcblNvY2tldC50cmFuc3BvcnRzID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL2luZGV4Jyk7XG5Tb2NrZXQucGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgdHJhbnNwb3J0IG9mIHRoZSBnaXZlbiB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICogQHJldHVybiB7VHJhbnNwb3J0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jcmVhdGVUcmFuc3BvcnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWJ1ZygnY3JlYXRpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICB2YXIgcXVlcnkgPSBjbG9uZSh0aGlzLnF1ZXJ5KTtcblxuICAvLyBhcHBlbmQgZW5naW5lLmlvIHByb3RvY29sIGlkZW50aWZpZXJcbiAgcXVlcnkuRUlPID0gcGFyc2VyLnByb3RvY29sO1xuXG4gIC8vIHRyYW5zcG9ydCBuYW1lXG4gIHF1ZXJ5LnRyYW5zcG9ydCA9IG5hbWU7XG5cbiAgLy8gcGVyLXRyYW5zcG9ydCBvcHRpb25zXG4gIHZhciBvcHRpb25zID0gdGhpcy50cmFuc3BvcnRPcHRpb25zW25hbWVdIHx8IHt9O1xuXG4gIC8vIHNlc3Npb24gaWQgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICBpZiAodGhpcy5pZCkgcXVlcnkuc2lkID0gdGhpcy5pZDtcblxuICB2YXIgdHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNbbmFtZV0oe1xuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBzb2NrZXQ6IHRoaXMsXG4gICAgYWdlbnQ6IG9wdGlvbnMuYWdlbnQgfHwgdGhpcy5hZ2VudCxcbiAgICBob3N0bmFtZTogb3B0aW9ucy5ob3N0bmFtZSB8fCB0aGlzLmhvc3RuYW1lLFxuICAgIHBvcnQ6IG9wdGlvbnMucG9ydCB8fCB0aGlzLnBvcnQsXG4gICAgc2VjdXJlOiBvcHRpb25zLnNlY3VyZSB8fCB0aGlzLnNlY3VyZSxcbiAgICBwYXRoOiBvcHRpb25zLnBhdGggfHwgdGhpcy5wYXRoLFxuICAgIGZvcmNlSlNPTlA6IG9wdGlvbnMuZm9yY2VKU09OUCB8fCB0aGlzLmZvcmNlSlNPTlAsXG4gICAganNvbnA6IG9wdGlvbnMuanNvbnAgfHwgdGhpcy5qc29ucCxcbiAgICBmb3JjZUJhc2U2NDogb3B0aW9ucy5mb3JjZUJhc2U2NCB8fCB0aGlzLmZvcmNlQmFzZTY0LFxuICAgIGVuYWJsZXNYRFI6IG9wdGlvbnMuZW5hYmxlc1hEUiB8fCB0aGlzLmVuYWJsZXNYRFIsXG4gICAgdGltZXN0YW1wUmVxdWVzdHM6IG9wdGlvbnMudGltZXN0YW1wUmVxdWVzdHMgfHwgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyxcbiAgICB0aW1lc3RhbXBQYXJhbTogb3B0aW9ucy50aW1lc3RhbXBQYXJhbSB8fCB0aGlzLnRpbWVzdGFtcFBhcmFtLFxuICAgIHBvbGljeVBvcnQ6IG9wdGlvbnMucG9saWN5UG9ydCB8fCB0aGlzLnBvbGljeVBvcnQsXG4gICAgcGZ4OiBvcHRpb25zLnBmeCB8fCB0aGlzLnBmeCxcbiAgICBrZXk6IG9wdGlvbnMua2V5IHx8IHRoaXMua2V5LFxuICAgIHBhc3NwaHJhc2U6IG9wdGlvbnMucGFzc3BocmFzZSB8fCB0aGlzLnBhc3NwaHJhc2UsXG4gICAgY2VydDogb3B0aW9ucy5jZXJ0IHx8IHRoaXMuY2VydCxcbiAgICBjYTogb3B0aW9ucy5jYSB8fCB0aGlzLmNhLFxuICAgIGNpcGhlcnM6IG9wdGlvbnMuY2lwaGVycyB8fCB0aGlzLmNpcGhlcnMsXG4gICAgcmVqZWN0VW5hdXRob3JpemVkOiBvcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCB8fCB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSB8fCB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLFxuICAgIGV4dHJhSGVhZGVyczogb3B0aW9ucy5leHRyYUhlYWRlcnMgfHwgdGhpcy5leHRyYUhlYWRlcnMsXG4gICAgZm9yY2VOb2RlOiBvcHRpb25zLmZvcmNlTm9kZSB8fCB0aGlzLmZvcmNlTm9kZSxcbiAgICBsb2NhbEFkZHJlc3M6IG9wdGlvbnMubG9jYWxBZGRyZXNzIHx8IHRoaXMubG9jYWxBZGRyZXNzLFxuICAgIHJlcXVlc3RUaW1lb3V0OiBvcHRpb25zLnJlcXVlc3RUaW1lb3V0IHx8IHRoaXMucmVxdWVzdFRpbWVvdXQsXG4gICAgcHJvdG9jb2xzOiBvcHRpb25zLnByb3RvY29scyB8fCB2b2lkICgwKVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNwb3J0O1xufTtcblxuZnVuY3Rpb24gY2xvbmUgKG9iaikge1xuICB2YXIgbyA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIG9baV0gPSBvYmpbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIHRyYW5zcG9ydCB0byB1c2UgYW5kIHN0YXJ0cyBwcm9iZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuU29ja2V0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdHJhbnNwb3J0O1xuICBpZiAodGhpcy5yZW1lbWJlclVwZ3JhZGUgJiYgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyAmJiB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZignd2Vic29ja2V0JykgIT09IC0xKSB7XG4gICAgdHJhbnNwb3J0ID0gJ3dlYnNvY2tldCc7XG4gIH0gZWxzZSBpZiAoMCA9PT0gdGhpcy50cmFuc3BvcnRzLmxlbmd0aCkge1xuICAgIC8vIEVtaXQgZXJyb3Igb24gbmV4dCB0aWNrIHNvIGl0IGNhbiBiZSBsaXN0ZW5lZCB0b1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCAnTm8gdHJhbnNwb3J0cyBhdmFpbGFibGUnKTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzWzBdO1xuICB9XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcblxuICAvLyBSZXRyeSB3aXRoIHRoZSBuZXh0IHRyYW5zcG9ydCBpZiB0aGUgdHJhbnNwb3J0IGlzIGRpc2FibGVkIChqc29ucDogZmFsc2UpXG4gIHRyeSB7XG4gICAgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMudHJhbnNwb3J0cy5zaGlmdCgpO1xuICAgIHRoaXMub3BlbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyYW5zcG9ydC5vcGVuKCk7XG4gIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0LiBEaXNhYmxlcyB0aGUgZXhpc3Rpbmcgb25lIChpZiBhbnkpLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2V0VHJhbnNwb3J0ID0gZnVuY3Rpb24gKHRyYW5zcG9ydCkge1xuICBkZWJ1Zygnc2V0dGluZyB0cmFuc3BvcnQgJXMnLCB0cmFuc3BvcnQubmFtZSk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICBkZWJ1ZygnY2xlYXJpbmcgZXhpc3RpbmcgdHJhbnNwb3J0ICVzJywgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gIH1cblxuICAvLyBzZXQgdXAgdHJhbnNwb3J0XG4gIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXG4gIC8vIHNldCB1cCB0cmFuc3BvcnQgbGlzdGVuZXJzXG4gIHRyYW5zcG9ydFxuICAub24oJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25EcmFpbigpO1xuICB9KVxuICAub24oJ3BhY2tldCcsIGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICBzZWxmLm9uUGFja2V0KHBhY2tldCk7XG4gIH0pXG4gIC5vbignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgIHNlbGYub25FcnJvcihlKTtcbiAgfSlcbiAgLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uQ2xvc2UoJ3RyYW5zcG9ydCBjbG9zZScpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUHJvYmVzIGEgdHJhbnNwb3J0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5wcm9iZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgdmFyIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KG5hbWUsIHsgcHJvYmU6IDEgfSk7XG4gIHZhciBmYWlsZWQgPSBmYWxzZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBvblRyYW5zcG9ydE9wZW4gKCkge1xuICAgIGlmIChzZWxmLm9ubHlCaW5hcnlVcGdyYWRlcykge1xuICAgICAgdmFyIHVwZ3JhZGVMb3Nlc0JpbmFyeSA9ICF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmIHNlbGYudHJhbnNwb3J0LnN1cHBvcnRzQmluYXJ5O1xuICAgICAgZmFpbGVkID0gZmFpbGVkIHx8IHVwZ3JhZGVMb3Nlc0JpbmFyeTtcbiAgICB9XG4gICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgb3BlbmVkJywgbmFtZSk7XG4gICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogJ3BpbmcnLCBkYXRhOiAncHJvYmUnIH1dKTtcbiAgICB0cmFuc3BvcnQub25jZSgncGFja2V0JywgZnVuY3Rpb24gKG1zZykge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgaWYgKCdwb25nJyA9PT0gbXNnLnR5cGUgJiYgJ3Byb2JlJyA9PT0gbXNnLmRhdGEpIHtcbiAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgcG9uZycsIG5hbWUpO1xuICAgICAgICBzZWxmLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgIHNlbGYuZW1pdCgndXBncmFkaW5nJywgdHJhbnNwb3J0KTtcbiAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVybjtcbiAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICd3ZWJzb2NrZXQnID09PSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgICBkZWJ1ZygncGF1c2luZyBjdXJyZW50IHRyYW5zcG9ydCBcIiVzXCInLCBzZWxmLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgc2VsZi50cmFuc3BvcnQucGF1c2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoJ2Nsb3NlZCcgPT09IHNlbGYucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGRlYnVnKCdjaGFuZ2luZyB0cmFuc3BvcnQgYW5kIHNlbmRpbmcgdXBncmFkZSBwYWNrZXQnKTtcblxuICAgICAgICAgIGNsZWFudXAoKTtcblxuICAgICAgICAgIHNlbGYuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogJ3VwZ3JhZGUnIH1dKTtcbiAgICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGUnLCB0cmFuc3BvcnQpO1xuICAgICAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgICAgICAgc2VsZi51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLmZsdXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkJywgbmFtZSk7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3Byb2JlIGVycm9yJyk7XG4gICAgICAgIGVyci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcbiAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlRXJyb3InLCBlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJlZXplVHJhbnNwb3J0ICgpIHtcbiAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAvLyBBbnkgY2FsbGJhY2sgY2FsbGVkIGJ5IHRyYW5zcG9ydCBzaG91bGQgYmUgaWdub3JlZCBzaW5jZSBub3dcbiAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgY2xlYW51cCgpO1xuXG4gICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgfVxuXG4gIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBoYXBwZW5zIHdoaWxlIHByb2JpbmdcbiAgZnVuY3Rpb24gb25lcnJvciAoZXJyKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdwcm9iZSBlcnJvcjogJyArIGVycik7XG4gICAgZXJyb3IudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICBmcmVlemVUcmFuc3BvcnQoKTtcblxuICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yOiAlcycsIG5hbWUsIGVycik7XG5cbiAgICBzZWxmLmVtaXQoJ3VwZ3JhZGVFcnJvcicsIGVycm9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNwb3J0Q2xvc2UgKCkge1xuICAgIG9uZXJyb3IoJ3RyYW5zcG9ydCBjbG9zZWQnKTtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbmNsb3NlICgpIHtcbiAgICBvbmVycm9yKCdzb2NrZXQgY2xvc2VkJyk7XG4gIH1cblxuICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgdXBncmFkZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbnVwZ3JhZGUgKHRvKSB7XG4gICAgaWYgKHRyYW5zcG9ydCAmJiB0by5uYW1lICE9PSB0cmFuc3BvcnQubmFtZSkge1xuICAgICAgZGVidWcoJ1wiJXNcIiB3b3JrcyAtIGFib3J0aW5nIFwiJXNcIicsIHRvLm5hbWUsIHRyYW5zcG9ydC5uYW1lKTtcbiAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIHRoZSB0cmFuc3BvcnQgYW5kIG9uIHNlbGZcbiAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdvcGVuJywgb25UcmFuc3BvcnRPcGVuKTtcbiAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcigndXBncmFkaW5nJywgb251cGdyYWRlKTtcbiAgfVxuXG4gIHRyYW5zcG9ydC5vbmNlKCdvcGVuJywgb25UcmFuc3BvcnRPcGVuKTtcbiAgdHJhbnNwb3J0Lm9uY2UoJ2Vycm9yJywgb25lcnJvcik7XG4gIHRyYW5zcG9ydC5vbmNlKCdjbG9zZScsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuXG4gIHRoaXMub25jZSgnY2xvc2UnLCBvbmNsb3NlKTtcbiAgdGhpcy5vbmNlKCd1cGdyYWRpbmcnLCBvbnVwZ3JhZGUpO1xuXG4gIHRyYW5zcG9ydC5vcGVuKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgZGVlbWVkIG9wZW4uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3NvY2tldCBvcGVuJyk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICd3ZWJzb2NrZXQnID09PSB0aGlzLnRyYW5zcG9ydC5uYW1lO1xuICB0aGlzLmVtaXQoJ29wZW4nKTtcbiAgdGhpcy5mbHVzaCgpO1xuXG4gIC8vIHdlIGNoZWNrIGZvciBgcmVhZHlTdGF0ZWAgaW4gY2FzZSBhbiBgb3BlbmBcbiAgLy8gbGlzdGVuZXIgYWxyZWFkeSBjbG9zZWQgdGhlIHNvY2tldFxuICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUgJiYgdGhpcy51cGdyYWRlICYmIHRoaXMudHJhbnNwb3J0LnBhdXNlKSB7XG4gICAgZGVidWcoJ3N0YXJ0aW5nIHVwZ3JhZGUgcHJvYmVzJyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLnVwZ3JhZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5wcm9iZSh0aGlzLnVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogSGFuZGxlcyBhIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgICdjbG9zaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3NvY2tldCByZWNlaXZlOiB0eXBlIFwiJXNcIiwgZGF0YSBcIiVzXCInLCBwYWNrZXQudHlwZSwgcGFja2V0LmRhdGEpO1xuXG4gICAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xuXG4gICAgLy8gU29ja2V0IGlzIGxpdmUgLSBhbnkgcGFja2V0IGNvdW50c1xuICAgIHRoaXMuZW1pdCgnaGVhcnRiZWF0Jyk7XG5cbiAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICBjYXNlICdvcGVuJzpcbiAgICAgICAgdGhpcy5vbkhhbmRzaGFrZShKU09OLnBhcnNlKHBhY2tldC5kYXRhKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb25nJzpcbiAgICAgICAgdGhpcy5zZXRQaW5nKCk7XG4gICAgICAgIHRoaXMuZW1pdCgncG9uZycpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdzZXJ2ZXIgZXJyb3InKTtcbiAgICAgICAgZXJyLmNvZGUgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgICAgdGhpcy5lbWl0KCdkYXRhJywgcGFja2V0LmRhdGEpO1xuICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkZWJ1ZygncGFja2V0IHJlY2VpdmVkIHdpdGggc29ja2V0IHJlYWR5U3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBoYW5kc2hha2UgY29tcGxldGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGFuZHNoYWtlIG9ialxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkhhbmRzaGFrZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuZW1pdCgnaGFuZHNoYWtlJywgZGF0YSk7XG4gIHRoaXMuaWQgPSBkYXRhLnNpZDtcbiAgdGhpcy50cmFuc3BvcnQucXVlcnkuc2lkID0gZGF0YS5zaWQ7XG4gIHRoaXMudXBncmFkZXMgPSB0aGlzLmZpbHRlclVwZ3JhZGVzKGRhdGEudXBncmFkZXMpO1xuICB0aGlzLnBpbmdJbnRlcnZhbCA9IGRhdGEucGluZ0ludGVydmFsO1xuICB0aGlzLnBpbmdUaW1lb3V0ID0gZGF0YS5waW5nVGltZW91dDtcbiAgdGhpcy5vbk9wZW4oKTtcbiAgLy8gSW4gY2FzZSBvcGVuIGhhbmRsZXIgY2xvc2VzIHNvY2tldFxuICBpZiAoJ2Nsb3NlZCcgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICB0aGlzLnNldFBpbmcoKTtcblxuICAvLyBQcm9sb25nIGxpdmVuZXNzIG9mIHNvY2tldCBvbiBoZWFydGJlYXRcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignaGVhcnRiZWF0JywgdGhpcy5vbkhlYXJ0YmVhdCk7XG4gIHRoaXMub24oJ2hlYXJ0YmVhdCcsIHRoaXMub25IZWFydGJlYXQpO1xufTtcblxuLyoqXG4gKiBSZXNldHMgcGluZyB0aW1lb3V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25IZWFydGJlYXQgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLnBpbmdUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJ2Nsb3NlZCcgPT09IHNlbGYucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIHNlbGYub25DbG9zZSgncGluZyB0aW1lb3V0Jyk7XG4gIH0sIHRpbWVvdXQgfHwgKHNlbGYucGluZ0ludGVydmFsICsgc2VsZi5waW5nVGltZW91dCkpO1xufTtcblxuLyoqXG4gKiBQaW5ncyBzZXJ2ZXIgZXZlcnkgYHRoaXMucGluZ0ludGVydmFsYCBhbmQgZXhwZWN0cyByZXNwb25zZVxuICogd2l0aGluIGB0aGlzLnBpbmdUaW1lb3V0YCBvciBjbG9zZXMgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNldFBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgY2xlYXJUaW1lb3V0KHNlbGYucGluZ0ludGVydmFsVGltZXIpO1xuICBzZWxmLnBpbmdJbnRlcnZhbFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZGVidWcoJ3dyaXRpbmcgcGluZyBwYWNrZXQgLSBleHBlY3RpbmcgcG9uZyB3aXRoaW4gJXNtcycsIHNlbGYucGluZ1RpbWVvdXQpO1xuICAgIHNlbGYucGluZygpO1xuICAgIHNlbGYub25IZWFydGJlYXQoc2VsZi5waW5nVGltZW91dCk7XG4gIH0sIHNlbGYucGluZ0ludGVydmFsKTtcbn07XG5cbi8qKlxuKiBTZW5kcyBhIHBpbmcgcGFja2V0LlxuKlxuKiBAYXBpIHByaXZhdGVcbiovXG5cblNvY2tldC5wcm90b3R5cGUucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnNlbmRQYWNrZXQoJ3BpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5lbWl0KCdwaW5nJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgb24gYGRyYWluYCBldmVudFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25EcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53cml0ZUJ1ZmZlci5zcGxpY2UoMCwgdGhpcy5wcmV2QnVmZmVyTGVuKTtcblxuICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAvLyBhbmQgYSBub256ZXJvIHByZXZCdWZmZXJMZW4gY291bGQgY2F1c2UgcHJvYmxlbXMgb24gYGRyYWluYFxuICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgIHRoaXMuZW1pdCgnZHJhaW4nKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRmx1c2ggd3JpdGUgYnVmZmVycy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ2Nsb3NlZCcgIT09IHRoaXMucmVhZHlTdGF0ZSAmJiB0aGlzLnRyYW5zcG9ydC53cml0YWJsZSAmJlxuICAgICF0aGlzLnVwZ3JhZGluZyAmJiB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgIGRlYnVnKCdmbHVzaGluZyAlZCBwYWNrZXRzIGluIHNvY2tldCcsIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKTtcbiAgICB0aGlzLnRyYW5zcG9ydC5zZW5kKHRoaXMud3JpdGVCdWZmZXIpO1xuICAgIC8vIGtlZXAgdHJhY2sgb2YgY3VycmVudCBsZW5ndGggb2Ygd3JpdGVCdWZmZXJcbiAgICAvLyBzcGxpY2Ugd3JpdGVCdWZmZXIgYW5kIGNhbGxiYWNrQnVmZmVyIG9uIGBkcmFpbmBcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aDtcbiAgICB0aGlzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2VuZHMgYSBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAqIEByZXR1cm4ge1NvY2tldH0gZm9yIGNoYWluaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLndyaXRlID1cblNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChtc2csIG9wdGlvbnMsIGZuKSB7XG4gIHRoaXMuc2VuZFBhY2tldCgnbWVzc2FnZScsIG1zZywgb3B0aW9ucywgZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhY2tldCB0eXBlLlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZW5kUGFja2V0ID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIG9wdGlvbnMsIGZuKSB7XG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZGF0YSkge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgZm4gPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgaWYgKCdjbG9zaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdjbG9zZWQnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gIHZhciBwYWNrZXQgPSB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBkYXRhOiBkYXRhLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfTtcbiAgdGhpcy5lbWl0KCdwYWNrZXRDcmVhdGUnLCBwYWNrZXQpO1xuICB0aGlzLndyaXRlQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgaWYgKGZuKSB0aGlzLm9uY2UoJ2ZsdXNoJywgZm4pO1xuICB0aGlzLmZsdXNoKCk7XG59O1xuXG4vKipcbiAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2luZyc7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIHRoaXMub25jZSgnZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSAoKSB7XG4gICAgc2VsZi5vbkNsb3NlKCdmb3JjZWQgY2xvc2UnKTtcbiAgICBkZWJ1Zygnc29ja2V0IGNsb3NpbmcgLSB0ZWxsaW5nIHRyYW5zcG9ydCB0byBjbG9zZScpO1xuICAgIHNlbGYudHJhbnNwb3J0LmNsb3NlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwQW5kQ2xvc2UgKCkge1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGUnLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGVFcnJvcicsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgY2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdhaXRGb3JVcGdyYWRlICgpIHtcbiAgICAvLyB3YWl0IGZvciB1cGdyYWRlIHRvIGZpbmlzaCBzaW5jZSB3ZSBjYW4ndCBzZW5kIHBhY2tldHMgd2hpbGUgcGF1c2luZyBhIHRyYW5zcG9ydFxuICAgIHNlbGYub25jZSgndXBncmFkZScsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgc2VsZi5vbmNlKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgZGVidWcoJ3NvY2tldCBlcnJvciAlaicsIGVycik7XG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHRoaXMub25DbG9zZSgndHJhbnNwb3J0IGVycm9yJywgZXJyKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24sIGRlc2MpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdjbG9zaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3NvY2tldCBjbG9zZSB3aXRoIHJlYXNvbjogXCIlc1wiJywgcmVhc29uKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBjbGVhciB0aW1lcnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nSW50ZXJ2YWxUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoJ2Nsb3NlJyk7XG5cbiAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cbiAgICAvLyBpZ25vcmUgZnVydGhlciB0cmFuc3BvcnQgY29tbXVuaWNhdGlvblxuICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgLy8gc2V0IHJlYWR5IHN0YXRlXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG5cbiAgICAvLyBjbGVhciBzZXNzaW9uIGlkXG4gICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAvLyBlbWl0IGNsb3NlIGV2ZW50XG4gICAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAvLyBjbGVhbiBidWZmZXJzIGFmdGVyLCBzbyB1c2VycyBjYW4gc3RpbGxcbiAgICAvLyBncmFiIHRoZSBidWZmZXJzIG9uIGBjbG9zZWAgZXZlbnRcbiAgICBzZWxmLndyaXRlQnVmZmVyID0gW107XG4gICAgc2VsZi5wcmV2QnVmZmVyTGVuID0gMDtcbiAgfVxufTtcblxuLyoqXG4gKiBGaWx0ZXJzIHVwZ3JhZGVzLCByZXR1cm5pbmcgb25seSB0aG9zZSBtYXRjaGluZyBjbGllbnQgdHJhbnNwb3J0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXIgdXBncmFkZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICpcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmZpbHRlclVwZ3JhZGVzID0gZnVuY3Rpb24gKHVwZ3JhZGVzKSB7XG4gIHZhciBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBqID0gdXBncmFkZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgaWYgKH5pbmRleCh0aGlzLnRyYW5zcG9ydHMsIHVwZ3JhZGVzW2ldKSkgZmlsdGVyZWRVcGdyYWRlcy5wdXNoKHVwZ3JhZGVzW2ldKTtcbiAgfVxuICByZXR1cm4gZmlsdGVyZWRVcGdyYWRlcztcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcG9ydDtcblxuLyoqXG4gKiBUcmFuc3BvcnQgYWJzdHJhY3QgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBUcmFuc3BvcnQgKG9wdHMpIHtcbiAgdGhpcy5wYXRoID0gb3B0cy5wYXRoO1xuICB0aGlzLmhvc3RuYW1lID0gb3B0cy5ob3N0bmFtZTtcbiAgdGhpcy5wb3J0ID0gb3B0cy5wb3J0O1xuICB0aGlzLnNlY3VyZSA9IG9wdHMuc2VjdXJlO1xuICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgdGhpcy50aW1lc3RhbXBQYXJhbSA9IG9wdHMudGltZXN0YW1wUGFyYW07XG4gIHRoaXMudGltZXN0YW1wUmVxdWVzdHMgPSBvcHRzLnRpbWVzdGFtcFJlcXVlc3RzO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnJztcbiAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQgfHwgZmFsc2U7XG4gIHRoaXMuc29ja2V0ID0gb3B0cy5zb2NrZXQ7XG4gIHRoaXMuZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeDtcbiAgdGhpcy5rZXkgPSBvcHRzLmtleTtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQ7XG4gIHRoaXMuY2EgPSBvcHRzLmNhO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnM7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIHRoaXMuZm9yY2VOb2RlID0gb3B0cy5mb3JjZU5vZGU7XG5cbiAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcbiAgdGhpcy5sb2NhbEFkZHJlc3MgPSBvcHRzLmxvY2FsQWRkcmVzcztcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoVHJhbnNwb3J0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogRW1pdHMgYW4gZXJyb3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7VHJhbnNwb3J0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKG1zZywgZGVzYykge1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci50eXBlID0gJ1RyYW5zcG9ydEVycm9yJztcbiAgZXJyLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPcGVucyB0aGUgdHJhbnNwb3J0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ2Nsb3NlZCcgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuICAgIHRoaXMuZG9PcGVuKCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xvc2VzIHRoZSB0cmFuc3BvcnQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5kb0Nsb3NlKCk7XG4gICAgdGhpcy5vbkNsb3NlKCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgbXVsdGlwbGUgcGFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLndyaXRlKHBhY2tldHMpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNwb3J0IG5vdCBvcGVuJyk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gb3BlblxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICB0aGlzLmVtaXQoJ29wZW4nKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgcGFja2V0ID0gcGFyc2VyLmRlY29kZVBhY2tldChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKTtcbiAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBhIGRlY29kZWQgcGFja2V0LlxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25QYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gY2xvc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xufTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoJ3htbGh0dHByZXF1ZXN0LXNzbCcpO1xudmFyIFhIUiA9IHJlcXVpcmUoJy4vcG9sbGluZy14aHInKTtcbnZhciBKU09OUCA9IHJlcXVpcmUoJy4vcG9sbGluZy1qc29ucCcpO1xudmFyIHdlYnNvY2tldCA9IHJlcXVpcmUoJy4vd2Vic29ja2V0Jyk7XG5cbi8qKlxuICogRXhwb3J0IHRyYW5zcG9ydHMuXG4gKi9cblxuZXhwb3J0cy5wb2xsaW5nID0gcG9sbGluZztcbmV4cG9ydHMud2Vic29ja2V0ID0gd2Vic29ja2V0O1xuXG4vKipcbiAqIFBvbGxpbmcgdHJhbnNwb3J0IHBvbHltb3JwaGljIGNvbnN0cnVjdG9yLlxuICogRGVjaWRlcyBvbiB4aHIgdnMganNvbnAgYmFzZWQgb24gZmVhdHVyZSBkZXRlY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9sbGluZyAob3B0cykge1xuICB2YXIgeGhyO1xuICB2YXIgeGQgPSBmYWxzZTtcbiAgdmFyIHhzID0gZmFsc2U7XG4gIHZhciBqc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuXG4gIGlmIChnbG9iYWwubG9jYXRpb24pIHtcbiAgICB2YXIgaXNTU0wgPSAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgeGQgPSBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgeHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cblxuICBvcHRzLnhkb21haW4gPSB4ZDtcbiAgb3B0cy54c2NoZW1lID0geHM7XG4gIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcblxuICBpZiAoJ29wZW4nIGluIHhociAmJiAhb3B0cy5mb3JjZUpTT05QKSB7XG4gICAgcmV0dXJuIG5ldyBYSFIob3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFqc29ucCkgdGhyb3cgbmV3IEVycm9yKCdKU09OUCBkaXNhYmxlZCcpO1xuICAgIHJldHVybiBuZXcgSlNPTlAob3B0cyk7XG4gIH1cbn1cbiIsIlxuLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBQb2xsaW5nID0gcmVxdWlyZSgnLi9wb2xsaW5nJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBKU09OUFBvbGxpbmc7XG5cbi8qKlxuICogQ2FjaGVkIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gKi9cblxudmFyIHJOZXdsaW5lID0gL1xcbi9nO1xudmFyIHJFc2NhcGVkTmV3bGluZSA9IC9cXFxcbi9nO1xuXG4vKipcbiAqIEdsb2JhbCBKU09OUCBjYWxsYmFja3MuXG4gKi9cblxudmFyIGNhbGxiYWNrcztcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIGVtcHR5ICgpIHsgfVxuXG4vKipcbiAqIEpTT05QIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEpTT05QUG9sbGluZyAob3B0cykge1xuICBQb2xsaW5nLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG5cbiAgLy8gZGVmaW5lIGdsb2JhbCBjYWxsYmFja3MgYXJyYXkgaWYgbm90IHByZXNlbnRcbiAgLy8gd2UgZG8gdGhpcyBoZXJlIChsYXppbHkpIHRvIGF2b2lkIHVubmVlZGVkIGdsb2JhbCBwb2xsdXRpb25cbiAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAvLyB3ZSBuZWVkIHRvIGNvbnNpZGVyIG11bHRpcGxlIGVuZ2luZXMgaW4gdGhlIHNhbWUgcGFnZVxuICAgIGlmICghZ2xvYmFsLl9fX2VpbykgZ2xvYmFsLl9fX2VpbyA9IFtdO1xuICAgIGNhbGxiYWNrcyA9IGdsb2JhbC5fX19laW87XG4gIH1cblxuICAvLyBjYWxsYmFjayBpZGVudGlmaWVyXG4gIHRoaXMuaW5kZXggPSBjYWxsYmFja3MubGVuZ3RoO1xuXG4gIC8vIGFkZCBjYWxsYmFjayB0byBqc29ucCBnbG9iYWxcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAobXNnKSB7XG4gICAgc2VsZi5vbkRhdGEobXNnKTtcbiAgfSk7XG5cbiAgLy8gYXBwZW5kIHRvIHF1ZXJ5IHN0cmluZ1xuICB0aGlzLnF1ZXJ5LmogPSB0aGlzLmluZGV4O1xuXG4gIC8vIHByZXZlbnQgc3B1cmlvdXMgZXJyb3JzIGZyb20gYmVpbmcgZW1pdHRlZCB3aGVuIHRoZSB3aW5kb3cgaXMgdW5sb2FkZWRcbiAgaWYgKGdsb2JhbC5kb2N1bWVudCAmJiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5zY3JpcHQpIHNlbGYuc2NyaXB0Lm9uZXJyb3IgPSBlbXB0eTtcbiAgICB9LCBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFBvbGxpbmcuXG4gKi9cblxuaW5oZXJpdChKU09OUFBvbGxpbmcsIFBvbGxpbmcpO1xuXG4vKlxuICogSlNPTlAgb25seSBzdXBwb3J0cyBiaW5hcnkgYXMgYmFzZTY0IGVuY29kZWQgc3RyaW5nc1xuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcblxuLyoqXG4gKiBDbG9zZXMgdGhlIHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnNjcmlwdCkge1xuICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLmZvcm0pIHtcbiAgICB0aGlzLmZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZvcm0pO1xuICAgIHRoaXMuZm9ybSA9IG51bGw7XG4gICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICB9XG5cbiAgUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9Qb2xsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gIH1cblxuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICBzY3JpcHQuc3JjID0gdGhpcy51cmkoKTtcbiAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHNlbGYub25FcnJvcignanNvbnAgcG9sbCBlcnJvcicsIGUpO1xuICB9O1xuXG4gIHZhciBpbnNlcnRBdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgaWYgKGluc2VydEF0KSB7XG4gICAgaW5zZXJ0QXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBpbnNlcnRBdCk7XG4gIH0gZWxzZSB7XG4gICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuICB0aGlzLnNjcmlwdCA9IHNjcmlwdDtcblxuICB2YXIgaXNVQWdlY2tvID0gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2dlY2tvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICBpZiAoaXNVQWdlY2tvKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgfSwgMTAwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXcml0ZXMgd2l0aCBhIGhpZGRlbiBpZnJhbWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvV3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZm4pIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghdGhpcy5mb3JtKSB7XG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdmFyIGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHZhciBpZCA9IHRoaXMuaWZyYW1lSWQgPSAnZWlvX2lmcmFtZV8nICsgdGhpcy5pbmRleDtcbiAgICB2YXIgaWZyYW1lO1xuXG4gICAgZm9ybS5jbGFzc05hbWUgPSAnc29ja2V0aW8nO1xuICAgIGZvcm0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGZvcm0uc3R5bGUudG9wID0gJy0xMDAwcHgnO1xuICAgIGZvcm0uc3R5bGUubGVmdCA9ICctMTAwMHB4JztcbiAgICBmb3JtLnRhcmdldCA9IGlkO1xuICAgIGZvcm0ubWV0aG9kID0gJ1BPU1QnO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY2NlcHQtY2hhcnNldCcsICd1dGYtOCcpO1xuICAgIGFyZWEubmFtZSA9ICdkJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIHRoaXMuYXJlYSA9IGFyZWE7XG4gIH1cblxuICB0aGlzLmZvcm0uYWN0aW9uID0gdGhpcy51cmkoKTtcblxuICBmdW5jdGlvbiBjb21wbGV0ZSAoKSB7XG4gICAgaW5pdElmcmFtZSgpO1xuICAgIGZuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SWZyYW1lICgpIHtcbiAgICBpZiAoc2VsZi5pZnJhbWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlbGYuZm9ybS5yZW1vdmVDaGlsZChzZWxmLmlmcmFtZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNlbGYub25FcnJvcignanNvbnAgcG9sbGluZyBpZnJhbWUgcmVtb3ZhbCBlcnJvcicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBpZTYgZHluYW1pYyBpZnJhbWVzIHdpdGggdGFyZ2V0PVwiXCIgc3VwcG9ydCAodGhhbmtzIENocmlzIExhbWJhY2hlcilcbiAgICAgIHZhciBodG1sID0gJzxpZnJhbWUgc3JjPVwiamF2YXNjcmlwdDowXCIgbmFtZT1cIicgKyBzZWxmLmlmcmFtZUlkICsgJ1wiPic7XG4gICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgaWZyYW1lLm5hbWUgPSBzZWxmLmlmcmFtZUlkO1xuICAgICAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0OjAnO1xuICAgIH1cblxuICAgIGlmcmFtZS5pZCA9IHNlbGYuaWZyYW1lSWQ7XG5cbiAgICBzZWxmLmZvcm0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICBzZWxmLmlmcmFtZSA9IGlmcmFtZTtcbiAgfVxuXG4gIGluaXRJZnJhbWUoKTtcblxuICAvLyBlc2NhcGUgXFxuIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb252ZXJ0ZWQgaW50byBcXHJcXG4gYnkgc29tZSBVQXNcbiAgLy8gZG91YmxlIGVzY2FwaW5nIGlzIHJlcXVpcmVkIGZvciBlc2NhcGVkIG5ldyBsaW5lcyBiZWNhdXNlIHVuZXNjYXBpbmcgb2YgbmV3IGxpbmVzIGNhbiBiZSBkb25lIHNhZmVseSBvbiBzZXJ2ZXItc2lkZVxuICBkYXRhID0gZGF0YS5yZXBsYWNlKHJFc2NhcGVkTmV3bGluZSwgJ1xcXFxcXG4nKTtcbiAgdGhpcy5hcmVhLnZhbHVlID0gZGF0YS5yZXBsYWNlKHJOZXdsaW5lLCAnXFxcXG4nKTtcblxuICB0cnkge1xuICAgIHRoaXMuZm9ybS5zdWJtaXQoKTtcbiAgfSBjYXRjaCAoZSkge31cblxuICBpZiAodGhpcy5pZnJhbWUuYXR0YWNoRXZlbnQpIHtcbiAgICB0aGlzLmlmcmFtZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5pZnJhbWUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pZnJhbWUub25sb2FkID0gY29tcGxldGU7XG4gIH1cbn07XG4iLCIvKipcbiAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gKi9cblxudmFyIFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG52YXIgUG9sbGluZyA9IHJlcXVpcmUoJy4vcG9sbGluZycpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdjb21wb25lbnQtaW5oZXJpdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nLXhocicpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gWEhSO1xubW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogRW1wdHkgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSAoKSB7fVxuXG4vKipcbiAqIFhIUiBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFhIUiAob3B0cykge1xuICBQb2xsaW5nLmNhbGwodGhpcywgb3B0cyk7XG4gIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBvcHRzLnJlcXVlc3RUaW1lb3V0O1xuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuXG4gIGlmIChnbG9iYWwubG9jYXRpb24pIHtcbiAgICB2YXIgaXNTU0wgPSAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgdGhpcy54ZCA9IG9wdHMuaG9zdG5hbWUgIT09IGdsb2JhbC5sb2NhdGlvbi5ob3N0bmFtZSB8fFxuICAgICAgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgIHRoaXMueHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFBvbGxpbmcuXG4gKi9cblxuaW5oZXJpdChYSFIsIFBvbGxpbmcpO1xuXG4vKipcbiAqIFhIUiBzdXBwb3J0cyBiaW5hcnlcbiAqL1xuXG5YSFIucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5YSFIucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgb3B0cy51cmkgPSB0aGlzLnVyaSgpO1xuICBvcHRzLnhkID0gdGhpcy54ZDtcbiAgb3B0cy54cyA9IHRoaXMueHM7XG4gIG9wdHMuYWdlbnQgPSB0aGlzLmFnZW50IHx8IGZhbHNlO1xuICBvcHRzLnN1cHBvcnRzQmluYXJ5ID0gdGhpcy5zdXBwb3J0c0JpbmFyeTtcbiAgb3B0cy5lbmFibGVzWERSID0gdGhpcy5lbmFibGVzWERSO1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgb3B0cy5yZXF1ZXN0VGltZW91dCA9IHRoaXMucmVxdWVzdFRpbWVvdXQ7XG5cbiAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5leHRyYUhlYWRlcnMgPSB0aGlzLmV4dHJhSGVhZGVycztcblxuICByZXR1cm4gbmV3IFJlcXVlc3Qob3B0cyk7XG59O1xuXG4vKipcbiAqIFNlbmRzIGRhdGEuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5kb1dyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gIHZhciBpc0JpbmFyeSA9IHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyAmJiBkYXRhICE9PSB1bmRlZmluZWQ7XG4gIHZhciByZXEgPSB0aGlzLnJlcXVlc3QoeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSwgaXNCaW5hcnk6IGlzQmluYXJ5IH0pO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJlcS5vbignc3VjY2VzcycsIGZuKTtcbiAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ3hociBwb3N0IGVycm9yJywgZXJyKTtcbiAgfSk7XG4gIHRoaXMuc2VuZFhociA9IHJlcTtcbn07XG5cbi8qKlxuICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5YSFIucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3hociBwb2xsJyk7XG4gIHZhciByZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXEub24oJ2RhdGEnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHNlbGYub25EYXRhKGRhdGEpO1xuICB9KTtcbiAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ3hociBwb2xsIGVycm9yJywgZXJyKTtcbiAgfSk7XG4gIHRoaXMucG9sbFhociA9IHJlcTtcbn07XG5cbi8qKlxuICogUmVxdWVzdCBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3QgKG9wdHMpIHtcbiAgdGhpcy5tZXRob2QgPSBvcHRzLm1ldGhvZCB8fCAnR0VUJztcbiAgdGhpcy51cmkgPSBvcHRzLnVyaTtcbiAgdGhpcy54ZCA9ICEhb3B0cy54ZDtcbiAgdGhpcy54cyA9ICEhb3B0cy54cztcbiAgdGhpcy5hc3luYyA9IGZhbHNlICE9PSBvcHRzLmFzeW5jO1xuICB0aGlzLmRhdGEgPSB1bmRlZmluZWQgIT09IG9wdHMuZGF0YSA/IG9wdHMuZGF0YSA6IG51bGw7XG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50O1xuICB0aGlzLmlzQmluYXJ5ID0gb3B0cy5pc0JpbmFyeTtcbiAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IG9wdHMuc3VwcG9ydHNCaW5hcnk7XG4gIHRoaXMuZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcbiAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG9wdHMucmVxdWVzdFRpbWVvdXQ7XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMucGZ4ID0gb3B0cy5wZng7XG4gIHRoaXMua2V5ID0gb3B0cy5rZXk7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZTtcbiAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0O1xuICB0aGlzLmNhID0gb3B0cy5jYTtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzO1xuICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG5cbiAgdGhpcy5jcmVhdGUoKTtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIFhIUiBvYmplY3QgYW5kIHNlbmRzIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9wdHMgPSB7IGFnZW50OiB0aGlzLmFnZW50LCB4ZG9tYWluOiB0aGlzLnhkLCB4c2NoZW1lOiB0aGlzLnhzLCBlbmFibGVzWERSOiB0aGlzLmVuYWJsZXNYRFIgfTtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgdmFyIHhociA9IHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdHJ5IHtcbiAgICBkZWJ1ZygneGhyIG9wZW4gJXM6ICVzJywgdGhpcy5tZXRob2QsIHRoaXMudXJpKTtcbiAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmksIHRoaXMuYXN5bmMpO1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayAmJiB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrKHRydWUpO1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpLCB0aGlzLmV4dHJhSGVhZGVyc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIGlmICgnUE9TVCcgPT09IHRoaXMubWV0aG9kKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5pc0JpbmFyeSkge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICcqLyonKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgLy8gaWU2IGNoZWNrXG4gICAgaWYgKCd3aXRoQ3JlZGVudGlhbHMnIGluIHhocikge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgIHhoci50aW1lb3V0ID0gdGhpcy5yZXF1ZXN0VGltZW91dDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgICAgICAgICBpZiAoc2VsZi5zdXBwb3J0c0JpbmFyeSAmJiBjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpIHtcbiAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgICBpZiAoNCAhPT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgaWYgKDIwMCA9PT0geGhyLnN0YXR1cyB8fCAxMjIzID09PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IoeGhyLnN0YXR1cyk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVidWcoJ3hociBkYXRhICVzJywgdGhpcy5kYXRhKTtcbiAgICB4aHIuc2VuZCh0aGlzLmRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gTmVlZCB0byBkZWZlciBzaW5jZSAuY3JlYXRlKCkgaXMgY2FsbGVkIGRpcmVjdGx5IGZocm9tIHRoZSBjb25zdHJ1Y3RvclxuICAgIC8vIGFuZCB0aHVzIHRoZSAnZXJyb3InIGV2ZW50IGNhbiBvbmx5IGJlIG9ubHkgYm91bmQgKmFmdGVyKiB0aGlzIGV4Y2VwdGlvblxuICAgIC8vIG9jY3Vycy4gIFRoZXJlZm9yZSwgYWxzbywgd2UgY2Fubm90IHRocm93IGhlcmUgYXQgYWxsLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgIH0sIDApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICB0aGlzLmluZGV4ID0gUmVxdWVzdC5yZXF1ZXN0c0NvdW50Kys7XG4gICAgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XSA9IHRoaXM7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdCgnc3VjY2VzcycpO1xuICB0aGlzLmNsZWFudXAoKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIGlmIHdlIGhhdmUgZGF0YS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmVtaXQoJ2RhdGEnLCBkYXRhKTtcbiAgdGhpcy5vblN1Y2Nlc3MoKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHRoaXMuY2xlYW51cCh0cnVlKTtcbn07XG5cbi8qKlxuICogQ2xlYW5zIHVwIGhvdXNlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoZnJvbUVycm9yKSB7XG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHRoaXMueGhyIHx8IG51bGwgPT09IHRoaXMueGhyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHhtbGh0dHByZXF1ZXN0XG4gIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgdGhpcy54aHIub25sb2FkID0gdGhpcy54aHIub25lcnJvciA9IGVtcHR5O1xuICB9IGVsc2Uge1xuICAgIHRoaXMueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5O1xuICB9XG5cbiAgaWYgKGZyb21FcnJvcikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnhoci5hYm9ydCgpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBpZiAoZ2xvYmFsLmRvY3VtZW50KSB7XG4gICAgZGVsZXRlIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF07XG4gIH1cblxuICB0aGlzLnhociA9IG51bGw7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGxvYWQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICB2YXIgY29udGVudFR5cGU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnRlbnRUeXBlID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgaWYgKGNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJykge1xuICAgICAgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlIHx8IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLm9uRXJyb3IoZSk7XG4gIH1cbiAgaWYgKG51bGwgIT0gZGF0YSkge1xuICAgIHRoaXMub25EYXRhKGRhdGEpO1xuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGl0IGhhcyBYRG9tYWluUmVxdWVzdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5oYXNYRFIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGdsb2JhbC5YRG9tYWluUmVxdWVzdCAmJiAhdGhpcy54cyAmJiB0aGlzLmVuYWJsZXNYRFI7XG59O1xuXG4vKipcbiAqIEFib3J0cyB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFudXAoKTtcbn07XG5cbi8qKlxuICogQWJvcnRzIHBlbmRpbmcgcmVxdWVzdHMgd2hlbiB1bmxvYWRpbmcgdGhlIHdpbmRvdy4gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudFxuICogbWVtb3J5IGxlYWtzIChlLmcuIHdoZW4gdXNpbmcgSUUpIGFuZCB0byBlbnN1cmUgdGhhdCBubyBzcHVyaW91cyBlcnJvciBpc1xuICogZW1pdHRlZC5cbiAqL1xuXG5SZXF1ZXN0LnJlcXVlc3RzQ291bnQgPSAwO1xuUmVxdWVzdC5yZXF1ZXN0cyA9IHt9O1xuXG5pZiAoZ2xvYmFsLmRvY3VtZW50KSB7XG4gIGlmIChnbG9iYWwuYXR0YWNoRXZlbnQpIHtcbiAgICBnbG9iYWwuYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgdW5sb2FkSGFuZGxlcik7XG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubG9hZEhhbmRsZXIgKCkge1xuICBmb3IgKHZhciBpIGluIFJlcXVlc3QucmVxdWVzdHMpIHtcbiAgICBpZiAoUmVxdWVzdC5yZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1tpXS5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBUcmFuc3BvcnQgPSByZXF1aXJlKCcuLi90cmFuc3BvcnQnKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciB5ZWFzdCA9IHJlcXVpcmUoJ3llYXN0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGxpbmc7XG5cbi8qKlxuICogSXMgWEhSMiBzdXBwb3J0ZWQ/XG4gKi9cblxudmFyIGhhc1hIUjIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh7IHhkb21haW46IGZhbHNlIH0pO1xuICByZXR1cm4gbnVsbCAhPSB4aHIucmVzcG9uc2VUeXBlO1xufSkoKTtcblxuLyoqXG4gKiBQb2xsaW5nIGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUG9sbGluZyAob3B0cykge1xuICB2YXIgZm9yY2VCYXNlNjQgPSAob3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0KTtcbiAgaWYgKCFoYXNYSFIyIHx8IGZvcmNlQmFzZTY0KSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG4gIFRyYW5zcG9ydC5jYWxsKHRoaXMsIG9wdHMpO1xufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gVHJhbnNwb3J0LlxuICovXG5cbmluaGVyaXQoUG9sbGluZywgVHJhbnNwb3J0KTtcblxuLyoqXG4gKiBUcmFuc3BvcnQgbmFtZS5cbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5uYW1lID0gJ3BvbGxpbmcnO1xuXG4vKipcbiAqIE9wZW5zIHRoZSBzb2NrZXQgKHRyaWdnZXJzIHBvbGxpbmcpLiBXZSB3cml0ZSBhIFBJTkcgbWVzc2FnZSB0byBkZXRlcm1pbmVcbiAqIHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBvcGVuLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLmRvT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wb2xsKCk7XG59O1xuXG4vKipcbiAqIFBhdXNlcyBwb2xsaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHVwb24gYnVmZmVycyBhcmUgZmx1c2hlZCBhbmQgdHJhbnNwb3J0IGlzIHBhdXNlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAob25QYXVzZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy5yZWFkeVN0YXRlID0gJ3BhdXNpbmcnO1xuXG4gIGZ1bmN0aW9uIHBhdXNlICgpIHtcbiAgICBkZWJ1ZygncGF1c2VkJyk7XG4gICAgc2VsZi5yZWFkeVN0YXRlID0gJ3BhdXNlZCc7XG4gICAgb25QYXVzZSgpO1xuICB9XG5cbiAgaWYgKHRoaXMucG9sbGluZyB8fCAhdGhpcy53cml0YWJsZSkge1xuICAgIHZhciB0b3RhbCA9IDA7XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nKSB7XG4gICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgdG90YWwrKztcbiAgICAgIHRoaXMub25jZSgncG9sbENvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWJ1ZygncHJlLXBhdXNlIHBvbGxpbmcgY29tcGxldGUnKTtcbiAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLndyaXRhYmxlKSB7XG4gICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSB3cml0aW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgdG90YWwrKztcbiAgICAgIHRoaXMub25jZSgnZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlYnVnKCdwcmUtcGF1c2Ugd3JpdGluZyBjb21wbGV0ZScpO1xuICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGF1c2UoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGFydHMgcG9sbGluZyBjeWNsZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblBvbGxpbmcucHJvdG90eXBlLnBvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdwb2xsaW5nJyk7XG4gIHRoaXMucG9sbGluZyA9IHRydWU7XG4gIHRoaXMuZG9Qb2xsKCk7XG4gIHRoaXMuZW1pdCgncG9sbCcpO1xufTtcblxuLyoqXG4gKiBPdmVybG9hZHMgb25EYXRhIHRvIGRldGVjdCBwYXlsb2Fkcy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGRlYnVnKCdwb2xsaW5nIGdvdCBkYXRhICVzJywgZGF0YSk7XG4gIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChwYWNrZXQsIGluZGV4LCB0b3RhbCkge1xuICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICBpZiAoJ29wZW5pbmcnID09PSBzZWxmLnJlYWR5U3RhdGUpIHtcbiAgICAgIHNlbGYub25PcGVuKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgaXRzIGEgY2xvc2UgcGFja2V0LCB3ZSBjbG9zZSB0aGUgb25nb2luZyByZXF1ZXN0c1xuICAgIGlmICgnY2xvc2UnID09PSBwYWNrZXQudHlwZSkge1xuICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlIGJ5cGFzcyBvbkRhdGEgYW5kIGhhbmRsZSB0aGUgbWVzc2FnZVxuICAgIHNlbGYub25QYWNrZXQocGFja2V0KTtcbiAgfTtcblxuICAvLyBkZWNvZGUgcGF5bG9hZFxuICBwYXJzZXIuZGVjb2RlUGF5bG9hZChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlLCBjYWxsYmFjayk7XG5cbiAgLy8gaWYgYW4gZXZlbnQgZGlkIG5vdCB0cmlnZ2VyIGNsb3NpbmdcbiAgaWYgKCdjbG9zZWQnICE9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBpZiB3ZSBnb3QgZGF0YSB3ZSdyZSBub3QgcG9sbGluZ1xuICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncG9sbENvbXBsZXRlJyk7XG5cbiAgICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucG9sbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygnaWdub3JpbmcgcG9sbCAtIHRyYW5zcG9ydCBzdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBGb3IgcG9sbGluZywgc2VuZCBhIGNsb3NlIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gY2xvc2UgKCkge1xuICAgIGRlYnVnKCd3cml0aW5nIGNsb3NlIHBhY2tldCcpO1xuICAgIHNlbGYud3JpdGUoW3sgdHlwZTogJ2Nsb3NlJyB9XSk7XG4gIH1cblxuICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1ZygndHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nJyk7XG4gICAgY2xvc2UoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgZGVidWcoJ3RyYW5zcG9ydCBub3Qgb3BlbiAtIGRlZmVycmluZyBjbG9zZScpO1xuICAgIHRoaXMub25jZSgnb3BlbicsIGNsb3NlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgdmFyIGNhbGxiYWNrZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgc2VsZi5lbWl0KCdkcmFpbicpO1xuICB9O1xuXG4gIHBhcnNlci5lbmNvZGVQYXlsb2FkKHBhY2tldHMsIHRoaXMuc3VwcG9ydHNCaW5hcnksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgc2VsZi5kb1dyaXRlKGRhdGEsIGNhbGxiYWNrZm4pO1xuICB9KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS51cmkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gIHZhciBzY2hlbWEgPSB0aGlzLnNlY3VyZSA/ICdodHRwcycgOiAnaHR0cCc7XG4gIHZhciBwb3J0ID0gJyc7XG5cbiAgLy8gY2FjaGUgYnVzdGluZyBpcyBmb3JjZWRcbiAgaWYgKGZhbHNlICE9PSB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgcXVlcnlbdGhpcy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICB9XG5cbiAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmICFxdWVyeS5zaWQpIHtcbiAgICBxdWVyeS5iNjQgPSAxO1xuICB9XG5cbiAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgaWYgKHRoaXMucG9ydCAmJiAoKCdodHRwcycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAoJ2h0dHAnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDgwKSkpIHtcbiAgICBwb3J0ID0gJzonICsgdGhpcy5wb3J0O1xuICB9XG5cbiAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgdmFyIGlwdjYgPSB0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHJldHVybiBzY2hlbWEgKyAnOi8vJyArIChpcHY2ID8gJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyA6IHRoaXMuaG9zdG5hbWUpICsgcG9ydCArIHRoaXMucGF0aCArIHF1ZXJ5O1xufTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi4vdHJhbnNwb3J0Jyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgeWVhc3QgPSByZXF1aXJlKCd5ZWFzdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDp3ZWJzb2NrZXQnKTtcbnZhciBCcm93c2VyV2ViU29ja2V0ID0gZ2xvYmFsLldlYlNvY2tldCB8fCBnbG9iYWwuTW96V2ViU29ja2V0O1xudmFyIE5vZGVXZWJTb2NrZXQ7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdHJ5IHtcbiAgICBOb2RlV2ViU29ja2V0ID0gcmVxdWlyZSgnd3MnKTtcbiAgfSBjYXRjaCAoZSkgeyB9XG59XG5cbi8qKlxuICogR2V0IGVpdGhlciB0aGUgYFdlYlNvY2tldGAgb3IgYE1veldlYlNvY2tldGAgZ2xvYmFsc1xuICogaW4gdGhlIGJyb3dzZXIgb3IgdHJ5IHRvIHJlc29sdmUgV2ViU29ja2V0LWNvbXBhdGlibGVcbiAqIGludGVyZmFjZSBleHBvc2VkIGJ5IGB3c2AgZm9yIE5vZGUtbGlrZSBlbnZpcm9ubWVudC5cbiAqL1xuXG52YXIgV2ViU29ja2V0ID0gQnJvd3NlcldlYlNvY2tldDtcbmlmICghV2ViU29ja2V0ICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIFdlYlNvY2tldCA9IE5vZGVXZWJTb2NrZXQ7XG59XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBXUztcblxuLyoqXG4gKiBXZWJTb2NrZXQgdHJhbnNwb3J0IGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkge09iamVjdH0gY29ubmVjdGlvbiBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFdTIChvcHRzKSB7XG4gIHZhciBmb3JjZUJhc2U2NCA9IChvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQpO1xuICBpZiAoZm9yY2VCYXNlNjQpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IG9wdHMucGVyTWVzc2FnZURlZmxhdGU7XG4gIHRoaXMudXNpbmdCcm93c2VyV2ViU29ja2V0ID0gQnJvd3NlcldlYlNvY2tldCAmJiAhb3B0cy5mb3JjZU5vZGU7XG4gIHRoaXMucHJvdG9jb2xzID0gb3B0cy5wcm90b2NvbHM7XG4gIGlmICghdGhpcy51c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICBXZWJTb2NrZXQgPSBOb2RlV2ViU29ja2V0O1xuICB9XG4gIFRyYW5zcG9ydC5jYWxsKHRoaXMsIG9wdHMpO1xufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gVHJhbnNwb3J0LlxuICovXG5cbmluaGVyaXQoV1MsIFRyYW5zcG9ydCk7XG5cbi8qKlxuICogVHJhbnNwb3J0IG5hbWUuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5XUy5wcm90b3R5cGUubmFtZSA9ICd3ZWJzb2NrZXQnO1xuXG4vKlxuICogV2ViU29ja2V0cyBzdXBwb3J0IGJpbmFyeVxuICovXG5cbldTLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG5cbi8qKlxuICogT3BlbnMgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5kb09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdXJpID0gdGhpcy51cmkoKTtcbiAgdmFyIHByb3RvY29scyA9IHRoaXMucHJvdG9jb2xzO1xuICB2YXIgb3B0cyA9IHtcbiAgICBhZ2VudDogdGhpcy5hZ2VudCxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZVxuICB9O1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgb3B0cy5oZWFkZXJzID0gdGhpcy5leHRyYUhlYWRlcnM7XG4gIH1cbiAgaWYgKHRoaXMubG9jYWxBZGRyZXNzKSB7XG4gICAgb3B0cy5sb2NhbEFkZHJlc3MgPSB0aGlzLmxvY2FsQWRkcmVzcztcbiAgfVxuXG4gIHRyeSB7XG4gICAgdGhpcy53cyA9IHRoaXMudXNpbmdCcm93c2VyV2ViU29ja2V0ID8gKHByb3RvY29scyA/IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMpIDogbmV3IFdlYlNvY2tldCh1cmkpKSA6IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMsIG9wdHMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cblxuICBpZiAodGhpcy53cy5iaW5hcnlUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy53cy5zdXBwb3J0cyAmJiB0aGlzLndzLnN1cHBvcnRzLmJpbmFyeSkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdub2RlYnVmZmVyJztcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICB9XG5cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xufTtcblxuLyoqXG4gKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc29ja2V0XG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy53cy5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbk9wZW4oKTtcbiAgfTtcbiAgdGhpcy53cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25DbG9zZSgpO1xuICB9O1xuICB0aGlzLndzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldikge1xuICAgIHNlbGYub25EYXRhKGV2LmRhdGEpO1xuICB9O1xuICB0aGlzLndzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHNlbGYub25FcnJvcignd2Vic29ja2V0IGVycm9yJywgZSk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyaXRlcyBkYXRhIHRvIHNvY2tldC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBvZiBwYWNrZXRzLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgLy8gZW5jb2RlUGFja2V0IGVmZmljaWVudCBhcyBpdCB1c2VzIFdTIGZyYW1pbmdcbiAgLy8gbm8gbmVlZCBmb3IgZW5jb2RlUGF5bG9hZFxuICB2YXIgdG90YWwgPSBwYWNrZXRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b3RhbDsgaSA8IGw7IGkrKykge1xuICAgIChmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgICBwYXJzZXIuZW5jb2RlUGFja2V0KHBhY2tldCwgc2VsZi5zdXBwb3J0c0JpbmFyeSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKCFzZWxmLnVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgIC8vIGFsd2F5cyBjcmVhdGUgYSBuZXcgb2JqZWN0IChHSC00MzcpXG4gICAgICAgICAgdmFyIG9wdHMgPSB7fTtcbiAgICAgICAgICBpZiAocGFja2V0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBwYWNrZXQub3B0aW9ucy5jb21wcmVzcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZi5wZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICAgICAgdmFyIGxlbiA9ICdzdHJpbmcnID09PSB0eXBlb2YgZGF0YSA/IGdsb2JhbC5CdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA8IHNlbGYucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb21ldGltZXMgdGhlIHdlYnNvY2tldCBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZCBidXQgdGhlIGJyb3dzZXIgZGlkbid0XG4gICAgICAgIC8vIGhhdmUgYSBjaGFuY2Ugb2YgaW5mb3JtaW5nIHVzIGFib3V0IGl0IHlldCwgaW4gdGhhdCBjYXNlIHNlbmQgd2lsbFxuICAgICAgICAvLyB0aHJvdyBhbiBlcnJvclxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChzZWxmLnVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgLy8gVHlwZUVycm9yIGlzIHRocm93biB3aGVuIHBhc3NpbmcgdGhlIHNlY29uZCBhcmd1bWVudCBvbiBTYWZhcmlcbiAgICAgICAgICAgIHNlbGYud3Muc2VuZChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi53cy5zZW5kKGRhdGEsIG9wdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGRlYnVnKCd3ZWJzb2NrZXQgY2xvc2VkIGJlZm9yZSBvbmNsb3NlIGV2ZW50Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAtLXRvdGFsIHx8IGRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH0pKHBhY2tldHNbaV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9uZSAoKSB7XG4gICAgc2VsZi5lbWl0KCdmbHVzaCcpO1xuXG4gICAgLy8gZmFrZSBkcmFpblxuICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYud3JpdGFibGUgPSB0cnVlO1xuICAgICAgc2VsZi5lbWl0KCdkcmFpbicpO1xuICAgIH0sIDApO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGNsb3NlXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIFRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHRoaXMud3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy53cy5jbG9zZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLnVyaSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgdmFyIHNjaGVtYSA9IHRoaXMuc2VjdXJlID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgcG9ydCA9ICcnO1xuXG4gIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gIGlmICh0aGlzLnBvcnQgJiYgKCgnd3NzJyA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgKCd3cycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gODApKSkge1xuICAgIHBvcnQgPSAnOicgKyB0aGlzLnBvcnQ7XG4gIH1cblxuICAvLyBhcHBlbmQgdGltZXN0YW1wIHRvIFVSSVxuICBpZiAodGhpcy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgIHF1ZXJ5W3RoaXMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgfVxuXG4gIC8vIGNvbW11bmljYXRlIGJpbmFyeSBzdXBwb3J0IGNhcGFiaWxpdGllc1xuICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICBxdWVyeS5iNjQgPSAxO1xuICB9XG5cbiAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgdmFyIGlwdjYgPSB0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHJldHVybiBzY2hlbWEgKyAnOi8vJyArIChpcHY2ID8gJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyA6IHRoaXMuaG9zdG5hbWUpICsgcG9ydCArIHRoaXMucGF0aCArIHF1ZXJ5O1xufTtcblxuLyoqXG4gKiBGZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViU29ja2V0LlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgdGhpcyB0cmFuc3BvcnQgaXMgYXZhaWxhYmxlLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5XUy5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIVdlYlNvY2tldCAmJiAhKCdfX2luaXRpYWxpemUnIGluIFdlYlNvY2tldCAmJiB0aGlzLm5hbWUgPT09IFdTLnByb3RvdHlwZS5uYW1lKTtcbn07XG4iLCIvLyBicm93c2VyIHNoaW0gZm9yIHhtbGh0dHByZXF1ZXN0IG1vZHVsZVxuXG52YXIgaGFzQ09SUyA9IHJlcXVpcmUoJ2hhcy1jb3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIHhkb21haW4gPSBvcHRzLnhkb21haW47XG5cbiAgLy8gc2NoZW1lIG11c3QgYmUgc2FtZSB3aGVuIHVzaWduIFhEb21haW5SZXF1ZXN0XG4gIC8vIGh0dHA6Ly9ibG9ncy5tc2RuLmNvbS9iL2llaW50ZXJuYWxzL2FyY2hpdmUvMjAxMC8wNS8xMy94ZG9tYWlucmVxdWVzdC1yZXN0cmljdGlvbnMtbGltaXRhdGlvbnMtYW5kLXdvcmthcm91bmRzLmFzcHhcbiAgdmFyIHhzY2hlbWUgPSBvcHRzLnhzY2hlbWU7XG5cbiAgLy8gWERvbWFpblJlcXVlc3QgaGFzIGEgZmxvdyBvZiBub3Qgc2VuZGluZyBjb29raWUsIHRoZXJlZm9yZSBpdCBzaG91bGQgYmUgZGlzYWJsZWQgYXMgYSBkZWZhdWx0LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9lbmdpbmUuaW8tY2xpZW50L3B1bGwvMjE3XG4gIHZhciBlbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gIC8vIFhNTEh0dHBSZXF1ZXN0IGNhbiBiZSBkaXNhYmxlZCBvbiBJRVxuICB0cnkge1xuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICYmICgheGRvbWFpbiB8fCBoYXNDT1JTKSkge1xuICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgLy8gVXNlIFhEb21haW5SZXF1ZXN0IGZvciBJRTggaWYgZW5hYmxlc1hEUiBpcyB0cnVlXG4gIC8vIGJlY2F1c2UgbG9hZGluZyBiYXIga2VlcHMgZmxhc2hpbmcgd2hlbiB1c2luZyBqc29ucC1wb2xsaW5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95dWppb3Nha2Evc29ja2UuaW8taWU4LWxvYWRpbmctZXhhbXBsZVxuICB0cnkge1xuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICYmICF4c2NoZW1lICYmIGVuYWJsZXNYRFIpIHtcbiAgICAgIHJldHVybiBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuXG4gIGlmICgheGRvbWFpbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IGdsb2JhbFtbJ0FjdGl2ZSddLmNvbmNhdCgnT2JqZWN0Jykuam9pbignWCcpXSgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfVxufTtcbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VzID0gW107XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIHZhciBwcmV2VGltZTtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdmFyIGluZGV4ID0gZXhwb3J0cy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGV4cG9ydHMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIGk7XG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleHBvcnRzLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnN0YW5jZSA9IGV4cG9ydHMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcbnZhciBoYXNCaW5hcnkgPSByZXF1aXJlKCdoYXMtYmluYXJ5MicpO1xudmFyIHNsaWNlQnVmZmVyID0gcmVxdWlyZSgnYXJyYXlidWZmZXIuc2xpY2UnKTtcbnZhciBhZnRlciA9IHJlcXVpcmUoJ2FmdGVyJyk7XG52YXIgdXRmOCA9IHJlcXVpcmUoJy4vdXRmOCcpO1xuXG52YXIgYmFzZTY0ZW5jb2RlcjtcbmlmIChnbG9iYWwgJiYgZ2xvYmFsLkFycmF5QnVmZmVyKSB7XG4gIGJhc2U2NGVuY29kZXIgPSByZXF1aXJlKCdiYXNlNjQtYXJyYXlidWZmZXInKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB3ZSBhcmUgcnVubmluZyBhbiBhbmRyb2lkIGJyb3dzZXIuIFRoYXQgcmVxdWlyZXMgdXMgdG8gdXNlXG4gKiBBcnJheUJ1ZmZlciB3aXRoIHBvbGxpbmcgdHJhbnNwb3J0cy4uLlxuICpcbiAqIGh0dHA6Ly9naGluZGEubmV0L2pwZWctYmxvYi1hamF4LWFuZHJvaWQvXG4gKi9cblxudmFyIGlzQW5kcm9pZCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9BbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBDaGVjayBpZiB3ZSBhcmUgcnVubmluZyBpbiBQaGFudG9tSlMuXG4gKiBVcGxvYWRpbmcgYSBCbG9iIHdpdGggUGhhbnRvbUpTIGRvZXMgbm90IHdvcmsgY29ycmVjdGx5LCBhcyByZXBvcnRlZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2FyaXlhL3BoYW50b21qcy9pc3N1ZXMvMTEzOTVcbiAqIEB0eXBlIGJvb2xlYW5cbiAqL1xudmFyIGlzUGhhbnRvbUpTID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL1BoYW50b21KUy9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogV2hlbiB0cnVlLCBhdm9pZHMgdXNpbmcgQmxvYnMgdG8gZW5jb2RlIHBheWxvYWRzLlxuICogQHR5cGUgYm9vbGVhblxuICovXG52YXIgZG9udFNlbmRCbG9icyA9IGlzQW5kcm9pZCB8fCBpc1BoYW50b21KUztcblxuLyoqXG4gKiBDdXJyZW50IHByb3RvY29sIHZlcnNpb24uXG4gKi9cblxuZXhwb3J0cy5wcm90b2NvbCA9IDM7XG5cbi8qKlxuICogUGFja2V0IHR5cGVzLlxuICovXG5cbnZhciBwYWNrZXRzID0gZXhwb3J0cy5wYWNrZXRzID0ge1xuICAgIG9wZW46ICAgICAwICAgIC8vIG5vbi13c1xuICAsIGNsb3NlOiAgICAxICAgIC8vIG5vbi13c1xuICAsIHBpbmc6ICAgICAyXG4gICwgcG9uZzogICAgIDNcbiAgLCBtZXNzYWdlOiAgNFxuICAsIHVwZ3JhZGU6ICA1XG4gICwgbm9vcDogICAgIDZcbn07XG5cbnZhciBwYWNrZXRzbGlzdCA9IGtleXMocGFja2V0cyk7XG5cbi8qKlxuICogUHJlbWFkZSBlcnJvciBwYWNrZXQuXG4gKi9cblxudmFyIGVyciA9IHsgdHlwZTogJ2Vycm9yJywgZGF0YTogJ3BhcnNlciBlcnJvcicgfTtcblxuLyoqXG4gKiBDcmVhdGUgYSBibG9iIGFwaSBldmVuIGZvciBibG9iIGJ1aWxkZXIgd2hlbiB2ZW5kb3IgcHJlZml4ZXMgZXhpc3RcbiAqL1xuXG52YXIgQmxvYiA9IHJlcXVpcmUoJ2Jsb2InKTtcblxuLyoqXG4gKiBFbmNvZGVzIGEgcGFja2V0LlxuICpcbiAqICAgICA8cGFja2V0IHR5cGUgaWQ+IFsgPGRhdGE+IF1cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICA1aGVsbG8gd29ybGRcbiAqICAgICAzXG4gKiAgICAgNFxuICpcbiAqIEJpbmFyeSBpcyBlbmNvZGVkIGluIGFuIGlkZW50aWNhbCBwcmluY2lwbGVcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCB1dGY4ZW5jb2RlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQmluYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBzdXBwb3J0c0JpbmFyeTtcbiAgICBzdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB1dGY4ZW5jb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSB1dGY4ZW5jb2RlO1xuICAgIHV0ZjhlbmNvZGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIGRhdGEgPSAocGFja2V0LmRhdGEgPT09IHVuZGVmaW5lZClcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogcGFja2V0LmRhdGEuYnVmZmVyIHx8IHBhY2tldC5kYXRhO1xuXG4gIGlmIChnbG9iYWwuQXJyYXlCdWZmZXIgJiYgZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfSBlbHNlIGlmIChCbG9iICYmIGRhdGEgaW5zdGFuY2VvZiBnbG9iYWwuQmxvYikge1xuICAgIHJldHVybiBlbmNvZGVCbG9iKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8vIG1pZ2h0IGJlIGFuIG9iamVjdCB3aXRoIHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBkYXRhQXNCYXNlNjRTdHJpbmcgfVxuICBpZiAoZGF0YSAmJiBkYXRhLmJhc2U2NCkge1xuICAgIHJldHVybiBlbmNvZGVCYXNlNjRPYmplY3QocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICAvLyBTZW5kaW5nIGRhdGEgYXMgYSB1dGYtOCBzdHJpbmdcbiAgdmFyIGVuY29kZWQgPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcblxuICAvLyBkYXRhIGZyYWdtZW50IGlzIG9wdGlvbmFsXG4gIGlmICh1bmRlZmluZWQgIT09IHBhY2tldC5kYXRhKSB7XG4gICAgZW5jb2RlZCArPSB1dGY4ZW5jb2RlID8gdXRmOC5lbmNvZGUoU3RyaW5nKHBhY2tldC5kYXRhKSwgeyBzdHJpY3Q6IGZhbHNlIH0pIDogU3RyaW5nKHBhY2tldC5kYXRhKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjaygnJyArIGVuY29kZWQpO1xuXG59O1xuXG5mdW5jdGlvbiBlbmNvZGVCYXNlNjRPYmplY3QocGFja2V0LCBjYWxsYmFjaykge1xuICAvLyBwYWNrZXQgZGF0YSBpcyBhbiBvYmplY3QgeyBiYXNlNjQ6IHRydWUsIGRhdGE6IGRhdGFBc0Jhc2U2NFN0cmluZyB9XG4gIHZhciBtZXNzYWdlID0gJ2InICsgZXhwb3J0cy5wYWNrZXRzW3BhY2tldC50eXBlXSArIHBhY2tldC5kYXRhLmRhdGE7XG4gIHJldHVybiBjYWxsYmFjayhtZXNzYWdlKTtcbn1cblxuLyoqXG4gKiBFbmNvZGUgcGFja2V0IGhlbHBlcnMgZm9yIGJpbmFyeSB0eXBlc1xuICovXG5cbmZ1bmN0aW9uIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgZGF0YSA9IHBhY2tldC5kYXRhO1xuICB2YXIgY29udGVudEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIHZhciByZXN1bHRCdWZmZXIgPSBuZXcgVWludDhBcnJheSgxICsgZGF0YS5ieXRlTGVuZ3RoKTtcblxuICByZXN1bHRCdWZmZXJbMF0gPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRCdWZmZXJbaSsxXSA9IGNvbnRlbnRBcnJheVtpXTtcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjayhyZXN1bHRCdWZmZXIuYnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIGZyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHBhY2tldC5kYXRhID0gZnIucmVzdWx0O1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIHRydWUsIGNhbGxiYWNrKTtcbiAgfTtcbiAgcmV0dXJuIGZyLnJlYWRBc0FycmF5QnVmZmVyKHBhY2tldC5kYXRhKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlQmxvYihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKGRvbnRTZW5kQmxvYnMpIHtcbiAgICByZXR1cm4gZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICBsZW5ndGhbMF0gPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgdmFyIGJsb2IgPSBuZXcgQmxvYihbbGVuZ3RoLmJ1ZmZlciwgcGFja2V0LmRhdGFdKTtcblxuICByZXR1cm4gY2FsbGJhY2soYmxvYik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBhIHBhY2tldCB3aXRoIGJpbmFyeSBkYXRhIGluIGEgYmFzZTY0IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQsIGhhcyBgdHlwZWAgYW5kIGBkYXRhYFxuICogQHJldHVybiB7U3RyaW5nfSBiYXNlNjQgZW5jb2RlZCBtZXNzYWdlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQsIGNhbGxiYWNrKSB7XG4gIHZhciBtZXNzYWdlID0gJ2InICsgZXhwb3J0cy5wYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgaWYgKEJsb2IgJiYgcGFja2V0LmRhdGEgaW5zdGFuY2VvZiBnbG9iYWwuQmxvYikge1xuICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgZnIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYjY0ID0gZnIucmVzdWx0LnNwbGl0KCcsJylbMV07XG4gICAgICBjYWxsYmFjayhtZXNzYWdlICsgYjY0KTtcbiAgICB9O1xuICAgIHJldHVybiBmci5yZWFkQXNEYXRhVVJMKHBhY2tldC5kYXRhKTtcbiAgfVxuXG4gIHZhciBiNjRkYXRhO1xuICB0cnkge1xuICAgIGI2NGRhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KHBhY2tldC5kYXRhKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpUGhvbmUgU2FmYXJpIGRvZXNuJ3QgbGV0IHlvdSBhcHBseSB3aXRoIHR5cGVkIGFycmF5c1xuICAgIHZhciB0eXBlZCA9IG5ldyBVaW50OEFycmF5KHBhY2tldC5kYXRhKTtcbiAgICB2YXIgYmFzaWMgPSBuZXcgQXJyYXkodHlwZWQubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBiYXNpY1tpXSA9IHR5cGVkW2ldO1xuICAgIH1cbiAgICBiNjRkYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBiYXNpYyk7XG4gIH1cbiAgbWVzc2FnZSArPSBnbG9iYWwuYnRvYShiNjRkYXRhKTtcbiAgcmV0dXJuIGNhbGxiYWNrKG1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiBEZWNvZGVzIGEgcGFja2V0LiBDaGFuZ2VzIGZvcm1hdCB0byBCbG9iIGlmIHJlcXVlc3RlZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggYHR5cGVgIGFuZCBgZGF0YWAgKGlmIGFueSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZGVjb2RlUGFja2V0ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIHV0ZjhkZWNvZGUpIHtcbiAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlcnI7XG4gIH1cbiAgLy8gU3RyaW5nIGRhdGFcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIGlmIChkYXRhLmNoYXJBdCgwKSA9PT0gJ2InKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZWNvZGVCYXNlNjRQYWNrZXQoZGF0YS5zdWJzdHIoMSksIGJpbmFyeVR5cGUpO1xuICAgIH1cblxuICAgIGlmICh1dGY4ZGVjb2RlKSB7XG4gICAgICBkYXRhID0gdHJ5RGVjb2RlKGRhdGEpO1xuICAgICAgaWYgKGRhdGEgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB0eXBlID0gZGF0YS5jaGFyQXQoMCk7XG5cbiAgICBpZiAoTnVtYmVyKHR5cGUpICE9IHR5cGUgfHwgIXBhY2tldHNsaXN0W3R5cGVdKSB7XG4gICAgICByZXR1cm4gZXJyO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdLCBkYXRhOiBkYXRhLnN1YnN0cmluZygxKSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBhc0FycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIHZhciB0eXBlID0gYXNBcnJheVswXTtcbiAgdmFyIHJlc3QgPSBzbGljZUJ1ZmZlcihkYXRhLCAxKTtcbiAgaWYgKEJsb2IgJiYgYmluYXJ5VHlwZSA9PT0gJ2Jsb2InKSB7XG4gICAgcmVzdCA9IG5ldyBCbG9iKFtyZXN0XSk7XG4gIH1cbiAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0sIGRhdGE6IHJlc3QgfTtcbn07XG5cbmZ1bmN0aW9uIHRyeURlY29kZShkYXRhKSB7XG4gIHRyeSB7XG4gICAgZGF0YSA9IHV0ZjguZGVjb2RlKGRhdGEsIHsgc3RyaWN0OiBmYWxzZSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBEZWNvZGVzIGEgcGFja2V0IGVuY29kZWQgaW4gYSBiYXNlNjQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGJhc2U2NCBlbmNvZGVkIG1lc3NhZ2VcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBgdHlwZWAgYW5kIGBkYXRhYCAoaWYgYW55KVxuICovXG5cbmV4cG9ydHMuZGVjb2RlQmFzZTY0UGFja2V0ID0gZnVuY3Rpb24obXNnLCBiaW5hcnlUeXBlKSB7XG4gIHZhciB0eXBlID0gcGFja2V0c2xpc3RbbXNnLmNoYXJBdCgwKV07XG4gIGlmICghYmFzZTY0ZW5jb2Rlcikge1xuICAgIHJldHVybiB7IHR5cGU6IHR5cGUsIGRhdGE6IHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBtc2cuc3Vic3RyKDEpIH0gfTtcbiAgfVxuXG4gIHZhciBkYXRhID0gYmFzZTY0ZW5jb2Rlci5kZWNvZGUobXNnLnN1YnN0cigxKSk7XG5cbiAgaWYgKGJpbmFyeVR5cGUgPT09ICdibG9iJyAmJiBCbG9iKSB7XG4gICAgZGF0YSA9IG5ldyBCbG9iKFtkYXRhXSk7XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBkYXRhOiBkYXRhIH07XG59O1xuXG4vKipcbiAqIEVuY29kZXMgbXVsdGlwbGUgbWVzc2FnZXMgKHBheWxvYWQpLlxuICpcbiAqICAgICA8bGVuZ3RoPjpkYXRhXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgMTE6aGVsbG8gd29ybGQyOmhpXG4gKlxuICogSWYgYW55IGNvbnRlbnRzIGFyZSBiaW5hcnksIHRoZXkgd2lsbCBiZSBlbmNvZGVkIGFzIGJhc2U2NCBzdHJpbmdzLiBCYXNlNjRcbiAqIGVuY29kZWQgc3RyaW5ncyBhcmUgbWFya2VkIHdpdGggYSBiIGJlZm9yZSB0aGUgbGVuZ3RoIHNwZWNpZmllclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZCA9IGZ1bmN0aW9uIChwYWNrZXRzLCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0JpbmFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgc3VwcG9ydHNCaW5hcnkgPSBudWxsO1xuICB9XG5cbiAgdmFyIGlzQmluYXJ5ID0gaGFzQmluYXJ5KHBhY2tldHMpO1xuXG4gIGlmIChzdXBwb3J0c0JpbmFyeSAmJiBpc0JpbmFyeSkge1xuICAgIGlmIChCbG9iICYmICFkb250U2VuZEJsb2JzKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iKHBhY2tldHMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNBcnJheUJ1ZmZlcihwYWNrZXRzLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCcwOicpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TGVuZ3RoSGVhZGVyKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbWVzc2FnZS5sZW5ndGggKyAnOicgKyBtZXNzYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCAhaXNCaW5hcnkgPyBmYWxzZSA6IHN1cHBvcnRzQmluYXJ5LCBmYWxzZSwgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgZG9uZUNhbGxiYWNrKG51bGwsIHNldExlbmd0aEhlYWRlcihtZXNzYWdlKSk7XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0cy5qb2luKCcnKSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBBc3luYyBhcnJheSBtYXAgdXNpbmcgYWZ0ZXJcbiAqL1xuXG5mdW5jdGlvbiBtYXAoYXJ5LCBlYWNoLCBkb25lKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoYXJ5Lmxlbmd0aCk7XG4gIHZhciBuZXh0ID0gYWZ0ZXIoYXJ5Lmxlbmd0aCwgZG9uZSk7XG5cbiAgdmFyIGVhY2hXaXRoSW5kZXggPSBmdW5jdGlvbihpLCBlbCwgY2IpIHtcbiAgICBlYWNoKGVsLCBmdW5jdGlvbihlcnJvciwgbXNnKSB7XG4gICAgICByZXN1bHRbaV0gPSBtc2c7XG4gICAgICBjYihlcnJvciwgcmVzdWx0KTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgIGVhY2hXaXRoSW5kZXgoaSwgYXJ5W2ldLCBuZXh0KTtcbiAgfVxufVxuXG4vKlxuICogRGVjb2RlcyBkYXRhIHdoZW4gYSBwYXlsb2FkIGlzIG1heWJlIGV4cGVjdGVkLiBQb3NzaWJsZSBiaW5hcnkgY29udGVudHMgYXJlXG4gKiBkZWNvZGVkIGZyb20gdGhlaXIgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEsIGNhbGxiYWNrIG1ldGhvZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlY29kZVBheWxvYWQgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBleHBvcnRzLmRlY29kZVBheWxvYWRBc0JpbmFyeShkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAodHlwZW9mIGJpbmFyeVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGJpbmFyeVR5cGU7XG4gICAgYmluYXJ5VHlwZSA9IG51bGw7XG4gIH1cblxuICB2YXIgcGFja2V0O1xuICBpZiAoZGF0YSA9PT0gJycpIHtcbiAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gJycsIG4sIG1zZztcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNociA9IGRhdGEuY2hhckF0KGkpO1xuXG4gICAgaWYgKGNociAhPT0gJzonKSB7XG4gICAgICBsZW5ndGggKz0gY2hyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGxlbmd0aCA9PT0gJycgfHwgKGxlbmd0aCAhPSAobiA9IE51bWJlcihsZW5ndGgpKSkpIHtcbiAgICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgIH1cblxuICAgIG1zZyA9IGRhdGEuc3Vic3RyKGkgKyAxLCBuKTtcblxuICAgIGlmIChsZW5ndGggIT0gbXNnLmxlbmd0aCkge1xuICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKG1zZy5sZW5ndGgpIHtcbiAgICAgIHBhY2tldCA9IGV4cG9ydHMuZGVjb2RlUGFja2V0KG1zZywgYmluYXJ5VHlwZSwgZmFsc2UpO1xuXG4gICAgICBpZiAoZXJyLnR5cGUgPT09IHBhY2tldC50eXBlICYmIGVyci5kYXRhID09PSBwYWNrZXQuZGF0YSkge1xuICAgICAgICAvLyBwYXJzZXIgZXJyb3IgaW4gaW5kaXZpZHVhbCBwYWNrZXQgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmV0ID0gY2FsbGJhY2socGFja2V0LCBpICsgbiwgbCk7XG4gICAgICBpZiAoZmFsc2UgPT09IHJldCkgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkdmFuY2UgY3Vyc29yXG4gICAgaSArPSBuO1xuICAgIGxlbmd0aCA9ICcnO1xuICB9XG5cbiAgaWYgKGxlbmd0aCAhPT0gJycpIHtcbiAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gIH1cblxufTtcblxuLyoqXG4gKiBFbmNvZGVzIG11bHRpcGxlIG1lc3NhZ2VzIChwYXlsb2FkKSBhcyBiaW5hcnkuXG4gKlxuICogPDEgPSBiaW5hcnksIDAgPSBzdHJpbmc+PG51bWJlciBmcm9tIDAtOT48bnVtYmVyIGZyb20gMC05PlsuLi5dPG51bWJlclxuICogMjU1PjxkYXRhPlxuICpcbiAqIEV4YW1wbGU6XG4gKiAxIDMgMjU1IDEgMiAzLCBpZiB0aGUgYmluYXJ5IGNvbnRlbnRzIGFyZSBpbnRlcnByZXRlZCBhcyA4IGJpdCBpbnRlZ2Vyc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBlbmNvZGVkIHBheWxvYWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIgPSBmdW5jdGlvbihwYWNrZXRzLCBjYWxsYmFjaykge1xuICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBBcnJheUJ1ZmZlcigwKSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsIHRydWUsIHRydWUsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiBkb25lQ2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIGVuY29kZWRQYWNrZXRzKSB7XG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gZW5jb2RlZFBhY2tldHMucmVkdWNlKGZ1bmN0aW9uKGFjYywgcCkge1xuICAgICAgdmFyIGxlbjtcbiAgICAgIGlmICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpe1xuICAgICAgICBsZW4gPSBwLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IHAuYnl0ZUxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2MgKyBsZW4udG9TdHJpbmcoKS5sZW5ndGggKyBsZW4gKyAyOyAvLyBzdHJpbmcvYmluYXJ5IGlkZW50aWZpZXIgKyBzZXBhcmF0b3IgPSAyXG4gICAgfSwgMCk7XG5cbiAgICB2YXIgcmVzdWx0QXJyYXkgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XG5cbiAgICB2YXIgYnVmZmVySW5kZXggPSAwO1xuICAgIGVuY29kZWRQYWNrZXRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIHAgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIGFiID0gcDtcbiAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KHAubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmlld1tpXSA9IHAuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBhYiA9IHZpZXcuYnVmZmVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdHJpbmcpIHsgLy8gbm90IHRydWUgYmluYXJ5XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMDtcbiAgICAgIH0gZWxzZSB7IC8vIHRydWUgYmluYXJ5XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlblN0ciA9IGFiLmJ5dGVMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuU3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gcGFyc2VJbnQobGVuU3RyW2ldKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMjU1O1xuXG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGFiKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IHZpZXdbaV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0QXJyYXkuYnVmZmVyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBhcyBCbG9iXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iID0gZnVuY3Rpb24ocGFja2V0cywgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCB0cnVlLCBmdW5jdGlvbihlbmNvZGVkKSB7XG4gICAgICB2YXIgYmluYXJ5SWRlbnRpZmllciA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgICAgYmluYXJ5SWRlbnRpZmllclswXSA9IDE7XG4gICAgICBpZiAodHlwZW9mIGVuY29kZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZC5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2aWV3W2ldID0gZW5jb2RlZC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGVuY29kZWQgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgICAgYmluYXJ5SWRlbnRpZmllclswXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSAoZW5jb2RlZCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKVxuICAgICAgICA/IGVuY29kZWQuYnl0ZUxlbmd0aFxuICAgICAgICA6IGVuY29kZWQuc2l6ZTtcblxuICAgICAgdmFyIGxlblN0ciA9IGxlbi50b1N0cmluZygpO1xuICAgICAgdmFyIGxlbmd0aEFyeSA9IG5ldyBVaW50OEFycmF5KGxlblN0ci5sZW5ndGggKyAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuU3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxlbmd0aEFyeVtpXSA9IHBhcnNlSW50KGxlblN0cltpXSk7XG4gICAgICB9XG4gICAgICBsZW5ndGhBcnlbbGVuU3RyLmxlbmd0aF0gPSAyNTU7XG5cbiAgICAgIGlmIChCbG9iKSB7XG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2JpbmFyeUlkZW50aWZpZXIuYnVmZmVyLCBsZW5ndGhBcnkuYnVmZmVyLCBlbmNvZGVkXSk7XG4gICAgICAgIGRvbmVDYWxsYmFjayhudWxsLCBibG9iKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgQmxvYihyZXN1bHRzKSk7XG4gIH0pO1xufTtcblxuLypcbiAqIERlY29kZXMgZGF0YSB3aGVuIGEgcGF5bG9hZCBpcyBtYXliZSBleHBlY3RlZC4gU3RyaW5ncyBhcmUgZGVjb2RlZCBieVxuICogaW50ZXJwcmV0aW5nIGVhY2ggYnl0ZSBhcyBhIGtleSBjb2RlIGZvciBlbnRyaWVzIG1hcmtlZCB0byBzdGFydCB3aXRoIDAuIFNlZVxuICogZGVzY3JpcHRpb24gb2YgZW5jb2RlUGF5bG9hZEFzQmluYXJ5XG4gKlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gZGF0YSwgY2FsbGJhY2sgbWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb2RlUGF5bG9hZEFzQmluYXJ5ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgYmluYXJ5VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gYmluYXJ5VHlwZTtcbiAgICBiaW5hcnlUeXBlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBidWZmZXJUYWlsID0gZGF0YTtcbiAgdmFyIGJ1ZmZlcnMgPSBbXTtcblxuICB3aGlsZSAoYnVmZmVyVGFpbC5ieXRlTGVuZ3RoID4gMCkge1xuICAgIHZhciB0YWlsQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJUYWlsKTtcbiAgICB2YXIgaXNTdHJpbmcgPSB0YWlsQXJyYXlbMF0gPT09IDA7XG4gICAgdmFyIG1zZ0xlbmd0aCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IDsgaSsrKSB7XG4gICAgICBpZiAodGFpbEFycmF5W2ldID09PSAyNTUpIGJyZWFrO1xuXG4gICAgICAvLyAzMTAgPSBjaGFyIGxlbmd0aCBvZiBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICBpZiAobXNnTGVuZ3RoLmxlbmd0aCA+IDMxMCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgIH1cblxuICAgICAgbXNnTGVuZ3RoICs9IHRhaWxBcnJheVtpXTtcbiAgICB9XG5cbiAgICBidWZmZXJUYWlsID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMiArIG1zZ0xlbmd0aC5sZW5ndGgpO1xuICAgIG1zZ0xlbmd0aCA9IHBhcnNlSW50KG1zZ0xlbmd0aCk7XG5cbiAgICB2YXIgbXNnID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMCwgbXNnTGVuZ3RoKTtcbiAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1zZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkobXNnKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlQaG9uZSBTYWZhcmkgZG9lc24ndCBsZXQgeW91IGFwcGx5IHRvIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgdHlwZWQgPSBuZXcgVWludDhBcnJheShtc2cpO1xuICAgICAgICBtc2cgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1zZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHR5cGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGJ1ZmZlcnMucHVzaChtc2cpO1xuICAgIGJ1ZmZlclRhaWwgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCBtc2dMZW5ndGgpO1xuICB9XG5cbiAgdmFyIHRvdGFsID0gYnVmZmVycy5sZW5ndGg7XG4gIGJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbihidWZmZXIsIGkpIHtcbiAgICBjYWxsYmFjayhleHBvcnRzLmRlY29kZVBhY2tldChidWZmZXIsIGJpbmFyeVR5cGUsIHRydWUpLCBpLCB0b3RhbCk7XG4gIH0pO1xufTtcbiIsIlxuLyoqXG4gKiBHZXRzIHRoZSBrZXlzIGZvciBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IGtleXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyAob2JqKXtcbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChoYXMuY2FsbChvYmosIGkpKSB7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG4iLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3V0ZjhqcyB2Mi4xLjIgYnkgQG1hdGhpYXMgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlcyBgZXhwb3J0c2Bcblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cztcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYFxuXHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0bW9kdWxlLmV4cG9ydHMgPT0gZnJlZUV4cG9ydHMgJiYgbW9kdWxlO1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgLCBmcm9tIE5vZGUuanMgb3IgQnJvd3NlcmlmaWVkIGNvZGUsXG5cdC8vIGFuZCB1c2UgaXQgYXMgYHJvb3RgXG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0dmFyIHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cblx0Ly8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0dmFyIGNvdW50ZXIgPSAwO1xuXHRcdHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXHRcdHZhciB2YWx1ZTtcblx0XHR2YXIgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0Ly8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcblx0ZnVuY3Rpb24gdWNzMmVuY29kZShhcnJheSkge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIGluZGV4ID0gLTE7XG5cdFx0dmFyIHZhbHVlO1xuXHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdFx0dmFsdWUgPSBhcnJheVtpbmRleF07XG5cdFx0XHRpZiAodmFsdWUgPiAweEZGRkYpIHtcblx0XHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG5cdFx0XHRcdHZhbHVlID0gMHhEQzAwIHwgdmFsdWUgJiAweDNGRjtcblx0XHRcdH1cblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tTY2FsYXJWYWx1ZShjb2RlUG9pbnQsIHN0cmljdCkge1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHhEODAwICYmIGNvZGVQb2ludCA8PSAweERGRkYpIHtcblx0XHRcdGlmIChzdHJpY3QpIHtcblx0XHRcdFx0dGhyb3cgRXJyb3IoXG5cdFx0XHRcdFx0J0xvbmUgc3Vycm9nYXRlIFUrJyArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdFx0JyBpcyBub3QgYSBzY2FsYXIgdmFsdWUnXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZUJ5dGUoY29kZVBvaW50LCBzaGlmdCkge1xuXHRcdHJldHVybiBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gc2hpZnQpICYgMHgzRikgfCAweDgwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVuY29kZUNvZGVQb2ludChjb2RlUG9pbnQsIHN0cmljdCkge1xuXHRcdGlmICgoY29kZVBvaW50ICYgMHhGRkZGRkY4MCkgPT0gMCkgeyAvLyAxLWJ5dGUgc2VxdWVuY2Vcblx0XHRcdHJldHVybiBzdHJpbmdGcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcblx0XHR9XG5cdFx0dmFyIHN5bWJvbCA9ICcnO1xuXHRcdGlmICgoY29kZVBvaW50ICYgMHhGRkZGRjgwMCkgPT0gMCkgeyAvLyAyLWJ5dGUgc2VxdWVuY2Vcblx0XHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiA2KSAmIDB4MUYpIHwgMHhDMCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRkYwMDAwKSA9PSAwKSB7IC8vIDMtYnl0ZSBzZXF1ZW5jZVxuXHRcdFx0aWYgKCFjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSkge1xuXHRcdFx0XHRjb2RlUG9pbnQgPSAweEZGRkQ7XG5cdFx0XHR9XG5cdFx0XHRzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gMTIpICYgMHgwRikgfCAweEUwKTtcblx0XHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRTAwMDAwKSA9PSAwKSB7IC8vIDQtYnl0ZSBzZXF1ZW5jZVxuXHRcdFx0c3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDE4KSAmIDB4MDcpIHwgMHhGMCk7XG5cdFx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDEyKTtcblx0XHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdFx0fVxuXHRcdHN5bWJvbCArPSBzdHJpbmdGcm9tQ2hhckNvZGUoKGNvZGVQb2ludCAmIDB4M0YpIHwgMHg4MCk7XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxuXG5cdGZ1bmN0aW9uIHV0ZjhlbmNvZGUoc3RyaW5nLCBvcHRzKSB7XG5cdFx0b3B0cyA9IG9wdHMgfHwge307XG5cdFx0dmFyIHN0cmljdCA9IGZhbHNlICE9PSBvcHRzLnN0cmljdDtcblxuXHRcdHZhciBjb2RlUG9pbnRzID0gdWNzMmRlY29kZShzdHJpbmcpO1xuXHRcdHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcblx0XHR2YXIgaW5kZXggPSAtMTtcblx0XHR2YXIgY29kZVBvaW50O1xuXHRcdHZhciBieXRlU3RyaW5nID0gJyc7XG5cdFx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0XHRcdGNvZGVQb2ludCA9IGNvZGVQb2ludHNbaW5kZXhdO1xuXHRcdFx0Ynl0ZVN0cmluZyArPSBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50LCBzdHJpY3QpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnl0ZVN0cmluZztcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdGZ1bmN0aW9uIHJlYWRDb250aW51YXRpb25CeXRlKCkge1xuXHRcdGlmIChieXRlSW5kZXggPj0gYnl0ZUNvdW50KSB7XG5cdFx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIGNvbnRpbnVhdGlvbkJ5dGUgPSBieXRlQXJyYXlbYnl0ZUluZGV4XSAmIDB4RkY7XG5cdFx0Ynl0ZUluZGV4Kys7XG5cblx0XHRpZiAoKGNvbnRpbnVhdGlvbkJ5dGUgJiAweEMwKSA9PSAweDgwKSB7XG5cdFx0XHRyZXR1cm4gY29udGludWF0aW9uQnl0ZSAmIDB4M0Y7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZW5kIHVwIGhlcmUsIGl04oCZcyBub3QgYSBjb250aW51YXRpb24gYnl0ZVxuXHRcdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWNvZGVTeW1ib2woc3RyaWN0KSB7XG5cdFx0dmFyIGJ5dGUxO1xuXHRcdHZhciBieXRlMjtcblx0XHR2YXIgYnl0ZTM7XG5cdFx0dmFyIGJ5dGU0O1xuXHRcdHZhciBjb2RlUG9pbnQ7XG5cblx0XHRpZiAoYnl0ZUluZGV4ID4gYnl0ZUNvdW50KSB7XG5cdFx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGJ5dGVJbmRleCA9PSBieXRlQ291bnQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBSZWFkIGZpcnN0IGJ5dGVcblx0XHRieXRlMSA9IGJ5dGVBcnJheVtieXRlSW5kZXhdICYgMHhGRjtcblx0XHRieXRlSW5kZXgrKztcblxuXHRcdC8vIDEtYnl0ZSBzZXF1ZW5jZSAobm8gY29udGludWF0aW9uIGJ5dGVzKVxuXHRcdGlmICgoYnl0ZTEgJiAweDgwKSA9PSAwKSB7XG5cdFx0XHRyZXR1cm4gYnl0ZTE7XG5cdFx0fVxuXG5cdFx0Ly8gMi1ieXRlIHNlcXVlbmNlXG5cdFx0aWYgKChieXRlMSAmIDB4RTApID09IDB4QzApIHtcblx0XHRcdGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDFGKSA8PCA2KSB8IGJ5dGUyO1xuXHRcdFx0aWYgKGNvZGVQb2ludCA+PSAweDgwKSB7XG5cdFx0XHRcdHJldHVybiBjb2RlUG9pbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBjb250aW51YXRpb24gYnl0ZScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIDMtYnl0ZSBzZXF1ZW5jZSAobWF5IGluY2x1ZGUgdW5wYWlyZWQgc3Vycm9nYXRlcylcblx0XHRpZiAoKGJ5dGUxICYgMHhGMCkgPT0gMHhFMCkge1xuXHRcdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdFx0Ynl0ZTMgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdFx0Y29kZVBvaW50ID0gKChieXRlMSAmIDB4MEYpIDw8IDEyKSB8IChieXRlMiA8PCA2KSB8IGJ5dGUzO1xuXHRcdFx0aWYgKGNvZGVQb2ludCA+PSAweDA4MDApIHtcblx0XHRcdFx0cmV0dXJuIGNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50LCBzdHJpY3QpID8gY29kZVBvaW50IDogMHhGRkZEO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyA0LWJ5dGUgc2VxdWVuY2Vcblx0XHRpZiAoKGJ5dGUxICYgMHhGOCkgPT0gMHhGMCkge1xuXHRcdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdFx0Ynl0ZTMgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdFx0Ynl0ZTQgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdFx0Y29kZVBvaW50ID0gKChieXRlMSAmIDB4MDcpIDw8IDB4MTIpIHwgKGJ5dGUyIDw8IDB4MEMpIHxcblx0XHRcdFx0KGJ5dGUzIDw8IDB4MDYpIHwgYnl0ZTQ7XG5cdFx0XHRpZiAoY29kZVBvaW50ID49IDB4MDEwMDAwICYmIGNvZGVQb2ludCA8PSAweDEwRkZGRikge1xuXHRcdFx0XHRyZXR1cm4gY29kZVBvaW50O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRocm93IEVycm9yKCdJbnZhbGlkIFVURi04IGRldGVjdGVkJyk7XG5cdH1cblxuXHR2YXIgYnl0ZUFycmF5O1xuXHR2YXIgYnl0ZUNvdW50O1xuXHR2YXIgYnl0ZUluZGV4O1xuXHRmdW5jdGlvbiB1dGY4ZGVjb2RlKGJ5dGVTdHJpbmcsIG9wdHMpIHtcblx0XHRvcHRzID0gb3B0cyB8fCB7fTtcblx0XHR2YXIgc3RyaWN0ID0gZmFsc2UgIT09IG9wdHMuc3RyaWN0O1xuXG5cdFx0Ynl0ZUFycmF5ID0gdWNzMmRlY29kZShieXRlU3RyaW5nKTtcblx0XHRieXRlQ291bnQgPSBieXRlQXJyYXkubGVuZ3RoO1xuXHRcdGJ5dGVJbmRleCA9IDA7XG5cdFx0dmFyIGNvZGVQb2ludHMgPSBbXTtcblx0XHR2YXIgdG1wO1xuXHRcdHdoaWxlICgodG1wID0gZGVjb2RlU3ltYm9sKHN0cmljdCkpICE9PSBmYWxzZSkge1xuXHRcdFx0Y29kZVBvaW50cy5wdXNoKHRtcCk7XG5cdFx0fVxuXHRcdHJldHVybiB1Y3MyZW5jb2RlKGNvZGVQb2ludHMpO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0dmFyIHV0ZjggPSB7XG5cdFx0J3ZlcnNpb24nOiAnMi4xLjInLFxuXHRcdCdlbmNvZGUnOiB1dGY4ZW5jb2RlLFxuXHRcdCdkZWNvZGUnOiB1dGY4ZGVjb2RlXG5cdH07XG5cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdXRmODtcblx0XHR9KTtcblx0fVx0ZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgIWZyZWVFeHBvcnRzLm5vZGVUeXBlKSB7XG5cdFx0aWYgKGZyZWVNb2R1bGUpIHsgLy8gaW4gTm9kZS5qcyBvciBSaW5nb0pTIHYwLjguMCtcblx0XHRcdGZyZWVNb2R1bGUuZXhwb3J0cyA9IHV0Zjg7XG5cdFx0fSBlbHNlIHsgLy8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdHZhciBvYmplY3QgPSB7fTtcblx0XHRcdHZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdC5oYXNPd25Qcm9wZXJ0eTtcblx0XHRcdGZvciAodmFyIGtleSBpbiB1dGY4KSB7XG5cdFx0XHRcdGhhc093blByb3BlcnR5LmNhbGwodXRmOCwga2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IHV0Zjhba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgeyAvLyBpbiBSaGlubyBvciBhIHdlYiBicm93c2VyXG5cdFx0cm9vdC51dGY4ID0gdXRmODtcblx0fVxuXG59KHRoaXMpKTtcbiIsIi8qIGdsb2JhbCBCbG9iIEZpbGUgKi9cblxuLypcbiAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gKi9cblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgd2l0aE5hdGl2ZUJsb2IgPSB0eXBlb2YgQmxvYiA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHRvU3RyaW5nLmNhbGwoQmxvYikgPT09ICdbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl0nO1xudmFyIHdpdGhOYXRpdmVGaWxlID0gdHlwZW9mIEZpbGUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBGaWxlICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEZpbGUpID09PSAnW29iamVjdCBGaWxlQ29uc3RydWN0b3JdJztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0JpbmFyeTtcblxuLyoqXG4gKiBDaGVja3MgZm9yIGJpbmFyeSBkYXRhLlxuICpcbiAqIFN1cHBvcnRzIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEJsb2IgYW5kIEZpbGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFueXRoaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGhhc0JpbmFyeSAob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhhc0JpbmFyeShvYmpbaV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgQnVmZmVyLmlzQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB8fFxuICAgICh0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8XG4gICAgKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgKHdpdGhOYXRpdmVGaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9oYXMtYmluYXJ5L3B1bGwvNFxuICBpZiAob2JqLnRvSlNPTiAmJiB0eXBlb2Ygb2JqLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGhhc0JpbmFyeShvYmoudG9KU09OKCksIHRydWUpO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmIGhhc0JpbmFyeShvYmpba2V5XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICpcbiAqIExvZ2ljIGJvcnJvd2VkIGZyb20gTW9kZXJuaXpyOlxuICpcbiAqICAgLSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY29ycy5qc1xuICovXG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xufSBjYXRjaCAoZXJyKSB7XG4gIC8vIGlmIFhNTEh0dHAgc3VwcG9ydCBpcyBkaXNhYmxlZCBpbiBJRSB0aGVuIGl0IHdpbGwgdGhyb3dcbiAgLy8gd2hlbiB0cnlpbmcgdG8gY3JlYXRlXG4gIG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJcbnZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChpbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG4iLCIvKipcclxuICogQ29tcGlsZXMgYSBxdWVyeXN0cmluZ1xyXG4gKiBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICB2YXIgc3RyID0gJyc7XHJcblxyXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XHJcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgIGlmIChzdHIubGVuZ3RoKSBzdHIgKz0gJyYnO1xyXG4gICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIHNpbXBsZSBxdWVyeXN0cmluZyBpbnRvIGFuIG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcXNcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbihxcyl7XHJcbiAgdmFyIHFyeSA9IHt9O1xyXG4gIHZhciBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYWlycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcclxuICAgIHFyeVtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xyXG4gIH1cclxuICByZXR1cm4gcXJ5O1xyXG59O1xyXG4iLCIvKipcclxuICogUGFyc2VzIGFuIFVSSVxyXG4gKlxyXG4gKiBAYXV0aG9yIFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPiAoTUlUIGxpY2Vuc2UpXHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbnZhciByZSA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KCg/OlthLWYwLTldezAsNH06KXsyLDd9W2EtZjAtOV17MCw0fXxbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xyXG5cclxudmFyIHBhcnRzID0gW1xyXG4gICAgJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xyXG4gICAgdmFyIHNyYyA9IHN0cixcclxuICAgICAgICBiID0gc3RyLmluZGV4T2YoJ1snKSxcclxuICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcclxuXHJcbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBiKSArIHN0ci5zdWJzdHJpbmcoYiwgZSkucmVwbGFjZSgvOi9nLCAnOycpICsgc3RyLnN1YnN0cmluZyhlLCBzdHIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3RyIHx8ICcnKSxcclxuICAgICAgICB1cmkgPSB7fSxcclxuICAgICAgICBpID0gMTQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHVyaVtwYXJ0c1tpXV0gPSBtW2ldIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcclxuICAgICAgICB1cmkuc291cmNlID0gc3JjO1xyXG4gICAgICAgIHVyaS5ob3N0ID0gdXJpLmhvc3Quc3Vic3RyaW5nKDEsIHVyaS5ob3N0Lmxlbmd0aCAtIDEpLnJlcGxhY2UoLzsvZywgJzonKTtcclxuICAgICAgICB1cmkuYXV0aG9yaXR5ID0gdXJpLmF1dGhvcml0eS5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJykucmVwbGFjZSgvOy9nLCAnOicpO1xyXG4gICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXJpO1xyXG59O1xyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHVybCA9IHJlcXVpcmUoJy4vdXJsJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIE1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBsb29rdXA7XG5cbi8qKlxuICogTWFuYWdlcnMgY2FjaGUuXG4gKi9cblxudmFyIGNhY2hlID0gZXhwb3J0cy5tYW5hZ2VycyA9IHt9O1xuXG4vKipcbiAqIExvb2tzIHVwIGFuIGV4aXN0aW5nIGBNYW5hZ2VyYCBmb3IgbXVsdGlwbGV4aW5nLlxuICogSWYgdGhlIHVzZXIgc3VtbW9uczpcbiAqXG4gKiAgIGBpbygnaHR0cDovL2xvY2FsaG9zdC9hJyk7YFxuICogICBgaW8oJ2h0dHA6Ly9sb2NhbGhvc3QvYicpO2BcbiAqXG4gKiBXZSByZXVzZSB0aGUgZXhpc3RpbmcgaW5zdGFuY2UgYmFzZWQgb24gc2FtZSBzY2hlbWUvcG9ydC9ob3N0LFxuICogYW5kIHdlIGluaXRpYWxpemUgc29ja2V0cyBmb3IgZWFjaCBuYW1lc3BhY2UuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb29rdXAgKHVyaSwgb3B0cykge1xuICBpZiAodHlwZW9mIHVyaSA9PT0gJ29iamVjdCcpIHtcbiAgICBvcHRzID0gdXJpO1xuICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIHZhciBwYXJzZWQgPSB1cmwodXJpKTtcbiAgdmFyIHNvdXJjZSA9IHBhcnNlZC5zb3VyY2U7XG4gIHZhciBpZCA9IHBhcnNlZC5pZDtcbiAgdmFyIHBhdGggPSBwYXJzZWQucGF0aDtcbiAgdmFyIHNhbWVOYW1lc3BhY2UgPSBjYWNoZVtpZF0gJiYgcGF0aCBpbiBjYWNoZVtpZF0ubnNwcztcbiAgdmFyIG5ld0Nvbm5lY3Rpb24gPSBvcHRzLmZvcmNlTmV3IHx8IG9wdHNbJ2ZvcmNlIG5ldyBjb25uZWN0aW9uJ10gfHxcbiAgICAgICAgICAgICAgICAgICAgICBmYWxzZSA9PT0gb3B0cy5tdWx0aXBsZXggfHwgc2FtZU5hbWVzcGFjZTtcblxuICB2YXIgaW87XG5cbiAgaWYgKG5ld0Nvbm5lY3Rpb24pIHtcbiAgICBkZWJ1ZygnaWdub3Jpbmcgc29ja2V0IGNhY2hlIGZvciAlcycsIHNvdXJjZSk7XG4gICAgaW8gPSBNYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFjYWNoZVtpZF0pIHtcbiAgICAgIGRlYnVnKCduZXcgaW8gaW5zdGFuY2UgZm9yICVzJywgc291cmNlKTtcbiAgICAgIGNhY2hlW2lkXSA9IE1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgaW8gPSBjYWNoZVtpZF07XG4gIH1cbiAgaWYgKHBhcnNlZC5xdWVyeSAmJiAhb3B0cy5xdWVyeSkge1xuICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnk7XG4gIH1cbiAgcmV0dXJuIGlvLnNvY2tldChwYXJzZWQucGF0aCwgb3B0cyk7XG59XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7XG5cbi8qKlxuICogYGNvbm5lY3RgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5jb25uZWN0ID0gbG9va3VwO1xuXG4vKipcbiAqIEV4cG9zZSBjb25zdHJ1Y3RvcnMgZm9yIHN0YW5kYWxvbmUgYnVpbGQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLk1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcbmV4cG9ydHMuU29ja2V0ID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBlaW8gPSByZXF1aXJlKCdlbmdpbmUuaW8tY2xpZW50Jyk7XG52YXIgU29ja2V0ID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgb24gPSByZXF1aXJlKCcuL29uJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1iaW5kJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50Om1hbmFnZXInKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnaW5kZXhvZicpO1xudmFyIEJhY2tvZmYgPSByZXF1aXJlKCdiYWNrbzInKTtcblxuLyoqXG4gKiBJRTYrIGhhc093blByb3BlcnR5XG4gKi9cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZXI7XG5cbi8qKlxuICogYE1hbmFnZXJgIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmdpbmUgaW5zdGFuY2Ugb3IgZW5naW5lIHVyaS9vcHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBNYW5hZ2VyICh1cmksIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hbmFnZXIpKSByZXR1cm4gbmV3IE1hbmFnZXIodXJpLCBvcHRzKTtcbiAgaWYgKHVyaSAmJiAoJ29iamVjdCcgPT09IHR5cGVvZiB1cmkpKSB7XG4gICAgb3B0cyA9IHVyaTtcbiAgICB1cmkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgb3B0cy5wYXRoID0gb3B0cy5wYXRoIHx8ICcvc29ja2V0LmlvJztcbiAgdGhpcy5uc3BzID0ge307XG4gIHRoaXMuc3VicyA9IFtdO1xuICB0aGlzLm9wdHMgPSBvcHRzO1xuICB0aGlzLnJlY29ubmVjdGlvbihvcHRzLnJlY29ubmVjdGlvbiAhPT0gZmFsc2UpO1xuICB0aGlzLnJlY29ubmVjdGlvbkF0dGVtcHRzKG9wdHMucmVjb25uZWN0aW9uQXR0ZW1wdHMgfHwgSW5maW5pdHkpO1xuICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KG9wdHMucmVjb25uZWN0aW9uRGVsYXkgfHwgMTAwMCk7XG4gIHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgob3B0cy5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1MDAwKTtcbiAgdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKG9wdHMucmFuZG9taXphdGlvbkZhY3RvciB8fCAwLjUpO1xuICB0aGlzLmJhY2tvZmYgPSBuZXcgQmFja29mZih7XG4gICAgbWluOiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KCksXG4gICAgbWF4OiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KCksXG4gICAgaml0dGVyOiB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3IoKVxuICB9KTtcbiAgdGhpcy50aW1lb3V0KG51bGwgPT0gb3B0cy50aW1lb3V0ID8gMjAwMDAgOiBvcHRzLnRpbWVvdXQpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgdGhpcy51cmkgPSB1cmk7XG4gIHRoaXMuY29ubmVjdGluZyA9IFtdO1xuICB0aGlzLmxhc3RQaW5nID0gbnVsbDtcbiAgdGhpcy5lbmNvZGluZyA9IGZhbHNlO1xuICB0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xuICB2YXIgX3BhcnNlciA9IG9wdHMucGFyc2VyIHx8IHBhcnNlcjtcbiAgdGhpcy5lbmNvZGVyID0gbmV3IF9wYXJzZXIuRW5jb2RlcigpO1xuICB0aGlzLmRlY29kZXIgPSBuZXcgX3BhcnNlci5EZWNvZGVyKCk7XG4gIHRoaXMuYXV0b0Nvbm5lY3QgPSBvcHRzLmF1dG9Db25uZWN0ICE9PSBmYWxzZTtcbiAgaWYgKHRoaXMuYXV0b0Nvbm5lY3QpIHRoaXMub3BlbigpO1xufVxuXG4vKipcbiAqIFByb3BhZ2F0ZSBnaXZlbiBldmVudCB0byBzb2NrZXRzIGFuZCBlbWl0IG9uIGB0aGlzYFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmVtaXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBuc3AgaW4gdGhpcy5uc3BzKSB7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMubnNwcywgbnNwKSkge1xuICAgICAgdGhpcy5uc3BzW25zcF0uZW1pdC5hcHBseSh0aGlzLm5zcHNbbnNwXSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlIGBzb2NrZXQuaWRgIG9mIGFsbCBzb2NrZXRzXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU29ja2V0SWRzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBuc3AgaW4gdGhpcy5uc3BzKSB7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMubnNwcywgbnNwKSkge1xuICAgICAgdGhpcy5uc3BzW25zcF0uaWQgPSB0aGlzLmdlbmVyYXRlSWQobnNwKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogZ2VuZXJhdGUgYHNvY2tldC5pZGAgZm9yIHRoZSBnaXZlbiBgbnNwYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuc3BcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmdlbmVyYXRlSWQgPSBmdW5jdGlvbiAobnNwKSB7XG4gIHJldHVybiAobnNwID09PSAnLycgPyAnJyA6IChuc3AgKyAnIycpKSArIHRoaXMuZW5naW5lLmlkO1xufTtcblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoTWFuYWdlci5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFNldHMgdGhlIGByZWNvbm5lY3Rpb25gIGNvbmZpZy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRydWUvZmFsc2UgaWYgaXQgc2hvdWxkIGF1dG9tYXRpY2FsbHkgcmVjb25uZWN0XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbiA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgcmVjb25uZWN0aW9uIGF0dGVtcHRzIGNvbmZpZy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IHJlY29ubmVjdGlvbiBhdHRlbXB0cyBiZWZvcmUgZ2l2aW5nIHVwXG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkF0dGVtcHRzID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzID0gdjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGRlbGF5IGJldHdlZW4gcmVjb25uZWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uRGVsYXkgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheTtcbiAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldE1pbih2KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yYW5kb21pemF0aW9uRmFjdG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvcjtcbiAgdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0Sml0dGVyKHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgbWF4aW11bSBkZWxheSBiZXR3ZWVuIHJlY29ubmVjdGlvbnMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkRlbGF5TWF4ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXg7XG4gIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4ID0gdjtcbiAgdGhpcy5iYWNrb2ZmICYmIHRoaXMuYmFja29mZi5zZXRNYXgodik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjb25uZWN0aW9uIHRpbWVvdXQuIGBmYWxzZWAgdG8gZGlzYWJsZVxuICpcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gIHRoaXMuX3RpbWVvdXQgPSB2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3RhcnRzIHRyeWluZyB0byByZWNvbm5lY3QgaWYgcmVjb25uZWN0aW9uIGlzIGVuYWJsZWQgYW5kIHdlIGhhdmUgbm90XG4gKiBzdGFydGVkIHJlY29ubmVjdGluZyB5ZXRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5tYXliZVJlY29ubmVjdE9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gT25seSB0cnkgdG8gcmVjb25uZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGluZ1xuICBpZiAoIXRoaXMucmVjb25uZWN0aW5nICYmIHRoaXMuX3JlY29ubmVjdGlvbiAmJiB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPT09IDApIHtcbiAgICAvLyBrZWVwcyByZWNvbm5lY3Rpb24gZnJvbSBmaXJpbmcgdHdpY2UgZm9yIHRoZSBzYW1lIHJlY29ubmVjdGlvbiBsb29wXG4gICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25hbCwgY2FsbGJhY2tcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub3BlbiA9XG5NYW5hZ2VyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKGZuLCBvcHRzKSB7XG4gIGRlYnVnKCdyZWFkeVN0YXRlICVzJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgaWYgKH50aGlzLnJlYWR5U3RhdGUuaW5kZXhPZignb3BlbicpKSByZXR1cm4gdGhpcztcblxuICBkZWJ1Zygnb3BlbmluZyAlcycsIHRoaXMudXJpKTtcbiAgdGhpcy5lbmdpbmUgPSBlaW8odGhpcy51cmksIHRoaXMub3B0cyk7XG4gIHZhciBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG4gIHRoaXMuc2tpcFJlY29ubmVjdCA9IGZhbHNlO1xuXG4gIC8vIGVtaXQgYG9wZW5gXG4gIHZhciBvcGVuU3ViID0gb24oc29ja2V0LCAnb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9ub3BlbigpO1xuICAgIGZuICYmIGZuKCk7XG4gIH0pO1xuXG4gIC8vIGVtaXQgYGNvbm5lY3RfZXJyb3JgXG4gIHZhciBlcnJvclN1YiA9IG9uKHNvY2tldCwgJ2Vycm9yJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkZWJ1ZygnY29ubmVjdF9lcnJvcicpO1xuICAgIHNlbGYuY2xlYW51cCgpO1xuICAgIHNlbGYucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICAgIHNlbGYuZW1pdEFsbCgnY29ubmVjdF9lcnJvcicsIGRhdGEpO1xuICAgIGlmIChmbikge1xuICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignQ29ubmVjdGlvbiBlcnJvcicpO1xuICAgICAgZXJyLmRhdGEgPSBkYXRhO1xuICAgICAgZm4oZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT25seSBkbyB0aGlzIGlmIHRoZXJlIGlzIG5vIGZuIHRvIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgIHNlbGYubWF5YmVSZWNvbm5lY3RPbk9wZW4oKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGVtaXQgYGNvbm5lY3RfdGltZW91dGBcbiAgaWYgKGZhbHNlICE9PSB0aGlzLl90aW1lb3V0KSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICAgIGRlYnVnKCdjb25uZWN0IGF0dGVtcHQgd2lsbCB0aW1lb3V0IGFmdGVyICVkJywgdGltZW91dCk7XG5cbiAgICAvLyBzZXQgdGltZXJcbiAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlYnVnKCdjb25uZWN0IGF0dGVtcHQgdGltZWQgb3V0IGFmdGVyICVkJywgdGltZW91dCk7XG4gICAgICBvcGVuU3ViLmRlc3Ryb3koKTtcbiAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgc29ja2V0LmVtaXQoJ2Vycm9yJywgJ3RpbWVvdXQnKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgnY29ubmVjdF90aW1lb3V0JywgdGltZW91dCk7XG4gICAgfSwgdGltZW91dCk7XG5cbiAgICB0aGlzLnN1YnMucHVzaCh7XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLnN1YnMucHVzaChvcGVuU3ViKTtcbiAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdvcGVuJyk7XG5cbiAgLy8gY2xlYXIgb2xkIHN1YnNcbiAgdGhpcy5jbGVhbnVwKCk7XG5cbiAgLy8gbWFyayBhcyBvcGVuXG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG5cbiAgLy8gYWRkIG5ldyBzdWJzXG4gIHZhciBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnZGF0YScsIGJpbmQodGhpcywgJ29uZGF0YScpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ3BpbmcnLCBiaW5kKHRoaXMsICdvbnBpbmcnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdwb25nJywgYmluZCh0aGlzLCAnb25wb25nJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnZXJyb3InLCBiaW5kKHRoaXMsICdvbmVycm9yJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnY2xvc2UnLCBiaW5kKHRoaXMsICdvbmNsb3NlJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24odGhpcy5kZWNvZGVyLCAnZGVjb2RlZCcsIGJpbmQodGhpcywgJ29uZGVjb2RlZCcpKSk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgcGluZy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGFzdFBpbmcgPSBuZXcgRGF0ZSgpO1xuICB0aGlzLmVtaXRBbGwoJ3BpbmcnKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25wb25nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVtaXRBbGwoJ3BvbmcnLCBuZXcgRGF0ZSgpIC0gdGhpcy5sYXN0UGluZyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGRhdGEuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25kYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdGhpcy5kZWNvZGVyLmFkZChkYXRhKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gcGFyc2VyIGZ1bGx5IGRlY29kZXMgYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25kZWNvZGVkID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHNvY2tldCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICBkZWJ1ZygnZXJyb3InLCBlcnIpO1xuICB0aGlzLmVtaXRBbGwoJ2Vycm9yJywgZXJyKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBzb2NrZXQgZm9yIHRoZSBnaXZlbiBgbnNwYC5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnNvY2tldCA9IGZ1bmN0aW9uIChuc3AsIG9wdHMpIHtcbiAgdmFyIHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICBpZiAoIXNvY2tldCkge1xuICAgIHNvY2tldCA9IG5ldyBTb2NrZXQodGhpcywgbnNwLCBvcHRzKTtcbiAgICB0aGlzLm5zcHNbbnNwXSA9IHNvY2tldDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdjb25uZWN0aW5nJywgb25Db25uZWN0aW5nKTtcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzb2NrZXQuaWQgPSBzZWxmLmdlbmVyYXRlSWQobnNwKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmF1dG9Db25uZWN0KSB7XG4gICAgICAvLyBtYW51YWxseSBjYWxsIGhlcmUgc2luY2UgY29ubmVjdGluZyBldmVudCBpcyBmaXJlZCBiZWZvcmUgbGlzdGVuaW5nXG4gICAgICBvbkNvbm5lY3RpbmcoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkNvbm5lY3RpbmcgKCkge1xuICAgIGlmICghfmluZGV4T2Yoc2VsZi5jb25uZWN0aW5nLCBzb2NrZXQpKSB7XG4gICAgICBzZWxmLmNvbm5lY3RpbmcucHVzaChzb2NrZXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzb2NrZXQ7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgc29ja2V0IGNsb3NlLlxuICpcbiAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXRcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHNvY2tldCkge1xuICB2YXIgaW5kZXggPSBpbmRleE9mKHRoaXMuY29ubmVjdGluZywgc29ja2V0KTtcbiAgaWYgKH5pbmRleCkgdGhpcy5jb25uZWN0aW5nLnNwbGljZShpbmRleCwgMSk7XG4gIGlmICh0aGlzLmNvbm5lY3RpbmcubGVuZ3RoKSByZXR1cm47XG5cbiAgdGhpcy5jbG9zZSgpO1xufTtcblxuLyoqXG4gKiBXcml0ZXMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICBkZWJ1Zygnd3JpdGluZyBwYWNrZXQgJWonLCBwYWNrZXQpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChwYWNrZXQucXVlcnkgJiYgcGFja2V0LnR5cGUgPT09IDApIHBhY2tldC5uc3AgKz0gJz8nICsgcGFja2V0LnF1ZXJ5O1xuXG4gIGlmICghc2VsZi5lbmNvZGluZykge1xuICAgIC8vIGVuY29kZSwgdGhlbiB3cml0ZSB0byBlbmdpbmUgd2l0aCByZXN1bHRcbiAgICBzZWxmLmVuY29kaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmVuY29kZXIuZW5jb2RlKHBhY2tldCwgZnVuY3Rpb24gKGVuY29kZWRQYWNrZXRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGYuZW5naW5lLndyaXRlKGVuY29kZWRQYWNrZXRzW2ldLCBwYWNrZXQub3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBzZWxmLmVuY29kaW5nID0gZmFsc2U7XG4gICAgICBzZWxmLnByb2Nlc3NQYWNrZXRRdWV1ZSgpO1xuICAgIH0pO1xuICB9IGVsc2UgeyAvLyBhZGQgcGFja2V0IHRvIHRoZSBxdWV1ZVxuICAgIHNlbGYucGFja2V0QnVmZmVyLnB1c2gocGFja2V0KTtcbiAgfVxufTtcblxuLyoqXG4gKiBJZiBwYWNrZXQgYnVmZmVyIGlzIG5vbi1lbXB0eSwgYmVnaW5zIGVuY29kaW5nIHRoZVxuICogbmV4dCBwYWNrZXQgaW4gbGluZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5wcm9jZXNzUGFja2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBhY2tldEJ1ZmZlci5sZW5ndGggPiAwICYmICF0aGlzLmVuY29kaW5nKSB7XG4gICAgdmFyIHBhY2sgPSB0aGlzLnBhY2tldEJ1ZmZlci5zaGlmdCgpO1xuICAgIHRoaXMucGFja2V0KHBhY2spO1xuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdjbGVhbnVwJyk7XG5cbiAgdmFyIHN1YnNMZW5ndGggPSB0aGlzLnN1YnMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNMZW5ndGg7IGkrKykge1xuICAgIHZhciBzdWIgPSB0aGlzLnN1YnMuc2hpZnQoKTtcbiAgICBzdWIuZGVzdHJveSgpO1xuICB9XG5cbiAgdGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcbiAgdGhpcy5lbmNvZGluZyA9IGZhbHNlO1xuICB0aGlzLmxhc3RQaW5nID0gbnVsbDtcblxuICB0aGlzLmRlY29kZXIuZGVzdHJveSgpO1xufTtcblxuLyoqXG4gKiBDbG9zZSB0aGUgY3VycmVudCBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuY2xvc2UgPVxuTWFuYWdlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2Rpc2Nvbm5lY3QnKTtcbiAgdGhpcy5za2lwUmVjb25uZWN0ID0gdHJ1ZTtcbiAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgLy8gYG9uY2xvc2VgIHdpbGwgbm90IGZpcmUgYmVjYXVzZVxuICAgIC8vIGFuIG9wZW4gZXZlbnQgbmV2ZXIgaGFwcGVuZWRcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxuICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIGlmICh0aGlzLmVuZ2luZSkgdGhpcy5lbmdpbmUuY2xvc2UoKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZW5naW5lIGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGRlYnVnKCdvbmNsb3NlJyk7XG5cbiAgdGhpcy5jbGVhbnVwKCk7XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbik7XG5cbiAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRlbXB0IGEgcmVjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucmVjb25uZWN0aW5nIHx8IHRoaXMuc2tpcFJlY29ubmVjdCkgcmV0dXJuIHRoaXM7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICBkZWJ1ZygncmVjb25uZWN0IGZhaWxlZCcpO1xuICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgIHRoaXMuZW1pdEFsbCgncmVjb25uZWN0X2ZhaWxlZCcpO1xuICAgIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgZGVidWcoJ3dpbGwgd2FpdCAlZG1zIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdCcsIGRlbGF5KTtcblxuICAgIHRoaXMucmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpIHJldHVybjtcblxuICAgICAgZGVidWcoJ2F0dGVtcHRpbmcgcmVjb25uZWN0Jyk7XG4gICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdF9hdHRlbXB0Jywgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0aW5nJywgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcblxuICAgICAgLy8gY2hlY2sgYWdhaW4gZm9yIHRoZSBjYXNlIHNvY2tldCBjbG9zZWQgaW4gYWJvdmUgZXZlbnRzXG4gICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KSByZXR1cm47XG5cbiAgICAgIHNlbGYub3BlbihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBkZWJ1ZygncmVjb25uZWN0IGF0dGVtcHQgZXJyb3InKTtcbiAgICAgICAgICBzZWxmLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RfZXJyb3InLCBlcnIuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVidWcoJ3JlY29ubmVjdCBzdWNjZXNzJyk7XG4gICAgICAgICAgc2VsZi5vbnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkZWxheSk7XG5cbiAgICB0aGlzLnN1YnMucHVzaCh7XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZWNvbm5lY3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25yZWNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhdHRlbXB0ID0gdGhpcy5iYWNrb2ZmLmF0dGVtcHRzO1xuICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgdGhpcy51cGRhdGVTb2NrZXRJZHMoKTtcbiAgdGhpcy5lbWl0QWxsKCdyZWNvbm5lY3QnLCBhdHRlbXB0KTtcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBvbjtcblxuLyoqXG4gKiBIZWxwZXIgZm9yIHN1YnNjcmlwdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8RXZlbnRFbWl0dGVyfSBvYmogd2l0aCBgRW1pdHRlcmAgbWl4aW4gb3IgYEV2ZW50RW1pdHRlcmBcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBvbiAob2JqLCBldiwgZm4pIHtcbiAgb2JqLm9uKGV2LCBmbik7XG4gIHJldHVybiB7XG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgb2JqLnJlbW92ZUxpc3RlbmVyKGV2LCBmbik7XG4gICAgfVxuICB9O1xufVxuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHBhcnNlciA9IHJlcXVpcmUoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciB0b0FycmF5ID0gcmVxdWlyZSgndG8tYXJyYXknKTtcbnZhciBvbiA9IHJlcXVpcmUoJy4vb24nKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnY29tcG9uZW50LWJpbmQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6c29ja2V0Jyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcbnZhciBoYXNCaW4gPSByZXF1aXJlKCdoYXMtYmluYXJ5MicpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFNvY2tldDtcblxuLyoqXG4gKiBJbnRlcm5hbCBldmVudHMgKGJsYWNrbGlzdGVkKS5cbiAqIFRoZXNlIGV2ZW50cyBjYW4ndCBiZSBlbWl0dGVkIGJ5IHRoZSB1c2VyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBldmVudHMgPSB7XG4gIGNvbm5lY3Q6IDEsXG4gIGNvbm5lY3RfZXJyb3I6IDEsXG4gIGNvbm5lY3RfdGltZW91dDogMSxcbiAgY29ubmVjdGluZzogMSxcbiAgZGlzY29ubmVjdDogMSxcbiAgZXJyb3I6IDEsXG4gIHJlY29ubmVjdDogMSxcbiAgcmVjb25uZWN0X2F0dGVtcHQ6IDEsXG4gIHJlY29ubmVjdF9mYWlsZWQ6IDEsXG4gIHJlY29ubmVjdF9lcnJvcjogMSxcbiAgcmVjb25uZWN0aW5nOiAxLFxuICBwaW5nOiAxLFxuICBwb25nOiAxXG59O1xuXG4vKipcbiAqIFNob3J0Y3V0IHRvIGBFbWl0dGVyI2VtaXRgLlxuICovXG5cbnZhciBlbWl0ID0gRW1pdHRlci5wcm90b3R5cGUuZW1pdDtcblxuLyoqXG4gKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFNvY2tldCAoaW8sIG5zcCwgb3B0cykge1xuICB0aGlzLmlvID0gaW87XG4gIHRoaXMubnNwID0gbnNwO1xuICB0aGlzLmpzb24gPSB0aGlzOyAvLyBjb21wYXRcbiAgdGhpcy5pZHMgPSAwO1xuICB0aGlzLmFja3MgPSB7fTtcbiAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gIHRoaXMuZmxhZ3MgPSB7fTtcbiAgaWYgKG9wdHMgJiYgb3B0cy5xdWVyeSkge1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICB9XG4gIGlmICh0aGlzLmlvLmF1dG9Db25uZWN0KSB0aGlzLm9wZW4oKTtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoU29ja2V0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zdWJFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnN1YnMpIHJldHVybjtcblxuICB2YXIgaW8gPSB0aGlzLmlvO1xuICB0aGlzLnN1YnMgPSBbXG4gICAgb24oaW8sICdvcGVuJywgYmluZCh0aGlzLCAnb25vcGVuJykpLFxuICAgIG9uKGlvLCAncGFja2V0JywgYmluZCh0aGlzLCAnb25wYWNrZXQnKSksXG4gICAgb24oaW8sICdjbG9zZScsIGJpbmQodGhpcywgJ29uY2xvc2UnKSlcbiAgXTtcbn07XG5cbi8qKlxuICogXCJPcGVuc1wiIHRoZSBzb2NrZXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9wZW4gPVxuU29ja2V0LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb25uZWN0ZWQpIHJldHVybiB0aGlzO1xuXG4gIHRoaXMuc3ViRXZlbnRzKCk7XG4gIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICBpZiAoJ29wZW4nID09PSB0aGlzLmlvLnJlYWR5U3RhdGUpIHRoaXMub25vcGVuKCk7XG4gIHRoaXMuZW1pdCgnY29ubmVjdGluZycpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBgbWVzc2FnZWAgZXZlbnQuXG4gKlxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gIGFyZ3MudW5zaGlmdCgnbWVzc2FnZScpO1xuICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBgZW1pdGAuXG4gKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgbmFtZVxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldikge1xuICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2KSkge1xuICAgIGVtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICB2YXIgcGFja2V0ID0ge1xuICAgIHR5cGU6ICh0aGlzLmZsYWdzLmJpbmFyeSAhPT0gdW5kZWZpbmVkID8gdGhpcy5mbGFncy5iaW5hcnkgOiBoYXNCaW4oYXJncykpID8gcGFyc2VyLkJJTkFSWV9FVkVOVCA6IHBhcnNlci5FVkVOVCxcbiAgICBkYXRhOiBhcmdzXG4gIH07XG5cbiAgcGFja2V0Lm9wdGlvbnMgPSB7fTtcbiAgcGFja2V0Lm9wdGlvbnMuY29tcHJlc3MgPSAhdGhpcy5mbGFncyB8fCBmYWxzZSAhPT0gdGhpcy5mbGFncy5jb21wcmVzcztcblxuICAvLyBldmVudCBhY2sgY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICBkZWJ1ZygnZW1pdHRpbmcgcGFja2V0IHdpdGggYWNrIGlkICVkJywgdGhpcy5pZHMpO1xuICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gIH1cblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIH1cblxuICB0aGlzLmZsYWdzID0ge307XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gIHRoaXMuaW8ucGFja2V0KHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBgb3BlbmAuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCd0cmFuc3BvcnQgaXMgb3BlbiAtIGNvbm5lY3RpbmcnKTtcblxuICAvLyB3cml0ZSBjb25uZWN0IHBhY2tldCBpZiBuZWNlc3NhcnlcbiAgaWYgKCcvJyAhPT0gdGhpcy5uc3ApIHtcbiAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgdmFyIHF1ZXJ5ID0gdHlwZW9mIHRoaXMucXVlcnkgPT09ICdvYmplY3QnID8gcGFyc2Vxcy5lbmNvZGUodGhpcy5xdWVyeSkgOiB0aGlzLnF1ZXJ5O1xuICAgICAgZGVidWcoJ3NlbmRpbmcgY29ubmVjdCBwYWNrZXQgd2l0aCBxdWVyeSAlcycsIHF1ZXJ5KTtcbiAgICAgIHRoaXMucGFja2V0KHt0eXBlOiBwYXJzZXIuQ09OTkVDVCwgcXVlcnk6IHF1ZXJ5fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFja2V0KHt0eXBlOiBwYXJzZXIuQ09OTkVDVH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVhc29uXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGRlYnVnKCdjbG9zZSAoJXMpJywgcmVhc29uKTtcbiAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICBkZWxldGUgdGhpcy5pZDtcbiAgdGhpcy5lbWl0KCdkaXNjb25uZWN0JywgcmVhc29uKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggc29ja2V0IHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9ucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB2YXIgc2FtZU5hbWVzcGFjZSA9IHBhY2tldC5uc3AgPT09IHRoaXMubnNwO1xuICB2YXIgcm9vdE5hbWVzcGFjZUVycm9yID0gcGFja2V0LnR5cGUgPT09IHBhcnNlci5FUlJPUiAmJiBwYWNrZXQubnNwID09PSAnLyc7XG5cbiAgaWYgKCFzYW1lTmFtZXNwYWNlICYmICFyb290TmFtZXNwYWNlRXJyb3IpIHJldHVybjtcblxuICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgY2FzZSBwYXJzZXIuQ09OTkVDVDpcbiAgICAgIHRoaXMub25jb25uZWN0KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkVWRU5UOlxuICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkJJTkFSWV9FVkVOVDpcbiAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5BQ0s6XG4gICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkJJTkFSWV9BQ0s6XG4gICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkRJU0NPTk5FQ1Q6XG4gICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5FUlJPUjpcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBwYWNrZXQuZGF0YSk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBldmVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uZXZlbnQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHZhciBhcmdzID0gcGFja2V0LmRhdGEgfHwgW107XG4gIGRlYnVnKCdlbWl0dGluZyBldmVudCAlaicsIGFyZ3MpO1xuXG4gIGlmIChudWxsICE9IHBhY2tldC5pZCkge1xuICAgIGRlYnVnKCdhdHRhY2hpbmcgYWNrIGNhbGxiYWNrIHRvIGV2ZW50Jyk7XG4gICAgYXJncy5wdXNoKHRoaXMuYWNrKHBhY2tldC5pZCkpO1xuICB9XG5cbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlY2VpdmVCdWZmZXIucHVzaChhcmdzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBQcm9kdWNlcyBhbiBhY2sgY2FsbGJhY2sgdG8gZW1pdCB3aXRoIGFuIGV2ZW50LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuYWNrID0gZnVuY3Rpb24gKGlkKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHNlbnQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBwcmV2ZW50IGRvdWJsZSBjYWxsYmFja3NcbiAgICBpZiAoc2VudCkgcmV0dXJuO1xuICAgIHNlbnQgPSB0cnVlO1xuICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgIGRlYnVnKCdzZW5kaW5nIGFjayAlaicsIGFyZ3MpO1xuXG4gICAgc2VsZi5wYWNrZXQoe1xuICAgICAgdHlwZTogaGFzQmluKGFyZ3MpID8gcGFyc2VyLkJJTkFSWV9BQ0sgOiBwYXJzZXIuQUNLLFxuICAgICAgaWQ6IGlkLFxuICAgICAgZGF0YTogYXJnc1xuICAgIH0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uYWNrID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB2YXIgYWNrID0gdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgYWNrKSB7XG4gICAgZGVidWcoJ2NhbGxpbmcgYWNrICVzIHdpdGggJWonLCBwYWNrZXQuaWQsIHBhY2tldC5kYXRhKTtcbiAgICBhY2suYXBwbHkodGhpcywgcGFja2V0LmRhdGEpO1xuICAgIGRlbGV0ZSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgfSBlbHNlIHtcbiAgICBkZWJ1ZygnYmFkIGFjayAlcycsIHBhY2tldC5pZCk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc2VydmVyIGNvbm5lY3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5lbWl0KCdjb25uZWN0Jyk7XG4gIHRoaXMuZW1pdEJ1ZmZlcmVkKCk7XG59O1xuXG4vKipcbiAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5lbWl0QnVmZmVyZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5yZWNlaXZlQnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCB0aGlzLnJlY2VpdmVCdWZmZXJbaV0pO1xuICB9XG4gIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLnNlbmRCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnBhY2tldCh0aGlzLnNlbmRCdWZmZXJbaV0pO1xuICB9XG4gIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgZGlzY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3NlcnZlciBkaXNjb25uZWN0ICglcyknLCB0aGlzLm5zcCk7XG4gIHRoaXMuZGVzdHJveSgpO1xuICB0aGlzLm9uY2xvc2UoJ2lvIHNlcnZlciBkaXNjb25uZWN0Jyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGZvcmNlZCBjbGllbnQvc2VydmVyIHNpZGUgZGlzY29ubmVjdGlvbnMsXG4gKiB0aGlzIG1ldGhvZCBlbnN1cmVzIHRoZSBtYW5hZ2VyIHN0b3BzIHRyYWNraW5nIHVzIGFuZFxuICogdGhhdCByZWNvbm5lY3Rpb25zIGRvbid0IGdldCB0cmlnZ2VyZWQgZm9yIHRoaXMuXG4gKlxuICogQGFwaSBwcml2YXRlLlxuICovXG5cblNvY2tldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc3Vicykge1xuICAgIC8vIGNsZWFuIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgcmVjb25uZWN0aW9uc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnN1YnNbaV0uZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnN1YnMgPSBudWxsO1xuICB9XG5cbiAgdGhpcy5pby5kZXN0cm95KHRoaXMpO1xufTtcblxuLyoqXG4gKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0IG1hbnVhbGx5LlxuICpcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNsb3NlID1cblNvY2tldC5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgZGVidWcoJ3BlcmZvcm1pbmcgZGlzY29ubmVjdCAoJXMpJywgdGhpcy5uc3ApO1xuICAgIHRoaXMucGFja2V0KHsgdHlwZTogcGFyc2VyLkRJU0NPTk5FQ1QgfSk7XG4gIH1cblxuICAvLyByZW1vdmUgc29ja2V0IGZyb20gcG9vbFxuICB0aGlzLmRlc3Ryb3koKTtcblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAvLyBmaXJlIGV2ZW50c1xuICAgIHRoaXMub25jbG9zZSgnaW8gY2xpZW50IGRpc2Nvbm5lY3QnKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jb21wcmVzcyA9IGZ1bmN0aW9uIChjb21wcmVzcykge1xuICB0aGlzLmZsYWdzLmNvbXByZXNzID0gY29tcHJlc3M7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBiaW5hcnkgZmxhZ1xuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2hldGhlciB0aGUgZW1pdHRlZCBkYXRhIGNvbnRhaW5zIGJpbmFyeVxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuYmluYXJ5ID0gZnVuY3Rpb24gKGJpbmFyeSkge1xuICB0aGlzLmZsYWdzLmJpbmFyeSA9IGJpbmFyeTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHBhcnNldXJpID0gcmVxdWlyZSgncGFyc2V1cmknKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6dXJsJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB1cmw7XG5cbi8qKlxuICogVVJMIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gQW4gb2JqZWN0IG1lYW50IHRvIG1pbWljIHdpbmRvdy5sb2NhdGlvbi5cbiAqICAgICAgICAgICAgICAgICBEZWZhdWx0cyB0byB3aW5kb3cubG9jYXRpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHVybCAodXJpLCBsb2MpIHtcbiAgdmFyIG9iaiA9IHVyaTtcblxuICAvLyBkZWZhdWx0IHRvIHdpbmRvdy5sb2NhdGlvblxuICBsb2MgPSBsb2MgfHwgZ2xvYmFsLmxvY2F0aW9uO1xuICBpZiAobnVsbCA9PSB1cmkpIHVyaSA9IGxvYy5wcm90b2NvbCArICcvLycgKyBsb2MuaG9zdDtcblxuICAvLyByZWxhdGl2ZSBwYXRoIHN1cHBvcnRcbiAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgdXJpKSB7XG4gICAgaWYgKCcvJyA9PT0gdXJpLmNoYXJBdCgwKSkge1xuICAgICAgaWYgKCcvJyA9PT0gdXJpLmNoYXJBdCgxKSkge1xuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyB1cmk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmkgPSBsb2MuaG9zdCArIHVyaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIS9eKGh0dHBzP3x3c3M/KTpcXC9cXC8vLnRlc3QodXJpKSkge1xuICAgICAgZGVidWcoJ3Byb3RvY29sLWxlc3MgdXJsICVzJywgdXJpKTtcbiAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGxvYykge1xuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyAnLy8nICsgdXJpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJpID0gJ2h0dHBzOi8vJyArIHVyaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwYXJzZVxuICAgIGRlYnVnKCdwYXJzZSAlcycsIHVyaSk7XG4gICAgb2JqID0gcGFyc2V1cmkodXJpKTtcbiAgfVxuXG4gIC8vIG1ha2Ugc3VyZSB3ZSB0cmVhdCBgbG9jYWxob3N0OjgwYCBhbmQgYGxvY2FsaG9zdGAgZXF1YWxseVxuICBpZiAoIW9iai5wb3J0KSB7XG4gICAgaWYgKC9eKGh0dHB8d3MpJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICBvYmoucG9ydCA9ICc4MCc7XG4gICAgfSBlbHNlIGlmICgvXihodHRwfHdzKXMkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgIG9iai5wb3J0ID0gJzQ0Myc7XG4gICAgfVxuICB9XG5cbiAgb2JqLnBhdGggPSBvYmoucGF0aCB8fCAnLyc7XG5cbiAgdmFyIGlwdjYgPSBvYmouaG9zdC5pbmRleE9mKCc6JykgIT09IC0xO1xuICB2YXIgaG9zdCA9IGlwdjYgPyAnWycgKyBvYmouaG9zdCArICddJyA6IG9iai5ob3N0O1xuXG4gIC8vIGRlZmluZSB1bmlxdWUgaWRcbiAgb2JqLmlkID0gb2JqLnByb3RvY29sICsgJzovLycgKyBob3N0ICsgJzonICsgb2JqLnBvcnQ7XG4gIC8vIGRlZmluZSBocmVmXG4gIG9iai5ocmVmID0gb2JqLnByb3RvY29sICsgJzovLycgKyBob3N0ICsgKGxvYyAmJiBsb2MucG9ydCA9PT0gb2JqLnBvcnQgPyAnJyA6ICgnOicgKyBvYmoucG9ydCkpO1xuXG4gIHJldHVybiBvYmo7XG59XG4iLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICcjMDAwMENDJywgJyMwMDAwRkYnLCAnIzAwMzNDQycsICcjMDAzM0ZGJywgJyMwMDY2Q0MnLCAnIzAwNjZGRicsICcjMDA5OUNDJyxcbiAgJyMwMDk5RkYnLCAnIzAwQ0MwMCcsICcjMDBDQzMzJywgJyMwMENDNjYnLCAnIzAwQ0M5OScsICcjMDBDQ0NDJywgJyMwMENDRkYnLFxuICAnIzMzMDBDQycsICcjMzMwMEZGJywgJyMzMzMzQ0MnLCAnIzMzMzNGRicsICcjMzM2NkNDJywgJyMzMzY2RkYnLCAnIzMzOTlDQycsXG4gICcjMzM5OUZGJywgJyMzM0NDMDAnLCAnIzMzQ0MzMycsICcjMzNDQzY2JywgJyMzM0NDOTknLCAnIzMzQ0NDQycsICcjMzNDQ0ZGJyxcbiAgJyM2NjAwQ0MnLCAnIzY2MDBGRicsICcjNjYzM0NDJywgJyM2NjMzRkYnLCAnIzY2Q0MwMCcsICcjNjZDQzMzJywgJyM5OTAwQ0MnLFxuICAnIzk5MDBGRicsICcjOTkzM0NDJywgJyM5OTMzRkYnLCAnIzk5Q0MwMCcsICcjOTlDQzMzJywgJyNDQzAwMDAnLCAnI0NDMDAzMycsXG4gICcjQ0MwMDY2JywgJyNDQzAwOTknLCAnI0NDMDBDQycsICcjQ0MwMEZGJywgJyNDQzMzMDAnLCAnI0NDMzMzMycsICcjQ0MzMzY2JyxcbiAgJyNDQzMzOTknLCAnI0NDMzNDQycsICcjQ0MzM0ZGJywgJyNDQzY2MDAnLCAnI0NDNjYzMycsICcjQ0M5OTAwJywgJyNDQzk5MzMnLFxuICAnI0NDQ0MwMCcsICcjQ0NDQzMzJywgJyNGRjAwMDAnLCAnI0ZGMDAzMycsICcjRkYwMDY2JywgJyNGRjAwOTknLCAnI0ZGMDBDQycsXG4gICcjRkYwMEZGJywgJyNGRjMzMDAnLCAnI0ZGMzMzMycsICcjRkYzMzY2JywgJyNGRjMzOTknLCAnI0ZGMzNDQycsICcjRkYzM0ZGJyxcbiAgJyNGRjY2MDAnLCAnI0ZGNjYzMycsICcjRkY5OTAwJywgJyNGRjk5MzMnLCAnI0ZGQ0MwMCcsICcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICovXG5leHBvcnRzLmluc3RhbmNlcyA9IFtdO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICB2YXIgcHJldlRpbWU7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG4gIGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIGV4cG9ydHMuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHZhciBpbmRleCA9IGV4cG9ydHMuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBleHBvcnRzLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBpO1xuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhwb3J0cy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBleHBvcnRzLmluc3RhbmNlc1tpXTtcbiAgICBpbnN0YW5jZS5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuIiwiLypnbG9iYWwgQmxvYixGaWxlKi9cblxuLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzXG4gKi9cblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG52YXIgaXNCdWYgPSByZXF1aXJlKCcuL2lzLWJ1ZmZlcicpO1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciB3aXRoTmF0aXZlQmxvYiA9IHR5cGVvZiBnbG9iYWwuQmxvYiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0cmluZy5jYWxsKGdsb2JhbC5CbG9iKSA9PT0gJ1tvYmplY3QgQmxvYkNvbnN0cnVjdG9yXSc7XG52YXIgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgZ2xvYmFsLkZpbGUgPT09ICdmdW5jdGlvbicgfHwgdG9TdHJpbmcuY2FsbChnbG9iYWwuRmlsZSkgPT09ICdbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl0nO1xuXG4vKipcbiAqIFJlcGxhY2VzIGV2ZXJ5IEJ1ZmZlciB8IEFycmF5QnVmZmVyIGluIHBhY2tldCB3aXRoIGEgbnVtYmVyZWQgcGxhY2Vob2xkZXIuXG4gKiBBbnl0aGluZyB3aXRoIGJsb2JzIG9yIGZpbGVzIHNob3VsZCBiZSBmZWQgdGhyb3VnaCByZW1vdmVCbG9icyBiZWZvcmUgY29taW5nXG4gKiBoZXJlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBzb2NrZXQuaW8gZXZlbnQgcGFja2V0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggZGVjb25zdHJ1Y3RlZCBwYWNrZXQgYW5kIGxpc3Qgb2YgYnVmZmVyc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlY29uc3RydWN0UGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7XG4gIHZhciBidWZmZXJzID0gW107XG4gIHZhciBwYWNrZXREYXRhID0gcGFja2V0LmRhdGE7XG4gIHZhciBwYWNrID0gcGFja2V0O1xuICBwYWNrLmRhdGEgPSBfZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0RGF0YSwgYnVmZmVycyk7XG4gIHBhY2suYXR0YWNobWVudHMgPSBidWZmZXJzLmxlbmd0aDsgLy8gbnVtYmVyIG9mIGJpbmFyeSAnYXR0YWNobWVudHMnXG4gIHJldHVybiB7cGFja2V0OiBwYWNrLCBidWZmZXJzOiBidWZmZXJzfTtcbn07XG5cbmZ1bmN0aW9uIF9kZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gIGlmICghZGF0YSkgcmV0dXJuIGRhdGE7XG5cbiAgaWYgKGlzQnVmKGRhdGEpKSB7XG4gICAgdmFyIHBsYWNlaG9sZGVyID0geyBfcGxhY2Vob2xkZXI6IHRydWUsIG51bTogYnVmZmVycy5sZW5ndGggfTtcbiAgICBidWZmZXJzLnB1c2goZGF0YSk7XG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICB2YXIgbmV3RGF0YSA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuZXdEYXRhW2ldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgIShkYXRhIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICB2YXIgbmV3RGF0YSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBuZXdEYXRhW2tleV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogUmVjb25zdHJ1Y3RzIGEgYmluYXJ5IHBhY2tldCBmcm9tIGl0cyBwbGFjZWhvbGRlciBwYWNrZXQgYW5kIGJ1ZmZlcnNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gZXZlbnQgcGFja2V0IHdpdGggcGxhY2Vob2xkZXJzXG4gKiBAcGFyYW0ge0FycmF5fSBidWZmZXJzIC0gYmluYXJ5IGJ1ZmZlcnMgdG8gcHV0IGluIHBsYWNlaG9sZGVyIHBvc2l0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSByZWNvbnN0cnVjdGVkIHBhY2tldFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gZnVuY3Rpb24ocGFja2V0LCBidWZmZXJzKSB7XG4gIHBhY2tldC5kYXRhID0gX3JlY29uc3RydWN0UGFja2V0KHBhY2tldC5kYXRhLCBidWZmZXJzKTtcbiAgcGFja2V0LmF0dGFjaG1lbnRzID0gdW5kZWZpbmVkOyAvLyBubyBsb25nZXIgdXNlZnVsXG4gIHJldHVybiBwYWNrZXQ7XG59O1xuXG5mdW5jdGlvbiBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICBpZiAoIWRhdGEpIHJldHVybiBkYXRhO1xuXG4gIGlmIChkYXRhICYmIGRhdGEuX3BsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGJ1ZmZlcnNbZGF0YS5udW1dOyAvLyBhcHByb3ByaWF0ZSBidWZmZXIgKHNob3VsZCBiZSBuYXR1cmFsIG9yZGVyIGFueXdheSlcbiAgfSBlbHNlIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhW2ldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgZGF0YVtrZXldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgcmVtb3ZlcyBCbG9icyBvciBGaWxlcyBmcm9tIGRhdGEgdmlhXG4gKiBGaWxlUmVhZGVyJ3MgcmVhZEFzQXJyYXlCdWZmZXIgbWV0aG9kLiBVc2VkIGJlZm9yZSBlbmNvZGluZ1xuICogZGF0YSBhcyBtc2dwYWNrLiBDYWxscyBjYWxsYmFjayB3aXRoIHRoZSBibG9ibGVzcyBkYXRhLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZW1vdmVCbG9icyA9IGZ1bmN0aW9uKGRhdGEsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIF9yZW1vdmVCbG9icyhvYmosIGN1cktleSwgY29udGFpbmluZ09iamVjdCkge1xuICAgIGlmICghb2JqKSByZXR1cm4gb2JqO1xuXG4gICAgLy8gY29udmVydCBhbnkgYmxvYlxuICAgIGlmICgod2l0aE5hdGl2ZUJsb2IgJiYgb2JqIGluc3RhbmNlb2YgQmxvYikgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVGaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICBwZW5kaW5nQmxvYnMrKztcblxuICAgICAgLy8gYXN5bmMgZmlsZXJlYWRlclxuICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHsgLy8gdGhpcy5yZXN1bHQgPT0gYXJyYXlidWZmZXJcbiAgICAgICAgaWYgKGNvbnRhaW5pbmdPYmplY3QpIHtcbiAgICAgICAgICBjb250YWluaW5nT2JqZWN0W2N1cktleV0gPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBibG9ibGVzc0RhdGEgPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vdGhpbmcgcGVuZGluZyBpdHMgY2FsbGJhY2sgdGltZVxuICAgICAgICBpZighIC0tcGVuZGluZ0Jsb2JzKSB7XG4gICAgICAgICAgY2FsbGJhY2soYmxvYmxlc3NEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihvYmopOyAvLyBibG9iIC0+IGFycmF5YnVmZmVyXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHsgLy8gaGFuZGxlIGFycmF5XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICBfcmVtb3ZlQmxvYnMob2JqW2ldLCBpLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgIWlzQnVmKG9iaikpIHsgLy8gYW5kIG9iamVjdFxuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBfcmVtb3ZlQmxvYnMob2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgcGVuZGluZ0Jsb2JzID0gMDtcbiAgdmFyIGJsb2JsZXNzRGF0YSA9IGRhdGE7XG4gIF9yZW1vdmVCbG9icyhibG9ibGVzc0RhdGEpO1xuICBpZiAoIXBlbmRpbmdCbG9icykge1xuICAgIGNhbGxiYWNrKGJsb2JsZXNzRGF0YSk7XG4gIH1cbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgYmluYXJ5ID0gcmVxdWlyZSgnLi9iaW5hcnknKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xudmFyIGlzQnVmID0gcmVxdWlyZSgnLi9pcy1idWZmZXInKTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5wcm90b2NvbCA9IDQ7XG5cbi8qKlxuICogUGFja2V0IHR5cGVzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy50eXBlcyA9IFtcbiAgJ0NPTk5FQ1QnLFxuICAnRElTQ09OTkVDVCcsXG4gICdFVkVOVCcsXG4gICdBQ0snLFxuICAnRVJST1InLFxuICAnQklOQVJZX0VWRU5UJyxcbiAgJ0JJTkFSWV9BQ0snXG5dO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBjb25uZWN0YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQ09OTkVDVCA9IDA7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGRpc2Nvbm5lY3RgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5ESVNDT05ORUNUID0gMTtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgZXZlbnRgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5FVkVOVCA9IDI7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGFja2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkFDSyA9IDM7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGVycm9yYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRVJST1IgPSA0O1xuXG4vKipcbiAqIFBhY2tldCB0eXBlICdiaW5hcnkgZXZlbnQnXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkJJTkFSWV9FVkVOVCA9IDU7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGJpbmFyeSBhY2tgLiBGb3IgYWNrcyB3aXRoIGJpbmFyeSBhcmd1bWVudHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkJJTkFSWV9BQ0sgPSA2O1xuXG4vKipcbiAqIEVuY29kZXIgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkVuY29kZXIgPSBFbmNvZGVyO1xuXG4vKipcbiAqIERlY29kZXIgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkRlY29kZXIgPSBEZWNvZGVyO1xuXG4vKipcbiAqIEEgc29ja2V0LmlvIEVuY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVuY29kZXIoKSB7fVxuXG52YXIgRVJST1JfUEFDS0VUID0gZXhwb3J0cy5FUlJPUiArICdcImVuY29kZSBlcnJvclwiJztcblxuLyoqXG4gKiBFbmNvZGUgYSBwYWNrZXQgYXMgYSBzaW5nbGUgc3RyaW5nIGlmIG5vbi1iaW5hcnksIG9yIGFzIGFcbiAqIGJ1ZmZlciBzZXF1ZW5jZSwgZGVwZW5kaW5nIG9uIHBhY2tldCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBwYWNrZXQgb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGhhbmRsZSBlbmNvZGluZ3MgKGxpa2VseSBlbmdpbmUud3JpdGUpXG4gKiBAcmV0dXJuIENhbGxzIGNhbGxiYWNrIHdpdGggQXJyYXkgb2YgZW5jb2RpbmdzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVuY29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2spe1xuICBkZWJ1ZygnZW5jb2RpbmcgcGFja2V0ICVqJywgb2JqKTtcblxuICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IG9iai50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gb2JqLnR5cGUpIHtcbiAgICBlbmNvZGVBc0JpbmFyeShvYmosIGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZW5jb2RpbmcgPSBlbmNvZGVBc1N0cmluZyhvYmopO1xuICAgIGNhbGxiYWNrKFtlbmNvZGluZ10pO1xuICB9XG59O1xuXG4vKipcbiAqIEVuY29kZSBwYWNrZXQgYXMgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge1N0cmluZ30gZW5jb2RlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlQXNTdHJpbmcob2JqKSB7XG5cbiAgLy8gZmlyc3QgaXMgdHlwZVxuICB2YXIgc3RyID0gJycgKyBvYmoudHlwZTtcblxuICAvLyBhdHRhY2htZW50cyBpZiB3ZSBoYXZlIHRoZW1cbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBvYmoudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IG9iai50eXBlKSB7XG4gICAgc3RyICs9IG9iai5hdHRhY2htZW50cyArICctJztcbiAgfVxuXG4gIC8vIGlmIHdlIGhhdmUgYSBuYW1lc3BhY2Ugb3RoZXIgdGhhbiBgL2BcbiAgLy8gd2UgYXBwZW5kIGl0IGZvbGxvd2VkIGJ5IGEgY29tbWEgYCxgXG4gIGlmIChvYmoubnNwICYmICcvJyAhPT0gb2JqLm5zcCkge1xuICAgIHN0ciArPSBvYmoubnNwICsgJywnO1xuICB9XG5cbiAgLy8gaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgdGhlIGlkXG4gIGlmIChudWxsICE9IG9iai5pZCkge1xuICAgIHN0ciArPSBvYmouaWQ7XG4gIH1cblxuICAvLyBqc29uIGRhdGFcbiAgaWYgKG51bGwgIT0gb2JqLmRhdGEpIHtcbiAgICB2YXIgcGF5bG9hZCA9IHRyeVN0cmluZ2lmeShvYmouZGF0YSk7XG4gICAgaWYgKHBheWxvYWQgIT09IGZhbHNlKSB7XG4gICAgICBzdHIgKz0gcGF5bG9hZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEVSUk9SX1BBQ0tFVDtcbiAgICB9XG4gIH1cblxuICBkZWJ1ZygnZW5jb2RlZCAlaiBhcyAlcycsIG9iaiwgc3RyKTtcbiAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gdHJ5U3RyaW5naWZ5KHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzdHIpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuY29kZSBwYWNrZXQgYXMgJ2J1ZmZlciBzZXF1ZW5jZScgYnkgcmVtb3ZpbmcgYmxvYnMsIGFuZFxuICogZGVjb25zdHJ1Y3RpbmcgcGFja2V0IGludG8gb2JqZWN0IHdpdGggcGxhY2Vob2xkZXJzIGFuZFxuICogYSBsaXN0IG9mIGJ1ZmZlcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QnVmZmVyfSBlbmNvZGVkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGVBc0JpbmFyeShvYmosIGNhbGxiYWNrKSB7XG5cbiAgZnVuY3Rpb24gd3JpdGVFbmNvZGluZyhibG9ibGVzc0RhdGEpIHtcbiAgICB2YXIgZGVjb25zdHJ1Y3Rpb24gPSBiaW5hcnkuZGVjb25zdHJ1Y3RQYWNrZXQoYmxvYmxlc3NEYXRhKTtcbiAgICB2YXIgcGFjayA9IGVuY29kZUFzU3RyaW5nKGRlY29uc3RydWN0aW9uLnBhY2tldCk7XG4gICAgdmFyIGJ1ZmZlcnMgPSBkZWNvbnN0cnVjdGlvbi5idWZmZXJzO1xuXG4gICAgYnVmZmVycy51bnNoaWZ0KHBhY2spOyAvLyBhZGQgcGFja2V0IGluZm8gdG8gYmVnaW5uaW5nIG9mIGRhdGEgbGlzdFxuICAgIGNhbGxiYWNrKGJ1ZmZlcnMpOyAvLyB3cml0ZSBhbGwgdGhlIGJ1ZmZlcnNcbiAgfVxuXG4gIGJpbmFyeS5yZW1vdmVCbG9icyhvYmosIHdyaXRlRW5jb2RpbmcpO1xufVxuXG4vKipcbiAqIEEgc29ja2V0LmlvIERlY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlY29kZXJcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRGVjb2RlcigpIHtcbiAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgIHdpdGggRGVjb2Rlci5cbiAqL1xuXG5FbWl0dGVyKERlY29kZXIucHJvdG90eXBlKTtcblxuLyoqXG4gKiBEZWNvZGVzIGFuIGVjb2RlZCBwYWNrZXQgc3RyaW5nIGludG8gcGFja2V0IEpTT04uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG9iaiAtIGVuY29kZWQgcGFja2V0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5EZWNvZGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIHBhY2tldDtcbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcGFja2V0ID0gZGVjb2RlU3RyaW5nKG9iaik7XG4gICAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBwYWNrZXQudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IHBhY2tldC50eXBlKSB7IC8vIGJpbmFyeSBwYWNrZXQncyBqc29uXG4gICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpO1xuXG4gICAgICAvLyBubyBhdHRhY2htZW50cywgbGFiZWxlZCBiaW5hcnkgYnV0IG5vIGJpbmFyeSBkYXRhIHRvIGZvbGxvd1xuICAgICAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvci5yZWNvblBhY2suYXR0YWNobWVudHMgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBub24tYmluYXJ5IGZ1bGwgcGFja2V0XG4gICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmIChpc0J1ZihvYmopIHx8IG9iai5iYXNlNjQpIHsgLy8gcmF3IGJpbmFyeSBkYXRhXG4gICAgaWYgKCF0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ290IGJpbmFyeSBkYXRhIHdoZW4gbm90IHJlY29uc3RydWN0aW5nIGEgcGFja2V0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhY2tldCA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YShvYmopO1xuICAgICAgaWYgKHBhY2tldCkgeyAvLyByZWNlaXZlZCBmaW5hbCBidWZmZXJcbiAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHR5cGU6ICcgKyBvYmopO1xuICB9XG59O1xuXG4vKipcbiAqIERlY29kZSBhIHBhY2tldCBTdHJpbmcgKEpTT04gZGF0YSlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZGVjb2RlU3RyaW5nKHN0cikge1xuICB2YXIgaSA9IDA7XG4gIC8vIGxvb2sgdXAgdHlwZVxuICB2YXIgcCA9IHtcbiAgICB0eXBlOiBOdW1iZXIoc3RyLmNoYXJBdCgwKSlcbiAgfTtcblxuICBpZiAobnVsbCA9PSBleHBvcnRzLnR5cGVzW3AudHlwZV0pIHtcbiAgICByZXR1cm4gZXJyb3IoJ3Vua25vd24gcGFja2V0IHR5cGUgJyArIHAudHlwZSk7XG4gIH1cblxuICAvLyBsb29rIHVwIGF0dGFjaG1lbnRzIGlmIHR5cGUgYmluYXJ5XG4gIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gcC50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gcC50eXBlKSB7XG4gICAgdmFyIGJ1ZiA9ICcnO1xuICAgIHdoaWxlIChzdHIuY2hhckF0KCsraSkgIT09ICctJykge1xuICAgICAgYnVmICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAoaSA9PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gICAgaWYgKGJ1ZiAhPSBOdW1iZXIoYnVmKSB8fCBzdHIuY2hhckF0KGkpICE9PSAnLScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBhdHRhY2htZW50cycpO1xuICAgIH1cbiAgICBwLmF0dGFjaG1lbnRzID0gTnVtYmVyKGJ1Zik7XG4gIH1cblxuICAvLyBsb29rIHVwIG5hbWVzcGFjZSAoaWYgYW55KVxuICBpZiAoJy8nID09PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgIHAubnNwID0gJyc7XG4gICAgd2hpbGUgKCsraSkge1xuICAgICAgdmFyIGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKCcsJyA9PT0gYykgYnJlYWs7XG4gICAgICBwLm5zcCArPSBjO1xuICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwLm5zcCA9ICcvJztcbiAgfVxuXG4gIC8vIGxvb2sgdXAgaWRcbiAgdmFyIG5leHQgPSBzdHIuY2hhckF0KGkgKyAxKTtcbiAgaWYgKCcnICE9PSBuZXh0ICYmIE51bWJlcihuZXh0KSA9PSBuZXh0KSB7XG4gICAgcC5pZCA9ICcnO1xuICAgIHdoaWxlICgrK2kpIHtcbiAgICAgIHZhciBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChudWxsID09IGMgfHwgTnVtYmVyKGMpICE9IGMpIHtcbiAgICAgICAgLS1pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHAuaWQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gICAgcC5pZCA9IE51bWJlcihwLmlkKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAganNvbiBkYXRhXG4gIGlmIChzdHIuY2hhckF0KCsraSkpIHtcbiAgICB2YXIgcGF5bG9hZCA9IHRyeVBhcnNlKHN0ci5zdWJzdHIoaSkpO1xuICAgIHZhciBpc1BheWxvYWRWYWxpZCA9IHBheWxvYWQgIT09IGZhbHNlICYmIChwLnR5cGUgPT09IGV4cG9ydHMuRVJST1IgfHwgaXNBcnJheShwYXlsb2FkKSk7XG4gICAgaWYgKGlzUGF5bG9hZFZhbGlkKSB7XG4gICAgICBwLmRhdGEgPSBwYXlsb2FkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJyb3IoJ2ludmFsaWQgcGF5bG9hZCcpO1xuICAgIH1cbiAgfVxuXG4gIGRlYnVnKCdkZWNvZGVkICVzIGFzICVqJywgc3RyLCBwKTtcbiAgcmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGVhbGxvY2F0ZXMgYSBwYXJzZXIncyByZXNvdXJjZXNcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkRlY29kZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMucmVjb25zdHJ1Y3Rvci5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQSBtYW5hZ2VyIG9mIGEgYmluYXJ5IGV2ZW50J3MgJ2J1ZmZlciBzZXF1ZW5jZScuIFNob3VsZFxuICogYmUgY29uc3RydWN0ZWQgd2hlbmV2ZXIgYSBwYWNrZXQgb2YgdHlwZSBCSU5BUllfRVZFTlQgaXNcbiAqIGRlY29kZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QmluYXJ5UmVjb25zdHJ1Y3Rvcn0gaW5pdGlhbGl6ZWQgcmVjb25zdHJ1Y3RvclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpIHtcbiAgdGhpcy5yZWNvblBhY2sgPSBwYWNrZXQ7XG4gIHRoaXMuYnVmZmVycyA9IFtdO1xufVxuXG4vKipcbiAqIE1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBiaW5hcnkgZGF0YSByZWNlaXZlZCBmcm9tIGNvbm5lY3Rpb25cbiAqIGFmdGVyIGEgQklOQVJZX0VWRU5UIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlciB8IEFycmF5QnVmZmVyfSBiaW5EYXRhIC0gdGhlIHJhdyBiaW5hcnkgZGF0YSByZWNlaXZlZFxuICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gcmV0dXJucyBudWxsIGlmIG1vcmUgYmluYXJ5IGRhdGEgaXMgZXhwZWN0ZWQgb3JcbiAqICAgYSByZWNvbnN0cnVjdGVkIHBhY2tldCBvYmplY3QgaWYgYWxsIGJ1ZmZlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQmluYXJ5UmVjb25zdHJ1Y3Rvci5wcm90b3R5cGUudGFrZUJpbmFyeURhdGEgPSBmdW5jdGlvbihiaW5EYXRhKSB7XG4gIHRoaXMuYnVmZmVycy5wdXNoKGJpbkRhdGEpO1xuICBpZiAodGhpcy5idWZmZXJzLmxlbmd0aCA9PT0gdGhpcy5yZWNvblBhY2suYXR0YWNobWVudHMpIHsgLy8gZG9uZSB3aXRoIGJ1ZmZlciBsaXN0XG4gICAgdmFyIHBhY2tldCA9IGJpbmFyeS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTtcbiAgICB0aGlzLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICByZXR1cm4gcGFja2V0O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBDbGVhbnMgdXAgYmluYXJ5IHBhY2tldCByZWNvbnN0cnVjdGlvbiB2YXJpYWJsZXMuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQmluYXJ5UmVjb25zdHJ1Y3Rvci5wcm90b3R5cGUuZmluaXNoZWRSZWNvbnN0cnVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlY29uUGFjayA9IG51bGw7XG4gIHRoaXMuYnVmZmVycyA9IFtdO1xufTtcblxuZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogZXhwb3J0cy5FUlJPUixcbiAgICBkYXRhOiAncGFyc2VyIGVycm9yOiAnICsgbXNnXG4gIH07XG59XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gaXNCdWY7XG5cbnZhciB3aXRoTmF0aXZlQnVmZmVyID0gdHlwZW9mIGdsb2JhbC5CdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIgPT09ICdmdW5jdGlvbic7XG52YXIgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIGdsb2JhbC5BcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIGlzVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiYgdHlwZW9mIGdsb2JhbC5BcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZ2xvYmFsLkFycmF5QnVmZmVyLmlzVmlldztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIGdsb2JhbC5BcnJheUJ1ZmZlcjsgfTtcbiAgfVxufSkoKTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgb2JqIGlzIGEgYnVmZmVyIG9yIGFuIGFycmF5YnVmZmVyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzQnVmKG9iaikge1xuICByZXR1cm4gKHdpdGhOYXRpdmVCdWZmZXIgJiYgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlcihvYmopKSB8fFxuICAgICAgICAgICh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiYgKG9iaiBpbnN0YW5jZW9mIGdsb2JhbC5BcnJheUJ1ZmZlciB8fCBpc1ZpZXcob2JqKSkpO1xufVxuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsXG4gICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJyxcbiAgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLFxuICAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsXG4gICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJyxcbiAgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLFxuICAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsXG4gICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJyxcbiAgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLFxuICAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsXG4gICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0cy5pbnN0YW5jZXMgPSBbXTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuICByZXR1cm4gZGVidWc7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB2YXIgaW5kZXggPSBleHBvcnRzLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgZXhwb3J0cy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgaTtcbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4cG9ydHMuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGluc3RhbmNlID0gZXhwb3J0cy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgaWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRvQXJyYXlcblxuZnVuY3Rpb24gdG9BcnJheShsaXN0LCBpbmRleCkge1xuICAgIHZhciBhcnJheSA9IFtdXG5cbiAgICBpbmRleCA9IGluZGV4IHx8IDBcblxuICAgIGZvciAodmFyIGkgPSBpbmRleCB8fCAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheVtpIC0gaW5kZXhdID0gbGlzdFtpXVxuICAgIH1cblxuICAgIHJldHVybiBhcnJheVxufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8nLnNwbGl0KCcnKVxuICAsIGxlbmd0aCA9IDY0XG4gICwgbWFwID0ge31cbiAgLCBzZWVkID0gMFxuICAsIGkgPSAwXG4gICwgcHJldjtcblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICB2YXIgZW5jb2RlZCA9ICcnO1xuXG4gIGRvIHtcbiAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyBsZW5ndGgpO1xuICB9IHdoaWxlIChudW0gPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICB2YXIgZGVjb2RlZCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbi8qKlxuICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHVuaXF1ZSBpZC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHllYXN0KCkge1xuICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gIHJldHVybiBub3cgKycuJysgZW5jb2RlKHNlZWQrKyk7XG59XG5cbi8vXG4vLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuLy9cbmZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIG1hcFthbHBoYWJldFtpXV0gPSBpO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuLy9cbnllYXN0LmVuY29kZSA9IGVuY29kZTtcbnllYXN0LmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzID0geWVhc3Q7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9