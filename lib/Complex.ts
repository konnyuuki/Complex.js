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
  add(other: Complex) {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  // Subtraction.
  // (a + bi) - (c + di) = (a - c) + (b - d)i.
  sub(other: Complex) {
    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  // Multiplication.
  // (a + bi)(c + di) = (ac - bd) + (ad + bc)i.
  mul(other: Complex) {
    return new Complex(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real,
    );

    // This can also be written in polar form:
    // re^it se^iu = rs e^[i(t + u)].

    // return Complex.fromPolar(
    //   this.abs() * other.abs(),
    //   this.arg() + other.arg(),
    // );
  }

  // Division.
  // (a + bi)/(c + di) = [(ac + bd) + (bc - ad)i]/(c^2 + d^2).
  div(other: Complex) {
    const denominator = other.real ** 2 + other.imag ** 2;
    return new Complex(
      (this.real * other.real + this.imag * other.imag) / denominator,
      (this.imag * other.real - this.real * other.imag) / denominator,
    );

    // This can also be written in polar form:
    // re^it/se^iu = r/s e^[i(t - u)].

    // return Complex.fromPolar(
    //   this.abs() / other.abs(),
    //   this.arg() - other.arg(),
    // );
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
  equals(other: Complex) {
    return this.real === other.real && this.imag === other.imag;
  }

  // String representation in rectangular form.
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
