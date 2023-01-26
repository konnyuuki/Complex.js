# Class: default

This is an implementation of a [complex data
type](https://en.wikipedia.org/wiki/Complex_data_type) in TypeScript.  It is
intended for educational purposes to learn how it can be implemented or what
[complex numbers](https://en.wikipedia.org/wiki/Complex_number) are.

Complex numbers have two forms: Cartesian $z = a + bi$ and polar
$z=re^{i\theta}$.  We use the former as an internal representation, storing
the real and imaginary parts as JavaScript numbers (i.e., 64-bit floating
point numbers).

The `Complex` class defines arithmetic operations on complex numbers and a
complex version of the static methods of the built-in `Math` object.  Since
JavaScript does not support operator overloading, arithmetic operations are
provided as `add`, `sub`, `mul`, and `div` instance methods.  For instance,
$e^{i\pi}$ becomes `Complex.exp(Complex.I.mul(Math.PI))`.

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [imag](default.md#imag)
- [real](default.md#real)
- [I](default.md#i)
- [ONE](default.md#one)
- [TWO](default.md#two)
- [ZERO](default.md#zero)

### Methods

- [add](default.md#add)
- [conj](default.md#conj)
- [div](default.md#div)
- [equals](default.md#equals)
- [mul](default.md#mul)
- [neg](default.md#neg)
- [sub](default.md#sub)
- [toString](default.md#tostring)
- [abs](default.md#abs)
- [acos](default.md#acos)
- [arg](default.md#arg)
- [asin](default.md#asin)
- [atan](default.md#atan)
- [cos](default.md#cos)
- [exp](default.md#exp)
- [fromPolar](default.md#frompolar)
- [log](default.md#log)
- [pow](default.md#pow)
- [sin](default.md#sin)
- [sqrt](default.md#sqrt)
- [tan](default.md#tan)

## Constructors

### constructor

**new default**(`real?`, `imag?`)

Creates a complex number in Cartesian form.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `real` | `number` | `0` |
| `imag` | `number` | `0` |

#### Defined in

[Complex.ts:38](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L38)

## Properties

### imag

 **imag**: `number`

Imaginary part.

#### Defined in

[Complex.ts:23](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L23)

___

### real

 **real**: `number`

Real part.

#### Defined in

[Complex.ts:20](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L20)

___

### I

 `Static` **I**: [`default`](default.md)

The imaginary unit.

#### Defined in

[Complex.ts:26](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L26)

___

### ONE

 `Static` **ONE**: [`default`](default.md)

One, as a complex number.

#### Defined in

[Complex.ts:32](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L32)

___

### TWO

 `Static` **TWO**: [`default`](default.md)

Two, as a complex number.

#### Defined in

[Complex.ts:35](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L35)

___

### ZERO

 `Static` **ZERO**: [`default`](default.md)

Zero, as a complex number.

#### Defined in

[Complex.ts:29](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L29)

## Methods

### add

**add**(`other`): [`default`](default.md)

Addition.  $(a + bi) + (c + di) = (a + c) + (b + d)i$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:65](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L65)

___

### conj

**conj**(): [`default`](default.md)

Returns the complex conjugate $\overline{a + bi} = a - bi$.

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:120](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L120)

___

### div

**div**(`other`): [`default`](default.md)

Division.  $\displaystyle \frac{a + bi}{c + di} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$.
This can also be written in polar form:
$\displaystyle \frac{r_1 e^{i\theta_1}}{r_2 e^{i\theta_2}} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)}$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:97](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L97)

___

### equals

**equals**(`other`): `boolean`

Equality.  $a + bi = c + di \iff a = c \wedge b = d$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`default`](default.md) |

#### Returns

`boolean`

#### Defined in

[Complex.ts:127](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L127)

___

### mul

**mul**(`other`): [`default`](default.md)

Multiplication.  $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$.  This can
also be written in polar form: $r_1 e^{i\theta_1} r_2 e^{i\theta_2} = r_1 r_2 e^{i(\theta_1 + \theta_2)}$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:80](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L80)

___

### neg

**neg**(): [`default`](default.md)

Returns the additive inverse $-(a + bi) = -a - bi$.

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:113](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L113)

___

### sub

**sub**(`other`): [`default`](default.md)

Subtraction.  $(a + bi) - (c + di) = (a - c) + (b - d)i$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:72](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L72)

___

### toString

**toString**(): `string`

String representation in Cartesian form.

#### Returns

`string`

#### Defined in

[Complex.ts:218](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L218)

___

### abs

`Static` **abs**(`z`): `number`

Returns the absolute value $|a + bi| = \sqrt{a^2 + b^2}$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

`number`

#### Defined in

[Complex.ts:51](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L51)

___

### acos

`Static` **acos**(`z`): [`default`](default.md)

Inverse cosine.  $\arccos(z) = -i \ln \left( i \sqrt{1 - z^2} + z \right)$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:203](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L203)

___

### arg

`Static` **arg**(`z`): `number`

Returns the argument $\arg(a + bi) = \operatorname{atan2}(b, a)$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

`number`

#### Defined in

[Complex.ts:58](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L58)

___

### asin

`Static` **asin**(`z`): [`default`](default.md)

Inverse sine.  $\arcsin(z) = -i \ln \left( \sqrt{1 - z^2} + iz \right)$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:195](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L195)

___

### atan

`Static` **atan**(`z`): [`default`](default.md)

Inverse tangent.  $\displaystyle \arctan(z) = -\frac{i}{2} \ln \left( \frac{i - z}{i + z} \right)$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:211](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L211)

___

### cos

`Static` **cos**(`z`): [`default`](default.md)

Cosine.  $\cos(a + bi) = \cos(a) \cosh(b) - i \sin(a) \sinh(b)$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:172](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L172)

___

### exp

`Static` **exp**(`z`): [`default`](default.md)

Exponential function.  $e^{a + bi} = e^a e^{bi}$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:141](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L141)

___

### fromPolar

`Static` **fromPolar**(`abs?`, `arg?`): [`default`](default.md)

Creates a complex number in polar form.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `abs` | `number` | `0` |
| `arg` | `number` | `0` |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:44](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L44)

___

### log

`Static` **log**(`z`): [`default`](default.md)

Logarithm.  $\ln(re^{i\theta}) = \ln(r) + i\theta$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:148](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L148)

___

### pow

`Static` **pow**(`z`, `w`): [`default`](default.md)

Exponentiation.  $z^w = e^{w \ln(z)}$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |
| `w` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:155](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L155)

___

### sin

`Static` **sin**(`z`): [`default`](default.md)

Sine.  $\sin(a + bi) = \sin(a) \cosh(b) + i \cos(a) \sinh(b)$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:162](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L162)

___

### sqrt

`Static` **sqrt**(`z`): [`default`](default.md)

Returns the square root $\sqrt{re^{i\theta}} = \sqrt{r} e^{i\theta/2}$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:134](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L134)

___

### tan

`Static` **tan**(`z`): [`default`](default.md)

Tangent.  $\displaystyle \tan(a + bi) = \frac{\sin(2a) + i \sinh(2b)}{\cos(2a) + \cosh(2b)}$.

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`default`](default.md) |

#### Returns

[`default`](default.md)

#### Defined in

[Complex.ts:182](https://github.com/konnosoft/complexts/blob/aa76f77/lib/Complex.ts#L182)
