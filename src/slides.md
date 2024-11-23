# Prototypes, classes

---

## Strings

Why is function includes accessible? Where it's defined?

```js
const str = 'Hello world';

'Hello world'.includes('world'); // true
```

---

## Arrays

Why is property length accessible? Where it's defined?

```js
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}
```

---

## [[Prototype]] object accessible by \_\_proto\_\_

> \_\_proto\_\_ is a reference to the object prototype

```js
const arr = [1, 2, 3];

arr.__proto__; // { at: f, concat: f, find: f, ..., length, ... }
[false, true].__proto__; // { at: f, concat: f, find: f, ..., length, ... }
```

---

## [[Prototype]] object accessible by \_\_proto\_\_

```js
const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
  __proto__: animal, // only for educational purposes
};

console.log(animal.eats, animal.jumps, rabbit.eats, rabbit.jumps); // true undefined true true
```

---

<!-- .slide: style="font-size: .8em" -->

## [[Prototype]] object accessible by \_\_proto\_\_

- \_\_proto\_\_ could reference to an object or null, other types ignored
- Circular references are not allowed
- An object could have only one prototype (one \_\_proto\_\_ reference)

---

<!-- .slide: style="font-size: .8em" -->

## Don't use \_\_proto\_\_ directly, use methods instead

- To get (read) prototype of an object use: Object.getPrototypeOf(obj)
- To set a prototype to an object use: Object.setPrototypeOf(obj, somePrototype);

```js
const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
};

Object.getPrototypeOf(rabbit); // { hasOwnProperty: f, ... } -> some other object (Object.prototype), not animal object
Object.setPrototypeOf(rabbit, animal);
Object.getPrototypeOf(rabbit); // { eats: true }
```

---

<!-- .slide: style="font-size: .7em" -->

## About this

```js
let animal = {
  walk: function () {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep: function () {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: 'White Rabbit',
};

Object.setPrototypeOf(rabbit, animal);

// controls isSleeping inside rabbit object
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined
```

---

<!-- .slide: style="font-size: .7em" -->

## Access to object own properties: Object.keys(obj)

Object.keys - returns an array of strings (names of object own keys)

```js
let animal = {
  sleep: function () {
    console.log(`${this.name} is sleeping`);
  },
};

let rabbit = {
  name: 'White Rabbit',
};

Object.setPrototypeOf(rabbit, animal);

console.log(Object.keys(rabbit));
console.log(Object.keys(animal));
```

---

<!-- .slide: style="font-size: .7em" -->

## Access to object own properties: Loop for..in

Loop for..in - iterates through object own properties and inherited (if a property has enumerable: true)

```js
let animal = {
  sleep: function () {
    console.log(`${this.name} is sleeping`);
  },
};

let rabbit = {
  name: 'White Rabbit',
};

Object.setPrototypeOf(rabbit, animal);

for (let prop in rabbit) {
  console.log(prop); // 'name', 'sleep'
}
```

---

<!-- .slide: style="font-size: .7em" -->

## Access to object own properties: filter own properties

An object has a property hasOwnProperty which returns boolean value if an object has a property passed to a hasOwnProperty function as a parameter

```js
let animal = {
  sleep: function () {
    console.log(`${this.name} is sleeping`);
  },
};

let rabbit = {
  name: 'White Rabbit',
};

Object.setPrototypeOf(rabbit, animal);

for (const prop in rabbit) {
  const isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`${prop} is own property`); // name is own property
  } else {
    console.log(`${prop} inherited property`); // sleep is inherited property
  }
}
```

---

<!-- .slide: style="font-size: .7em" -->

## Object property descriptors

```js
const person = {
  name: 'Ivan',
};

console.log(person.name); // 'Ivan'

const descriptor = Object.getOwnPropertyDescriptor(person, 'name');

console.log(descriptor); // { "value": "Ivan",  "writable": true, "enumerable": true, "configurable": true }
```

---

<!-- .slide: style="font-size: .7em" -->

## Object property descriptors

- writable - if true, then a property is accessible to be changed, otherwise its readonly
- enumerable - if true, then a property is accessible in loops (i.e. for..in), othwerise loops are ignoring it
- configurable - if true, then a property could be deleted and attributes could be changed, otherwise not

