# Scope, Environment, Context

---

## Question

```js
const age = 22;
const isAllowed = age >= 18 ? 'Yes' : 'No';

console.log(name); // ?
```

---

## Answer

```js
const age = 22;
const isAllowed = age >= 18 ? 'Yes' : 'No';

console.log(name); // 'Yes'
```

---

## Question

```js
let age;

console.log(age); // ?

age = +prompt('Enter age');

console.log(age); // ?
```

---

## Answer

```js
let age;

console.log(age); // undefined

age = +prompt('Enter age'); // '54' -> +'54' -> 54

console.log(age); // 54
```

---

## Question

```js
console.log(age); // ?

const age = +prompt('Enter age');

console.log(age); // ?
```

---

## Answer

```js
console.log(age); // Reference error: age is not defined

const age = +prompt('Enter age');

console.log(age); // ?
```

---

## Question

```js
console.log(age); // ?

var age = +prompt('Enter age');

console.log(age); // ?
```

---

## Answer

```js
console.log(age); // undefined

var age = +prompt('Enter age'); // '12' -> +'12' -> 12

console.log(age); // 12
```

---

## Question

```js
const age = +prompt('Enter age');

if (age >= 14 && age <= 18) {
  const message = 'You are too little';
} else if (age > 18) {
  const message = 'You are an adult';
} else {
  console.log('Enter age again');
}

console.log(message); // ?
```

---

## Answer

```js
const age = +prompt('Enter age');

if (age >= 14 && age <= 18) {
  const message = 'You are too little';
} else if (age > 18) {
  const message = 'You are an adult';
} else {
  console.log('Enter age again');
}

console.log(message); // Reference Error: message is not defined
```

---

## Question

```js
var age = +prompt('Enter age');

if (age >= 14 && age <= 18) {
  var message = 'You are too little';
} else if (age > 18) {
  var message = 'You are an adult';
} else {
  console.log('Enter age again');
}

console.log(message); // ?
```

---

## Answer

```js
var age = +prompt('Enter age'); // '16' -> +'16' -> 16

if (age >= 14 && age <= 18) {
  var message = 'You are too little';
} else if (age > 18) {
  var message = 'You are an adult';
} else {
  console.log('Enter age again');
}

console.log(message); // 16
```

---

## Question

```js
const name = 'Ivan';

function sayHi() {
  console.log(`Hi ${name}`); // ?
}

sayHi();
```

---

## Answer

```js
const name = 'Ivan';

function sayHi() {
  console.log(`Hi ${name}`); // 'Hi Ivan'
}

sayHi();
```

---

## Question

```js
function sayHi() {
  console.log(`Hi ${name}`); // ?
}

const name = 'Ivan';

sayHi();
```

---

## Answer

```js
function sayHi() {
  console.log(`Hi ${name}`); // 'Hi Ivan'
}

const name = 'Ivan';

sayHi();
```

---

## Question

```js
function sayHi() {
  const message = `Hi ${name}`;
}

const name = 'Ivan';

sayHi();

console.log(message); // ?
```

---

## Answer

```js
function sayHi() {
  const message = `Hi ${name}`;
}

const name = 'Ivan';

sayHi();

console.log(message); // Reference Error: message is not defined
```

---

## Question

```js
function sayHi() {
  message = `Hi ${name}`;
}

const name = 'Ivan';
let message;

sayHi();

console.log(message); // ?
```

---

## Answer

```js
function sayHi() {
  message = `Hi ${name}`;
}

const name = 'Ivan';
let message;

sayHi();

console.log(message); // 'Hi Ivan'
```

---

## Scope, Environment

---

### Definition

> <b style="color: yellow">Scope</b> is the current context of execution in which values and expressions are "visible" or can be referenced.

https://developer.mozilla.org/en-US/docs/Glossary/Scope

---

<!-- .slide: style="font-size: .8em" -->

## Scope types

- <b style="color: yellow">Global scope</b>: The default scope for all code running in script mode
- <b style="color: yellow">Module scope</b>: The scope for code running in module mode.
- <b style="color: yellow">Function scope</b>: The scope created with a function.

In addition, identifiers declared with certain syntaxes, including `let`, `const`, `class`, or (in strict mode) `function`, can belong to an additional scope:

- <b style="color: yellow">Block scope</b>: The scope created with a pair of curly braces (a block).

---

## Global scope

