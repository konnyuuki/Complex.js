import { Complex, I } from '../lib/Complex';

console.log(String(new Complex(0, 0))); // 0
console.log(String(I)); // i
console.log(String(new Complex(0, -1))); // -i
console.log(String(new Complex(-1, 1))); // -1 + i
console.log(String(new Complex(-1, -1))); // -1 - i

console.log('');

const z1 = new Complex(3, 4);
const z2 = new Complex(5, 6);
console.log(String(z1.add(z2))); // 8 + 10i
console.log(String(z1.sub(z2))); // -2 - 2i
console.log(String(z1.mul(z2))); // -9 + 38i
console.log(String(z1.div(z2))); // (39 + 2i)/61 = 0.6393... + 0.0327...i