Errors are displayed in "use strict;" mode

---

<!-- .slide: style="font-size: .7em" -->

## Object readonly property

Changing an existing property descriptor

```js
'use strict';

const person = {
  name: 'Ivan',
};

Object.defineProperty(person, 'name', {
  writable: false,
});

person.name = 'Maria'; // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
```

---

<!-- .slide: style="font-size: .7em" -->

## Object readonly property

Adding a new property with descriptor

```js
'use strict';

const person = {};

Object.defineProperty(person, 'name', {
  value: 'Ivan'
  writable: false,
});

person.name = 'Maria'; // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
```

---

<!-- .slide: style="font-size: .7em" -->

## Object property descriptors

More info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

---

<!-- .slide: style="font-size: .7em" -->

## Object getters and setters

An object properties could be defined as

- data properties
- accessor properties

```js
const person = {
  firstname: 'Ivan',
  lastname: 'Ivanov',

  // when person.fullname is being called
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },

  set fullname(value) {
    // value: 'Maria Abramovich'
    const values = value.split(' '); // ['Maria', 'Abramovich']

    this.firstname = values[0];
    this.lastname = values[1];

    // All three lines could be replaced by one line
    // [this.firstname, this.lastname] = value.split(' ');
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  },
};

person.firstname; // 'Ivan'
person.fullname; // 'Ivan Ivanov'
person.lastname = 'Scaletta';
person.fullname; // 'Ivan Scaletta'
person.fullname = 'Maria Abramovich';
person.fullname; // 'Maria Abramovich'
person.firstname; // 'Maria'
person.lastname; // 'Abramovich'
```

---

## Prototypes on custom functions

---

## Creating an object

Simple approach

```js
const person = { name: 'Ivan', age: 18 };
```

Generic approach to use a function to create new instances of a Person prototype

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = () => {
    console.log(this.name);
  };
}
const person = new Person('Ivan', 18);
person.sayHi(); // 'Ivan'
```

---

<!-- .slide: style="font-size: .7em" -->

## "prototype" property on function

- Each normal function (not arrow) by default has a property "prototype"
- By default "prototype" referenced to an object with a property "constructor" referenced to the function constructor

```js
function Person(name) {
  this.name = name;
}

// Person.prototype = { constructor: Person }

console.log(Person.prototype.constructor == Person); // true

const person = new Person('Ivan');

console.log(person.constructor == Person); // true

const maria = new person.constructor('Maria');

console.log(maria); // { name: "Maria" }
console.log(person.constructor == maria.constructor); // true
```

---

<!-- .slide: style="font-size: .7em" -->

## "constructor" property

- JavaScript doesn't guarantee to keep the reference to the valid object inside "constructor" property
- By default it's function, but we could change it

```js
function Person(name) {
  this.name = name;
}

Person.prototype = {
  sayHi: function () {
    console.log('hi', this.name);
  },
};

const person = new Person('Ivan');

console.log(person);
console.log(person.contructor); // undefined
```

---

<!-- .slide: style="font-size: .7em" -->

## Avoid replacing function prototype completely

Don't replace a function prototype, add properties to it

```js
function Person(name) {
  this.name = name;
}

Object.defineProperty(Person.prototype, 'age', {
  value: 18, // default value
  writable: true,
  enumerable: true,
  configurable: true,
});

const person = new Person('Ivan', 18);

console.log(person); // { name: 'Ivan' }
console.log(person.age); // 18

for (const prop in person) {
  console.log(prop, person.hasOwnProperty(prop)); // name true, age false
}
```

---

<!-- .slide: style="font-size: .7em" -->

## Define functions in prototypes, not in constructor functions

Problem: sayHi is an inner property of an instance created by a function Person. As many object instances you're creating, the more copied sayHi functions are being created too

```js
function Person(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`Hi ${this.name}`);
  };
}

const person = new Person('Ivan');
const maria = new Person('Maria');
const susy = new Person('Susy');

person.sayHi(); // 'Hi Ivan'
maria.sayHi(); // 'Hi Maria'
susy.sayHi(); // 'Hi Susy'
```

---

<!-- .slide: style="font-size: .7em" -->

## Define functions in prototypes, not in constructor functions

Solution: define functions in prototypes to save memory and avoid copying of functions

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

const person = new Person('Ivan');
const maria = new Person('Maria');
const susy = new Person('Susy');

person.sayHi(); // 'Hi Ivan'
maria.sayHi(); // 'Hi Maria'
susy.sayHi(); // 'Hi Susy'
```

