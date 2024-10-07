## Data types, Operators

---

## Data types

```js
let age = 25;
let name = ??????
```

```js
let age = 25;
let name = 'Ivan'; // "Ivan" or `Ivan`
```

---

## Data types

- String
- Number
- BigInt
- Boolean
- undefined
- null
- Symbol
- Object

---

<!-- .slide: style="font-size: .5em" -->

## Data types

| Data Type | Description                                           | Example                       |
| --------- | ----------------------------------------------------- | ----------------------------- |
| String    | Textual data.                                         | 'hello', "hello world!", etc. |
| Number    | An integer or a floating-point number.                | 3, 3.234, 3e-2, etc.          |
| BigInt    | An integer with arbitrary precision.                  | 900719925124740999n, 1n, etc. |
| Boolean   | Any of two values: true or false.                     | true and false                |
| undefined | A data type whose variable is not initialized.        | let a;                        |
| null      | Denotes a null value.                                 | let a = null;                 |
| Symbol    | A data type whose instances are unique and immutable. | let value = Symbol('hello');  |
| Object    | Key-value pairs of collection of data.                | let student = {name: "John"}; |

---

## JavaScript String

A string represents textual data. It contains a sequence of characters. For example, "hello", "JavaScript", etc.

In JavaScript, strings are surrounded by quotes:

- Single quotes: 'Hello'
- Double quotes: "Hello"
- Backticks: `Hello`

```js
let fruit = 'apple';
fruit;

let result = `fail`;
result;
```

---

## JavaScript Number

In JavaScript, the number type represents numeric values (both integers and floating-point numbers).

- Integers - Numeric values without any decimal parts. Example: 3, -74, etc.
- Floating-Point - Numeric values with decimal parts. Example: 3.15, -1.3, etc.

```js
let integer_number = -3;
integer_number;

let float_number = 3.15;
float_number;
```

---

## JavaScript Numeric Special Values

JavaScript can also represent special numeric values such as Infinity, -Infinity, and NaN (Not-a-Number)

```js
let number1 = 3 / 0;
number1; // Infinity

let number2 = -3 / 0;
number2; // -Infinity

// strings can't be divided by numbers
let number3 = 'abc' / 3;
number3; // NaN
```

---

## JavaScript BigInt

BigInt is a type of number that can represent very large or very small integers beyond the range of the regular number data type (values less than (2^53 - 1) and greater than -(2^53 - 1))

A BigInt number is created by appending n to the end of an integer

```js
let value1 = 900719925124740998n; // BigInt value
let result1 = value1 + 1n;
result1; // "900719925124740999n"
```

---

## JavaScript Boolean

A Boolean data can only have one of two values: true or false

```js
let dataChecked = true;
dataChecked; // true

let valueCounted = false;
valueCounted; // false
```

---

## JavaScript undefined

undefined represents the absence of a value.

If a variable is declared but the value is not assigned, then the value of that variable will be undefined

```js
let name;
name; // undefined
```

It is also possible to explicitly assign undefined as a variable value. For example,

```js
let name = undefined;
name; // undefined
```

---

## JavaScript null

null represents "no value" or "nothing." For example,

```js
let number = null;
number; // null
```

> It's not recommended to explicitly assign undefined to a variable. Usually, we assign null to variables to indicate "unknown" or "empty" values.

---

## JavaScript Symbol

A Symbol is a unique value

When you create a Symbol, JavaScript guarantees that it is distinct from all other symbols, even if they have the same descriptions

```js
let value1 = Symbol('programiz');
let value2 = Symbol('programiz');
value1 === value2; // false
```

---

## JavaScript Object

An Object holds data in the form of key-value pairs. For example,

```js
let student = {
  firstName: 'John',
  lastName: null,
  class: 10,
};
```

---

## JavaScript Operators

JavaScript operators are special symbols that perform operations on one or more operands (values)

```js
5 + 6; // 11
```

---

## Types of JavaScript Operators

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- String Operators
- Logical Operators
- Bitwise Operators
- Ternary Operators
- Type Operators

---

<!-- .slide: style="font-size: .7em" -->

#### JavaScript Arithmetic Operators

