/**
 * A complex number.
 */
export default class Complex {
  /**
   * Real part.
   */
  real: number;

  /**
   * Imaginary part.
   */
  imag: number;

  /**
   * Creates a complex number in Cartesian form.
   */
  constructor(real: number = 0, imag: number = 0) {
    this.real = real;
    this.imag = imag;
  }
}
