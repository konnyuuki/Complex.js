// A complex number class.
class Complex {
  // Real and imaginary parts.
  real: number;
  imag: number;

  // Creates a complex number in rectangular form (i.e., from real and imaginary
  // parts).
  constructor(realPart: number = 0, imaginaryPart: number = 0) {
    this.real = realPart;
    this.imag = imaginaryPart;
  }

  clone() {
    return new Complex(this.real, this.imag);
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

  // Addition.
  // (a + bi) + (c + di) = (a + c) + (b + d)i.
  add(...operands: Complex[]) {
    let result = this.clone();
    for (let operand of operands) {
      result.real += operand.real;
      result.imag += operand.imag;
    }
    return result;
  }

  // Subtraction.
  // (a + bi) - (c + di) = (a - c) + (b - d)i.
  sub(...operands: Complex[]) {
    let result = this.clone();
    for (let operand of operands) {
      result.real -= operand.real;
      result.imag -= operand.imag;
    }
    return result;
  }

  // Multiplication.
  // (a + bi)(c + di) = (ac - bd) + (ad + bc)i.
  mul(...operands: Complex[]) {
    let result = this.clone();
    for (let operand of operands) {
      const newReal = result.real * operand.real - result.imag * operand.imag;
      const newImag = result.real * operand.imag + result.imag * operand.real;
      result.real = newReal;
      result.imag = newImag;

      // This can also be written in polar form:
      // re^it se^iu = rs e^[i(t + u)].

      // result = Complex.fromPolar(
      //   result.abs() * operand.abs(),
      //   result.arg() + operand.arg(),
      // );
    }
    return result;
  }

  // Division.
  // (a + bi)/(c + di) = [(ac + bd) + (bc - ad)i]/(c^2 + d^2).
  div(...operands: Complex[]) {
    let result = this.clone();
    for (let operand of operands) {
      const denominator = operand.real ** 2 + operand.imag ** 2;
      const newReal = (
        (result.real * operand.real + result.imag * operand.imag) / denominator
      );
      const newImag = (
        (result.imag * operand.real - result.real * operand.imag) / denominator
      );
      result.real = newReal;
      result.imag = newImag;

      // This can also be written in polar form:
      // re^it/se^iu = r/s e^[i(t - u)].

      // result = Complex.fromPolar(
      //   result.abs() / operand.abs(),
      //   result.arg() - operand.arg(),
      // );
    }
    return result;
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
  // a + bi = c + di iff a = c and b = d.
  equals(that: Complex) {
    return this.real === that.real && this.imag === that.imag;
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