```js
var x = 1;

function print() {
  console.log('print');
}

console.log('global', x); // a variable is accesed in global scope by an identifier 'x'

print(); // a function is accesed in global scope by an identifier 'print'
```

---

## Module scope

> IFFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined

https://developer.mozilla.org/en-US/docs/Glossary/IIFE

```js
(function () {
  // inside IFFE
})();
```

---

### Module scope

```js
var x = 1;

(function () {
  // Module Scope
  var x = 2; // inside module scope identifier 'x' is not the same at in global scope identifier 'x'
  var y = 5; // identifier with name 'y' is accessbile only inside module scope, not in global scope

  console.log('iffe', x, y); // 'iffe 2 5'
})();

// identifiers with names 'x' and 'y' are accessible in global scope
console.log('global', x, y); // Reference error: 'y' is not defined
```

---

## Function scope

```js
var x = 1;

function print() {
  // Function scope
  var y = 2;
  // identifiers with names 'x' and 'y' are accessible in function scope
  console.log('print', x, y); // 'print 1 2'
  // A question - how is 'x' accessible in function scope from global scope?
}

print(); // a function is accesed in global scope by an identifier 'print'

console.log(y); // Reference error: 'y' is not defined
```

---

## Block scope

```js
const y = 2;

if (true) {
  // Block scope
  var x = 1; // Identifier defined with 'var' is not being affected by block scope, it's in global/function scope
  let z = 3;
  console.log(x, y, z); // 1 2 3
}

{
  // Block scope
  let z = 5;
  console.log(x, y, z); // 1 2 5
}

console.log(x, y, z); // Reference error: 'z' is not defined, but 'x' is 1 and 'y' is 2
```

---

## Execution context

---

### Definition

> <b style="color: yellow">Execution context</b> defines environment in which our code is executed

It contains a lot of internal components that the engine uses to keep track of the execution flow of the code

---

### Definition

> <b style="color: yellow">Environment Record</b> is being used to keep track and maintain the identifier bindings that have been created for the variable and function declarations

---

### JavaScript Compiler phases

When a global code / function / eval is executed it goes through the below phase:

1. Memory Creation phase
2. Code Execution phase

---

### Memory Creation phase

During this stage, JavaScript prepares the groundwork by allocating memory for variables and functions, scanning for declarations, and setting up the stage for the code execution. In the memory creation phase, the execution context stores the values of variables and functions in key-value pairs.

---

### Memory Creation phase

Source code for memory creating phase

```js
var number = 1;

function printGlobal() {
  console.log(number);
}

printGlobal();
```

After memory creating phase

```js
number: undefined;
printGlobal: function;
```

---

<!-- .slide: style="font-size: .8em" -->

### Code Execution phase

Code Executed line by line. If there is a function call, then a new exection context is being created (memory creation phase) and then code inside function is being executed (code execution phase).

```js
var number = 1;

function printGlobal() {
  console.log(number);
}

printGlobal();
```

After function code execution is completed, its execution context is deleted and the JavaScript continues to run code after this function call.

---

<!-- .slide: style="font-size: .8em" -->

## Definition

> <b style="color: yellow">Hoisting</b> - is a jargon term for the part of memory creating phase when variables declared in the exection context by the keywords var, const, let, classes, function are hoisted. So the memory is allocated for them but they remain uninitialized (expect var, for them their value is undefined).

They are initialized later during the code execution phase when JavaScript reaches their line of declaration.

If you try to access a variable before it's declared, this will result in the ReferenceError.

---

<!-- .slide: style="font-size: .9em" -->

## Definition

> <b style="color: yellow">Scope chain</b> - is a mechanish made available through the [[OuterEnv]] property a possibility to find a variable in the parent context environment if it's not available in the current execution context

---

<!-- .slide: style="font-size: .9em" -->

## Definition

> <b style="color: yellow">Closures</b> - are formed whenever an inner function keeps a reference to the outer functions variables

---

## Demo

---

## Used materials

https://www.youtube.com/watch?v=eghLLFbTDYM

https://dev.to/jahid6597/javascript-execution-context-a-deep-dive-4kno

https://developer.mozilla.org/en-US/docs/Glossary/Scope

https://developer.mozilla.org/en-US/docs/Glossary/IIFE

https://www.youtube.com/watch?v=zdGfo6I1yrA

https://en.wikipedia.org/wiki/Scope_(computer_science)
