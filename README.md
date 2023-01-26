<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [Complex][1]
    *   [Parameters][2]
    *   [real][3]
    *   [imag][4]
    *   [add][5]
        *   [Parameters][6]
    *   [sub][7]
        *   [Parameters][8]
    *   [mul][9]
        *   [Parameters][10]
    *   [div][11]
        *   [Parameters][12]
    *   [neg][13]
    *   [conj][14]
    *   [equals][15]
        *   [Parameters][16]
    *   [toString][17]
    *   [I][18]
    *   [ZERO][19]
    *   [ONE][20]
    *   [TWO][21]
    *   [fromPolar][22]
        *   [Parameters][23]
    *   [abs][24]
        *   [Parameters][25]
    *   [arg][26]
        *   [Parameters][27]
    *   [sqrt][28]
        *   [Parameters][29]
    *   [exp][30]
        *   [Parameters][31]
    *   [log][32]
        *   [Parameters][33]
    *   [pow][34]
        *   [Parameters][35]
    *   [sin][36]
        *   [Parameters][37]
    *   [cos][38]
        *   [Parameters][39]
    *   [tan][40]
        *   [Parameters][41]
    *   [asin][42]
        *   [Parameters][43]
    *   [acos][44]
        *   [Parameters][45]
    *   [atan][46]
        *   [Parameters][47]

## Complex

This is an implementation of a [complex data
type][48] in TypeScript.  It is
intended for educational purposes to learn how it can be implemented or what
[complex numbers][49] are.

Complex numbers have two forms: Cartesian $z = a + bi$ and polar
$z=re^{i\theta}$.  We use the former as an internal representation, storing
the real and imaginary parts as JavaScript numbers (i.e., 64-bit floating
point numbers).

We define arithmetic operations and a `Complex` version of the static methods
of `Math` as specified in ES3.  Since TypeScript does not support operator
overloading, arithmetic operations are provided as `add`, `sub`, `mul`, and
`div` instance methods.  For instance, $e^{i\pi}$ becomes
`Complex.exp(Complex.I.mul(Math.PI))` instead of
`Complex.I.mul(Math.PI).exp()`.  We made this choice because it is more
readable than the latter.

### Parameters

*   `real` **[number][50]**  (optional, default `0`)
*   `imag` **[number][50]**  (optional, default `0`)

### real

Real part.

Type: [number][50]

### imag

Imaginary part.

Type: [number][50]

### add

Addition.  $(a + bi) + (c + di) = (a + c) + (b + d)i$.

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### sub

Subtraction.  $(a + bi) - (c + di) = (a - c) + (b - d)i$.

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### mul

Multiplication.  $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$.

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### div

Division.  $\displaystyle \frac{a + bi}{c + di} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$.

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### neg

Returns the additive inverse $-(a + bi) = -a - bi$.

Returns **[Complex][1]**&#x20;

### conj

Returns the complex conjugate $\overline{a + bi} = a - bi$.

Returns **[Complex][1]**&#x20;

### equals

Equality.  $a + bi = c + di \iff a = c \wedge b = d$.

#### Parameters

*   `other` **[Complex][1]**&#x20;

Returns **[boolean][51]**&#x20;

### toString

String representation in rectangular form.

Returns **[string][52]**&#x20;

### I

The imaginary unit.

### ZERO

Zero, as a complex number.

### ONE

One, as a complex number.

### TWO

Two, as a complex number.

### fromPolar

Creates a complex number in polar form.

#### Parameters

*   `abs` **[number][50]**  (optional, default `0`)
*   `arg` **[number][50]**  (optional, default `0`)

Returns **[Complex][1]**&#x20;

### abs

Returns the absolute value $|a + bi| = \sqrt{a^2 + b^2}$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[number][50]**&#x20;

### arg

Returns the argument $\arg(a + bi) = \operatorname{atan2}(b, a)$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[number][50]**&#x20;

### sqrt

Returns the square root $\sqrt{re^{i\theta}} = \sqrt{r} e^{i\theta/2}$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### exp

Exponential function.  $e^{a + bi} = e^a e^{ib}$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### log

Logarithm.  $\ln(re^{i\theta}) = \ln(r) + i\theta$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### pow

Exponentiation.  $z^w = e^{w \ln(z)}$.

#### Parameters

*   `z` **[Complex][1]**&#x20;
*   `w` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### sin

Sine.  $\sin(a + bi) = \sin(a) \cosh(b) + i \cos(a) \sinh(b)$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### cos

Cosine.  $\cos(a + bi) = \cos(a) \cosh(b) - i \sin(a) \sinh(b)$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### tan

Tangent.  $\displaystyle \tan(a + bi) = \frac{\sin(2a) + i \sinh(2b)}{\cos(2a) + \cosh(2b)}$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### asin

Inverse sine.  $\arcsin(z) = -i \ln \left( \sqrt{1 - z^2} + iz \right)$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### acos

Inverse cosine.  $\arccos(z) = -i \ln \left( i \sqrt{1 - z^2} + z \right)$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

### atan

Inverse tangent.  $\displaystyle \arctan(z) = -\frac{i}{2} \ln \left( \frac{i - z}{i + z} \right)$.

#### Parameters

*   `z` **[Complex][1]**&#x20;

Returns **[Complex][1]**&#x20;

[1]: #complex

[2]: #parameters

[3]: #real

[4]: #imag

[5]: #add

[6]: #parameters-1

[7]: #sub

[8]: #parameters-2

[9]: #mul

[10]: #parameters-3

[11]: #div

[12]: #parameters-4

[13]: #neg

[14]: #conj

[15]: #equals

[16]: #parameters-5

[17]: #tostring

[18]: #i

[19]: #zero

[20]: #one

[21]: #two

[22]: #frompolar

[23]: #parameters-6

[24]: #abs

[25]: #parameters-7

[26]: #arg

[27]: #parameters-8

[28]: #sqrt

[29]: #parameters-9

[30]: #exp

[31]: #parameters-10

[32]: #log

[33]: #parameters-11

[34]: #pow

[35]: #parameters-12

[36]: #sin

[37]: #parameters-13

[38]: #cos

[39]: #parameters-14

[40]: #tan

[41]: #parameters-15

[42]: #asin

[43]: #parameters-16

[44]: #acos

[45]: #parameters-17

[46]: #atan

[47]: #parameters-18

[48]: https://en.wikipedia.org/wiki/Complex_data_type

[49]: https://en.wikipedia.org/wiki/Complex_number

[50]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[51]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[52]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