---

## Inheritance

---

## Object.create() method

Object.create() creates a new object, using an existing object as the prototype of the newly created object.

```js
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person); // person should be the prototype of the newly-created object.

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"
```

---

## Inheritance

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log('I am a user', this.name);
};

function Admin(name) {
  User.call(this, name); // call parent constructor
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.print = function () {
  console.log('I am an admin');
};

const user = new User('Ivan');
const admin = new Admin('Maria');

console.log(user, admin);

user.sayHi();
admin.sayHi();
admin.print();
user.print();
```

---

# Classes

---

## Classes

In many other languages, classes, or constructors, are clearly distinguished from objects, or instances. In JavaScript, classes are mainly an abstraction over the existing prototypical inheritance mechanism — all patterns are convertible to prototype-based inheritance. Classes themselves are normal JavaScript values as well, and have their own prototype chains.

---

<!-- .slide: style="font-size: .7em" -->

## Classes: Declaration

```js
class MyClass {
  // Constructor
  constructor() {
    // Constructor body
  }
  // Instance field
  myField = 'foo';
  // Instance method
  myMethod() {
    // myMethod body
  }
  // Static field
  static myStaticField = 'bar';
  // Static method
  static myStaticMethod() {
    // myStaticMethod body
  }
  // Static block
  static {
    // Static initialization code
  }
  // Fields, methods, static fields, and static methods all have
  // "private" forms
  #myPrivateField = 'bar';
}
```

```js
function MyClass() {
  this.myField = 'foo';
  // Constructor body
}
MyClass.myStaticField = 'bar';
MyClass.myStaticMethod = function () {
  // myStaticMethod body
};
MyClass.prototype.myMethod = function () {
  // myMethod body
};

(function () {
  // Static initialization code
})();
```

---

<!-- .slide: style="font-size: .7em" -->

## Classes: Creating an instance

Use keyword new to create a class instance

```js
class MyClass {
  // Constructor
  constructor() {
    // Constructor body
  }
  // Instance field
  myField = 'foo';
  // Instance method
  myMethod() {
    // myMethod body
  }
}

const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

---

<!-- .slide: style="font-size: .7em" -->

## Classes: contructor

Each class instance has its own properties

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = new Person('Ivan');
console.log(person); // { name: 'Ivan' }
```

---

<!-- .slide: style="font-size: .7em" -->

## Classes: methods

Methods are shared between all instances of a classes (Accessible by Propotype)

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const person = new Person('Ivan');
console.log(person); // { name: 'Ivan', sayHi: f }

person.sayHi(); // Hi, I'm Ivan
```

---

<!-- .slide: style="font-size: .7em" -->

## Classes: private fields

Question: how to prevent accessed to name property in the class instance?

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const person = new Person('Ivan');

person.sayHi(); // Hi, I'm Ivan
person.name = 'Maria';
person.sayHi(); // Hi, I'm Maria
```

---

<!-- .slide: style="font-size: .7em" -->

## Classes: private fields

Answer: how to prevent accessed to name property in the class instance?

```js
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.#name}`);
  }
}

const person = new Person('Ivan');

person.sayHi(); // Hi, I'm Ivan
person.#name = 'Maria'; // SyntaxError: Private field '#values' must be declared in an enclosing class
person.sayHi(); // Hi, I'm Ivan
```

---

<!-- .slide: style="font-size: .7em" -->

## Classes: private fields + getter/setters

Answer: how to prevent accessed to name property in the class instance?

```js
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    // possibilty to add some checks and prevent possible errors
    if (typeof value === 'string') {
      this.#name = value;
    } else {
      this.#name = '';
    }
  }

  sayHi() {
    console.log(`Hi, I'm ${this.#name}`);
  }
}

const person = new Person('Ivan');

person.sayHi(); // Hi, I'm Ivan
person.name; // 'Ivan' calls get name() function
person.name = 'Maria'; // calls set name('Maria') function
person.sayHi(); // Hi, I'm Maria
person.name; // 'Maria'
```

---
