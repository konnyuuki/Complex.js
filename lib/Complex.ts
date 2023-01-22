type entry = number | null | undefined;

// A complex number class.
class Complex {
  // Real and imaginary parts.
  _real: entry;
  _imag: entry;

  // Absolute value and argument.
  _abs: entry;
  _arg: entry;

  // Creates a complex number in Cartesian or polar form.
  constructor(entry1: entry = 0, entry2: entry = 0, isPolar: boolean = false) {
    if (isPolar) {
      this.setPolar(entry1, entry2);
    } else {
      this.setCartesian(entry1, entry2);
    }
  }

  setCartesian(real: entry = 0, imag: entry = 0) {
    this._real = real;
    this._imag = imag;
    this._abs = null;
    this._arg = null;
    return this;
  }

  setPolar(abs: entry = 0, arg: entry = 0) {
    this._abs = abs;
    this._arg = arg;
    this._real = null;
    this._imag = null;
    return this;
  }

  // Creates a complex number in polar form.
  static fromPolar(abs: entry = 0, arg: entry = 0) {
    return new Complex(abs, arg, true);
  }

  clone() {
    const z = new Complex(null, null);
    z._real = this._real;
    z._imag = this._imag;
    z._abs = this._abs;
    z._arg = this._arg;
    return z;
  }

  isCartesian() {
    return this._real != null && this._imag != null;
  }

  isPolar() {
    return this._abs != null && this._arg != null;
  }

  // Real part.
  // Cartesian: Re(a + bi) = a.
  // Polar: Re(re^it) = r cos(t).
  real() {
    this._real ??= this._abs! * Math.cos(this._arg!);
    return this._real;
  }

  // Imaginary part.
  // Cartesian: Im(a + bi) = b.
  // Polar: Im(re^it) = r sin(t).
  imag() {
    this._imag ??= this._abs! * Math.sin(this._arg!);
    return this._imag;
  }

  // Absolute value.
  // Cartesian: |a + bi| = sqrt(a^2 + b^2).
  // Polar: |re^it| = r.
  abs() {
    this._abs ??= Math.sqrt(this._real! ** 2 + this._imag! ** 2);
    return this._abs;
  }

  // Argument.
  // Cartesian: arg(a + bi) = atan2(b, a).
  // Polar: arg(re^it) = t.
  arg() {
    this._arg ??= Math.atan2(this._imag!, this._real!);
    return this._arg;
  }

  // Addition.
  // (a + bi) + (c + di) = (a + c) + (b + d)i.
  add(...operands: Complex[]) {
    const result = this.clone();
    for (const operand of operands) {
      result.setCartesian(
        result.real() + operand.real(),
        result.imag() + operand.imag(),
      );
    }
    return result;

    // This can also be written in a functional style, and so can `sub`, `mul`,
    // and `div`:

    // return operands.reduce((result, operand) => (
    //   result.setCartesian(
    //     result.real() + operand.real(),
    //     result.imag() + operand.imag(),
    //   )
    // ), this.clone());
  }

  // Subtraction.
  // (a + bi) - (c + di) = (a - c) + (b - d)i.
  sub(...operands: Complex[]) {
    const result = this.clone();
    for (const operand of operands) {
      result.setCartesian(
        result.real() - operand.real(),
        result.imag() - operand.imag(),
      );
    }
    return result;
  }

  // Multiplication.
  // Cartesian: (a + bi)(c + di) = (ac - bd) + (ad + bc)i.
  // Polar: re^it se^iu = rs e^[i(t + u)].
  mul(...operands: Complex[]) {
    const result = this.clone();
    for (const operand of operands) {
      if (result.isPolar() && operand.isPolar()) {
        result.setPolar(
          result.abs() * operand.abs(),
          result.arg() + operand.arg(),
        );
      } else {
        result.setCartesian(
          result.real() * operand.real() - result.imag() * operand.imag(),
          result.real() * operand.imag() + result.imag() * operand.real(),
        );
      }
    }
    return result;
  }

  // Division.
  // Cartesian: (a + bi)/(c + di) = [(ac + bd) + (bc - ad)i]/(c^2 + d^2).
  // Polar: re^it/se^iu = r/s e^[i(t - u)].
  div(...operands: Complex[]) {
    const result = this.clone();
    for (const operand of operands) {
      if (result.isPolar() && operand.isPolar()) {
        result.setPolar(
          result.abs() / operand.abs(),
          result.arg() - operand.arg(),
        );
      } else {
        const denominator = operand.real() ** 2 + operand.imag() ** 2;
        result.setCartesian(
          (result.real() * operand.real() + result.imag() * operand.imag())
            / denominator,
          (result.imag() * operand.real() - result.real() * operand.imag())
            / denominator,
        );
      }
    }
    return result;
  }

  // Additive inverse.
  // Cartesian: -(a + bi) = -a - bi.
  // Polar: -(re^it) = (-r)e^it.
  neg() {
    return this.isPolar()
      ? Complex.fromPolar(-this.abs(), this.arg())
      : new Complex(-this.real(), -this.imag());
  }

  // Complex conjugate.
  // Cartesian: (a + bi)* = a - bi.
  // Polar: (re^it)* = re^(-it).
  conj() {
    return this.isPolar()
      ? Complex.fromPolar(this.abs(), -this.arg())
      : new Complex(this.real(), -this.imag());
  }

  // Equality.
  // Cartesian: a + bi = c + di iff a = c and b = d.
  // Polar: re^it = se^iu iff r = s and t = u.
  equals(that: Complex) {
    return this.isPolar()
      ? this.abs() === that.abs() && this.arg() === that.arg()
      : this.real() === that.real() && this.imag() === that.imag();
  }

  // String representation in rectangular form.
  toString() {
    // Real.
    if (this.imag() === 0) {
      return String(this.real());
    }

    let imaginary: string;
    if (this.imag() === 1) {
      imaginary = 'i';
    } else if (this.imag() === -1) {
      imaginary = '-i';
    } else {
      imaginary = `${this.imag()}i`;
    }

    // Purely imaginary.
    if (this.real() === 0) {
      return imaginary;
    }

    // Both the real and imaginary parts are nonzero.
    return `${this.real()}${this.imag() > 0 ? '+' : ''}${imaginary}`;
  }
}

const I = new Complex(0, 1);

export default Complex;
export { Complex, I };
