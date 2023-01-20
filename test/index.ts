import Complex from '../lib/Complex';

const z1 = new Complex(3, 4);
const z2 = new Complex(5, 6);

// (3 + 4i) + (5 + 6i) = 8 + 10i
// (3 + 4i) - (5 + 6i) = -2 - 2i
// (3 + 4i) * (5 + 6i) = -9 + 38i
// (3 + 4i) / (5 + 6i) = (39 + 2i)/61 = 0.6393... + 0.0327...i
console.log(String(z1.add(z2)));
console.log(String(z1.sub(z2)));
console.log(String(z1.mul(z2)));
console.log(String(z1.div(z2)));
