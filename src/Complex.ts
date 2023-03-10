/**
 * @license MIT
 *
 * Copyright (c) 2023 Yuuki Konno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Represents a complex number.
 */
export default class Complex {
  /**
   * The real part.
   */
  real: number;

  /**
   * The imaginary part.
   */
  imag: number;

  /**
   * Creates a complex number in Cartesian form.
   * @param real The real part.
   * @param imag The imaginary part.
   */
  constructor(real: number = 0, imag: number = 0) {
    this.real = real;
    this.imag = imag;
  }

  /**
   * Creates a complex number in polar form.
   * @param abs The absolute value.
   * @param arg The argument.
   */
  static fromPolar(abs: number = 0, arg: number = 0): Complex {
    return new Complex(abs * Math.cos(arg), abs * Math.sin(arg));
  }

  /**
   * Returns the absolute value.
   */
  abs(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  /**
   * Returns the argument.
   */
  arg(): number {
    return Math.atan2(this.imag, this.real);
  }

  /**
   * Returns the sum $(\mathrm{this} + \mathrm{other})$ of this and the given
   * complex number.
   *
   * Formula:
   * $$(a + bi) + (c + di) = (a + c) + (b + d)i.$$
   */
  add(other: Complex | number): Complex {
    if (!(other instanceof Complex)) {
      return new Complex(this.real + other, this.imag);
    }

    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  /**
   * Returns the difference $(\mathrm{this} - \mathrm{other})$ of this and the
   * given complex number.
   *
   * Formula:
   * $$(a + bi) - (c + di) = (a - c) + (b - d)i.$$
   */
  sub(other: Complex | number): Complex {
    if (!(other instanceof Complex)) {
      return new Complex(this.real - other, this.imag);
    }

    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  /**
   * Returns the product $(\mathrm{this} \cdot \mathrm{other})$ of this and the
   * given complex number.
   *
   * Formula:
   * $$(a + bi)(c + di) = (ac - bd) + (ad + bc)i.$$
   *
   * It can also be expressed in polar form:
   * $$r_1 e^{i \theta_1} r_2 e^{i \theta_2} = r_1 r_2 e^{i(\theta_1 + \theta_2)}.$$
   */
  mul(other: Complex | number): Complex {
    if (!(other instanceof Complex)) {
      return new Complex(this.real * other, this.imag * other);
    }

    return new Complex(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real,
    );

    // It can also be calculated in polar form:

    // return Complex.fromPolar(this.arg() * other.arg(), this.abs() + other.abs());
  }

  /**
   * Returns the quotient $\frac{\mathrm{this}}{\mathrm{other}}$ of this and the
   * given complex number.
   *
   * Formula:
   * $$\frac{a + bi}{c + di} = \frac{ac + bc}{c^2 + d^2} + \frac{bc - ad}{c^2 + d^2}i.$$
   *
   * It can also be expressed in polar form:
   * $$\frac{r_1 e^{i \theta_1}}{r_2 e^{i \theta_2}} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)}.$$
   */
  div(other: Complex | number): Complex {
    if (!(other instanceof Complex)) {
      return new Complex(this.real / other, this.imag / other);
    }

    const denominator = other.real ** 2 + other.imag ** 2;
    return new Complex(
      (this.real * other.real + this.imag * other.imag) / denominator,
      (this.imag * other.real - this.real * other.imag) / denominator,
    );

    // It can also be calculated in polar form:

    // return Complex.fromPolar(this.arg() / other.arg(), this.abs() - other.abs());
  }
}
