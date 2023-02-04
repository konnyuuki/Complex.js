import ComplexUtils from './ComplexUtils.mjs';
// import range from 'lodash/range';

export default class Complex {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
    this.utils = new ComplexUtils();
    // this.numbers = range(10);
  }
}
