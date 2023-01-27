/**
 * A complex number class.
 * @class Complex
 */
class Complex {
  /** Real part. */
  real: number;

  /** Imaginary part. */
  imag: number;

  static I: Complex = new Complex(0, 1);
  static ZERO: Complex = new Complex(0, 0);
  static ONE: Complex = new Complex(1, 0);
  static TWO: Complex = new Complex(2, 0);

  /**
   * Creates a complex number in Cartesian form.
   */
  constructor(real: number = 0, imag: number = 0) {
    this.real = real;
    this.imag = imag;
  }

  /** Creates a complex number in polar form. */
  static fromPolar(abs: number = 0, arg: number = 0): Complex {
    return new Complex(abs * Math.cos(arg), abs * Math.sin(arg));
  }

  static abs(z: Complex): number {
    return Math.sqrt(z.real ** 2 + z.imag ** 2);
  }

  static arg(z: Complex): number {
    return Math.atan2(z.imag, z.real);
  }

  /** Addition.  $(a + bi) + (c + di) = (a + c) + (b + d)i.$ */
  add(other: Complex): Complex {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  sub(other: Complex): Complex {
    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  mul(other: Complex): Complex {
    return new Complex(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real,
    );

    // return Complex.fromPolar(
    //   Complex.abs(this) * Complex.abs(other),
    //   Complex.arg(this) + Complex.arg(other),
    // );
  }

  div(other: Complex): Complex {
    const denominator = other.real ** 2 + other.imag ** 2;
    return new Complex(
      (this.real * other.real + this.imag * other.imag) / denominator,
      (this.imag * other.real - this.real * other.imag) / denominator,
    );

    // return Complex.fromPolar(
    //   Complex.abs(this) / Complex.abs(other),
    //   Complex.arg(this) - Complex.arg(other),
    // );
  }

  neg(): Complex {
    return new Complex(-this.real, -this.imag);
  }

  conj(): Complex {
    return new Complex(this.real, -this.imag);
  }

  equals(other: Complex): boolean {
    return this.real === other.real && this.imag === other.imag;
  }

  static sqrt(z: Complex): Complex {
    return Complex.fromPolar(Math.sqrt(Complex.abs(z)), Complex.arg(z) / 2);
  }

  static exp(z: Complex): Complex {
    return Complex.fromPolar(Math.exp(z.real), z.imag);
  }

  static log(z: Complex): Complex {
    return new Complex(Math.log(Complex.abs(z)), Complex.arg(z));
  }

  static pow(z: Complex, w: Complex): Complex {
    return Complex.exp(w.mul(Complex.log(z)));
  }

  static sin(z: Complex): Complex {
    return new Complex(
      Math.sin(z.real) * Math.cosh(z.imag),
      Math.cos(z.real) * Math.sinh(z.imag),
    );
  }

  static cos(z: Complex): Complex {
    return new Complex(
      Math.cos(z.real) * Math.cosh(z.imag),
      -Math.sin(z.real) * Math.sinh(z.imag),
    );
  }

  static tan(z: Complex): Complex {
    const twoReal = 2 * z.real;
    const twoImag = 2 * z.imag;
    const denominator = Math.cos(twoReal) + Math.cosh(twoImag);
    return new Complex(
      Math.sin(twoReal) / denominator,
      Math.sinh(twoImag) / denominator,
    );
  }

  static asin(z: Complex): Complex {
    const sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
    return Complex.I.neg().mul(Complex.log(sqrt1z.add(Complex.I.mul(z))));
  }

  static acos(z: Complex): Complex {
    const sqrt1z = Complex.sqrt(Complex.ONE.sub(z.mul(z)));
    return Complex.I.neg().mul(Complex.log(Complex.I.mul(sqrt1z).add(z)));
  }

  static atan(z: Complex): Complex {
    return Complex.I.neg()
      .div(Complex.TWO)
      .mul(Complex.log(Complex.I.sub(z).div(Complex.I.add(z))));
  }

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
export default Complex;
