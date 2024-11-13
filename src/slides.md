# This

---

## Directive "use strict";

```js
x = 3.14;
console.log(x); // 3.14
```

```js
myFunction();

function myFunction() {
  y = 3.14;
  console.log(y); // 3.14
}
```

---

## Directive "use strict";

> Defines that JavaScript code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

```js
'use strict';
x = 3.14;
console.log(x); // ReferenceError: x is not defined
```

---

## Directive "use strict";

> Defines that JavaScript code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

```js
x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
  'use strict';
  y = 3.14;
  console.log(y); // ReferenceError: y is not defined
}
```

---

## Why Strict Mode?

Strict mode makes it easier to write "secure" JavaScript.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

---

## Not Allowed in Strict Mode

Using a variable, without declaring it, is not allowed:

```js
'use strict';
x = 3.14;
```

---

## Not Allowed in Strict Mode

Duplicating a parameter name is not allowed:

```js
'use strict';
function x(p1, p1) {}
```

---

## Not Allowed in Strict Mode

Setting properties on primitive values is not allowed:

```js
'use strict';

false.true = ''; // TypeError
(14).sailing = 'home'; // TypeError
'with'.you = 'far away'; // TypeError
```

---

## Not Allowed in Strict Mode

Full list is here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

---

# Arrow function

---

## Arrow function

> An arrow function expression () => {} is a compact alternative to a normal function expression with keyword function() {}

Normal function

```js
function () {}
```

Arrow function

```js
() => {};
```

---

## Arrow function Syntax

```js
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

---

## Arrow function examples

```js
const sum = (a, b) => a + b;
sum(5, 6); // 11
```

```js
const arr = [1, 2, 3];
const mappedArr = arr.map((item, index) => {
  if (index % 2 === 0) {
    return item ** 2;
  } else {
    return item;
  }
});
console.log(mappedArr); // [1, 2, 9]
```

---

<!-- .slide: style="font-size: .8em" -->

# Object creation using keyword new

Problem: what if there are 100 persons? Or 20-30 object properties?

```js
const ivan = { name: 'Ivan' };
const anton = { name: 'Anton' };
const maria = { name: 'Maria' };
//...
```

---

<!-- .slide: style="font-size: .8em" -->

# Object creation using keyword new

Rough solution idea

```js
function Person(name) {
  return {
    name: name,
  };
}

const ivan = Person('Ivan');
const anton = Person('Anton');
const maria = Person('Maria');
//...
```

---

<!-- .slide: style="font-size: .8em" -->

# Object creation using keyword new

Better solution idea

```js
function Person(name) {
  this.name = name; // keyword this referenced to the object you're going to create
}

const ivan = new Person('Ivan'); // keyword new is used to trigger object creation
const anton = new Person('Anton');
const maria = new Person('Maria');
//...
```

---

<!-- .slide: style="font-size: .8em" -->

# Object creation using keyword new

Better solution idea

```js
function Person(name, age) {
  this.name = name; // keyword this referenced to the object you're going to create
  this.age = age;
}

const persons = [
  new Person('Ivan', 24), // keyword new is used to trigger object creation
  new Person('Anton', 18),
  new Person('Maria', 20),
];
//...
```

---

# Keyword this

---

<!-- .slide: style="font-size: .7em" -->

## Keyword this: One more use case

```js
const person = {
  name: 'Ivan',
};

function introduce() {
  console.log(`Hi, my name is ${person.name}`);
}

introduce();
```

```js
const person = {
  name: 'Ivan',
  introduce: function () {
    console.log(`Hi, my name is ${person.name}`);
  },
};

person.introduce();
```

```js
const person = {
  name: 'Ivan',
  introduce: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
};

person.introduce();
```

---

## Keyword this

> <b style="color: yellow">this</b> is a reference to any value

```js
this;
```

```js
function some() {
  return this;
}
```

```js
function Person(name) {
  this.name = name;
}
const person = new Person('Ivan');
```

---

## Keyword this

> <b style="color: yellow">this</b> could be perceived as a JavaScript expression, value of which is defined based on the execution context within a function runs

---

## Normal function, dot notation

> <b style="color: yellow">Normal function</b> is a function that is different to an arrow function, meaning it's a function without symbols =>

> <b style="color: yellow">Dot notation</b> is a syntax when two JavaScript identifiers splitted from each other: person.name, person.introduce()

---

## this - how to understand what value it will be referenced to?

> See how a function is being called

---

## this

When a function is being called, a new environment is being created for the function. And then the function is being executed.

A value of a keyword this depends on how a function is being called.

---

<!-- .slide: style="font-size: .7em" -->

## Global Environment

> Host has a right to define this in global environment

Host: Browser

```js
'use strict';
console.log(this); // Window
```

Host: Node.js 20.x

```js
'use strict';
console.log(this); // {}
```

Host: Node.js 20.x

```js
'use strict';
console.log(globalThis); // Object [global] { setImmediate: [Function: setImmediate], fetch: [AsyncFunction: fetch], ... }
```

---

On the next slides our Host will be a Browser

---

## First question for this - are we inside a function? If no,

this is being set by Host in Global environment

```js
'use strict';
console.log(this); // Window, we are outside of function
```

---

<!-- .slide: style="font-size: .7em" -->

## First question for this - are we inside a function? If yes,

## Second question for this - is it a normal function? If yes,

this is being set by the way how the function was being called

```js
'use strict';
function print() {
  console.log(this); // undefined because we are in "use strict" mode
}

