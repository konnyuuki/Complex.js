(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Complex"] = factory();
	else
		root["Complex"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

/**
 * @license MIT
 *
 * Copyright (c) 2023 Yuuki Konno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
__webpack_unused_export__ = true;
/**
 * Represents a complex number.
 */
var Complex = /** @class */ (function () {
    /**
     * Creates a complex number in Cartesian form.
     * @param real The real part.
     * @param imag The imaginary part.
     */
    function Complex(real, imag) {
        if (real === void 0) { real = 0; }
        if (imag === void 0) { imag = 0; }
        this.real = real;
        this.imag = imag;
    }
    /**
     * Creates a complex number in polar form.
     * @param abs The absolute value.
     * @param arg The argument.
     */
    Complex.fromPolar = function (abs, arg) {
        if (abs === void 0) { abs = 0; }
        if (arg === void 0) { arg = 0; }
        return new Complex(abs * Math.cos(arg), abs * Math.sin(arg));
    };
    /**
     * Returns the absolute value.
     */
    Complex.prototype.abs = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
    };
    /**
     * Returns the argument.
     */
    Complex.prototype.arg = function () {
        return Math.atan2(this.imag, this.real);
    };
    /**
     * Returns the sum of itself and the given complex number.
     *
     * Formula:
     * $$(a + bi) + (c + di) = (a + c) + (b + d)i.$$
     */
    Complex.prototype.add = function (other) {
        if (!(other instanceof Complex)) {
            return new Complex(this.real + other, this.imag);
        }
        return new Complex(this.real + other.real, this.imag + other.imag);
    };
    /**
     * Returns the difference of itself and the given complex number.
     *
     * Formula:
     * $$(a + bi) - (c + di) = (a - c) + (b - d)i.$$
     */
    Complex.prototype.sub = function (other) {
        if (!(other instanceof Complex)) {
            return new Complex(this.real - other, this.imag);
        }
        return new Complex(this.real - other.real, this.imag - other.imag);
    };
    /**
     * Returns the product of itself and the given complex number.
     *
     * Formula:
     * $$(a + bi)(c + di) = (ac - bd) + (ad + bc)i.$$
     *
     * It can also be expressed in polar form:
     * $$r_1 e^{i \theta_1} r_2 e^{i \theta_2} = r_1 r_2 e^{i(\theta_1 + \theta_2)}.$$
     */
    Complex.prototype.mul = function (other) {
        if (!(other instanceof Complex)) {
            return new Complex(this.real * other, this.imag * other);
        }
        return new Complex(this.real * other.real - this.imag * other.imag, this.real * other.imag + this.imag * other.real);
        // It can also be calculated in polar form:
        // return Complex.fromPolar(this.arg() * other.arg(), this.abs() + other.abs());
    };
    /**
     * Returns the quotient of itself and the given complex number.
     *
     * Formula:
     * $$\frac{a + bi}{c + di} = \frac{ac + bc}{c^2 + d^2} + \frac{bc - ad}{c^2 + d^2}i.$$
     *
     * It can also be expressed in polar form:
     * $$\frac{r_1 e^{i \theta_1}}{r_2 e^{i \theta_2}} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)}.$$
     */
    Complex.prototype.div = function (other) {
        if (!(other instanceof Complex)) {
            return new Complex(this.real / other, this.imag / other);
        }
        var denominator = Math.pow(other.real, 2) + Math.pow(other.imag, 2);
        return new Complex((this.real * other.real + this.imag * other.imag) / denominator, (this.imag * other.real - this.real * other.imag) / denominator);
        // It can also be calculated in polar form:
        // return Complex.fromPolar(this.arg() / other.arg(), this.abs() - other.abs());
    };
    return Complex;
}());
exports["default"] = Complex;

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});