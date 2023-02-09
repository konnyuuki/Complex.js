(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Complex = factory());
})(this, (function () { 'use strict';

    var Complex = /** @class */ (function () {
        function Complex(real, imag) {
            if (real === void 0) { real = 0; }
            if (imag === void 0) { imag = 0; }
            this.real = real;
            this.imag = imag;
        }
        return Complex;
    }());

    return Complex;

}));
