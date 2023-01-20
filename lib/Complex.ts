// A complex number class.
export default class Complex {
  // Real and imaginary parts.
  real: number;
  imag: number;

  // Creates a complex number in rectangular form (i.e., from real and imaginary
  // parts).
  constructor(realPart: number, imaginaryPart: number) {
    this.real = realPart;
    this.imag = imaginaryPart;
  }

  // Creates a complex number in polar form (i.e., from absolute value and
  // argument).
  static fromPolar(absoluteValue: number, argument: number) {
    return new Complex(
      absoluteValue * Math.cos(argument),
      absoluteValue * Math.sin(argument),
    );
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

  // Adds two complex numbers.
  // (a + bi) + (c + di) = (a + c) + (b + d)i.
  add(that: Complex) {
    return new Complex(this.real + that.real, this.imag + that.imag);
  }

  // Subtracts two complex numbers.
  // (a + bi) - (c + di) = (a - c) + (b - d)i.
  sub(that: Complex) {
    return new Complex(this.real - that.real, this.imag - that.imag);
  }

  // Multiplies two complex numbers in polar form.
  // re^it se^iu = rs e^[i(t + u)].
  mul(that: Complex) {
    return Complex.fromPolar(this.abs() * that.abs(), this.arg() + that.arg());

    // This can also be written in rectangular form:
    // (a + bi)(c + di) = (ac - bd) + (ad + bc)i.

    // return new Complex(
    //   this.real * that.real - this.imag * that.imag,
    //   this.real * that.imag + this.imag * that.real,
    // );
  }

  // Divides two complex numbers in polar form.
  // re^it/se^iu = r/s e^[i(t - u)].
  div(that: Complex) {
    return Complex.fromPolar(this.abs() / that.abs(), this.arg() - that.arg());

    // This can also be written in rectangular form:
    // (a + bi)/(c + di) = [(ac + bd) + (bc - ad)i]/(c^2 + d^2).

    // const denominator = that.real ** 2 + that.imag ** 2;
    // return new Complex(
    //   (this.real * that.real + this.imag * that.imag) / denominator,
    //   (this.imag * that.real - this.real * that.imag) / denominator,
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

  // Equality of two complex numbers.
  // (a + bi) = (c + di) iff a = c and b = d.
  equals(that: Complex) {
    return this.real === that.real && this.imag === that.imag;
  }

  // String representation in rectangular form.
  toString() {
    return `${this.real}+${this.imag}i`;
  }
}