| Operator | Description                  | Same as  |
| -------- | ---------------------------- | -------- |
| +        | Addition                     | x + y    |
| -        | Subtraction                  | x - y    |
| \*       | Multiplication               | x \* y   |
| \*\*     | Exponentiation               | x \*\* y |
| /        | Division                     | x / y    |
| %        | Modulus (Division Remainder) | x % y    |
| ++       | Increment                    | x + 1    |
| --       | Decrement                    | x - 1    |

> Arithmetic operators are fully described in the [JS Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp) chapter.

---

<!-- .slide: style="font-size: .7em" -->

#### JavaScript Assignment Operators

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| =        | x = y     | x = y        |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

> Arithmetic operators are fully described in the [JS Assigment](https://www.w3schools.com/js/js_assignment.asp) chapter.

---

<!-- .slide: style="font-size: .7em" -->

#### JavaScript Comparison Operators

| Operator | Description                       | Same As   |
| -------- | --------------------------------- | --------- |
| ==       | equal to                          | x == y    |
| ===      | equal value and equal type        | x === y   |
| !=       | not equal                         | x != y    |
| !==      | not equal value or not equal type | x !== y   |
| >        | greater than                      | x > y     |
| <        | less than                         | x < y     |
| >=       | greater than or equal to          | x >= y    |
| <=       | less than or equal to             | x <= y    |
| ?        | ternary operator                  | x ? y : z |

> Arithmetic operators are fully described in the [JS Comparison](https://www.w3schools.com/js/js_comparisons.asp) chapter.

---

<!-- .slide: style="font-size: .7em" -->

#### JavaScript Logical Operators

| Operator     | Description | Same As          |
| ------------ | ----------- | ---------------- |
| &&           | logical and | x && y           |
| &#124;&#124; | logical or  | x &#124;&#124; y |
| !            | logical not | !x               |

> Arithmetic operators are fully described in the [JS Comparison](https://www.w3schools.com/js/js_comparisons.asp) chapter.

---

<!-- .slide: style="font-size: .6em;" -->

#### JavaScript Logical Operators

| Left | Operator | Right | Result |
| ---- | -------- | ----- | ------ |
| 0    | &&       | 0     | 0      |
| 0    | &&       | 1     | 0      |
| 1    | &&       | 0     | 0      |
| 1    | &&       | 1     | 1      |

| Left | Operator     | Right | Result |
| ---- | ------------ | ----- | ------ |
| 0    | &#124;&#124; | 0     | 0      |
| 0    | &#124;&#124; | 1     | 1      |
| 1    | &#124;&#124; | 0     | 1      |
| 1    | &#124;&#124; | 1     | 1      |

| Operator | Value | Result |
| -------- | ----- | ------ |
| !        | 0     | 1      |
| !        | 1     | 0      |

---

<!-- .slide: style="font-size: .7em" -->

#### JavaScript Bitwise Operators

| Operator | Description          | Example    | Same as          | Result | Decimal |
| -------- | -------------------- | ---------- | ---------------- | ------ | ------- |
| &        | AND                  | 5 & 1      | 0101 & 0001      | 0001   | 1       |
| &#124;   | OR                   | 5 &#124; 1 | 0101 &#124; 0001 | 0101   | 5       |
| ~        | NOT                  | ~ 5        | ~0101            | 1010   | 10      |
| ^        | XOR                  | 5 ^ 1      | 0101 ^ 0001      | 0100   | 4       |
| <<       | left shift           | 5 << 1     | 0101 << 1        | 1010   | 10      |
| >>       | right shift          | 5 >> 1     | 0101 >> 1        | 0010   | 2       |
| >>>      | unsigned right shift | 5 >>> 1    | 0101 >>> 1       | 0010   | 2       |

> Arithmetic operators are fully described in the [JS Bitwise](https://www.w3schools.com/js/js_bitwise.asp) chapter.

---

#### Used Materials

```md
https://www.w3schools.com/js/js_operators.asp

https://www.w3schools.com/js/js_assignment.asp

https://www.w3schools.com/js/js_datatypes.asp

https://www.programiz.com/javascript/data-types

https://www.programiz.com/javascript/operators
```
