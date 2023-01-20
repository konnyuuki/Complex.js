import Complex from '../lib/Complex';

const z1 = new Complex(3, 4); // 3 + 4i
const z2 = new Complex(5, 6); // 5 + 6i

console.log(String(z1.add(z2))); // 8 + 10i
console.log(String(z1.sub(z2))); // -2 - 2i
console.log(String(z1.mul(z2))); // -9 + 38i
console.log(String(z1.div(z2))); // (39 + 2i)/61 = 0.6393... + 0.0327...i
