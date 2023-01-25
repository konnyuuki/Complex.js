/**
 * This is an implementation of [complex data
 * type](https://en.wikipedia.org/wiki/Complex_data_type) for JavaScript, only
 * it is written in TypeScript, a statically typed language developed by
 * Microsoft that
 * [transpiles](https://en.wikipedia.org/wiki/Source-to-source_compiler) to
 * JavaScript.
 */
export default class Complex {
  // Real and imaginary parts.
  real: number;
  imag: number;

  static I: Complex = new Complex(0, 1);
  static ZERO: Complex = new Complex(0, 0);
  static ONE: Complex = new Complex(1, 0);
  static TWO: Complex = new Complex(2, 0);

  // Creates a complex number in rectangular form.
  constructor(real: number = 0, imag: number = 0) {
    this.real = real;
    this.imag = imag;
  }

  // Creates a complex number in polar form.
  static fromPolar(abs: number = 0, arg: number = 0): Complex {
    return new Complex(abs * Math.cos(arg), abs * Math.sin(arg));
  }

  // Absolute value.
  // |a + bi| = sqrt(a^2 + b^2).
  static abs(z: Complex): number {
    return Math.sqrt(z.real ** 2 + z.imag ** 2);
  }

  // Argument.
  // arg(a + bi) = atan2(b, a).
  static arg(z: Complex): number {
    return Math.atan2(z.imag, z.real);
  }

  // Addition.
  // (a + bi) + (c + di) = (a + c) + (b + d)i.
  add(other: Complex): Complex {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  // Subtraction.
  // (a + bi) - (c + di) = (a - c) + (b - d)i.
  sub(other: Complex): Complex {
    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  // Multiplication.
  // (a + bi)(c + di) = (ac - bd) + (ad + bc)i.
  mul(other: Complex): Complex {
    return new Complex(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real,
    );

    // This can also be written in polar form:
    // re^it se^iu = rs e^[i(t + u)].

    // return Complex.fromPolar(
    //   Complex.abs(this) * Complex.abs(other),
    //   Complex.arg(this) + Complex.arg(other),
    // );
  }

  // Division.
  // (a + bi)/(c + di) = [(ac + bd) + (bc - ad)i]/(c^2 + d^2).
  div(other: Complex): Complex {
    const denominator = other.real ** 2 + other.imag ** 2;
    return new Complex(
      (this.real * other.real + this.imag * other.imag) / denominator,
      (this.imag * other.real - this.real * other.imag) / denominator,
    );

    // This can also be written in polar form:
    // re^it/se^iu = r/s e^[i(t - u)].

    // return Complex.fromPolar(
    //   Complex.abs(this) / Complex.abs(other),
    //   Complex.arg(this) - Complex.arg(other),
    // );
  }

  // Additive inverse.
  // -(a + bi) = -a - bi.
  neg(): Complex {
    return new Complex(-this.real, -this.imag);
  }

  // Complex conjugate.
  // (a + bi)* = a - bi.
  conj(): Complex {
    return new Complex(this.real, -this.imag);
  }

  // Equality.
  // a + bi = c + di iff a = c and b = d.
  equals(other: Complex): boolean {
    return this.real === other.real && this.imag === other.imag;
  }

  // Square root.
  // sqrt(re^it) = sqrt(r) e^(it/2).
  static sqrt(z: Complex): Complex {
    return Complex.fromPolar(Math.sqrt(Complex.abs(z)), Complex.arg(z) / 2);
  }

  // Exponential function.
  // exp(a + bi) = exp(a) e^ib.
  static exp(z: Complex): Complex {
    return Complex.fromPolar(Math.exp(z.real), z.imag);
  }

  // Logarithm.
  // ln(re^it) = ln(r) + it.
  static log(z: Complex): Complex {
    return new Complex(Math.log(Complex.abs(z)), Complex.arg(z));
  }

  // Exponentiation.
  // z^w = e^[w ln(z)].
  static pow(z: Complex, w: Complex): Complex {
    return Complex.exp(w.mul(Complex.log(z)));
  }

  // Sine.
  // sin(a + bi) = sin(a) cosh(b) + i cos(a) sinh(b).
  static sin(z: Complex): Complex {
    return new Complex(
      Math.sin(z.real) * Math.cosh(z.imag),
      Math.cos(z.real) * Math.sinh(z.imag),
    );
  }

  // Cosine.
  // cos(a + bi) = cos(a) cosh(b) - i sin(a) sinh(b).
  static cos(z: Complex): Complex {
    return new Complex(
      Math.cos(z.real) * Math.cosh(z.imag),
      -Math.sin(z.real) * Math.sinh(z.imag),
    );
  }

  // Tangent.
  // tan(a + bi) = [sin(2a) + i sinh(2b)]/[cos(2a) + cosh(2b)].
  static tan(z: Complex): Complex {
    const twoReal = 2 * z.real;
    const twoImag = 2 * z.imag;
    const denominator = Math.cos(twoReal) + Math.cosh(twoImag);
    return new Complex(
      Math.sin(twoReal) / denominator,
      Math.sinh(twoImag) / denominator,
    );
  }

  // Inverse sine.
  // arcsin(z) = -i ln[sqrt(1 - z^2) + iz].
  static asin(z: Complex): Complex {
    const sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
    return Complex.I.neg().mul(Complex.log(sqrt1z.add(Complex.I.mul(z))));
  }

  // Inverse cosine.
  // arccos(z) = -i ln[i sqrt(1 - z^2) + z].
  static acos(z: Complex): Complex {
    const sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
    return Complex.I.neg().mul(Complex.log(Complex.I.mul(sqrt1z).add(z)));
  }

  // Inverse tangent.
  // arctan(z) = -i/2 ln[(i - z)/(i + z)].
  static atan(z: Complex): Complex {
    return Complex.I.neg()
      .div(Complex.TWO)
      .mul(Complex.log(Complex.I.sub(z).div(Complex.I.add(z))));
  }

  // String representation in rectangular form.
  toString(): string {
    // Real.
    if (this.imag === 0) {
      return String(this.real);
    }

    let imaginary: string;
    if (this.imag === 1) {
      imaginary = 'i';
    } else if (this.imag === -1) {
      imaginary = '-i';
    } else {
      imaginary = `${this.imag}i`;
    }

    // Purely imaginary.
    if (this.real === 0) {
      return imaginary;
    }

    // Both the real and imaginary parts are nonzero.
    return `${this.real}${this.imag > 0 ? '+' : ''}${imaginary}`;
  }
}
