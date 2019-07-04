(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tattler = /** @class */ (function () {
        function Tattler(uncalledPromise) {
            var _this = this;
            this.uncalledPromise = uncalledPromise;
            this.tattle = new Promise(function (resolve) {
                _this.cb = resolve;
            });
            this.promiseFunction = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return uncalledPromise.apply(void 0, args).then(_this.createHandler(_this.cb));
            };
        }
        Tattler.prototype.createHandler = function (cb) {
            return function (result) {
                if (cb !== undefined) {
                    cb(result);
                }
                return result;
            };
        };
        Object.defineProperty(Tattler.prototype, "mimic", {
            get: function () {
                return this.promiseFunction;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tattler.prototype, "wait", {
            get: function () {
                return this.tattle;
            },
            enumerable: true,
            configurable: true
        });
        Tattler.prototype.setArgs = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.promiseFunction = function () { return _this.uncalledPromise.apply(_this, args).then(_this.createHandler(_this.cb)); };
        };
        return Tattler;
    }());
    exports.default = Tattler;
});
//# sourceMappingURL=tattler.js.map