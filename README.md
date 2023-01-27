<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Classes](#classes)
  - [Class: Complex](#class-Complex)
    - [Table of contents](#table-of-contents)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
- [Documentation](#documentation)
  - [Table of contents](#table-of-contents-1)
    - [Classes](#classes-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>



# Classes


<a name="classesComplexmd"></a>

## Class: Complex

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

**`License`**

AGPL-3.0-or-later

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [imag](#imag)
- [real](#real)
- [I](#i)
- [ONE](#one)
- [TWO](#two)
- [ZERO](#zero)

#### Methods

- [add](#add)
- [conj](#conj)
- [div](#div)
- [equals](#equals)
- [mul](#mul)
- [neg](#neg)
- [sub](#sub)
- [toString](#tostring)
- [abs](#abs)
- [acos](#acos)
- [arg](#arg)
- [asin](#asin)
- [atan](#atan)
- [cos](#cos)
- [exp](#exp)
- [fromPolar](#frompolar)
- [log](#log)
- [pow](#pow)
- [sin](#sin)
- [sqrt](#sqrt)
- [tan](#tan)

### Constructors

#### constructor

**new Complex**(`real?`, `imag?`)

Creates a complex number in Cartesian form.

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `real` | `number` | `0` |
| `imag` | `number` | `0` |

##### Defined in

[Complex.ts:53](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L53)

### Properties

#### imag

 **imag**: `number`

Imaginary part.

##### Defined in

[Complex.ts:38](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L38)

___

#### real

 **real**: `number`

Real part.

##### Defined in

[Complex.ts:35](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L35)

___

#### I

 `Static` **I**: [`Complex`](#classesComplexmd)

The imaginary unit.

##### Defined in

[Complex.ts:41](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L41)

___

#### ONE

 `Static` **ONE**: [`Complex`](#classesComplexmd)

One, as a complex number.

##### Defined in

[Complex.ts:47](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L47)

___

#### TWO

 `Static` **TWO**: [`Complex`](#classesComplexmd)

Two, as a complex number.

##### Defined in

[Complex.ts:50](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L50)

___

#### ZERO

 `Static` **ZERO**: [`Complex`](#classesComplexmd)

Zero, as a complex number.

##### Defined in

[Complex.ts:44](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L44)

### Methods

#### add

**add**(`other`): [`Complex`](#classesComplexmd)

Addition.  $(a + bi) + (c + di) = (a + c) + (b + d)i$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:80](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L80)

___

#### conj

**conj**(): [`Complex`](#classesComplexmd)

Returns the complex conjugate $\overline{a + bi} = a - bi$.

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:135](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L135)

___

#### div

**div**(`other`): [`Complex`](#classesComplexmd)

Division.  $\displaystyle \frac{a + bi}{c + di} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$.
This can also be written in polar form:
$\displaystyle \frac{r_1 e^{i\theta_1}}{r_2 e^{i\theta_2}} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)}$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:112](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L112)

___

#### equals

**equals**(`other`): `boolean`

Equality.  $a + bi = c + di \iff a = c \wedge b = d$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Complex`](#classesComplexmd) |

##### Returns

`boolean`

##### Defined in

[Complex.ts:142](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L142)

___

#### mul

**mul**(`other`): [`Complex`](#classesComplexmd)

Multiplication.  $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$.  This can
also be written in polar form: $r_1 e^{i\theta_1} r_2 e^{i\theta_2} = r_1 r_2 e^{i(\theta_1 + \theta_2)}$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:95](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L95)

___

#### neg

**neg**(): [`Complex`](#classesComplexmd)

Returns the additive inverse $-(a + bi) = -a - bi$.

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:128](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L128)

___

#### sub

**sub**(`other`): [`Complex`](#classesComplexmd)

Subtraction.  $(a + bi) - (c + di) = (a - c) + (b - d)i$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:87](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L87)

___

#### toString

**toString**(): `string`

String representation in Cartesian form.

##### Returns

`string`

##### Defined in

[Complex.ts:233](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L233)

___

#### abs

`Static` **abs**(`z`): `number`

Returns the absolute value $|a + bi| = \sqrt{a^2 + b^2}$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

`number`

##### Defined in

[Complex.ts:66](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L66)

___

#### acos

`Static` **acos**(`z`): [`Complex`](#classesComplexmd)

Inverse cosine.  $\arccos(z) = -i \ln \left( i \sqrt{1 - z^2} + z \right)$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:218](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L218)

___

#### arg

`Static` **arg**(`z`): `number`

Returns the argument $\arg(a + bi) = \operatorname{atan2}(b, a)$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

`number`

##### Defined in

[Complex.ts:73](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L73)

___

#### asin

`Static` **asin**(`z`): [`Complex`](#classesComplexmd)

Inverse sine.  $\arcsin(z) = -i \ln \left( \sqrt{1 - z^2} + iz \right)$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:210](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L210)

___

#### atan

`Static` **atan**(`z`): [`Complex`](#classesComplexmd)

Inverse tangent.  $\displaystyle \arctan(z) = -\frac{i}{2} \ln \left( \frac{i - z}{i + z} \right)$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:226](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L226)

___

#### cos

`Static` **cos**(`z`): [`Complex`](#classesComplexmd)

Cosine.  $\cos(a + bi) = \cos(a) \cosh(b) - i \sin(a) \sinh(b)$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:187](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L187)

___

#### exp

`Static` **exp**(`z`): [`Complex`](#classesComplexmd)

Exponential function.  $e^{a + bi} = e^a e^{bi}$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:156](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L156)

___

#### fromPolar

`Static` **fromPolar**(`abs?`, `arg?`): [`Complex`](#classesComplexmd)

Creates a complex number in polar form.

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `abs` | `number` | `0` |
| `arg` | `number` | `0` |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:59](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L59)

___

#### log

`Static` **log**(`z`): [`Complex`](#classesComplexmd)

Logarithm.  $\ln(re^{i\theta}) = \ln(r) + i\theta$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:163](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L163)

___

#### pow

`Static` **pow**(`z`, `w`): [`Complex`](#classesComplexmd)

Exponentiation.  $z^w = e^{w \ln(z)}$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |
| `w` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:170](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L170)

___

#### sin

`Static` **sin**(`z`): [`Complex`](#classesComplexmd)

Sine.  $\sin(a + bi) = \sin(a) \cosh(b) + i \cos(a) \sinh(b)$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:177](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L177)

___

#### sqrt

`Static` **sqrt**(`z`): [`Complex`](#classesComplexmd)

Returns the square root $\sqrt{re^{i\theta}} = \sqrt{r} e^{i\theta/2}$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:149](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L149)

___

#### tan

`Static` **tan**(`z`): [`Complex`](#classesComplexmd)

Tangent.  $\displaystyle \tan(a + bi) = \frac{\sin(2a) + i \sinh(2b)}{\cos(2a) + \cosh(2b)}$.

##### Parameters

| Name | Type |
| :------ | :------ |
| `z` | [`Complex`](#classesComplexmd) |

##### Returns

[`Complex`](#classesComplexmd)

##### Defined in

[Complex.ts:197](https://github.com/konnosoft/complexts/blob/c78f424/lib/Complex.ts#L197)


<a name="modulesmd"></a>

# Documentation

## Table of contents

### Classes

- [Complex](#classesComplexmd)
