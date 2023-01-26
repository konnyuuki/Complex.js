"use strict";
exports.__esModule = true;
/**
 * This is an implementation of a [complex data
 * type](https://en.wikipedia.org/wiki/Complex_data_type) in TypeScript.  It is
 * intended for educational purposes to learn how it can be implemented or what
 * [complex numbers](https://en.wikipedia.org/wiki/Complex_number) are.
 *
 * Complex numbers have two forms: Cartesian $z = a + bi$ and polar
 * $z=re^{i\theta}$.  We use the former as an internal representation, storing
 * the real and imaginary parts as JavaScript numbers (i.e., 64-bit floating
 * point numbers).
 *
 * The `Complex` class defines arithmetic operations on complex numbers and a
 * complex version of the static methods of the built-in `Math` object.  Since
 * JavaScript does not support operator overloading, arithmetic operations are
 * provided as `add`, `sub`, `mul`, and `div` instance methods.  For instance,
 * $e^{i\pi}$ becomes `Complex.exp(Complex.I.mul(Math.PI))`.
 */
var Complex = /** @class */ (function () {
    /** Creates a complex number in rectangular form. */
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
    /**
     * Returns the absolute value $|a + bi| = \sqrt{a^2 + b^2}$.
     */
    Complex.abs = function (z) {
        return Math.sqrt(Math.pow(z.real, 2) + Math.pow(z.imag, 2));
    };
    /**
     * Returns the argument $\arg(a + bi) = \operatorname{atan2}(b, a)$.
     */
    Complex.arg = function (z) {
        return Math.atan2(z.imag, z.real);
    };
    /**
     * Addition.  $(a + bi) + (c + di) = (a + c) + (b + d)i$.
     */
    Complex.prototype.add = function (other) {
        return new Complex(this.real + other.real, this.imag + other.imag);
    };
    /**
     * Subtraction.  $(a + bi) - (c + di) = (a - c) + (b - d)i$.
     */
    Complex.prototype.sub = function (other) {
        return new Complex(this.real - other.real, this.imag - other.imag);
    };
    /**
     * Multiplication.  $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$.
     */
    Complex.prototype.mul = function (other) {
        return new Complex(this.real * other.real - this.imag * other.imag, this.real * other.imag + this.imag * other.real);
        // This can also be written in polar form:
        // re^it se^iu = rs e^[i(t + u)].
        // return Complex.fromPolar(
        //   Complex.abs(this) * Complex.abs(other),
        //   Complex.arg(this) + Complex.arg(other),
        // );
    };
    /**
     * Division.  $\displaystyle \frac{a + bi}{c + di} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$.
     */
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
    /**
     * Returns the additive inverse $-(a + bi) = -a - bi$.
     */
    Complex.prototype.neg = function () {
        return new Complex(-this.real, -this.imag);
    };
    /**
     * Returns the complex conjugate $\overline{a + bi} = a - bi$.
     */
    Complex.prototype.conj = function () {
        return new Complex(this.real, -this.imag);
    };
    /**
     * Equality.  $a + bi = c + di \iff a = c \wedge b = d$.
     */
    Complex.prototype.equals = function (other) {
        return this.real === other.real && this.imag === other.imag;
    };
    /**
     * Returns the square root $\sqrt{re^{i\theta}} = \sqrt{r} e^{i\theta/2}$.
     */
    Complex.sqrt = function (z) {
        return Complex.fromPolar(Math.sqrt(Complex.abs(z)), Complex.arg(z) / 2);
    };
    /**
     * Exponential function.  $e^{a + bi} = e^a e^{bi}$.
     */
    Complex.exp = function (z) {
        return Complex.fromPolar(Math.exp(z.real), z.imag);
    };
    /**
     * Logarithm.  $\ln(re^{i\theta}) = \ln(r) + i\theta$.
     */
    Complex.log = function (z) {
        return new Complex(Math.log(Complex.abs(z)), Complex.arg(z));
    };
    /**
     * Exponentiation.  $z^w = e^{w \ln(z)}$.
     */
    Complex.pow = function (z, w) {
        return Complex.exp(w.mul(Complex.log(z)));
    };
    /**
     * Sine.  $\sin(a + bi) = \sin(a) \cosh(b) + i \cos(a) \sinh(b)$.
     */
    Complex.sin = function (z) {
        return new Complex(Math.sin(z.real) * Math.cosh(z.imag), Math.cos(z.real) * Math.sinh(z.imag));
    };
    /**
     * Cosine.  $\cos(a + bi) = \cos(a) \cosh(b) - i \sin(a) \sinh(b)$.
     */
    Complex.cos = function (z) {
        return new Complex(Math.cos(z.real) * Math.cosh(z.imag), -Math.sin(z.real) * Math.sinh(z.imag));
    };
    /**
     * Tangent.  $\displaystyle \tan(a + bi) = \frac{\sin(2a) + i \sinh(2b)}{\cos(2a) + \cosh(2b)}$.
     */
    Complex.tan = function (z) {
        var twoReal = 2 * z.real;
        var twoImag = 2 * z.imag;
        var denominator = Math.cos(twoReal) + Math.cosh(twoImag);
        return new Complex(Math.sin(twoReal) / denominator, Math.sinh(twoImag) / denominator);
    };
    /**
     * Inverse sine.  $\arcsin(z) = -i \ln \left( \sqrt{1 - z^2} + iz \right)$.
     */
    Complex.asin = function (z) {
        var sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
        return Complex.I.neg().mul(Complex.log(sqrt1z.add(Complex.I.mul(z))));
    };
    /**
     * Inverse cosine.  $\arccos(z) = -i \ln \left( i \sqrt{1 - z^2} + z \right)$.
     */
    Complex.acos = function (z) {
        var sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
        return Complex.I.neg().mul(Complex.log(Complex.I.mul(sqrt1z).add(z)));
    };
    /**
     * Inverse tangent.  $\displaystyle \arctan(z) = -\frac{i}{2} \ln \left( \frac{i - z}{i + z} \right)$.
     */
    Complex.atan = function (z) {
        return Complex.I.neg()
            .div(Complex.TWO)
            .mul(Complex.log(Complex.I.sub(z).div(Complex.I.add(z))));
    };
    /** String representation in rectangular form. */
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
    /** The imaginary unit. */
    Complex.I = new Complex(0, 1);
    /** Zero, as a complex number. */
    Complex.ZERO = new Complex(0, 0);
    /** One, as a complex number. */
    Complex.ONE = new Complex(1, 0);
    /** Two, as a complex number. */
    Complex.TWO = new Complex(2, 0);
    return Complex;
}());
exports["default"] = Complex;
