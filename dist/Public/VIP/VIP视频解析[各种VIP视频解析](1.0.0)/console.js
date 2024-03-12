/**
* VIP视频解析 1.0.0
* 各种VIP视频解析
* Copyright (c) 2020-present xiaohuohumax
* Power by bookmark-script 1.0.0
* @license MIT
*/
(function () {
    'use strict';

    /******************************************************************************
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
    /* global Reflect, Promise, SuppressedError, Symbol */


    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function getAugmentedNamespace(n) {
      if (n.__esModule) return n;
      var f = n.default;
    	if (typeof f == "function") {
    		var a = function a () {
    			if (this instanceof a) {
            return Reflect.construct(f, arguments, this.constructor);
    			}
    			return f.apply(this, arguments);
    		};
    		a.prototype = f.prototype;
      } else a = {};
      Object.defineProperty(a, '__esModule', {value: true});
    	Object.keys(n).forEach(function (k) {
    		var d = Object.getOwnPropertyDescriptor(n, k);
    		Object.defineProperty(a, k, d.get ? d : {
    			enumerable: true,
    			get: function () {
    				return n[k];
    			}
    		});
    	});
    	return a;
    }

    var cryptoJs = {exports: {}};

    function commonjsRequire(path) {
    	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
    }

    var core = {exports: {}};

    var _nodeResolve_empty = {};

    var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: _nodeResolve_empty
    });

    var require$$0 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

    var hasRequiredCore;

    function requireCore () {
    	if (hasRequiredCore) return core.exports;
    	hasRequiredCore = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory();
    			}
    		}(commonjsGlobal, function () {

    			/*globals window, global, require*/

    			/**
    			 * CryptoJS core components.
    			 */
    			var CryptoJS = CryptoJS || (function (Math, undefined$1) {

    			    var crypto;

    			    // Native crypto from window (Browser)
    			    if (typeof window !== 'undefined' && window.crypto) {
    			        crypto = window.crypto;
    			    }

    			    // Native crypto in web worker (Browser)
    			    if (typeof self !== 'undefined' && self.crypto) {
    			        crypto = self.crypto;
    			    }

    			    // Native crypto from worker
    			    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
    			        crypto = globalThis.crypto;
    			    }

    			    // Native (experimental IE 11) crypto from window (Browser)
    			    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
    			        crypto = window.msCrypto;
    			    }

    			    // Native crypto from global (NodeJS)
    			    if (!crypto && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
    			        crypto = commonjsGlobal.crypto;
    			    }

    			    // Native crypto import via require (NodeJS)
    			    if (!crypto && typeof commonjsRequire === 'function') {
    			        try {
    			            crypto = require$$0;
    			        } catch (err) {}
    			    }

    			    /*
    			     * Cryptographically secure pseudorandom number generator
    			     *
    			     * As Math.random() is cryptographically not safe to use
    			     */
    			    var cryptoSecureRandomInt = function () {
    			        if (crypto) {
    			            // Use getRandomValues method (Browser)
    			            if (typeof crypto.getRandomValues === 'function') {
    			                try {
    			                    return crypto.getRandomValues(new Uint32Array(1))[0];
    			                } catch (err) {}
    			            }

    			            // Use randomBytes method (NodeJS)
    			            if (typeof crypto.randomBytes === 'function') {
    			                try {
    			                    return crypto.randomBytes(4).readInt32LE();
    			                } catch (err) {}
    			            }
    			        }

    			        throw new Error('Native crypto module could not be used to get secure random number.');
    			    };

    			    /*
    			     * Local polyfill of Object.create

    			     */
    			    var create = Object.create || (function () {
    			        function F() {}

    			        return function (obj) {
    			            var subtype;

    			            F.prototype = obj;

    			            subtype = new F();

    			            F.prototype = null;

    			            return subtype;
    			        };
    			    }());

    			    /**
    			     * CryptoJS namespace.
    			     */
    			    var C = {};

    			    /**
    			     * Library namespace.
    			     */
    			    var C_lib = C.lib = {};

    			    /**
    			     * Base object for prototypal inheritance.
    			     */
    			    var Base = C_lib.Base = (function () {


    			        return {
    			            /**
    			             * Creates a new object that inherits from this object.
    			             *
    			             * @param {Object} overrides Properties to copy into the new object.
    			             *
    			             * @return {Object} The new object.
    			             *
    			             * @static
    			             *
    			             * @example
    			             *
    			             *     var MyType = CryptoJS.lib.Base.extend({
    			             *         field: 'value',
    			             *
    			             *         method: function () {
    			             *         }
    			             *     });
    			             */
    			            extend: function (overrides) {
    			                // Spawn
    			                var subtype = create(this);

    			                // Augment
    			                if (overrides) {
    			                    subtype.mixIn(overrides);
    			                }

    			                // Create default initializer
    			                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
    			                    subtype.init = function () {
    			                        subtype.$super.init.apply(this, arguments);
    			                    };
    			                }

    			                // Initializer's prototype is the subtype object
    			                subtype.init.prototype = subtype;

    			                // Reference supertype
    			                subtype.$super = this;

    			                return subtype;
    			            },

    			            /**
    			             * Extends this object and runs the init method.
    			             * Arguments to create() will be passed to init().
    			             *
    			             * @return {Object} The new object.
    			             *
    			             * @static
    			             *
    			             * @example
    			             *
    			             *     var instance = MyType.create();
    			             */
    			            create: function () {
    			                var instance = this.extend();
    			                instance.init.apply(instance, arguments);

    			                return instance;
    			            },

    			            /**
    			             * Initializes a newly created object.
    			             * Override this method to add some logic when your objects are created.
    			             *
    			             * @example
    			             *
    			             *     var MyType = CryptoJS.lib.Base.extend({
    			             *         init: function () {
    			             *             // ...
    			             *         }
    			             *     });
    			             */
    			            init: function () {
    			            },

    			            /**
    			             * Copies properties into this object.
    			             *
    			             * @param {Object} properties The properties to mix in.
    			             *
    			             * @example
    			             *
    			             *     MyType.mixIn({
    			             *         field: 'value'
    			             *     });
    			             */
    			            mixIn: function (properties) {
    			                for (var propertyName in properties) {
    			                    if (properties.hasOwnProperty(propertyName)) {
    			                        this[propertyName] = properties[propertyName];
    			                    }
    			                }

    			                // IE won't copy toString using the loop above
    			                if (properties.hasOwnProperty('toString')) {
    			                    this.toString = properties.toString;
    			                }
    			            },

    			            /**
    			             * Creates a copy of this object.
    			             *
    			             * @return {Object} The clone.
    			             *
    			             * @example
    			             *
    			             *     var clone = instance.clone();
    			             */
    			            clone: function () {
    			                return this.init.prototype.extend(this);
    			            }
    			        };
    			    }());

    			    /**
    			     * An array of 32-bit words.
    			     *
    			     * @property {Array} words The array of 32-bit words.
    			     * @property {number} sigBytes The number of significant bytes in this word array.
    			     */
    			    var WordArray = C_lib.WordArray = Base.extend({
    			        /**
    			         * Initializes a newly created word array.
    			         *
    			         * @param {Array} words (Optional) An array of 32-bit words.
    			         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.lib.WordArray.create();
    			         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
    			         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
    			         */
    			        init: function (words, sigBytes) {
    			            words = this.words = words || [];

    			            if (sigBytes != undefined$1) {
    			                this.sigBytes = sigBytes;
    			            } else {
    			                this.sigBytes = words.length * 4;
    			            }
    			        },

    			        /**
    			         * Converts this word array to a string.
    			         *
    			         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
    			         *
    			         * @return {string} The stringified word array.
    			         *
    			         * @example
    			         *
    			         *     var string = wordArray + '';
    			         *     var string = wordArray.toString();
    			         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
    			         */
    			        toString: function (encoder) {
    			            return (encoder || Hex).stringify(this);
    			        },

    			        /**
    			         * Concatenates a word array to this word array.
    			         *
    			         * @param {WordArray} wordArray The word array to append.
    			         *
    			         * @return {WordArray} This word array.
    			         *
    			         * @example
    			         *
    			         *     wordArray1.concat(wordArray2);
    			         */
    			        concat: function (wordArray) {
    			            // Shortcuts
    			            var thisWords = this.words;
    			            var thatWords = wordArray.words;
    			            var thisSigBytes = this.sigBytes;
    			            var thatSigBytes = wordArray.sigBytes;

    			            // Clamp excess bits
    			            this.clamp();

    			            // Concat
    			            if (thisSigBytes % 4) {
    			                // Copy one byte at a time
    			                for (var i = 0; i < thatSigBytes; i++) {
    			                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    			                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
    			                }
    			            } else {
    			                // Copy one word at a time
    			                for (var j = 0; j < thatSigBytes; j += 4) {
    			                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
    			                }
    			            }
    			            this.sigBytes += thatSigBytes;

    			            // Chainable
    			            return this;
    			        },

    			        /**
    			         * Removes insignificant bits.
    			         *
    			         * @example
    			         *
    			         *     wordArray.clamp();
    			         */
    			        clamp: function () {
    			            // Shortcuts
    			            var words = this.words;
    			            var sigBytes = this.sigBytes;

    			            // Clamp
    			            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
    			            words.length = Math.ceil(sigBytes / 4);
    			        },

    			        /**
    			         * Creates a copy of this word array.
    			         *
    			         * @return {WordArray} The clone.
    			         *
    			         * @example
    			         *
    			         *     var clone = wordArray.clone();
    			         */
    			        clone: function () {
    			            var clone = Base.clone.call(this);
    			            clone.words = this.words.slice(0);

    			            return clone;
    			        },

    			        /**
    			         * Creates a word array filled with random bytes.
    			         *
    			         * @param {number} nBytes The number of random bytes to generate.
    			         *
    			         * @return {WordArray} The random word array.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.lib.WordArray.random(16);
    			         */
    			        random: function (nBytes) {
    			            var words = [];

    			            for (var i = 0; i < nBytes; i += 4) {
    			                words.push(cryptoSecureRandomInt());
    			            }

    			            return new WordArray.init(words, nBytes);
    			        }
    			    });

    			    /**
    			     * Encoder namespace.
    			     */
    			    var C_enc = C.enc = {};

    			    /**
    			     * Hex encoding strategy.
    			     */
    			    var Hex = C_enc.Hex = {
    			        /**
    			         * Converts a word array to a hex string.
    			         *
    			         * @param {WordArray} wordArray The word array.
    			         *
    			         * @return {string} The hex string.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
    			         */
    			        stringify: function (wordArray) {
    			            // Shortcuts
    			            var words = wordArray.words;
    			            var sigBytes = wordArray.sigBytes;

    			            // Convert
    			            var hexChars = [];
    			            for (var i = 0; i < sigBytes; i++) {
    			                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    			                hexChars.push((bite >>> 4).toString(16));
    			                hexChars.push((bite & 0x0f).toString(16));
    			            }

    			            return hexChars.join('');
    			        },

    			        /**
    			         * Converts a hex string to a word array.
    			         *
    			         * @param {string} hexStr The hex string.
    			         *
    			         * @return {WordArray} The word array.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
    			         */
    			        parse: function (hexStr) {
    			            // Shortcut
    			            var hexStrLength = hexStr.length;

    			            // Convert
    			            var words = [];
    			            for (var i = 0; i < hexStrLength; i += 2) {
    			                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
    			            }

    			            return new WordArray.init(words, hexStrLength / 2);
    			        }
    			    };

    			    /**
    			     * Latin1 encoding strategy.
    			     */
    			    var Latin1 = C_enc.Latin1 = {
    			        /**
    			         * Converts a word array to a Latin1 string.
    			         *
    			         * @param {WordArray} wordArray The word array.
    			         *
    			         * @return {string} The Latin1 string.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
    			         */
    			        stringify: function (wordArray) {
    			            // Shortcuts
    			            var words = wordArray.words;
    			            var sigBytes = wordArray.sigBytes;

    			            // Convert
    			            var latin1Chars = [];
    			            for (var i = 0; i < sigBytes; i++) {
    			                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    			                latin1Chars.push(String.fromCharCode(bite));
    			            }

    			            return latin1Chars.join('');
    			        },

    			        /**
    			         * Converts a Latin1 string to a word array.
    			         *
    			         * @param {string} latin1Str The Latin1 string.
    			         *
    			         * @return {WordArray} The word array.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
    			         */
    			        parse: function (latin1Str) {
    			            // Shortcut
    			            var latin1StrLength = latin1Str.length;

    			            // Convert
    			            var words = [];
    			            for (var i = 0; i < latin1StrLength; i++) {
    			                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
    			            }

    			            return new WordArray.init(words, latin1StrLength);
    			        }
    			    };

    			    /**
    			     * UTF-8 encoding strategy.
    			     */
    			    var Utf8 = C_enc.Utf8 = {
    			        /**
    			         * Converts a word array to a UTF-8 string.
    			         *
    			         * @param {WordArray} wordArray The word array.
    			         *
    			         * @return {string} The UTF-8 string.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
    			         */
    			        stringify: function (wordArray) {
    			            try {
    			                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
    			            } catch (e) {
    			                throw new Error('Malformed UTF-8 data');
    			            }
    			        },

    			        /**
    			         * Converts a UTF-8 string to a word array.
    			         *
    			         * @param {string} utf8Str The UTF-8 string.
    			         *
    			         * @return {WordArray} The word array.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
    			         */
    			        parse: function (utf8Str) {
    			            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
    			        }
    			    };

    			    /**
    			     * Abstract buffered block algorithm template.
    			     *
    			     * The property blockSize must be implemented in a concrete subtype.
    			     *
    			     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
    			     */
    			    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
    			        /**
    			         * Resets this block algorithm's data buffer to its initial state.
    			         *
    			         * @example
    			         *
    			         *     bufferedBlockAlgorithm.reset();
    			         */
    			        reset: function () {
    			            // Initial values
    			            this._data = new WordArray.init();
    			            this._nDataBytes = 0;
    			        },

    			        /**
    			         * Adds new data to this block algorithm's buffer.
    			         *
    			         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
    			         *
    			         * @example
    			         *
    			         *     bufferedBlockAlgorithm._append('data');
    			         *     bufferedBlockAlgorithm._append(wordArray);
    			         */
    			        _append: function (data) {
    			            // Convert string to WordArray, else assume WordArray already
    			            if (typeof data == 'string') {
    			                data = Utf8.parse(data);
    			            }

    			            // Append
    			            this._data.concat(data);
    			            this._nDataBytes += data.sigBytes;
    			        },

    			        /**
    			         * Processes available data blocks.
    			         *
    			         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
    			         *
    			         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
    			         *
    			         * @return {WordArray} The processed data.
    			         *
    			         * @example
    			         *
    			         *     var processedData = bufferedBlockAlgorithm._process();
    			         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
    			         */
    			        _process: function (doFlush) {
    			            var processedWords;

    			            // Shortcuts
    			            var data = this._data;
    			            var dataWords = data.words;
    			            var dataSigBytes = data.sigBytes;
    			            var blockSize = this.blockSize;
    			            var blockSizeBytes = blockSize * 4;

    			            // Count blocks ready
    			            var nBlocksReady = dataSigBytes / blockSizeBytes;
    			            if (doFlush) {
    			                // Round up to include partial blocks
    			                nBlocksReady = Math.ceil(nBlocksReady);
    			            } else {
    			                // Round down to include only full blocks,
    			                // less the number of blocks that must remain in the buffer
    			                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    			            }

    			            // Count words ready
    			            var nWordsReady = nBlocksReady * blockSize;

    			            // Count bytes ready
    			            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

    			            // Process blocks
    			            if (nWordsReady) {
    			                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
    			                    // Perform concrete-algorithm logic
    			                    this._doProcessBlock(dataWords, offset);
    			                }

    			                // Remove processed words
    			                processedWords = dataWords.splice(0, nWordsReady);
    			                data.sigBytes -= nBytesReady;
    			            }

    			            // Return processed words
    			            return new WordArray.init(processedWords, nBytesReady);
    			        },

    			        /**
    			         * Creates a copy of this object.
    			         *
    			         * @return {Object} The clone.
    			         *
    			         * @example
    			         *
    			         *     var clone = bufferedBlockAlgorithm.clone();
    			         */
    			        clone: function () {
    			            var clone = Base.clone.call(this);
    			            clone._data = this._data.clone();

    			            return clone;
    			        },

    			        _minBufferSize: 0
    			    });

    			    /**
    			     * Abstract hasher template.
    			     *
    			     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
    			     */
    			    C_lib.Hasher = BufferedBlockAlgorithm.extend({
    			        /**
    			         * Configuration options.
    			         */
    			        cfg: Base.extend(),

    			        /**
    			         * Initializes a newly created hasher.
    			         *
    			         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
    			         *
    			         * @example
    			         *
    			         *     var hasher = CryptoJS.algo.SHA256.create();
    			         */
    			        init: function (cfg) {
    			            // Apply config defaults
    			            this.cfg = this.cfg.extend(cfg);

    			            // Set initial values
    			            this.reset();
    			        },

    			        /**
    			         * Resets this hasher to its initial state.
    			         *
    			         * @example
    			         *
    			         *     hasher.reset();
    			         */
    			        reset: function () {
    			            // Reset data buffer
    			            BufferedBlockAlgorithm.reset.call(this);

    			            // Perform concrete-hasher logic
    			            this._doReset();
    			        },

    			        /**
    			         * Updates this hasher with a message.
    			         *
    			         * @param {WordArray|string} messageUpdate The message to append.
    			         *
    			         * @return {Hasher} This hasher.
    			         *
    			         * @example
    			         *
    			         *     hasher.update('message');
    			         *     hasher.update(wordArray);
    			         */
    			        update: function (messageUpdate) {
    			            // Append
    			            this._append(messageUpdate);

    			            // Update the hash
    			            this._process();

    			            // Chainable
    			            return this;
    			        },

    			        /**
    			         * Finalizes the hash computation.
    			         * Note that the finalize operation is effectively a destructive, read-once operation.
    			         *
    			         * @param {WordArray|string} messageUpdate (Optional) A final message update.
    			         *
    			         * @return {WordArray} The hash.
    			         *
    			         * @example
    			         *
    			         *     var hash = hasher.finalize();
    			         *     var hash = hasher.finalize('message');
    			         *     var hash = hasher.finalize(wordArray);
    			         */
    			        finalize: function (messageUpdate) {
    			            // Final message update
    			            if (messageUpdate) {
    			                this._append(messageUpdate);
    			            }

    			            // Perform concrete-hasher logic
    			            var hash = this._doFinalize();

    			            return hash;
    			        },

    			        blockSize: 512/32,

    			        /**
    			         * Creates a shortcut function to a hasher's object interface.
    			         *
    			         * @param {Hasher} hasher The hasher to create a helper for.
    			         *
    			         * @return {Function} The shortcut function.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
    			         */
    			        _createHelper: function (hasher) {
    			            return function (message, cfg) {
    			                return new hasher.init(cfg).finalize(message);
    			            };
    			        },

    			        /**
    			         * Creates a shortcut function to the HMAC's object interface.
    			         *
    			         * @param {Hasher} hasher The hasher to use in this HMAC helper.
    			         *
    			         * @return {Function} The shortcut function.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
    			         */
    			        _createHmacHelper: function (hasher) {
    			            return function (message, key) {
    			                return new C_algo.HMAC.init(hasher, key).finalize(message);
    			            };
    			        }
    			    });

    			    /**
    			     * Algorithm namespace.
    			     */
    			    var C_algo = C.algo = {};

    			    return C;
    			}(Math));


    			return CryptoJS;

    		})); 
    	} (core));
    	return core.exports;
    }

    var x64Core = {exports: {}};

    var hasRequiredX64Core;

    function requireX64Core () {
    	if (hasRequiredX64Core) return x64Core.exports;
    	hasRequiredX64Core = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function (undefined$1) {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var Base = C_lib.Base;
    			    var X32WordArray = C_lib.WordArray;

    			    /**
    			     * x64 namespace.
    			     */
    			    var C_x64 = C.x64 = {};

    			    /**
    			     * A 64-bit word.
    			     */
    			    C_x64.Word = Base.extend({
    			        /**
    			         * Initializes a newly created 64-bit word.
    			         *
    			         * @param {number} high The high 32 bits.
    			         * @param {number} low The low 32 bits.
    			         *
    			         * @example
    			         *
    			         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
    			         */
    			        init: function (high, low) {
    			            this.high = high;
    			            this.low = low;
    			        }

    			        /**
    			         * Bitwise NOTs this word.
    			         *
    			         * @return {X64Word} A new x64-Word object after negating.
    			         *
    			         * @example
    			         *
    			         *     var negated = x64Word.not();
    			         */
    			        // not: function () {
    			            // var high = ~this.high;
    			            // var low = ~this.low;

    			            // return X64Word.create(high, low);
    			        // },

    			        /**
    			         * Bitwise ANDs this word with the passed word.
    			         *
    			         * @param {X64Word} word The x64-Word to AND with this word.
    			         *
    			         * @return {X64Word} A new x64-Word object after ANDing.
    			         *
    			         * @example
    			         *
    			         *     var anded = x64Word.and(anotherX64Word);
    			         */
    			        // and: function (word) {
    			            // var high = this.high & word.high;
    			            // var low = this.low & word.low;

    			            // return X64Word.create(high, low);
    			        // },

    			        /**
    			         * Bitwise ORs this word with the passed word.
    			         *
    			         * @param {X64Word} word The x64-Word to OR with this word.
    			         *
    			         * @return {X64Word} A new x64-Word object after ORing.
    			         *
    			         * @example
    			         *
    			         *     var ored = x64Word.or(anotherX64Word);
    			         */
    			        // or: function (word) {
    			            // var high = this.high | word.high;
    			            // var low = this.low | word.low;

    			            // return X64Word.create(high, low);
    			        // },

    			        /**
    			         * Bitwise XORs this word with the passed word.
    			         *
    			         * @param {X64Word} word The x64-Word to XOR with this word.
    			         *
    			         * @return {X64Word} A new x64-Word object after XORing.
    			         *
    			         * @example
    			         *
    			         *     var xored = x64Word.xor(anotherX64Word);
    			         */
    			        // xor: function (word) {
    			            // var high = this.high ^ word.high;
    			            // var low = this.low ^ word.low;

    			            // return X64Word.create(high, low);
    			        // },

    			        /**
    			         * Shifts this word n bits to the left.
    			         *
    			         * @param {number} n The number of bits to shift.
    			         *
    			         * @return {X64Word} A new x64-Word object after shifting.
    			         *
    			         * @example
    			         *
    			         *     var shifted = x64Word.shiftL(25);
    			         */
    			        // shiftL: function (n) {
    			            // if (n < 32) {
    			                // var high = (this.high << n) | (this.low >>> (32 - n));
    			                // var low = this.low << n;
    			            // } else {
    			                // var high = this.low << (n - 32);
    			                // var low = 0;
    			            // }

    			            // return X64Word.create(high, low);
    			        // },

    			        /**
    			         * Shifts this word n bits to the right.
    			         *
    			         * @param {number} n The number of bits to shift.
    			         *
    			         * @return {X64Word} A new x64-Word object after shifting.
    			         *
    			         * @example
    			         *
    			         *     var shifted = x64Word.shiftR(7);
    			         */
    			        // shiftR: function (n) {
    			            // if (n < 32) {
    			                // var low = (this.low >>> n) | (this.high << (32 - n));
    			                // var high = this.high >>> n;
    			            // } else {
    			                // var low = this.high >>> (n - 32);
    			                // var high = 0;
    			            // }

    			            // return X64Word.create(high, low);
    			        // },

    			        /**
    			         * Rotates this word n bits to the left.
    			         *
    			         * @param {number} n The number of bits to rotate.
    			         *
    			         * @return {X64Word} A new x64-Word object after rotating.
    			         *
    			         * @example
    			         *
    			         *     var rotated = x64Word.rotL(25);
    			         */
    			        // rotL: function (n) {
    			            // return this.shiftL(n).or(this.shiftR(64 - n));
    			        // },

    			        /**
    			         * Rotates this word n bits to the right.
    			         *
    			         * @param {number} n The number of bits to rotate.
    			         *
    			         * @return {X64Word} A new x64-Word object after rotating.
    			         *
    			         * @example
    			         *
    			         *     var rotated = x64Word.rotR(7);
    			         */
    			        // rotR: function (n) {
    			            // return this.shiftR(n).or(this.shiftL(64 - n));
    			        // },

    			        /**
    			         * Adds this word with the passed word.
    			         *
    			         * @param {X64Word} word The x64-Word to add with this word.
    			         *
    			         * @return {X64Word} A new x64-Word object after adding.
    			         *
    			         * @example
    			         *
    			         *     var added = x64Word.add(anotherX64Word);
    			         */
    			        // add: function (word) {
    			            // var low = (this.low + word.low) | 0;
    			            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
    			            // var high = (this.high + word.high + carry) | 0;

    			            // return X64Word.create(high, low);
    			        // }
    			    });

    			    /**
    			     * An array of 64-bit words.
    			     *
    			     * @property {Array} words The array of CryptoJS.x64.Word objects.
    			     * @property {number} sigBytes The number of significant bytes in this word array.
    			     */
    			    C_x64.WordArray = Base.extend({
    			        /**
    			         * Initializes a newly created word array.
    			         *
    			         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
    			         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.x64.WordArray.create();
    			         *
    			         *     var wordArray = CryptoJS.x64.WordArray.create([
    			         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
    			         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
    			         *     ]);
    			         *
    			         *     var wordArray = CryptoJS.x64.WordArray.create([
    			         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
    			         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
    			         *     ], 10);
    			         */
    			        init: function (words, sigBytes) {
    			            words = this.words = words || [];

    			            if (sigBytes != undefined$1) {
    			                this.sigBytes = sigBytes;
    			            } else {
    			                this.sigBytes = words.length * 8;
    			            }
    			        },

    			        /**
    			         * Converts this 64-bit word array to a 32-bit word array.
    			         *
    			         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
    			         *
    			         * @example
    			         *
    			         *     var x32WordArray = x64WordArray.toX32();
    			         */
    			        toX32: function () {
    			            // Shortcuts
    			            var x64Words = this.words;
    			            var x64WordsLength = x64Words.length;

    			            // Convert
    			            var x32Words = [];
    			            for (var i = 0; i < x64WordsLength; i++) {
    			                var x64Word = x64Words[i];
    			                x32Words.push(x64Word.high);
    			                x32Words.push(x64Word.low);
    			            }

    			            return X32WordArray.create(x32Words, this.sigBytes);
    			        },

    			        /**
    			         * Creates a copy of this word array.
    			         *
    			         * @return {X64WordArray} The clone.
    			         *
    			         * @example
    			         *
    			         *     var clone = x64WordArray.clone();
    			         */
    			        clone: function () {
    			            var clone = Base.clone.call(this);

    			            // Clone "words" array
    			            var words = clone.words = this.words.slice(0);

    			            // Clone each X64Word object
    			            var wordsLength = words.length;
    			            for (var i = 0; i < wordsLength; i++) {
    			                words[i] = words[i].clone();
    			            }

    			            return clone;
    			        }
    			    });
    			}());


    			return CryptoJS;

    		})); 
    	} (x64Core));
    	return x64Core.exports;
    }

    var libTypedarrays = {exports: {}};

    var hasRequiredLibTypedarrays;

    function requireLibTypedarrays () {
    	if (hasRequiredLibTypedarrays) return libTypedarrays.exports;
    	hasRequiredLibTypedarrays = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Check if typed arrays are supported
    			    if (typeof ArrayBuffer != 'function') {
    			        return;
    			    }

    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;

    			    // Reference original init
    			    var superInit = WordArray.init;

    			    // Augment WordArray.init to handle typed arrays
    			    var subInit = WordArray.init = function (typedArray) {
    			        // Convert buffers to uint8
    			        if (typedArray instanceof ArrayBuffer) {
    			            typedArray = new Uint8Array(typedArray);
    			        }

    			        // Convert other array views to uint8
    			        if (
    			            typedArray instanceof Int8Array ||
    			            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
    			            typedArray instanceof Int16Array ||
    			            typedArray instanceof Uint16Array ||
    			            typedArray instanceof Int32Array ||
    			            typedArray instanceof Uint32Array ||
    			            typedArray instanceof Float32Array ||
    			            typedArray instanceof Float64Array
    			        ) {
    			            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    			        }

    			        // Handle Uint8Array
    			        if (typedArray instanceof Uint8Array) {
    			            // Shortcut
    			            var typedArrayByteLength = typedArray.byteLength;

    			            // Extract bytes
    			            var words = [];
    			            for (var i = 0; i < typedArrayByteLength; i++) {
    			                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
    			            }

    			            // Initialize this word array
    			            superInit.call(this, words, typedArrayByteLength);
    			        } else {
    			            // Else call normal init
    			            superInit.apply(this, arguments);
    			        }
    			    };

    			    subInit.prototype = WordArray;
    			}());


    			return CryptoJS.lib.WordArray;

    		})); 
    	} (libTypedarrays));
    	return libTypedarrays.exports;
    }

    var encUtf16 = {exports: {}};

    var hasRequiredEncUtf16;

    function requireEncUtf16 () {
    	if (hasRequiredEncUtf16) return encUtf16.exports;
    	hasRequiredEncUtf16 = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var C_enc = C.enc;

    			    /**
    			     * UTF-16 BE encoding strategy.
    			     */
    			    C_enc.Utf16 = C_enc.Utf16BE = {
    			        /**
    			         * Converts a word array to a UTF-16 BE string.
    			         *
    			         * @param {WordArray} wordArray The word array.
    			         *
    			         * @return {string} The UTF-16 BE string.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
    			         */
    			        stringify: function (wordArray) {
    			            // Shortcuts
    			            var words = wordArray.words;
    			            var sigBytes = wordArray.sigBytes;

    			            // Convert
    			            var utf16Chars = [];
    			            for (var i = 0; i < sigBytes; i += 2) {
    			                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
    			                utf16Chars.push(String.fromCharCode(codePoint));
    			            }

    			            return utf16Chars.join('');
    			        },

    			        /**
    			         * Converts a UTF-16 BE string to a word array.
    			         *
    			         * @param {string} utf16Str The UTF-16 BE string.
    			         *
    			         * @return {WordArray} The word array.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
    			         */
    			        parse: function (utf16Str) {
    			            // Shortcut
    			            var utf16StrLength = utf16Str.length;

    			            // Convert
    			            var words = [];
    			            for (var i = 0; i < utf16StrLength; i++) {
    			                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
    			            }

    			            return WordArray.create(words, utf16StrLength * 2);
    			        }
    			    };

    			    /**
    			     * UTF-16 LE encoding strategy.
    			     */
    			    C_enc.Utf16LE = {
    			        /**
    			         * Converts a word array to a UTF-16 LE string.
    			         *
    			         * @param {WordArray} wordArray The word array.
    			         *
    			         * @return {string} The UTF-16 LE string.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
    			         */
    			        stringify: function (wordArray) {
    			            // Shortcuts
    			            var words = wordArray.words;
    			            var sigBytes = wordArray.sigBytes;

    			            // Convert
    			            var utf16Chars = [];
    			            for (var i = 0; i < sigBytes; i += 2) {
    			                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
    			                utf16Chars.push(String.fromCharCode(codePoint));
    			            }

    			            return utf16Chars.join('');
    			        },

    			        /**
    			         * Converts a UTF-16 LE string to a word array.
    			         *
    			         * @param {string} utf16Str The UTF-16 LE string.
    			         *
    			         * @return {WordArray} The word array.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
    			         */
    			        parse: function (utf16Str) {
    			            // Shortcut
    			            var utf16StrLength = utf16Str.length;

    			            // Convert
    			            var words = [];
    			            for (var i = 0; i < utf16StrLength; i++) {
    			                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
    			            }

    			            return WordArray.create(words, utf16StrLength * 2);
    			        }
    			    };

    			    function swapEndian(word) {
    			        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
    			    }
    			}());


    			return CryptoJS.enc.Utf16;

    		})); 
    	} (encUtf16));
    	return encUtf16.exports;
    }

    var encBase64 = {exports: {}};

    var hasRequiredEncBase64;

    function requireEncBase64 () {
    	if (hasRequiredEncBase64) return encBase64.exports;
    	hasRequiredEncBase64 = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var C_enc = C.enc;

    			    /**
    			     * Base64 encoding strategy.
    			     */
    			    C_enc.Base64 = {
    			        /**
    			         * Converts a word array to a Base64 string.
    			         *
    			         * @param {WordArray} wordArray The word array.
    			         *
    			         * @return {string} The Base64 string.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
    			         */
    			        stringify: function (wordArray) {
    			            // Shortcuts
    			            var words = wordArray.words;
    			            var sigBytes = wordArray.sigBytes;
    			            var map = this._map;

    			            // Clamp excess bits
    			            wordArray.clamp();

    			            // Convert
    			            var base64Chars = [];
    			            for (var i = 0; i < sigBytes; i += 3) {
    			                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
    			                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
    			                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

    			                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

    			                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
    			                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
    			                }
    			            }

    			            // Add padding
    			            var paddingChar = map.charAt(64);
    			            if (paddingChar) {
    			                while (base64Chars.length % 4) {
    			                    base64Chars.push(paddingChar);
    			                }
    			            }

    			            return base64Chars.join('');
    			        },

    			        /**
    			         * Converts a Base64 string to a word array.
    			         *
    			         * @param {string} base64Str The Base64 string.
    			         *
    			         * @return {WordArray} The word array.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
    			         */
    			        parse: function (base64Str) {
    			            // Shortcuts
    			            var base64StrLength = base64Str.length;
    			            var map = this._map;
    			            var reverseMap = this._reverseMap;

    			            if (!reverseMap) {
    			                    reverseMap = this._reverseMap = [];
    			                    for (var j = 0; j < map.length; j++) {
    			                        reverseMap[map.charCodeAt(j)] = j;
    			                    }
    			            }

    			            // Ignore padding
    			            var paddingChar = map.charAt(64);
    			            if (paddingChar) {
    			                var paddingIndex = base64Str.indexOf(paddingChar);
    			                if (paddingIndex !== -1) {
    			                    base64StrLength = paddingIndex;
    			                }
    			            }

    			            // Convert
    			            return parseLoop(base64Str, base64StrLength, reverseMap);

    			        },

    			        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    			    };

    			    function parseLoop(base64Str, base64StrLength, reverseMap) {
    			      var words = [];
    			      var nBytes = 0;
    			      for (var i = 0; i < base64StrLength; i++) {
    			          if (i % 4) {
    			              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
    			              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
    			              var bitsCombined = bits1 | bits2;
    			              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
    			              nBytes++;
    			          }
    			      }
    			      return WordArray.create(words, nBytes);
    			    }
    			}());


    			return CryptoJS.enc.Base64;

    		})); 
    	} (encBase64));
    	return encBase64.exports;
    }

    var encBase64url = {exports: {}};

    var hasRequiredEncBase64url;

    function requireEncBase64url () {
    	if (hasRequiredEncBase64url) return encBase64url.exports;
    	hasRequiredEncBase64url = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var C_enc = C.enc;

    			    /**
    			     * Base64url encoding strategy.
    			     */
    			    C_enc.Base64url = {
    			        /**
    			         * Converts a word array to a Base64url string.
    			         *
    			         * @param {WordArray} wordArray The word array.
    			         *
    			         * @param {boolean} urlSafe Whether to use url safe
    			         *
    			         * @return {string} The Base64url string.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
    			         */
    			        stringify: function (wordArray, urlSafe) {
    			            if (urlSafe === undefined) {
    			                urlSafe = true;
    			            }
    			            // Shortcuts
    			            var words = wordArray.words;
    			            var sigBytes = wordArray.sigBytes;
    			            var map = urlSafe ? this._safe_map : this._map;

    			            // Clamp excess bits
    			            wordArray.clamp();

    			            // Convert
    			            var base64Chars = [];
    			            for (var i = 0; i < sigBytes; i += 3) {
    			                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
    			                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
    			                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

    			                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

    			                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
    			                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
    			                }
    			            }

    			            // Add padding
    			            var paddingChar = map.charAt(64);
    			            if (paddingChar) {
    			                while (base64Chars.length % 4) {
    			                    base64Chars.push(paddingChar);
    			                }
    			            }

    			            return base64Chars.join('');
    			        },

    			        /**
    			         * Converts a Base64url string to a word array.
    			         *
    			         * @param {string} base64Str The Base64url string.
    			         *
    			         * @param {boolean} urlSafe Whether to use url safe
    			         *
    			         * @return {WordArray} The word array.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
    			         */
    			        parse: function (base64Str, urlSafe) {
    			            if (urlSafe === undefined) {
    			                urlSafe = true;
    			            }

    			            // Shortcuts
    			            var base64StrLength = base64Str.length;
    			            var map = urlSafe ? this._safe_map : this._map;
    			            var reverseMap = this._reverseMap;

    			            if (!reverseMap) {
    			                reverseMap = this._reverseMap = [];
    			                for (var j = 0; j < map.length; j++) {
    			                    reverseMap[map.charCodeAt(j)] = j;
    			                }
    			            }

    			            // Ignore padding
    			            var paddingChar = map.charAt(64);
    			            if (paddingChar) {
    			                var paddingIndex = base64Str.indexOf(paddingChar);
    			                if (paddingIndex !== -1) {
    			                    base64StrLength = paddingIndex;
    			                }
    			            }

    			            // Convert
    			            return parseLoop(base64Str, base64StrLength, reverseMap);

    			        },

    			        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    			        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
    			    };

    			    function parseLoop(base64Str, base64StrLength, reverseMap) {
    			        var words = [];
    			        var nBytes = 0;
    			        for (var i = 0; i < base64StrLength; i++) {
    			            if (i % 4) {
    			                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
    			                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
    			                var bitsCombined = bits1 | bits2;
    			                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
    			                nBytes++;
    			            }
    			        }
    			        return WordArray.create(words, nBytes);
    			    }
    			}());


    			return CryptoJS.enc.Base64url;

    		})); 
    	} (encBase64url));
    	return encBase64url.exports;
    }

    var md5 = {exports: {}};

    var hasRequiredMd5;

    function requireMd5 () {
    	if (hasRequiredMd5) return md5.exports;
    	hasRequiredMd5 = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function (Math) {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var Hasher = C_lib.Hasher;
    			    var C_algo = C.algo;

    			    // Constants table
    			    var T = [];

    			    // Compute constants
    			    (function () {
    			        for (var i = 0; i < 64; i++) {
    			            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
    			        }
    			    }());

    			    /**
    			     * MD5 hash algorithm.
    			     */
    			    var MD5 = C_algo.MD5 = Hasher.extend({
    			        _doReset: function () {
    			            this._hash = new WordArray.init([
    			                0x67452301, 0xefcdab89,
    			                0x98badcfe, 0x10325476
    			            ]);
    			        },

    			        _doProcessBlock: function (M, offset) {
    			            // Swap endian
    			            for (var i = 0; i < 16; i++) {
    			                // Shortcuts
    			                var offset_i = offset + i;
    			                var M_offset_i = M[offset_i];

    			                M[offset_i] = (
    			                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
    			                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
    			                );
    			            }

    			            // Shortcuts
    			            var H = this._hash.words;

    			            var M_offset_0  = M[offset + 0];
    			            var M_offset_1  = M[offset + 1];
    			            var M_offset_2  = M[offset + 2];
    			            var M_offset_3  = M[offset + 3];
    			            var M_offset_4  = M[offset + 4];
    			            var M_offset_5  = M[offset + 5];
    			            var M_offset_6  = M[offset + 6];
    			            var M_offset_7  = M[offset + 7];
    			            var M_offset_8  = M[offset + 8];
    			            var M_offset_9  = M[offset + 9];
    			            var M_offset_10 = M[offset + 10];
    			            var M_offset_11 = M[offset + 11];
    			            var M_offset_12 = M[offset + 12];
    			            var M_offset_13 = M[offset + 13];
    			            var M_offset_14 = M[offset + 14];
    			            var M_offset_15 = M[offset + 15];

    			            // Working variables
    			            var a = H[0];
    			            var b = H[1];
    			            var c = H[2];
    			            var d = H[3];

    			            // Computation
    			            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
    			            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
    			            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
    			            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
    			            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
    			            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
    			            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
    			            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
    			            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
    			            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
    			            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
    			            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
    			            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
    			            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
    			            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
    			            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

    			            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
    			            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
    			            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
    			            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
    			            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
    			            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
    			            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
    			            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
    			            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
    			            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
    			            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
    			            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
    			            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
    			            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
    			            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
    			            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

    			            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
    			            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
    			            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
    			            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
    			            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
    			            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
    			            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
    			            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
    			            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
    			            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
    			            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
    			            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
    			            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
    			            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
    			            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
    			            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

    			            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
    			            d = II(d, a, b, c, M_offset_7,  10, T[49]);
    			            c = II(c, d, a, b, M_offset_14, 15, T[50]);
    			            b = II(b, c, d, a, M_offset_5,  21, T[51]);
    			            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
    			            d = II(d, a, b, c, M_offset_3,  10, T[53]);
    			            c = II(c, d, a, b, M_offset_10, 15, T[54]);
    			            b = II(b, c, d, a, M_offset_1,  21, T[55]);
    			            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
    			            d = II(d, a, b, c, M_offset_15, 10, T[57]);
    			            c = II(c, d, a, b, M_offset_6,  15, T[58]);
    			            b = II(b, c, d, a, M_offset_13, 21, T[59]);
    			            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
    			            d = II(d, a, b, c, M_offset_11, 10, T[61]);
    			            c = II(c, d, a, b, M_offset_2,  15, T[62]);
    			            b = II(b, c, d, a, M_offset_9,  21, T[63]);

    			            // Intermediate hash value
    			            H[0] = (H[0] + a) | 0;
    			            H[1] = (H[1] + b) | 0;
    			            H[2] = (H[2] + c) | 0;
    			            H[3] = (H[3] + d) | 0;
    			        },

    			        _doFinalize: function () {
    			            // Shortcuts
    			            var data = this._data;
    			            var dataWords = data.words;

    			            var nBitsTotal = this._nDataBytes * 8;
    			            var nBitsLeft = data.sigBytes * 8;

    			            // Add padding
    			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

    			            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
    			            var nBitsTotalL = nBitsTotal;
    			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
    			                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
    			                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
    			            );
    			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
    			                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
    			                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
    			            );

    			            data.sigBytes = (dataWords.length + 1) * 4;

    			            // Hash final blocks
    			            this._process();

    			            // Shortcuts
    			            var hash = this._hash;
    			            var H = hash.words;

    			            // Swap endian
    			            for (var i = 0; i < 4; i++) {
    			                // Shortcut
    			                var H_i = H[i];

    			                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
    			                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
    			            }

    			            // Return final computed hash
    			            return hash;
    			        },

    			        clone: function () {
    			            var clone = Hasher.clone.call(this);
    			            clone._hash = this._hash.clone();

    			            return clone;
    			        }
    			    });

    			    function FF(a, b, c, d, x, s, t) {
    			        var n = a + ((b & c) | (~b & d)) + x + t;
    			        return ((n << s) | (n >>> (32 - s))) + b;
    			    }

    			    function GG(a, b, c, d, x, s, t) {
    			        var n = a + ((b & d) | (c & ~d)) + x + t;
    			        return ((n << s) | (n >>> (32 - s))) + b;
    			    }

    			    function HH(a, b, c, d, x, s, t) {
    			        var n = a + (b ^ c ^ d) + x + t;
    			        return ((n << s) | (n >>> (32 - s))) + b;
    			    }

    			    function II(a, b, c, d, x, s, t) {
    			        var n = a + (c ^ (b | ~d)) + x + t;
    			        return ((n << s) | (n >>> (32 - s))) + b;
    			    }

    			    /**
    			     * Shortcut function to the hasher's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     *
    			     * @return {WordArray} The hash.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hash = CryptoJS.MD5('message');
    			     *     var hash = CryptoJS.MD5(wordArray);
    			     */
    			    C.MD5 = Hasher._createHelper(MD5);

    			    /**
    			     * Shortcut function to the HMAC's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     * @param {WordArray|string} key The secret key.
    			     *
    			     * @return {WordArray} The HMAC.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hmac = CryptoJS.HmacMD5(message, key);
    			     */
    			    C.HmacMD5 = Hasher._createHmacHelper(MD5);
    			}(Math));


    			return CryptoJS.MD5;

    		})); 
    	} (md5));
    	return md5.exports;
    }

    var sha1 = {exports: {}};

    var hasRequiredSha1;

    function requireSha1 () {
    	if (hasRequiredSha1) return sha1.exports;
    	hasRequiredSha1 = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var Hasher = C_lib.Hasher;
    			    var C_algo = C.algo;

    			    // Reusable object
    			    var W = [];

    			    /**
    			     * SHA-1 hash algorithm.
    			     */
    			    var SHA1 = C_algo.SHA1 = Hasher.extend({
    			        _doReset: function () {
    			            this._hash = new WordArray.init([
    			                0x67452301, 0xefcdab89,
    			                0x98badcfe, 0x10325476,
    			                0xc3d2e1f0
    			            ]);
    			        },

    			        _doProcessBlock: function (M, offset) {
    			            // Shortcut
    			            var H = this._hash.words;

    			            // Working variables
    			            var a = H[0];
    			            var b = H[1];
    			            var c = H[2];
    			            var d = H[3];
    			            var e = H[4];

    			            // Computation
    			            for (var i = 0; i < 80; i++) {
    			                if (i < 16) {
    			                    W[i] = M[offset + i] | 0;
    			                } else {
    			                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
    			                    W[i] = (n << 1) | (n >>> 31);
    			                }

    			                var t = ((a << 5) | (a >>> 27)) + e + W[i];
    			                if (i < 20) {
    			                    t += ((b & c) | (~b & d)) + 0x5a827999;
    			                } else if (i < 40) {
    			                    t += (b ^ c ^ d) + 0x6ed9eba1;
    			                } else if (i < 60) {
    			                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
    			                } else /* if (i < 80) */ {
    			                    t += (b ^ c ^ d) - 0x359d3e2a;
    			                }

    			                e = d;
    			                d = c;
    			                c = (b << 30) | (b >>> 2);
    			                b = a;
    			                a = t;
    			            }

    			            // Intermediate hash value
    			            H[0] = (H[0] + a) | 0;
    			            H[1] = (H[1] + b) | 0;
    			            H[2] = (H[2] + c) | 0;
    			            H[3] = (H[3] + d) | 0;
    			            H[4] = (H[4] + e) | 0;
    			        },

    			        _doFinalize: function () {
    			            // Shortcuts
    			            var data = this._data;
    			            var dataWords = data.words;

    			            var nBitsTotal = this._nDataBytes * 8;
    			            var nBitsLeft = data.sigBytes * 8;

    			            // Add padding
    			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    			            data.sigBytes = dataWords.length * 4;

    			            // Hash final blocks
    			            this._process();

    			            // Return final computed hash
    			            return this._hash;
    			        },

    			        clone: function () {
    			            var clone = Hasher.clone.call(this);
    			            clone._hash = this._hash.clone();

    			            return clone;
    			        }
    			    });

    			    /**
    			     * Shortcut function to the hasher's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     *
    			     * @return {WordArray} The hash.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hash = CryptoJS.SHA1('message');
    			     *     var hash = CryptoJS.SHA1(wordArray);
    			     */
    			    C.SHA1 = Hasher._createHelper(SHA1);

    			    /**
    			     * Shortcut function to the HMAC's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     * @param {WordArray|string} key The secret key.
    			     *
    			     * @return {WordArray} The HMAC.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hmac = CryptoJS.HmacSHA1(message, key);
    			     */
    			    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
    			}());


    			return CryptoJS.SHA1;

    		})); 
    	} (sha1));
    	return sha1.exports;
    }

    var sha256 = {exports: {}};

    var hasRequiredSha256;

    function requireSha256 () {
    	if (hasRequiredSha256) return sha256.exports;
    	hasRequiredSha256 = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function (Math) {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var Hasher = C_lib.Hasher;
    			    var C_algo = C.algo;

    			    // Initialization and round constants tables
    			    var H = [];
    			    var K = [];

    			    // Compute constants
    			    (function () {
    			        function isPrime(n) {
    			            var sqrtN = Math.sqrt(n);
    			            for (var factor = 2; factor <= sqrtN; factor++) {
    			                if (!(n % factor)) {
    			                    return false;
    			                }
    			            }

    			            return true;
    			        }

    			        function getFractionalBits(n) {
    			            return ((n - (n | 0)) * 0x100000000) | 0;
    			        }

    			        var n = 2;
    			        var nPrime = 0;
    			        while (nPrime < 64) {
    			            if (isPrime(n)) {
    			                if (nPrime < 8) {
    			                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
    			                }
    			                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

    			                nPrime++;
    			            }

    			            n++;
    			        }
    			    }());

    			    // Reusable object
    			    var W = [];

    			    /**
    			     * SHA-256 hash algorithm.
    			     */
    			    var SHA256 = C_algo.SHA256 = Hasher.extend({
    			        _doReset: function () {
    			            this._hash = new WordArray.init(H.slice(0));
    			        },

    			        _doProcessBlock: function (M, offset) {
    			            // Shortcut
    			            var H = this._hash.words;

    			            // Working variables
    			            var a = H[0];
    			            var b = H[1];
    			            var c = H[2];
    			            var d = H[3];
    			            var e = H[4];
    			            var f = H[5];
    			            var g = H[6];
    			            var h = H[7];

    			            // Computation
    			            for (var i = 0; i < 64; i++) {
    			                if (i < 16) {
    			                    W[i] = M[offset + i] | 0;
    			                } else {
    			                    var gamma0x = W[i - 15];
    			                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
    			                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
    			                                   (gamma0x >>> 3);

    			                    var gamma1x = W[i - 2];
    			                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
    			                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
    			                                   (gamma1x >>> 10);

    			                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
    			                }

    			                var ch  = (e & f) ^ (~e & g);
    			                var maj = (a & b) ^ (a & c) ^ (b & c);

    			                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
    			                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

    			                var t1 = h + sigma1 + ch + K[i] + W[i];
    			                var t2 = sigma0 + maj;

    			                h = g;
    			                g = f;
    			                f = e;
    			                e = (d + t1) | 0;
    			                d = c;
    			                c = b;
    			                b = a;
    			                a = (t1 + t2) | 0;
    			            }

    			            // Intermediate hash value
    			            H[0] = (H[0] + a) | 0;
    			            H[1] = (H[1] + b) | 0;
    			            H[2] = (H[2] + c) | 0;
    			            H[3] = (H[3] + d) | 0;
    			            H[4] = (H[4] + e) | 0;
    			            H[5] = (H[5] + f) | 0;
    			            H[6] = (H[6] + g) | 0;
    			            H[7] = (H[7] + h) | 0;
    			        },

    			        _doFinalize: function () {
    			            // Shortcuts
    			            var data = this._data;
    			            var dataWords = data.words;

    			            var nBitsTotal = this._nDataBytes * 8;
    			            var nBitsLeft = data.sigBytes * 8;

    			            // Add padding
    			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    			            data.sigBytes = dataWords.length * 4;

    			            // Hash final blocks
    			            this._process();

    			            // Return final computed hash
    			            return this._hash;
    			        },

    			        clone: function () {
    			            var clone = Hasher.clone.call(this);
    			            clone._hash = this._hash.clone();

    			            return clone;
    			        }
    			    });

    			    /**
    			     * Shortcut function to the hasher's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     *
    			     * @return {WordArray} The hash.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hash = CryptoJS.SHA256('message');
    			     *     var hash = CryptoJS.SHA256(wordArray);
    			     */
    			    C.SHA256 = Hasher._createHelper(SHA256);

    			    /**
    			     * Shortcut function to the HMAC's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     * @param {WordArray|string} key The secret key.
    			     *
    			     * @return {WordArray} The HMAC.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hmac = CryptoJS.HmacSHA256(message, key);
    			     */
    			    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    			}(Math));


    			return CryptoJS.SHA256;

    		})); 
    	} (sha256));
    	return sha256.exports;
    }

    var sha224 = {exports: {}};

    var hasRequiredSha224;

    function requireSha224 () {
    	if (hasRequiredSha224) return sha224.exports;
    	hasRequiredSha224 = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireSha256());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var C_algo = C.algo;
    			    var SHA256 = C_algo.SHA256;

    			    /**
    			     * SHA-224 hash algorithm.
    			     */
    			    var SHA224 = C_algo.SHA224 = SHA256.extend({
    			        _doReset: function () {
    			            this._hash = new WordArray.init([
    			                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
    			                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
    			            ]);
    			        },

    			        _doFinalize: function () {
    			            var hash = SHA256._doFinalize.call(this);

    			            hash.sigBytes -= 4;

    			            return hash;
    			        }
    			    });

    			    /**
    			     * Shortcut function to the hasher's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     *
    			     * @return {WordArray} The hash.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hash = CryptoJS.SHA224('message');
    			     *     var hash = CryptoJS.SHA224(wordArray);
    			     */
    			    C.SHA224 = SHA256._createHelper(SHA224);

    			    /**
    			     * Shortcut function to the HMAC's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     * @param {WordArray|string} key The secret key.
    			     *
    			     * @return {WordArray} The HMAC.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hmac = CryptoJS.HmacSHA224(message, key);
    			     */
    			    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
    			}());


    			return CryptoJS.SHA224;

    		})); 
    	} (sha224));
    	return sha224.exports;
    }

    var sha512 = {exports: {}};

    var hasRequiredSha512;

    function requireSha512 () {
    	if (hasRequiredSha512) return sha512.exports;
    	hasRequiredSha512 = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireX64Core());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var Hasher = C_lib.Hasher;
    			    var C_x64 = C.x64;
    			    var X64Word = C_x64.Word;
    			    var X64WordArray = C_x64.WordArray;
    			    var C_algo = C.algo;

    			    function X64Word_create() {
    			        return X64Word.create.apply(X64Word, arguments);
    			    }

    			    // Constants
    			    var K = [
    			        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
    			        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
    			        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
    			        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
    			        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
    			        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
    			        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
    			        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
    			        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
    			        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
    			        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
    			        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
    			        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
    			        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
    			        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
    			        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
    			        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
    			        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
    			        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
    			        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
    			        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
    			        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
    			        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
    			        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
    			        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
    			        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
    			        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
    			        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
    			        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
    			        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
    			        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
    			        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
    			        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
    			        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
    			        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
    			        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
    			        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
    			        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
    			        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
    			        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
    			    ];

    			    // Reusable objects
    			    var W = [];
    			    (function () {
    			        for (var i = 0; i < 80; i++) {
    			            W[i] = X64Word_create();
    			        }
    			    }());

    			    /**
    			     * SHA-512 hash algorithm.
    			     */
    			    var SHA512 = C_algo.SHA512 = Hasher.extend({
    			        _doReset: function () {
    			            this._hash = new X64WordArray.init([
    			                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
    			                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
    			                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
    			                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
    			            ]);
    			        },

    			        _doProcessBlock: function (M, offset) {
    			            // Shortcuts
    			            var H = this._hash.words;

    			            var H0 = H[0];
    			            var H1 = H[1];
    			            var H2 = H[2];
    			            var H3 = H[3];
    			            var H4 = H[4];
    			            var H5 = H[5];
    			            var H6 = H[6];
    			            var H7 = H[7];

    			            var H0h = H0.high;
    			            var H0l = H0.low;
    			            var H1h = H1.high;
    			            var H1l = H1.low;
    			            var H2h = H2.high;
    			            var H2l = H2.low;
    			            var H3h = H3.high;
    			            var H3l = H3.low;
    			            var H4h = H4.high;
    			            var H4l = H4.low;
    			            var H5h = H5.high;
    			            var H5l = H5.low;
    			            var H6h = H6.high;
    			            var H6l = H6.low;
    			            var H7h = H7.high;
    			            var H7l = H7.low;

    			            // Working variables
    			            var ah = H0h;
    			            var al = H0l;
    			            var bh = H1h;
    			            var bl = H1l;
    			            var ch = H2h;
    			            var cl = H2l;
    			            var dh = H3h;
    			            var dl = H3l;
    			            var eh = H4h;
    			            var el = H4l;
    			            var fh = H5h;
    			            var fl = H5l;
    			            var gh = H6h;
    			            var gl = H6l;
    			            var hh = H7h;
    			            var hl = H7l;

    			            // Rounds
    			            for (var i = 0; i < 80; i++) {
    			                var Wil;
    			                var Wih;

    			                // Shortcut
    			                var Wi = W[i];

    			                // Extend message
    			                if (i < 16) {
    			                    Wih = Wi.high = M[offset + i * 2]     | 0;
    			                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
    			                } else {
    			                    // Gamma0
    			                    var gamma0x  = W[i - 15];
    			                    var gamma0xh = gamma0x.high;
    			                    var gamma0xl = gamma0x.low;
    			                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
    			                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

    			                    // Gamma1
    			                    var gamma1x  = W[i - 2];
    			                    var gamma1xh = gamma1x.high;
    			                    var gamma1xl = gamma1x.low;
    			                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
    			                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

    			                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
    			                    var Wi7  = W[i - 7];
    			                    var Wi7h = Wi7.high;
    			                    var Wi7l = Wi7.low;

    			                    var Wi16  = W[i - 16];
    			                    var Wi16h = Wi16.high;
    			                    var Wi16l = Wi16.low;

    			                    Wil = gamma0l + Wi7l;
    			                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
    			                    Wil = Wil + gamma1l;
    			                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
    			                    Wil = Wil + Wi16l;
    			                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

    			                    Wi.high = Wih;
    			                    Wi.low  = Wil;
    			                }

    			                var chh  = (eh & fh) ^ (~eh & gh);
    			                var chl  = (el & fl) ^ (~el & gl);
    			                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
    			                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

    			                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
    			                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
    			                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
    			                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

    			                // t1 = h + sigma1 + ch + K[i] + W[i]
    			                var Ki  = K[i];
    			                var Kih = Ki.high;
    			                var Kil = Ki.low;

    			                var t1l = hl + sigma1l;
    			                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
    			                var t1l = t1l + chl;
    			                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
    			                var t1l = t1l + Kil;
    			                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
    			                var t1l = t1l + Wil;
    			                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

    			                // t2 = sigma0 + maj
    			                var t2l = sigma0l + majl;
    			                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

    			                // Update working variables
    			                hh = gh;
    			                hl = gl;
    			                gh = fh;
    			                gl = fl;
    			                fh = eh;
    			                fl = el;
    			                el = (dl + t1l) | 0;
    			                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
    			                dh = ch;
    			                dl = cl;
    			                ch = bh;
    			                cl = bl;
    			                bh = ah;
    			                bl = al;
    			                al = (t1l + t2l) | 0;
    			                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
    			            }

    			            // Intermediate hash value
    			            H0l = H0.low  = (H0l + al);
    			            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
    			            H1l = H1.low  = (H1l + bl);
    			            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
    			            H2l = H2.low  = (H2l + cl);
    			            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
    			            H3l = H3.low  = (H3l + dl);
    			            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
    			            H4l = H4.low  = (H4l + el);
    			            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
    			            H5l = H5.low  = (H5l + fl);
    			            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
    			            H6l = H6.low  = (H6l + gl);
    			            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
    			            H7l = H7.low  = (H7l + hl);
    			            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
    			        },

    			        _doFinalize: function () {
    			            // Shortcuts
    			            var data = this._data;
    			            var dataWords = data.words;

    			            var nBitsTotal = this._nDataBytes * 8;
    			            var nBitsLeft = data.sigBytes * 8;

    			            // Add padding
    			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    			            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
    			            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
    			            data.sigBytes = dataWords.length * 4;

    			            // Hash final blocks
    			            this._process();

    			            // Convert hash to 32-bit word array before returning
    			            var hash = this._hash.toX32();

    			            // Return final computed hash
    			            return hash;
    			        },

    			        clone: function () {
    			            var clone = Hasher.clone.call(this);
    			            clone._hash = this._hash.clone();

    			            return clone;
    			        },

    			        blockSize: 1024/32
    			    });

    			    /**
    			     * Shortcut function to the hasher's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     *
    			     * @return {WordArray} The hash.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hash = CryptoJS.SHA512('message');
    			     *     var hash = CryptoJS.SHA512(wordArray);
    			     */
    			    C.SHA512 = Hasher._createHelper(SHA512);

    			    /**
    			     * Shortcut function to the HMAC's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     * @param {WordArray|string} key The secret key.
    			     *
    			     * @return {WordArray} The HMAC.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hmac = CryptoJS.HmacSHA512(message, key);
    			     */
    			    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
    			}());


    			return CryptoJS.SHA512;

    		})); 
    	} (sha512));
    	return sha512.exports;
    }

    var sha384 = {exports: {}};

    var hasRequiredSha384;

    function requireSha384 () {
    	if (hasRequiredSha384) return sha384.exports;
    	hasRequiredSha384 = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireX64Core(), requireSha512());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_x64 = C.x64;
    			    var X64Word = C_x64.Word;
    			    var X64WordArray = C_x64.WordArray;
    			    var C_algo = C.algo;
    			    var SHA512 = C_algo.SHA512;

    			    /**
    			     * SHA-384 hash algorithm.
    			     */
    			    var SHA384 = C_algo.SHA384 = SHA512.extend({
    			        _doReset: function () {
    			            this._hash = new X64WordArray.init([
    			                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
    			                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
    			                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
    			                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
    			            ]);
    			        },

    			        _doFinalize: function () {
    			            var hash = SHA512._doFinalize.call(this);

    			            hash.sigBytes -= 16;

    			            return hash;
    			        }
    			    });

    			    /**
    			     * Shortcut function to the hasher's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     *
    			     * @return {WordArray} The hash.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hash = CryptoJS.SHA384('message');
    			     *     var hash = CryptoJS.SHA384(wordArray);
    			     */
    			    C.SHA384 = SHA512._createHelper(SHA384);

    			    /**
    			     * Shortcut function to the HMAC's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     * @param {WordArray|string} key The secret key.
    			     *
    			     * @return {WordArray} The HMAC.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hmac = CryptoJS.HmacSHA384(message, key);
    			     */
    			    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
    			}());


    			return CryptoJS.SHA384;

    		})); 
    	} (sha384));
    	return sha384.exports;
    }

    var sha3 = {exports: {}};

    var hasRequiredSha3;

    function requireSha3 () {
    	if (hasRequiredSha3) return sha3.exports;
    	hasRequiredSha3 = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireX64Core());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function (Math) {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var Hasher = C_lib.Hasher;
    			    var C_x64 = C.x64;
    			    var X64Word = C_x64.Word;
    			    var C_algo = C.algo;

    			    // Constants tables
    			    var RHO_OFFSETS = [];
    			    var PI_INDEXES  = [];
    			    var ROUND_CONSTANTS = [];

    			    // Compute Constants
    			    (function () {
    			        // Compute rho offset constants
    			        var x = 1, y = 0;
    			        for (var t = 0; t < 24; t++) {
    			            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

    			            var newX = y % 5;
    			            var newY = (2 * x + 3 * y) % 5;
    			            x = newX;
    			            y = newY;
    			        }

    			        // Compute pi index constants
    			        for (var x = 0; x < 5; x++) {
    			            for (var y = 0; y < 5; y++) {
    			                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
    			            }
    			        }

    			        // Compute round constants
    			        var LFSR = 0x01;
    			        for (var i = 0; i < 24; i++) {
    			            var roundConstantMsw = 0;
    			            var roundConstantLsw = 0;

    			            for (var j = 0; j < 7; j++) {
    			                if (LFSR & 0x01) {
    			                    var bitPosition = (1 << j) - 1;
    			                    if (bitPosition < 32) {
    			                        roundConstantLsw ^= 1 << bitPosition;
    			                    } else /* if (bitPosition >= 32) */ {
    			                        roundConstantMsw ^= 1 << (bitPosition - 32);
    			                    }
    			                }

    			                // Compute next LFSR
    			                if (LFSR & 0x80) {
    			                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
    			                    LFSR = (LFSR << 1) ^ 0x71;
    			                } else {
    			                    LFSR <<= 1;
    			                }
    			            }

    			            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
    			        }
    			    }());

    			    // Reusable objects for temporary values
    			    var T = [];
    			    (function () {
    			        for (var i = 0; i < 25; i++) {
    			            T[i] = X64Word.create();
    			        }
    			    }());

    			    /**
    			     * SHA-3 hash algorithm.
    			     */
    			    var SHA3 = C_algo.SHA3 = Hasher.extend({
    			        /**
    			         * Configuration options.
    			         *
    			         * @property {number} outputLength
    			         *   The desired number of bits in the output hash.
    			         *   Only values permitted are: 224, 256, 384, 512.
    			         *   Default: 512
    			         */
    			        cfg: Hasher.cfg.extend({
    			            outputLength: 512
    			        }),

    			        _doReset: function () {
    			            var state = this._state = [];
    			            for (var i = 0; i < 25; i++) {
    			                state[i] = new X64Word.init();
    			            }

    			            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
    			        },

    			        _doProcessBlock: function (M, offset) {
    			            // Shortcuts
    			            var state = this._state;
    			            var nBlockSizeLanes = this.blockSize / 2;

    			            // Absorb
    			            for (var i = 0; i < nBlockSizeLanes; i++) {
    			                // Shortcuts
    			                var M2i  = M[offset + 2 * i];
    			                var M2i1 = M[offset + 2 * i + 1];

    			                // Swap endian
    			                M2i = (
    			                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
    			                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
    			                );
    			                M2i1 = (
    			                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
    			                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
    			                );

    			                // Absorb message into state
    			                var lane = state[i];
    			                lane.high ^= M2i1;
    			                lane.low  ^= M2i;
    			            }

    			            // Rounds
    			            for (var round = 0; round < 24; round++) {
    			                // Theta
    			                for (var x = 0; x < 5; x++) {
    			                    // Mix column lanes
    			                    var tMsw = 0, tLsw = 0;
    			                    for (var y = 0; y < 5; y++) {
    			                        var lane = state[x + 5 * y];
    			                        tMsw ^= lane.high;
    			                        tLsw ^= lane.low;
    			                    }

    			                    // Temporary values
    			                    var Tx = T[x];
    			                    Tx.high = tMsw;
    			                    Tx.low  = tLsw;
    			                }
    			                for (var x = 0; x < 5; x++) {
    			                    // Shortcuts
    			                    var Tx4 = T[(x + 4) % 5];
    			                    var Tx1 = T[(x + 1) % 5];
    			                    var Tx1Msw = Tx1.high;
    			                    var Tx1Lsw = Tx1.low;

    			                    // Mix surrounding columns
    			                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
    			                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
    			                    for (var y = 0; y < 5; y++) {
    			                        var lane = state[x + 5 * y];
    			                        lane.high ^= tMsw;
    			                        lane.low  ^= tLsw;
    			                    }
    			                }

    			                // Rho Pi
    			                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
    			                    var tMsw;
    			                    var tLsw;

    			                    // Shortcuts
    			                    var lane = state[laneIndex];
    			                    var laneMsw = lane.high;
    			                    var laneLsw = lane.low;
    			                    var rhoOffset = RHO_OFFSETS[laneIndex];

    			                    // Rotate lanes
    			                    if (rhoOffset < 32) {
    			                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
    			                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
    			                    } else /* if (rhoOffset >= 32) */ {
    			                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
    			                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
    			                    }

    			                    // Transpose lanes
    			                    var TPiLane = T[PI_INDEXES[laneIndex]];
    			                    TPiLane.high = tMsw;
    			                    TPiLane.low  = tLsw;
    			                }

    			                // Rho pi at x = y = 0
    			                var T0 = T[0];
    			                var state0 = state[0];
    			                T0.high = state0.high;
    			                T0.low  = state0.low;

    			                // Chi
    			                for (var x = 0; x < 5; x++) {
    			                    for (var y = 0; y < 5; y++) {
    			                        // Shortcuts
    			                        var laneIndex = x + 5 * y;
    			                        var lane = state[laneIndex];
    			                        var TLane = T[laneIndex];
    			                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
    			                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

    			                        // Mix rows
    			                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
    			                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
    			                    }
    			                }

    			                // Iota
    			                var lane = state[0];
    			                var roundConstant = ROUND_CONSTANTS[round];
    			                lane.high ^= roundConstant.high;
    			                lane.low  ^= roundConstant.low;
    			            }
    			        },

    			        _doFinalize: function () {
    			            // Shortcuts
    			            var data = this._data;
    			            var dataWords = data.words;
    			            this._nDataBytes * 8;
    			            var nBitsLeft = data.sigBytes * 8;
    			            var blockSizeBits = this.blockSize * 32;

    			            // Add padding
    			            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
    			            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
    			            data.sigBytes = dataWords.length * 4;

    			            // Hash final blocks
    			            this._process();

    			            // Shortcuts
    			            var state = this._state;
    			            var outputLengthBytes = this.cfg.outputLength / 8;
    			            var outputLengthLanes = outputLengthBytes / 8;

    			            // Squeeze
    			            var hashWords = [];
    			            for (var i = 0; i < outputLengthLanes; i++) {
    			                // Shortcuts
    			                var lane = state[i];
    			                var laneMsw = lane.high;
    			                var laneLsw = lane.low;

    			                // Swap endian
    			                laneMsw = (
    			                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
    			                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
    			                );
    			                laneLsw = (
    			                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
    			                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
    			                );

    			                // Squeeze state to retrieve hash
    			                hashWords.push(laneLsw);
    			                hashWords.push(laneMsw);
    			            }

    			            // Return final computed hash
    			            return new WordArray.init(hashWords, outputLengthBytes);
    			        },

    			        clone: function () {
    			            var clone = Hasher.clone.call(this);

    			            var state = clone._state = this._state.slice(0);
    			            for (var i = 0; i < 25; i++) {
    			                state[i] = state[i].clone();
    			            }

    			            return clone;
    			        }
    			    });

    			    /**
    			     * Shortcut function to the hasher's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     *
    			     * @return {WordArray} The hash.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hash = CryptoJS.SHA3('message');
    			     *     var hash = CryptoJS.SHA3(wordArray);
    			     */
    			    C.SHA3 = Hasher._createHelper(SHA3);

    			    /**
    			     * Shortcut function to the HMAC's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     * @param {WordArray|string} key The secret key.
    			     *
    			     * @return {WordArray} The HMAC.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hmac = CryptoJS.HmacSHA3(message, key);
    			     */
    			    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
    			}(Math));


    			return CryptoJS.SHA3;

    		})); 
    	} (sha3));
    	return sha3.exports;
    }

    var ripemd160 = {exports: {}};

    var hasRequiredRipemd160;

    function requireRipemd160 () {
    	if (hasRequiredRipemd160) return ripemd160.exports;
    	hasRequiredRipemd160 = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/** @preserve
    			(c) 2012 by Cédric Mesnil. All rights reserved.

    			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

    			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    			*/

    			(function (Math) {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var Hasher = C_lib.Hasher;
    			    var C_algo = C.algo;

    			    // Constants table
    			    var _zl = WordArray.create([
    			        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
    			        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
    			        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
    			        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
    			        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
    			    var _zr = WordArray.create([
    			        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
    			        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
    			        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
    			        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
    			        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
    			    var _sl = WordArray.create([
    			         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
    			        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
    			        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
    			          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
    			        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
    			    var _sr = WordArray.create([
    			        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
    			        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
    			        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
    			        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
    			        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

    			    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
    			    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

    			    /**
    			     * RIPEMD160 hash algorithm.
    			     */
    			    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
    			        _doReset: function () {
    			            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
    			        },

    			        _doProcessBlock: function (M, offset) {

    			            // Swap endian
    			            for (var i = 0; i < 16; i++) {
    			                // Shortcuts
    			                var offset_i = offset + i;
    			                var M_offset_i = M[offset_i];

    			                // Swap
    			                M[offset_i] = (
    			                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
    			                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
    			                );
    			            }
    			            // Shortcut
    			            var H  = this._hash.words;
    			            var hl = _hl.words;
    			            var hr = _hr.words;
    			            var zl = _zl.words;
    			            var zr = _zr.words;
    			            var sl = _sl.words;
    			            var sr = _sr.words;

    			            // Working variables
    			            var al, bl, cl, dl, el;
    			            var ar, br, cr, dr, er;

    			            ar = al = H[0];
    			            br = bl = H[1];
    			            cr = cl = H[2];
    			            dr = dl = H[3];
    			            er = el = H[4];
    			            // Computation
    			            var t;
    			            for (var i = 0; i < 80; i += 1) {
    			                t = (al +  M[offset+zl[i]])|0;
    			                if (i<16){
    				            t +=  f1(bl,cl,dl) + hl[0];
    			                } else if (i<32) {
    				            t +=  f2(bl,cl,dl) + hl[1];
    			                } else if (i<48) {
    				            t +=  f3(bl,cl,dl) + hl[2];
    			                } else if (i<64) {
    				            t +=  f4(bl,cl,dl) + hl[3];
    			                } else {// if (i<80) {
    				            t +=  f5(bl,cl,dl) + hl[4];
    			                }
    			                t = t|0;
    			                t =  rotl(t,sl[i]);
    			                t = (t+el)|0;
    			                al = el;
    			                el = dl;
    			                dl = rotl(cl, 10);
    			                cl = bl;
    			                bl = t;

    			                t = (ar + M[offset+zr[i]])|0;
    			                if (i<16){
    				            t +=  f5(br,cr,dr) + hr[0];
    			                } else if (i<32) {
    				            t +=  f4(br,cr,dr) + hr[1];
    			                } else if (i<48) {
    				            t +=  f3(br,cr,dr) + hr[2];
    			                } else if (i<64) {
    				            t +=  f2(br,cr,dr) + hr[3];
    			                } else {// if (i<80) {
    				            t +=  f1(br,cr,dr) + hr[4];
    			                }
    			                t = t|0;
    			                t =  rotl(t,sr[i]) ;
    			                t = (t+er)|0;
    			                ar = er;
    			                er = dr;
    			                dr = rotl(cr, 10);
    			                cr = br;
    			                br = t;
    			            }
    			            // Intermediate hash value
    			            t    = (H[1] + cl + dr)|0;
    			            H[1] = (H[2] + dl + er)|0;
    			            H[2] = (H[3] + el + ar)|0;
    			            H[3] = (H[4] + al + br)|0;
    			            H[4] = (H[0] + bl + cr)|0;
    			            H[0] =  t;
    			        },

    			        _doFinalize: function () {
    			            // Shortcuts
    			            var data = this._data;
    			            var dataWords = data.words;

    			            var nBitsTotal = this._nDataBytes * 8;
    			            var nBitsLeft = data.sigBytes * 8;

    			            // Add padding
    			            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    			            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
    			                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
    			                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
    			            );
    			            data.sigBytes = (dataWords.length + 1) * 4;

    			            // Hash final blocks
    			            this._process();

    			            // Shortcuts
    			            var hash = this._hash;
    			            var H = hash.words;

    			            // Swap endian
    			            for (var i = 0; i < 5; i++) {
    			                // Shortcut
    			                var H_i = H[i];

    			                // Swap
    			                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
    			                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
    			            }

    			            // Return final computed hash
    			            return hash;
    			        },

    			        clone: function () {
    			            var clone = Hasher.clone.call(this);
    			            clone._hash = this._hash.clone();

    			            return clone;
    			        }
    			    });


    			    function f1(x, y, z) {
    			        return ((x) ^ (y) ^ (z));

    			    }

    			    function f2(x, y, z) {
    			        return (((x)&(y)) | ((~x)&(z)));
    			    }

    			    function f3(x, y, z) {
    			        return (((x) | (~(y))) ^ (z));
    			    }

    			    function f4(x, y, z) {
    			        return (((x) & (z)) | ((y)&(~(z))));
    			    }

    			    function f5(x, y, z) {
    			        return ((x) ^ ((y) |(~(z))));

    			    }

    			    function rotl(x,n) {
    			        return (x<<n) | (x>>>(32-n));
    			    }


    			    /**
    			     * Shortcut function to the hasher's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     *
    			     * @return {WordArray} The hash.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hash = CryptoJS.RIPEMD160('message');
    			     *     var hash = CryptoJS.RIPEMD160(wordArray);
    			     */
    			    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

    			    /**
    			     * Shortcut function to the HMAC's object interface.
    			     *
    			     * @param {WordArray|string} message The message to hash.
    			     * @param {WordArray|string} key The secret key.
    			     *
    			     * @return {WordArray} The HMAC.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
    			     */
    			    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
    			}());


    			return CryptoJS.RIPEMD160;

    		})); 
    	} (ripemd160));
    	return ripemd160.exports;
    }

    var hmac = {exports: {}};

    var hasRequiredHmac;

    function requireHmac () {
    	if (hasRequiredHmac) return hmac.exports;
    	hasRequiredHmac = 1;
    	(function (module, exports) {
    (function (root, factory) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var Base = C_lib.Base;
    			    var C_enc = C.enc;
    			    var Utf8 = C_enc.Utf8;
    			    var C_algo = C.algo;

    			    /**
    			     * HMAC algorithm.
    			     */
    			    C_algo.HMAC = Base.extend({
    			        /**
    			         * Initializes a newly created HMAC.
    			         *
    			         * @param {Hasher} hasher The hash algorithm to use.
    			         * @param {WordArray|string} key The secret key.
    			         *
    			         * @example
    			         *
    			         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
    			         */
    			        init: function (hasher, key) {
    			            // Init hasher
    			            hasher = this._hasher = new hasher.init();

    			            // Convert string to WordArray, else assume WordArray already
    			            if (typeof key == 'string') {
    			                key = Utf8.parse(key);
    			            }

    			            // Shortcuts
    			            var hasherBlockSize = hasher.blockSize;
    			            var hasherBlockSizeBytes = hasherBlockSize * 4;

    			            // Allow arbitrary length keys
    			            if (key.sigBytes > hasherBlockSizeBytes) {
    			                key = hasher.finalize(key);
    			            }

    			            // Clamp excess bits
    			            key.clamp();

    			            // Clone key for inner and outer pads
    			            var oKey = this._oKey = key.clone();
    			            var iKey = this._iKey = key.clone();

    			            // Shortcuts
    			            var oKeyWords = oKey.words;
    			            var iKeyWords = iKey.words;

    			            // XOR keys with pad constants
    			            for (var i = 0; i < hasherBlockSize; i++) {
    			                oKeyWords[i] ^= 0x5c5c5c5c;
    			                iKeyWords[i] ^= 0x36363636;
    			            }
    			            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

    			            // Set initial values
    			            this.reset();
    			        },

    			        /**
    			         * Resets this HMAC to its initial state.
    			         *
    			         * @example
    			         *
    			         *     hmacHasher.reset();
    			         */
    			        reset: function () {
    			            // Shortcut
    			            var hasher = this._hasher;

    			            // Reset
    			            hasher.reset();
    			            hasher.update(this._iKey);
    			        },

    			        /**
    			         * Updates this HMAC with a message.
    			         *
    			         * @param {WordArray|string} messageUpdate The message to append.
    			         *
    			         * @return {HMAC} This HMAC instance.
    			         *
    			         * @example
    			         *
    			         *     hmacHasher.update('message');
    			         *     hmacHasher.update(wordArray);
    			         */
    			        update: function (messageUpdate) {
    			            this._hasher.update(messageUpdate);

    			            // Chainable
    			            return this;
    			        },

    			        /**
    			         * Finalizes the HMAC computation.
    			         * Note that the finalize operation is effectively a destructive, read-once operation.
    			         *
    			         * @param {WordArray|string} messageUpdate (Optional) A final message update.
    			         *
    			         * @return {WordArray} The HMAC.
    			         *
    			         * @example
    			         *
    			         *     var hmac = hmacHasher.finalize();
    			         *     var hmac = hmacHasher.finalize('message');
    			         *     var hmac = hmacHasher.finalize(wordArray);
    			         */
    			        finalize: function (messageUpdate) {
    			            // Shortcut
    			            var hasher = this._hasher;

    			            // Compute HMAC
    			            var innerHash = hasher.finalize(messageUpdate);
    			            hasher.reset();
    			            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

    			            return hmac;
    			        }
    			    });
    			}());


    		})); 
    	} (hmac));
    	return hmac.exports;
    }

    var pbkdf2 = {exports: {}};

    var hasRequiredPbkdf2;

    function requirePbkdf2 () {
    	if (hasRequiredPbkdf2) return pbkdf2.exports;
    	hasRequiredPbkdf2 = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireSha256(), requireHmac());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var Base = C_lib.Base;
    			    var WordArray = C_lib.WordArray;
    			    var C_algo = C.algo;
    			    var SHA256 = C_algo.SHA256;
    			    var HMAC = C_algo.HMAC;

    			    /**
    			     * Password-Based Key Derivation Function 2 algorithm.
    			     */
    			    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
    			        /**
    			         * Configuration options.
    			         *
    			         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
    			         * @property {Hasher} hasher The hasher to use. Default: SHA256
    			         * @property {number} iterations The number of iterations to perform. Default: 250000
    			         */
    			        cfg: Base.extend({
    			            keySize: 128/32,
    			            hasher: SHA256,
    			            iterations: 250000
    			        }),

    			        /**
    			         * Initializes a newly created key derivation function.
    			         *
    			         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
    			         *
    			         * @example
    			         *
    			         *     var kdf = CryptoJS.algo.PBKDF2.create();
    			         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
    			         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
    			         */
    			        init: function (cfg) {
    			            this.cfg = this.cfg.extend(cfg);
    			        },

    			        /**
    			         * Computes the Password-Based Key Derivation Function 2.
    			         *
    			         * @param {WordArray|string} password The password.
    			         * @param {WordArray|string} salt A salt.
    			         *
    			         * @return {WordArray} The derived key.
    			         *
    			         * @example
    			         *
    			         *     var key = kdf.compute(password, salt);
    			         */
    			        compute: function (password, salt) {
    			            // Shortcut
    			            var cfg = this.cfg;

    			            // Init HMAC
    			            var hmac = HMAC.create(cfg.hasher, password);

    			            // Initial values
    			            var derivedKey = WordArray.create();
    			            var blockIndex = WordArray.create([0x00000001]);

    			            // Shortcuts
    			            var derivedKeyWords = derivedKey.words;
    			            var blockIndexWords = blockIndex.words;
    			            var keySize = cfg.keySize;
    			            var iterations = cfg.iterations;

    			            // Generate key
    			            while (derivedKeyWords.length < keySize) {
    			                var block = hmac.update(salt).finalize(blockIndex);
    			                hmac.reset();

    			                // Shortcuts
    			                var blockWords = block.words;
    			                var blockWordsLength = blockWords.length;

    			                // Iterations
    			                var intermediate = block;
    			                for (var i = 1; i < iterations; i++) {
    			                    intermediate = hmac.finalize(intermediate);
    			                    hmac.reset();

    			                    // Shortcut
    			                    var intermediateWords = intermediate.words;

    			                    // XOR intermediate with block
    			                    for (var j = 0; j < blockWordsLength; j++) {
    			                        blockWords[j] ^= intermediateWords[j];
    			                    }
    			                }

    			                derivedKey.concat(block);
    			                blockIndexWords[0]++;
    			            }
    			            derivedKey.sigBytes = keySize * 4;

    			            return derivedKey;
    			        }
    			    });

    			    /**
    			     * Computes the Password-Based Key Derivation Function 2.
    			     *
    			     * @param {WordArray|string} password The password.
    			     * @param {WordArray|string} salt A salt.
    			     * @param {Object} cfg (Optional) The configuration options to use for this computation.
    			     *
    			     * @return {WordArray} The derived key.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var key = CryptoJS.PBKDF2(password, salt);
    			     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
    			     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
    			     */
    			    C.PBKDF2 = function (password, salt, cfg) {
    			        return PBKDF2.create(cfg).compute(password, salt);
    			    };
    			}());


    			return CryptoJS.PBKDF2;

    		})); 
    	} (pbkdf2));
    	return pbkdf2.exports;
    }

    var evpkdf = {exports: {}};

    var hasRequiredEvpkdf;

    function requireEvpkdf () {
    	if (hasRequiredEvpkdf) return evpkdf.exports;
    	hasRequiredEvpkdf = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireSha1(), requireHmac());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var Base = C_lib.Base;
    			    var WordArray = C_lib.WordArray;
    			    var C_algo = C.algo;
    			    var MD5 = C_algo.MD5;

    			    /**
    			     * This key derivation function is meant to conform with EVP_BytesToKey.
    			     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
    			     */
    			    var EvpKDF = C_algo.EvpKDF = Base.extend({
    			        /**
    			         * Configuration options.
    			         *
    			         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
    			         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
    			         * @property {number} iterations The number of iterations to perform. Default: 1
    			         */
    			        cfg: Base.extend({
    			            keySize: 128/32,
    			            hasher: MD5,
    			            iterations: 1
    			        }),

    			        /**
    			         * Initializes a newly created key derivation function.
    			         *
    			         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
    			         *
    			         * @example
    			         *
    			         *     var kdf = CryptoJS.algo.EvpKDF.create();
    			         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
    			         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
    			         */
    			        init: function (cfg) {
    			            this.cfg = this.cfg.extend(cfg);
    			        },

    			        /**
    			         * Derives a key from a password.
    			         *
    			         * @param {WordArray|string} password The password.
    			         * @param {WordArray|string} salt A salt.
    			         *
    			         * @return {WordArray} The derived key.
    			         *
    			         * @example
    			         *
    			         *     var key = kdf.compute(password, salt);
    			         */
    			        compute: function (password, salt) {
    			            var block;

    			            // Shortcut
    			            var cfg = this.cfg;

    			            // Init hasher
    			            var hasher = cfg.hasher.create();

    			            // Initial values
    			            var derivedKey = WordArray.create();

    			            // Shortcuts
    			            var derivedKeyWords = derivedKey.words;
    			            var keySize = cfg.keySize;
    			            var iterations = cfg.iterations;

    			            // Generate key
    			            while (derivedKeyWords.length < keySize) {
    			                if (block) {
    			                    hasher.update(block);
    			                }
    			                block = hasher.update(password).finalize(salt);
    			                hasher.reset();

    			                // Iterations
    			                for (var i = 1; i < iterations; i++) {
    			                    block = hasher.finalize(block);
    			                    hasher.reset();
    			                }

    			                derivedKey.concat(block);
    			            }
    			            derivedKey.sigBytes = keySize * 4;

    			            return derivedKey;
    			        }
    			    });

    			    /**
    			     * Derives a key from a password.
    			     *
    			     * @param {WordArray|string} password The password.
    			     * @param {WordArray|string} salt A salt.
    			     * @param {Object} cfg (Optional) The configuration options to use for this computation.
    			     *
    			     * @return {WordArray} The derived key.
    			     *
    			     * @static
    			     *
    			     * @example
    			     *
    			     *     var key = CryptoJS.EvpKDF(password, salt);
    			     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
    			     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
    			     */
    			    C.EvpKDF = function (password, salt, cfg) {
    			        return EvpKDF.create(cfg).compute(password, salt);
    			    };
    			}());


    			return CryptoJS.EvpKDF;

    		})); 
    	} (evpkdf));
    	return evpkdf.exports;
    }

    var cipherCore = {exports: {}};

    var hasRequiredCipherCore;

    function requireCipherCore () {
    	if (hasRequiredCipherCore) return cipherCore.exports;
    	hasRequiredCipherCore = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireEvpkdf());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * Cipher core components.
    			 */
    			CryptoJS.lib.Cipher || (function (undefined$1) {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var Base = C_lib.Base;
    			    var WordArray = C_lib.WordArray;
    			    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    			    var C_enc = C.enc;
    			    C_enc.Utf8;
    			    var Base64 = C_enc.Base64;
    			    var C_algo = C.algo;
    			    var EvpKDF = C_algo.EvpKDF;

    			    /**
    			     * Abstract base cipher template.
    			     *
    			     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
    			     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
    			     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
    			     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
    			     */
    			    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
    			        /**
    			         * Configuration options.
    			         *
    			         * @property {WordArray} iv The IV to use for this operation.
    			         */
    			        cfg: Base.extend(),

    			        /**
    			         * Creates this cipher in encryption mode.
    			         *
    			         * @param {WordArray} key The key.
    			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    			         *
    			         * @return {Cipher} A cipher instance.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
    			         */
    			        createEncryptor: function (key, cfg) {
    			            return this.create(this._ENC_XFORM_MODE, key, cfg);
    			        },

    			        /**
    			         * Creates this cipher in decryption mode.
    			         *
    			         * @param {WordArray} key The key.
    			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    			         *
    			         * @return {Cipher} A cipher instance.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
    			         */
    			        createDecryptor: function (key, cfg) {
    			            return this.create(this._DEC_XFORM_MODE, key, cfg);
    			        },

    			        /**
    			         * Initializes a newly created cipher.
    			         *
    			         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
    			         * @param {WordArray} key The key.
    			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    			         *
    			         * @example
    			         *
    			         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
    			         */
    			        init: function (xformMode, key, cfg) {
    			            // Apply config defaults
    			            this.cfg = this.cfg.extend(cfg);

    			            // Store transform mode and key
    			            this._xformMode = xformMode;
    			            this._key = key;

    			            // Set initial values
    			            this.reset();
    			        },

    			        /**
    			         * Resets this cipher to its initial state.
    			         *
    			         * @example
    			         *
    			         *     cipher.reset();
    			         */
    			        reset: function () {
    			            // Reset data buffer
    			            BufferedBlockAlgorithm.reset.call(this);

    			            // Perform concrete-cipher logic
    			            this._doReset();
    			        },

    			        /**
    			         * Adds data to be encrypted or decrypted.
    			         *
    			         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
    			         *
    			         * @return {WordArray} The data after processing.
    			         *
    			         * @example
    			         *
    			         *     var encrypted = cipher.process('data');
    			         *     var encrypted = cipher.process(wordArray);
    			         */
    			        process: function (dataUpdate) {
    			            // Append
    			            this._append(dataUpdate);

    			            // Process available blocks
    			            return this._process();
    			        },

    			        /**
    			         * Finalizes the encryption or decryption process.
    			         * Note that the finalize operation is effectively a destructive, read-once operation.
    			         *
    			         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
    			         *
    			         * @return {WordArray} The data after final processing.
    			         *
    			         * @example
    			         *
    			         *     var encrypted = cipher.finalize();
    			         *     var encrypted = cipher.finalize('data');
    			         *     var encrypted = cipher.finalize(wordArray);
    			         */
    			        finalize: function (dataUpdate) {
    			            // Final data update
    			            if (dataUpdate) {
    			                this._append(dataUpdate);
    			            }

    			            // Perform concrete-cipher logic
    			            var finalProcessedData = this._doFinalize();

    			            return finalProcessedData;
    			        },

    			        keySize: 128/32,

    			        ivSize: 128/32,

    			        _ENC_XFORM_MODE: 1,

    			        _DEC_XFORM_MODE: 2,

    			        /**
    			         * Creates shortcut functions to a cipher's object interface.
    			         *
    			         * @param {Cipher} cipher The cipher to create a helper for.
    			         *
    			         * @return {Object} An object with encrypt and decrypt shortcut functions.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
    			         */
    			        _createHelper: (function () {
    			            function selectCipherStrategy(key) {
    			                if (typeof key == 'string') {
    			                    return PasswordBasedCipher;
    			                } else {
    			                    return SerializableCipher;
    			                }
    			            }

    			            return function (cipher) {
    			                return {
    			                    encrypt: function (message, key, cfg) {
    			                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
    			                    },

    			                    decrypt: function (ciphertext, key, cfg) {
    			                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
    			                    }
    			                };
    			            };
    			        }())
    			    });

    			    /**
    			     * Abstract base stream cipher template.
    			     *
    			     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
    			     */
    			    C_lib.StreamCipher = Cipher.extend({
    			        _doFinalize: function () {
    			            // Process partial blocks
    			            var finalProcessedBlocks = this._process(!!'flush');

    			            return finalProcessedBlocks;
    			        },

    			        blockSize: 1
    			    });

    			    /**
    			     * Mode namespace.
    			     */
    			    var C_mode = C.mode = {};

    			    /**
    			     * Abstract base block cipher mode template.
    			     */
    			    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
    			        /**
    			         * Creates this mode for encryption.
    			         *
    			         * @param {Cipher} cipher A block cipher instance.
    			         * @param {Array} iv The IV words.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
    			         */
    			        createEncryptor: function (cipher, iv) {
    			            return this.Encryptor.create(cipher, iv);
    			        },

    			        /**
    			         * Creates this mode for decryption.
    			         *
    			         * @param {Cipher} cipher A block cipher instance.
    			         * @param {Array} iv The IV words.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
    			         */
    			        createDecryptor: function (cipher, iv) {
    			            return this.Decryptor.create(cipher, iv);
    			        },

    			        /**
    			         * Initializes a newly created mode.
    			         *
    			         * @param {Cipher} cipher A block cipher instance.
    			         * @param {Array} iv The IV words.
    			         *
    			         * @example
    			         *
    			         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
    			         */
    			        init: function (cipher, iv) {
    			            this._cipher = cipher;
    			            this._iv = iv;
    			        }
    			    });

    			    /**
    			     * Cipher Block Chaining mode.
    			     */
    			    var CBC = C_mode.CBC = (function () {
    			        /**
    			         * Abstract base CBC mode.
    			         */
    			        var CBC = BlockCipherMode.extend();

    			        /**
    			         * CBC encryptor.
    			         */
    			        CBC.Encryptor = CBC.extend({
    			            /**
    			             * Processes the data block at offset.
    			             *
    			             * @param {Array} words The data words to operate on.
    			             * @param {number} offset The offset where the block starts.
    			             *
    			             * @example
    			             *
    			             *     mode.processBlock(data.words, offset);
    			             */
    			            processBlock: function (words, offset) {
    			                // Shortcuts
    			                var cipher = this._cipher;
    			                var blockSize = cipher.blockSize;

    			                // XOR and encrypt
    			                xorBlock.call(this, words, offset, blockSize);
    			                cipher.encryptBlock(words, offset);

    			                // Remember this block to use with next block
    			                this._prevBlock = words.slice(offset, offset + blockSize);
    			            }
    			        });

    			        /**
    			         * CBC decryptor.
    			         */
    			        CBC.Decryptor = CBC.extend({
    			            /**
    			             * Processes the data block at offset.
    			             *
    			             * @param {Array} words The data words to operate on.
    			             * @param {number} offset The offset where the block starts.
    			             *
    			             * @example
    			             *
    			             *     mode.processBlock(data.words, offset);
    			             */
    			            processBlock: function (words, offset) {
    			                // Shortcuts
    			                var cipher = this._cipher;
    			                var blockSize = cipher.blockSize;

    			                // Remember this block to use with next block
    			                var thisBlock = words.slice(offset, offset + blockSize);

    			                // Decrypt and XOR
    			                cipher.decryptBlock(words, offset);
    			                xorBlock.call(this, words, offset, blockSize);

    			                // This block becomes the previous block
    			                this._prevBlock = thisBlock;
    			            }
    			        });

    			        function xorBlock(words, offset, blockSize) {
    			            var block;

    			            // Shortcut
    			            var iv = this._iv;

    			            // Choose mixing block
    			            if (iv) {
    			                block = iv;

    			                // Remove IV for subsequent blocks
    			                this._iv = undefined$1;
    			            } else {
    			                block = this._prevBlock;
    			            }

    			            // XOR blocks
    			            for (var i = 0; i < blockSize; i++) {
    			                words[offset + i] ^= block[i];
    			            }
    			        }

    			        return CBC;
    			    }());

    			    /**
    			     * Padding namespace.
    			     */
    			    var C_pad = C.pad = {};

    			    /**
    			     * PKCS #5/7 padding strategy.
    			     */
    			    var Pkcs7 = C_pad.Pkcs7 = {
    			        /**
    			         * Pads data using the algorithm defined in PKCS #5/7.
    			         *
    			         * @param {WordArray} data The data to pad.
    			         * @param {number} blockSize The multiple that the data should be padded to.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
    			         */
    			        pad: function (data, blockSize) {
    			            // Shortcut
    			            var blockSizeBytes = blockSize * 4;

    			            // Count padding bytes
    			            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

    			            // Create padding word
    			            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

    			            // Create padding
    			            var paddingWords = [];
    			            for (var i = 0; i < nPaddingBytes; i += 4) {
    			                paddingWords.push(paddingWord);
    			            }
    			            var padding = WordArray.create(paddingWords, nPaddingBytes);

    			            // Add padding
    			            data.concat(padding);
    			        },

    			        /**
    			         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
    			         *
    			         * @param {WordArray} data The data to unpad.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
    			         */
    			        unpad: function (data) {
    			            // Get number of padding bytes from last byte
    			            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

    			            // Remove padding
    			            data.sigBytes -= nPaddingBytes;
    			        }
    			    };

    			    /**
    			     * Abstract base block cipher template.
    			     *
    			     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
    			     */
    			    C_lib.BlockCipher = Cipher.extend({
    			        /**
    			         * Configuration options.
    			         *
    			         * @property {Mode} mode The block mode to use. Default: CBC
    			         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
    			         */
    			        cfg: Cipher.cfg.extend({
    			            mode: CBC,
    			            padding: Pkcs7
    			        }),

    			        reset: function () {
    			            var modeCreator;

    			            // Reset cipher
    			            Cipher.reset.call(this);

    			            // Shortcuts
    			            var cfg = this.cfg;
    			            var iv = cfg.iv;
    			            var mode = cfg.mode;

    			            // Reset block mode
    			            if (this._xformMode == this._ENC_XFORM_MODE) {
    			                modeCreator = mode.createEncryptor;
    			            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
    			                modeCreator = mode.createDecryptor;
    			                // Keep at least one block in the buffer for unpadding
    			                this._minBufferSize = 1;
    			            }

    			            if (this._mode && this._mode.__creator == modeCreator) {
    			                this._mode.init(this, iv && iv.words);
    			            } else {
    			                this._mode = modeCreator.call(mode, this, iv && iv.words);
    			                this._mode.__creator = modeCreator;
    			            }
    			        },

    			        _doProcessBlock: function (words, offset) {
    			            this._mode.processBlock(words, offset);
    			        },

    			        _doFinalize: function () {
    			            var finalProcessedBlocks;

    			            // Shortcut
    			            var padding = this.cfg.padding;

    			            // Finalize
    			            if (this._xformMode == this._ENC_XFORM_MODE) {
    			                // Pad data
    			                padding.pad(this._data, this.blockSize);

    			                // Process final blocks
    			                finalProcessedBlocks = this._process(!!'flush');
    			            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
    			                // Process final blocks
    			                finalProcessedBlocks = this._process(!!'flush');

    			                // Unpad data
    			                padding.unpad(finalProcessedBlocks);
    			            }

    			            return finalProcessedBlocks;
    			        },

    			        blockSize: 128/32
    			    });

    			    /**
    			     * A collection of cipher parameters.
    			     *
    			     * @property {WordArray} ciphertext The raw ciphertext.
    			     * @property {WordArray} key The key to this ciphertext.
    			     * @property {WordArray} iv The IV used in the ciphering operation.
    			     * @property {WordArray} salt The salt used with a key derivation function.
    			     * @property {Cipher} algorithm The cipher algorithm.
    			     * @property {Mode} mode The block mode used in the ciphering operation.
    			     * @property {Padding} padding The padding scheme used in the ciphering operation.
    			     * @property {number} blockSize The block size of the cipher.
    			     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
    			     */
    			    var CipherParams = C_lib.CipherParams = Base.extend({
    			        /**
    			         * Initializes a newly created cipher params object.
    			         *
    			         * @param {Object} cipherParams An object with any of the possible cipher parameters.
    			         *
    			         * @example
    			         *
    			         *     var cipherParams = CryptoJS.lib.CipherParams.create({
    			         *         ciphertext: ciphertextWordArray,
    			         *         key: keyWordArray,
    			         *         iv: ivWordArray,
    			         *         salt: saltWordArray,
    			         *         algorithm: CryptoJS.algo.AES,
    			         *         mode: CryptoJS.mode.CBC,
    			         *         padding: CryptoJS.pad.PKCS7,
    			         *         blockSize: 4,
    			         *         formatter: CryptoJS.format.OpenSSL
    			         *     });
    			         */
    			        init: function (cipherParams) {
    			            this.mixIn(cipherParams);
    			        },

    			        /**
    			         * Converts this cipher params object to a string.
    			         *
    			         * @param {Format} formatter (Optional) The formatting strategy to use.
    			         *
    			         * @return {string} The stringified cipher params.
    			         *
    			         * @throws Error If neither the formatter nor the default formatter is set.
    			         *
    			         * @example
    			         *
    			         *     var string = cipherParams + '';
    			         *     var string = cipherParams.toString();
    			         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
    			         */
    			        toString: function (formatter) {
    			            return (formatter || this.formatter).stringify(this);
    			        }
    			    });

    			    /**
    			     * Format namespace.
    			     */
    			    var C_format = C.format = {};

    			    /**
    			     * OpenSSL formatting strategy.
    			     */
    			    var OpenSSLFormatter = C_format.OpenSSL = {
    			        /**
    			         * Converts a cipher params object to an OpenSSL-compatible string.
    			         *
    			         * @param {CipherParams} cipherParams The cipher params object.
    			         *
    			         * @return {string} The OpenSSL-compatible string.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
    			         */
    			        stringify: function (cipherParams) {
    			            var wordArray;

    			            // Shortcuts
    			            var ciphertext = cipherParams.ciphertext;
    			            var salt = cipherParams.salt;

    			            // Format
    			            if (salt) {
    			                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
    			            } else {
    			                wordArray = ciphertext;
    			            }

    			            return wordArray.toString(Base64);
    			        },

    			        /**
    			         * Converts an OpenSSL-compatible string to a cipher params object.
    			         *
    			         * @param {string} openSSLStr The OpenSSL-compatible string.
    			         *
    			         * @return {CipherParams} The cipher params object.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
    			         */
    			        parse: function (openSSLStr) {
    			            var salt;

    			            // Parse base64
    			            var ciphertext = Base64.parse(openSSLStr);

    			            // Shortcut
    			            var ciphertextWords = ciphertext.words;

    			            // Test for salt
    			            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
    			                // Extract salt
    			                salt = WordArray.create(ciphertextWords.slice(2, 4));

    			                // Remove salt from ciphertext
    			                ciphertextWords.splice(0, 4);
    			                ciphertext.sigBytes -= 16;
    			            }

    			            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
    			        }
    			    };

    			    /**
    			     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
    			     */
    			    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
    			        /**
    			         * Configuration options.
    			         *
    			         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
    			         */
    			        cfg: Base.extend({
    			            format: OpenSSLFormatter
    			        }),

    			        /**
    			         * Encrypts a message.
    			         *
    			         * @param {Cipher} cipher The cipher algorithm to use.
    			         * @param {WordArray|string} message The message to encrypt.
    			         * @param {WordArray} key The key.
    			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    			         *
    			         * @return {CipherParams} A cipher params object.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
    			         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
    			         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
    			         */
    			        encrypt: function (cipher, message, key, cfg) {
    			            // Apply config defaults
    			            cfg = this.cfg.extend(cfg);

    			            // Encrypt
    			            var encryptor = cipher.createEncryptor(key, cfg);
    			            var ciphertext = encryptor.finalize(message);

    			            // Shortcut
    			            var cipherCfg = encryptor.cfg;

    			            // Create and return serializable cipher params
    			            return CipherParams.create({
    			                ciphertext: ciphertext,
    			                key: key,
    			                iv: cipherCfg.iv,
    			                algorithm: cipher,
    			                mode: cipherCfg.mode,
    			                padding: cipherCfg.padding,
    			                blockSize: cipher.blockSize,
    			                formatter: cfg.format
    			            });
    			        },

    			        /**
    			         * Decrypts serialized ciphertext.
    			         *
    			         * @param {Cipher} cipher The cipher algorithm to use.
    			         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
    			         * @param {WordArray} key The key.
    			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    			         *
    			         * @return {WordArray} The plaintext.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
    			         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
    			         */
    			        decrypt: function (cipher, ciphertext, key, cfg) {
    			            // Apply config defaults
    			            cfg = this.cfg.extend(cfg);

    			            // Convert string to CipherParams
    			            ciphertext = this._parse(ciphertext, cfg.format);

    			            // Decrypt
    			            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

    			            return plaintext;
    			        },

    			        /**
    			         * Converts serialized ciphertext to CipherParams,
    			         * else assumed CipherParams already and returns ciphertext unchanged.
    			         *
    			         * @param {CipherParams|string} ciphertext The ciphertext.
    			         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
    			         *
    			         * @return {CipherParams} The unserialized ciphertext.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
    			         */
    			        _parse: function (ciphertext, format) {
    			            if (typeof ciphertext == 'string') {
    			                return format.parse(ciphertext, this);
    			            } else {
    			                return ciphertext;
    			            }
    			        }
    			    });

    			    /**
    			     * Key derivation function namespace.
    			     */
    			    var C_kdf = C.kdf = {};

    			    /**
    			     * OpenSSL key derivation function.
    			     */
    			    var OpenSSLKdf = C_kdf.OpenSSL = {
    			        /**
    			         * Derives a key and IV from a password.
    			         *
    			         * @param {string} password The password to derive from.
    			         * @param {number} keySize The size in words of the key to generate.
    			         * @param {number} ivSize The size in words of the IV to generate.
    			         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
    			         *
    			         * @return {CipherParams} A cipher params object with the key, IV, and salt.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
    			         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
    			         */
    			        execute: function (password, keySize, ivSize, salt, hasher) {
    			            // Generate random salt
    			            if (!salt) {
    			                salt = WordArray.random(64/8);
    			            }

    			            // Derive key and IV
    			            if (!hasher) {
    			                var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
    			            } else {
    			                var key = EvpKDF.create({ keySize: keySize + ivSize, hasher: hasher }).compute(password, salt);
    			            }


    			            // Separate key and IV
    			            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
    			            key.sigBytes = keySize * 4;

    			            // Return params
    			            return CipherParams.create({ key: key, iv: iv, salt: salt });
    			        }
    			    };

    			    /**
    			     * A serializable cipher wrapper that derives the key from a password,
    			     * and returns ciphertext as a serializable cipher params object.
    			     */
    			    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
    			        /**
    			         * Configuration options.
    			         *
    			         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
    			         */
    			        cfg: SerializableCipher.cfg.extend({
    			            kdf: OpenSSLKdf
    			        }),

    			        /**
    			         * Encrypts a message using a password.
    			         *
    			         * @param {Cipher} cipher The cipher algorithm to use.
    			         * @param {WordArray|string} message The message to encrypt.
    			         * @param {string} password The password.
    			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    			         *
    			         * @return {CipherParams} A cipher params object.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
    			         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
    			         */
    			        encrypt: function (cipher, message, password, cfg) {
    			            // Apply config defaults
    			            cfg = this.cfg.extend(cfg);

    			            // Derive key and other params
    			            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);

    			            // Add IV to config
    			            cfg.iv = derivedParams.iv;

    			            // Encrypt
    			            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

    			            // Mix in derived params
    			            ciphertext.mixIn(derivedParams);

    			            return ciphertext;
    			        },

    			        /**
    			         * Decrypts serialized ciphertext using a password.
    			         *
    			         * @param {Cipher} cipher The cipher algorithm to use.
    			         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
    			         * @param {string} password The password.
    			         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    			         *
    			         * @return {WordArray} The plaintext.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
    			         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
    			         */
    			        decrypt: function (cipher, ciphertext, password, cfg) {
    			            // Apply config defaults
    			            cfg = this.cfg.extend(cfg);

    			            // Convert string to CipherParams
    			            ciphertext = this._parse(ciphertext, cfg.format);

    			            // Derive key and other params
    			            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);

    			            // Add IV to config
    			            cfg.iv = derivedParams.iv;

    			            // Decrypt
    			            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

    			            return plaintext;
    			        }
    			    });
    			}());


    		})); 
    	} (cipherCore));
    	return cipherCore.exports;
    }

    var modeCfb = {exports: {}};

    var hasRequiredModeCfb;

    function requireModeCfb () {
    	if (hasRequiredModeCfb) return modeCfb.exports;
    	hasRequiredModeCfb = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * Cipher Feedback block mode.
    			 */
    			CryptoJS.mode.CFB = (function () {
    			    var CFB = CryptoJS.lib.BlockCipherMode.extend();

    			    CFB.Encryptor = CFB.extend({
    			        processBlock: function (words, offset) {
    			            // Shortcuts
    			            var cipher = this._cipher;
    			            var blockSize = cipher.blockSize;

    			            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    			            // Remember this block to use with next block
    			            this._prevBlock = words.slice(offset, offset + blockSize);
    			        }
    			    });

    			    CFB.Decryptor = CFB.extend({
    			        processBlock: function (words, offset) {
    			            // Shortcuts
    			            var cipher = this._cipher;
    			            var blockSize = cipher.blockSize;

    			            // Remember this block to use with next block
    			            var thisBlock = words.slice(offset, offset + blockSize);

    			            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    			            // This block becomes the previous block
    			            this._prevBlock = thisBlock;
    			        }
    			    });

    			    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
    			        var keystream;

    			        // Shortcut
    			        var iv = this._iv;

    			        // Generate keystream
    			        if (iv) {
    			            keystream = iv.slice(0);

    			            // Remove IV for subsequent blocks
    			            this._iv = undefined;
    			        } else {
    			            keystream = this._prevBlock;
    			        }
    			        cipher.encryptBlock(keystream, 0);

    			        // Encrypt
    			        for (var i = 0; i < blockSize; i++) {
    			            words[offset + i] ^= keystream[i];
    			        }
    			    }

    			    return CFB;
    			}());


    			return CryptoJS.mode.CFB;

    		})); 
    	} (modeCfb));
    	return modeCfb.exports;
    }

    var modeCtr = {exports: {}};

    var hasRequiredModeCtr;

    function requireModeCtr () {
    	if (hasRequiredModeCtr) return modeCtr.exports;
    	hasRequiredModeCtr = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * Counter block mode.
    			 */
    			CryptoJS.mode.CTR = (function () {
    			    var CTR = CryptoJS.lib.BlockCipherMode.extend();

    			    var Encryptor = CTR.Encryptor = CTR.extend({
    			        processBlock: function (words, offset) {
    			            // Shortcuts
    			            var cipher = this._cipher;
    			            var blockSize = cipher.blockSize;
    			            var iv = this._iv;
    			            var counter = this._counter;

    			            // Generate keystream
    			            if (iv) {
    			                counter = this._counter = iv.slice(0);

    			                // Remove IV for subsequent blocks
    			                this._iv = undefined;
    			            }
    			            var keystream = counter.slice(0);
    			            cipher.encryptBlock(keystream, 0);

    			            // Increment counter
    			            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

    			            // Encrypt
    			            for (var i = 0; i < blockSize; i++) {
    			                words[offset + i] ^= keystream[i];
    			            }
    			        }
    			    });

    			    CTR.Decryptor = Encryptor;

    			    return CTR;
    			}());


    			return CryptoJS.mode.CTR;

    		})); 
    	} (modeCtr));
    	return modeCtr.exports;
    }

    var modeCtrGladman = {exports: {}};

    var hasRequiredModeCtrGladman;

    function requireModeCtrGladman () {
    	if (hasRequiredModeCtrGladman) return modeCtrGladman.exports;
    	hasRequiredModeCtrGladman = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/** @preserve
    			 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
    			 * derived from CryptoJS.mode.CTR
    			 * Jan Hruby jhruby.web@gmail.com
    			 */
    			CryptoJS.mode.CTRGladman = (function () {
    			    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

    				function incWord(word)
    				{
    					if (((word >> 24) & 0xff) === 0xff) { //overflow
    					var b1 = (word >> 16)&0xff;
    					var b2 = (word >> 8)&0xff;
    					var b3 = word & 0xff;

    					if (b1 === 0xff) // overflow b1
    					{
    					b1 = 0;
    					if (b2 === 0xff)
    					{
    						b2 = 0;
    						if (b3 === 0xff)
    						{
    							b3 = 0;
    						}
    						else
    						{
    							++b3;
    						}
    					}
    					else
    					{
    						++b2;
    					}
    					}
    					else
    					{
    					++b1;
    					}

    					word = 0;
    					word += (b1 << 16);
    					word += (b2 << 8);
    					word += b3;
    					}
    					else
    					{
    					word += (0x01 << 24);
    					}
    					return word;
    				}

    				function incCounter(counter)
    				{
    					if ((counter[0] = incWord(counter[0])) === 0)
    					{
    						// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
    						counter[1] = incWord(counter[1]);
    					}
    					return counter;
    				}

    			    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
    			        processBlock: function (words, offset) {
    			            // Shortcuts
    			            var cipher = this._cipher;
    			            var blockSize = cipher.blockSize;
    			            var iv = this._iv;
    			            var counter = this._counter;

    			            // Generate keystream
    			            if (iv) {
    			                counter = this._counter = iv.slice(0);

    			                // Remove IV for subsequent blocks
    			                this._iv = undefined;
    			            }

    						incCounter(counter);

    						var keystream = counter.slice(0);
    			            cipher.encryptBlock(keystream, 0);

    			            // Encrypt
    			            for (var i = 0; i < blockSize; i++) {
    			                words[offset + i] ^= keystream[i];
    			            }
    			        }
    			    });

    			    CTRGladman.Decryptor = Encryptor;

    			    return CTRGladman;
    			}());




    			return CryptoJS.mode.CTRGladman;

    		})); 
    	} (modeCtrGladman));
    	return modeCtrGladman.exports;
    }

    var modeOfb = {exports: {}};

    var hasRequiredModeOfb;

    function requireModeOfb () {
    	if (hasRequiredModeOfb) return modeOfb.exports;
    	hasRequiredModeOfb = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * Output Feedback block mode.
    			 */
    			CryptoJS.mode.OFB = (function () {
    			    var OFB = CryptoJS.lib.BlockCipherMode.extend();

    			    var Encryptor = OFB.Encryptor = OFB.extend({
    			        processBlock: function (words, offset) {
    			            // Shortcuts
    			            var cipher = this._cipher;
    			            var blockSize = cipher.blockSize;
    			            var iv = this._iv;
    			            var keystream = this._keystream;

    			            // Generate keystream
    			            if (iv) {
    			                keystream = this._keystream = iv.slice(0);

    			                // Remove IV for subsequent blocks
    			                this._iv = undefined;
    			            }
    			            cipher.encryptBlock(keystream, 0);

    			            // Encrypt
    			            for (var i = 0; i < blockSize; i++) {
    			                words[offset + i] ^= keystream[i];
    			            }
    			        }
    			    });

    			    OFB.Decryptor = Encryptor;

    			    return OFB;
    			}());


    			return CryptoJS.mode.OFB;

    		})); 
    	} (modeOfb));
    	return modeOfb.exports;
    }

    var modeEcb = {exports: {}};

    var hasRequiredModeEcb;

    function requireModeEcb () {
    	if (hasRequiredModeEcb) return modeEcb.exports;
    	hasRequiredModeEcb = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * Electronic Codebook block mode.
    			 */
    			CryptoJS.mode.ECB = (function () {
    			    var ECB = CryptoJS.lib.BlockCipherMode.extend();

    			    ECB.Encryptor = ECB.extend({
    			        processBlock: function (words, offset) {
    			            this._cipher.encryptBlock(words, offset);
    			        }
    			    });

    			    ECB.Decryptor = ECB.extend({
    			        processBlock: function (words, offset) {
    			            this._cipher.decryptBlock(words, offset);
    			        }
    			    });

    			    return ECB;
    			}());


    			return CryptoJS.mode.ECB;

    		})); 
    	} (modeEcb));
    	return modeEcb.exports;
    }

    var padAnsix923 = {exports: {}};

    var hasRequiredPadAnsix923;

    function requirePadAnsix923 () {
    	if (hasRequiredPadAnsix923) return padAnsix923.exports;
    	hasRequiredPadAnsix923 = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * ANSI X.923 padding strategy.
    			 */
    			CryptoJS.pad.AnsiX923 = {
    			    pad: function (data, blockSize) {
    			        // Shortcuts
    			        var dataSigBytes = data.sigBytes;
    			        var blockSizeBytes = blockSize * 4;

    			        // Count padding bytes
    			        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

    			        // Compute last byte position
    			        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

    			        // Pad
    			        data.clamp();
    			        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
    			        data.sigBytes += nPaddingBytes;
    			    },

    			    unpad: function (data) {
    			        // Get number of padding bytes from last byte
    			        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

    			        // Remove padding
    			        data.sigBytes -= nPaddingBytes;
    			    }
    			};


    			return CryptoJS.pad.Ansix923;

    		})); 
    	} (padAnsix923));
    	return padAnsix923.exports;
    }

    var padIso10126 = {exports: {}};

    var hasRequiredPadIso10126;

    function requirePadIso10126 () {
    	if (hasRequiredPadIso10126) return padIso10126.exports;
    	hasRequiredPadIso10126 = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * ISO 10126 padding strategy.
    			 */
    			CryptoJS.pad.Iso10126 = {
    			    pad: function (data, blockSize) {
    			        // Shortcut
    			        var blockSizeBytes = blockSize * 4;

    			        // Count padding bytes
    			        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

    			        // Pad
    			        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
    			             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
    			    },

    			    unpad: function (data) {
    			        // Get number of padding bytes from last byte
    			        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

    			        // Remove padding
    			        data.sigBytes -= nPaddingBytes;
    			    }
    			};


    			return CryptoJS.pad.Iso10126;

    		})); 
    	} (padIso10126));
    	return padIso10126.exports;
    }

    var padIso97971 = {exports: {}};

    var hasRequiredPadIso97971;

    function requirePadIso97971 () {
    	if (hasRequiredPadIso97971) return padIso97971.exports;
    	hasRequiredPadIso97971 = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * ISO/IEC 9797-1 Padding Method 2.
    			 */
    			CryptoJS.pad.Iso97971 = {
    			    pad: function (data, blockSize) {
    			        // Add 0x80 byte
    			        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

    			        // Zero pad the rest
    			        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
    			    },

    			    unpad: function (data) {
    			        // Remove zero padding
    			        CryptoJS.pad.ZeroPadding.unpad(data);

    			        // Remove one more byte -- the 0x80 byte
    			        data.sigBytes--;
    			    }
    			};


    			return CryptoJS.pad.Iso97971;

    		})); 
    	} (padIso97971));
    	return padIso97971.exports;
    }

    var padZeropadding = {exports: {}};

    var hasRequiredPadZeropadding;

    function requirePadZeropadding () {
    	if (hasRequiredPadZeropadding) return padZeropadding.exports;
    	hasRequiredPadZeropadding = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * Zero padding strategy.
    			 */
    			CryptoJS.pad.ZeroPadding = {
    			    pad: function (data, blockSize) {
    			        // Shortcut
    			        var blockSizeBytes = blockSize * 4;

    			        // Pad
    			        data.clamp();
    			        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
    			    },

    			    unpad: function (data) {
    			        // Shortcut
    			        var dataWords = data.words;

    			        // Unpad
    			        var i = data.sigBytes - 1;
    			        for (var i = data.sigBytes - 1; i >= 0; i--) {
    			            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
    			                data.sigBytes = i + 1;
    			                break;
    			            }
    			        }
    			    }
    			};


    			return CryptoJS.pad.ZeroPadding;

    		})); 
    	} (padZeropadding));
    	return padZeropadding.exports;
    }

    var padNopadding = {exports: {}};

    var hasRequiredPadNopadding;

    function requirePadNopadding () {
    	if (hasRequiredPadNopadding) return padNopadding.exports;
    	hasRequiredPadNopadding = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			/**
    			 * A noop padding strategy.
    			 */
    			CryptoJS.pad.NoPadding = {
    			    pad: function () {
    			    },

    			    unpad: function () {
    			    }
    			};


    			return CryptoJS.pad.NoPadding;

    		})); 
    	} (padNopadding));
    	return padNopadding.exports;
    }

    var formatHex = {exports: {}};

    var hasRequiredFormatHex;

    function requireFormatHex () {
    	if (hasRequiredFormatHex) return formatHex.exports;
    	hasRequiredFormatHex = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function (undefined$1) {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var CipherParams = C_lib.CipherParams;
    			    var C_enc = C.enc;
    			    var Hex = C_enc.Hex;
    			    var C_format = C.format;

    			    C_format.Hex = {
    			        /**
    			         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
    			         *
    			         * @param {CipherParams} cipherParams The cipher params object.
    			         *
    			         * @return {string} The hexadecimally encoded string.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
    			         */
    			        stringify: function (cipherParams) {
    			            return cipherParams.ciphertext.toString(Hex);
    			        },

    			        /**
    			         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
    			         *
    			         * @param {string} input The hexadecimally encoded string.
    			         *
    			         * @return {CipherParams} The cipher params object.
    			         *
    			         * @static
    			         *
    			         * @example
    			         *
    			         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
    			         */
    			        parse: function (input) {
    			            var ciphertext = Hex.parse(input);
    			            return CipherParams.create({ ciphertext: ciphertext });
    			        }
    			    };
    			}());


    			return CryptoJS.format.Hex;

    		})); 
    	} (formatHex));
    	return formatHex.exports;
    }

    var aes = {exports: {}};

    var hasRequiredAes;

    function requireAes () {
    	if (hasRequiredAes) return aes.exports;
    	hasRequiredAes = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var BlockCipher = C_lib.BlockCipher;
    			    var C_algo = C.algo;

    			    // Lookup tables
    			    var SBOX = [];
    			    var INV_SBOX = [];
    			    var SUB_MIX_0 = [];
    			    var SUB_MIX_1 = [];
    			    var SUB_MIX_2 = [];
    			    var SUB_MIX_3 = [];
    			    var INV_SUB_MIX_0 = [];
    			    var INV_SUB_MIX_1 = [];
    			    var INV_SUB_MIX_2 = [];
    			    var INV_SUB_MIX_3 = [];

    			    // Compute lookup tables
    			    (function () {
    			        // Compute double table
    			        var d = [];
    			        for (var i = 0; i < 256; i++) {
    			            if (i < 128) {
    			                d[i] = i << 1;
    			            } else {
    			                d[i] = (i << 1) ^ 0x11b;
    			            }
    			        }

    			        // Walk GF(2^8)
    			        var x = 0;
    			        var xi = 0;
    			        for (var i = 0; i < 256; i++) {
    			            // Compute sbox
    			            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
    			            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
    			            SBOX[x] = sx;
    			            INV_SBOX[sx] = x;

    			            // Compute multiplication
    			            var x2 = d[x];
    			            var x4 = d[x2];
    			            var x8 = d[x4];

    			            // Compute sub bytes, mix columns tables
    			            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
    			            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
    			            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
    			            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
    			            SUB_MIX_3[x] = t;

    			            // Compute inv sub bytes, inv mix columns tables
    			            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
    			            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
    			            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
    			            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
    			            INV_SUB_MIX_3[sx] = t;

    			            // Compute next counter
    			            if (!x) {
    			                x = xi = 1;
    			            } else {
    			                x = x2 ^ d[d[d[x8 ^ x2]]];
    			                xi ^= d[d[xi]];
    			            }
    			        }
    			    }());

    			    // Precomputed Rcon lookup
    			    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

    			    /**
    			     * AES block cipher algorithm.
    			     */
    			    var AES = C_algo.AES = BlockCipher.extend({
    			        _doReset: function () {
    			            var t;

    			            // Skip reset of nRounds has been set before and key did not change
    			            if (this._nRounds && this._keyPriorReset === this._key) {
    			                return;
    			            }

    			            // Shortcuts
    			            var key = this._keyPriorReset = this._key;
    			            var keyWords = key.words;
    			            var keySize = key.sigBytes / 4;

    			            // Compute number of rounds
    			            var nRounds = this._nRounds = keySize + 6;

    			            // Compute number of key schedule rows
    			            var ksRows = (nRounds + 1) * 4;

    			            // Compute key schedule
    			            var keySchedule = this._keySchedule = [];
    			            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
    			                if (ksRow < keySize) {
    			                    keySchedule[ksRow] = keyWords[ksRow];
    			                } else {
    			                    t = keySchedule[ksRow - 1];

    			                    if (!(ksRow % keySize)) {
    			                        // Rot word
    			                        t = (t << 8) | (t >>> 24);

    			                        // Sub word
    			                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

    			                        // Mix Rcon
    			                        t ^= RCON[(ksRow / keySize) | 0] << 24;
    			                    } else if (keySize > 6 && ksRow % keySize == 4) {
    			                        // Sub word
    			                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
    			                    }

    			                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
    			                }
    			            }

    			            // Compute inv key schedule
    			            var invKeySchedule = this._invKeySchedule = [];
    			            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
    			                var ksRow = ksRows - invKsRow;

    			                if (invKsRow % 4) {
    			                    var t = keySchedule[ksRow];
    			                } else {
    			                    var t = keySchedule[ksRow - 4];
    			                }

    			                if (invKsRow < 4 || ksRow <= 4) {
    			                    invKeySchedule[invKsRow] = t;
    			                } else {
    			                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
    			                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
    			                }
    			            }
    			        },

    			        encryptBlock: function (M, offset) {
    			            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
    			        },

    			        decryptBlock: function (M, offset) {
    			            // Swap 2nd and 4th rows
    			            var t = M[offset + 1];
    			            M[offset + 1] = M[offset + 3];
    			            M[offset + 3] = t;

    			            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

    			            // Inv swap 2nd and 4th rows
    			            var t = M[offset + 1];
    			            M[offset + 1] = M[offset + 3];
    			            M[offset + 3] = t;
    			        },

    			        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    			            // Shortcut
    			            var nRounds = this._nRounds;

    			            // Get input, add round key
    			            var s0 = M[offset]     ^ keySchedule[0];
    			            var s1 = M[offset + 1] ^ keySchedule[1];
    			            var s2 = M[offset + 2] ^ keySchedule[2];
    			            var s3 = M[offset + 3] ^ keySchedule[3];

    			            // Key schedule row counter
    			            var ksRow = 4;

    			            // Rounds
    			            for (var round = 1; round < nRounds; round++) {
    			                // Shift rows, sub bytes, mix columns, add round key
    			                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
    			                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
    			                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
    			                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

    			                // Update state
    			                s0 = t0;
    			                s1 = t1;
    			                s2 = t2;
    			                s3 = t3;
    			            }

    			            // Shift rows, sub bytes, add round key
    			            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
    			            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
    			            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
    			            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

    			            // Set output
    			            M[offset]     = t0;
    			            M[offset + 1] = t1;
    			            M[offset + 2] = t2;
    			            M[offset + 3] = t3;
    			        },

    			        keySize: 256/32
    			    });

    			    /**
    			     * Shortcut functions to the cipher's object interface.
    			     *
    			     * @example
    			     *
    			     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
    			     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
    			     */
    			    C.AES = BlockCipher._createHelper(AES);
    			}());


    			return CryptoJS.AES;

    		})); 
    	} (aes));
    	return aes.exports;
    }

    var tripledes = {exports: {}};

    var hasRequiredTripledes;

    function requireTripledes () {
    	if (hasRequiredTripledes) return tripledes.exports;
    	hasRequiredTripledes = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var WordArray = C_lib.WordArray;
    			    var BlockCipher = C_lib.BlockCipher;
    			    var C_algo = C.algo;

    			    // Permuted Choice 1 constants
    			    var PC1 = [
    			        57, 49, 41, 33, 25, 17, 9,  1,
    			        58, 50, 42, 34, 26, 18, 10, 2,
    			        59, 51, 43, 35, 27, 19, 11, 3,
    			        60, 52, 44, 36, 63, 55, 47, 39,
    			        31, 23, 15, 7,  62, 54, 46, 38,
    			        30, 22, 14, 6,  61, 53, 45, 37,
    			        29, 21, 13, 5,  28, 20, 12, 4
    			    ];

    			    // Permuted Choice 2 constants
    			    var PC2 = [
    			        14, 17, 11, 24, 1,  5,
    			        3,  28, 15, 6,  21, 10,
    			        23, 19, 12, 4,  26, 8,
    			        16, 7,  27, 20, 13, 2,
    			        41, 52, 31, 37, 47, 55,
    			        30, 40, 51, 45, 33, 48,
    			        44, 49, 39, 56, 34, 53,
    			        46, 42, 50, 36, 29, 32
    			    ];

    			    // Cumulative bit shift constants
    			    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

    			    // SBOXes and round permutation constants
    			    var SBOX_P = [
    			        {
    			            0x0: 0x808200,
    			            0x10000000: 0x8000,
    			            0x20000000: 0x808002,
    			            0x30000000: 0x2,
    			            0x40000000: 0x200,
    			            0x50000000: 0x808202,
    			            0x60000000: 0x800202,
    			            0x70000000: 0x800000,
    			            0x80000000: 0x202,
    			            0x90000000: 0x800200,
    			            0xa0000000: 0x8200,
    			            0xb0000000: 0x808000,
    			            0xc0000000: 0x8002,
    			            0xd0000000: 0x800002,
    			            0xe0000000: 0x0,
    			            0xf0000000: 0x8202,
    			            0x8000000: 0x0,
    			            0x18000000: 0x808202,
    			            0x28000000: 0x8202,
    			            0x38000000: 0x8000,
    			            0x48000000: 0x808200,
    			            0x58000000: 0x200,
    			            0x68000000: 0x808002,
    			            0x78000000: 0x2,
    			            0x88000000: 0x800200,
    			            0x98000000: 0x8200,
    			            0xa8000000: 0x808000,
    			            0xb8000000: 0x800202,
    			            0xc8000000: 0x800002,
    			            0xd8000000: 0x8002,
    			            0xe8000000: 0x202,
    			            0xf8000000: 0x800000,
    			            0x1: 0x8000,
    			            0x10000001: 0x2,
    			            0x20000001: 0x808200,
    			            0x30000001: 0x800000,
    			            0x40000001: 0x808002,
    			            0x50000001: 0x8200,
    			            0x60000001: 0x200,
    			            0x70000001: 0x800202,
    			            0x80000001: 0x808202,
    			            0x90000001: 0x808000,
    			            0xa0000001: 0x800002,
    			            0xb0000001: 0x8202,
    			            0xc0000001: 0x202,
    			            0xd0000001: 0x800200,
    			            0xe0000001: 0x8002,
    			            0xf0000001: 0x0,
    			            0x8000001: 0x808202,
    			            0x18000001: 0x808000,
    			            0x28000001: 0x800000,
    			            0x38000001: 0x200,
    			            0x48000001: 0x8000,
    			            0x58000001: 0x800002,
    			            0x68000001: 0x2,
    			            0x78000001: 0x8202,
    			            0x88000001: 0x8002,
    			            0x98000001: 0x800202,
    			            0xa8000001: 0x202,
    			            0xb8000001: 0x808200,
    			            0xc8000001: 0x800200,
    			            0xd8000001: 0x0,
    			            0xe8000001: 0x8200,
    			            0xf8000001: 0x808002
    			        },
    			        {
    			            0x0: 0x40084010,
    			            0x1000000: 0x4000,
    			            0x2000000: 0x80000,
    			            0x3000000: 0x40080010,
    			            0x4000000: 0x40000010,
    			            0x5000000: 0x40084000,
    			            0x6000000: 0x40004000,
    			            0x7000000: 0x10,
    			            0x8000000: 0x84000,
    			            0x9000000: 0x40004010,
    			            0xa000000: 0x40000000,
    			            0xb000000: 0x84010,
    			            0xc000000: 0x80010,
    			            0xd000000: 0x0,
    			            0xe000000: 0x4010,
    			            0xf000000: 0x40080000,
    			            0x800000: 0x40004000,
    			            0x1800000: 0x84010,
    			            0x2800000: 0x10,
    			            0x3800000: 0x40004010,
    			            0x4800000: 0x40084010,
    			            0x5800000: 0x40000000,
    			            0x6800000: 0x80000,
    			            0x7800000: 0x40080010,
    			            0x8800000: 0x80010,
    			            0x9800000: 0x0,
    			            0xa800000: 0x4000,
    			            0xb800000: 0x40080000,
    			            0xc800000: 0x40000010,
    			            0xd800000: 0x84000,
    			            0xe800000: 0x40084000,
    			            0xf800000: 0x4010,
    			            0x10000000: 0x0,
    			            0x11000000: 0x40080010,
    			            0x12000000: 0x40004010,
    			            0x13000000: 0x40084000,
    			            0x14000000: 0x40080000,
    			            0x15000000: 0x10,
    			            0x16000000: 0x84010,
    			            0x17000000: 0x4000,
    			            0x18000000: 0x4010,
    			            0x19000000: 0x80000,
    			            0x1a000000: 0x80010,
    			            0x1b000000: 0x40000010,
    			            0x1c000000: 0x84000,
    			            0x1d000000: 0x40004000,
    			            0x1e000000: 0x40000000,
    			            0x1f000000: 0x40084010,
    			            0x10800000: 0x84010,
    			            0x11800000: 0x80000,
    			            0x12800000: 0x40080000,
    			            0x13800000: 0x4000,
    			            0x14800000: 0x40004000,
    			            0x15800000: 0x40084010,
    			            0x16800000: 0x10,
    			            0x17800000: 0x40000000,
    			            0x18800000: 0x40084000,
    			            0x19800000: 0x40000010,
    			            0x1a800000: 0x40004010,
    			            0x1b800000: 0x80010,
    			            0x1c800000: 0x0,
    			            0x1d800000: 0x4010,
    			            0x1e800000: 0x40080010,
    			            0x1f800000: 0x84000
    			        },
    			        {
    			            0x0: 0x104,
    			            0x100000: 0x0,
    			            0x200000: 0x4000100,
    			            0x300000: 0x10104,
    			            0x400000: 0x10004,
    			            0x500000: 0x4000004,
    			            0x600000: 0x4010104,
    			            0x700000: 0x4010000,
    			            0x800000: 0x4000000,
    			            0x900000: 0x4010100,
    			            0xa00000: 0x10100,
    			            0xb00000: 0x4010004,
    			            0xc00000: 0x4000104,
    			            0xd00000: 0x10000,
    			            0xe00000: 0x4,
    			            0xf00000: 0x100,
    			            0x80000: 0x4010100,
    			            0x180000: 0x4010004,
    			            0x280000: 0x0,
    			            0x380000: 0x4000100,
    			            0x480000: 0x4000004,
    			            0x580000: 0x10000,
    			            0x680000: 0x10004,
    			            0x780000: 0x104,
    			            0x880000: 0x4,
    			            0x980000: 0x100,
    			            0xa80000: 0x4010000,
    			            0xb80000: 0x10104,
    			            0xc80000: 0x10100,
    			            0xd80000: 0x4000104,
    			            0xe80000: 0x4010104,
    			            0xf80000: 0x4000000,
    			            0x1000000: 0x4010100,
    			            0x1100000: 0x10004,
    			            0x1200000: 0x10000,
    			            0x1300000: 0x4000100,
    			            0x1400000: 0x100,
    			            0x1500000: 0x4010104,
    			            0x1600000: 0x4000004,
    			            0x1700000: 0x0,
    			            0x1800000: 0x4000104,
    			            0x1900000: 0x4000000,
    			            0x1a00000: 0x4,
    			            0x1b00000: 0x10100,
    			            0x1c00000: 0x4010000,
    			            0x1d00000: 0x104,
    			            0x1e00000: 0x10104,
    			            0x1f00000: 0x4010004,
    			            0x1080000: 0x4000000,
    			            0x1180000: 0x104,
    			            0x1280000: 0x4010100,
    			            0x1380000: 0x0,
    			            0x1480000: 0x10004,
    			            0x1580000: 0x4000100,
    			            0x1680000: 0x100,
    			            0x1780000: 0x4010004,
    			            0x1880000: 0x10000,
    			            0x1980000: 0x4010104,
    			            0x1a80000: 0x10104,
    			            0x1b80000: 0x4000004,
    			            0x1c80000: 0x4000104,
    			            0x1d80000: 0x4010000,
    			            0x1e80000: 0x4,
    			            0x1f80000: 0x10100
    			        },
    			        {
    			            0x0: 0x80401000,
    			            0x10000: 0x80001040,
    			            0x20000: 0x401040,
    			            0x30000: 0x80400000,
    			            0x40000: 0x0,
    			            0x50000: 0x401000,
    			            0x60000: 0x80000040,
    			            0x70000: 0x400040,
    			            0x80000: 0x80000000,
    			            0x90000: 0x400000,
    			            0xa0000: 0x40,
    			            0xb0000: 0x80001000,
    			            0xc0000: 0x80400040,
    			            0xd0000: 0x1040,
    			            0xe0000: 0x1000,
    			            0xf0000: 0x80401040,
    			            0x8000: 0x80001040,
    			            0x18000: 0x40,
    			            0x28000: 0x80400040,
    			            0x38000: 0x80001000,
    			            0x48000: 0x401000,
    			            0x58000: 0x80401040,
    			            0x68000: 0x0,
    			            0x78000: 0x80400000,
    			            0x88000: 0x1000,
    			            0x98000: 0x80401000,
    			            0xa8000: 0x400000,
    			            0xb8000: 0x1040,
    			            0xc8000: 0x80000000,
    			            0xd8000: 0x400040,
    			            0xe8000: 0x401040,
    			            0xf8000: 0x80000040,
    			            0x100000: 0x400040,
    			            0x110000: 0x401000,
    			            0x120000: 0x80000040,
    			            0x130000: 0x0,
    			            0x140000: 0x1040,
    			            0x150000: 0x80400040,
    			            0x160000: 0x80401000,
    			            0x170000: 0x80001040,
    			            0x180000: 0x80401040,
    			            0x190000: 0x80000000,
    			            0x1a0000: 0x80400000,
    			            0x1b0000: 0x401040,
    			            0x1c0000: 0x80001000,
    			            0x1d0000: 0x400000,
    			            0x1e0000: 0x40,
    			            0x1f0000: 0x1000,
    			            0x108000: 0x80400000,
    			            0x118000: 0x80401040,
    			            0x128000: 0x0,
    			            0x138000: 0x401000,
    			            0x148000: 0x400040,
    			            0x158000: 0x80000000,
    			            0x168000: 0x80001040,
    			            0x178000: 0x40,
    			            0x188000: 0x80000040,
    			            0x198000: 0x1000,
    			            0x1a8000: 0x80001000,
    			            0x1b8000: 0x80400040,
    			            0x1c8000: 0x1040,
    			            0x1d8000: 0x80401000,
    			            0x1e8000: 0x400000,
    			            0x1f8000: 0x401040
    			        },
    			        {
    			            0x0: 0x80,
    			            0x1000: 0x1040000,
    			            0x2000: 0x40000,
    			            0x3000: 0x20000000,
    			            0x4000: 0x20040080,
    			            0x5000: 0x1000080,
    			            0x6000: 0x21000080,
    			            0x7000: 0x40080,
    			            0x8000: 0x1000000,
    			            0x9000: 0x20040000,
    			            0xa000: 0x20000080,
    			            0xb000: 0x21040080,
    			            0xc000: 0x21040000,
    			            0xd000: 0x0,
    			            0xe000: 0x1040080,
    			            0xf000: 0x21000000,
    			            0x800: 0x1040080,
    			            0x1800: 0x21000080,
    			            0x2800: 0x80,
    			            0x3800: 0x1040000,
    			            0x4800: 0x40000,
    			            0x5800: 0x20040080,
    			            0x6800: 0x21040000,
    			            0x7800: 0x20000000,
    			            0x8800: 0x20040000,
    			            0x9800: 0x0,
    			            0xa800: 0x21040080,
    			            0xb800: 0x1000080,
    			            0xc800: 0x20000080,
    			            0xd800: 0x21000000,
    			            0xe800: 0x1000000,
    			            0xf800: 0x40080,
    			            0x10000: 0x40000,
    			            0x11000: 0x80,
    			            0x12000: 0x20000000,
    			            0x13000: 0x21000080,
    			            0x14000: 0x1000080,
    			            0x15000: 0x21040000,
    			            0x16000: 0x20040080,
    			            0x17000: 0x1000000,
    			            0x18000: 0x21040080,
    			            0x19000: 0x21000000,
    			            0x1a000: 0x1040000,
    			            0x1b000: 0x20040000,
    			            0x1c000: 0x40080,
    			            0x1d000: 0x20000080,
    			            0x1e000: 0x0,
    			            0x1f000: 0x1040080,
    			            0x10800: 0x21000080,
    			            0x11800: 0x1000000,
    			            0x12800: 0x1040000,
    			            0x13800: 0x20040080,
    			            0x14800: 0x20000000,
    			            0x15800: 0x1040080,
    			            0x16800: 0x80,
    			            0x17800: 0x21040000,
    			            0x18800: 0x40080,
    			            0x19800: 0x21040080,
    			            0x1a800: 0x0,
    			            0x1b800: 0x21000000,
    			            0x1c800: 0x1000080,
    			            0x1d800: 0x40000,
    			            0x1e800: 0x20040000,
    			            0x1f800: 0x20000080
    			        },
    			        {
    			            0x0: 0x10000008,
    			            0x100: 0x2000,
    			            0x200: 0x10200000,
    			            0x300: 0x10202008,
    			            0x400: 0x10002000,
    			            0x500: 0x200000,
    			            0x600: 0x200008,
    			            0x700: 0x10000000,
    			            0x800: 0x0,
    			            0x900: 0x10002008,
    			            0xa00: 0x202000,
    			            0xb00: 0x8,
    			            0xc00: 0x10200008,
    			            0xd00: 0x202008,
    			            0xe00: 0x2008,
    			            0xf00: 0x10202000,
    			            0x80: 0x10200000,
    			            0x180: 0x10202008,
    			            0x280: 0x8,
    			            0x380: 0x200000,
    			            0x480: 0x202008,
    			            0x580: 0x10000008,
    			            0x680: 0x10002000,
    			            0x780: 0x2008,
    			            0x880: 0x200008,
    			            0x980: 0x2000,
    			            0xa80: 0x10002008,
    			            0xb80: 0x10200008,
    			            0xc80: 0x0,
    			            0xd80: 0x10202000,
    			            0xe80: 0x202000,
    			            0xf80: 0x10000000,
    			            0x1000: 0x10002000,
    			            0x1100: 0x10200008,
    			            0x1200: 0x10202008,
    			            0x1300: 0x2008,
    			            0x1400: 0x200000,
    			            0x1500: 0x10000000,
    			            0x1600: 0x10000008,
    			            0x1700: 0x202000,
    			            0x1800: 0x202008,
    			            0x1900: 0x0,
    			            0x1a00: 0x8,
    			            0x1b00: 0x10200000,
    			            0x1c00: 0x2000,
    			            0x1d00: 0x10002008,
    			            0x1e00: 0x10202000,
    			            0x1f00: 0x200008,
    			            0x1080: 0x8,
    			            0x1180: 0x202000,
    			            0x1280: 0x200000,
    			            0x1380: 0x10000008,
    			            0x1480: 0x10002000,
    			            0x1580: 0x2008,
    			            0x1680: 0x10202008,
    			            0x1780: 0x10200000,
    			            0x1880: 0x10202000,
    			            0x1980: 0x10200008,
    			            0x1a80: 0x2000,
    			            0x1b80: 0x202008,
    			            0x1c80: 0x200008,
    			            0x1d80: 0x0,
    			            0x1e80: 0x10000000,
    			            0x1f80: 0x10002008
    			        },
    			        {
    			            0x0: 0x100000,
    			            0x10: 0x2000401,
    			            0x20: 0x400,
    			            0x30: 0x100401,
    			            0x40: 0x2100401,
    			            0x50: 0x0,
    			            0x60: 0x1,
    			            0x70: 0x2100001,
    			            0x80: 0x2000400,
    			            0x90: 0x100001,
    			            0xa0: 0x2000001,
    			            0xb0: 0x2100400,
    			            0xc0: 0x2100000,
    			            0xd0: 0x401,
    			            0xe0: 0x100400,
    			            0xf0: 0x2000000,
    			            0x8: 0x2100001,
    			            0x18: 0x0,
    			            0x28: 0x2000401,
    			            0x38: 0x2100400,
    			            0x48: 0x100000,
    			            0x58: 0x2000001,
    			            0x68: 0x2000000,
    			            0x78: 0x401,
    			            0x88: 0x100401,
    			            0x98: 0x2000400,
    			            0xa8: 0x2100000,
    			            0xb8: 0x100001,
    			            0xc8: 0x400,
    			            0xd8: 0x2100401,
    			            0xe8: 0x1,
    			            0xf8: 0x100400,
    			            0x100: 0x2000000,
    			            0x110: 0x100000,
    			            0x120: 0x2000401,
    			            0x130: 0x2100001,
    			            0x140: 0x100001,
    			            0x150: 0x2000400,
    			            0x160: 0x2100400,
    			            0x170: 0x100401,
    			            0x180: 0x401,
    			            0x190: 0x2100401,
    			            0x1a0: 0x100400,
    			            0x1b0: 0x1,
    			            0x1c0: 0x0,
    			            0x1d0: 0x2100000,
    			            0x1e0: 0x2000001,
    			            0x1f0: 0x400,
    			            0x108: 0x100400,
    			            0x118: 0x2000401,
    			            0x128: 0x2100001,
    			            0x138: 0x1,
    			            0x148: 0x2000000,
    			            0x158: 0x100000,
    			            0x168: 0x401,
    			            0x178: 0x2100400,
    			            0x188: 0x2000001,
    			            0x198: 0x2100000,
    			            0x1a8: 0x0,
    			            0x1b8: 0x2100401,
    			            0x1c8: 0x100401,
    			            0x1d8: 0x400,
    			            0x1e8: 0x2000400,
    			            0x1f8: 0x100001
    			        },
    			        {
    			            0x0: 0x8000820,
    			            0x1: 0x20000,
    			            0x2: 0x8000000,
    			            0x3: 0x20,
    			            0x4: 0x20020,
    			            0x5: 0x8020820,
    			            0x6: 0x8020800,
    			            0x7: 0x800,
    			            0x8: 0x8020000,
    			            0x9: 0x8000800,
    			            0xa: 0x20800,
    			            0xb: 0x8020020,
    			            0xc: 0x820,
    			            0xd: 0x0,
    			            0xe: 0x8000020,
    			            0xf: 0x20820,
    			            0x80000000: 0x800,
    			            0x80000001: 0x8020820,
    			            0x80000002: 0x8000820,
    			            0x80000003: 0x8000000,
    			            0x80000004: 0x8020000,
    			            0x80000005: 0x20800,
    			            0x80000006: 0x20820,
    			            0x80000007: 0x20,
    			            0x80000008: 0x8000020,
    			            0x80000009: 0x820,
    			            0x8000000a: 0x20020,
    			            0x8000000b: 0x8020800,
    			            0x8000000c: 0x0,
    			            0x8000000d: 0x8020020,
    			            0x8000000e: 0x8000800,
    			            0x8000000f: 0x20000,
    			            0x10: 0x20820,
    			            0x11: 0x8020800,
    			            0x12: 0x20,
    			            0x13: 0x800,
    			            0x14: 0x8000800,
    			            0x15: 0x8000020,
    			            0x16: 0x8020020,
    			            0x17: 0x20000,
    			            0x18: 0x0,
    			            0x19: 0x20020,
    			            0x1a: 0x8020000,
    			            0x1b: 0x8000820,
    			            0x1c: 0x8020820,
    			            0x1d: 0x20800,
    			            0x1e: 0x820,
    			            0x1f: 0x8000000,
    			            0x80000010: 0x20000,
    			            0x80000011: 0x800,
    			            0x80000012: 0x8020020,
    			            0x80000013: 0x20820,
    			            0x80000014: 0x20,
    			            0x80000015: 0x8020000,
    			            0x80000016: 0x8000000,
    			            0x80000017: 0x8000820,
    			            0x80000018: 0x8020820,
    			            0x80000019: 0x8000020,
    			            0x8000001a: 0x8000800,
    			            0x8000001b: 0x0,
    			            0x8000001c: 0x20800,
    			            0x8000001d: 0x820,
    			            0x8000001e: 0x20020,
    			            0x8000001f: 0x8020800
    			        }
    			    ];

    			    // Masks that select the SBOX input
    			    var SBOX_MASK = [
    			        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
    			        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
    			    ];

    			    /**
    			     * DES block cipher algorithm.
    			     */
    			    var DES = C_algo.DES = BlockCipher.extend({
    			        _doReset: function () {
    			            // Shortcuts
    			            var key = this._key;
    			            var keyWords = key.words;

    			            // Select 56 bits according to PC1
    			            var keyBits = [];
    			            for (var i = 0; i < 56; i++) {
    			                var keyBitPos = PC1[i] - 1;
    			                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
    			            }

    			            // Assemble 16 subkeys
    			            var subKeys = this._subKeys = [];
    			            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
    			                // Create subkey
    			                var subKey = subKeys[nSubKey] = [];

    			                // Shortcut
    			                var bitShift = BIT_SHIFTS[nSubKey];

    			                // Select 48 bits according to PC2
    			                for (var i = 0; i < 24; i++) {
    			                    // Select from the left 28 key bits
    			                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

    			                    // Select from the right 28 key bits
    			                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
    			                }

    			                // Since each subkey is applied to an expanded 32-bit input,
    			                // the subkey can be broken into 8 values scaled to 32-bits,
    			                // which allows the key to be used without expansion
    			                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
    			                for (var i = 1; i < 7; i++) {
    			                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
    			                }
    			                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
    			            }

    			            // Compute inverse subkeys
    			            var invSubKeys = this._invSubKeys = [];
    			            for (var i = 0; i < 16; i++) {
    			                invSubKeys[i] = subKeys[15 - i];
    			            }
    			        },

    			        encryptBlock: function (M, offset) {
    			            this._doCryptBlock(M, offset, this._subKeys);
    			        },

    			        decryptBlock: function (M, offset) {
    			            this._doCryptBlock(M, offset, this._invSubKeys);
    			        },

    			        _doCryptBlock: function (M, offset, subKeys) {
    			            // Get input
    			            this._lBlock = M[offset];
    			            this._rBlock = M[offset + 1];

    			            // Initial permutation
    			            exchangeLR.call(this, 4,  0x0f0f0f0f);
    			            exchangeLR.call(this, 16, 0x0000ffff);
    			            exchangeRL.call(this, 2,  0x33333333);
    			            exchangeRL.call(this, 8,  0x00ff00ff);
    			            exchangeLR.call(this, 1,  0x55555555);

    			            // Rounds
    			            for (var round = 0; round < 16; round++) {
    			                // Shortcuts
    			                var subKey = subKeys[round];
    			                var lBlock = this._lBlock;
    			                var rBlock = this._rBlock;

    			                // Feistel function
    			                var f = 0;
    			                for (var i = 0; i < 8; i++) {
    			                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
    			                }
    			                this._lBlock = rBlock;
    			                this._rBlock = lBlock ^ f;
    			            }

    			            // Undo swap from last round
    			            var t = this._lBlock;
    			            this._lBlock = this._rBlock;
    			            this._rBlock = t;

    			            // Final permutation
    			            exchangeLR.call(this, 1,  0x55555555);
    			            exchangeRL.call(this, 8,  0x00ff00ff);
    			            exchangeRL.call(this, 2,  0x33333333);
    			            exchangeLR.call(this, 16, 0x0000ffff);
    			            exchangeLR.call(this, 4,  0x0f0f0f0f);

    			            // Set output
    			            M[offset] = this._lBlock;
    			            M[offset + 1] = this._rBlock;
    			        },

    			        keySize: 64/32,

    			        ivSize: 64/32,

    			        blockSize: 64/32
    			    });

    			    // Swap bits across the left and right words
    			    function exchangeLR(offset, mask) {
    			        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
    			        this._rBlock ^= t;
    			        this._lBlock ^= t << offset;
    			    }

    			    function exchangeRL(offset, mask) {
    			        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
    			        this._lBlock ^= t;
    			        this._rBlock ^= t << offset;
    			    }

    			    /**
    			     * Shortcut functions to the cipher's object interface.
    			     *
    			     * @example
    			     *
    			     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
    			     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
    			     */
    			    C.DES = BlockCipher._createHelper(DES);

    			    /**
    			     * Triple-DES block cipher algorithm.
    			     */
    			    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
    			        _doReset: function () {
    			            // Shortcuts
    			            var key = this._key;
    			            var keyWords = key.words;
    			            // Make sure the key length is valid (64, 128 or >= 192 bit)
    			            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
    			                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
    			            }

    			            // Extend the key according to the keying options defined in 3DES standard
    			            var key1 = keyWords.slice(0, 2);
    			            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
    			            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

    			            // Create DES instances
    			            this._des1 = DES.createEncryptor(WordArray.create(key1));
    			            this._des2 = DES.createEncryptor(WordArray.create(key2));
    			            this._des3 = DES.createEncryptor(WordArray.create(key3));
    			        },

    			        encryptBlock: function (M, offset) {
    			            this._des1.encryptBlock(M, offset);
    			            this._des2.decryptBlock(M, offset);
    			            this._des3.encryptBlock(M, offset);
    			        },

    			        decryptBlock: function (M, offset) {
    			            this._des3.decryptBlock(M, offset);
    			            this._des2.encryptBlock(M, offset);
    			            this._des1.decryptBlock(M, offset);
    			        },

    			        keySize: 192/32,

    			        ivSize: 64/32,

    			        blockSize: 64/32
    			    });

    			    /**
    			     * Shortcut functions to the cipher's object interface.
    			     *
    			     * @example
    			     *
    			     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
    			     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
    			     */
    			    C.TripleDES = BlockCipher._createHelper(TripleDES);
    			}());


    			return CryptoJS.TripleDES;

    		})); 
    	} (tripledes));
    	return tripledes.exports;
    }

    var rc4 = {exports: {}};

    var hasRequiredRc4;

    function requireRc4 () {
    	if (hasRequiredRc4) return rc4.exports;
    	hasRequiredRc4 = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var StreamCipher = C_lib.StreamCipher;
    			    var C_algo = C.algo;

    			    /**
    			     * RC4 stream cipher algorithm.
    			     */
    			    var RC4 = C_algo.RC4 = StreamCipher.extend({
    			        _doReset: function () {
    			            // Shortcuts
    			            var key = this._key;
    			            var keyWords = key.words;
    			            var keySigBytes = key.sigBytes;

    			            // Init sbox
    			            var S = this._S = [];
    			            for (var i = 0; i < 256; i++) {
    			                S[i] = i;
    			            }

    			            // Key setup
    			            for (var i = 0, j = 0; i < 256; i++) {
    			                var keyByteIndex = i % keySigBytes;
    			                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

    			                j = (j + S[i] + keyByte) % 256;

    			                // Swap
    			                var t = S[i];
    			                S[i] = S[j];
    			                S[j] = t;
    			            }

    			            // Counters
    			            this._i = this._j = 0;
    			        },

    			        _doProcessBlock: function (M, offset) {
    			            M[offset] ^= generateKeystreamWord.call(this);
    			        },

    			        keySize: 256/32,

    			        ivSize: 0
    			    });

    			    function generateKeystreamWord() {
    			        // Shortcuts
    			        var S = this._S;
    			        var i = this._i;
    			        var j = this._j;

    			        // Generate keystream word
    			        var keystreamWord = 0;
    			        for (var n = 0; n < 4; n++) {
    			            i = (i + 1) % 256;
    			            j = (j + S[i]) % 256;

    			            // Swap
    			            var t = S[i];
    			            S[i] = S[j];
    			            S[j] = t;

    			            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
    			        }

    			        // Update counters
    			        this._i = i;
    			        this._j = j;

    			        return keystreamWord;
    			    }

    			    /**
    			     * Shortcut functions to the cipher's object interface.
    			     *
    			     * @example
    			     *
    			     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
    			     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
    			     */
    			    C.RC4 = StreamCipher._createHelper(RC4);

    			    /**
    			     * Modified RC4 stream cipher algorithm.
    			     */
    			    var RC4Drop = C_algo.RC4Drop = RC4.extend({
    			        /**
    			         * Configuration options.
    			         *
    			         * @property {number} drop The number of keystream words to drop. Default 192
    			         */
    			        cfg: RC4.cfg.extend({
    			            drop: 192
    			        }),

    			        _doReset: function () {
    			            RC4._doReset.call(this);

    			            // Drop
    			            for (var i = this.cfg.drop; i > 0; i--) {
    			                generateKeystreamWord.call(this);
    			            }
    			        }
    			    });

    			    /**
    			     * Shortcut functions to the cipher's object interface.
    			     *
    			     * @example
    			     *
    			     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
    			     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
    			     */
    			    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
    			}());


    			return CryptoJS.RC4;

    		})); 
    	} (rc4));
    	return rc4.exports;
    }

    var rabbit = {exports: {}};

    var hasRequiredRabbit;

    function requireRabbit () {
    	if (hasRequiredRabbit) return rabbit.exports;
    	hasRequiredRabbit = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var StreamCipher = C_lib.StreamCipher;
    			    var C_algo = C.algo;

    			    // Reusable objects
    			    var S  = [];
    			    var C_ = [];
    			    var G  = [];

    			    /**
    			     * Rabbit stream cipher algorithm
    			     */
    			    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
    			        _doReset: function () {
    			            // Shortcuts
    			            var K = this._key.words;
    			            var iv = this.cfg.iv;

    			            // Swap endian
    			            for (var i = 0; i < 4; i++) {
    			                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
    			                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
    			            }

    			            // Generate initial state values
    			            var X = this._X = [
    			                K[0], (K[3] << 16) | (K[2] >>> 16),
    			                K[1], (K[0] << 16) | (K[3] >>> 16),
    			                K[2], (K[1] << 16) | (K[0] >>> 16),
    			                K[3], (K[2] << 16) | (K[1] >>> 16)
    			            ];

    			            // Generate initial counter values
    			            var C = this._C = [
    			                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
    			                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
    			                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
    			                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
    			            ];

    			            // Carry bit
    			            this._b = 0;

    			            // Iterate the system four times
    			            for (var i = 0; i < 4; i++) {
    			                nextState.call(this);
    			            }

    			            // Modify the counters
    			            for (var i = 0; i < 8; i++) {
    			                C[i] ^= X[(i + 4) & 7];
    			            }

    			            // IV setup
    			            if (iv) {
    			                // Shortcuts
    			                var IV = iv.words;
    			                var IV_0 = IV[0];
    			                var IV_1 = IV[1];

    			                // Generate four subvectors
    			                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
    			                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
    			                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
    			                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

    			                // Modify counter values
    			                C[0] ^= i0;
    			                C[1] ^= i1;
    			                C[2] ^= i2;
    			                C[3] ^= i3;
    			                C[4] ^= i0;
    			                C[5] ^= i1;
    			                C[6] ^= i2;
    			                C[7] ^= i3;

    			                // Iterate the system four times
    			                for (var i = 0; i < 4; i++) {
    			                    nextState.call(this);
    			                }
    			            }
    			        },

    			        _doProcessBlock: function (M, offset) {
    			            // Shortcut
    			            var X = this._X;

    			            // Iterate the system
    			            nextState.call(this);

    			            // Generate four keystream words
    			            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    			            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    			            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    			            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    			            for (var i = 0; i < 4; i++) {
    			                // Swap endian
    			                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
    			                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

    			                // Encrypt
    			                M[offset + i] ^= S[i];
    			            }
    			        },

    			        blockSize: 128/32,

    			        ivSize: 64/32
    			    });

    			    function nextState() {
    			        // Shortcuts
    			        var X = this._X;
    			        var C = this._C;

    			        // Save old counter values
    			        for (var i = 0; i < 8; i++) {
    			            C_[i] = C[i];
    			        }

    			        // Calculate new counter values
    			        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
    			        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
    			        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
    			        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
    			        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
    			        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
    			        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
    			        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
    			        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

    			        // Calculate the g-values
    			        for (var i = 0; i < 8; i++) {
    			            var gx = X[i] + C[i];

    			            // Construct high and low argument for squaring
    			            var ga = gx & 0xffff;
    			            var gb = gx >>> 16;

    			            // Calculate high and low result of squaring
    			            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    			            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    			            // High XOR low
    			            G[i] = gh ^ gl;
    			        }

    			        // Calculate new state values
    			        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
    			        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
    			        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
    			        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
    			        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
    			        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
    			        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
    			        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
    			    }

    			    /**
    			     * Shortcut functions to the cipher's object interface.
    			     *
    			     * @example
    			     *
    			     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
    			     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
    			     */
    			    C.Rabbit = StreamCipher._createHelper(Rabbit);
    			}());


    			return CryptoJS.Rabbit;

    		})); 
    	} (rabbit));
    	return rabbit.exports;
    }

    var rabbitLegacy = {exports: {}};

    var hasRequiredRabbitLegacy;

    function requireRabbitLegacy () {
    	if (hasRequiredRabbitLegacy) return rabbitLegacy.exports;
    	hasRequiredRabbitLegacy = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var StreamCipher = C_lib.StreamCipher;
    			    var C_algo = C.algo;

    			    // Reusable objects
    			    var S  = [];
    			    var C_ = [];
    			    var G  = [];

    			    /**
    			     * Rabbit stream cipher algorithm.
    			     *
    			     * This is a legacy version that neglected to convert the key to little-endian.
    			     * This error doesn't affect the cipher's security,
    			     * but it does affect its compatibility with other implementations.
    			     */
    			    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
    			        _doReset: function () {
    			            // Shortcuts
    			            var K = this._key.words;
    			            var iv = this.cfg.iv;

    			            // Generate initial state values
    			            var X = this._X = [
    			                K[0], (K[3] << 16) | (K[2] >>> 16),
    			                K[1], (K[0] << 16) | (K[3] >>> 16),
    			                K[2], (K[1] << 16) | (K[0] >>> 16),
    			                K[3], (K[2] << 16) | (K[1] >>> 16)
    			            ];

    			            // Generate initial counter values
    			            var C = this._C = [
    			                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
    			                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
    			                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
    			                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
    			            ];

    			            // Carry bit
    			            this._b = 0;

    			            // Iterate the system four times
    			            for (var i = 0; i < 4; i++) {
    			                nextState.call(this);
    			            }

    			            // Modify the counters
    			            for (var i = 0; i < 8; i++) {
    			                C[i] ^= X[(i + 4) & 7];
    			            }

    			            // IV setup
    			            if (iv) {
    			                // Shortcuts
    			                var IV = iv.words;
    			                var IV_0 = IV[0];
    			                var IV_1 = IV[1];

    			                // Generate four subvectors
    			                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
    			                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
    			                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
    			                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

    			                // Modify counter values
    			                C[0] ^= i0;
    			                C[1] ^= i1;
    			                C[2] ^= i2;
    			                C[3] ^= i3;
    			                C[4] ^= i0;
    			                C[5] ^= i1;
    			                C[6] ^= i2;
    			                C[7] ^= i3;

    			                // Iterate the system four times
    			                for (var i = 0; i < 4; i++) {
    			                    nextState.call(this);
    			                }
    			            }
    			        },

    			        _doProcessBlock: function (M, offset) {
    			            // Shortcut
    			            var X = this._X;

    			            // Iterate the system
    			            nextState.call(this);

    			            // Generate four keystream words
    			            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    			            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    			            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    			            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    			            for (var i = 0; i < 4; i++) {
    			                // Swap endian
    			                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
    			                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

    			                // Encrypt
    			                M[offset + i] ^= S[i];
    			            }
    			        },

    			        blockSize: 128/32,

    			        ivSize: 64/32
    			    });

    			    function nextState() {
    			        // Shortcuts
    			        var X = this._X;
    			        var C = this._C;

    			        // Save old counter values
    			        for (var i = 0; i < 8; i++) {
    			            C_[i] = C[i];
    			        }

    			        // Calculate new counter values
    			        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
    			        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
    			        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
    			        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
    			        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
    			        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
    			        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
    			        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
    			        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

    			        // Calculate the g-values
    			        for (var i = 0; i < 8; i++) {
    			            var gx = X[i] + C[i];

    			            // Construct high and low argument for squaring
    			            var ga = gx & 0xffff;
    			            var gb = gx >>> 16;

    			            // Calculate high and low result of squaring
    			            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    			            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    			            // High XOR low
    			            G[i] = gh ^ gl;
    			        }

    			        // Calculate new state values
    			        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
    			        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
    			        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
    			        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
    			        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
    			        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
    			        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
    			        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
    			    }

    			    /**
    			     * Shortcut functions to the cipher's object interface.
    			     *
    			     * @example
    			     *
    			     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
    			     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
    			     */
    			    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
    			}());


    			return CryptoJS.RabbitLegacy;

    		})); 
    	} (rabbitLegacy));
    	return rabbitLegacy.exports;
    }

    var blowfish = {exports: {}};

    var hasRequiredBlowfish;

    function requireBlowfish () {
    	if (hasRequiredBlowfish) return blowfish.exports;
    	hasRequiredBlowfish = 1;
    	(function (module, exports) {
    (function (root, factory, undef) {
    			{
    				// CommonJS
    				module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    			}
    		}(commonjsGlobal, function (CryptoJS) {

    			(function () {
    			    // Shortcuts
    			    var C = CryptoJS;
    			    var C_lib = C.lib;
    			    var BlockCipher = C_lib.BlockCipher;
    			    var C_algo = C.algo;

    			    const N = 16;

    			    //Origin pbox and sbox, derived from PI
    			    const ORIG_P = [
    			        0x243F6A88, 0x85A308D3, 0x13198A2E, 0x03707344,
    			        0xA4093822, 0x299F31D0, 0x082EFA98, 0xEC4E6C89,
    			        0x452821E6, 0x38D01377, 0xBE5466CF, 0x34E90C6C,
    			        0xC0AC29B7, 0xC97C50DD, 0x3F84D5B5, 0xB5470917,
    			        0x9216D5D9, 0x8979FB1B
    			    ];

    			    const ORIG_S = [
    			        [   0xD1310BA6, 0x98DFB5AC, 0x2FFD72DB, 0xD01ADFB7,
    			            0xB8E1AFED, 0x6A267E96, 0xBA7C9045, 0xF12C7F99,
    			            0x24A19947, 0xB3916CF7, 0x0801F2E2, 0x858EFC16,
    			            0x636920D8, 0x71574E69, 0xA458FEA3, 0xF4933D7E,
    			            0x0D95748F, 0x728EB658, 0x718BCD58, 0x82154AEE,
    			            0x7B54A41D, 0xC25A59B5, 0x9C30D539, 0x2AF26013,
    			            0xC5D1B023, 0x286085F0, 0xCA417918, 0xB8DB38EF,
    			            0x8E79DCB0, 0x603A180E, 0x6C9E0E8B, 0xB01E8A3E,
    			            0xD71577C1, 0xBD314B27, 0x78AF2FDA, 0x55605C60,
    			            0xE65525F3, 0xAA55AB94, 0x57489862, 0x63E81440,
    			            0x55CA396A, 0x2AAB10B6, 0xB4CC5C34, 0x1141E8CE,
    			            0xA15486AF, 0x7C72E993, 0xB3EE1411, 0x636FBC2A,
    			            0x2BA9C55D, 0x741831F6, 0xCE5C3E16, 0x9B87931E,
    			            0xAFD6BA33, 0x6C24CF5C, 0x7A325381, 0x28958677,
    			            0x3B8F4898, 0x6B4BB9AF, 0xC4BFE81B, 0x66282193,
    			            0x61D809CC, 0xFB21A991, 0x487CAC60, 0x5DEC8032,
    			            0xEF845D5D, 0xE98575B1, 0xDC262302, 0xEB651B88,
    			            0x23893E81, 0xD396ACC5, 0x0F6D6FF3, 0x83F44239,
    			            0x2E0B4482, 0xA4842004, 0x69C8F04A, 0x9E1F9B5E,
    			            0x21C66842, 0xF6E96C9A, 0x670C9C61, 0xABD388F0,
    			            0x6A51A0D2, 0xD8542F68, 0x960FA728, 0xAB5133A3,
    			            0x6EEF0B6C, 0x137A3BE4, 0xBA3BF050, 0x7EFB2A98,
    			            0xA1F1651D, 0x39AF0176, 0x66CA593E, 0x82430E88,
    			            0x8CEE8619, 0x456F9FB4, 0x7D84A5C3, 0x3B8B5EBE,
    			            0xE06F75D8, 0x85C12073, 0x401A449F, 0x56C16AA6,
    			            0x4ED3AA62, 0x363F7706, 0x1BFEDF72, 0x429B023D,
    			            0x37D0D724, 0xD00A1248, 0xDB0FEAD3, 0x49F1C09B,
    			            0x075372C9, 0x80991B7B, 0x25D479D8, 0xF6E8DEF7,
    			            0xE3FE501A, 0xB6794C3B, 0x976CE0BD, 0x04C006BA,
    			            0xC1A94FB6, 0x409F60C4, 0x5E5C9EC2, 0x196A2463,
    			            0x68FB6FAF, 0x3E6C53B5, 0x1339B2EB, 0x3B52EC6F,
    			            0x6DFC511F, 0x9B30952C, 0xCC814544, 0xAF5EBD09,
    			            0xBEE3D004, 0xDE334AFD, 0x660F2807, 0x192E4BB3,
    			            0xC0CBA857, 0x45C8740F, 0xD20B5F39, 0xB9D3FBDB,
    			            0x5579C0BD, 0x1A60320A, 0xD6A100C6, 0x402C7279,
    			            0x679F25FE, 0xFB1FA3CC, 0x8EA5E9F8, 0xDB3222F8,
    			            0x3C7516DF, 0xFD616B15, 0x2F501EC8, 0xAD0552AB,
    			            0x323DB5FA, 0xFD238760, 0x53317B48, 0x3E00DF82,
    			            0x9E5C57BB, 0xCA6F8CA0, 0x1A87562E, 0xDF1769DB,
    			            0xD542A8F6, 0x287EFFC3, 0xAC6732C6, 0x8C4F5573,
    			            0x695B27B0, 0xBBCA58C8, 0xE1FFA35D, 0xB8F011A0,
    			            0x10FA3D98, 0xFD2183B8, 0x4AFCB56C, 0x2DD1D35B,
    			            0x9A53E479, 0xB6F84565, 0xD28E49BC, 0x4BFB9790,
    			            0xE1DDF2DA, 0xA4CB7E33, 0x62FB1341, 0xCEE4C6E8,
    			            0xEF20CADA, 0x36774C01, 0xD07E9EFE, 0x2BF11FB4,
    			            0x95DBDA4D, 0xAE909198, 0xEAAD8E71, 0x6B93D5A0,
    			            0xD08ED1D0, 0xAFC725E0, 0x8E3C5B2F, 0x8E7594B7,
    			            0x8FF6E2FB, 0xF2122B64, 0x8888B812, 0x900DF01C,
    			            0x4FAD5EA0, 0x688FC31C, 0xD1CFF191, 0xB3A8C1AD,
    			            0x2F2F2218, 0xBE0E1777, 0xEA752DFE, 0x8B021FA1,
    			            0xE5A0CC0F, 0xB56F74E8, 0x18ACF3D6, 0xCE89E299,
    			            0xB4A84FE0, 0xFD13E0B7, 0x7CC43B81, 0xD2ADA8D9,
    			            0x165FA266, 0x80957705, 0x93CC7314, 0x211A1477,
    			            0xE6AD2065, 0x77B5FA86, 0xC75442F5, 0xFB9D35CF,
    			            0xEBCDAF0C, 0x7B3E89A0, 0xD6411BD3, 0xAE1E7E49,
    			            0x00250E2D, 0x2071B35E, 0x226800BB, 0x57B8E0AF,
    			            0x2464369B, 0xF009B91E, 0x5563911D, 0x59DFA6AA,
    			            0x78C14389, 0xD95A537F, 0x207D5BA2, 0x02E5B9C5,
    			            0x83260376, 0x6295CFA9, 0x11C81968, 0x4E734A41,
    			            0xB3472DCA, 0x7B14A94A, 0x1B510052, 0x9A532915,
    			            0xD60F573F, 0xBC9BC6E4, 0x2B60A476, 0x81E67400,
    			            0x08BA6FB5, 0x571BE91F, 0xF296EC6B, 0x2A0DD915,
    			            0xB6636521, 0xE7B9F9B6, 0xFF34052E, 0xC5855664,
    			            0x53B02D5D, 0xA99F8FA1, 0x08BA4799, 0x6E85076A   ],
    			        [   0x4B7A70E9, 0xB5B32944, 0xDB75092E, 0xC4192623,
    			            0xAD6EA6B0, 0x49A7DF7D, 0x9CEE60B8, 0x8FEDB266,
    			            0xECAA8C71, 0x699A17FF, 0x5664526C, 0xC2B19EE1,
    			            0x193602A5, 0x75094C29, 0xA0591340, 0xE4183A3E,
    			            0x3F54989A, 0x5B429D65, 0x6B8FE4D6, 0x99F73FD6,
    			            0xA1D29C07, 0xEFE830F5, 0x4D2D38E6, 0xF0255DC1,
    			            0x4CDD2086, 0x8470EB26, 0x6382E9C6, 0x021ECC5E,
    			            0x09686B3F, 0x3EBAEFC9, 0x3C971814, 0x6B6A70A1,
    			            0x687F3584, 0x52A0E286, 0xB79C5305, 0xAA500737,
    			            0x3E07841C, 0x7FDEAE5C, 0x8E7D44EC, 0x5716F2B8,
    			            0xB03ADA37, 0xF0500C0D, 0xF01C1F04, 0x0200B3FF,
    			            0xAE0CF51A, 0x3CB574B2, 0x25837A58, 0xDC0921BD,
    			            0xD19113F9, 0x7CA92FF6, 0x94324773, 0x22F54701,
    			            0x3AE5E581, 0x37C2DADC, 0xC8B57634, 0x9AF3DDA7,
    			            0xA9446146, 0x0FD0030E, 0xECC8C73E, 0xA4751E41,
    			            0xE238CD99, 0x3BEA0E2F, 0x3280BBA1, 0x183EB331,
    			            0x4E548B38, 0x4F6DB908, 0x6F420D03, 0xF60A04BF,
    			            0x2CB81290, 0x24977C79, 0x5679B072, 0xBCAF89AF,
    			            0xDE9A771F, 0xD9930810, 0xB38BAE12, 0xDCCF3F2E,
    			            0x5512721F, 0x2E6B7124, 0x501ADDE6, 0x9F84CD87,
    			            0x7A584718, 0x7408DA17, 0xBC9F9ABC, 0xE94B7D8C,
    			            0xEC7AEC3A, 0xDB851DFA, 0x63094366, 0xC464C3D2,
    			            0xEF1C1847, 0x3215D908, 0xDD433B37, 0x24C2BA16,
    			            0x12A14D43, 0x2A65C451, 0x50940002, 0x133AE4DD,
    			            0x71DFF89E, 0x10314E55, 0x81AC77D6, 0x5F11199B,
    			            0x043556F1, 0xD7A3C76B, 0x3C11183B, 0x5924A509,
    			            0xF28FE6ED, 0x97F1FBFA, 0x9EBABF2C, 0x1E153C6E,
    			            0x86E34570, 0xEAE96FB1, 0x860E5E0A, 0x5A3E2AB3,
    			            0x771FE71C, 0x4E3D06FA, 0x2965DCB9, 0x99E71D0F,
    			            0x803E89D6, 0x5266C825, 0x2E4CC978, 0x9C10B36A,
    			            0xC6150EBA, 0x94E2EA78, 0xA5FC3C53, 0x1E0A2DF4,
    			            0xF2F74EA7, 0x361D2B3D, 0x1939260F, 0x19C27960,
    			            0x5223A708, 0xF71312B6, 0xEBADFE6E, 0xEAC31F66,
    			            0xE3BC4595, 0xA67BC883, 0xB17F37D1, 0x018CFF28,
    			            0xC332DDEF, 0xBE6C5AA5, 0x65582185, 0x68AB9802,
    			            0xEECEA50F, 0xDB2F953B, 0x2AEF7DAD, 0x5B6E2F84,
    			            0x1521B628, 0x29076170, 0xECDD4775, 0x619F1510,
    			            0x13CCA830, 0xEB61BD96, 0x0334FE1E, 0xAA0363CF,
    			            0xB5735C90, 0x4C70A239, 0xD59E9E0B, 0xCBAADE14,
    			            0xEECC86BC, 0x60622CA7, 0x9CAB5CAB, 0xB2F3846E,
    			            0x648B1EAF, 0x19BDF0CA, 0xA02369B9, 0x655ABB50,
    			            0x40685A32, 0x3C2AB4B3, 0x319EE9D5, 0xC021B8F7,
    			            0x9B540B19, 0x875FA099, 0x95F7997E, 0x623D7DA8,
    			            0xF837889A, 0x97E32D77, 0x11ED935F, 0x16681281,
    			            0x0E358829, 0xC7E61FD6, 0x96DEDFA1, 0x7858BA99,
    			            0x57F584A5, 0x1B227263, 0x9B83C3FF, 0x1AC24696,
    			            0xCDB30AEB, 0x532E3054, 0x8FD948E4, 0x6DBC3128,
    			            0x58EBF2EF, 0x34C6FFEA, 0xFE28ED61, 0xEE7C3C73,
    			            0x5D4A14D9, 0xE864B7E3, 0x42105D14, 0x203E13E0,
    			            0x45EEE2B6, 0xA3AAABEA, 0xDB6C4F15, 0xFACB4FD0,
    			            0xC742F442, 0xEF6ABBB5, 0x654F3B1D, 0x41CD2105,
    			            0xD81E799E, 0x86854DC7, 0xE44B476A, 0x3D816250,
    			            0xCF62A1F2, 0x5B8D2646, 0xFC8883A0, 0xC1C7B6A3,
    			            0x7F1524C3, 0x69CB7492, 0x47848A0B, 0x5692B285,
    			            0x095BBF00, 0xAD19489D, 0x1462B174, 0x23820E00,
    			            0x58428D2A, 0x0C55F5EA, 0x1DADF43E, 0x233F7061,
    			            0x3372F092, 0x8D937E41, 0xD65FECF1, 0x6C223BDB,
    			            0x7CDE3759, 0xCBEE7460, 0x4085F2A7, 0xCE77326E,
    			            0xA6078084, 0x19F8509E, 0xE8EFD855, 0x61D99735,
    			            0xA969A7AA, 0xC50C06C2, 0x5A04ABFC, 0x800BCADC,
    			            0x9E447A2E, 0xC3453484, 0xFDD56705, 0x0E1E9EC9,
    			            0xDB73DBD3, 0x105588CD, 0x675FDA79, 0xE3674340,
    			            0xC5C43465, 0x713E38D8, 0x3D28F89E, 0xF16DFF20,
    			            0x153E21E7, 0x8FB03D4A, 0xE6E39F2B, 0xDB83ADF7   ],
    			        [   0xE93D5A68, 0x948140F7, 0xF64C261C, 0x94692934,
    			            0x411520F7, 0x7602D4F7, 0xBCF46B2E, 0xD4A20068,
    			            0xD4082471, 0x3320F46A, 0x43B7D4B7, 0x500061AF,
    			            0x1E39F62E, 0x97244546, 0x14214F74, 0xBF8B8840,
    			            0x4D95FC1D, 0x96B591AF, 0x70F4DDD3, 0x66A02F45,
    			            0xBFBC09EC, 0x03BD9785, 0x7FAC6DD0, 0x31CB8504,
    			            0x96EB27B3, 0x55FD3941, 0xDA2547E6, 0xABCA0A9A,
    			            0x28507825, 0x530429F4, 0x0A2C86DA, 0xE9B66DFB,
    			            0x68DC1462, 0xD7486900, 0x680EC0A4, 0x27A18DEE,
    			            0x4F3FFEA2, 0xE887AD8C, 0xB58CE006, 0x7AF4D6B6,
    			            0xAACE1E7C, 0xD3375FEC, 0xCE78A399, 0x406B2A42,
    			            0x20FE9E35, 0xD9F385B9, 0xEE39D7AB, 0x3B124E8B,
    			            0x1DC9FAF7, 0x4B6D1856, 0x26A36631, 0xEAE397B2,
    			            0x3A6EFA74, 0xDD5B4332, 0x6841E7F7, 0xCA7820FB,
    			            0xFB0AF54E, 0xD8FEB397, 0x454056AC, 0xBA489527,
    			            0x55533A3A, 0x20838D87, 0xFE6BA9B7, 0xD096954B,
    			            0x55A867BC, 0xA1159A58, 0xCCA92963, 0x99E1DB33,
    			            0xA62A4A56, 0x3F3125F9, 0x5EF47E1C, 0x9029317C,
    			            0xFDF8E802, 0x04272F70, 0x80BB155C, 0x05282CE3,
    			            0x95C11548, 0xE4C66D22, 0x48C1133F, 0xC70F86DC,
    			            0x07F9C9EE, 0x41041F0F, 0x404779A4, 0x5D886E17,
    			            0x325F51EB, 0xD59BC0D1, 0xF2BCC18F, 0x41113564,
    			            0x257B7834, 0x602A9C60, 0xDFF8E8A3, 0x1F636C1B,
    			            0x0E12B4C2, 0x02E1329E, 0xAF664FD1, 0xCAD18115,
    			            0x6B2395E0, 0x333E92E1, 0x3B240B62, 0xEEBEB922,
    			            0x85B2A20E, 0xE6BA0D99, 0xDE720C8C, 0x2DA2F728,
    			            0xD0127845, 0x95B794FD, 0x647D0862, 0xE7CCF5F0,
    			            0x5449A36F, 0x877D48FA, 0xC39DFD27, 0xF33E8D1E,
    			            0x0A476341, 0x992EFF74, 0x3A6F6EAB, 0xF4F8FD37,
    			            0xA812DC60, 0xA1EBDDF8, 0x991BE14C, 0xDB6E6B0D,
    			            0xC67B5510, 0x6D672C37, 0x2765D43B, 0xDCD0E804,
    			            0xF1290DC7, 0xCC00FFA3, 0xB5390F92, 0x690FED0B,
    			            0x667B9FFB, 0xCEDB7D9C, 0xA091CF0B, 0xD9155EA3,
    			            0xBB132F88, 0x515BAD24, 0x7B9479BF, 0x763BD6EB,
    			            0x37392EB3, 0xCC115979, 0x8026E297, 0xF42E312D,
    			            0x6842ADA7, 0xC66A2B3B, 0x12754CCC, 0x782EF11C,
    			            0x6A124237, 0xB79251E7, 0x06A1BBE6, 0x4BFB6350,
    			            0x1A6B1018, 0x11CAEDFA, 0x3D25BDD8, 0xE2E1C3C9,
    			            0x44421659, 0x0A121386, 0xD90CEC6E, 0xD5ABEA2A,
    			            0x64AF674E, 0xDA86A85F, 0xBEBFE988, 0x64E4C3FE,
    			            0x9DBC8057, 0xF0F7C086, 0x60787BF8, 0x6003604D,
    			            0xD1FD8346, 0xF6381FB0, 0x7745AE04, 0xD736FCCC,
    			            0x83426B33, 0xF01EAB71, 0xB0804187, 0x3C005E5F,
    			            0x77A057BE, 0xBDE8AE24, 0x55464299, 0xBF582E61,
    			            0x4E58F48F, 0xF2DDFDA2, 0xF474EF38, 0x8789BDC2,
    			            0x5366F9C3, 0xC8B38E74, 0xB475F255, 0x46FCD9B9,
    			            0x7AEB2661, 0x8B1DDF84, 0x846A0E79, 0x915F95E2,
    			            0x466E598E, 0x20B45770, 0x8CD55591, 0xC902DE4C,
    			            0xB90BACE1, 0xBB8205D0, 0x11A86248, 0x7574A99E,
    			            0xB77F19B6, 0xE0A9DC09, 0x662D09A1, 0xC4324633,
    			            0xE85A1F02, 0x09F0BE8C, 0x4A99A025, 0x1D6EFE10,
    			            0x1AB93D1D, 0x0BA5A4DF, 0xA186F20F, 0x2868F169,
    			            0xDCB7DA83, 0x573906FE, 0xA1E2CE9B, 0x4FCD7F52,
    			            0x50115E01, 0xA70683FA, 0xA002B5C4, 0x0DE6D027,
    			            0x9AF88C27, 0x773F8641, 0xC3604C06, 0x61A806B5,
    			            0xF0177A28, 0xC0F586E0, 0x006058AA, 0x30DC7D62,
    			            0x11E69ED7, 0x2338EA63, 0x53C2DD94, 0xC2C21634,
    			            0xBBCBEE56, 0x90BCB6DE, 0xEBFC7DA1, 0xCE591D76,
    			            0x6F05E409, 0x4B7C0188, 0x39720A3D, 0x7C927C24,
    			            0x86E3725F, 0x724D9DB9, 0x1AC15BB4, 0xD39EB8FC,
    			            0xED545578, 0x08FCA5B5, 0xD83D7CD3, 0x4DAD0FC4,
    			            0x1E50EF5E, 0xB161E6F8, 0xA28514D9, 0x6C51133C,
    			            0x6FD5C7E7, 0x56E14EC4, 0x362ABFCE, 0xDDC6C837,
    			            0xD79A3234, 0x92638212, 0x670EFA8E, 0x406000E0  ],
    			        [   0x3A39CE37, 0xD3FAF5CF, 0xABC27737, 0x5AC52D1B,
    			            0x5CB0679E, 0x4FA33742, 0xD3822740, 0x99BC9BBE,
    			            0xD5118E9D, 0xBF0F7315, 0xD62D1C7E, 0xC700C47B,
    			            0xB78C1B6B, 0x21A19045, 0xB26EB1BE, 0x6A366EB4,
    			            0x5748AB2F, 0xBC946E79, 0xC6A376D2, 0x6549C2C8,
    			            0x530FF8EE, 0x468DDE7D, 0xD5730A1D, 0x4CD04DC6,
    			            0x2939BBDB, 0xA9BA4650, 0xAC9526E8, 0xBE5EE304,
    			            0xA1FAD5F0, 0x6A2D519A, 0x63EF8CE2, 0x9A86EE22,
    			            0xC089C2B8, 0x43242EF6, 0xA51E03AA, 0x9CF2D0A4,
    			            0x83C061BA, 0x9BE96A4D, 0x8FE51550, 0xBA645BD6,
    			            0x2826A2F9, 0xA73A3AE1, 0x4BA99586, 0xEF5562E9,
    			            0xC72FEFD3, 0xF752F7DA, 0x3F046F69, 0x77FA0A59,
    			            0x80E4A915, 0x87B08601, 0x9B09E6AD, 0x3B3EE593,
    			            0xE990FD5A, 0x9E34D797, 0x2CF0B7D9, 0x022B8B51,
    			            0x96D5AC3A, 0x017DA67D, 0xD1CF3ED6, 0x7C7D2D28,
    			            0x1F9F25CF, 0xADF2B89B, 0x5AD6B472, 0x5A88F54C,
    			            0xE029AC71, 0xE019A5E6, 0x47B0ACFD, 0xED93FA9B,
    			            0xE8D3C48D, 0x283B57CC, 0xF8D56629, 0x79132E28,
    			            0x785F0191, 0xED756055, 0xF7960E44, 0xE3D35E8C,
    			            0x15056DD4, 0x88F46DBA, 0x03A16125, 0x0564F0BD,
    			            0xC3EB9E15, 0x3C9057A2, 0x97271AEC, 0xA93A072A,
    			            0x1B3F6D9B, 0x1E6321F5, 0xF59C66FB, 0x26DCF319,
    			            0x7533D928, 0xB155FDF5, 0x03563482, 0x8ABA3CBB,
    			            0x28517711, 0xC20AD9F8, 0xABCC5167, 0xCCAD925F,
    			            0x4DE81751, 0x3830DC8E, 0x379D5862, 0x9320F991,
    			            0xEA7A90C2, 0xFB3E7BCE, 0x5121CE64, 0x774FBE32,
    			            0xA8B6E37E, 0xC3293D46, 0x48DE5369, 0x6413E680,
    			            0xA2AE0810, 0xDD6DB224, 0x69852DFD, 0x09072166,
    			            0xB39A460A, 0x6445C0DD, 0x586CDECF, 0x1C20C8AE,
    			            0x5BBEF7DD, 0x1B588D40, 0xCCD2017F, 0x6BB4E3BB,
    			            0xDDA26A7E, 0x3A59FF45, 0x3E350A44, 0xBCB4CDD5,
    			            0x72EACEA8, 0xFA6484BB, 0x8D6612AE, 0xBF3C6F47,
    			            0xD29BE463, 0x542F5D9E, 0xAEC2771B, 0xF64E6370,
    			            0x740E0D8D, 0xE75B1357, 0xF8721671, 0xAF537D5D,
    			            0x4040CB08, 0x4EB4E2CC, 0x34D2466A, 0x0115AF84,
    			            0xE1B00428, 0x95983A1D, 0x06B89FB4, 0xCE6EA048,
    			            0x6F3F3B82, 0x3520AB82, 0x011A1D4B, 0x277227F8,
    			            0x611560B1, 0xE7933FDC, 0xBB3A792B, 0x344525BD,
    			            0xA08839E1, 0x51CE794B, 0x2F32C9B7, 0xA01FBAC9,
    			            0xE01CC87E, 0xBCC7D1F6, 0xCF0111C3, 0xA1E8AAC7,
    			            0x1A908749, 0xD44FBD9A, 0xD0DADECB, 0xD50ADA38,
    			            0x0339C32A, 0xC6913667, 0x8DF9317C, 0xE0B12B4F,
    			            0xF79E59B7, 0x43F5BB3A, 0xF2D519FF, 0x27D9459C,
    			            0xBF97222C, 0x15E6FC2A, 0x0F91FC71, 0x9B941525,
    			            0xFAE59361, 0xCEB69CEB, 0xC2A86459, 0x12BAA8D1,
    			            0xB6C1075E, 0xE3056A0C, 0x10D25065, 0xCB03A442,
    			            0xE0EC6E0E, 0x1698DB3B, 0x4C98A0BE, 0x3278E964,
    			            0x9F1F9532, 0xE0D392DF, 0xD3A0342B, 0x8971F21E,
    			            0x1B0A7441, 0x4BA3348C, 0xC5BE7120, 0xC37632D8,
    			            0xDF359F8D, 0x9B992F2E, 0xE60B6F47, 0x0FE3F11D,
    			            0xE54CDA54, 0x1EDAD891, 0xCE6279CF, 0xCD3E7E6F,
    			            0x1618B166, 0xFD2C1D05, 0x848FD2C5, 0xF6FB2299,
    			            0xF523F357, 0xA6327623, 0x93A83531, 0x56CCCD02,
    			            0xACF08162, 0x5A75EBB5, 0x6E163697, 0x88D273CC,
    			            0xDE966292, 0x81B949D0, 0x4C50901B, 0x71C65614,
    			            0xE6C6C7BD, 0x327A140A, 0x45E1D006, 0xC3F27B9A,
    			            0xC9AA53FD, 0x62A80F00, 0xBB25BFE2, 0x35BDD2F6,
    			            0x71126905, 0xB2040222, 0xB6CBCF7C, 0xCD769C2B,
    			            0x53113EC0, 0x1640E3D3, 0x38ABBD60, 0x2547ADF0,
    			            0xBA38209C, 0xF746CE76, 0x77AFA1C5, 0x20756060,
    			            0x85CBFE4E, 0x8AE88DD8, 0x7AAAF9B0, 0x4CF9AA7E,
    			            0x1948C25C, 0x02FB8A8C, 0x01C36AE4, 0xD6EBE1F9,
    			            0x90D4F869, 0xA65CDEA0, 0x3F09252D, 0xC208E69F,
    			            0xB74E6132, 0xCE77E25B, 0x578FDFE3, 0x3AC372E6  ]
    			    ];

    			    var BLOWFISH_CTX = {
    			        pbox: [],
    			        sbox: []
    			    };

    			    function F(ctx, x){
    			        let a = (x >> 24) & 0xFF;
    			        let b = (x >> 16) & 0xFF;
    			        let c = (x >> 8) & 0xFF;
    			        let d = x & 0xFF;

    			        let y = ctx.sbox[0][a] + ctx.sbox[1][b];
    			        y = y ^ ctx.sbox[2][c];
    			        y = y + ctx.sbox[3][d];

    			        return y;
    			    }

    			    function BlowFish_Encrypt(ctx, left, right){
    			        let Xl = left;
    			        let Xr = right;
    			        let temp;

    			        for(let i = 0; i < N; ++i){
    			            Xl = Xl ^ ctx.pbox[i];
    			            Xr = F(ctx, Xl) ^ Xr;

    			            temp = Xl;
    			            Xl = Xr;
    			            Xr = temp;
    			        }

    			        temp = Xl;
    			        Xl = Xr;
    			        Xr = temp;

    			        Xr = Xr ^ ctx.pbox[N];
    			        Xl = Xl ^ ctx.pbox[N + 1];

    			        return {left: Xl, right: Xr};
    			    }

    			    function BlowFish_Decrypt(ctx, left, right){
    			        let Xl = left;
    			        let Xr = right;
    			        let temp;

    			        for(let i = N + 1; i > 1; --i){
    			            Xl = Xl ^ ctx.pbox[i];
    			            Xr = F(ctx, Xl) ^ Xr;

    			            temp = Xl;
    			            Xl = Xr;
    			            Xr = temp;
    			        }

    			        temp = Xl;
    			        Xl = Xr;
    			        Xr = temp;

    			        Xr = Xr ^ ctx.pbox[1];
    			        Xl = Xl ^ ctx.pbox[0];

    			        return {left: Xl, right: Xr};
    			    }

    			    /**
    			     * Initialization ctx's pbox and sbox.
    			     *
    			     * @param {Object} ctx The object has pbox and sbox.
    			     * @param {Array} key An array of 32-bit words.
    			     * @param {int} keysize The length of the key.
    			     *
    			     * @example
    			     *
    			     *     BlowFishInit(BLOWFISH_CTX, key, 128/32);
    			     */
    			    function BlowFishInit(ctx, key, keysize)
    			    {
    			        for(let Row = 0; Row < 4; Row++)
    			        {
    			            ctx.sbox[Row] = [];
    			            for(let Col = 0; Col < 256; Col++)
    			            {
    			                ctx.sbox[Row][Col] = ORIG_S[Row][Col];
    			            }
    			        }

    			        let keyIndex = 0;
    			        for(let index = 0; index < N + 2; index++)
    			        {
    			            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
    			            keyIndex++;
    			            if(keyIndex >= keysize)
    			            {
    			                keyIndex = 0;
    			            }
    			        }

    			        let Data1 = 0;
    			        let Data2 = 0;
    			        let res = 0;
    			        for(let i = 0; i < N + 2; i += 2)
    			        {
    			            res = BlowFish_Encrypt(ctx, Data1, Data2);
    			            Data1 = res.left;
    			            Data2 = res.right;
    			            ctx.pbox[i] = Data1;
    			            ctx.pbox[i + 1] = Data2;
    			        }

    			        for(let i = 0; i < 4; i++)
    			        {
    			            for(let j = 0; j < 256; j += 2)
    			            {
    			                res = BlowFish_Encrypt(ctx, Data1, Data2);
    			                Data1 = res.left;
    			                Data2 = res.right;
    			                ctx.sbox[i][j] = Data1;
    			                ctx.sbox[i][j + 1] = Data2;
    			            }
    			        }

    			        return true;
    			    }

    			    /**
    			     * Blowfish block cipher algorithm.
    			     */
    			    var Blowfish = C_algo.Blowfish = BlockCipher.extend({
    			        _doReset: function () {
    			            // Skip reset of nRounds has been set before and key did not change
    			            if (this._keyPriorReset === this._key) {
    			                return;
    			            }

    			            // Shortcuts
    			            var key = this._keyPriorReset = this._key;
    			            var keyWords = key.words;
    			            var keySize = key.sigBytes / 4;

    			            //Initialization pbox and sbox
    			            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
    			        },

    			        encryptBlock: function (M, offset) {
    			            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
    			            M[offset] = res.left;
    			            M[offset + 1] = res.right;
    			        },

    			        decryptBlock: function (M, offset) {
    			            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
    			            M[offset] = res.left;
    			            M[offset + 1] = res.right;
    			        },

    			        blockSize: 64/32,

    			        keySize: 128/32,

    			        ivSize: 64/32
    			    });

    			    /**
    			     * Shortcut functions to the cipher's object interface.
    			     *
    			     * @example
    			     *
    			     *     var ciphertext = CryptoJS.Blowfish.encrypt(message, key, cfg);
    			     *     var plaintext  = CryptoJS.Blowfish.decrypt(ciphertext, key, cfg);
    			     */
    			    C.Blowfish = BlockCipher._createHelper(Blowfish);
    			}());


    			return CryptoJS.Blowfish;

    		})); 
    	} (blowfish));
    	return blowfish.exports;
    }

    (function (module, exports) {
    (function (root, factory, undef) {
    		{
    			// CommonJS
    			module.exports = factory(requireCore(), requireX64Core(), requireLibTypedarrays(), requireEncUtf16(), requireEncBase64(), requireEncBase64url(), requireMd5(), requireSha1(), requireSha256(), requireSha224(), requireSha512(), requireSha384(), requireSha3(), requireRipemd160(), requireHmac(), requirePbkdf2(), requireEvpkdf(), requireCipherCore(), requireModeCfb(), requireModeCtr(), requireModeCtrGladman(), requireModeOfb(), requireModeEcb(), requirePadAnsix923(), requirePadIso10126(), requirePadIso97971(), requirePadZeropadding(), requirePadNopadding(), requireFormatHex(), requireAes(), requireTripledes(), requireRc4(), requireRabbit(), requireRabbitLegacy(), requireBlowfish());
    		}
    	}(commonjsGlobal, function (CryptoJS) {

    		return CryptoJS;

    	})); 
    } (cryptoJs));

    var cryptoJsExports = cryptoJs.exports;
    var crypto = /*@__PURE__*/getDefaultExportFromCjs(cryptoJsExports);

    /**
     * 数据SHA256
     * @param data 数据
     * @returns
     */
    function hash(data) {
        return crypto.SHA256(data);
    }

    var meta = {"name":"VIP视频解析[各种VIP视频解析](1.0.0)","href":"D:\\Github\\bookmark-script\\src\\public\\vip\\video\\index.ts","description":"各种VIP视频解析","icon":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAIABJREFUeF7tXXl8E9X2P3dmkhZKkgKiwlN2lL0psgmIqKgsgvqQp7iAO6CyN61PQUFUeKDI0gKKj0X2RRBUUHBBRVwQER5b6cKOCLK3TdIkc3+/GwQLJM3cm5lkpnPv59O/cs6553zPfDtzt3MR8MYR4AiERQBxbDgCHIHwCHCC8KeDI1AKApwg/PHgCHCC8GeAI8CGAH+DsOHGtUyCACeISRLNw2RDgBOEDTeuZRIEOEFMkmgeJhsCnCBsuHEtkyDACWKSRPMw2RDgBGHDjWuZBAFOEJMkmofJhgAnCBtuXMskCHCCmCTRPEw2BDhB2HDjWiZBgBPEJInmYbIhwAnChhvXMgkCnCAmSTQPkw0BThA23LiWSRDgBDFJonmYbAhwgrDhxrVMggAniEkSzcNkQ4AThA03rmUSBDhBTJJoHiYbApwgbLhxLZMgUCYJUrBrVhMkQF8j5hAFzuUaze9AIHDAIuBtiY2GGs73SFiXGYJ4c+eslpGlPSBreYxEQ8YlQjFY5NORcqa7371eL/iKvcSvk4DgJwDYjgIJ423NBh7XnbOUDhnyQbo8RnfOBz9iydaKMnbdiYvYDRZ8Tnd+RXJIlmUoKiy4RAxjyJUBnqmY6lofSV/PvxueIO7c+cexWP4qPYOs1DcJFwL5M2IrLDwHWMZXuI4Qet6WkjbViDERnw1NEE/eQrcsJCYaFfzL/bbgsyBijyHD8Xrc4PP5QvuO8TP21PT3jRiYYQnizZubHxAq1DIi6OF8tuDTIOJiQ4YUCPjBXVQU1neEoIktxbXdaMEZkiDevDlLA4L9AaOBHcnfBHwCEA5EEtPt72QcQsYj4Zrd6TLc82Y4h4ty3u8JUuUlun1KonAsUSaTPld+x0dhMqaqXq8HfMWlvgGz7U5X/Zg6FWVnxiPI3uXY4EOnkCkjbw7yBjFy8wf84CnlMysYG4I59hTX40aJ01AEcecvk426xhHpgRDBCxb5TCQxXf+OMYbCgsjT1LKMn0tulj5N18H85ZxhCOLJW1QoCwnljQAqi49GnuItGa+7qBACgcjjKBGEZknOYVtYsIqljiEI4smbmyMLFerGEphY90VW0MlKutGb1+MBn09ZHN4C2V6lXUbkV04cQdE9Qdx75szHFvvDccQoJl0nyH8CgvAzQDFxQoVOyFoIWRNR1nC+3ZleR5lsfKR0TZDCne93ReUqfxIfaGLXK0IYEgKG37YUBAzLMhRetu2kNCQRggW2FNcjsUObriddE8S9bznGWNcu0qEdRlrAxWDFxtukGC54QhBCFKUNIxjkSHFNViofSzndPn3u/CUBjCxCLMGIV1+SXAAShF+FjpdfrP163EXg9/sp1dEtdmfaBkolzcV1SRBP/sICGSUmaR69Tjow8haTUBAWez1QXPqCYUjki0G87irn0MM6SUvQDd0RxJ3zwS4s2Qy12hpdQjGcX0EvO83vKwaPh37TJQY46HC6qusJCV0RxJ09exa2OgyzyqpGIsva+INgIvv9UORm+2RECC21paT9Sw1s1bChG4K4c2Z1wFLy12oEZSQbEi4ACbM9THqNk3Ym68o4UJrdmfa2HuLTD0H2fihjEHTjT6ySY5FPgQhhzlHEygmV+0GA4dy56Nb/MMZdHanpq1V2jdqcLh5Id/7iYoysFmrvDa6AwA8J8kmDRxHafbIni+zNiqahgNzQdlPGrmhsRKsbd4J48xacCgjlkqMNxIj65NOKfGKVxaZ0T1aE2I/akhJqonoDgxUh4tHiShBP7rztspjUKB6B66HPsvh5dQFXtrWQEKMRQB/ZnGn3xytfcSNIcd7saX7B0S9egce7XwF8YJVPxdsNzfpnXQsJ5ZCM8cvJqelvauZsKYbjQpAzW2e2stiSfwQUl+7jgfMVfZbF2auSQZKTheSEoVoNIehlS3EtUsueUjtxeULde5cEMJhjG0m4RCTgk4Aw7XYMpWmNv1xxsReKveoOHTCC1o4UFylMF7MWc4J48hcVySihXMwi1GFHAvaCFRv79GAkWMmZEHI2RNWG4AQKJDSIZcXGmBLEk7fgiCyUq6oqaCWMFXs8cPzwYUhMSgLHVZVBkuI3c3zi6NGgZ5WvvTbE59VZkCLUv/IUueHYkWNgr+iA5MrGm+RT+xPrAogY49WO1PSuWj1Dl9uNGUHcuR/8jEVbCy0C2/zll/DDms/hj/37L5qv4HBA01vaQUq7dlCtTm0tur3C5tbvNsDuTZvgQPYeOHvy/PpGebsNqt9wI9zxYE+4tmZNQBAAa+BE2OHX6vkr4X8/b4U/j/69P8teyQHV69SAHs/2ggr2CsyxnD11Fg7tPQCH8g4w2yCKCeUSwZZsA1uyA+wV7WBz2KB8hUv3lvr9PvC4lR6conbnP3an60VqLQaFmBCkaPfsSZDgGMjgX0SVFVnT4Nf1pZd/vbv3o9CuW7eItqIR+GrJUvh66bJSTXR+vA+079Ih5NrHmVNnYPmMRbBzc/jaauWSysOzw5+H62rT7ef7dvV62PTVRjh68PdoQixVt1yF8nBDkxuhVoN6cH2d6lCtRjXwKD5ZSO8WAtTX5kx7j16TTkNzghTmzr5JEG2btNhGMq5vPzh3UtlU6dOjR0GN+tpsEv74/f/Cz5+vVYT8MyMGww2NrzxlOuONTNizLVuRjRHT3wj+547UDuTsg3dHT4Fir7Iz4pHs0fxeo14taH1XG6if2pBGjUpWxvJdyakZ66iUKIU1J0hR/hIfIItE6VdEcSX/sUsaua5ePej75usR7dIKnDp2DLKGpSs+h51kqwD9Xh0I117/91Ds+8++hY9mLVXcdcObGsMT6ZGvPxndfzicPRnfyYCmN6dCm7vawTXXXzkWUxxweMGzVhE3S2ySnqeCrZAmNCVIUe6C0yCWc2jhfJYrA47u20dlmhCEEEXNtv7D5fDlosVUJu97oie07dQ+qOP3+eE/g0bB6RN0R26ff20I1Lwx/Nhq7dLVsG7ZGiq/tBK2JibAzXe1hQ7d71C9C4zxOruzqBNCI5Wf8aXwQjOCeHLm58pSeU0qVngKC+GNx5+kCPO8aPOOHeHevs9Q64VT8Pt8kJWWDn8eOUJls9XtN8MDfc8Xajlx7ASMHTCSSp8Id3nkXrite8ewepkjJsD+PXup7Wqp0OmhrtCqYxvVu8AYpjlSXc+pblirE4XuPR+sxRbbnVo4TGzu3bEDZo58jdp8QmI5GDhxAtgrV6LWDaXw69frYcVU+gKBJT+R9u7Og6mvTqT2p1HzJvC469mQescO/wHjh6r/OUntZAiFbr3vg2btNZjMRNhlT0l/Sw0fS9pQ/Q3i3jPnNWyxj1Db0ZL2yALU64/1Yerinqeeglad7mLSvVzpgzFjIedX+uKAdz94D3T8591Bc79t3AzzJ82m9qdOw7rQ79VBIfXydubA9FG6LBIS9LdH34egcYsm1DFHUkAyfsDWLP3DSHI0v6tKkOI9s5wBS9LmWGwjmZbxIhzJp/+EqOtMgT4vv0SDUUhZshA4cUDoBzSS8Wdeeh5uSDk/o/bVR+tgzcJVkVSu+L00guz+bSf8dwz9m43aCUaFWvVrQe+0pxm1w6shALcAQls1S5qqShB33iI3FhJicuPTqhnvw6a1bDN8gyZPhKuqRreg/8PqNbB6Fv1/fiQIMGrGGCDrBqSxDqZLI8iGz76FlRSzYqo/qQoMPvnis3B93RoKJKlFNgaw1LVi6hC6WY8w3ahGkKK8+UdBKH8NdTiMCoQchCQsrcsTj8PNXTqzqF7UmfPGm5D721ZqG2R94IXXh17U04IgrDapg4lCofWdbeHuB7tEYSG8KsZ4viM1/VE1jKtCEE/e3M2yUKGZGg4ptXE4Lw+mv8j2qRTtZxaZtZo0aIhSVy+R6/RQN7jj/r/HQKwPc2lvEFabTAExKjkqOeC51wYBmQLWoiGA0Tan65VobUdNEHfO7HlYcsSlturcMWNhD8MgmYA2aNI7cFW1akz4bfzkU1gz5wMm3WFvvXTJIiHrw6wFQYjN2g1DrxN5i9xw8vhJ+H3/4eDUtBqt14DHLo7F1LAXwsaTdqdrVjS2oyJIYc7M/khyTAWIT4XQX774Ala+O4Mp/s59ekObe9g2hc4Z/Trkbvsfdb9k28VTL/a/RE9vBAk3M1bSabKRkkxPf/vxV3D0EPv+LvKJRT61NGx+JIgdbU2HfsPaBzNBPLvm3ICt5XZgQf1tJEqDKTx7FiYOHAIeimriF2zXbdoE+owYrrSri3LHDx2GyUP+HkPQGOjx7EPQ+o5LHwgjEuRCzH8cPgrzJsxkJknL21pB50e600DIIrvd7w90rdT8RaYtzMwEcectOIOFcpF3zLGERKGzYup0+PVrtnpzg6dMCnleo7Tuv1/1CXw2dy6Fh+dFyU5c1zvDg1vDSzYjE4TEsT9nL2QOn0CNB1Go06gePDokJoU0P7Y7XUxMZCKIO3deHhaTYnPIIgL0uzb9AgvGjWdKUKfHHoO23e+h0p05chTs3bGTSocIN7+1FTz43JUTK0YnCInt9f4j4MxJ+lnVSldXhgFvsr2NaROAEJpkS0kbTK1Hq1CQ8/4QQarM9i+DtjOF8lOGDIVjh+iLgtdp0hgef0X5ov/xgwdh8tA0hV5dKtYn7Wlo3CLlCt2yQJAFk2fDlu83M+Hy6vtvMOmxKCFAPWzOtOU0utRvEHfeghNYKKfOZiYaT0uRXbdgAXy7YiWTtSGZU6DSNVcr0t2w6mP4fO48RbIlha6qWgVcE4aDIFw5mVEWCLLiv0tg49rvqHGpWKUSDBwzjFovCoX1dqfrNhp9KoK4c2cOx2LF0TQdxEL2UE4OvPsS/YCb+Hb3Y49Cu+7KThvOGP4KHMhWdqipZNy33nM73PNY6NpnZYEg00dNgrydudSprt2gDjw2jH5XNnVHJRUQesaekqZ4hZmOIDmzv8GS4/xBBp011rFB7caN4IlXI68n/XHgAGQOczFF/dzIQVCrQehLeo1OkOO/H4Nxg9n+Z97UviXc0/teJkxZlWjHIlQE8eTNOygLSdexOqel3sZPV8Oa2XOYuhialQkVr65Squ53H62EtfMXUNu/fGvJ5QaMTpB5E2fC1h/odzQTHDr2uBvado7t/1uE0EJbSpriW5OpCFKUt9ALQqKV+imJgcLp48dh0sAhQKpp0DYln1nTM16Cw/n0Jzu7PHwv3HZv+INNRiSIx+2BvB05sH7VF7AvO58W7ovyD/TrBY2aN2bWZ1FEgNbZnGmKzztQEcSTN/8PWSivbETL4n2UOkvemQT/27iR2kqthg3hyVGvhtU7un9/8OQgS0t7+2W45rrw57H1RpBIMXo9xXAon2nN7RLTFosFnhs9CJKvqhipS7V/n2t3unorNUpHkNw5n8qiXZstmEo9LkVu24bvYekktoNCadOngqNy5ZDWv172IXy1eAm1h6Wd+rtgTE8EoQ4wCoWmrZ1w/9M9o7DAqIrQy/aUNMWFsKkI4t7z3uPYUiWqzV+MYSlSI9X8Jg8eAqeP/6lIvqRQp969oW230HuzyOCcDNJpW8++D0PL228uVc2sBHnw+Uc0LQkUFnQs329PzfhIaS6pCEKMenLnnZLFJN3Wwvx01iz4cfVnSuO/KFejQQN4+rUriyf8vncvTE2nL+JHKg2mTxwOpMxPac2MBLn6H9dA/1Ga1BGMlPdP7U4X1dYJaoIESZK/KCCjhPhs4Y0AQf72HTBrFH1BB2LWNX3aFQUdSEkfUtqHtrW87Wbo2S/yZIkZCXJr9zugQ/fbaSGNTh6DH0Rob2/q+oHGEBtBDq6si/2+HAwiTV8xk3333y/DoVz6hStSGrRN10uHWJMHDYHjlGV9SKCk4ggZg0RqZiNI8w6toOujTPsGI0FZ6u8Yy6McqRnU9ZWYCEI8Kdy/4iZBDvyiR5J8s3wFfLGQ/q6V6vVvhGdG//32YT21SD4hyNYSJc1MBCGFKsghqdg3NM7uTMtg6ZeZIKQz994ltwIW12Okr6+tY4cOwZQhbHt8Mma8BxWSzxeDJPuuyP4r2kYKupHCbkqaWQhy7XVV4dFhT0CS7dIq8EowikYGAWTanK4BrDaiIkhwPLJvRWeM5dU4TqcKwwU+b+w4yN5Mv8O065NPQOvOnYJm337uBSALkLTt+dFDoOYNyk4DlHWCiJIILe+4GVp1bAsOBQW3abEuXR7NtDvTnorGZtQEIZ2fy1nUU5SsSwBUMRdNPBd1f/nyK1g5/V1qWzUbNICnXhsJB3Znw4wRkfdoXd5Brfp14LlRyo8dlGWCNG2TCq3vaANVa7Cd/adOXgkFBLDI5nT1isYG0VXtiXbnLu4DomU2Vs9kVLG5z52DSYOHAjmWS9tefH8GfLN8OZDaV7St66P3QYduyos0lzWClLeVh3pN6kPjlk2hbmN1C4UrzgVGq2ynC3qg20ZGfQmkagQhzhfmLOqPpISpigPRWPCj6e8BuX2KtpHypN+uWEZ9dQASEKS/MwKuurb0jY8l/TE6QcjtV/ZkB1StWQ3qOxtAzQa1QYjjmBQj+MLvLuhRufUo+v+MIR4UVQkSHJPkLRwiC4m6OHG4Z/MWmDt2LC0/oHbDGyF/J/25jyYtU6D3MLqSmnoiCCn7c2fPyDuJEhITwF4x+eIlPoFAANxFhdQ4a6Cw0VOMe1zdMv38BZEqNNUJQnxy5y94GaNyuigvPmVoGhw7eFAFqCKb+Ff/R6BFh9aRBUtI6I0gSsr+XB4gue6ZXPscz4YBfsM+f4/kFv9m314cizfIhT7c+YtHY2RVthigIbJfLFoE33y4QsMezpsml2uSz6sLNXeVdlgWCFJUWACyrMn9NUph3INA/KfNOXSHUgWlcpq8QS507slf9JaMEtgWJJRGEEHuSH4eTMtgK1FK40KrO9rCA88+RKMSlDU6QTS+zTYingjgsCCh+5Map22KKMwgoClBiD+evMWZsmB9nsE31VRmvzYa8v4X/vZYNTp6MqMfNGjWiNqU0QnicReB3x/1ZBE1bkQBAy4SBOhia5rOXDkxUseaE4Q44M5fPAMjK93oNZLnFL//9Nnn8Ml/Z1Jo0ImSVeJhb7O9pYxMEPJZVUQG5xjTAaaSNBZQF0fTNPq5eIr+Y0IQ4k9R/uK5gKyqlKSniC8oeubECZg8eCgUezy0qorkSbV2UrWdpRmZIOT8jderDaaRsEQIP2BLUfc2qVB9xowg50mycDGgxH9FCl6L35dOngLbvtughWkY8PowqF6vJpNtIxPEXVQEgUDsP68woN4OZxp9/VeGDMWUIEGS5C5eAaL1PgZfo1LZ/sOPsHjCO1HZCKVMrgvo/yr74R+jEsQf8IOnqEh1PCMZRAD9bE4X/R6iSIbD/B5zghA/CvMWf4oEa+QVKcagQr4q/WfgnUH/Vu1uiwt9dOv9T2jflapY3yXuGZUgHrebqYJMNCnFgIY6nGnq/5crxam4EOQvkqxFglWzq6IvxCxgH4hQBCL2Bu/tI/f3qdkyJr1CtbXk8r6NSJCAPwBud2xXzhGG4bZUV+wK+f6VqLgRhPTvzl3yNRYtHdR8YC/YQoBBxIUg4b8/A9S+/bXkfeesMRiRIB6PG/w++vpjrBgBxm/aU9NfZtaPQjGuBDlPksUbsGhV9ZohEXtAxEUgwJUDyHdfmwy5O3KigOxv1XAV22mMa0EQ1ltum93SAnq9UHrJKCzLUMhwYRENJiVlMYaJjlQX24WQrJ2W0Is7QYIk2bvkRwyWVtHGQwhBiEEIEq5t+uZHWDJ1frRdQd1G9aDvK+yD8wsOaEGQXzdsgoVT6O9QvP3eO6Hzw6WfF4/pviuM37OnpveNOllRGNAFQYj/RXmLN4NgZbopF4EMInaDBGTRqnQ0yOLWO+lj4ehB9rv1SA/kPy35jxtt275pG8x5i/6exbad2sN9T4QuvMb6KXn/U/+CNnfdEjYkjM8vDGI5BguDCM21p6QproAYbR7C6euGIMRBT/6SrTKyNKUJlowxCDkQBBSrrf/4S/h0nuLaYVfYrV63Bgx4g+0incuNnTtzDl57ln4V/pFBj4OzzU0hYz557CSMGRC+lGo4oCJtl4nV2wMh+NCW4npAcUI1FNQVQYKfW3lLyMWgDSPFHBxngBvILBVtKzhzDqaOnAjHjxyjVQ3KPzygD6S2a86kG0ppQvrY4PXKNO3lqaMhuXL4+n0TXGPg9wNHFJu8rnZ1GDQm/PUOMTvzgWCNrVDsgdoMdSt2XkNB3REkSJL8JdkYWW4IFTeZrhXADSIujgqWfXvyYfa4GVB4roDKTude3eH2+9Sdnf529Xr4eM6Hiv0g6y5k/aW09tXKdbBmwSrFNkPdwFtSOSabEhH8AB5fN3url9S5iF1x9OEFdUkQ4q5n77JcGcQ6F1yXsAeEMDNTrDjs2rITZo6dplhdabVExQZLCCodrF9fuzr0cT0DjkqlV3/1+/yQNWICHNob+bBYs3YtoNeA8J/7Pl8xeDXax1YCgt0+UbircpNhkR1mAZhRR7cEIfEU5S/dJ4G/hoALQaAYY9BgQUr5//TFRvjxy+/DqpHPj1Yd21xxxzlNP0pkyWfWytnLwl5n1r5LB+jWp4cSU0EZQpLPFq2CjZ9vAF+YdYtbOneA7o+HtyljHDxOS6Z3tWoIwVEMcgd7Sgb9OWetnPrLrq4JQnz07swcZ0mwsN19RgEeIcrhvQfh2OE/4PiRP8Be0QFV/lEVqlStAmRBMFbNV+yDbT9ugaMHjsDRQ79DcqWKcG31alCl2jVwQ9Mbmdz48+hx+PW7TXDmxGk4ffIUVKxcUXFsZLcu2bWrYfMGQLi5onMY2zVVGjpGTOueIMHPrZ2T37EmJCgvNqUxaGYxT1bLyaq5pg3jdvbU9PCvb007j2zcEAQJkmTX5ClWa8ILkUPiEmoggAGDp7AIArLy6XPafmUs35WcmrGOVi+W8oYhSJAku6dMs1qs/WIJkFn70nzNAwn32lOGKZ9mi1MiDEUQgpF7d+aMBIslbsd345SnmHar9VkPhKCXLcVFX34/piic78xwBCFOF+/OnClZLE/EAS9TdEm2spMt7do04Sm7c5h2BQJUdtqQBAmSJDvzA0myxOOyCZVToC9zWs5aIYABNqcrU18Rl+6NYQkSJMmuKQskqzXqCt5GSpiWvsoBPxRpdYwW4wx7avo4Lf3XwrahCfLXm2SxJFniUghCi4TEyybGGMh2ErLnSu2GMYxypLqorz9T2w8We4YnCAnalz3lQ1Gylr45iQUdE+l4Pe6wq+1RwYBgvD3FlR6VjTgqlwmCnCdJ1keiJCm79yyOgOuxa63qWyHA023O9P56jFmpT2WGIH+R5BNRkroqDZ7LAQT8fnC71S/fgwEtdjjT6IsV6ywpZYogf5FkjShJ5y8Z5K1UBLAcCA7KyfhDzYYB1jqcrrvVtBkvW2WOIATI4l1Z6ySr1DFeoBqjX7JL161BZUT0sy2loC1C0V9/pgccyyRBgiTZnfmVZLGwV3TTQ3Y09EGj0j05vqSE5pXrDVTl+jMNw1dsuswShCDgyc78xipZ2itGwySCmpADw5+CFTep0Ei968/0kI4yTZAgSXZnbrBaLKrW3dJD4lh90IQcAH5ZkG5MbjpE1evPWGNUU6/ME4SA5c3O+sEiSXSXB6qJsk5saUQO+P8qJE3+vwqJtjcUxQlDUxAkOCbZk/mTJFpaxgnnuHdLzpSTs+VqNwxyK4cz42e17erFnmkIQgD37c76RbRIoYtJ6SUjGvhR7PVAsQbHZhGG22yprvUauKwbk6YiSJAk2ZlbRMni1E0GNHZEszcHxl0dqemrNXY/7uZNR5Dg51Z25jZJsjSJO/oaO6DVmEOWUc/kZmnLNHZfF+ZNSZDgm2RP1nZRlOivpdVF2iI7odXmQyzjPo5m6fSVsSO7rEsJ0xLk/Jska5ckSfV1mRlGp0j9KnLoSYurmRGg/jZn2nRG1wypZmqCBN8kOVnZoiCFLHNqtIySY7JerxtIBXvVG4KX7CmuMarb1blB0xMk+CbZnZkrWSwXy5zqPGch3SM1rMiAnJTrUb1hGG9PNe6Zjmjw4AT5C73i7Kx8SZJqRQNmvHTJ/e/FGqxxkHgQghm2FNez8Yot3v1ygpTIQHF21j5JkmrEOylK+ydF3bweL5Cz5Jo0BMvsKa7Qt/Ro0qH+jHKCXJaT4j1ZByRRul5/qbrUI7IqXlzs1ey2Jwz4S4cz3fRHBjhBQjDBt2fqIVEU/6FHkpDDTb5iryYr4xfiRQg221Jc6t0QpEcgFfrECRICKIyXWP05f+4TRbGqQhxjIub3+4KV1rWoPPJ3ACjf7kwz9ISFmsngBAmDJt6xpILfcjxXFKVr1ASc1ZbX6w2+OTRupwr8hddVaz5S/UPqGjuulXlOkFKQPbvrzcrlxORdoihW0SoBkezKAbK24dH4rRGcrsJgTaxib/CCbq4/i4RNLH7nBImAcsHerGsTfWi7IIqVY5GQC32Q9QyfV9uxRsl4JFGoXl5n15/FEu9wfXGCKMhC0faJ1a1W6xZBFCspEI9ahMxQkbGGJiviobxDcn09Xn8WNZAqGOAEUQiiZ8eEupI1cZMgiKXfnqnQXiix84NwnwaVRsI7JYLQLEmn159FAaVqqpwgFFB692U1kHzCD0gQHBRqEUUDAX+QGIQgMW06v/4spliE6YwThDILBVuynIlJ6FtBFG2UqleIk+la8ikVc2IAgCgIXZOaDivzB56izREnCAOChdsntkiwJnwliEIFBvXgVnRCCrLBMB4NY/SoIzVtfjz6NlqfnCCMGfPtmtQGSQlrBQElKTURJIaPvDE02julwBEMMMBhsEtsFISlmQgnSBTQ4l2Tbw2I0hpBFMuFM0NmosgYg7wttF0BjxwIAjTC5kx7PbIkl7iAACdIlM+CZ+fEOyVLwipBEBJLmrowtog3KUr4NMHudA2LMlzTqXMmn43CAAADPklEQVSCqJByT3ZmF0kQl8tyIEH7vVJMDs+yO11PMmmaXIkTRKUH4OTW8Y0lDKTSx40qmVTLzAq708Vv32JEkxOEEbhQaqd+HZsiInEZIKirotloTK23O128wn0UCHKCRAFeKNXTW8c1QxgtQwDxPb6LYas91WWaAnkqp/GiOU4QDZA9s+WtFgB4GUJQXQPzSkzutztdNZUIcpnSEeAE0egJObP1P60RFsiYJNYnE8/anS5Vt8JoBJEhzHKCaJims1vGtQWECEmu1bCbS0zb/HYrat43Pkv0sQoyhv1wgmgM9rltb7XHMiYk0fzQld8fSK7U/MUzGodkKvOcIDFI97nf3r4Ng0xIotl5Ep9Hvr5y64xDMQjHVF1wgsQo3QXbxneU5eA6ierjg7J8w1OM0hO2G06QGGag4Le37pYRLAOMmXYBh3QV4fb2lPTvYhiGqbriBIlxugu3vd1FluVlGCDsBkfFLsnyvfZmGasUy3NBagQ4Qaghi17h7K//6Q5CcArYwmoNI9zHkWKeezpYcYpWjxMkWgQZ9c/+Nv5+gOCYRKA1gTEe7EhNn0Srx+XpEeAEocdMNY3Tv771gCDgGQCguBAExvIoR2rGSNWc4IZKRYATJM4PyKkt45wiEl4FwPdFcgUB9LM5Xe9GkuO/q4cAJ4h6WEZl6cyW8YMFhJ7GgC+/N5Gsim8SEB5dISX9s6g64crUCHCCUEOmrcKpLWNqIiS2QgDVEBZ/8pw+t+3q20YWaNsrtx4OAU4Q/mxwBEpBgBOEPx4cAU4Q/gxwBNgQ4G8QNty4lkkQ4AQxSaJ5mGwIcIKw4ca1TIIAJ4hJEs3DZEOAE4QNN65lEgQ4QUySaB4mGwKcIGy4cS2TIMAJYpJE8zDZEOAEYcONa5kEAU4QkySah8mGACcIG25cyyQIcIKYJNE8TDYEOEHYcONaJkGAE8QkieZhsiHACcKGG9cyCQKcICZJNA+TDQFOEDbcuJZJEOAEMUmieZhsCHCCsOHGtUyCACeISRLNw2RDgBOEDTeuZRIEOEFMkmgeJhsCnCBsuHEtkyDACWKSRPMw2RDgBGHDjWuZBAFOEJMkmofJhgAnCBtuXMskCPwfnQ2WfYcXwyUAAAAASUVORK5CYII=","version":"1.0.0"};

    var notiflixNotifyAio = {exports: {}};

    /*
    * Notiflix Notify AIO (https://notiflix.github.io)
    * Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
    * Version: 3.2.7
    * Author: Furkan (https://github.com/furcan)
    * Copyright 2019 - 2024 Notiflix, MIT License (https://opensource.org/licenses/MIT)
    */

    (function (module) {
    	/* global define */
    	(function (root, factory) {
    	  {
    	    module.exports = factory(root);
    	  }
    	})(typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof window !== 'undefined' ? window : commonjsGlobal, function (window) {

    	  // COMMON: SSR check: begin
    	  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    	    return false;
    	  }
    	  // COMMON: SSR check: end

    	  // COMMON: Variables: begin
    	  var notiflixNamespace = 'Notiflix';
    	  var notiflixConsoleDocs = '\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation';
    	  var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
    	  // COMMON: Variables: end

    	  // NOTIFY: Default Settings: begin
    	  var typesNotify = {
    	    Success: 'Success',
    	    Failure: 'Failure',
    	    Warning: 'Warning',
    	    Info: 'Info',
    	  };
    	  var newNotifySettings;
    	  var notifySettings = {
    	    wrapID: 'NotiflixNotifyWrap', // can not customizable
    	    overlayID: 'NotiflixNotifyOverlay', // can not customizable
    	    width: '280px',
    	    position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
    	    distance: '10px',
    	    opacity: 1,
    	    borderRadius: '5px',
    	    rtl: false,
    	    timeout: 3000,
    	    messageMaxLength: 110,
    	    backOverlay: false,
    	    backOverlayColor: 'rgba(0,0,0,0.5)',
    	    plainText: true,
    	    showOnlyTheLastOne: false,
    	    clickToClose: false,
    	    pauseOnHover: true,

    	    ID: 'NotiflixNotify',
    	    className: 'notiflix-notify',
    	    zindex: 4001,
    	    fontFamily: 'Quicksand',
    	    fontSize: '13px',
    	    cssAnimation: true,
    	    cssAnimationDuration: 400,
    	    cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
    	    closeButton: false,
    	    useIcon: true,
    	    useFontAwesome: false,
    	    fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
    	    fontAwesomeIconSize: '34px',

    	    success: {
    	      background: '#32c682',
    	      textColor: '#fff',
    	      childClassName: 'notiflix-notify-success',
    	      notiflixIconColor: 'rgba(0,0,0,0.2)',
    	      fontAwesomeClassName: 'fas fa-check-circle',
    	      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    	      backOverlayColor: 'rgba(50,198,130,0.2)',
    	    },

    	    failure: {
    	      background: '#ff5549',
    	      textColor: '#fff',
    	      childClassName: 'notiflix-notify-failure',
    	      notiflixIconColor: 'rgba(0,0,0,0.2)',
    	      fontAwesomeClassName: 'fas fa-times-circle',
    	      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    	      backOverlayColor: 'rgba(255,85,73,0.2)',
    	    },

    	    warning: {
    	      background: '#eebf31',
    	      textColor: '#fff',
    	      childClassName: 'notiflix-notify-warning',
    	      notiflixIconColor: 'rgba(0,0,0,0.2)',
    	      fontAwesomeClassName: 'fas fa-exclamation-circle',
    	      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    	      backOverlayColor: 'rgba(238,191,49,0.2)',
    	    },

    	    info: {
    	      background: '#26c0d3',
    	      textColor: '#fff',
    	      childClassName: 'notiflix-notify-info',
    	      notiflixIconColor: 'rgba(0,0,0,0.2)',
    	      fontAwesomeClassName: 'fas fa-info-circle',
    	      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    	      backOverlayColor: 'rgba(38,192,211,0.2)',
    	    },
    	  };
    	  // NOTIFY: Default Settings: end

    	  // COMMON: Console Error: begin
    	  var commonConsoleError = function (message) {
    	    return console.error('%c ' + notiflixNamespace + ' Error ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
    	  };
    	  // COMMON: Console Error: end

    	  // COMMON: Check Head or Body: begin
    	  var commonCheckHeadOrBody = function (element) {
    	    if (!element) { element = 'head'; }
    	    if (window.document[element] === null) {
    	      commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
    	      return false;
    	    }
    	    return true;
    	  };
    	  // COMMON: Check Head or Body: end

    	  // COMMON: Set Internal CSS Codes: begin
    	  var commonSetInternalCSSCodes = function (getInternalCSSCodes, styleElementId) {
    	    // check doc head
    	    if (!commonCheckHeadOrBody('head')) { return false; }

    	    // internal css
    	    if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
    	      var internalCSS = window.document.createElement('style');
    	      internalCSS.id = styleElementId;
    	      internalCSS.innerHTML = getInternalCSSCodes();
    	      window.document.head.appendChild(internalCSS);
    	    }
    	  };
    	  // COMMON: Set Internal CSS Codes: end

    	  // COMMON: Extend Options: begin
    	  var commonExtendOptions = function () {
    	    // variables
    	    var extended = {};
    	    var deep = false;
    	    var i = 0;
    	    // check if a deep merge
    	    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    	      deep = arguments[0];
    	      i++;
    	    }
    	    // merge the object into the extended object
    	    var merge = function (obj) {
    	      for (var prop in obj) {
    	        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
    	          // if property is an object, merge properties
    	          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
    	            extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
    	          } else {
    	            extended[prop] = obj[prop];
    	          }
    	        }
    	      }
    	    };
    	    // loop through each object and conduct a merge
    	    for (; i < arguments.length; i++) {
    	      merge(arguments[i]);
    	    }
    	    return extended;
    	  };
    	  // COMMON: Extend Options: end

    	  // COMMON: Get Plaintext: begin
    	  var commonGetPlaintext = function (html) {
    	    var htmlPool = window.document.createElement('div');
    	    htmlPool.innerHTML = html;
    	    return htmlPool.textContent || htmlPool.innerText || '';
    	  };
    	  // COMMON: Get Plaintext: end

    	  // NOTIFY: Get Internal CSS Codes: begin
    	  var notifyGetInternalCSSCodes = function () {
    	    var notifyCSS = '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
    	    return notifyCSS || null;
    	  };
    	  // NOTIFY: Get Internal CSS Codes: end

    	  // NOTIFY: Create: begin
    	  var notifyCreateCounter = 0;
    	  var notifyCreate = function (notifyType, message, callbackOrOptions, options) {
    	    // check doc body
    	    if (!commonCheckHeadOrBody('body')) { return false; }

    	    // if not initialized pretend like init
    	    if (!newNotifySettings) {
    	      Notiflix.Notify.init({});
    	    }

    	    // create a backup for new settings
    	    var newNotifySettingsBackup = commonExtendOptions(true, newNotifySettings, {});

    	    // check callbackOrOptions and options: begin
    	    if ((typeof callbackOrOptions === 'object' && !Array.isArray(callbackOrOptions)) || (typeof options === 'object' && !Array.isArray(options))) {
    	      // new options
    	      var newOptions = {};
    	      if (typeof callbackOrOptions === 'object') {
    	        newOptions = callbackOrOptions;
    	      } else if (typeof options === 'object') {
    	        newOptions = options;
    	      }

    	      // extend new settings with the new options
    	      newNotifySettings = commonExtendOptions(true, newNotifySettings, newOptions);
    	    }
    	    // check callbackOrOptions and options: end

    	    // notify type
    	    var theType = newNotifySettings[notifyType.toLocaleLowerCase('en')];

    	    // notify counter
    	    notifyCreateCounter++;

    	    // check the message: begin
    	    if (typeof message !== 'string') {
    	      message = 'Notiflix ' + notifyType;
    	    }
    	    // check the message: end

    	    // if plainText is true => HTML tags not allowed: begin
    	    if (newNotifySettings.plainText) {
    	      message = commonGetPlaintext(message); // message plain text
    	    }
    	    // if plainText is true => HTML tags not allowed: end

    	    // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: begin
    	    if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
    	      // extend settings for error massege
    	      newNotifySettings = commonExtendOptions(true, newNotifySettings, { closeButton: true, messageMaxLength: 150 });
    	      // error message
    	      message = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.';
    	    }
    	    // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: end

    	    // check message max length: begin
    	    if (message.length > newNotifySettings.messageMaxLength) {
    	      message = message.substring(0, newNotifySettings.messageMaxLength) + '...';
    	    }
    	    // check message max length: end

    	    // font awesome icon style: begin
    	    if (newNotifySettings.fontAwesomeIconStyle === 'shadow') {
    	      theType.fontAwesomeIconColor = theType.background;
    	    }
    	    // font awesome icon style: end

    	    // if cssAnimaion is false => duration: begin
    	    if (!newNotifySettings.cssAnimation) {
    	      newNotifySettings.cssAnimationDuration = 0;
    	    }
    	    // if cssAnimaion is false => duration: end

    	    // notify wrap: begin
    	    var ntflxNotifyWrap = window.document.getElementById(notifySettings.wrapID) || window.document.createElement('div');
    	    ntflxNotifyWrap.id = notifySettings.wrapID;
    	    ntflxNotifyWrap.style.width = newNotifySettings.width;
    	    ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
    	    ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;

    	    // wrap position: begin
    	    if (newNotifySettings.position === 'center-center') {
    	      ntflxNotifyWrap.style.left = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.top = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.right = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.margin = 'auto';
    	      ntflxNotifyWrap.classList.add('nx-flex-center-center');
    	      ntflxNotifyWrap.style.maxHeight = 'calc((100vh - ' + newNotifySettings.distance + ') - ' + newNotifySettings.distance + ')';
    	      ntflxNotifyWrap.style.display = 'flex';
    	      ntflxNotifyWrap.style.flexWrap = 'wrap';
    	      ntflxNotifyWrap.style.flexDirection = 'column';
    	      ntflxNotifyWrap.style.justifyContent = 'center';
    	      ntflxNotifyWrap.style.alignItems = 'center';
    	      ntflxNotifyWrap.style.pointerEvents = 'none';
    	    } else if (newNotifySettings.position === 'center-top') {
    	      ntflxNotifyWrap.style.left = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.right = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.top = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.bottom = 'auto';
    	      ntflxNotifyWrap.style.margin = 'auto';
    	    } else if (newNotifySettings.position === 'center-bottom') {
    	      ntflxNotifyWrap.style.left = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.right = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.top = 'auto';
    	      ntflxNotifyWrap.style.margin = 'auto';
    	    } else if (newNotifySettings.position === 'right-bottom') {
    	      ntflxNotifyWrap.style.right = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.top = 'auto';
    	      ntflxNotifyWrap.style.left = 'auto';
    	    } else if (newNotifySettings.position === 'left-top') {
    	      ntflxNotifyWrap.style.left = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.top = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.right = 'auto';
    	      ntflxNotifyWrap.style.bottom = 'auto';
    	    } else if (newNotifySettings.position === 'left-bottom') {
    	      ntflxNotifyWrap.style.left = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.top = 'auto';
    	      ntflxNotifyWrap.style.right = 'auto';
    	    } else { // 'right-top' or else
    	      ntflxNotifyWrap.style.right = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.top = newNotifySettings.distance;
    	      ntflxNotifyWrap.style.left = 'auto';
    	      ntflxNotifyWrap.style.bottom = 'auto';
    	    }
    	    // wrap position: end

    	    // if background overlay is true: begin
    	    if (newNotifySettings.backOverlay) {
    	      var ntflxNotifyOverlay = window.document.getElementById(notifySettings.overlayID) || window.document.createElement('div');
    	      ntflxNotifyOverlay.id = notifySettings.overlayID;
    	      ntflxNotifyOverlay.style.width = '100%';
    	      ntflxNotifyOverlay.style.height = '100%';
    	      ntflxNotifyOverlay.style.position = 'fixed';
    	      ntflxNotifyOverlay.style.zIndex = newNotifySettings.zindex - 1;
    	      ntflxNotifyOverlay.style.left = 0;
    	      ntflxNotifyOverlay.style.top = 0;
    	      ntflxNotifyOverlay.style.right = 0;
    	      ntflxNotifyOverlay.style.bottom = 0;
    	      ntflxNotifyOverlay.style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
    	      ntflxNotifyOverlay.className = newNotifySettings.cssAnimation ? 'nx-with-animation' : '';
    	      ntflxNotifyOverlay.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration + 'ms' : '';

    	      if (!window.document.getElementById(notifySettings.overlayID)) {
    	        window.document.body.appendChild(ntflxNotifyOverlay);
    	      }
    	    }
    	    // if background overlay is true: end

    	    if (!window.document.getElementById(notifySettings.wrapID)) {
    	      window.document.body.appendChild(ntflxNotifyWrap);
    	    }
    	    // notify wrap: end

    	    // notify content: begin
    	    var ntflxNotify = window.document.createElement('div');
    	    ntflxNotify.id = newNotifySettings.ID + '-' + notifyCreateCounter;
    	    ntflxNotify.className = newNotifySettings.className + ' ' + theType.childClassName + ' ' + (newNotifySettings.cssAnimation ? 'nx-with-animation' : '') + ' ' + (newNotifySettings.useIcon ? 'nx-with-icon' : '') + ' nx-' + newNotifySettings.cssAnimationStyle + ' ' + (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function' ? 'nx-with-close-button' : '') + ' ' + (typeof callbackOrOptions === 'function' ? 'nx-with-callback' : '') + ' ' + (newNotifySettings.clickToClose ? 'nx-notify-click-to-close' : '');
    	    ntflxNotify.style.fontSize = newNotifySettings.fontSize;
    	    ntflxNotify.style.color = theType.textColor;
    	    ntflxNotify.style.background = theType.background;
    	    ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;
    	    ntflxNotify.style.pointerEvents = 'all';

    	    // rtl: begin
    	    if (newNotifySettings.rtl) {
    	      ntflxNotify.setAttribute('dir', 'rtl');
    	      ntflxNotify.classList.add('nx-rtl-on');
    	    }
    	    // rtl: end

    	    // font-family: begin
    	    ntflxNotify.style.fontFamily = '"' + newNotifySettings.fontFamily + '", ' + defaultFontFamily;
    	    // font-family: end

    	    // use css animation: begin
    	    if (newNotifySettings.cssAnimation) {
    	      ntflxNotify.style.animationDuration = newNotifySettings.cssAnimationDuration + 'ms';
    	    }
    	    // use css animation: end

    	    // close button element: begin
    	    var closeButtonHTML = '';
    	    if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
    	      closeButtonHTML = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + theType.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
    	    }
    	    // close buttpon element: end

    	    // use icon: begin
    	    if (newNotifySettings.useIcon) {
    	      // use font awesome
    	      if (newNotifySettings.useFontAwesome) {
    	        ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + '; font-size:' + newNotifySettings.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + theType.fontAwesomeClassName + ' ' + (newNotifySettings.fontAwesomeIconStyle === 'shadow' ? 'nx-message-icon-fa-shadow' : 'nx-message-icon-fa-basic') + '"></i><span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
    	      }
    	      // use notiflix icon
    	      else {
    	        var svgIcon = '';
    	        if (notifyType === typesNotify.Success) {  // success
    	          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';
    	        } else if (notifyType === typesNotify.Failure) { // failure
    	          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';
    	        } else if (notifyType === typesNotify.Warning) { // warning
    	          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';
    	        } else if (notifyType === typesNotify.Info) { // info
    	          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';
    	        }
    	        ntflxNotify.innerHTML = svgIcon + '<span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
    	      }
    	    }
    	    // without icon
    	    else {
    	      ntflxNotify.innerHTML = '<span class="nx-message">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
    	    }
    	    // use icon: end
    	    // notify content: end

    	    // notify append or prepend: begin
    	    if (newNotifySettings.position === 'left-bottom' || newNotifySettings.position === 'right-bottom') { // the new one will be first
    	      var notifyWrap = window.document.getElementById(notifySettings.wrapID);
    	      notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);
    	    } else {
    	      window.document.getElementById(notifySettings.wrapID).appendChild(ntflxNotify);
    	    }
    	    // notify append or prepend: end

    	    // remove by timeout or click: begin
    	    var eachNotifyElement = window.document.getElementById(ntflxNotify.id);
    	    if (eachNotifyElement) {
    	      // timeout variables
    	      var timeoutHide;
    	      var timeoutRemove;

    	      // hide notify elm and hide overlay: begin
    	      var hideNotifyElementsAndOverlay = function () {
    	        eachNotifyElement.classList.add('nx-remove');
    	        var removeOverlay = window.document.getElementById(notifySettings.overlayID);
    	        if (removeOverlay && ntflxNotifyWrap.childElementCount <= 0) {
    	          removeOverlay.classList.add('nx-remove');
    	        }
    	        clearTimeout(timeoutHide);
    	      };
    	      // hide notify elm and hide overlay: end

    	      // remove notify elm and wrapper: begin
    	      var removeNotifyElmentsAndWrapper = function () {
    	        if (eachNotifyElement && eachNotifyElement.parentNode !== null) {
    	          eachNotifyElement.parentNode.removeChild(eachNotifyElement);
    	        }
    	        if (ntflxNotifyWrap.childElementCount <= 0 && ntflxNotifyWrap.parentNode !== null) { // if childs count === 0 remove wrap
    	          ntflxNotifyWrap.parentNode.removeChild(ntflxNotifyWrap);
    	          var removeOverlay = window.document.getElementById(notifySettings.overlayID);
    	          if (removeOverlay && removeOverlay.parentNode !== null) {
    	            removeOverlay.parentNode.removeChild(removeOverlay);
    	          }
    	        }
    	        clearTimeout(timeoutRemove);
    	      };
    	      // remove notify elm and wrapper: end

    	      // if has close button and callbackOrOptions is not a function: begin
    	      if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
    	        var closeButtonElm = window.document.getElementById(ntflxNotify.id).querySelector('span.nx-close-button');
    	        closeButtonElm.addEventListener('click', function () {
    	          hideNotifyElementsAndOverlay();
    	          var clickToCloseTimeout = setTimeout(function () {
    	            removeNotifyElmentsAndWrapper();
    	            clearTimeout(clickToCloseTimeout);
    	          }, newNotifySettings.cssAnimationDuration);
    	        });
    	      }
    	      // if has close button and callbackOrOptions is not a function: end

    	      // if callbackOrOptions or click to close: begin
    	      if (typeof callbackOrOptions === 'function' || newNotifySettings.clickToClose) {
    	        eachNotifyElement.addEventListener('click', function () {
    	          if (typeof callbackOrOptions === 'function') {
    	            callbackOrOptions();
    	          }
    	          hideNotifyElementsAndOverlay();
    	          var callbackTimeout = setTimeout(function () {
    	            removeNotifyElmentsAndWrapper();
    	            clearTimeout(callbackTimeout);
    	          }, newNotifySettings.cssAnimationDuration);
    	        });
    	      }
    	      // if callbackOrOptions or click to close: end

    	      // else auto remove: begin
    	      if (!newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
    	        // auto remove: begin
    	        var autoRemove = function () {
    	          timeoutHide = setTimeout(function () {
    	            hideNotifyElementsAndOverlay();
    	          }, newNotifySettings.timeout);
    	          timeoutRemove = setTimeout(function () {
    	            removeNotifyElmentsAndWrapper();
    	          }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
    	        };
    	        autoRemove();
    	        // auto remove: end

    	        // pause auto remove: begin
    	        if (newNotifySettings.pauseOnHover) {
    	          eachNotifyElement.addEventListener('mouseenter', function () {
    	            eachNotifyElement.classList.add('nx-paused');
    	            clearTimeout(timeoutHide);
    	            clearTimeout(timeoutRemove);
    	          });
    	          eachNotifyElement.addEventListener('mouseleave', function () {
    	            eachNotifyElement.classList.remove('nx-paused');
    	            autoRemove();
    	          });
    	        }
    	        // pause auto remove: end
    	      }
    	      // else auto remove: end
    	    }
    	    // remove by timeout or click: end

    	    // notify - show only the last one: begin
    	    if (newNotifySettings.showOnlyTheLastOne && notifyCreateCounter > 0) {
    	      var allNotifyElmNotTheLastOne = window.document.querySelectorAll('[id^=' + newNotifySettings.ID + '-]:not([id=' + newNotifySettings.ID + '-' + notifyCreateCounter + '])');
    	      for (var i = 0; i < allNotifyElmNotTheLastOne.length; i++) {
    	        var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
    	        if (eachNotifyElmNotLastOne.parentNode !== null) {
    	          eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
    	        }
    	      }
    	    }
    	    // notify - show only the last one: end

    	    // extend new settings with the backup settings
    	    newNotifySettings = commonExtendOptions(true, newNotifySettings, newNotifySettingsBackup);

    	  };
    	  // NOTIFY: Create: end

    	  var Notiflix = {
    	    Notify: {
    	      // Init
    	      init: function (userNotifyOptions) {
    	        // extend options
    	        newNotifySettings = commonExtendOptions(true, notifySettings, userNotifyOptions);
    	        // internal css if exist
    	        commonSetInternalCSSCodes(notifyGetInternalCSSCodes, 'NotiflixNotifyInternalCSS');
    	      },
    	      // Merge First Init
    	      merge: function (userNotifyExtendOptions) {
    	        // if initialized already
    	        if (newNotifySettings) {
    	          newNotifySettings = commonExtendOptions(true, newNotifySettings, userNotifyExtendOptions);
    	        }
    	        // initialize first
    	        else {
    	          commonConsoleError('You have to initialize the Notify module before call Merge function.');
    	          return false;
    	        }
    	      },
    	      // Success
    	      success: function (message, callbackOrOptions, options) {
    	        notifyCreate(typesNotify.Success, message, callbackOrOptions, options);
    	      },
    	      // Failure
    	      failure: function (message, callbackOrOptions, options) {
    	        notifyCreate(typesNotify.Failure, message, callbackOrOptions, options);
    	      },
    	      // Warning
    	      warning: function (message, callbackOrOptions, options) {
    	        notifyCreate(typesNotify.Warning, message, callbackOrOptions, options);
    	      },
    	      // Info
    	      info: function (message, callbackOrOptions, options) {
    	        notifyCreate(typesNotify.Info, message, callbackOrOptions, options);
    	      },
    	    },
    	  };

    	  if (typeof window.Notiflix === 'object') {
    	    return commonExtendOptions(true, window.Notiflix, { Notify: Notiflix.Notify });
    	  } else {
    	    return { Notify: Notiflix.Notify };
    	  }

    	}); 
    } (notiflixNotifyAio));

    var notiflixNotifyAioExports = notiflixNotifyAio.exports;

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z$2 = "/*!\n* Notiflix (https://notiflix.github.io)\n* Version: 3.2.7\n* Author: Furkan (https://github.com/furcan)\n* Copyright 2019 - 2024 Notiflix, MIT License (https://opensource.org/licenses/MIT)\n*/[id^=NotiflixNotifyWrap]{background:transparent;box-sizing:border-box;max-width:96%;opacity:1;pointer-events:none;position:fixed;right:10px;top:10px;width:280px;z-index:4001}[id^=NotiflixNotifyWrap].nx-flex-center-center{display:flex;flex-wrap:wrap;max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;flex-direction:column;justify-content:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{height:0;width:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb,[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{box-sizing:border-box}[id^=NotiflixNotifyOverlay]{transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{display:inline-flex;flex-wrap:wrap;font-family:Quicksand,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;align-items:center;background:#1e1e1e;border-radius:5px;color:#fff;font-size:14px;line-height:1.4;margin:0 0 10px;padding:10px 12px;position:relative}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{min-height:56px;padding:8px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-family:inherit!important;font-weight:400;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{bottom:0;color:inherit;cursor:pointer;height:20px;margin:auto;position:absolute;right:8px;top:0;transition:all .2s ease-in-out;width:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{height:16px;position:absolute;right:2px;top:2px;width:16px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{border-radius:inherit;bottom:0;font-size:30px;height:40px;left:8px;line-height:40px;margin:auto;position:absolute;text-align:center;top:0;width:40px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{background:rgba(0,0,0,.15);box-shadow:inset 0 0 34px rgba(0,0,0,.2);color:inherit;text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{box-sizing:border-box;float:left;margin:0 0 0 40px;padding:0 0 0 10px;position:relative;width:calc(100% - 40px)}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{margin:0 40px 0 0;padding:0 10px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{left:8px;right:auto}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{animation:notify-animation-fade .3s ease-in-out 0s normal}@keyframes notify-animation-fade{0%{opacity:0}to{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{animation:notify-animation-zoom .3s ease-in-out 0s normal}@keyframes notify-animation-zoom{0%{transform:scale(0)}50%{transform:scale(1.05)}to{transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{animation:notify-animation-from-right .3s ease-in-out 0s normal}@keyframes notify-animation-from-right{0%{opacity:0;right:-300px}50%{opacity:1;right:8px}to{opacity:1;right:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{animation:notify-animation-from-left .3s ease-in-out 0s normal}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}to{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{animation:notify-animation-from-top .3s ease-in-out 0s normal}@keyframes notify-animation-from-top{0%{opacity:0;top:-50px}50%{opacity:1;top:8px}to{opacity:1;top:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}to{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{animation:notify-remove-fade .3s ease-in-out 0s normal;opacity:0}@keyframes notify-remove-fade{0%{opacity:1}to{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{animation:notify-remove-zoom .3s ease-in-out 0s normal;transform:scale(0)}@keyframes notify-remove-zoom{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{animation:notify-remove-to-top .3s ease-in-out 0s normal;opacity:0}@keyframes notify-remove-to-top{0%{opacity:1;top:0}50%{opacity:1;top:8px}to{opacity:0;top:-50px}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{animation:notify-remove-to-right .3s ease-in-out 0s normal;opacity:0}@keyframes notify-remove-to-right{0%{opacity:1;right:0}50%{opacity:1;right:8px}to{opacity:0;right:-300px}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{animation:notify-remove-to-bottom .3s ease-in-out 0s normal;opacity:0}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}to{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{animation:notify-remove-to-left .3s ease-in-out 0s normal;opacity:0}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}to{left:-300px;opacity:0}}[id^=NotiflixReportWrap]{background:transparent;border-radius:25px;color:#1e1e1e;display:flex;flex-wrap:wrap;font-family:Quicksand,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;height:100%;left:0;padding:10px;position:fixed;top:0;width:100%;z-index:4002;flex-direction:column;align-items:center;justify-content:center}[id^=NotiflixReportWrap],[id^=NotiflixReportWrap] *{box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*=-overlay]{background:hsla(0,0%,100%,.5);height:100%;left:0;position:fixed;top:0;width:100%;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*=-content]{background:#f8f8f8;border:1px solid rgba(0,0,0,.03);border-radius:inherit;filter:drop-shadow(0 0 5px rgba(0,0,0,.05));max-height:96vh;max-width:100%;overflow-x:hidden;overflow-y:auto;padding:10px;position:relative;width:320px;z-index:1}[id^=NotiflixReportWrap]>div[class*=-content]::-webkit-scrollbar{height:0;width:0}[id^=NotiflixReportWrap]>div[class*=-content]::-webkit-scrollbar-thumb,[id^=NotiflixReportWrap]>div[class*=-content]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*=-content]>div[class$=-icon]{display:block;height:110px;margin:6px auto 12px;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:110px}[id^=NotiflixReportWrap]>div[class*=-content]>div[class$=-icon] svg{height:auto;max-width:100%;min-width:100%}[id^=NotiflixReportWrap]>*>h5{border-bottom:1px solid rgba(0,0,0,.1);font-size:16px;font-weight:500;padding:0 0 10px;text-align:center}[id^=NotiflixReportWrap]>*>h5,[id^=NotiflixReportWrap]>*>p{float:left;font-family:inherit!important;line-height:1.4;margin:0 0 10px;width:100%;word-break:break-all;word-break:break-word}[id^=NotiflixReportWrap]>*>p{font-size:13px;font-weight:400;padding:0 10px}[id^=NotiflixReportWrap] a#NXReportButton{background:#32c682;border-radius:inherit!important;color:#fff;cursor:pointer;float:right;font-family:inherit!important;font-size:14px;font-weight:500;line-height:1.4;padding:7px 17px;transition:all .25s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;word-break:break-all;word-break:break-word}[id^=NotiflixReportWrap] a#NXReportButton:hover{box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*=-overlay].nx-with-animation{animation:report-overlay-animation .3s ease-in-out 0s normal}@keyframes report-overlay-animation{0%{opacity:0}to{opacity:1}}[id^=NotiflixReportWrap]>div[class*=-content].nx-with-animation.nx-fade{animation:report-animation-fade .3s ease-in-out 0s normal}@keyframes report-animation-fade{0%{opacity:0}to{opacity:1}}[id^=NotiflixReportWrap]>div[class*=-content].nx-with-animation.nx-zoom{animation:report-animation-zoom .3s ease-in-out 0s normal}@keyframes report-animation-zoom{0%{opacity:0;transform:scale(.5)}50%{opacity:1;transform:scale(1.05)}to{opacity:1;transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*=-overlay].nx-with-animation{animation:report-overlay-animation-remove .3s ease-in-out 0s normal;opacity:0}@keyframes report-overlay-animation-remove{0%{opacity:1}to{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*=-content].nx-with-animation.nx-fade{animation:report-animation-fade-remove .3s ease-in-out 0s normal;opacity:0}@keyframes report-animation-fade-remove{0%{opacity:1}to{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*=-content].nx-with-animation.nx-zoom{animation:report-animation-zoom-remove .3s ease-in-out 0s normal;opacity:0}@keyframes report-animation-zoom-remove{0%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.05)}to{opacity:0;transform:scale(0)}}[id^=NotiflixConfirmWrap]{background:transparent;box-sizing:border-box;display:flex;flex-wrap:wrap;font-family:Quicksand,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;height:100%;left:0;padding:10px;position:fixed;top:0;width:100%;z-index:4003;flex-direction:column;align-items:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom,[id^=NotiflixConfirmWrap].nx-position-left-center,[id^=NotiflixConfirmWrap].nx-position-left-top{align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-bottom,[id^=NotiflixConfirmWrap].nx-position-right-center,[id^=NotiflixConfirmWrap].nx-position-right-top{align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{justify-content:flex-end}[id^=NotiflixConfirmWrap] *{box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*=-overlay]{background:hsla(0,0%,100%,.5);height:100%;left:0;position:fixed;top:0;width:100%;z-index:0}[id^=NotiflixConfirmWrap]>div[class*=-overlay].nx-with-animation{animation:confirm-overlay-animation .3s ease-in-out 0s normal}@keyframes confirm-overlay-animation{0%{opacity:0}to{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*=-overlay].nx-with-animation{animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;opacity:0}@keyframes confirm-overlay-animation-remove{0%{opacity:1}to{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*=-content]{background:#f8f8f8;border-radius:25px;color:#1e1e1e;filter:drop-shadow(0 0 5px rgba(0,0,0,.05));margin:0;max-height:96vh;max-width:100%;overflow-x:hidden;overflow-y:auto;padding:10px;position:relative;text-align:center;width:300px;z-index:1}[id^=NotiflixConfirmWrap]>div[class*=-content]::-webkit-scrollbar{height:0;width:0}[id^=NotiflixConfirmWrap]>div[class*=-content]::-webkit-scrollbar-thumb,[id^=NotiflixConfirmWrap]>div[class*=-content]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-head]{float:left;text-align:inherit;width:100%}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-head]>h5{border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;float:left;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0;padding:0 0 10px;text-align:inherit;width:100%}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-head]>div{color:inherit;float:left;font-family:inherit!important;font-size:14px;font-weight:400;line-height:1.4;margin:15px 0 20px;padding:0 10px;text-align:inherit;width:100%}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-head]>div>div{float:left;font-family:inherit!important;margin:15px 0 0;padding:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-head]>div>div>input{border:1px solid rgba(0,0,0,.1);border-radius:25px;float:left;font-family:inherit!important;font-size:14px;font-weight:400;height:40px;line-height:1;margin:0;padding:0 15px;text-align:left;transition:all .25s ease-in-out;width:100%}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=-content]>div[class*=-head]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-head]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-head]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-head]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-head]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-buttons]{border-radius:inherit;float:left;text-align:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-buttons]>a{border-radius:inherit!important;color:#f8f8f8;cursor:pointer;float:left;font-family:inherit!important;font-size:15px;font-weight:500;line-height:1.4;padding:9px 5px;text-align:inherit;transition:all .25s ease-in-out;width:48%}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-buttons]>a.nx-confirm-button-ok{background:#32c682;margin:0 2% 0 0}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-buttons]>a.nx-confirm-button-cancel{background:#a9a9a9;margin:0 0 0 2%}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-buttons]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*=-content]>div[class*=-buttons]>a:hover{box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=-content]>div[class*=-buttons],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=-content]>div[class*=-buttons]>a{transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*=-content]{animation:confirm-animation-fade .3s ease-in-out 0s normal}@keyframes confirm-animation-fade{0%{opacity:0}to{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*=-content]{animation:confirm-animation-zoom .3s ease-in-out 0s normal}@keyframes confirm-animation-zoom{0%{opacity:0;transform:scale(.5)}50%{opacity:1;transform:scale(1.05)}to{opacity:1;transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*=-content]{animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;opacity:0}@keyframes confirm-animation-fade-remove{0%{opacity:1}to{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*=-content]{animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;opacity:0}@keyframes confirm-animation-zoom-remove{0%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.05)}to{opacity:0;transform:scale(0)}}[id^=NotiflixLoadingWrap]{bottom:0;display:flex;flex-wrap:wrap;height:100%;left:0;margin:auto;position:fixed;right:0;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;z-index:4000;flex-direction:column;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;background:rgba(0,0,0,.8);font-family:Quicksand,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;justify-content:center;text-align:center}[id^=NotiflixLoadingWrap],[id^=NotiflixLoadingWrap] *{box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*=-icon]{height:60px;margin:0 auto;position:relative;transition:top .2s ease-in-out;width:60px}[id^=NotiflixLoadingWrap]>div[class*=-icon] img,[id^=NotiflixLoadingWrap]>div[class*=-icon] svg{height:auto;left:0;max-height:unset;max-width:unset;position:absolute;top:0;width:100%}[id^=NotiflixLoadingWrap]>p{font-family:inherit!important;font-size:15px;font-weight:400;line-height:1.4;margin:10px auto 0;padding:0 10px;position:relative;text-align:center;width:100%}[id^=NotiflixLoadingWrap].nx-with-animation{animation:loading-animation-fade .3s ease-in-out 0s normal}@keyframes loading-animation-fade{0%{opacity:0}to{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{animation:loading-animation-fade-remove .3s ease-in-out 0s normal;opacity:0}@keyframes loading-animation-fade-remove{0%{opacity:1}to{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{animation:loading-new-message-fade .3s ease-in-out 0s normal}@keyframes loading-new-message-fade{0%{opacity:0}to{opacity:1}}[id^=NotiflixBlockWrap]{animation-duration:.4s;background:hsla(0,0%,100%,.9);border-radius:inherit;display:flex;flex-wrap:wrap;font-family:Quicksand,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;height:100%;left:0;position:absolute;text-align:center;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;z-index:1000;flex-direction:column;align-items:center;justify-content:center}[id^=NotiflixBlockWrap],[id^=NotiflixBlockWrap] *{box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*=-icon]{display:block;height:45px;margin:0 auto;position:relative;width:45px}[id^=NotiflixBlockWrap]>span[class*=-icon] svg{height:inherit;width:inherit}[id^=NotiflixBlockWrap]>span[class*=-message]{display:block;font-family:inherit!important;font-size:14px;font-weight:400;line-height:1.4;margin:10px auto 0;padding:0 10px;position:relative;width:100%}[id^=NotiflixBlockWrap].nx-with-animation{animation:block-animation-fade .3s ease-in-out 0s normal}@keyframes block-animation-fade{0%{opacity:0}to{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{animation:block-animation-fade-remove .3s ease-in-out 0s normal;opacity:0}@keyframes block-animation-fade-remove{0%{opacity:1}to{opacity:0}}";
    styleInject(css_248z$2);

    var css_248z$1 = ".notiflix-notify{text-align:left}";
    styleInject(css_248z$1);

    notiflixNotifyAioExports.Notify.init({
        ID: 'notiflix_notify_' + new Date().getTime()
    });
    var notify = notiflixNotifyAioExports.Notify;

    /**
     * 基础异常
     */
    class BMScriptError extends Error {
    }
    /**
     * 代码执行未结束
     */
    class ScriptNotFinishedError extends BMScriptError {
    }
    /**
     * 目标网页未匹配
     */
    class LocationUnmatchError extends BMScriptError {
    }
    /**
     * 异常默认拦截
     * @param error 异常
     */
    function handleDefineError(error) {
        if (error instanceof BMScriptError) {
            if (error instanceof ScriptNotFinishedError) {
                notify.warning(error.message);
            }
        }
        else {
            notify.failure('Unknown error: ' + error.message);
        }
        console.error(error);
    }

    /**
     * 默认配置
     */
    const DEFINE_OPTIONS = {
        match: [/.*/i],
        unmatchMsg: '请到目标网页再试试!!!',
        showMeta: true,
        leaveAlert: true
    };
    /**
     * 脚本唯一id
     */
    const id = 'bm_' + hash(JSON.stringify(meta));
    /**
     * 脚本
     */
    class BMScript {
        /**
         * 初始化
         * @param options 配置
         * @returns
         */
        static init(options) {
            BMScript.options = Object.assign(DEFINE_OPTIONS, options);
            return BMScript;
        }
        /**
         * 执行脚本
         * @param callback 回调
         * @returns
         */
        static run(callback) {
            return __awaiter(this, void 0, void 0, function* () {
                const { leaveAlert, showMeta, match, unmatchMsg } = BMScript.options;
                // 脚本未执行完
                if (window.__bms_running_status__[id]) {
                    throw new ScriptNotFinishedError('Script not finished error!!!');
                }
                window.__bms_running_status__[id] = true;
                // 执行中关闭网页告警
                if (leaveAlert) {
                    window.addEventListener('beforeunload', (event) => {
                        if (window.__bms_running_status__[id]) {
                            event.preventDefault();
                            event.returnValue = '$';
                            return '$';
                        }
                    });
                }
                // 显示脚本信息
                if (showMeta) {
                    console.log(`%cwelcome use ${meta.name}!`, 'color:#1e80ff;font-size:16px;');
                    let metaInfo = meta.name;
                    meta.description && (metaInfo += `[${meta.description}]`);
                    meta.version && (metaInfo += `(${meta.version})`);
                    console.log(`%c${metaInfo}`, 'color:#1e80ff;font-size:14px;');
                }
                // 脚本未匹配目标网页
                const mRes = match.find(re => location.href.match(re) != null);
                if (mRes == null) {
                    notify.failure(unmatchMsg, { plainText: false });
                    window.__bms_running_status__[id] = false;
                    throw new LocationUnmatchError('Location unmatch error!!!');
                }
                try {
                    // 执行脚本本体
                    return yield callback();
                }
                finally {
                    window.__bms_running_status__[id] = false;
                }
            });
        }
    }
    (() => {
        if (!window.__bms_running_status__) {
            window.__bms_running_status__ = {};
        }
        if (!Object.keys(window.__bms_running_status__).includes(id)) {
            window.__bms_running_status__[id] = false;
        }
        BMScript.init({});
    })();

    /**
     * 元素查询
     * @param selectors 路径xpan
     * @returns
     */
    function q(selectors) {
        return document.querySelector(selectors);
    }

    var FileSaver_min = {exports: {}};

    (function (module, exports) {
    	(function(a,b){b();})(commonjsGlobal,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c);},d.onerror=function(){console.error("could not download file");},d.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null;},k.readAsDataURL(b);}else {var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m);},4E4);}});f.saveAs=g.saveAs=g,(module.exports=g);});

    	
    } (FileSaver_min));

    var jszip_min = {exports: {}};

    /*!

    JSZip v3.10.1 - A JavaScript class for generating and reading zip files
    <http://stuartk.com/jszip>

    (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
    Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

    JSZip uses the library pako released under the MIT license :
    https://github.com/nodeca/pako/blob/main/LICENSE
    */

    (function (module, exports) {
    	!function(e){module.exports=e();}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t="function"==typeof commonjsRequire&&commonjsRequire;if(!e&&t)return t(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h);}return o[r].exports}for(var l="function"==typeof commonjsRequire&&commonjsRequire,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){var d=e("./utils"),c=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c="string"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u="data:";if(e.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l};},{"./support":30,"./utils":32}],2:[function(e,t,r){var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i;}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o;},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate");},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){var n=e("./utils");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e;}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return -1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return -1^e}(0|t,e,e.length,0):0};},{"./utils":32}],5:[function(e,t,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null;},{}],6:[function(e,t,r){var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n};},{lie:37}],7:[function(e,t,r){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function h(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={};}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1);},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0);},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null;},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta});};},r.compressWorker=function(e){return new h("Deflate",e)},r.uncompressWorker=function(){return new h("Inflate",{})};},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){function A(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),c=I.transformTo("string",O.utf8encode(h.name)),d=h.comment,p=I.transformTo("string",s(d)),m=I.transformTo("string",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(n,4)+f+b+p}}var I=e("../utils"),i=e("../stream/GenericWorker"),O=e("../utf8"),B=e("../crc32"),R=e("../signature");function s(e,t,r,n){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[];}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}));},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}});}else this.accumulate=!0;},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null;},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo("string",i(n));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}});},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume();},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e);}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end();}),e.on("error",function(e){t.error(e);}),this},s.prototype.resume=function(){return !!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return !1;for(var r=0;r<t.length;r++)try{t[r].error(e);}catch(e){}return !0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock();},t.exports=s;},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){var u=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o);}),o.entriesCount=h;}catch(e){o.error(e);}return o};},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e};}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return (new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n;},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){var u=e("./utils"),i=e("./external"),n=e("./utf8"),s=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on("error",function(e){t(e);}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e();}).resume();})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s);}return t.zipComment.length&&(h.comment=t.zipComment),h})};},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t);}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}});}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e);}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end();});},s.prototype.pause=function(){return !!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return !!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s;},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t);}).on("error",function(e){n.emit("error",e);}).on("end",function(){n.push(null);});}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume();},t.exports=n;},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}};},{}],15:[function(e,t,r){function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h;}var i=e("./utf8"),u=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),f=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),o=e("./generate"),p=e("./nodejsUtils"),m=e("./nodejs/NodejsStreamInputAdapter"),_=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return "/"!==e.slice(-1)&&(e+="/"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return "[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n);},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t);}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return !t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n);}catch(e){(t=new l("error")).error(e);}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return (e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n;},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){t.exports=e("stream");},{stream:void 0}],17:[function(e,t,r){var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t];}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return -1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return [];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i;},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0;}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e);},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e;},skip:function(e){this.setIndex(this.index+e);},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i;},{"../utils":32}],19:[function(e,t,r){var n=e("./Uint8ArrayReader");function i(e){n.call(this,e);}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i;},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){var n=e("./DataReader");function i(e){n.call(this,e);}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i;},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){var n=e("./ArrayReader");function i(e){n.call(this,e);}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i;},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new h(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)};},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b";},{}],24:[function(e,t,r){var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e;}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta});},t.exports=s;},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0);}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e);},t.exports=s;},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0);}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length;}i.prototype.processChunk.call(this,e);},t.exports=s;},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat();},function(e){t.error(e);});}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null;},s.prototype.resume=function(){return !!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0));},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return !1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t);}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s;},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null;}n.prototype={push:function(e){this.emit("data",e);},end:function(){if(this.isFinished)return !1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0;}catch(e){this.emit("error",e);}return !0},error:function(e){return !this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[];},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t);},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e);}),e.on("end",function(){t.end();}),e.on("error",function(e){t.error(e);}),this},pause:function(){return !this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return !1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e);},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e]);},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock();},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n;},{}],29:[function(e,t,r){var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),u=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter");}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on("data",function(e,t){n.push(e),o&&o(t);}).on("error",function(e){n=[],r(e);}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e);}catch(e){r(e);}n=[];}).resume();})}function f(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string";}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock();}catch(e){this._worker=new s("error"),this._worker.error(e);}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return "data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta);}):this._worker.on(e,function(){h.delay(t,arguments,r);}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f;},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else {var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size;}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size;}catch(e){r.blob=!1;}}}try{r.nodestream=!!e("readable-stream").Readable;}catch(e){r.nodestream=!1;}},{"readable-stream":16}],31:[function(e,t,s){for(var o=e("./utils"),h=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null;}function l(){n.call(this,"utf-8 encode");}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else {for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n);}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length);}else t=this.leftOver.concat(t);this.leftOver=null;}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta});},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null);},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta});},s.Utf8EncodeWorker=l;},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,a){var o=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),u=e("./external");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),a.newBlob=function(t,r){a.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return !1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return !1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if("uint8array"===r?n=i.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2);}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||"",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var i=t[n];"."===i||""===i&&0!==n&&n!==t.length-1||(".."===i?r.pop():r.push(i));}return r.join("/")},a.getTypeOf=function(e){return "string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":o.nodebuffer&&r.isBuffer(e)?"nodebuffer":o.uint8array&&e instanceof Uint8Array?"uint8array":o.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[]);});},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r;},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result);},e.onerror=function(e){r(e.target.error);},e.readAsArrayBuffer(n);}):n}).then(function(e){var t=a.getTypeOf(e);return t?("arraybuffer"===t?e=a.transformTo("uint8array",e):"string"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})};},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function h(e){this.files=[],this.loadOptions=e;}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r);},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r};},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes();},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw !this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral();}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e);},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles();}},t.exports=h;},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),h=e("./compressions"),u=e("./support");function l(e,t){this.options=e,this.loadOptions=t;}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in h)if(Object.prototype.hasOwnProperty.call(h,t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize));},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength);},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0);},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4));}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i);},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else {var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else {var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r);}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else {var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i);}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l;},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions};}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),h=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker));}catch(e){(t=new h("error")).error(e);}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n;},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,l,t){(function(t){var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2;};}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null;},t.document.documentElement.appendChild(e);}:function(){setTimeout(u,0);};else {var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0);};}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length;}n=!1;}l.exports=function(e){1!==h.push(e)||n||r();};}).call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],37:[function(e,t,r){var i=e("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e);}function h(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected);}function f(t,r,n){i(function(){var e;try{e=r(n);}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError("Cannot resolve promise with itself")):l.resolve(t,e);});}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments);}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e));}function i(e){r||(r=!0,l.resolve(t,e));}var s=p(function(){e(i,n);});"error"===s.status&&n(s.value);}function p(e,t){var r={};try{r.value=e(t),r.status="success";}catch(e){r.status="error",r.value=e;}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e);},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e);},h.prototype.callRejected=function(e){l.reject(this.promise,e);},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e);},l.resolve=function(e,t){var r=p(c,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else {e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t);}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s));},function(e){i||(i=!0,l.reject(o,e));});}},o.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e));},function(e){n||(n=!0,l.reject(s,e));});var a;return s};},{immediate:36}],38:[function(e,t,r){var n={};(0, e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n;},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){var a=e("./zlib/deflate"),o=e("./utils/common"),h=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?h.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0;}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return !1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=h.string2buf(e):"[object ArrayBuffer]"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)));}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e);},p.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg;},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return (t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return (t=t||{}).gzip=!0,n(e,t)};},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){var c=e("./zlib/inflate"),d=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header);}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return !1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?h.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0);}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e);},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg;},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return (t=t||{}).raw=!0,o(e,t)},r.ungzip=o;},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n]);}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s];},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s];},flattenChunks:function(e){return [].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s));},r.setTyped(n);},{}],42:[function(e,t,r){var h=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0]);}catch(e){i=!1;}try{String.fromCharCode.apply(null,new Uint8Array(1));}catch(e){s=!1;}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else {for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i);}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t};},{"./common":41}],43:[function(e,t,r){t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521;}return i|s<<16|0};},{}],44:[function(e,t,r){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};},{}],45:[function(e,t,r){var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e;}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return -1^e};},{}],46:[function(e,t,r){var h,c=e("../utils/common"),u=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return (e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0;}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0));}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm);}function U(e,t){e.pending_buf[e.pending++]=t;}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t;}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a];}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f;}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++;}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--;}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i;}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0;}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0;}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return (e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else {var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1;}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73);}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s);}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91);}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s);}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103);}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead);}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r);}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)";},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1;};},{}],48:[function(e,t,r){t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else {if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C;}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C;}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C;}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]));}else {for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]));}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p;};},{}],49:[function(e,t,r){var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),R=e("./inffast"),T=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return (e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0;}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1;}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5;}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0;}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}l=u=0;}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30;}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3;}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else {if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if(u>>>=_,l-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2;}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3;}else {for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7;}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=k;}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}u>>>=v,l-=v,r.back+=v;}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra;}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}u>>>=v,l-=v,r.back+=v;}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra;}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window;}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8;}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}l=u=0;}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8;}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}l=u=0;}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return -4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)";},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return -1;if(0<z&&(0===e||1!==w))return -1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]];}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0;}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0};},{"../utils/common":41}],51:[function(e,t,r){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};},{}],52:[function(e,t,r){var i=e("../utils/common"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0;}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length;}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t;}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255;}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r);}function L(e,t,r){P(e,r[2*t],r[2*t+1]);}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o));}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0;}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0;}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n;}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t);}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2;}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--);}}(e,t),Z(s,u,e.bl_count);}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4));}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4);}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r;}(e,t,r,!0);}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p);}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e);},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1);}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e);},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8);}(e);};},{"../utils/common":41}],53:[function(e,t,r){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0;};},{}],54:[function(e,t,r){(function(e){!function(r,n){if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i="[object process]"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e);});}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1;},r.postMessage("","*"),r.onmessage=t,e}}()?(a="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",d,!1):r.attachEvent("onmessage",d),function(e){r.postMessage(a+e,"*");}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data);},function(e){t.port2.postMessage(e);}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null;},s.appendChild(t);}):function(e){setTimeout(c,0,e);},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f;}function f(e){delete h[e];}function c(e){if(u)setTimeout(c,0,e);else {var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r);}}(t);}finally{f(e),u=!1;}}}}function d(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length));}}("undefined"==typeof self?void 0===e?this:e:self);}).call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}]},{},[10])(10)}); 
    } (jszip_min));

    var pLimit$1 = {exports: {}};

    var pTry$2 = {exports: {}};

    const pTry$1 = (fn, ...arguments_) => new Promise(resolve => {
    	resolve(fn(...arguments_));
    });

    pTry$2.exports = pTry$1;
    // TODO: remove this in the next major version
    pTry$2.exports.default = pTry$1;

    var pTryExports = pTry$2.exports;

    const pTry = pTryExports;

    const pLimit = concurrency => {
    	if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
    		return Promise.reject(new TypeError('Expected `concurrency` to be a number from 1 and up'));
    	}

    	const queue = [];
    	let activeCount = 0;

    	const next = () => {
    		activeCount--;

    		if (queue.length > 0) {
    			queue.shift()();
    		}
    	};

    	const run = (fn, resolve, ...args) => {
    		activeCount++;

    		const result = pTry(fn, ...args);

    		resolve(result);

    		result.then(next, next);
    	};

    	const enqueue = (fn, resolve, ...args) => {
    		if (activeCount < concurrency) {
    			run(fn, resolve, ...args);
    		} else {
    			queue.push(run.bind(null, fn, resolve, ...args));
    		}
    	};

    	const generator = (fn, ...args) => new Promise(resolve => enqueue(fn, resolve, ...args));
    	Object.defineProperties(generator, {
    		activeCount: {
    			get: () => activeCount
    		},
    		pendingCount: {
    			get: () => queue.length
    		},
    		clearQueue: {
    			value: () => {
    				queue.length = 0;
    			}
    		}
    	});

    	return generator;
    };

    pLimit$1.exports = pLimit;
    pLimit$1.exports.default = pLimit;

    var css_248z = ".swal2-popup.swal2-toast{background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:min-content auto min-content;overflow-y:hidden;padding:1em;pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{font-size:1em;margin:.5em 1em;padding:0;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{font-size:1em;height:2em;margin:.5em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{font-size:.8em;margin:.5em 0 0;padding:.5em 0 0}.swal2-popup.swal2-toast .swal2-close{align-self:center;font-size:2em;grid-column:3/3;grid-row:1/99;height:.8em;margin:0;width:.8em}.swal2-popup.swal2-toast .swal2-html-container{font-size:1em;margin:.5em 1em;overflow:initial;padding:0;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{align-self:center;grid-column:1;grid-row:1/99;height:2em;margin:.25em;width:2em}.swal2-popup.swal2-toast .swal2-icon{align-self:center;grid-column:1;grid-row:1/99;height:2em;margin:0 .5em 0 0;min-width:2em;width:2em}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{align-items:center;display:flex;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{height:2em;width:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;justify-content:flex-start;margin:.5em 0 0;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{font-size:1em;margin:.25em .5em;padding:.4em .6em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{border-radius:50%;height:3em;position:absolute;width:1.6em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{border-radius:4em 0 0 4em;left:-.5em;top:-.8em;transform:rotate(-45deg);transform-origin:2em 2em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{border-radius:0 4em 4em 0;left:.9375em;top:-.25em;transform-origin:0 1.5em}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{height:2em;width:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{height:2.6875em;left:.4375em;top:0;width:.4375em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{left:.1875em;top:1.125em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{right:.1875em;top:.9375em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){box-sizing:border-box;display:grid;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;inset:0;overflow-x:hidden;padding:.625em;position:fixed;transition:background-color .1s;z-index:1060;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:transparent!important}div:where(.swal2-container).swal2-bottom-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}div:where(.swal2-container).swal2-bottom,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-top{grid-template-columns:auto minmax(0,1fr) auto}div:where(.swal2-container).swal2-bottom-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-left>.swal2-popup,div:where(.swal2-container).swal2-center-start>.swal2-popup{align-self:center;grid-row:2}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-left>.swal2-popup,div:where(.swal2-container).swal2-bottom-start>.swal2-popup{align-self:end;grid-column:1;grid-row:3}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup,div:where(.swal2-container).swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{align-self:stretch;grid-row:1/4}div:where(.swal2-container).swal2-no-transition{transition:none!important}div:where(.swal2-container) div:where(.swal2-popup){background:#fff;border:none;border-radius:5px;box-sizing:border-box;color:#545454;display:none;font-family:inherit;font-size:1rem;grid-template-columns:minmax(0,100%);max-width:100%;padding:0 0 1.25em;position:relative;width:32em}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){color:inherit;font-size:1.875em;font-weight:600;margin:0;max-width:100%;padding:.8em 1em 0;position:relative;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){align-items:center;box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:center;margin:1.25em auto 0;padding:0;width:auto;z-index:1}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}div:where(.swal2-container) div:where(.swal2-loader){align-items:center;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-color:#2778c4 transparent;border-radius:100%;border-style:solid;border-width:.25em;display:none;height:2.2em;justify-content:center;margin:0 1.875em;width:2.2em}div:where(.swal2-container) button:where(.swal2-styled){box-shadow:0 0 0 3px transparent;font-weight:500;margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{background:initial;background-color:#7066e0;border:0;border-radius:.25em;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{background:initial;background-color:#dc3741;border:0;border-radius:.25em;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{background:initial;background-color:#6e7881;border:0;border-radius:.25em;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px hsla(208,8%,47%,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){border-top:1px solid #eee;color:inherit;font-size:1em;margin:1em 0 0;padding:1em 1em 0;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{border-bottom-left-radius:5px;border-bottom-right-radius:5px;bottom:0;grid-column:auto!important;left:0;overflow:hidden;position:absolute;right:0}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){background:rgba(0,0,0,.2);height:.25em;width:100%}div:where(.swal2-container) img:where(.swal2-image){margin:2em auto 1em;max-width:100%}div:where(.swal2-container) button:where(.swal2-close){align-items:center;background:transparent;border:none;border-radius:5px;color:#ccc;cursor:pointer;font-family:monospace;font-size:2.5em;height:1.2em;justify-content:center;justify-self:end;margin-bottom:-1.2em;margin-right:0;margin-top:0;overflow:hidden;padding:0;transition:color .1s,box-shadow .1s;width:1.2em;z-index:2}div:where(.swal2-container) button:where(.swal2-close):hover{background:transparent;color:#f27474;transform:none}div:where(.swal2-container) button:where(.swal2-close):focus{box-shadow:inset 0 0 0 3px rgba(100,150,200,.5);outline:none}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{color:inherit;font-size:1.125em;font-weight:400;justify-content:center;line-height:normal;margin:1em 1.6em .3em;overflow:auto;padding:0;text-align:center;z-index:1;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) label:where(.swal2-checkbox),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) textarea:where(.swal2-textarea){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) textarea:where(.swal2-textarea){background:transparent;border:1px solid #d9d9d9;border-radius:.1875em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;box-sizing:border-box;color:inherit;font-size:1.125em;transition:border-color .1s,box-shadow .1s;width:auto}div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5);outline:none}div:where(.swal2-container) input:where(.swal2-file)::-moz-placeholder, div:where(.swal2-container) input:where(.swal2-input)::-moz-placeholder, div:where(.swal2-container) textarea:where(.swal2-textarea)::-moz-placeholder{color:#ccc}div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{background:#fff;margin:1em 2em 3px}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{color:inherit;font-weight:600;text-align:center;width:20%}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{font-size:1.125em;height:2.625em;line-height:2.625em;padding:0}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{background:transparent;font-size:1.125em;margin-left:auto;margin-right:auto;width:75%}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{background:transparent;color:inherit;font-size:1.125em;max-width:100%;min-width:50%;padding:.375em .625em}div:where(.swal2-container) .swal2-checkbox,div:where(.swal2-container) .swal2-radio{align-items:center;background:#fff;color:inherit;justify-content:center}div:where(.swal2-container) .swal2-checkbox label,div:where(.swal2-container) .swal2-radio label{font-size:1.125em;margin:0 .6em}div:where(.swal2-container) .swal2-checkbox input,div:where(.swal2-container) .swal2-radio input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;justify-content:center;margin:1em 0 0;overflow:hidden;padding:.625em}div:where(.swal2-container) div:where(.swal2-validation-message):before{background-color:#f27474;border-radius:50%;color:#fff;content:\"!\";display:inline-block;font-weight:600;height:1.5em;line-height:1.5em;margin:0 .625em;min-width:1.5em;text-align:center;width:1.5em}div:where(.swal2-container) .swal2-progress-steps{align-items:center;background:transparent;flex-wrap:wrap;font-weight:600;margin:1.25em auto;max-width:100%;padding:0}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{background:#2778c4;border-radius:2em;color:#fff;flex-shrink:0;height:2em;line-height:2em;text-align:center;width:2em;z-index:20}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{background:#2778c4;flex-shrink:0;height:.4em;margin:0 -1px;width:2.5em;z-index:10}div:where(.swal2-icon){border:.25em solid #000;border-radius:50%;box-sizing:content-box;cursor:default;font-family:inherit;height:5em;justify-content:center;line-height:5em;margin:2.5em auto .6em;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:5em}div:where(.swal2-icon) .swal2-icon-content{align-items:center;display:flex;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{flex-grow:1;position:relative}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{background-color:#f27474;border-radius:.125em;display:block;height:.3125em;position:absolute;top:2.3125em;width:2.9375em}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{border-radius:50%;height:7.5em;position:absolute;width:3.75em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{border-radius:7.5em 0 0 7.5em;left:-2.0635em;top:-.4375em;transform:rotate(-45deg);transform-origin:3.75em 3.75em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{border-radius:0 7.5em 7.5em 0;left:1.875em;top:-.6875em;transform:rotate(-45deg);transform-origin:0 3.75em}div:where(.swal2-icon).swal2-success .swal2-success-ring{border:.25em solid hsla(98,55%,69%,.3);border-radius:50%;box-sizing:content-box;height:100%;left:-.25em;position:absolute;top:-.25em;width:100%;z-index:2}div:where(.swal2-icon).swal2-success .swal2-success-fix{height:5.625em;left:1.625em;position:absolute;top:.5em;transform:rotate(-45deg);width:.4375em;z-index:1}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{background-color:#a5dc86;border-radius:.125em;display:block;height:.3125em;position:absolute;z-index:2}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{left:.8125em;top:2.875em;transform:rotate(45deg);width:1.5625em}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{right:.5em;top:2.375em;transform:rotate(-45deg);width:2.9375em}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{height:50px;overflow:scroll;position:absolute;top:-9999px;width:50px}.swal2-rtl .swal2-close{margin-left:0;margin-right:0}.swal2-rtl .swal2-timer-progress-bar{left:auto;right:0}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotate(2deg)}33%{transform:translateY(0) rotate(-2deg)}66%{transform:translateY(.3125em) rotate(2deg)}to{transform:translateY(0) rotate(0deg)}}@keyframes swal2-toast-hide{to{opacity:0;transform:rotate(1deg)}}@keyframes swal2-toast-animate-success-line-tip{0%{left:.0625em;top:.5625em;width:0}54%{left:.125em;top:.125em;width:0}70%{left:-.25em;top:.625em;width:1.625em}84%{left:.75em;top:1.0625em;width:.5em}to{left:.1875em;top:1.125em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{right:1.375em;top:1.625em;width:0}65%{right:.9375em;top:1.25em;width:0}84%{right:0;top:.9375em;width:1.125em}to{right:.1875em;top:.9375em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}to{transform:scale(1)}}@keyframes swal2-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.5)}}@keyframes swal2-animate-success-line-tip{0%{left:.0625em;top:1.1875em;width:0}54%{left:.125em;top:1.0625em;width:0}70%{left:-.375em;top:2.1875em;width:3.125em}84%{left:1.3125em;top:3em;width:1.0625em}to{left:.8125em;top:2.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{right:2.875em;top:3.375em;width:0}65%{right:2.875em;top:3.375em;width:0}84%{right:0;top:2.1875em;width:3.4375em}to{right:.5em;top:2.375em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;opacity:0;transform:scale(.4)}50%{margin-top:1.625em;opacity:0;transform:scale(.4)}80%{margin-top:-.375em;transform:scale(1.15)}to{margin-top:0;opacity:1;transform:scale(1)}}@keyframes swal2-animate-error-icon{0%{opacity:0;transform:rotateX(100deg)}to{opacity:1;transform:rotateX(0deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-1turn)}to{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{opacity:0;transform:rotate(45deg)}25%{opacity:.4;transform:rotate(-25deg)}50%{opacity:.8;transform:rotate(15deg)}75%{opacity:1;transform:rotate(-5deg)}to{opacity:1;transform:rotateX(0)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent;box-sizing:border-box;max-width:100%;pointer-events:none;width:360px}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}";
    styleInject(css_248z);

    var sweetalert2_all = {exports: {}};

    /*!
    * sweetalert2 v11.10.6
    * Released under the MIT License.
    */

    (function (module, exports) {
    	(function (global, factory) {
    	  module.exports = factory() ;
    	})(commonjsGlobal, (function () {
    	  function _callSuper(t, o, e) {
    	    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
    	  }
    	  function _construct(t, e, r) {
    	    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    	    var o = [null];
    	    o.push.apply(o, e);
    	    var p = new (t.bind.apply(t, o))();
    	    return r && _setPrototypeOf(p, r.prototype), p;
    	  }
    	  function _isNativeReflectConstruct() {
    	    try {
    	      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    	    } catch (t) {}
    	    return (_isNativeReflectConstruct = function () {
    	      return !!t;
    	    })();
    	  }
    	  function _iterableToArrayLimit(r, l) {
    	    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    	    if (null != t) {
    	      var e,
    	        n,
    	        i,
    	        u,
    	        a = [],
    	        f = !0,
    	        o = !1;
    	      try {
    	        if (i = (t = t.call(r)).next, 0 === l) {
    	          if (Object(t) !== t) return;
    	          f = !1;
    	        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    	      } catch (r) {
    	        o = !0, n = r;
    	      } finally {
    	        try {
    	          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
    	        } finally {
    	          if (o) throw n;
    	        }
    	      }
    	      return a;
    	    }
    	  }
    	  function _toPrimitive(t, r) {
    	    if ("object" != typeof t || !t) return t;
    	    var e = t[Symbol.toPrimitive];
    	    if (void 0 !== e) {
    	      var i = e.call(t, r || "default");
    	      if ("object" != typeof i) return i;
    	      throw new TypeError("@@toPrimitive must return a primitive value.");
    	    }
    	    return ("string" === r ? String : Number)(t);
    	  }
    	  function _toPropertyKey(t) {
    	    var i = _toPrimitive(t, "string");
    	    return "symbol" == typeof i ? i : String(i);
    	  }
    	  function _typeof(o) {
    	    "@babel/helpers - typeof";

    	    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    	      return typeof o;
    	    } : function (o) {
    	      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    	    }, _typeof(o);
    	  }
    	  function _classCallCheck(instance, Constructor) {
    	    if (!(instance instanceof Constructor)) {
    	      throw new TypeError("Cannot call a class as a function");
    	    }
    	  }
    	  function _defineProperties(target, props) {
    	    for (var i = 0; i < props.length; i++) {
    	      var descriptor = props[i];
    	      descriptor.enumerable = descriptor.enumerable || false;
    	      descriptor.configurable = true;
    	      if ("value" in descriptor) descriptor.writable = true;
    	      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    	    }
    	  }
    	  function _createClass(Constructor, protoProps, staticProps) {
    	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    	    if (staticProps) _defineProperties(Constructor, staticProps);
    	    Object.defineProperty(Constructor, "prototype", {
    	      writable: false
    	    });
    	    return Constructor;
    	  }
    	  function _inherits(subClass, superClass) {
    	    if (typeof superClass !== "function" && superClass !== null) {
    	      throw new TypeError("Super expression must either be null or a function");
    	    }
    	    subClass.prototype = Object.create(superClass && superClass.prototype, {
    	      constructor: {
    	        value: subClass,
    	        writable: true,
    	        configurable: true
    	      }
    	    });
    	    Object.defineProperty(subClass, "prototype", {
    	      writable: false
    	    });
    	    if (superClass) _setPrototypeOf(subClass, superClass);
    	  }
    	  function _getPrototypeOf(o) {
    	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    	      return o.__proto__ || Object.getPrototypeOf(o);
    	    };
    	    return _getPrototypeOf(o);
    	  }
    	  function _setPrototypeOf(o, p) {
    	    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    	      o.__proto__ = p;
    	      return o;
    	    };
    	    return _setPrototypeOf(o, p);
    	  }
    	  function _assertThisInitialized(self) {
    	    if (self === void 0) {
    	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    	    }
    	    return self;
    	  }
    	  function _possibleConstructorReturn(self, call) {
    	    if (call && (typeof call === "object" || typeof call === "function")) {
    	      return call;
    	    } else if (call !== void 0) {
    	      throw new TypeError("Derived constructors may only return object or undefined");
    	    }
    	    return _assertThisInitialized(self);
    	  }
    	  function _superPropBase(object, property) {
    	    while (!Object.prototype.hasOwnProperty.call(object, property)) {
    	      object = _getPrototypeOf(object);
    	      if (object === null) break;
    	    }
    	    return object;
    	  }
    	  function _get() {
    	    if (typeof Reflect !== "undefined" && Reflect.get) {
    	      _get = Reflect.get.bind();
    	    } else {
    	      _get = function _get(target, property, receiver) {
    	        var base = _superPropBase(target, property);
    	        if (!base) return;
    	        var desc = Object.getOwnPropertyDescriptor(base, property);
    	        if (desc.get) {
    	          return desc.get.call(arguments.length < 3 ? target : receiver);
    	        }
    	        return desc.value;
    	      };
    	    }
    	    return _get.apply(this, arguments);
    	  }
    	  function _slicedToArray(arr, i) {
    	    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    	  }
    	  function _toConsumableArray(arr) {
    	    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    	  }
    	  function _arrayWithoutHoles(arr) {
    	    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    	  }
    	  function _arrayWithHoles(arr) {
    	    if (Array.isArray(arr)) return arr;
    	  }
    	  function _iterableToArray(iter) {
    	    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    	  }
    	  function _unsupportedIterableToArray(o, minLen) {
    	    if (!o) return;
    	    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    	    var n = Object.prototype.toString.call(o).slice(8, -1);
    	    if (n === "Object" && o.constructor) n = o.constructor.name;
    	    if (n === "Map" || n === "Set") return Array.from(o);
    	    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    	  }
    	  function _arrayLikeToArray(arr, len) {
    	    if (len == null || len > arr.length) len = arr.length;
    	    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    	    return arr2;
    	  }
    	  function _nonIterableSpread() {
    	    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    	  }
    	  function _nonIterableRest() {
    	    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    	  }
    	  function _classPrivateFieldGet(receiver, privateMap) {
    	    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    	    return _classApplyDescriptorGet(receiver, descriptor);
    	  }
    	  function _classPrivateFieldSet(receiver, privateMap, value) {
    	    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    	    _classApplyDescriptorSet(receiver, descriptor, value);
    	    return value;
    	  }
    	  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    	    if (!privateMap.has(receiver)) {
    	      throw new TypeError("attempted to " + action + " private field on non-instance");
    	    }
    	    return privateMap.get(receiver);
    	  }
    	  function _classApplyDescriptorGet(receiver, descriptor) {
    	    if (descriptor.get) {
    	      return descriptor.get.call(receiver);
    	    }
    	    return descriptor.value;
    	  }
    	  function _classApplyDescriptorSet(receiver, descriptor, value) {
    	    if (descriptor.set) {
    	      descriptor.set.call(receiver, value);
    	    } else {
    	      if (!descriptor.writable) {
    	        throw new TypeError("attempted to set read only private field");
    	      }
    	      descriptor.value = value;
    	    }
    	  }
    	  function _checkPrivateRedeclaration(obj, privateCollection) {
    	    if (privateCollection.has(obj)) {
    	      throw new TypeError("Cannot initialize the same private elements twice on an object");
    	    }
    	  }
    	  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    	    _checkPrivateRedeclaration(obj, privateMap);
    	    privateMap.set(obj, value);
    	  }

    	  var RESTORE_FOCUS_TIMEOUT = 100;

    	  /** @type {GlobalState} */
    	  var globalState = {};
    	  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    	    if (globalState.previousActiveElement instanceof HTMLElement) {
    	      globalState.previousActiveElement.focus();
    	      globalState.previousActiveElement = null;
    	    } else if (document.body) {
    	      document.body.focus();
    	    }
    	  };

    	  /**
    	   * Restore previous active (focused) element
    	   *
    	   * @param {boolean} returnFocus
    	   * @returns {Promise<void>}
    	   */
    	  var restoreActiveElement = function restoreActiveElement(returnFocus) {
    	    return new Promise(function (resolve) {
    	      if (!returnFocus) {
    	        return resolve();
    	      }
    	      var x = window.scrollX;
    	      var y = window.scrollY;
    	      globalState.restoreFocusTimeout = setTimeout(function () {
    	        focusPreviousActiveElement();
    	        resolve();
    	      }, RESTORE_FOCUS_TIMEOUT); // issues/900

    	      window.scrollTo(x, y);
    	    });
    	  };

    	  var swalPrefix = 'swal2-';

    	  /**
    	   * @typedef
    	   * { | 'container'
    	   *   | 'shown'
    	   *   | 'height-auto'
    	   *   | 'iosfix'
    	   *   | 'popup'
    	   *   | 'modal'
    	   *   | 'no-backdrop'
    	   *   | 'no-transition'
    	   *   | 'toast'
    	   *   | 'toast-shown'
    	   *   | 'show'
    	   *   | 'hide'
    	   *   | 'close'
    	   *   | 'title'
    	   *   | 'html-container'
    	   *   | 'actions'
    	   *   | 'confirm'
    	   *   | 'deny'
    	   *   | 'cancel'
    	   *   | 'default-outline'
    	   *   | 'footer'
    	   *   | 'icon'
    	   *   | 'icon-content'
    	   *   | 'image'
    	   *   | 'input'
    	   *   | 'file'
    	   *   | 'range'
    	   *   | 'select'
    	   *   | 'radio'
    	   *   | 'checkbox'
    	   *   | 'label'
    	   *   | 'textarea'
    	   *   | 'inputerror'
    	   *   | 'input-label'
    	   *   | 'validation-message'
    	   *   | 'progress-steps'
    	   *   | 'active-progress-step'
    	   *   | 'progress-step'
    	   *   | 'progress-step-line'
    	   *   | 'loader'
    	   *   | 'loading'
    	   *   | 'styled'
    	   *   | 'top'
    	   *   | 'top-start'
    	   *   | 'top-end'
    	   *   | 'top-left'
    	   *   | 'top-right'
    	   *   | 'center'
    	   *   | 'center-start'
    	   *   | 'center-end'
    	   *   | 'center-left'
    	   *   | 'center-right'
    	   *   | 'bottom'
    	   *   | 'bottom-start'
    	   *   | 'bottom-end'
    	   *   | 'bottom-left'
    	   *   | 'bottom-right'
    	   *   | 'grow-row'
    	   *   | 'grow-column'
    	   *   | 'grow-fullscreen'
    	   *   | 'rtl'
    	   *   | 'timer-progress-bar'
    	   *   | 'timer-progress-bar-container'
    	   *   | 'scrollbar-measure'
    	   *   | 'icon-success'
    	   *   | 'icon-warning'
    	   *   | 'icon-info'
    	   *   | 'icon-question'
    	   *   | 'icon-error'
    	   * } SwalClass
    	   * @typedef {Record<SwalClass, string>} SwalClasses
    	   */

    	  /**
    	   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
    	   * @typedef {Record<SwalIcon, string>} SwalIcons
    	   */

    	  /** @type {SwalClass[]} */
    	  var classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];
    	  var swalClasses = classNames.reduce(function (acc, className) {
    	    acc[className] = swalPrefix + className;
    	    return acc;
    	  }, /** @type {SwalClasses} */{});

    	  /** @type {SwalIcon[]} */
    	  var icons = ['success', 'warning', 'info', 'question', 'error'];
    	  var iconTypes = icons.reduce(function (acc, icon) {
    	    acc[icon] = swalPrefix + icon;
    	    return acc;
    	  }, /** @type {SwalIcons} */{});

    	  var consolePrefix = 'SweetAlert2:';

    	  /**
    	   * Capitalize the first letter of a string
    	   *
    	   * @param {string} str
    	   * @returns {string}
    	   */
    	  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    	    return str.charAt(0).toUpperCase() + str.slice(1);
    	  };

    	  /**
    	   * Standardize console warnings
    	   *
    	   * @param {string | string[]} message
    	   */
    	  var warn = function warn(message) {
    	    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
    	  };

    	  /**
    	   * Standardize console errors
    	   *
    	   * @param {string} message
    	   */
    	  var error = function error(message) {
    	    console.error("".concat(consolePrefix, " ").concat(message));
    	  };

    	  /**
    	   * Private global state for `warnOnce`
    	   *
    	   * @type {string[]}
    	   * @private
    	   */
    	  var previousWarnOnceMessages = [];

    	  /**
    	   * Show a console warning, but only if it hasn't already been shown
    	   *
    	   * @param {string} message
    	   */
    	  var warnOnce = function warnOnce(message) {
    	    if (!previousWarnOnceMessages.includes(message)) {
    	      previousWarnOnceMessages.push(message);
    	      warn(message);
    	    }
    	  };

    	  /**
    	   * Show a one-time console warning about deprecated params/methods
    	   *
    	   * @param {string} deprecatedParam
    	   * @param {string} useInstead
    	   */
    	  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    	    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
    	  };

    	  /**
    	   * If `arg` is a function, call it (with no arguments or context) and return the result.
    	   * Otherwise, just pass the value through
    	   *
    	   * @param {Function | any} arg
    	   * @returns {any}
    	   */
    	  var callIfFunction = function callIfFunction(arg) {
    	    return typeof arg === 'function' ? arg() : arg;
    	  };

    	  /**
    	   * @param {any} arg
    	   * @returns {boolean}
    	   */
    	  var hasToPromiseFn = function hasToPromiseFn(arg) {
    	    return arg && typeof arg.toPromise === 'function';
    	  };

    	  /**
    	   * @param {any} arg
    	   * @returns {Promise<any>}
    	   */
    	  var asPromise = function asPromise(arg) {
    	    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
    	  };

    	  /**
    	   * @param {any} arg
    	   * @returns {boolean}
    	   */
    	  var isPromise = function isPromise(arg) {
    	    return arg && Promise.resolve(arg) === arg;
    	  };

    	  /**
    	   * Gets the popup container which contains the backdrop and the popup itself.
    	   *
    	   * @returns {HTMLElement | null}
    	   */
    	  var getContainer = function getContainer() {
    	    return document.body.querySelector(".".concat(swalClasses.container));
    	  };

    	  /**
    	   * @param {string} selectorString
    	   * @returns {HTMLElement | null}
    	   */
    	  var elementBySelector = function elementBySelector(selectorString) {
    	    var container = getContainer();
    	    return container ? container.querySelector(selectorString) : null;
    	  };

    	  /**
    	   * @param {string} className
    	   * @returns {HTMLElement | null}
    	   */
    	  var elementByClass = function elementByClass(className) {
    	    return elementBySelector(".".concat(className));
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getPopup = function getPopup() {
    	    return elementByClass(swalClasses.popup);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getIcon = function getIcon() {
    	    return elementByClass(swalClasses.icon);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getIconContent = function getIconContent() {
    	    return elementByClass(swalClasses['icon-content']);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getTitle = function getTitle() {
    	    return elementByClass(swalClasses.title);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getHtmlContainer = function getHtmlContainer() {
    	    return elementByClass(swalClasses['html-container']);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getImage = function getImage() {
    	    return elementByClass(swalClasses.image);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getProgressSteps = function getProgressSteps() {
    	    return elementByClass(swalClasses['progress-steps']);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getValidationMessage = function getValidationMessage() {
    	    return elementByClass(swalClasses['validation-message']);
    	  };

    	  /**
    	   * @returns {HTMLButtonElement | null}
    	   */
    	  var getConfirmButton = function getConfirmButton() {
    	    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
    	  };

    	  /**
    	   * @returns {HTMLButtonElement | null}
    	   */
    	  var getCancelButton = function getCancelButton() {
    	    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
    	  };

    	  /**
    	   * @returns {HTMLButtonElement | null}
    	   */
    	  var getDenyButton = function getDenyButton() {
    	    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getInputLabel = function getInputLabel() {
    	    return elementByClass(swalClasses['input-label']);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getLoader = function getLoader() {
    	    return elementBySelector(".".concat(swalClasses.loader));
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getActions = function getActions() {
    	    return elementByClass(swalClasses.actions);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getFooter = function getFooter() {
    	    return elementByClass(swalClasses.footer);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getTimerProgressBar = function getTimerProgressBar() {
    	    return elementByClass(swalClasses['timer-progress-bar']);
    	  };

    	  /**
    	   * @returns {HTMLElement | null}
    	   */
    	  var getCloseButton = function getCloseButton() {
    	    return elementByClass(swalClasses.close);
    	  };

    	  // https://github.com/jkup/focusable/blob/master/index.js
    	  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
    	  /**
    	   * @returns {HTMLElement[]}
    	   */
    	  var getFocusableElements = function getFocusableElements() {
    	    var popup = getPopup();
    	    if (!popup) {
    	      return [];
    	    }
    	    /** @type {NodeListOf<HTMLElement>} */
    	    var focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    	    var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    	    // sort according to tabindex
    	    .sort(function (a, b) {
    	      var tabindexA = parseInt(a.getAttribute('tabindex') || '0');
    	      var tabindexB = parseInt(b.getAttribute('tabindex') || '0');
    	      if (tabindexA > tabindexB) {
    	        return 1;
    	      } else if (tabindexA < tabindexB) {
    	        return -1;
    	      }
    	      return 0;
    	    });

    	    /** @type {NodeListOf<HTMLElement>} */
    	    var otherFocusableElements = popup.querySelectorAll(focusable);
    	    var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function (el) {
    	      return el.getAttribute('tabindex') !== '-1';
    	    });
    	    return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function (el) {
    	      return isVisible$1(el);
    	    });
    	  };

    	  /**
    	   * @returns {boolean}
    	   */
    	  var isModal = function isModal() {
    	    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
    	  };

    	  /**
    	   * @returns {boolean}
    	   */
    	  var isToast = function isToast() {
    	    var popup = getPopup();
    	    if (!popup) {
    	      return false;
    	    }
    	    return hasClass(popup, swalClasses.toast);
    	  };

    	  /**
    	   * @returns {boolean}
    	   */
    	  var isLoading = function isLoading() {
    	    var popup = getPopup();
    	    if (!popup) {
    	      return false;
    	    }
    	    return popup.hasAttribute('data-loading');
    	  };

    	  /**
    	   * Securely set innerHTML of an element
    	   * https://github.com/sweetalert2/sweetalert2/issues/1926
    	   *
    	   * @param {HTMLElement} elem
    	   * @param {string} html
    	   */
    	  var setInnerHtml = function setInnerHtml(elem, html) {
    	    elem.textContent = '';
    	    if (html) {
    	      var parser = new DOMParser();
    	      var parsed = parser.parseFromString(html, "text/html");
    	      var head = parsed.querySelector('head');
    	      head && Array.from(head.childNodes).forEach(function (child) {
    	        elem.appendChild(child);
    	      });
    	      var body = parsed.querySelector('body');
    	      body && Array.from(body.childNodes).forEach(function (child) {
    	        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
    	          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
    	        } else {
    	          elem.appendChild(child);
    	        }
    	      });
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement} elem
    	   * @param {string} className
    	   * @returns {boolean}
    	   */
    	  var hasClass = function hasClass(elem, className) {
    	    if (!className) {
    	      return false;
    	    }
    	    var classList = className.split(/\s+/);
    	    for (var i = 0; i < classList.length; i++) {
    	      if (!elem.classList.contains(classList[i])) {
    	        return false;
    	      }
    	    }
    	    return true;
    	  };

    	  /**
    	   * @param {HTMLElement} elem
    	   * @param {SweetAlertOptions} params
    	   */
    	  var removeCustomClasses = function removeCustomClasses(elem, params) {
    	    Array.from(elem.classList).forEach(function (className) {
    	      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
    	        elem.classList.remove(className);
    	      }
    	    });
    	  };

    	  /**
    	   * @param {HTMLElement} elem
    	   * @param {SweetAlertOptions} params
    	   * @param {string} className
    	   */
    	  var applyCustomClass = function applyCustomClass(elem, params, className) {
    	    removeCustomClasses(elem, params);
    	    if (params.customClass && params.customClass[className]) {
    	      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
    	        warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
    	        return;
    	      }
    	      addClass(elem, params.customClass[className]);
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement} popup
    	   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
    	   * @returns {HTMLInputElement | null}
    	   */
    	  var getInput$1 = function getInput(popup, inputClass) {
    	    if (!inputClass) {
    	      return null;
    	    }
    	    switch (inputClass) {
    	      case 'select':
    	      case 'textarea':
    	      case 'file':
    	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));
    	      case 'checkbox':
    	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));
    	      case 'radio':
    	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));
    	      case 'range':
    	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));
    	      default:
    	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    	    }
    	  };

    	  /**
    	   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
    	   */
    	  var focusInput = function focusInput(input) {
    	    input.focus();

    	    // place cursor at end of text in text input
    	    if (input.type !== 'file') {
    	      // http://stackoverflow.com/a/2345915
    	      var val = input.value;
    	      input.value = '';
    	      input.value = val;
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement | HTMLElement[] | null} target
    	   * @param {string | string[] | readonly string[] | undefined} classList
    	   * @param {boolean} condition
    	   */
    	  var toggleClass = function toggleClass(target, classList, condition) {
    	    if (!target || !classList) {
    	      return;
    	    }
    	    if (typeof classList === 'string') {
    	      classList = classList.split(/\s+/).filter(Boolean);
    	    }
    	    classList.forEach(function (className) {
    	      if (Array.isArray(target)) {
    	        target.forEach(function (elem) {
    	          condition ? elem.classList.add(className) : elem.classList.remove(className);
    	        });
    	      } else {
    	        condition ? target.classList.add(className) : target.classList.remove(className);
    	      }
    	    });
    	  };

    	  /**
    	   * @param {HTMLElement | HTMLElement[] | null} target
    	   * @param {string | string[] | readonly string[] | undefined} classList
    	   */
    	  var addClass = function addClass(target, classList) {
    	    toggleClass(target, classList, true);
    	  };

    	  /**
    	   * @param {HTMLElement | HTMLElement[] | null} target
    	   * @param {string | string[] | readonly string[] | undefined} classList
    	   */
    	  var removeClass = function removeClass(target, classList) {
    	    toggleClass(target, classList, false);
    	  };

    	  /**
    	   * Get direct child of an element by class name
    	   *
    	   * @param {HTMLElement} elem
    	   * @param {string} className
    	   * @returns {HTMLElement | undefined}
    	   */
    	  var getDirectChildByClass = function getDirectChildByClass(elem, className) {
    	    var children = Array.from(elem.children);
    	    for (var i = 0; i < children.length; i++) {
    	      var child = children[i];
    	      if (child instanceof HTMLElement && hasClass(child, className)) {
    	        return child;
    	      }
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement} elem
    	   * @param {string} property
    	   * @param {*} value
    	   */
    	  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    	    if (value === "".concat(parseInt(value))) {
    	      value = parseInt(value);
    	    }
    	    if (value || parseInt(value) === 0) {
    	      elem.style.setProperty(property, typeof value === 'number' ? "".concat(value, "px") : value);
    	    } else {
    	      elem.style.removeProperty(property);
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement | null} elem
    	   * @param {string} display
    	   */
    	  var show = function show(elem) {
    	    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    	    elem && (elem.style.display = display);
    	  };

    	  /**
    	   * @param {HTMLElement | null} elem
    	   */
    	  var hide = function hide(elem) {
    	    elem && (elem.style.display = 'none');
    	  };

    	  /**
    	   * @param {HTMLElement | null} elem
    	   * @param {string} display
    	   */
    	  var showWhenInnerHtmlPresent = function showWhenInnerHtmlPresent(elem) {
    	    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
    	    if (!elem) {
    	      return;
    	    }
    	    new MutationObserver(function () {
    	      toggle(elem, elem.innerHTML, display);
    	    }).observe(elem, {
    	      childList: true,
    	      subtree: true
    	    });
    	  };

    	  /**
    	   * @param {HTMLElement} parent
    	   * @param {string} selector
    	   * @param {string} property
    	   * @param {string} value
    	   */
    	  var setStyle = function setStyle(parent, selector, property, value) {
    	    /** @type {HTMLElement | null} */
    	    var el = parent.querySelector(selector);
    	    if (el) {
    	      el.style.setProperty(property, value);
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement} elem
    	   * @param {any} condition
    	   * @param {string} display
    	   */
    	  var toggle = function toggle(elem, condition) {
    	    var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    	    condition ? show(elem, display) : hide(elem);
    	  };

    	  /**
    	   * borrowed from jquery $(elem).is(':visible') implementation
    	   *
    	   * @param {HTMLElement | null} elem
    	   * @returns {boolean}
    	   */
    	  var isVisible$1 = function isVisible(elem) {
    	    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
    	  };

    	  /**
    	   * @returns {boolean}
    	   */
    	  var allButtonsAreHidden = function allButtonsAreHidden() {
    	    return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
    	  };

    	  /**
    	   * @param {HTMLElement} elem
    	   * @returns {boolean}
    	   */
    	  var isScrollable = function isScrollable(elem) {
    	    return !!(elem.scrollHeight > elem.clientHeight);
    	  };

    	  /**
    	   * borrowed from https://stackoverflow.com/a/46352119
    	   *
    	   * @param {HTMLElement} elem
    	   * @returns {boolean}
    	   */
    	  var hasCssAnimation = function hasCssAnimation(elem) {
    	    var style = window.getComputedStyle(elem);
    	    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    	    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    	    return animDuration > 0 || transDuration > 0;
    	  };

    	  /**
    	   * @param {number} timer
    	   * @param {boolean} reset
    	   */
    	  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    	    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    	    var timerProgressBar = getTimerProgressBar();
    	    if (!timerProgressBar) {
    	      return;
    	    }
    	    if (isVisible$1(timerProgressBar)) {
    	      if (reset) {
    	        timerProgressBar.style.transition = 'none';
    	        timerProgressBar.style.width = '100%';
    	      }
    	      setTimeout(function () {
    	        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
    	        timerProgressBar.style.width = '0%';
    	      }, 10);
    	    }
    	  };
    	  var stopTimerProgressBar = function stopTimerProgressBar() {
    	    var timerProgressBar = getTimerProgressBar();
    	    if (!timerProgressBar) {
    	      return;
    	    }
    	    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    	    timerProgressBar.style.removeProperty('transition');
    	    timerProgressBar.style.width = '100%';
    	    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    	    var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    	    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
    	  };

    	  /**
    	   * Detect Node env
    	   *
    	   * @returns {boolean}
    	   */
    	  var isNodeEnv = function isNodeEnv() {
    	    return typeof window === 'undefined' || typeof document === 'undefined';
    	  };

    	  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" id=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\" id=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" id=\"").concat(swalClasses.checkbox, "\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\" id=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

    	  /**
    	   * @returns {boolean}
    	   */
    	  var resetOldContainer = function resetOldContainer() {
    	    var oldContainer = getContainer();
    	    if (!oldContainer) {
    	      return false;
    	    }
    	    oldContainer.remove();
    	    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    	    return true;
    	  };
    	  var resetValidationMessage$1 = function resetValidationMessage() {
    	    globalState.currentInstance.resetValidationMessage();
    	  };
    	  var addInputChangeListeners = function addInputChangeListeners() {
    	    var popup = getPopup();
    	    var input = getDirectChildByClass(popup, swalClasses.input);
    	    var file = getDirectChildByClass(popup, swalClasses.file);
    	    /** @type {HTMLInputElement} */
    	    var range = popup.querySelector(".".concat(swalClasses.range, " input"));
    	    /** @type {HTMLOutputElement} */
    	    var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    	    var select = getDirectChildByClass(popup, swalClasses.select);
    	    /** @type {HTMLInputElement} */
    	    var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    	    var textarea = getDirectChildByClass(popup, swalClasses.textarea);
    	    input.oninput = resetValidationMessage$1;
    	    file.onchange = resetValidationMessage$1;
    	    select.onchange = resetValidationMessage$1;
    	    checkbox.onchange = resetValidationMessage$1;
    	    textarea.oninput = resetValidationMessage$1;
    	    range.oninput = function () {
    	      resetValidationMessage$1();
    	      rangeOutput.value = range.value;
    	    };
    	    range.onchange = function () {
    	      resetValidationMessage$1();
    	      rangeOutput.value = range.value;
    	    };
    	  };

    	  /**
    	   * @param {string | HTMLElement} target
    	   * @returns {HTMLElement}
    	   */
    	  var getTarget = function getTarget(target) {
    	    return typeof target === 'string' ? document.querySelector(target) : target;
    	  };

    	  /**
    	   * @param {SweetAlertOptions} params
    	   */
    	  var setupAccessibility = function setupAccessibility(params) {
    	    var popup = getPopup();
    	    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    	    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    	    if (!params.toast) {
    	      popup.setAttribute('aria-modal', 'true');
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement} targetElement
    	   */
    	  var setupRTL = function setupRTL(targetElement) {
    	    if (window.getComputedStyle(targetElement).direction === 'rtl') {
    	      addClass(getContainer(), swalClasses.rtl);
    	    }
    	  };

    	  /**
    	   * Add modal + backdrop + no-war message for Russians to DOM
    	   *
    	   * @param {SweetAlertOptions} params
    	   */
    	  var init = function init(params) {
    	    // Clean up the old popup container if it exists
    	    var oldContainerExisted = resetOldContainer();
    	    if (isNodeEnv()) {
    	      error('SweetAlert2 requires document to initialize');
    	      return;
    	    }
    	    var container = document.createElement('div');
    	    container.className = swalClasses.container;
    	    if (oldContainerExisted) {
    	      addClass(container, swalClasses['no-transition']);
    	    }
    	    setInnerHtml(container, sweetHTML);
    	    var targetElement = getTarget(params.target);
    	    targetElement.appendChild(container);
    	    setupAccessibility(params);
    	    setupRTL(targetElement);
    	    addInputChangeListeners();
    	  };

    	  /**
    	   * @param {HTMLElement | object | string} param
    	   * @param {HTMLElement} target
    	   */
    	  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    	    // DOM element
    	    if (param instanceof HTMLElement) {
    	      target.appendChild(param);
    	    }

    	    // Object
    	    else if (_typeof(param) === 'object') {
    	      handleObject(param, target);
    	    }

    	    // Plain string
    	    else if (param) {
    	      setInnerHtml(target, param);
    	    }
    	  };

    	  /**
    	   * @param {any} param
    	   * @param {HTMLElement} target
    	   */
    	  var handleObject = function handleObject(param, target) {
    	    // JQuery element(s)
    	    if (param.jquery) {
    	      handleJqueryElem(target, param);
    	    }

    	    // For other objects use their string representation
    	    else {
    	      setInnerHtml(target, param.toString());
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement} target
    	   * @param {any} elem
    	   */
    	  var handleJqueryElem = function handleJqueryElem(target, elem) {
    	    target.textContent = '';
    	    if (0 in elem) {
    	      for (var i = 0; (i in elem); i++) {
    	        target.appendChild(elem[i].cloneNode(true));
    	      }
    	    } else {
    	      target.appendChild(elem.cloneNode(true));
    	    }
    	  };

    	  /**
    	   * @returns {'webkitAnimationEnd' | 'animationend' | false}
    	   */
    	  var animationEndEvent = function () {
    	    // Prevent run in Node env
    	    if (isNodeEnv()) {
    	      return false;
    	    }
    	    var testEl = document.createElement('div');

    	    // Chrome, Safari and Opera
    	    if (typeof testEl.style.webkitAnimation !== 'undefined') {
    	      return 'webkitAnimationEnd';
    	    }

    	    // Standard syntax
    	    if (typeof testEl.style.animation !== 'undefined') {
    	      return 'animationend';
    	    }
    	    return false;
    	  }();

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderActions = function renderActions(instance, params) {
    	    var actions = getActions();
    	    var loader = getLoader();
    	    if (!actions || !loader) {
    	      return;
    	    }

    	    // Actions (buttons) wrapper
    	    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
    	      hide(actions);
    	    } else {
    	      show(actions);
    	    }

    	    // Custom class
    	    applyCustomClass(actions, params, 'actions');

    	    // Render all the buttons
    	    renderButtons(actions, loader, params);

    	    // Loader
    	    setInnerHtml(loader, params.loaderHtml || '');
    	    applyCustomClass(loader, params, 'loader');
    	  };

    	  /**
    	   * @param {HTMLElement} actions
    	   * @param {HTMLElement} loader
    	   * @param {SweetAlertOptions} params
    	   */
    	  function renderButtons(actions, loader, params) {
    	    var confirmButton = getConfirmButton();
    	    var denyButton = getDenyButton();
    	    var cancelButton = getCancelButton();
    	    if (!confirmButton || !denyButton || !cancelButton) {
    	      return;
    	    }

    	    // Render buttons
    	    renderButton(confirmButton, 'confirm', params);
    	    renderButton(denyButton, 'deny', params);
    	    renderButton(cancelButton, 'cancel', params);
    	    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    	    if (params.reverseButtons) {
    	      if (params.toast) {
    	        actions.insertBefore(cancelButton, confirmButton);
    	        actions.insertBefore(denyButton, confirmButton);
    	      } else {
    	        actions.insertBefore(cancelButton, loader);
    	        actions.insertBefore(denyButton, loader);
    	        actions.insertBefore(confirmButton, loader);
    	      }
    	    }
    	  }

    	  /**
    	   * @param {HTMLElement} confirmButton
    	   * @param {HTMLElement} denyButton
    	   * @param {HTMLElement} cancelButton
    	   * @param {SweetAlertOptions} params
    	   */
    	  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    	    if (!params.buttonsStyling) {
    	      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    	      return;
    	    }
    	    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    	    // Buttons background colors
    	    if (params.confirmButtonColor) {
    	      confirmButton.style.backgroundColor = params.confirmButtonColor;
    	      addClass(confirmButton, swalClasses['default-outline']);
    	    }
    	    if (params.denyButtonColor) {
    	      denyButton.style.backgroundColor = params.denyButtonColor;
    	      addClass(denyButton, swalClasses['default-outline']);
    	    }
    	    if (params.cancelButtonColor) {
    	      cancelButton.style.backgroundColor = params.cancelButtonColor;
    	      addClass(cancelButton, swalClasses['default-outline']);
    	    }
    	  }

    	  /**
    	   * @param {HTMLElement} button
    	   * @param {'confirm' | 'deny' | 'cancel'} buttonType
    	   * @param {SweetAlertOptions} params
    	   */
    	  function renderButton(button, buttonType, params) {
    	    var buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    	    toggle(button, params["show".concat(buttonName, "Button")], 'inline-block');
    	    setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || ''); // Set caption text
    	    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")] || ''); // ARIA label

    	    // Add buttons custom classes
    	    button.className = swalClasses[buttonType];
    	    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    	  }

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderCloseButton = function renderCloseButton(instance, params) {
    	    var closeButton = getCloseButton();
    	    if (!closeButton) {
    	      return;
    	    }
    	    setInnerHtml(closeButton, params.closeButtonHtml || '');

    	    // Custom class
    	    applyCustomClass(closeButton, params, 'closeButton');
    	    toggle(closeButton, params.showCloseButton);
    	    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderContainer = function renderContainer(instance, params) {
    	    var container = getContainer();
    	    if (!container) {
    	      return;
    	    }
    	    handleBackdropParam(container, params.backdrop);
    	    handlePositionParam(container, params.position);
    	    handleGrowParam(container, params.grow);

    	    // Custom class
    	    applyCustomClass(container, params, 'container');
    	  };

    	  /**
    	   * @param {HTMLElement} container
    	   * @param {SweetAlertOptions['backdrop']} backdrop
    	   */
    	  function handleBackdropParam(container, backdrop) {
    	    if (typeof backdrop === 'string') {
    	      container.style.background = backdrop;
    	    } else if (!backdrop) {
    	      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    	    }
    	  }

    	  /**
    	   * @param {HTMLElement} container
    	   * @param {SweetAlertOptions['position']} position
    	   */
    	  function handlePositionParam(container, position) {
    	    if (!position) {
    	      return;
    	    }
    	    if (position in swalClasses) {
    	      addClass(container, swalClasses[position]);
    	    } else {
    	      warn('The "position" parameter is not valid, defaulting to "center"');
    	      addClass(container, swalClasses.center);
    	    }
    	  }

    	  /**
    	   * @param {HTMLElement} container
    	   * @param {SweetAlertOptions['grow']} grow
    	   */
    	  function handleGrowParam(container, grow) {
    	    if (!grow) {
    	      return;
    	    }
    	    addClass(container, swalClasses["grow-".concat(grow)]);
    	  }

    	  /**
    	   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
    	   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
    	   * This is the approach that Babel will probably take to implement private methods/fields
    	   *   https://github.com/tc39/proposal-private-methods
    	   *   https://github.com/babel/babel/pull/7555
    	   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
    	   *   then we can use that language feature.
    	   */

    	  var privateProps = {
    	    innerParams: new WeakMap(),
    	    domCache: new WeakMap()
    	  };

    	  /** @type {InputClass[]} */
    	  var inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderInput = function renderInput(instance, params) {
    	    var popup = getPopup();
    	    if (!popup) {
    	      return;
    	    }
    	    var innerParams = privateProps.innerParams.get(instance);
    	    var rerender = !innerParams || params.input !== innerParams.input;
    	    inputClasses.forEach(function (inputClass) {
    	      var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
    	      if (!inputContainer) {
    	        return;
    	      }

    	      // set attributes
    	      setAttributes(inputClass, params.inputAttributes);

    	      // set class
    	      inputContainer.className = swalClasses[inputClass];
    	      if (rerender) {
    	        hide(inputContainer);
    	      }
    	    });
    	    if (params.input) {
    	      if (rerender) {
    	        showInput(params);
    	      }
    	      // set custom class
    	      setCustomClass(params);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlertOptions} params
    	   */
    	  var showInput = function showInput(params) {
    	    if (!params.input) {
    	      return;
    	    }
    	    if (!renderInputType[params.input]) {
    	      error("Unexpected type of input! Expected ".concat(Object.keys(renderInputType).join(' | '), ", got \"").concat(params.input, "\""));
    	      return;
    	    }
    	    var inputContainer = getInputContainer(params.input);
    	    var input = renderInputType[params.input](inputContainer, params);
    	    show(inputContainer);

    	    // input autofocus
    	    if (params.inputAutoFocus) {
    	      setTimeout(function () {
    	        focusInput(input);
    	      });
    	    }
    	  };

    	  /**
    	   * @param {HTMLInputElement} input
    	   */
    	  var removeAttributes = function removeAttributes(input) {
    	    for (var i = 0; i < input.attributes.length; i++) {
    	      var attrName = input.attributes[i].name;
    	      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
    	        input.removeAttribute(attrName);
    	      }
    	    }
    	  };

    	  /**
    	   * @param {InputClass} inputClass
    	   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
    	   */
    	  var setAttributes = function setAttributes(inputClass, inputAttributes) {
    	    var input = getInput$1(getPopup(), inputClass);
    	    if (!input) {
    	      return;
    	    }
    	    removeAttributes(input);
    	    for (var attr in inputAttributes) {
    	      input.setAttribute(attr, inputAttributes[attr]);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlertOptions} params
    	   */
    	  var setCustomClass = function setCustomClass(params) {
    	    var inputContainer = getInputContainer(params.input);
    	    if (_typeof(params.customClass) === 'object') {
    	      addClass(inputContainer, params.customClass.input);
    	    }
    	  };

    	  /**
    	   * @param {HTMLInputElement | HTMLTextAreaElement} input
    	   * @param {SweetAlertOptions} params
    	   */
    	  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    	    if (!input.placeholder || params.inputPlaceholder) {
    	      input.placeholder = params.inputPlaceholder;
    	    }
    	  };

    	  /**
    	   * @param {Input} input
    	   * @param {Input} prependTo
    	   * @param {SweetAlertOptions} params
    	   */
    	  var setInputLabel = function setInputLabel(input, prependTo, params) {
    	    if (params.inputLabel) {
    	      var label = document.createElement('label');
    	      var labelClass = swalClasses['input-label'];
    	      label.setAttribute('for', input.id);
    	      label.className = labelClass;
    	      if (_typeof(params.customClass) === 'object') {
    	        addClass(label, params.customClass.inputLabel);
    	      }
    	      label.innerText = params.inputLabel;
    	      prependTo.insertAdjacentElement('beforebegin', label);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlertOptions['input']} inputType
    	   * @returns {HTMLElement}
    	   */
    	  var getInputContainer = function getInputContainer(inputType) {
    	    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
    	  };

    	  /**
    	   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
    	   * @param {SweetAlertOptions['inputValue']} inputValue
    	   */
    	  var checkAndSetInputValue = function checkAndSetInputValue(input, inputValue) {
    	    if (['string', 'number'].includes(_typeof(inputValue))) {
    	      input.value = "".concat(inputValue);
    	    } else if (!isPromise(inputValue)) {
    	      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(inputValue), "\""));
    	    }
    	  };

    	  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
    	  var renderInputType = {};

    	  /**
    	   * @param {HTMLInputElement} input
    	   * @param {SweetAlertOptions} params
    	   * @returns {HTMLInputElement}
    	   */
    	  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = function (input, params) {
    	    checkAndSetInputValue(input, params.inputValue);
    	    setInputLabel(input, input, params);
    	    setInputPlaceholder(input, params);
    	    input.type = params.input;
    	    return input;
    	  };

    	  /**
    	   * @param {HTMLInputElement} input
    	   * @param {SweetAlertOptions} params
    	   * @returns {HTMLInputElement}
    	   */
    	  renderInputType.file = function (input, params) {
    	    setInputLabel(input, input, params);
    	    setInputPlaceholder(input, params);
    	    return input;
    	  };

    	  /**
    	   * @param {HTMLInputElement} range
    	   * @param {SweetAlertOptions} params
    	   * @returns {HTMLInputElement}
    	   */
    	  renderInputType.range = function (range, params) {
    	    var rangeInput = range.querySelector('input');
    	    var rangeOutput = range.querySelector('output');
    	    checkAndSetInputValue(rangeInput, params.inputValue);
    	    rangeInput.type = params.input;
    	    checkAndSetInputValue(rangeOutput, params.inputValue);
    	    setInputLabel(rangeInput, range, params);
    	    return range;
    	  };

    	  /**
    	   * @param {HTMLSelectElement} select
    	   * @param {SweetAlertOptions} params
    	   * @returns {HTMLSelectElement}
    	   */
    	  renderInputType.select = function (select, params) {
    	    select.textContent = '';
    	    if (params.inputPlaceholder) {
    	      var placeholder = document.createElement('option');
    	      setInnerHtml(placeholder, params.inputPlaceholder);
    	      placeholder.value = '';
    	      placeholder.disabled = true;
    	      placeholder.selected = true;
    	      select.appendChild(placeholder);
    	    }
    	    setInputLabel(select, select, params);
    	    return select;
    	  };

    	  /**
    	   * @param {HTMLInputElement} radio
    	   * @returns {HTMLInputElement}
    	   */
    	  renderInputType.radio = function (radio) {
    	    radio.textContent = '';
    	    return radio;
    	  };

    	  /**
    	   * @param {HTMLLabelElement} checkboxContainer
    	   * @param {SweetAlertOptions} params
    	   * @returns {HTMLInputElement}
    	   */
    	  renderInputType.checkbox = function (checkboxContainer, params) {
    	    var checkbox = getInput$1(getPopup(), 'checkbox');
    	    checkbox.value = '1';
    	    checkbox.checked = Boolean(params.inputValue);
    	    var label = checkboxContainer.querySelector('span');
    	    setInnerHtml(label, params.inputPlaceholder);
    	    return checkbox;
    	  };

    	  /**
    	   * @param {HTMLTextAreaElement} textarea
    	   * @param {SweetAlertOptions} params
    	   * @returns {HTMLTextAreaElement}
    	   */
    	  renderInputType.textarea = function (textarea, params) {
    	    checkAndSetInputValue(textarea, params.inputValue);
    	    setInputPlaceholder(textarea, params);
    	    setInputLabel(textarea, textarea, params);

    	    /**
    	     * @param {HTMLElement} el
    	     * @returns {number}
    	     */
    	    var getMargin = function getMargin(el) {
    	      return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
    	    };

    	    // https://github.com/sweetalert2/sweetalert2/issues/2291
    	    setTimeout(function () {
    	      // https://github.com/sweetalert2/sweetalert2/issues/1699
    	      if ('MutationObserver' in window) {
    	        var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
    	        var textareaResizeHandler = function textareaResizeHandler() {
    	          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
    	          if (!document.body.contains(textarea)) {
    	            return;
    	          }
    	          var textareaWidth = textarea.offsetWidth + getMargin(textarea);
    	          if (textareaWidth > initialPopupWidth) {
    	            getPopup().style.width = "".concat(textareaWidth, "px");
    	          } else {
    	            applyNumericalStyle(getPopup(), 'width', params.width);
    	          }
    	        };
    	        new MutationObserver(textareaResizeHandler).observe(textarea, {
    	          attributes: true,
    	          attributeFilter: ['style']
    	        });
    	      }
    	    });
    	    return textarea;
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderContent = function renderContent(instance, params) {
    	    var htmlContainer = getHtmlContainer();
    	    if (!htmlContainer) {
    	      return;
    	    }
    	    showWhenInnerHtmlPresent(htmlContainer);
    	    applyCustomClass(htmlContainer, params, 'htmlContainer');

    	    // Content as HTML
    	    if (params.html) {
    	      parseHtmlToContainer(params.html, htmlContainer);
    	      show(htmlContainer, 'block');
    	    }

    	    // Content as plain text
    	    else if (params.text) {
    	      htmlContainer.textContent = params.text;
    	      show(htmlContainer, 'block');
    	    }

    	    // No content
    	    else {
    	      hide(htmlContainer);
    	    }
    	    renderInput(instance, params);
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderFooter = function renderFooter(instance, params) {
    	    var footer = getFooter();
    	    if (!footer) {
    	      return;
    	    }
    	    showWhenInnerHtmlPresent(footer);
    	    toggle(footer, params.footer, 'block');
    	    if (params.footer) {
    	      parseHtmlToContainer(params.footer, footer);
    	    }

    	    // Custom class
    	    applyCustomClass(footer, params, 'footer');
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderIcon = function renderIcon(instance, params) {
    	    var innerParams = privateProps.innerParams.get(instance);
    	    var icon = getIcon();
    	    if (!icon) {
    	      return;
    	    }

    	    // if the given icon already rendered, apply the styling without re-rendering the icon
    	    if (innerParams && params.icon === innerParams.icon) {
    	      // Custom or default content
    	      setContent(icon, params);
    	      applyStyles(icon, params);
    	      return;
    	    }
    	    if (!params.icon && !params.iconHtml) {
    	      hide(icon);
    	      return;
    	    }
    	    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
    	      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    	      hide(icon);
    	      return;
    	    }
    	    show(icon);

    	    // Custom or default content
    	    setContent(icon, params);
    	    applyStyles(icon, params);

    	    // Animate icon
    	    addClass(icon, params.showClass && params.showClass.icon);
    	  };

    	  /**
    	   * @param {HTMLElement} icon
    	   * @param {SweetAlertOptions} params
    	   */
    	  var applyStyles = function applyStyles(icon, params) {
    	    for (var _i = 0, _Object$entries = Object.entries(iconTypes); _i < _Object$entries.length; _i++) {
    	      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
    	        iconType = _Object$entries$_i[0],
    	        iconClassName = _Object$entries$_i[1];
    	      if (params.icon !== iconType) {
    	        removeClass(icon, iconClassName);
    	      }
    	    }
    	    addClass(icon, params.icon && iconTypes[params.icon]);

    	    // Icon color
    	    setColor(icon, params);

    	    // Success icon background color
    	    adjustSuccessIconBackgroundColor();

    	    // Custom class
    	    applyCustomClass(icon, params, 'icon');
    	  };

    	  // Adjust success icon background color to match the popup background color
    	  var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor() {
    	    var popup = getPopup();
    	    if (!popup) {
    	      return;
    	    }
    	    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    	    /** @type {NodeListOf<HTMLElement>} */
    	    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    	    for (var i = 0; i < successIconParts.length; i++) {
    	      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    	    }
    	  };
    	  var successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
    	  var errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";

    	  /**
    	   * @param {HTMLElement} icon
    	   * @param {SweetAlertOptions} params
    	   */
    	  var setContent = function setContent(icon, params) {
    	    if (!params.icon && !params.iconHtml) {
    	      return;
    	    }
    	    var oldContent = icon.innerHTML;
    	    var newContent = '';
    	    if (params.iconHtml) {
    	      newContent = iconContent(params.iconHtml);
    	    } else if (params.icon === 'success') {
    	      newContent = successIconHtml;
    	      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    	    } else if (params.icon === 'error') {
    	      newContent = errorIconHtml;
    	    } else if (params.icon) {
    	      var defaultIconHtml = {
    	        question: '?',
    	        warning: '!',
    	        info: 'i'
    	      };
    	      newContent = iconContent(defaultIconHtml[params.icon]);
    	    }
    	    if (oldContent.trim() !== newContent.trim()) {
    	      setInnerHtml(icon, newContent);
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement} icon
    	   * @param {SweetAlertOptions} params
    	   */
    	  var setColor = function setColor(icon, params) {
    	    if (!params.iconColor) {
    	      return;
    	    }
    	    icon.style.color = params.iconColor;
    	    icon.style.borderColor = params.iconColor;
    	    for (var _i2 = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i2 < _arr.length; _i2++) {
    	      var sel = _arr[_i2];
    	      setStyle(icon, sel, 'background-color', params.iconColor);
    	    }
    	    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
    	  };

    	  /**
    	   * @param {string} content
    	   * @returns {string}
    	   */
    	  var iconContent = function iconContent(content) {
    	    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderImage = function renderImage(instance, params) {
    	    var image = getImage();
    	    if (!image) {
    	      return;
    	    }
    	    if (!params.imageUrl) {
    	      hide(image);
    	      return;
    	    }
    	    show(image, '');

    	    // Src, alt
    	    image.setAttribute('src', params.imageUrl);
    	    image.setAttribute('alt', params.imageAlt || '');

    	    // Width, height
    	    applyNumericalStyle(image, 'width', params.imageWidth);
    	    applyNumericalStyle(image, 'height', params.imageHeight);

    	    // Class
    	    image.className = swalClasses.image;
    	    applyCustomClass(image, params, 'image');
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderPopup = function renderPopup(instance, params) {
    	    var container = getContainer();
    	    var popup = getPopup();
    	    if (!container || !popup) {
    	      return;
    	    }

    	    // Width
    	    // https://github.com/sweetalert2/sweetalert2/issues/2170
    	    if (params.toast) {
    	      applyNumericalStyle(container, 'width', params.width);
    	      popup.style.width = '100%';
    	      var loader = getLoader();
    	      loader && popup.insertBefore(loader, getIcon());
    	    } else {
    	      applyNumericalStyle(popup, 'width', params.width);
    	    }

    	    // Padding
    	    applyNumericalStyle(popup, 'padding', params.padding);

    	    // Color
    	    if (params.color) {
    	      popup.style.color = params.color;
    	    }

    	    // Background
    	    if (params.background) {
    	      popup.style.background = params.background;
    	    }
    	    hide(getValidationMessage());

    	    // Classes
    	    addClasses$1(popup, params);
    	  };

    	  /**
    	   * @param {HTMLElement} popup
    	   * @param {SweetAlertOptions} params
    	   */
    	  var addClasses$1 = function addClasses(popup, params) {
    	    var showClass = params.showClass || {};
    	    // Default Class + showClass when updating Swal.update({})
    	    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : '');
    	    if (params.toast) {
    	      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    	      addClass(popup, swalClasses.toast);
    	    } else {
    	      addClass(popup, swalClasses.modal);
    	    }

    	    // Custom class
    	    applyCustomClass(popup, params, 'popup');
    	    if (typeof params.customClass === 'string') {
    	      addClass(popup, params.customClass);
    	    }

    	    // Icon class (#1842)
    	    if (params.icon) {
    	      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderProgressSteps = function renderProgressSteps(instance, params) {
    	    var progressStepsContainer = getProgressSteps();
    	    if (!progressStepsContainer) {
    	      return;
    	    }
    	    var progressSteps = params.progressSteps,
    	      currentProgressStep = params.currentProgressStep;
    	    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
    	      hide(progressStepsContainer);
    	      return;
    	    }
    	    show(progressStepsContainer);
    	    progressStepsContainer.textContent = '';
    	    if (currentProgressStep >= progressSteps.length) {
    	      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    	    }
    	    progressSteps.forEach(function (step, index) {
    	      var stepEl = createStepElement(step);
    	      progressStepsContainer.appendChild(stepEl);
    	      if (index === currentProgressStep) {
    	        addClass(stepEl, swalClasses['active-progress-step']);
    	      }
    	      if (index !== progressSteps.length - 1) {
    	        var lineEl = createLineElement(params);
    	        progressStepsContainer.appendChild(lineEl);
    	      }
    	    });
    	  };

    	  /**
    	   * @param {string} step
    	   * @returns {HTMLLIElement}
    	   */
    	  var createStepElement = function createStepElement(step) {
    	    var stepEl = document.createElement('li');
    	    addClass(stepEl, swalClasses['progress-step']);
    	    setInnerHtml(stepEl, step);
    	    return stepEl;
    	  };

    	  /**
    	   * @param {SweetAlertOptions} params
    	   * @returns {HTMLLIElement}
    	   */
    	  var createLineElement = function createLineElement(params) {
    	    var lineEl = document.createElement('li');
    	    addClass(lineEl, swalClasses['progress-step-line']);
    	    if (params.progressStepsDistance) {
    	      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    	    }
    	    return lineEl;
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var renderTitle = function renderTitle(instance, params) {
    	    var title = getTitle();
    	    if (!title) {
    	      return;
    	    }
    	    showWhenInnerHtmlPresent(title);
    	    toggle(title, params.title || params.titleText, 'block');
    	    if (params.title) {
    	      parseHtmlToContainer(params.title, title);
    	    }
    	    if (params.titleText) {
    	      title.innerText = params.titleText;
    	    }

    	    // Custom class
    	    applyCustomClass(title, params, 'title');
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var render = function render(instance, params) {
    	    renderPopup(instance, params);
    	    renderContainer(instance, params);
    	    renderProgressSteps(instance, params);
    	    renderIcon(instance, params);
    	    renderImage(instance, params);
    	    renderTitle(instance, params);
    	    renderCloseButton(instance, params);
    	    renderContent(instance, params);
    	    renderActions(instance, params);
    	    renderFooter(instance, params);
    	    var popup = getPopup();
    	    if (typeof params.didRender === 'function' && popup) {
    	      params.didRender(popup);
    	    }
    	  };

    	  /*
    	   * Global function to determine if SweetAlert2 popup is shown
    	   */
    	  var isVisible = function isVisible() {
    	    return isVisible$1(getPopup());
    	  };

    	  /*
    	   * Global function to click 'Confirm' button
    	   */
    	  var clickConfirm = function clickConfirm() {
    	    var _dom$getConfirmButton;
    	    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
    	  };

    	  /*
    	   * Global function to click 'Deny' button
    	   */
    	  var clickDeny = function clickDeny() {
    	    var _dom$getDenyButton;
    	    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
    	  };

    	  /*
    	   * Global function to click 'Cancel' button
    	   */
    	  var clickCancel = function clickCancel() {
    	    var _dom$getCancelButton;
    	    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
    	  };

    	  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

    	  /** @type {Record<DismissReason, DismissReason>} */
    	  var DismissReason = Object.freeze({
    	    cancel: 'cancel',
    	    backdrop: 'backdrop',
    	    close: 'close',
    	    esc: 'esc',
    	    timer: 'timer'
    	  });

    	  /**
    	   * @param {GlobalState} globalState
    	   */
    	  var removeKeydownHandler = function removeKeydownHandler(globalState) {
    	    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    	      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
    	        capture: globalState.keydownListenerCapture
    	      });
    	      globalState.keydownHandlerAdded = false;
    	    }
    	  };

    	  /**
    	   * @param {GlobalState} globalState
    	   * @param {SweetAlertOptions} innerParams
    	   * @param {*} dismissWith
    	   */
    	  var addKeydownHandler = function addKeydownHandler(globalState, innerParams, dismissWith) {
    	    removeKeydownHandler(globalState);
    	    if (!innerParams.toast) {
    	      globalState.keydownHandler = function (e) {
    	        return keydownHandler(innerParams, e, dismissWith);
    	      };
    	      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    	      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
    	      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
    	        capture: globalState.keydownListenerCapture
    	      });
    	      globalState.keydownHandlerAdded = true;
    	    }
    	  };

    	  /**
    	   * @param {number} index
    	   * @param {number} increment
    	   */
    	  var setFocus = function setFocus(index, increment) {
    	    var _dom$getPopup;
    	    var focusableElements = getFocusableElements();
    	    // search for visible elements and select the next possible match
    	    if (focusableElements.length) {
    	      index = index + increment;

    	      // rollover to first item
    	      if (index === focusableElements.length) {
    	        index = 0;

    	        // go to last item
    	      } else if (index === -1) {
    	        index = focusableElements.length - 1;
    	      }
    	      focusableElements[index].focus();
    	      return;
    	    }
    	    // no visible focusable elements, focus the popup
    	    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
    	  };
    	  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
    	  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

    	  /**
    	   * @param {SweetAlertOptions} innerParams
    	   * @param {KeyboardEvent} event
    	   * @param {Function} dismissWith
    	   */
    	  var keydownHandler = function keydownHandler(innerParams, event, dismissWith) {
    	    if (!innerParams) {
    	      return; // This instance has already been destroyed
    	    }

    	    // Ignore keydown during IME composition
    	    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    	    // https://github.com/sweetalert2/sweetalert2/issues/720
    	    // https://github.com/sweetalert2/sweetalert2/issues/2406
    	    if (event.isComposing || event.keyCode === 229) {
    	      return;
    	    }
    	    if (innerParams.stopKeydownPropagation) {
    	      event.stopPropagation();
    	    }

    	    // ENTER
    	    if (event.key === 'Enter') {
    	      handleEnter(event, innerParams);
    	    }

    	    // TAB
    	    else if (event.key === 'Tab') {
    	      handleTab(event);
    	    }

    	    // ARROWS - switch focus between buttons
    	    else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
    	      handleArrows(event.key);
    	    }

    	    // ESC
    	    else if (event.key === 'Escape') {
    	      handleEsc(event, innerParams, dismissWith);
    	    }
    	  };

    	  /**
    	   * @param {KeyboardEvent} event
    	   * @param {SweetAlertOptions} innerParams
    	   */
    	  var handleEnter = function handleEnter(event, innerParams) {
    	    // https://github.com/sweetalert2/sweetalert2/issues/2386
    	    if (!callIfFunction(innerParams.allowEnterKey)) {
    	      return;
    	    }
    	    var input = getInput$1(getPopup(), innerParams.input);
    	    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
    	      if (['textarea', 'file'].includes(innerParams.input)) {
    	        return; // do not submit
    	      }
    	      clickConfirm();
    	      event.preventDefault();
    	    }
    	  };

    	  /**
    	   * @param {KeyboardEvent} event
    	   */
    	  var handleTab = function handleTab(event) {
    	    var targetElement = event.target;
    	    var focusableElements = getFocusableElements();
    	    var btnIndex = -1;
    	    for (var i = 0; i < focusableElements.length; i++) {
    	      if (targetElement === focusableElements[i]) {
    	        btnIndex = i;
    	        break;
    	      }
    	    }

    	    // Cycle to the next button
    	    if (!event.shiftKey) {
    	      setFocus(btnIndex, 1);
    	    }

    	    // Cycle to the prev button
    	    else {
    	      setFocus(btnIndex, -1);
    	    }
    	    event.stopPropagation();
    	    event.preventDefault();
    	  };

    	  /**
    	   * @param {string} key
    	   */
    	  var handleArrows = function handleArrows(key) {
    	    var actions = getActions();
    	    var confirmButton = getConfirmButton();
    	    var denyButton = getDenyButton();
    	    var cancelButton = getCancelButton();
    	    if (!actions || !confirmButton || !denyButton || !cancelButton) {
    	      return;
    	    }
    	    /** @type HTMLElement[] */
    	    var buttons = [confirmButton, denyButton, cancelButton];
    	    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
    	      return;
    	    }
    	    var sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    	    var buttonToFocus = document.activeElement;
    	    if (!buttonToFocus) {
    	      return;
    	    }
    	    for (var i = 0; i < actions.children.length; i++) {
    	      buttonToFocus = buttonToFocus[sibling];
    	      if (!buttonToFocus) {
    	        return;
    	      }
    	      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
    	        break;
    	      }
    	    }
    	    if (buttonToFocus instanceof HTMLButtonElement) {
    	      buttonToFocus.focus();
    	    }
    	  };

    	  /**
    	   * @param {KeyboardEvent} event
    	   * @param {SweetAlertOptions} innerParams
    	   * @param {Function} dismissWith
    	   */
    	  var handleEsc = function handleEsc(event, innerParams, dismissWith) {
    	    if (callIfFunction(innerParams.allowEscapeKey)) {
    	      event.preventDefault();
    	      dismissWith(DismissReason.esc);
    	    }
    	  };

    	  /**
    	   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
    	   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
    	   * This is the approach that Babel will probably take to implement private methods/fields
    	   *   https://github.com/tc39/proposal-private-methods
    	   *   https://github.com/babel/babel/pull/7555
    	   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
    	   *   then we can use that language feature.
    	   */

    	  var privateMethods = {
    	    swalPromiseResolve: new WeakMap(),
    	    swalPromiseReject: new WeakMap()
    	  };

    	  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
    	  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
    	  // elements not within the active modal dialog will not be surfaced if a user opens a screen
    	  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

    	  var setAriaHidden = function setAriaHidden() {
    	    var bodyChildren = Array.from(document.body.children);
    	    bodyChildren.forEach(function (el) {
    	      if (el === getContainer() || el.contains(getContainer())) {
    	        return;
    	      }
    	      if (el.hasAttribute('aria-hidden')) {
    	        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
    	      }
    	      el.setAttribute('aria-hidden', 'true');
    	    });
    	  };
    	  var unsetAriaHidden = function unsetAriaHidden() {
    	    var bodyChildren = Array.from(document.body.children);
    	    bodyChildren.forEach(function (el) {
    	      if (el.hasAttribute('data-previous-aria-hidden')) {
    	        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
    	        el.removeAttribute('data-previous-aria-hidden');
    	      } else {
    	        el.removeAttribute('aria-hidden');
    	      }
    	    });
    	  };

    	  // @ts-ignore
    	  var isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

    	  /**
    	   * Fix iOS scrolling
    	   * http://stackoverflow.com/q/39626302
    	   */
    	  var iOSfix = function iOSfix() {
    	    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
    	      var offset = document.body.scrollTop;
    	      document.body.style.top = "".concat(offset * -1, "px");
    	      addClass(document.body, swalClasses.iosfix);
    	      lockBodyScroll();
    	    }
    	  };

    	  /**
    	   * https://github.com/sweetalert2/sweetalert2/issues/1246
    	   */
    	  var lockBodyScroll = function lockBodyScroll() {
    	    var container = getContainer();
    	    if (!container) {
    	      return;
    	    }
    	    /** @type {boolean} */
    	    var preventTouchMove;
    	    /**
    	     * @param {TouchEvent} event
    	     */
    	    container.ontouchstart = function (event) {
    	      preventTouchMove = shouldPreventTouchMove(event);
    	    };
    	    /**
    	     * @param {TouchEvent} event
    	     */
    	    container.ontouchmove = function (event) {
    	      if (preventTouchMove) {
    	        event.preventDefault();
    	        event.stopPropagation();
    	      }
    	    };
    	  };

    	  /**
    	   * @param {TouchEvent} event
    	   * @returns {boolean}
    	   */
    	  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    	    var target = event.target;
    	    var container = getContainer();
    	    var htmlContainer = getHtmlContainer();
    	    if (!container || !htmlContainer) {
    	      return false;
    	    }
    	    if (isStylus(event) || isZoom(event)) {
    	      return false;
    	    }
    	    if (target === container) {
    	      return true;
    	    }
    	    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
    	    // #1603
    	    target.tagName !== 'TEXTAREA' &&
    	    // #2266
    	    !(isScrollable(htmlContainer) &&
    	    // #1944
    	    htmlContainer.contains(target))) {
    	      return true;
    	    }
    	    return false;
    	  };

    	  /**
    	   * https://github.com/sweetalert2/sweetalert2/issues/1786
    	   *
    	   * @param {*} event
    	   * @returns {boolean}
    	   */
    	  var isStylus = function isStylus(event) {
    	    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
    	  };

    	  /**
    	   * https://github.com/sweetalert2/sweetalert2/issues/1891
    	   *
    	   * @param {TouchEvent} event
    	   * @returns {boolean}
    	   */
    	  var isZoom = function isZoom(event) {
    	    return event.touches && event.touches.length > 1;
    	  };
    	  var undoIOSfix = function undoIOSfix() {
    	    if (hasClass(document.body, swalClasses.iosfix)) {
    	      var offset = parseInt(document.body.style.top, 10);
    	      removeClass(document.body, swalClasses.iosfix);
    	      document.body.style.top = '';
    	      document.body.scrollTop = offset * -1;
    	    }
    	  };

    	  /**
    	   * Measure scrollbar width for padding body during modal show/hide
    	   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
    	   *
    	   * @returns {number}
    	   */
    	  var measureScrollbar = function measureScrollbar() {
    	    var scrollDiv = document.createElement('div');
    	    scrollDiv.className = swalClasses['scrollbar-measure'];
    	    document.body.appendChild(scrollDiv);
    	    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    	    document.body.removeChild(scrollDiv);
    	    return scrollbarWidth;
    	  };

    	  /**
    	   * Remember state in cases where opening and handling a modal will fiddle with it.
    	   * @type {number | null}
    	   */
    	  var previousBodyPadding = null;

    	  /**
    	   * @param {string} initialBodyOverflow
    	   */
    	  var replaceScrollbarWithPadding = function replaceScrollbarWithPadding(initialBodyOverflow) {
    	    // for queues, do not do this more than once
    	    if (previousBodyPadding !== null) {
    	      return;
    	    }
    	    // if the body has overflow
    	    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    	    ) {
    	      // add padding so the content doesn't shift after removal of scrollbar
    	      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    	      document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
    	    }
    	  };
    	  var undoReplaceScrollbarWithPadding = function undoReplaceScrollbarWithPadding() {
    	    if (previousBodyPadding !== null) {
    	      document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
    	      previousBodyPadding = null;
    	    }
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {HTMLElement} container
    	   * @param {boolean} returnFocus
    	   * @param {Function} didClose
    	   */
    	  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    	    if (isToast()) {
    	      triggerDidCloseAndDispose(instance, didClose);
    	    } else {
    	      restoreActiveElement(returnFocus).then(function () {
    	        return triggerDidCloseAndDispose(instance, didClose);
    	      });
    	      removeKeydownHandler(globalState);
    	    }

    	    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    	    // for some reason removing the container in Safari will scroll the document to bottom
    	    if (isSafariOrIOS) {
    	      container.setAttribute('style', 'display:none !important');
    	      container.removeAttribute('class');
    	      container.innerHTML = '';
    	    } else {
    	      container.remove();
    	    }
    	    if (isModal()) {
    	      undoReplaceScrollbarWithPadding();
    	      undoIOSfix();
    	      unsetAriaHidden();
    	    }
    	    removeBodyClasses();
    	  }

    	  /**
    	   * Remove SweetAlert2 classes from body
    	   */
    	  function removeBodyClasses() {
    	    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
    	  }

    	  /**
    	   * Instance method to close sweetAlert
    	   *
    	   * @param {any} resolveValue
    	   */
    	  function close(resolveValue) {
    	    resolveValue = prepareResolveValue(resolveValue);
    	    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    	    var didClose = triggerClosePopup(this);
    	    if (this.isAwaitingPromise) {
    	      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
    	      if (!resolveValue.isDismissed) {
    	        handleAwaitingPromise(this);
    	        swalPromiseResolve(resolveValue);
    	      }
    	    } else if (didClose) {
    	      // Resolve Swal promise
    	      swalPromiseResolve(resolveValue);
    	    }
    	  }
    	  var triggerClosePopup = function triggerClosePopup(instance) {
    	    var popup = getPopup();
    	    if (!popup) {
    	      return false;
    	    }
    	    var innerParams = privateProps.innerParams.get(instance);
    	    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
    	      return false;
    	    }
    	    removeClass(popup, innerParams.showClass.popup);
    	    addClass(popup, innerParams.hideClass.popup);
    	    var backdrop = getContainer();
    	    removeClass(backdrop, innerParams.showClass.backdrop);
    	    addClass(backdrop, innerParams.hideClass.backdrop);
    	    handlePopupAnimation(instance, popup, innerParams);
    	    return true;
    	  };

    	  /**
    	   * @param {any} error
    	   */
    	  function rejectPromise(error) {
    	    var rejectPromise = privateMethods.swalPromiseReject.get(this);
    	    handleAwaitingPromise(this);
    	    if (rejectPromise) {
    	      // Reject Swal promise
    	      rejectPromise(error);
    	    }
    	  }

    	  /**
    	   * @param {SweetAlert} instance
    	   */
    	  var handleAwaitingPromise = function handleAwaitingPromise(instance) {
    	    if (instance.isAwaitingPromise) {
    	      delete instance.isAwaitingPromise;
    	      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
    	      if (!privateProps.innerParams.get(instance)) {
    	        instance._destroy();
    	      }
    	    }
    	  };

    	  /**
    	   * @param {any} resolveValue
    	   * @returns {SweetAlertResult}
    	   */
    	  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    	    // When user calls Swal.close()
    	    if (typeof resolveValue === 'undefined') {
    	      return {
    	        isConfirmed: false,
    	        isDenied: false,
    	        isDismissed: true
    	      };
    	    }
    	    return Object.assign({
    	      isConfirmed: false,
    	      isDenied: false,
    	      isDismissed: false
    	    }, resolveValue);
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {HTMLElement} popup
    	   * @param {SweetAlertOptions} innerParams
    	   */
    	  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    	    var container = getContainer();
    	    // If animation is supported, animate
    	    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    	    if (typeof innerParams.willClose === 'function') {
    	      innerParams.willClose(popup);
    	    }
    	    if (animationIsSupported) {
    	      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    	    } else {
    	      // Otherwise, remove immediately
    	      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {HTMLElement} popup
    	   * @param {HTMLElement} container
    	   * @param {boolean} returnFocus
    	   * @param {Function} didClose
    	   */
    	  var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
    	    if (!animationEndEvent) {
    	      return;
    	    }
    	    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    	    popup.addEventListener(animationEndEvent, function (e) {
    	      if (e.target === popup) {
    	        globalState.swalCloseEventFinishedCallback();
    	        delete globalState.swalCloseEventFinishedCallback;
    	      }
    	    });
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {Function} didClose
    	   */
    	  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    	    setTimeout(function () {
    	      if (typeof didClose === 'function') {
    	        didClose.bind(instance.params)();
    	      }
    	      // instance might have been destroyed already
    	      if (instance._destroy) {
    	        instance._destroy();
    	      }
    	    });
    	  };

    	  /**
    	   * Shows loader (spinner), this is useful with AJAX requests.
    	   * By default the loader be shown instead of the "Confirm" button.
    	   *
    	   * @param {HTMLButtonElement | null} [buttonToReplace]
    	   */
    	  var showLoading = function showLoading(buttonToReplace) {
    	    var popup = getPopup();
    	    if (!popup) {
    	      new Swal(); // eslint-disable-line no-new
    	    }
    	    popup = getPopup();
    	    if (!popup) {
    	      return;
    	    }
    	    var loader = getLoader();
    	    if (isToast()) {
    	      hide(getIcon());
    	    } else {
    	      replaceButton(popup, buttonToReplace);
    	    }
    	    show(loader);
    	    popup.setAttribute('data-loading', 'true');
    	    popup.setAttribute('aria-busy', 'true');
    	    popup.focus();
    	  };

    	  /**
    	   * @param {HTMLElement} popup
    	   * @param {HTMLButtonElement | null} [buttonToReplace]
    	   */
    	  var replaceButton = function replaceButton(popup, buttonToReplace) {
    	    var actions = getActions();
    	    var loader = getLoader();
    	    if (!actions || !loader) {
    	      return;
    	    }
    	    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
    	      buttonToReplace = getConfirmButton();
    	    }
    	    show(actions);
    	    if (buttonToReplace) {
    	      hide(buttonToReplace);
    	      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    	      actions.insertBefore(loader, buttonToReplace);
    	    }
    	    addClass([popup, actions], swalClasses.loading);
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    	    if (params.input === 'select' || params.input === 'radio') {
    	      handleInputOptions(instance, params);
    	    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(function (i) {
    	      return i === params.input;
    	    }) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
    	      showLoading(getConfirmButton());
    	      handleInputValue(instance, params);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} innerParams
    	   * @returns {SweetAlertInputValue}
    	   */
    	  var getInputValue = function getInputValue(instance, innerParams) {
    	    var input = instance.getInput();
    	    if (!input) {
    	      return null;
    	    }
    	    switch (innerParams.input) {
    	      case 'checkbox':
    	        return getCheckboxValue(input);
    	      case 'radio':
    	        return getRadioValue(input);
    	      case 'file':
    	        return getFileValue(input);
    	      default:
    	        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    	    }
    	  };

    	  /**
    	   * @param {HTMLInputElement} input
    	   * @returns {number}
    	   */
    	  var getCheckboxValue = function getCheckboxValue(input) {
    	    return input.checked ? 1 : 0;
    	  };

    	  /**
    	   * @param {HTMLInputElement} input
    	   * @returns {string | null}
    	   */
    	  var getRadioValue = function getRadioValue(input) {
    	    return input.checked ? input.value : null;
    	  };

    	  /**
    	   * @param {HTMLInputElement} input
    	   * @returns {FileList | File | null}
    	   */
    	  var getFileValue = function getFileValue(input) {
    	    return input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var handleInputOptions = function handleInputOptions(instance, params) {
    	    var popup = getPopup();
    	    if (!popup) {
    	      return;
    	    }
    	    /**
    	     * @param {Record<string, any>} inputOptions
    	     */
    	    var processInputOptions = function processInputOptions(inputOptions) {
    	      if (params.input === 'select') {
    	        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
    	      } else if (params.input === 'radio') {
    	        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
    	      }
    	    };
    	    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
    	      showLoading(getConfirmButton());
    	      asPromise(params.inputOptions).then(function (inputOptions) {
    	        instance.hideLoading();
    	        processInputOptions(inputOptions);
    	      });
    	    } else if (_typeof(params.inputOptions) === 'object') {
    	      processInputOptions(params.inputOptions);
    	    } else {
    	      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    	    }
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertOptions} params
    	   */
    	  var handleInputValue = function handleInputValue(instance, params) {
    	    var input = instance.getInput();
    	    if (!input) {
    	      return;
    	    }
    	    hide(input);
    	    asPromise(params.inputValue).then(function (inputValue) {
    	      input.value = params.input === 'number' ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
    	      show(input);
    	      input.focus();
    	      instance.hideLoading();
    	    })["catch"](function (err) {
    	      error("Error in inputValue promise: ".concat(err));
    	      input.value = '';
    	      show(input);
    	      input.focus();
    	      instance.hideLoading();
    	    });
    	  };

    	  /**
    	   * @param {HTMLElement} popup
    	   * @param {InputOptionFlattened[]} inputOptions
    	   * @param {SweetAlertOptions} params
    	   */
    	  function populateSelectOptions(popup, inputOptions, params) {
    	    var select = getDirectChildByClass(popup, swalClasses.select);
    	    if (!select) {
    	      return;
    	    }
    	    /**
    	     * @param {HTMLElement} parent
    	     * @param {string} optionLabel
    	     * @param {string} optionValue
    	     */
    	    var renderOption = function renderOption(parent, optionLabel, optionValue) {
    	      var option = document.createElement('option');
    	      option.value = optionValue;
    	      setInnerHtml(option, optionLabel);
    	      option.selected = isSelected(optionValue, params.inputValue);
    	      parent.appendChild(option);
    	    };
    	    inputOptions.forEach(function (inputOption) {
    	      var optionValue = inputOption[0];
    	      var optionLabel = inputOption[1];
    	      // <optgroup> spec:
    	      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
    	      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
    	      // check whether this is a <optgroup>
    	      if (Array.isArray(optionLabel)) {
    	        // if it is an array, then it is an <optgroup>
    	        var optgroup = document.createElement('optgroup');
    	        optgroup.label = optionValue;
    	        optgroup.disabled = false; // not configurable for now
    	        select.appendChild(optgroup);
    	        optionLabel.forEach(function (o) {
    	          return renderOption(optgroup, o[1], o[0]);
    	        });
    	      } else {
    	        // case of <option>
    	        renderOption(select, optionLabel, optionValue);
    	      }
    	    });
    	    select.focus();
    	  }

    	  /**
    	   * @param {HTMLElement} popup
    	   * @param {InputOptionFlattened[]} inputOptions
    	   * @param {SweetAlertOptions} params
    	   */
    	  function populateRadioOptions(popup, inputOptions, params) {
    	    var radio = getDirectChildByClass(popup, swalClasses.radio);
    	    if (!radio) {
    	      return;
    	    }
    	    inputOptions.forEach(function (inputOption) {
    	      var radioValue = inputOption[0];
    	      var radioLabel = inputOption[1];
    	      var radioInput = document.createElement('input');
    	      var radioLabelElement = document.createElement('label');
    	      radioInput.type = 'radio';
    	      radioInput.name = swalClasses.radio;
    	      radioInput.value = radioValue;
    	      if (isSelected(radioValue, params.inputValue)) {
    	        radioInput.checked = true;
    	      }
    	      var label = document.createElement('span');
    	      setInnerHtml(label, radioLabel);
    	      label.className = swalClasses.label;
    	      radioLabelElement.appendChild(radioInput);
    	      radioLabelElement.appendChild(label);
    	      radio.appendChild(radioLabelElement);
    	    });
    	    var radios = radio.querySelectorAll('input');
    	    if (radios.length) {
    	      radios[0].focus();
    	    }
    	  }

    	  /**
    	   * Converts `inputOptions` into an array of `[value, label]`s
    	   *
    	   * @param {Record<string, any>} inputOptions
    	   * @typedef {string[]} InputOptionFlattened
    	   * @returns {InputOptionFlattened[]}
    	   */
    	  var formatInputOptions = function formatInputOptions(inputOptions) {
    	    /** @type {InputOptionFlattened[]} */
    	    var result = [];
    	    if (inputOptions instanceof Map) {
    	      inputOptions.forEach(function (value, key) {
    	        var valueFormatted = value;
    	        if (_typeof(valueFormatted) === 'object') {
    	          // case of <optgroup>
    	          valueFormatted = formatInputOptions(valueFormatted);
    	        }
    	        result.push([key, valueFormatted]);
    	      });
    	    } else {
    	      Object.keys(inputOptions).forEach(function (key) {
    	        var valueFormatted = inputOptions[key];
    	        if (_typeof(valueFormatted) === 'object') {
    	          // case of <optgroup>
    	          valueFormatted = formatInputOptions(valueFormatted);
    	        }
    	        result.push([key, valueFormatted]);
    	      });
    	    }
    	    return result;
    	  };

    	  /**
    	   * @param {string} optionValue
    	   * @param {SweetAlertInputValue} inputValue
    	   * @returns {boolean}
    	   */
    	  var isSelected = function isSelected(optionValue, inputValue) {
    	    return !!inputValue && inputValue.toString() === optionValue.toString();
    	  };

    	  var _this = undefined;

    	  /**
    	   * @param {SweetAlert} instance
    	   */
    	  var handleConfirmButtonClick = function handleConfirmButtonClick(instance) {
    	    var innerParams = privateProps.innerParams.get(instance);
    	    instance.disableButtons();
    	    if (innerParams.input) {
    	      handleConfirmOrDenyWithInput(instance, 'confirm');
    	    } else {
    	      confirm(instance, true);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   */
    	  var handleDenyButtonClick = function handleDenyButtonClick(instance) {
    	    var innerParams = privateProps.innerParams.get(instance);
    	    instance.disableButtons();
    	    if (innerParams.returnInputValueOnDeny) {
    	      handleConfirmOrDenyWithInput(instance, 'deny');
    	    } else {
    	      deny(instance, false);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {Function} dismissWith
    	   */
    	  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    	    instance.disableButtons();
    	    dismissWith(DismissReason.cancel);
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {'confirm' | 'deny'} type
    	   */
    	  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, type) {
    	    var innerParams = privateProps.innerParams.get(instance);
    	    if (!innerParams.input) {
    	      error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
    	      return;
    	    }
    	    var input = instance.getInput();
    	    var inputValue = getInputValue(instance, innerParams);
    	    if (innerParams.inputValidator) {
    	      handleInputValidator(instance, inputValue, type);
    	    } else if (input && !input.checkValidity()) {
    	      instance.enableButtons();
    	      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    	    } else if (type === 'deny') {
    	      deny(instance, inputValue);
    	    } else {
    	      confirm(instance, inputValue);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {SweetAlertInputValue} inputValue
    	   * @param {'confirm' | 'deny'} type
    	   */
    	  var handleInputValidator = function handleInputValidator(instance, inputValue, type) {
    	    var innerParams = privateProps.innerParams.get(instance);
    	    instance.disableInput();
    	    var validationPromise = Promise.resolve().then(function () {
    	      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    	    });
    	    validationPromise.then(function (validationMessage) {
    	      instance.enableButtons();
    	      instance.enableInput();
    	      if (validationMessage) {
    	        instance.showValidationMessage(validationMessage);
    	      } else if (type === 'deny') {
    	        deny(instance, inputValue);
    	      } else {
    	        confirm(instance, inputValue);
    	      }
    	    });
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {any} value
    	   */
    	  var deny = function deny(instance, value) {
    	    var innerParams = privateProps.innerParams.get(instance || _this);
    	    if (innerParams.showLoaderOnDeny) {
    	      showLoading(getDenyButton());
    	    }
    	    if (innerParams.preDeny) {
    	      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
    	      var preDenyPromise = Promise.resolve().then(function () {
    	        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
    	      });
    	      preDenyPromise.then(function (preDenyValue) {
    	        if (preDenyValue === false) {
    	          instance.hideLoading();
    	          handleAwaitingPromise(instance);
    	        } else {
    	          instance.close({
    	            isDenied: true,
    	            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
    	          });
    	        }
    	      })["catch"](function (error) {
    	        return rejectWith(instance || _this, error);
    	      });
    	    } else {
    	      instance.close({
    	        isDenied: true,
    	        value: value
    	      });
    	    }
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {any} value
    	   */
    	  var succeedWith = function succeedWith(instance, value) {
    	    instance.close({
    	      isConfirmed: true,
    	      value: value
    	    });
    	  };

    	  /**
    	   *
    	   * @param {SweetAlert} instance
    	   * @param {string} error
    	   */
    	  var rejectWith = function rejectWith(instance, error) {
    	    instance.rejectPromise(error);
    	  };

    	  /**
    	   *
    	   * @param {SweetAlert} instance
    	   * @param {any} value
    	   */
    	  var confirm = function confirm(instance, value) {
    	    var innerParams = privateProps.innerParams.get(instance || _this);
    	    if (innerParams.showLoaderOnConfirm) {
    	      showLoading();
    	    }
    	    if (innerParams.preConfirm) {
    	      instance.resetValidationMessage();
    	      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
    	      var preConfirmPromise = Promise.resolve().then(function () {
    	        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
    	      });
    	      preConfirmPromise.then(function (preConfirmValue) {
    	        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
    	          instance.hideLoading();
    	          handleAwaitingPromise(instance);
    	        } else {
    	          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
    	        }
    	      })["catch"](function (error) {
    	        return rejectWith(instance || _this, error);
    	      });
    	    } else {
    	      succeedWith(instance, value);
    	    }
    	  };

    	  /**
    	   * Hides loader and shows back the button which was hidden by .showLoading()
    	   */
    	  function hideLoading() {
    	    // do nothing if popup is closed
    	    var innerParams = privateProps.innerParams.get(this);
    	    if (!innerParams) {
    	      return;
    	    }
    	    var domCache = privateProps.domCache.get(this);
    	    hide(domCache.loader);
    	    if (isToast()) {
    	      if (innerParams.icon) {
    	        show(getIcon());
    	      }
    	    } else {
    	      showRelatedButton(domCache);
    	    }
    	    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    	    domCache.popup.removeAttribute('aria-busy');
    	    domCache.popup.removeAttribute('data-loading');
    	    domCache.confirmButton.disabled = false;
    	    domCache.denyButton.disabled = false;
    	    domCache.cancelButton.disabled = false;
    	  }
    	  var showRelatedButton = function showRelatedButton(domCache) {
    	    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    	    if (buttonToReplace.length) {
    	      show(buttonToReplace[0], 'inline-block');
    	    } else if (allButtonsAreHidden()) {
    	      hide(domCache.actions);
    	    }
    	  };

    	  /**
    	   * Gets the input DOM node, this method works with input parameter.
    	   *
    	   * @returns {HTMLInputElement | null}
    	   */
    	  function getInput() {
    	    var innerParams = privateProps.innerParams.get(this);
    	    var domCache = privateProps.domCache.get(this);
    	    if (!domCache) {
    	      return null;
    	    }
    	    return getInput$1(domCache.popup, innerParams.input);
    	  }

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {string[]} buttons
    	   * @param {boolean} disabled
    	   */
    	  function setButtonsDisabled(instance, buttons, disabled) {
    	    var domCache = privateProps.domCache.get(instance);
    	    buttons.forEach(function (button) {
    	      domCache[button].disabled = disabled;
    	    });
    	  }

    	  /**
    	   * @param {HTMLInputElement | null} input
    	   * @param {boolean} disabled
    	   */
    	  function setInputDisabled(input, disabled) {
    	    var popup = getPopup();
    	    if (!popup || !input) {
    	      return;
    	    }
    	    if (input.type === 'radio') {
    	      /** @type {NodeListOf<HTMLInputElement>} */
    	      var radios = popup.querySelectorAll("[name=\"".concat(swalClasses.radio, "\"]"));
    	      for (var i = 0; i < radios.length; i++) {
    	        radios[i].disabled = disabled;
    	      }
    	    } else {
    	      input.disabled = disabled;
    	    }
    	  }

    	  /**
    	   * Enable all the buttons
    	   * @this {SweetAlert}
    	   */
    	  function enableButtons() {
    	    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
    	  }

    	  /**
    	   * Disable all the buttons
    	   * @this {SweetAlert}
    	   */
    	  function disableButtons() {
    	    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
    	  }

    	  /**
    	   * Enable the input field
    	   * @this {SweetAlert}
    	   */
    	  function enableInput() {
    	    setInputDisabled(this.getInput(), false);
    	  }

    	  /**
    	   * Disable the input field
    	   * @this {SweetAlert}
    	   */
    	  function disableInput() {
    	    setInputDisabled(this.getInput(), true);
    	  }

    	  /**
    	   * Show block with validation message
    	   *
    	   * @param {string} error
    	   * @this {SweetAlert}
    	   */
    	  function showValidationMessage(error) {
    	    var domCache = privateProps.domCache.get(this);
    	    var params = privateProps.innerParams.get(this);
    	    setInnerHtml(domCache.validationMessage, error);
    	    domCache.validationMessage.className = swalClasses['validation-message'];
    	    if (params.customClass && params.customClass.validationMessage) {
    	      addClass(domCache.validationMessage, params.customClass.validationMessage);
    	    }
    	    show(domCache.validationMessage);
    	    var input = this.getInput();
    	    if (input) {
    	      input.setAttribute('aria-invalid', 'true');
    	      input.setAttribute('aria-describedby', swalClasses['validation-message']);
    	      focusInput(input);
    	      addClass(input, swalClasses.inputerror);
    	    }
    	  }

    	  /**
    	   * Hide block with validation message
    	   *
    	   * @this {SweetAlert}
    	   */
    	  function resetValidationMessage() {
    	    var domCache = privateProps.domCache.get(this);
    	    if (domCache.validationMessage) {
    	      hide(domCache.validationMessage);
    	    }
    	    var input = this.getInput();
    	    if (input) {
    	      input.removeAttribute('aria-invalid');
    	      input.removeAttribute('aria-describedby');
    	      removeClass(input, swalClasses.inputerror);
    	    }
    	  }

    	  var defaultParams = {
    	    title: '',
    	    titleText: '',
    	    text: '',
    	    html: '',
    	    footer: '',
    	    icon: undefined,
    	    iconColor: undefined,
    	    iconHtml: undefined,
    	    template: undefined,
    	    toast: false,
    	    animation: true,
    	    showClass: {
    	      popup: 'swal2-show',
    	      backdrop: 'swal2-backdrop-show',
    	      icon: 'swal2-icon-show'
    	    },
    	    hideClass: {
    	      popup: 'swal2-hide',
    	      backdrop: 'swal2-backdrop-hide',
    	      icon: 'swal2-icon-hide'
    	    },
    	    customClass: {},
    	    target: 'body',
    	    color: undefined,
    	    backdrop: true,
    	    heightAuto: true,
    	    allowOutsideClick: true,
    	    allowEscapeKey: true,
    	    allowEnterKey: true,
    	    stopKeydownPropagation: true,
    	    keydownListenerCapture: false,
    	    showConfirmButton: true,
    	    showDenyButton: false,
    	    showCancelButton: false,
    	    preConfirm: undefined,
    	    preDeny: undefined,
    	    confirmButtonText: 'OK',
    	    confirmButtonAriaLabel: '',
    	    confirmButtonColor: undefined,
    	    denyButtonText: 'No',
    	    denyButtonAriaLabel: '',
    	    denyButtonColor: undefined,
    	    cancelButtonText: 'Cancel',
    	    cancelButtonAriaLabel: '',
    	    cancelButtonColor: undefined,
    	    buttonsStyling: true,
    	    reverseButtons: false,
    	    focusConfirm: true,
    	    focusDeny: false,
    	    focusCancel: false,
    	    returnFocus: true,
    	    showCloseButton: false,
    	    closeButtonHtml: '&times;',
    	    closeButtonAriaLabel: 'Close this dialog',
    	    loaderHtml: '',
    	    showLoaderOnConfirm: false,
    	    showLoaderOnDeny: false,
    	    imageUrl: undefined,
    	    imageWidth: undefined,
    	    imageHeight: undefined,
    	    imageAlt: '',
    	    timer: undefined,
    	    timerProgressBar: false,
    	    width: undefined,
    	    padding: undefined,
    	    background: undefined,
    	    input: undefined,
    	    inputPlaceholder: '',
    	    inputLabel: '',
    	    inputValue: '',
    	    inputOptions: {},
    	    inputAutoFocus: true,
    	    inputAutoTrim: true,
    	    inputAttributes: {},
    	    inputValidator: undefined,
    	    returnInputValueOnDeny: false,
    	    validationMessage: undefined,
    	    grow: false,
    	    position: 'center',
    	    progressSteps: [],
    	    currentProgressStep: undefined,
    	    progressStepsDistance: undefined,
    	    willOpen: undefined,
    	    didOpen: undefined,
    	    didRender: undefined,
    	    willClose: undefined,
    	    didClose: undefined,
    	    didDestroy: undefined,
    	    scrollbarPadding: true
    	  };
    	  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];

    	  /** @type {Record<string, string>} */
    	  var deprecatedParams = {};
    	  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

    	  /**
    	   * Is valid parameter
    	   *
    	   * @param {string} paramName
    	   * @returns {boolean}
    	   */
    	  var isValidParameter = function isValidParameter(paramName) {
    	    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
    	  };

    	  /**
    	   * Is valid parameter for Swal.update() method
    	   *
    	   * @param {string} paramName
    	   * @returns {boolean}
    	   */
    	  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    	    return updatableParams.indexOf(paramName) !== -1;
    	  };

    	  /**
    	   * Is deprecated parameter
    	   *
    	   * @param {string} paramName
    	   * @returns {string | undefined}
    	   */
    	  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    	    return deprecatedParams[paramName];
    	  };

    	  /**
    	   * @param {string} param
    	   */
    	  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    	    if (!isValidParameter(param)) {
    	      warn("Unknown parameter \"".concat(param, "\""));
    	    }
    	  };

    	  /**
    	   * @param {string} param
    	   */
    	  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    	    if (toastIncompatibleParams.includes(param)) {
    	      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    	    }
    	  };

    	  /**
    	   * @param {string} param
    	   */
    	  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    	    var isDeprecated = isDeprecatedParameter(param);
    	    if (isDeprecated) {
    	      warnAboutDeprecation(param, isDeprecated);
    	    }
    	  };

    	  /**
    	   * Show relevant warnings for given params
    	   *
    	   * @param {SweetAlertOptions} params
    	   */
    	  var showWarningsForParams = function showWarningsForParams(params) {
    	    if (params.backdrop === false && params.allowOutsideClick) {
    	      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    	    }
    	    for (var param in params) {
    	      checkIfParamIsValid(param);
    	      if (params.toast) {
    	        checkIfToastParamIsValid(param);
    	      }
    	      checkIfParamIsDeprecated(param);
    	    }
    	  };

    	  /**
    	   * Updates popup parameters.
    	   *
    	   * @param {SweetAlertOptions} params
    	   */
    	  function update(params) {
    	    var popup = getPopup();
    	    var innerParams = privateProps.innerParams.get(this);
    	    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    	      warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    	      return;
    	    }
    	    var validUpdatableParams = filterValidParams(params);
    	    var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    	    render(this, updatedParams);
    	    privateProps.innerParams.set(this, updatedParams);
    	    Object.defineProperties(this, {
    	      params: {
    	        value: Object.assign({}, this.params, params),
    	        writable: false,
    	        enumerable: true
    	      }
    	    });
    	  }

    	  /**
    	   * @param {SweetAlertOptions} params
    	   * @returns {SweetAlertOptions}
    	   */
    	  var filterValidParams = function filterValidParams(params) {
    	    var validUpdatableParams = {};
    	    Object.keys(params).forEach(function (param) {
    	      if (isUpdatableParameter(param)) {
    	        validUpdatableParams[param] = params[param];
    	      } else {
    	        warn("Invalid parameter to update: ".concat(param));
    	      }
    	    });
    	    return validUpdatableParams;
    	  };

    	  /**
    	   * Dispose the current SweetAlert2 instance
    	   */
    	  function _destroy() {
    	    var domCache = privateProps.domCache.get(this);
    	    var innerParams = privateProps.innerParams.get(this);
    	    if (!innerParams) {
    	      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
    	      return; // This instance has already been destroyed
    	    }

    	    // Check if there is another Swal closing
    	    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
    	      globalState.swalCloseEventFinishedCallback();
    	      delete globalState.swalCloseEventFinishedCallback;
    	    }
    	    if (typeof innerParams.didDestroy === 'function') {
    	      innerParams.didDestroy();
    	    }
    	    disposeSwal(this);
    	  }

    	  /**
    	   * @param {SweetAlert} instance
    	   */
    	  var disposeSwal = function disposeSwal(instance) {
    	    disposeWeakMaps(instance);
    	    // Unset this.params so GC will dispose it (#1569)
    	    delete instance.params;
    	    // Unset globalState props so GC will dispose globalState (#1569)
    	    delete globalState.keydownHandler;
    	    delete globalState.keydownTarget;
    	    // Unset currentInstance
    	    delete globalState.currentInstance;
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   */
    	  var disposeWeakMaps = function disposeWeakMaps(instance) {
    	    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    	    if (instance.isAwaitingPromise) {
    	      unsetWeakMaps(privateProps, instance);
    	      instance.isAwaitingPromise = true;
    	    } else {
    	      unsetWeakMaps(privateMethods, instance);
    	      unsetWeakMaps(privateProps, instance);
    	      delete instance.isAwaitingPromise;
    	      // Unset instance methods
    	      delete instance.disableButtons;
    	      delete instance.enableButtons;
    	      delete instance.getInput;
    	      delete instance.disableInput;
    	      delete instance.enableInput;
    	      delete instance.hideLoading;
    	      delete instance.disableLoading;
    	      delete instance.showValidationMessage;
    	      delete instance.resetValidationMessage;
    	      delete instance.close;
    	      delete instance.closePopup;
    	      delete instance.closeModal;
    	      delete instance.closeToast;
    	      delete instance.rejectPromise;
    	      delete instance.update;
    	      delete instance._destroy;
    	    }
    	  };

    	  /**
    	   * @param {object} obj
    	   * @param {SweetAlert} instance
    	   */
    	  var unsetWeakMaps = function unsetWeakMaps(obj, instance) {
    	    for (var i in obj) {
    	      obj[i]["delete"](instance);
    	    }
    	  };

    	  var instanceMethods = /*#__PURE__*/Object.freeze({
    	    __proto__: null,
    	    _destroy: _destroy,
    	    close: close,
    	    closeModal: close,
    	    closePopup: close,
    	    closeToast: close,
    	    disableButtons: disableButtons,
    	    disableInput: disableInput,
    	    disableLoading: hideLoading,
    	    enableButtons: enableButtons,
    	    enableInput: enableInput,
    	    getInput: getInput,
    	    handleAwaitingPromise: handleAwaitingPromise,
    	    hideLoading: hideLoading,
    	    rejectPromise: rejectPromise,
    	    resetValidationMessage: resetValidationMessage,
    	    showValidationMessage: showValidationMessage,
    	    update: update
    	  });

    	  /**
    	   * @param {SweetAlertOptions} innerParams
    	   * @param {DomCache} domCache
    	   * @param {Function} dismissWith
    	   */
    	  var handlePopupClick = function handlePopupClick(innerParams, domCache, dismissWith) {
    	    if (innerParams.toast) {
    	      handleToastClick(innerParams, domCache, dismissWith);
    	    } else {
    	      // Ignore click events that had mousedown on the popup but mouseup on the container
    	      // This can happen when the user drags a slider
    	      handleModalMousedown(domCache);

    	      // Ignore click events that had mousedown on the container but mouseup on the popup
    	      handleContainerMousedown(domCache);
    	      handleModalClick(innerParams, domCache, dismissWith);
    	    }
    	  };

    	  /**
    	   * @param {SweetAlertOptions} innerParams
    	   * @param {DomCache} domCache
    	   * @param {Function} dismissWith
    	   */
    	  var handleToastClick = function handleToastClick(innerParams, domCache, dismissWith) {
    	    // Closing toast by internal click
    	    domCache.popup.onclick = function () {
    	      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
    	        return;
    	      }
    	      dismissWith(DismissReason.close);
    	    };
    	  };

    	  /**
    	   * @param {SweetAlertOptions} innerParams
    	   * @returns {boolean}
    	   */
    	  var isAnyButtonShown = function isAnyButtonShown(innerParams) {
    	    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
    	  };
    	  var ignoreOutsideClick = false;

    	  /**
    	   * @param {DomCache} domCache
    	   */
    	  var handleModalMousedown = function handleModalMousedown(domCache) {
    	    domCache.popup.onmousedown = function () {
    	      domCache.container.onmouseup = function (e) {
    	        domCache.container.onmouseup = function () {};
    	        // We only check if the mouseup target is the container because usually it doesn't
    	        // have any other direct children aside of the popup
    	        if (e.target === domCache.container) {
    	          ignoreOutsideClick = true;
    	        }
    	      };
    	    };
    	  };

    	  /**
    	   * @param {DomCache} domCache
    	   */
    	  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    	    domCache.container.onmousedown = function () {
    	      domCache.popup.onmouseup = function (e) {
    	        domCache.popup.onmouseup = function () {};
    	        // We also need to check if the mouseup target is a child of the popup
    	        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
    	          ignoreOutsideClick = true;
    	        }
    	      };
    	    };
    	  };

    	  /**
    	   * @param {SweetAlertOptions} innerParams
    	   * @param {DomCache} domCache
    	   * @param {Function} dismissWith
    	   */
    	  var handleModalClick = function handleModalClick(innerParams, domCache, dismissWith) {
    	    domCache.container.onclick = function (e) {
    	      if (ignoreOutsideClick) {
    	        ignoreOutsideClick = false;
    	        return;
    	      }
    	      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
    	        dismissWith(DismissReason.backdrop);
    	      }
    	    };
    	  };

    	  var isJqueryElement = function isJqueryElement(elem) {
    	    return _typeof(elem) === 'object' && elem.jquery;
    	  };
    	  var isElement = function isElement(elem) {
    	    return elem instanceof Element || isJqueryElement(elem);
    	  };
    	  var argsToParams = function argsToParams(args) {
    	    var params = {};
    	    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
    	      Object.assign(params, args[0]);
    	    } else {
    	      ['title', 'html', 'icon'].forEach(function (name, index) {
    	        var arg = args[index];
    	        if (typeof arg === 'string' || isElement(arg)) {
    	          params[name] = arg;
    	        } else if (arg !== undefined) {
    	          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
    	        }
    	      });
    	    }
    	    return params;
    	  };

    	  /**
    	   * Main method to create a new SweetAlert2 popup
    	   *
    	   * @param  {...SweetAlertOptions} args
    	   * @returns {Promise<SweetAlertResult>}
    	   */
    	  function fire() {
    	    var Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
    	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    	      args[_key] = arguments[_key];
    	    }
    	    return _construct(Swal, args);
    	  }

    	  /**
    	   * Returns an extended version of `Swal` containing `params` as defaults.
    	   * Useful for reusing Swal configuration.
    	   *
    	   * For example:
    	   *
    	   * Before:
    	   * const textPromptOptions = { input: 'text', showCancelButton: true }
    	   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
    	   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
    	   *
    	   * After:
    	   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
    	   * const {value: firstName} = await TextPrompt('What is your first name?')
    	   * const {value: lastName} = await TextPrompt('What is your last name?')
    	   *
    	   * @param {SweetAlertOptions} mixinParams
    	   * @returns {SweetAlert}
    	   */
    	  function mixin(mixinParams) {
    	    var MixinSwal = /*#__PURE__*/function (_this) {
    	      _inherits(MixinSwal, _this);
    	      function MixinSwal() {
    	        _classCallCheck(this, MixinSwal);
    	        return _callSuper(this, MixinSwal, arguments);
    	      }
    	      _createClass(MixinSwal, [{
    	        key: "_main",
    	        value: function _main(params, priorityMixinParams) {
    	          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
    	        }
    	      }]);
    	      return MixinSwal;
    	    }(this); // @ts-ignore
    	    return MixinSwal;
    	  }

    	  /**
    	   * If `timer` parameter is set, returns number of milliseconds of timer remained.
    	   * Otherwise, returns undefined.
    	   *
    	   * @returns {number | undefined}
    	   */
    	  var getTimerLeft = function getTimerLeft() {
    	    return globalState.timeout && globalState.timeout.getTimerLeft();
    	  };

    	  /**
    	   * Stop timer. Returns number of milliseconds of timer remained.
    	   * If `timer` parameter isn't set, returns undefined.
    	   *
    	   * @returns {number | undefined}
    	   */
    	  var stopTimer = function stopTimer() {
    	    if (globalState.timeout) {
    	      stopTimerProgressBar();
    	      return globalState.timeout.stop();
    	    }
    	  };

    	  /**
    	   * Resume timer. Returns number of milliseconds of timer remained.
    	   * If `timer` parameter isn't set, returns undefined.
    	   *
    	   * @returns {number | undefined}
    	   */
    	  var resumeTimer = function resumeTimer() {
    	    if (globalState.timeout) {
    	      var remaining = globalState.timeout.start();
    	      animateTimerProgressBar(remaining);
    	      return remaining;
    	    }
    	  };

    	  /**
    	   * Resume timer. Returns number of milliseconds of timer remained.
    	   * If `timer` parameter isn't set, returns undefined.
    	   *
    	   * @returns {number | undefined}
    	   */
    	  var toggleTimer = function toggleTimer() {
    	    var timer = globalState.timeout;
    	    return timer && (timer.running ? stopTimer() : resumeTimer());
    	  };

    	  /**
    	   * Increase timer. Returns number of milliseconds of an updated timer.
    	   * If `timer` parameter isn't set, returns undefined.
    	   *
    	   * @param {number} ms
    	   * @returns {number | undefined}
    	   */
    	  var increaseTimer = function increaseTimer(ms) {
    	    if (globalState.timeout) {
    	      var remaining = globalState.timeout.increase(ms);
    	      animateTimerProgressBar(remaining, true);
    	      return remaining;
    	    }
    	  };

    	  /**
    	   * Check if timer is running. Returns true if timer is running
    	   * or false if timer is paused or stopped.
    	   * If `timer` parameter isn't set, returns undefined
    	   *
    	   * @returns {boolean}
    	   */
    	  var isTimerRunning = function isTimerRunning() {
    	    return !!(globalState.timeout && globalState.timeout.isRunning());
    	  };

    	  var bodyClickListenerAdded = false;
    	  var clickHandlers = {};

    	  /**
    	   * @param {string} attr
    	   */
    	  function bindClickHandler() {
    	    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    	    clickHandlers[attr] = this;
    	    if (!bodyClickListenerAdded) {
    	      document.body.addEventListener('click', bodyClickListener);
    	      bodyClickListenerAdded = true;
    	    }
    	  }
    	  var bodyClickListener = function bodyClickListener(event) {
    	    for (var el = event.target; el && el !== document; el = el.parentNode) {
    	      for (var attr in clickHandlers) {
    	        var template = el.getAttribute(attr);
    	        if (template) {
    	          clickHandlers[attr].fire({
    	            template: template
    	          });
    	          return;
    	        }
    	      }
    	    }
    	  };

    	  var staticMethods = /*#__PURE__*/Object.freeze({
    	    __proto__: null,
    	    argsToParams: argsToParams,
    	    bindClickHandler: bindClickHandler,
    	    clickCancel: clickCancel,
    	    clickConfirm: clickConfirm,
    	    clickDeny: clickDeny,
    	    enableLoading: showLoading,
    	    fire: fire,
    	    getActions: getActions,
    	    getCancelButton: getCancelButton,
    	    getCloseButton: getCloseButton,
    	    getConfirmButton: getConfirmButton,
    	    getContainer: getContainer,
    	    getDenyButton: getDenyButton,
    	    getFocusableElements: getFocusableElements,
    	    getFooter: getFooter,
    	    getHtmlContainer: getHtmlContainer,
    	    getIcon: getIcon,
    	    getIconContent: getIconContent,
    	    getImage: getImage,
    	    getInputLabel: getInputLabel,
    	    getLoader: getLoader,
    	    getPopup: getPopup,
    	    getProgressSteps: getProgressSteps,
    	    getTimerLeft: getTimerLeft,
    	    getTimerProgressBar: getTimerProgressBar,
    	    getTitle: getTitle,
    	    getValidationMessage: getValidationMessage,
    	    increaseTimer: increaseTimer,
    	    isDeprecatedParameter: isDeprecatedParameter,
    	    isLoading: isLoading,
    	    isTimerRunning: isTimerRunning,
    	    isUpdatableParameter: isUpdatableParameter,
    	    isValidParameter: isValidParameter,
    	    isVisible: isVisible,
    	    mixin: mixin,
    	    resumeTimer: resumeTimer,
    	    showLoading: showLoading,
    	    stopTimer: stopTimer,
    	    toggleTimer: toggleTimer
    	  });

    	  var Timer = /*#__PURE__*/function () {
    	    /**
    	     * @param {Function} callback
    	     * @param {number} delay
    	     */
    	    function Timer(callback, delay) {
    	      _classCallCheck(this, Timer);
    	      this.callback = callback;
    	      this.remaining = delay;
    	      this.running = false;
    	      this.start();
    	    }

    	    /**
    	     * @returns {number}
    	     */
    	    _createClass(Timer, [{
    	      key: "start",
    	      value: function start() {
    	        if (!this.running) {
    	          this.running = true;
    	          this.started = new Date();
    	          this.id = setTimeout(this.callback, this.remaining);
    	        }
    	        return this.remaining;
    	      }

    	      /**
    	       * @returns {number}
    	       */
    	    }, {
    	      key: "stop",
    	      value: function stop() {
    	        if (this.started && this.running) {
    	          this.running = false;
    	          clearTimeout(this.id);
    	          this.remaining -= new Date().getTime() - this.started.getTime();
    	        }
    	        return this.remaining;
    	      }

    	      /**
    	       * @param {number} n
    	       * @returns {number}
    	       */
    	    }, {
    	      key: "increase",
    	      value: function increase(n) {
    	        var running = this.running;
    	        if (running) {
    	          this.stop();
    	        }
    	        this.remaining += n;
    	        if (running) {
    	          this.start();
    	        }
    	        return this.remaining;
    	      }

    	      /**
    	       * @returns {number}
    	       */
    	    }, {
    	      key: "getTimerLeft",
    	      value: function getTimerLeft() {
    	        if (this.running) {
    	          this.stop();
    	          this.start();
    	        }
    	        return this.remaining;
    	      }

    	      /**
    	       * @returns {boolean}
    	       */
    	    }, {
    	      key: "isRunning",
    	      value: function isRunning() {
    	        return this.running;
    	      }
    	    }]);
    	    return Timer;
    	  }();

    	  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

    	  /**
    	   * @param {SweetAlertOptions} params
    	   * @returns {SweetAlertOptions}
    	   */
    	  var getTemplateParams = function getTemplateParams(params) {
    	    /** @type {HTMLTemplateElement} */
    	    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    	    if (!template) {
    	      return {};
    	    }
    	    /** @type {DocumentFragment} */
    	    var templateContent = template.content;
    	    showWarningsForElements(templateContent);
    	    var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    	    return result;
    	  };

    	  /**
    	   * @param {DocumentFragment} templateContent
    	   * @returns {SweetAlertOptions}
    	   */
    	  var getSwalParams = function getSwalParams(templateContent) {
    	    var result = {};
    	    /** @type {HTMLElement[]} */
    	    var swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    	    swalParams.forEach(function (param) {
    	      showWarningsForAttributes(param, ['name', 'value']);
    	      var paramName = param.getAttribute('name');
    	      var value = param.getAttribute('value');
    	      if (typeof defaultParams[paramName] === 'boolean') {
    	        result[paramName] = value !== 'false';
    	      } else if (_typeof(defaultParams[paramName]) === 'object') {
    	        result[paramName] = JSON.parse(value);
    	      } else {
    	        result[paramName] = value;
    	      }
    	    });
    	    return result;
    	  };

    	  /**
    	   * @param {DocumentFragment} templateContent
    	   * @returns {SweetAlertOptions}
    	   */
    	  var getSwalFunctionParams = function getSwalFunctionParams(templateContent) {
    	    var result = {};
    	    /** @type {HTMLElement[]} */
    	    var swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    	    swalFunctions.forEach(function (param) {
    	      var paramName = param.getAttribute('name');
    	      var value = param.getAttribute('value');
    	      result[paramName] = new Function("return ".concat(value))();
    	    });
    	    return result;
    	  };

    	  /**
    	   * @param {DocumentFragment} templateContent
    	   * @returns {SweetAlertOptions}
    	   */
    	  var getSwalButtons = function getSwalButtons(templateContent) {
    	    var result = {};
    	    /** @type {HTMLElement[]} */
    	    var swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    	    swalButtons.forEach(function (button) {
    	      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
    	      var type = button.getAttribute('type');
    	      result["".concat(type, "ButtonText")] = button.innerHTML;
    	      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
    	      if (button.hasAttribute('color')) {
    	        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
    	      }
    	      if (button.hasAttribute('aria-label')) {
    	        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
    	      }
    	    });
    	    return result;
    	  };

    	  /**
    	   * @param {DocumentFragment} templateContent
    	   * @returns {SweetAlertOptions}
    	   */
    	  var getSwalImage = function getSwalImage(templateContent) {
    	    var result = {};
    	    /** @type {HTMLElement} */
    	    var image = templateContent.querySelector('swal-image');
    	    if (image) {
    	      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
    	      if (image.hasAttribute('src')) {
    	        result.imageUrl = image.getAttribute('src');
    	      }
    	      if (image.hasAttribute('width')) {
    	        result.imageWidth = image.getAttribute('width');
    	      }
    	      if (image.hasAttribute('height')) {
    	        result.imageHeight = image.getAttribute('height');
    	      }
    	      if (image.hasAttribute('alt')) {
    	        result.imageAlt = image.getAttribute('alt');
    	      }
    	    }
    	    return result;
    	  };

    	  /**
    	   * @param {DocumentFragment} templateContent
    	   * @returns {SweetAlertOptions}
    	   */
    	  var getSwalIcon = function getSwalIcon(templateContent) {
    	    var result = {};
    	    /** @type {HTMLElement} */
    	    var icon = templateContent.querySelector('swal-icon');
    	    if (icon) {
    	      showWarningsForAttributes(icon, ['type', 'color']);
    	      if (icon.hasAttribute('type')) {
    	        /** @type {SweetAlertIcon} */
    	        // @ts-ignore
    	        result.icon = icon.getAttribute('type');
    	      }
    	      if (icon.hasAttribute('color')) {
    	        result.iconColor = icon.getAttribute('color');
    	      }
    	      result.iconHtml = icon.innerHTML;
    	    }
    	    return result;
    	  };

    	  /**
    	   * @param {DocumentFragment} templateContent
    	   * @returns {SweetAlertOptions}
    	   */
    	  var getSwalInput = function getSwalInput(templateContent) {
    	    var result = {};
    	    /** @type {HTMLElement} */
    	    var input = templateContent.querySelector('swal-input');
    	    if (input) {
    	      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
    	      /** @type {SweetAlertInput} */
    	      // @ts-ignore
    	      result.input = input.getAttribute('type') || 'text';
    	      if (input.hasAttribute('label')) {
    	        result.inputLabel = input.getAttribute('label');
    	      }
    	      if (input.hasAttribute('placeholder')) {
    	        result.inputPlaceholder = input.getAttribute('placeholder');
    	      }
    	      if (input.hasAttribute('value')) {
    	        result.inputValue = input.getAttribute('value');
    	      }
    	    }
    	    /** @type {HTMLElement[]} */
    	    var inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    	    if (inputOptions.length) {
    	      result.inputOptions = {};
    	      inputOptions.forEach(function (option) {
    	        showWarningsForAttributes(option, ['value']);
    	        var optionValue = option.getAttribute('value');
    	        var optionName = option.innerHTML;
    	        result.inputOptions[optionValue] = optionName;
    	      });
    	    }
    	    return result;
    	  };

    	  /**
    	   * @param {DocumentFragment} templateContent
    	   * @param {string[]} paramNames
    	   * @returns {SweetAlertOptions}
    	   */
    	  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    	    var result = {};
    	    for (var i in paramNames) {
    	      var paramName = paramNames[i];
    	      /** @type {HTMLElement} */
    	      var tag = templateContent.querySelector(paramName);
    	      if (tag) {
    	        showWarningsForAttributes(tag, []);
    	        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
    	      }
    	    }
    	    return result;
    	  };

    	  /**
    	   * @param {DocumentFragment} templateContent
    	   */
    	  var showWarningsForElements = function showWarningsForElements(templateContent) {
    	    var allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    	    Array.from(templateContent.children).forEach(function (el) {
    	      var tagName = el.tagName.toLowerCase();
    	      if (!allowedElements.includes(tagName)) {
    	        warn("Unrecognized element <".concat(tagName, ">"));
    	      }
    	    });
    	  };

    	  /**
    	   * @param {HTMLElement} el
    	   * @param {string[]} allowedAttributes
    	   */
    	  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    	    Array.from(el.attributes).forEach(function (attribute) {
    	      if (allowedAttributes.indexOf(attribute.name) === -1) {
    	        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
    	      }
    	    });
    	  };

    	  var SHOW_CLASS_TIMEOUT = 10;

    	  /**
    	   * Open popup, add necessary classes and styles, fix scrollbar
    	   *
    	   * @param {SweetAlertOptions} params
    	   */
    	  var openPopup = function openPopup(params) {
    	    var container = getContainer();
    	    var popup = getPopup();
    	    if (typeof params.willOpen === 'function') {
    	      params.willOpen(popup);
    	    }
    	    var bodyStyles = window.getComputedStyle(document.body);
    	    var initialBodyOverflow = bodyStyles.overflowY;
    	    addClasses(container, popup, params);

    	    // scrolling is 'hidden' until animation is done, after that 'auto'
    	    setTimeout(function () {
    	      setScrollingVisibility(container, popup);
    	    }, SHOW_CLASS_TIMEOUT);
    	    if (isModal()) {
    	      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
    	      setAriaHidden();
    	    }
    	    if (!isToast() && !globalState.previousActiveElement) {
    	      globalState.previousActiveElement = document.activeElement;
    	    }
    	    if (typeof params.didOpen === 'function') {
    	      setTimeout(function () {
    	        return params.didOpen(popup);
    	      });
    	    }
    	    removeClass(container, swalClasses['no-transition']);
    	  };

    	  /**
    	   * @param {AnimationEvent} event
    	   */
    	  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    	    var popup = getPopup();
    	    if (event.target !== popup || !animationEndEvent) {
    	      return;
    	    }
    	    var container = getContainer();
    	    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    	    container.style.overflowY = 'auto';
    	  };

    	  /**
    	   * @param {HTMLElement} container
    	   * @param {HTMLElement} popup
    	   */
    	  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    	    if (animationEndEvent && hasCssAnimation(popup)) {
    	      container.style.overflowY = 'hidden';
    	      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    	    } else {
    	      container.style.overflowY = 'auto';
    	    }
    	  };

    	  /**
    	   * @param {HTMLElement} container
    	   * @param {boolean} scrollbarPadding
    	   * @param {string} initialBodyOverflow
    	   */
    	  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    	    iOSfix();
    	    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
    	      replaceScrollbarWithPadding(initialBodyOverflow);
    	    }

    	    // sweetalert2/issues/1247
    	    setTimeout(function () {
    	      container.scrollTop = 0;
    	    });
    	  };

    	  /**
    	   * @param {HTMLElement} container
    	   * @param {HTMLElement} popup
    	   * @param {SweetAlertOptions} params
    	   */
    	  var addClasses = function addClasses(container, popup, params) {
    	    addClass(container, params.showClass.backdrop);
    	    if (params.animation) {
    	      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
    	      popup.style.setProperty('opacity', '0', 'important');
    	      show(popup, 'grid');
    	      setTimeout(function () {
    	        // Animate popup right after showing it
    	        addClass(popup, params.showClass.popup);
    	        // and remove the opacity workaround
    	        popup.style.removeProperty('opacity');
    	      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    	    } else {
    	      show(popup, 'grid');
    	    }
    	    addClass([document.documentElement, document.body], swalClasses.shown);
    	    if (params.heightAuto && params.backdrop && !params.toast) {
    	      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    	    }
    	  };

    	  var defaultInputValidators = {
    	    /**
    	     * @param {string} string
    	     * @param {string} [validationMessage]
    	     * @returns {Promise<string | void>}
    	     */
    	    email: function email(string, validationMessage) {
    	      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    	    },
    	    /**
    	     * @param {string} string
    	     * @param {string} [validationMessage]
    	     * @returns {Promise<string | void>}
    	     */
    	    url: function url(string, validationMessage) {
    	      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
    	      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    	    }
    	  };

    	  /**
    	   * @param {SweetAlertOptions} params
    	   */
    	  function setDefaultInputValidators(params) {
    	    // Use default `inputValidator` for supported input types if not provided
    	    if (params.inputValidator) {
    	      return;
    	    }
    	    if (params.input === 'email') {
    	      params.inputValidator = defaultInputValidators['email'];
    	    }
    	    if (params.input === 'url') {
    	      params.inputValidator = defaultInputValidators['url'];
    	    }
    	  }

    	  /**
    	   * @param {SweetAlertOptions} params
    	   */
    	  function validateCustomTargetElement(params) {
    	    // Determine if the custom target element is valid
    	    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    	      warn('Target parameter is not valid, defaulting to "body"');
    	      params.target = 'body';
    	    }
    	  }

    	  /**
    	   * Set type, text and actions on popup
    	   *
    	   * @param {SweetAlertOptions} params
    	   */
    	  function setParameters(params) {
    	    setDefaultInputValidators(params);

    	    // showLoaderOnConfirm && preConfirm
    	    if (params.showLoaderOnConfirm && !params.preConfirm) {
    	      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    	    }
    	    validateCustomTargetElement(params);

    	    // Replace newlines with <br> in title
    	    if (typeof params.title === 'string') {
    	      params.title = params.title.split('\n').join('<br />');
    	    }
    	    init(params);
    	  }

    	  /** @type {SweetAlert} */
    	  var currentInstance;
    	  var _promise = /*#__PURE__*/new WeakMap();
    	  var SweetAlert = /*#__PURE__*/function () {
    	    /**
    	     * @param {...any} args
    	     * @this {SweetAlert}
    	     */
    	    function SweetAlert() {
    	      _classCallCheck(this, SweetAlert);
    	      /**
    	       * @type {Promise<SweetAlertResult>}
    	       */
    	      _classPrivateFieldInitSpec(this, _promise, {
    	        writable: true,
    	        value: void 0
    	      });
    	      // Prevent run in Node env
    	      if (typeof window === 'undefined') {
    	        return;
    	      }
    	      currentInstance = this;

    	      // @ts-ignore
    	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    	        args[_key] = arguments[_key];
    	      }
    	      var outerParams = Object.freeze(this.constructor.argsToParams(args));

    	      /** @type {Readonly<SweetAlertOptions>} */
    	      this.params = outerParams;

    	      /** @type {boolean} */
    	      this.isAwaitingPromise = false;
    	      _classPrivateFieldSet(this, _promise, this._main(currentInstance.params));
    	    }
    	    _createClass(SweetAlert, [{
    	      key: "_main",
    	      value: function _main(userParams) {
    	        var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    	        showWarningsForParams(Object.assign({}, mixinParams, userParams));
    	        if (globalState.currentInstance) {
    	          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
    	          var isAwaitingPromise = globalState.currentInstance.isAwaitingPromise;
    	          globalState.currentInstance._destroy();
    	          if (!isAwaitingPromise) {
    	            swalPromiseResolve({
    	              isDismissed: true
    	            });
    	          }
    	          if (isModal()) {
    	            unsetAriaHidden();
    	          }
    	        }
    	        globalState.currentInstance = currentInstance;
    	        var innerParams = prepareParams(userParams, mixinParams);
    	        setParameters(innerParams);
    	        Object.freeze(innerParams);

    	        // clear the previous timer
    	        if (globalState.timeout) {
    	          globalState.timeout.stop();
    	          delete globalState.timeout;
    	        }

    	        // clear the restore focus timeout
    	        clearTimeout(globalState.restoreFocusTimeout);
    	        var domCache = populateDomCache(currentInstance);
    	        render(currentInstance, innerParams);
    	        privateProps.innerParams.set(currentInstance, innerParams);
    	        return swalPromise(currentInstance, domCache, innerParams);
    	      }

    	      // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    	    }, {
    	      key: "then",
    	      value: function then(onFulfilled) {
    	        return _classPrivateFieldGet(this, _promise).then(onFulfilled);
    	      }
    	    }, {
    	      key: "finally",
    	      value: function _finally(onFinally) {
    	        return _classPrivateFieldGet(this, _promise)["finally"](onFinally);
    	      }
    	    }]);
    	    return SweetAlert;
    	  }();

    	  /**
    	   * @param {SweetAlert} instance
    	   * @param {DomCache} domCache
    	   * @param {SweetAlertOptions} innerParams
    	   * @returns {Promise}
    	   */
    	  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    	    return new Promise(function (resolve, reject) {
    	      // functions to handle all closings/dismissals
    	      /**
    	       * @param {DismissReason} dismiss
    	       */
    	      var dismissWith = function dismissWith(dismiss) {
    	        instance.close({
    	          isDismissed: true,
    	          dismiss: dismiss
    	        });
    	      };
    	      privateMethods.swalPromiseResolve.set(instance, resolve);
    	      privateMethods.swalPromiseReject.set(instance, reject);
    	      domCache.confirmButton.onclick = function () {
    	        handleConfirmButtonClick(instance);
    	      };
    	      domCache.denyButton.onclick = function () {
    	        handleDenyButtonClick(instance);
    	      };
    	      domCache.cancelButton.onclick = function () {
    	        handleCancelButtonClick(instance, dismissWith);
    	      };
    	      domCache.closeButton.onclick = function () {
    	        dismissWith(DismissReason.close);
    	      };
    	      handlePopupClick(innerParams, domCache, dismissWith);
    	      addKeydownHandler(globalState, innerParams, dismissWith);
    	      handleInputOptionsAndValue(instance, innerParams);
    	      openPopup(innerParams);
    	      setupTimer(globalState, innerParams, dismissWith);
    	      initFocus(domCache, innerParams);

    	      // Scroll container to top on open (#1247, #1946)
    	      setTimeout(function () {
    	        domCache.container.scrollTop = 0;
    	      });
    	    });
    	  };

    	  /**
    	   * @param {SweetAlertOptions} userParams
    	   * @param {SweetAlertOptions} mixinParams
    	   * @returns {SweetAlertOptions}
    	   */
    	  var prepareParams = function prepareParams(userParams, mixinParams) {
    	    var templateParams = getTemplateParams(userParams);
    	    var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    	    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    	    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    	    if (params.animation === false) {
    	      params.showClass = {
    	        backdrop: 'swal2-noanimation'
    	      };
    	      params.hideClass = {};
    	    }
    	    return params;
    	  };

    	  /**
    	   * @param {SweetAlert} instance
    	   * @returns {DomCache}
    	   */
    	  var populateDomCache = function populateDomCache(instance) {
    	    var domCache = {
    	      popup: getPopup(),
    	      container: getContainer(),
    	      actions: getActions(),
    	      confirmButton: getConfirmButton(),
    	      denyButton: getDenyButton(),
    	      cancelButton: getCancelButton(),
    	      loader: getLoader(),
    	      closeButton: getCloseButton(),
    	      validationMessage: getValidationMessage(),
    	      progressSteps: getProgressSteps()
    	    };
    	    privateProps.domCache.set(instance, domCache);
    	    return domCache;
    	  };

    	  /**
    	   * @param {GlobalState} globalState
    	   * @param {SweetAlertOptions} innerParams
    	   * @param {Function} dismissWith
    	   */
    	  var setupTimer = function setupTimer(globalState, innerParams, dismissWith) {
    	    var timerProgressBar = getTimerProgressBar();
    	    hide(timerProgressBar);
    	    if (innerParams.timer) {
    	      globalState.timeout = new Timer(function () {
    	        dismissWith('timer');
    	        delete globalState.timeout;
    	      }, innerParams.timer);
    	      if (innerParams.timerProgressBar) {
    	        show(timerProgressBar);
    	        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
    	        setTimeout(function () {
    	          if (globalState.timeout && globalState.timeout.running) {
    	            // timer can be already stopped or unset at this point
    	            animateTimerProgressBar(innerParams.timer);
    	          }
    	        });
    	      }
    	    }
    	  };

    	  /**
    	   * @param {DomCache} domCache
    	   * @param {SweetAlertOptions} innerParams
    	   */
    	  var initFocus = function initFocus(domCache, innerParams) {
    	    if (innerParams.toast) {
    	      return;
    	    }
    	    if (!callIfFunction(innerParams.allowEnterKey)) {
    	      blurActiveElement();
    	      return;
    	    }
    	    if (!focusButton(domCache, innerParams)) {
    	      setFocus(-1, 1);
    	    }
    	  };

    	  /**
    	   * @param {DomCache} domCache
    	   * @param {SweetAlertOptions} innerParams
    	   * @returns {boolean}
    	   */
    	  var focusButton = function focusButton(domCache, innerParams) {
    	    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
    	      domCache.denyButton.focus();
    	      return true;
    	    }
    	    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
    	      domCache.cancelButton.focus();
    	      return true;
    	    }
    	    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
    	      domCache.confirmButton.focus();
    	      return true;
    	    }
    	    return false;
    	  };
    	  var blurActiveElement = function blurActiveElement() {
    	    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
    	      document.activeElement.blur();
    	    }
    	  };

    	  // Dear russian users visiting russian sites. Let's have fun.
    	  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    	    var now = new Date();
    	    var initiationDate = localStorage.getItem('swal-initiation');
    	    if (!initiationDate) {
    	      localStorage.setItem('swal-initiation', "".concat(now));
    	    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
    	      setTimeout(function () {
    	        document.body.style.pointerEvents = 'none';
    	        var ukrainianAnthem = document.createElement('audio');
    	        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
    	        ukrainianAnthem.loop = true;
    	        document.body.appendChild(ukrainianAnthem);
    	        setTimeout(function () {
    	          ukrainianAnthem.play()["catch"](function () {
    	            // ignore
    	          });
    	        }, 2500);
    	      }, 500);
    	    }
    	  }

    	  // Assign instance methods from src/instanceMethods/*.js to prototype
    	  SweetAlert.prototype.disableButtons = disableButtons;
    	  SweetAlert.prototype.enableButtons = enableButtons;
    	  SweetAlert.prototype.getInput = getInput;
    	  SweetAlert.prototype.disableInput = disableInput;
    	  SweetAlert.prototype.enableInput = enableInput;
    	  SweetAlert.prototype.hideLoading = hideLoading;
    	  SweetAlert.prototype.disableLoading = hideLoading;
    	  SweetAlert.prototype.showValidationMessage = showValidationMessage;
    	  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
    	  SweetAlert.prototype.close = close;
    	  SweetAlert.prototype.closePopup = close;
    	  SweetAlert.prototype.closeModal = close;
    	  SweetAlert.prototype.closeToast = close;
    	  SweetAlert.prototype.rejectPromise = rejectPromise;
    	  SweetAlert.prototype.update = update;
    	  SweetAlert.prototype._destroy = _destroy;

    	  // Assign static methods from src/staticMethods/*.js to constructor
    	  Object.assign(SweetAlert, staticMethods);

    	  // Proxy to instance methods to constructor, for now, for backwards compatibility
    	  Object.keys(instanceMethods).forEach(function (key) {
    	    /**
    	     * @param {...any} args
    	     * @returns {any | undefined}
    	     */
    	    SweetAlert[key] = function () {
    	      if (currentInstance && currentInstance[key]) {
    	        var _currentInstance;
    	        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    	      }
    	      return null;
    	    };
    	  });
    	  SweetAlert.DismissReason = DismissReason;
    	  SweetAlert.version = '11.10.6';

    	  var Swal = SweetAlert;
    	  // @ts-ignore
    	  Swal["default"] = Swal;

    	  return Swal;

    	}));
    	if (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.Sweetalert2){commonjsGlobal.swal = commonjsGlobal.sweetAlert = commonjsGlobal.Swal = commonjsGlobal.SweetAlert = commonjsGlobal.Sweetalert2;}
    	"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t;}catch(e){n.innerText=t;}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}"); 
    } (sweetalert2_all));

    var sweetalert2_allExports = sweetalert2_all.exports;
    var sweetalert = /*@__PURE__*/getDefaultExportFromCjs(sweetalert2_allExports);

    var swal = sweetalert.mixin({});

    var vipJson = [
    	{
    		name: "玩的嗨",
    		api: "http://tv.wandhi.com/go.html?url=%url%"
    	},
    	{
    		name: "JY",
    		api: "https://jx.playerjy.com/?url=%url%"
    	},
    	{
    		name: "云析",
    		api: "https://jx.yparse.com/index.php?url=%url%"
    	},
    	{
    		name: "8090g",
    		api: "https://www.8090g.cn/?url=%url%"
    	},
    	{
    		name: "全能vip接口",
    		api: "https://www.8090.la/8090/?url=%url%"
    	},
    	{
    		name: "eptept",
    		api: "https://dmjx.m3u8.tv/?url=%url%"
    	},
    	{
    		name: "咸鱼云解析",
    		api: "http://jx.ppflv.com/?url=%url%"
    	},
    	{
    		name: "虾米解析",
    		api: "https://jx.xmflv.com/?url=%url%"
    	},
    	{
    		name: "play",
    		api: "https://www.playm3u8.cn/jiexi.php?url=%url%"
    	},
    	{
    		name: "夜幕",
    		api: "https://www.yemu.xyz/?url=%url%"
    	},
    	{
    		name: "TV解析",
    		api: "https://jx.m3u8.tv/jiexi/?url=%url%"
    	},
    	{
    		name: "冰豆",
    		api: "https://api.qianqi.net/vip/?url=%url%"
    	},
    	{
    		name: "七哥",
    		api: "https://jx.mmkv.cn/tv.php?url=%url%"
    	}
    ];

    /**
     * #name VIP视频解析
     * #description 各种VIP视频解析
     * #icon ../vip.png
     * #version 1.0.0
     */
    const script = BMScript.init({
        match: [
            /\w+:\/\/\w+.iqiyi.com/ig,
            /\w+:\/\/\w+.youku.com/ig,
            /\w+:\/\/\w+.le.com/ig,
            /\w+:\/\/\w+.letv.com/ig,
            /\w+:\/\/v.qq.com/ig,
            /\w+:\/\/\w+.tudou.com/ig,
            /\w+:\/\/\w+.mgtv.com/ig,
            /\w+:\/\/film.sohu.com/ig,
            /\w+:\/\/tv.sohu.com/ig,
            /\w+:\/\/\w+.acfun.cn\/v/ig,
            /\w+:\/\/\w+.bilibili.com/ig,
            /\w+:\/\/vip.1905.com\/play/ig,
            /\w+:\/\/\w+.pptv.com/ig,
            /\w+:\/\/\w+.wasu.cn\/Play\/show/ig,
            /\w+:\/\/\w+.56.com/ig,
        ]
    });
    script.run(() => __awaiter(void 0, void 0, void 0, function* () {
        const { value: config, isConfirmed } = yield swal.fire({
            title: '选择解析接口',
            html: `<div>
            <select id="select-api"  class='swal2-select'>
                ${vipJson.map((vip, index) => `<option ${index == 0 ? 'selected' : ''} value="${vip.api}">${vip.name}</option>`)}
            </select>
        </div>`,
            width: 420,
            focusConfirm: false,
            confirmButtonText: '确定',
            preConfirm: () => {
                const selectApi = q('#select-api');
                const selectApiValue = selectApi.options[selectApi.selectedIndex].value;
                return {
                    selectApiValue
                };
            },
        });
        if (!isConfirmed) {
            notify.warning('已取消!');
            return;
        }
        window.open(config.selectApiValue.replace('%url%', window.location.href));
    })).catch(handleDefineError);

})();
