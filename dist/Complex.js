"use strict";
exports.__esModule = true;
/**
 * A complex number class.
 * @class Complex
 */
var Complex = /** @class */ (function () {
    /**
     * Creates a complex number in Cartesian form.
     */
    function Complex(real, imag) {
        if (real === void 0) { real = 0; }
        if (imag === void 0) { imag = 0; }
        this.real = real;
        this.imag = imag;
    }
    /** Creates a complex number in polar form. */
    Complex.fromPolar = function (abs, arg) {
        if (abs === void 0) { abs = 0; }
        if (arg === void 0) { arg = 0; }
        return new Complex(abs * Math.cos(arg), abs * Math.sin(arg));
    };
    Complex.abs = function (z) {
        return Math.sqrt(Math.pow(z.real, 2) + Math.pow(z.imag, 2));
    };
    Complex.arg = function (z) {
        return Math.atan2(z.imag, z.real);
    };
    /** Addition.  $(a + bi) + (c + di) = (a + c) + (b + d)i.$ */
    Complex.prototype.add = function (other) {
        return new Complex(this.real + other.real, this.imag + other.imag);
    };
    Complex.prototype.sub = function (other) {
        return new Complex(this.real - other.real, this.imag - other.imag);
    };
    Complex.prototype.mul = function (other) {
        return new Complex(this.real * other.real - this.imag * other.imag, this.real * other.imag + this.imag * other.real);
        // return Complex.fromPolar(
        //   Complex.abs(this) * Complex.abs(other),
        //   Complex.arg(this) + Complex.arg(other),
        // );
    };
    Complex.prototype.div = function (other) {
        var denominator = Math.pow(other.real, 2) + Math.pow(other.imag, 2);
        return new Complex((this.real * other.real + this.imag * other.imag) / denominator, (this.imag * other.real - this.real * other.imag) / denominator);
        // return Complex.fromPolar(
        //   Complex.abs(this) / Complex.abs(other),
        //   Complex.arg(this) - Complex.arg(other),
        // );
    };
    Complex.prototype.neg = function () {
        return new Complex(-this.real, -this.imag);
    };
    Complex.prototype.conj = function () {
        return new Complex(this.real, -this.imag);
    };
    Complex.prototype.equals = function (other) {
        return this.real === other.real && this.imag === other.imag;
    };
    Complex.sqrt = function (z) {
        return Complex.fromPolar(Math.sqrt(Complex.abs(z)), Complex.arg(z) / 2);
    };
    Complex.exp = function (z) {
        return Complex.fromPolar(Math.exp(z.real), z.imag);
    };
    Complex.log = function (z) {
        return new Complex(Math.log(Complex.abs(z)), Complex.arg(z));
    };
    Complex.pow = function (z, w) {
        return Complex.exp(w.mul(Complex.log(z)));
    };
    Complex.sin = function (z) {
        return new Complex(Math.sin(z.real) * Math.cosh(z.imag), Math.cos(z.real) * Math.sinh(z.imag));
    };
    Complex.cos = function (z) {
        return new Complex(Math.cos(z.real) * Math.cosh(z.imag), -Math.sin(z.real) * Math.sinh(z.imag));
    };
    Complex.tan = function (z) {
        var twoReal = 2 * z.real;
        var twoImag = 2 * z.imag;
        var denominator = Math.cos(twoReal) + Math.cosh(twoImag);
        return new Complex(Math.sin(twoReal) / denominator, Math.sinh(twoImag) / denominator);
    };
    Complex.asin = function (z) {
        var sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
        return Complex.I.neg().mul(Complex.log(sqrt1z.add(Complex.I.mul(z))));
    };
    Complex.acos = function (z) {
        var sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
        return Complex.I.neg().mul(Complex.log(Complex.I.mul(sqrt1z).add(z)));
    };
    Complex.atan = function (z) {
        return Complex.I.neg()
            .div(Complex.TWO)
            .mul(Complex.log(Complex.I.sub(z).div(Complex.I.add(z))));
    };
    Complex.prototype.toString = function () {
        // Real.
        if (this.imag === 0) {
            return String(this.real);
        }
        var imaginary;
        if (this.imag === 1) {
            imaginary = 'i';
        }
        else if (this.imag === -1) {
            imaginary = '-i';
        }
        else {
            imaginary = "".concat(this.imag, "i");
        }
        // Purely imaginary.
        if (this.real === 0) {
            return imaginary;
        }
        // Both the real and imaginary parts are nonzero.
        return "".concat(this.real).concat(this.imag > 0 ? '+' : '').concat(imaginary);
    };
    Complex.I = new Complex(0, 1);
    Complex.ZERO = new Complex(0, 0);
    Complex.ONE = new Complex(1, 0);
    Complex.TWO = new Complex(2, 0);
    return Complex;
}());
exports["default"] = Complex;
