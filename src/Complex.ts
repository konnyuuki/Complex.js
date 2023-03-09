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
   */
  constructor(real: number = 0, imag: number = 0) {
    this.real = real;
    this.imag = imag;
  }

  /**
   * Returns the sum $(\mathrm{this} + \mathrm{other})$ of itself and the given
   * complex number.
   *
   * Formula: $(a + bi) + (c + di) = (a + c) + (b + d)i.$
   */
  add(other: Complex | number) {
    if (!(other instanceof Complex)) {
      return new Complex(this.real + other, this.imag);
    }

    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  /**
   * Returns the difference $(\mathrm{this} - \mathrm{other})$ of itself and the
   * given complex number.
   *
   * Formula: $(a + bi) - (c + di) = (a - c) + (b - d)i.$
   */
  sub(other: Complex | number) {
    if (!(other instanceof Complex)) {
      return new Complex(this.real - other, this.imag);
    }

    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  /**
   * Returns the product $(\mathrm{this} \cdot \mathrm{other})$ of itself and the
   * given complex number.
   *
   * Formula: $(a + bi)(c + di) = (ac - bd) + (ad + bc)i.$
   */
  mul(other: Complex | number) {
    if (!(other instanceof Complex)) {
      return new Complex(this.real * other, this.imag * other);
    }

    return new Complex(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real,
    );
  }

  /**
   * Returns the quotient $(\mathrm{this}/\mathrm{other})$ of itself and the
   * given complex number.
   *
   * Formula: $\frac{a + bi}{c + di} = \frac{ac + bc}{c^2 + d^2} + \frac{bc - ad}{c^2 + d^2}i.$
   */
  div(other: Complex | number) {
    if (!(other instanceof Complex)) {
      return new Complex(this.real / other, this.imag / other);
    }

    const denominator = other.real ** 2 + other.imag ** 2;
    return new Complex(
      (this.real * other.real + this.imag * other.imag) / denominator,
      (this.imag * other.real - this.real * other.imag) / denominator,
    );
  }
}
