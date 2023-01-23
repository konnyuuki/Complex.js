import Complex from '../lib/Complex';

console.log(String(new Complex(0, 0))); // 0
console.log(String(Complex.I)); // i
console.log(String(new Complex(0, -1))); // -i
console.log(String(new Complex(-1, 1))); // -1 + i
console.log(String(new Complex(-1, -1))); // -1 - i

console.log('');

const z1 = new Complex(3, 4);
const z2 = new Complex(5, 6);
console.log(String(z1.add(z2))); // 8 + 10i
console.log(String(z1.sub(z2))); // -2 - 2i
console.log(String(z1.mul(z2))); // -9 + 38i
console.log(String(z1.div(z2))); // (39 + 2i)/61 = 0.639... + 0.032...i

console.log('');

console.log(String(Complex.sqrt(Complex.I))); // (1 + i)/sqrt(2) = 0.707... + 0.707...i
console.log(String(Complex.exp(Complex.I))); // cos(1) + i sin(1) = 0.540... + 0.841...i
console.log(String(Complex.log(Complex.I))); // i pi/2 = 1.570...i
console.log(String(Complex.pow(Complex.I, Complex.I))); // e^(-pi/2) = 0.207...
console.log(String(Complex.sin(Complex.I))); // i sinh(1) = 1.175...i
console.log(String(Complex.cos(Complex.I))); // cosh(1) = 1.543...
console.log(String(Complex.tan(Complex.I))); // i tanh(1) = 0.761...i
console.log(String(Complex.asin(Complex.I))); // i asinh(1) = 0.881...i
console.log(String(Complex.acos(Complex.I))); // pi/2 - i asinh(1) = 1.570... - 0.881...i
console.log(String(Complex.atan(Complex.I.div(Complex.TWO)))); // i atanh(1/2) = 0.549...i