print(); // call a normal function
```

```js
function print() {
  console.log(this); // Window because we are not in "use strict" mode
}

print(); // call a normal function
```

---

<!-- .slide: style="font-size: .6em" -->

## First question for this - are we inside a function? If yes,

## Second question for this - is it a normal function? If no,

this for arrow function keeps the parent function environment

See examples on the slides further

---

<!-- .slide: style="font-size: .6em" -->

## Third question for this - are there call, apply, bind

If yes, then this equals the value from call/apply/bind (first argument)

If no, then asking the next question

```js
'use strict';
function print() {
  console.log(this);
}

print(); // this is undefined
print.call(null); // this is null
print.apply({ name: 'Ivan' }); // this is { name: 'Ivan' }
print.bind(54)(); // this is 54
```

---

<!-- .slide: style="font-size: .6em" -->

## Fourth question for this - is there keyword new

If yes, then this equals {}

If no, then asking the next question

```js
'use strict';

function Person() {
  console.log(this);
}

const person = new Person(); // this is {}
```

---

<!-- .slide: style="font-size: .6em" -->

## Fifth question for this - dot-notation

If a function is called using dot-notation, then this equals object from the left side from dot

If no, then by default this is undefined ("use strict"; mode) or what Host defines

```js
'use strict';
function print() {
  console.log(this);
}

var ivan = { name: 'Ivan' };
ivan.print = print;
ivan.print(); // this is { name: 'Ivan', print: f }
```

```js
'use strict';
const ivan = {
  name: 'Ivan',
  print: function () {
    console.log(this);
  },
};
ivan.print(); // this is { name: 'Ivan', print: f }
```

---

<!-- .slide: style="font-size: .6em" -->

## Fifth question for this - dot-notation

If a function is called using dot-notation, then this equals object from the left side from dot

If no, then by default this is undefined ("use strict"; mode) or what Host defines

```js
'use strict';
function Person(name) {
  this.name = name;
  this.print = function () {
    console.log(this);
  };
}

const ivan = new Person('Ivan');
ivan.print(); // this is Person { name: 'Ivan', print: f }
```

---

<!-- .slide: style="font-size: .6em" -->

## Fifth question for this - dot-notation

If a function is called using dot-notation, then this equals object from the left side from dot

If no, then by default this is undefined ("use strict"; mode) or what Host defines

```js
'use strict';
function Person(name) {
  this.name = name;
  this.print = () => {
    console.log(this);
  };
}

const ivan = new Person('Ivan');
ivan.print(); // this is Person { name: 'Ivan', person: f }
```

---

<!-- .slide: style="font-size: .6em" -->

## Fifth question for this - dot-notation

If a function is called using dot-notation, then this equals object from the left side from dot

If no, then by default this is undefined ("use strict"; mode) or what Host defines

```js
'use strict';
function Person(name) {
  return {
    name,
    print: function () {
      console.log(this);
    },
  };
}

const ivan = Person('Ivan');
ivan.print(); // this is { name: 'Ivan', print: f }
```

```js
'use strict';
function Person(name) {
  return {
    name,
    print: () => {
      console.log(this);
    },
  };
}

const ivan = Person('Ivan');
ivan.print(); // this is undefined
```

---

## Used materials

- https://www.youtube.com/watch?v=fQ7_GT8_zeM

- https://docs.google.com/presentation/d/1LDJMSHmTkrYYdXQCinUIAQ9BMV2jIrctHhMfGSJDlXQ/edit?usp=sharing

- https://drive.google.com/drive/folders/1n8pXffdvd9DeNpeXGR8rBbFUM8Hxa_ms

- https://www.w3schools.com/js/js_strict.asp

- https://www.w3schools.com/js/js_this.asp

- https://www.w3schools.com/js/js_arrow_function.asp

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
