"use strict";
exports.__esModule = true;
/**
 * This is an implementation of [complex data
 * type](https://en.wikipedia.org/wiki/Complex_data_type) for JavaScript, only
 * it is written in TypeScript, a statically typed language developed by
 * Microsoft that
 * [transpiles](https://en.wikipedia.org/wiki/Source-to-source_compiler) to
 * JavaScript.
 */
var Complex = /** @class */ (function () {
    // Creates a complex number in rectangular form.
    function Complex(real, imag) {
        if (real === void 0) { real = 0; }
        if (imag === void 0) { imag = 0; }
        this.real = real;
        this.imag = imag;
    }
    // Creates a complex number in polar form.
    Complex.fromPolar = function (abs, arg) {
        if (abs === void 0) { abs = 0; }
        if (arg === void 0) { arg = 0; }
        return new Complex(abs * Math.cos(arg), abs * Math.sin(arg));
    };
    // Absolute value.
    // |a + bi| = sqrt(a^2 + b^2).
    Complex.abs = function (z) {
        return Math.sqrt(Math.pow(z.real, 2) + Math.pow(z.imag, 2));
    };
    // Argument.
    // arg(a + bi) = atan2(b, a).
    Complex.arg = function (z) {
        return Math.atan2(z.imag, z.real);
    };
    // Addition.
    // (a + bi) + (c + di) = (a + c) + (b + d)i.
    Complex.prototype.add = function (other) {
        return new Complex(this.real + other.real, this.imag + other.imag);
    };
    // Subtraction.
    // (a + bi) - (c + di) = (a - c) + (b - d)i.
    Complex.prototype.sub = function (other) {
        return new Complex(this.real - other.real, this.imag - other.imag);
    };
    // Multiplication.
    // (a + bi)(c + di) = (ac - bd) + (ad + bc)i.
    Complex.prototype.mul = function (other) {
        return new Complex(this.real * other.real - this.imag * other.imag, this.real * other.imag + this.imag * other.real);
        // This can also be written in polar form:
        // re^it se^iu = rs e^[i(t + u)].
        // return Complex.fromPolar(
        //   Complex.abs(this) * Complex.abs(other),
        //   Complex.arg(this) + Complex.arg(other),
        // );
    };
    // Division.
    // (a + bi)/(c + di) = [(ac + bd) + (bc - ad)i]/(c^2 + d^2).
    Complex.prototype.div = function (other) {
        var denominator = Math.pow(other.real, 2) + Math.pow(other.imag, 2);
        return new Complex((this.real * other.real + this.imag * other.imag) / denominator, (this.imag * other.real - this.real * other.imag) / denominator);
        // This can also be written in polar form:
        // re^it/se^iu = r/s e^[i(t - u)].
        // return Complex.fromPolar(
        //   Complex.abs(this) / Complex.abs(other),
        //   Complex.arg(this) - Complex.arg(other),
        // );
    };
    // Additive inverse.
    // -(a + bi) = -a - bi.
    Complex.prototype.neg = function () {
        return new Complex(-this.real, -this.imag);
    };
    // Complex conjugate.
    // (a + bi)* = a - bi.
    Complex.prototype.conj = function () {
        return new Complex(this.real, -this.imag);
    };
    // Equality.
    // a + bi = c + di iff a = c and b = d.
    Complex.prototype.equals = function (other) {
        return this.real === other.real && this.imag === other.imag;
    };
    // Square root.
    // sqrt(re^it) = sqrt(r) e^(it/2).
    Complex.sqrt = function (z) {
        return Complex.fromPolar(Math.sqrt(Complex.abs(z)), Complex.arg(z) / 2);
    };
    // Exponential function.
    // exp(a + bi) = exp(a) e^ib.
    Complex.exp = function (z) {
        return Complex.fromPolar(Math.exp(z.real), z.imag);
    };
    // Logarithm.
    // ln(re^it) = ln(r) + it.
    Complex.log = function (z) {
        return new Complex(Math.log(Complex.abs(z)), Complex.arg(z));
    };
    // Exponentiation.
    // z^w = e^[w ln(z)].
    Complex.pow = function (z, w) {
        return Complex.exp(w.mul(Complex.log(z)));
    };
    // Sine.
    // sin(a + bi) = sin(a) cosh(b) + i cos(a) sinh(b).
    Complex.sin = function (z) {
        return new Complex(Math.sin(z.real) * Math.cosh(z.imag), Math.cos(z.real) * Math.sinh(z.imag));
    };
    // Cosine.
    // cos(a + bi) = cos(a) cosh(b) - i sin(a) sinh(b).
    Complex.cos = function (z) {
        return new Complex(Math.cos(z.real) * Math.cosh(z.imag), -Math.sin(z.real) * Math.sinh(z.imag));
    };
    // Tangent.
    // tan(a + bi) = [sin(2a) + i sinh(2b)]/[cos(2a) + cosh(2b)].
    Complex.tan = function (z) {
        var twoReal = 2 * z.real;
        var twoImag = 2 * z.imag;
        var denominator = Math.cos(twoReal) + Math.cosh(twoImag);
        return new Complex(Math.sin(twoReal) / denominator, Math.sinh(twoImag) / denominator);
    };
    // Inverse sine.
    // arcsin(z) = -i ln[sqrt(1 - z^2) + iz].
    Complex.asin = function (z) {
        var sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
        return Complex.I.neg().mul(Complex.log(sqrt1z.add(Complex.I.mul(z))));
    };
    // Inverse cosine.
    // arccos(z) = -i ln[i sqrt(1 - z^2) + z].
    Complex.acos = function (z) {
        var sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
        return Complex.I.neg().mul(Complex.log(Complex.I.mul(sqrt1z).add(z)));
    };
    // Inverse tangent.
    // arctan(z) = -i/2 ln[(i - z)/(i + z)].
    Complex.atan = function (z) {
        return Complex.I.neg()
            .div(Complex.TWO)
            .mul(Complex.log(Complex.I.sub(z).div(Complex.I.add(z))));
    };
    // String representation in rectangular form.
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
