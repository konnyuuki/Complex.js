<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [Complex][1]
    *   [Parameters][2]
    *   [add][3]
        *   [Parameters][4]
    *   [sub][5]
        *   [Parameters][6]
    *   [mul][7]
        *   [Parameters][8]
    *   [div][9]
        *   [Parameters][10]
    *   [neg][11]
    *   [conj][12]
    *   [equals][13]
        *   [Parameters][14]
    *   [toString][15]
    *   [I][16]
    *   [fromPolar][17]
        *   [Parameters][18]
    *   [abs][19]
        *   [Parameters][20]
    *   [arg][21]
        *   [Parameters][22]
    *   [sqrt][23]
        *   [Parameters][24]
    *   [exp][25]
        *   [Parameters][26]
    *   [log][27]
        *   [Parameters][28]
    *   [pow][29]
        *   [Parameters][30]
    *   [sin][31]
        *   [Parameters][32]
    *   [cos][33]
        *   [Parameters][34]
    *   [tan][35]
        *   [Parameters][36]
    *   [asin][37]
        *   [Parameters][38]
    *   [acos][39]
        *   [Parameters][40]
    *   [atan][41]
        *   [Parameters][42]

## Complex

This is an implementation of a [complex data
type][43] in TypeScript.  It is
intended for educational purposes to learn how it can be implemented or what
[complex numbers][44] are.

Complex numbers have two forms: Cartesian a + bi and polar re^it.  We use the
former internally to keep the real and imaginary parts in JavaScript numbers
(i.e., 64-bit floating-point numbers).

### Parameters

*   `real` **[number][45]**  (optional, default `0`)
*   `imag` **[number][45]**  (optional, default `0`)

### add

Addition.
(a + bi) + (c + di) = (a + c) + (b + d)i.

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### sub

Subtraction.
(a + bi) - (c + di) = (a - c) + (b - d)i.

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### mul

Multiplication.
(a + bi)(c + di) = (ac - bd) + (ad + bc)i.

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### div

Division.
(a + bi)/(c + di) = \[(ac + bd) + (bc - ad)i]/(c^2 + d^2).

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### neg

Additive inverse.
-(a + bi) = -a - bi.

Returns **[Complex][1]**&#x20;

### conj

Complex conjugate.
(a + bi)\* = a - bi.

Returns **[Complex][1]**&#x20;

### equals

Equality.
a + bi = c + di iff a = c and b = d.

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[boolean][46]**&#x20;

### toString

String representation in rectangular form.

Returns **[string][47]**&#x20;

### I

The imaginary unit.

### fromPolar

Creates a complex number in polar form.

#### Parameters

*   `abs` **[number][45]**  (optional, default `0`)
*   `arg` **[number][45]**  (optional, default `0`)

Returns **[Complex][1]**&#x20;

### abs

Absolute value.
|a + bi| = sqrt(a^2 + b^2).

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[number][45]**&#x20;

### arg

Argument.
arg(a + bi) = atan2(b, a).

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[number][45]**&#x20;

### sqrt

Square root.
sqrt(re^it) = sqrt(r) e^(it/2).

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### exp

Exponential function.
exp(a + bi) = exp(a) e^ib.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### log

Logarithm.
ln(re^it) = ln(r) + it.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### pow

Exponentiation.
z^w = e^\[w ln(z)].

#### Parameters

*   `z` **[Complex][1]**&#x20;
*   `w` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### sin

Sine.
sin(a + bi) = sin(a) cosh(b) + i cos(a) sinh(b).

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### cos

Cosine.
cos(a + bi) = cos(a) cosh(b) - i sin(a) sinh(b).

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### tan

Tangent.
tan(a + bi) = \[sin(2a) + i sinh(2b)]/\[cos(2a) + cosh(2b)].

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### asin

Inverse sine.
arcsin(z) = -i ln\[sqrt(1 - z^2) + iz].

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### acos

Inverse cosine.
arccos(z) = -i ln\[i sqrt(1 - z^2) + z].

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### atan

Inverse tangent.
arctan(z) = -i/2 ln\[(i - z)/(i + z)].

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

[1]: #complex

[2]: #parameters

[3]: #add

[4]: #parameters-1

[5]: #sub

[6]: #parameters-2

[7]: #mul

[8]: #parameters-3

[9]: #div

[10]: #parameters-4

[11]: #neg

[12]: #conj

[13]: #equals

[14]: #parameters-5

[15]: #tostring

[16]: #i

[17]: #frompolar

[18]: #parameters-6

[19]: #abs

[20]: #parameters-7

[21]: #arg

[22]: #parameters-8

[23]: #sqrt

[24]: #parameters-9

[25]: #exp

[26]: #parameters-10

[27]: #log

[28]: #parameters-11

[29]: #pow

[30]: #parameters-12

[31]: #sin

[32]: #parameters-13

[33]: #cos

[34]: #parameters-14

[35]: #tan

[36]: #parameters-15

[37]: #asin

[38]: #parameters-16

[39]: #acos

[40]: #parameters-17

[41]: #atan

[42]: #parameters-18

[43]: https://en.wikipedia.org/wiki/Complex_data_type

[44]: https://en.wikipedia.org/wiki/Complex_number

[45]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[46]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[47]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
