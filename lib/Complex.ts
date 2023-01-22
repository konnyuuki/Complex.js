// A complex number class.
class Complex {
  // Real and imaginary parts.
  real: number;
  imag: number;

  // Creates a complex number in rectangular form.
  constructor(real: number = 0, imag: number = 0) {
    this.real = real;
    this.imag = imag;
  }

  // Creates a complex number in polar form.
  static fromPolar(abs: number = 0, arg: number = 0) {
    return new Complex(abs * Math.cos(arg), abs * Math.sin(arg));
  }

  // Absolute value.
  // |a + bi| = sqrt(a^2 + b^2).
  abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  // Argument.
  // arg(a + bi) = atan2(b, a).
  arg() {
    return Math.atan2(this.imag, this.real);
  }

  // Addition.
  // (a + bi) + (c + di) = (a + c) + (b + d)i.
  add(that: Complex | number) {
    if (!(that instanceof Complex)) {
      return new Complex(this.real + that, this.imag);
    }

    return new Complex(this.real + that.real, this.imag + that.imag);
  }

  // Subtraction.
  // (a + bi) - (c + di) = (a - c) + (b - d)i.
  sub(that: Complex | number) {
    if (!(that instanceof Complex)) {
      return new Complex(this.real - that, this.imag);
    }

    return new Complex(this.real - that.real, this.imag - that.imag);
  }

  // Multiplication.
  // (a + bi)(c + di) = (ac - bd) + (ad + bc)i.
  mul(that: Complex | number) {
    if (!(that instanceof Complex)) {
      return new Complex(this.real * that, this.imag * that);
    }

    return new Complex(
      this.real * that.real - this.imag * that.imag,
      this.real * that.imag + this.imag * that.real,
    );

    // This can also be written in polar form:
    // re^it se^iu = rs e^[i(t + u)].

    // return Complex.fromPolar(this.abs() * that.abs(), this.arg() + that.arg());
  }

  // Division.
  // (a + bi)/(c + di) = [(ac + bd) + (bc - ad)i]/(c^2 + d^2).
  div(that: Complex | number) {
    if (!(that instanceof Complex)) {
      return new Complex(this.real / that, this.imag / that);
    }

    const denominator = that.real ** 2 + that.imag ** 2;
    return new Complex(
      (this.real * that.real + this.imag * that.imag) / denominator,
      (this.imag * that.real - this.real * that.imag) / denominator,
    );

    // This can also be written in polar form:
    // re^it/se^iu = r/s e^[i(t - u)].

    // return Complex.fromPolar(this.abs() / that.abs(), this.arg() - that.arg());
  }

  // Additive inverse.
  // -(a + bi) = -a - bi.
  neg() {
    return new Complex(-this.real, -this.imag);
  }

  // Complex conjugate.
  // (a + bi)* = a - bi.
  conj() {
    return new Complex(this.real, -this.imag);
  }

  // Equality.
  // a + bi = c + di iff a = c and b = d.
  equals(that: Complex | number) {
    if (!(that instanceof Complex)) {
      return this.real === that && this.imag === 0;
    }

    return this.real === that.real && this.imag === that.imag;
  }

  // String representation in Cartesian form.
  toString() {
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

const I = new Complex(0, 1);

export default Complex;
export { Complex, I };
