## Data types, expressions, values, operators

---

## Source code

> <b style="color: yellow">Source code or just code</b> - a set of instructions telling to the computer which tasks it has to complete

> <b style="color: yellow">Operator</b> - a group of words, number and operations performing a particular task

---

```js
// Source code example

sum = number + 100; // Operator example

/**
 * sum - variable
 * number - variable
 * 100 - literal - a constant value that can be assigned to the variable
 * = + - operations, perforing some actions like assigment, plus, minus, etc
 **/
```

---

## Demo: Run JavaScript program "Hello World" in Browser

```js
alert('Hello world');
```

---

## Demo: Run JavaScript program "Hello World" in Node

```js
process.stdout.write('Hello world');
```

---

## Definion

> JavaScript language <b style="color: yellow">doesn't exist by itself</b>. It's a scripting language that <b style="color: yellow">must be hosted elsewhere</b>.

Note: Язык работает только потому, что он куда-то встроен

---

## Definition

<b style="color: yellow">JavaScript language</b> - is something like an abstraction

<b style="color: yellow">RunTime</b> - is a program which implements the abstraction mentioned above

<b style="color: yellow">Host</b> - is an another program that has RunTime inside

---

## Host and RunTime

- <b style="color: yellow">RunTime</b>: V8, SpiderMonkey, JavaScript Core, etc...
- <b style="color: yellow">Host</b>: Browser, Node, d8, etc...

---

#### JavaScript language owns:

```js
AggregateError;
Array;
ArrayBuffer;
Atomics;
BigInt;
BigInt64Array;
BigUnit64Array;
Boolean;
DateView;
Date;
decodeURI;
decodeURIComponent;
encodeURI;
encodeURIComponent;
Error;
escape;
eval;
EvalError;
FinalizationRegistry;
Float32Array;
Float64Array;
Function;
globalThis;
Infinity;
Int16Array;
Int32Array;
Int8Array;
Intl;
isFinite;
isNaN;
JSON;
Map;
Math;
NaN;
Number;
Objects;
parseFloat;
parseInt;
Promise;
Proxy;
RangeError;
ReferenceError;
Reflect;
RegExp;
Set;
SharedArrayBuffer;
String;
Symbol;
SyntaxError;
TypeError;
Uint16Array;
Uint32Array;
Uint8Array;
Uint8ClampedArray;
undefined;
unescape;
URIError;
WeakMap;
WeakRef;
WeakSet;
```

---

### Don't exist in JavaScript language

```js
DOM;
Events;
EventLoop;
setTimeout, setInternval;
fs;
canvas
console.log;
alert;
Garbage Collector;
...
```

---

## Definition

> Host could live without scripting language JavaScript (i.e Browser without JS could still display web pages)

---

## JavaScript

#### This <b style="color: yellow">is not</b> JavaScript

```js
alert('Hello world');
```

#### This <b style="color: yellow">is</b> JavaScript

```js
'Hello world';
```

---

> Be able to spot the difference between JavaScript language features and host features

---

## Expressions

```js
> 5
< 5
```

```js
> 7
< 7
```

```js
> 5 + 7
< 12
```

Note: why without = it prints 12?

---

## Expressions

```js
> var sum = 5 + 7;
< undefined
```

```js
> var sum = 5 + 7;
< sum;
```

Note: first case - why stops to print?

---

## Expressions

```js
> var a = 5;
  var b = 7;
  a + b;
< 12
```

```js
> var a = 5;
  var b = 7;
  var sum = 5 + 7;
< undefined
```

Note: first case - why stops to print?

---

## Expressions

```js
> (5 + 7)
< 12
```

```js
> (5 + 7);
< 12
```

Note: Язык - интерпритируемый язык. В текущую ед времени команда которая поступает в интерпретатор разбирается на составляющие и в обяз порядке все эти составляющие выполняются (вычисляются)
Когда пишем комнаду 5, то внутрь интерпретатора идет команда (5 - это выражение, команда), которая пустает в runtime и она заставляет наш RunTime ыполнять комнаду. В случае комнады 5 выполнение этой команды должно вернуть цифру 5.
5 + 7 - это выражение, которая состоит из команды (5) комнады + и команды (7), эти комаггды выполняются (вычисляются) и возвращается результат
В рамках интерпритируемого языка, чтобы не было перед вами перед глазами, то вы видете не то, что вам кажется. Число 5 - это не числа 5. Это оператор, выражение, которое вернет что-то, что позволит ее интерпретировать как число 5.
5 + 7 --> выражение 5 вычисляетя и выдает число 5, выражение 7 вычисляется и дает число 7, выражение 5 + 7 вычиляется и дает 12, а так как больше команд от нас нет, то это 12 возвращаеся

---

## Expressions

> In JavaScript what you see is something that is being computed, it is not what it seems to be

- a number is not a number, it's an expression to be computed
- () - is an expression
- ; is an expression

---

## Definition

<b style="color: yellow">Variable</b> - is a container to store a link and a data, accessible by this link

All JavaScript variables must be <b style="color: yellow">identified</b> with <b style="color: yellow">unique names</b>

These unique names are called <b style="color: yellow">identifiers</b>

---

## Identifiers

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs
- Names must begin with a letter
- Names can also begin with $ and \_
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names

---

## Variable declaration

JavaScript Variables can be declared in 4 ways:

- Automatically
- Using <b style="color: yellow">`var`</b>
- Using <b style="color: yellow">`let`</b>
- Using <b style="color: yellow">`const`</b>

---

## Variable automatic declaration

```js
x = 5;
y = 6;
z = x + y;
```

---

## Variable automatic declaration

```js
x = 5;
y = 6;
z = x + y;
```

---

## Data types

> <b style="color: yellow">Data</b> - 1, 54, 0.00, "My name is JavaScript", true, false

> <b style="color: yellow">Types</b> - data representative in memory

---

#### Used Materials

```md
https://www.youtube.com/watch?v=1F-8pn30bOI

https://www.youtube.com/watch?v=U5BN_lFE5d8&list=PL3ziSA8uO7KnIt1JQS1FIq6WNoh7UaMhg&index=5

https://www.w3schools.com/js/js_variables.asp
```

---
