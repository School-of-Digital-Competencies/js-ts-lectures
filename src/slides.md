# TypeScript Basics

---

## What?

> TypeScript is JavaScript with syntax for types.

---

## JavaScript

JavaScript

```js
function compact(arr) {
  if (aar.length > 10) {
    // No editor warnings in JS files. Code crashed in runtime
    return arr.trim(0, 10);
  }
  return arr;
}
```

TypeScript

```ts
function compact(arr) {
  if (aar.length > 10) {
    // Error: aar is not defined, do you mean arr?
    return arr.trim(0, 10);
  }
  return arr;
}
```

---

## Data types

JavaScript

```js
/**
 * @param {Array} arr array of what data types?
 */
function compact(arr) {
  if (aar.length > 10) {
    return arr.trim(0, 10);
  }
  return arr;
}
```

TypeScript

```ts
/**
 * @param {Array} arr array of what data types?
 */
function compact(arr) {
  if (aar.length > 10) {
    return arr.trim(0, 10); // Error: TS found that array has a slice, not trim function
  }
  return arr;
}
```

---

## Data types

TypeScript adds natural syntax for providing types

```ts
function compact(arr: number[]) {
  if (aar.length > 10) {
    return arr.slice(0, 10);
  }
  return arr;
}
```

---

## Installation

1. Install node.js with npm
2. Install typescript package as a project dependency `npm install typescript`
3. Write TypeScript code in a file with \*.ts. i.e `main.ts`, etc
4. Run `npx tsc main.ts` to transpile TypeScript code to JavaScript code (will generate `main.js` file)
5. Run JavaScript code in node or browser

---

## Types

```ts
const str1: string = 'some string'; // bad
const str = 'some string'; // good

let arr = [1, 2, 3];
arr.push(4); // good
arr.push('sada'); // Argument of type 'string' is not assignable to parameter of type 'number'.

const user = { name: 'Ivan' };
user.age = 43; // Property 'age' does not exist on type '{ name: string; }'.

// a function doesn't return any data
function printName(name: string): void {
  console.log(name);
}

// a function returns number
function extractAge(person: { name: string; age: number }): number {
  return person.age;
}
```

---

## Types: Union Types

```ts
let input: string | null = null;
input = prompt('Enter age'); // Esc key triggers null return, otherwise string
const age: number = input ? parseInt(input) : -1; // save value -1 or parsed value
```

---

<!-- .slide: style="font-size: .7em" -->

## Types: Type Alias

```ts
type MyType = number | string;
const val1: MyType = 32; // ok
const val2: MyType = 'sdas'; // ok
const val3: MyType = true; // error
```

```ts
type User = {
  name: string;
  age: number;
};
const ivan: User = { name: 'Ivan', age: 18 }; // ok
const ivan2: User = { name: 'Ivan' }; // error, missed 'age' property
const ivan3: User = { name: 'Ivan', age: 'adult' }; // error, wront type of 'age' property
```

---

## Types: Literal Types

Use case: special strings , like order status string (never changed, used as a dictionary value)

```ts
type OrderStatus = 'Created' | 'Paid' | 'Shipped' | 'Delivered';

let created: OrderStatus = 'created'; // error
let paid: OrderStatus = 'Paid'; // ok
```

---

## Types: Contextual typing

```ts
const fruits = ['banana', 'mango', 'apple']; // array of string
const upperFruits = fruits.map((name) => name.toUpperCase()); // name is string, no need to define
```

```ts
const fruits = ['banana', 'mango', 'apple']; // array of string
const toUpper = (str: string): string => str.toUpperCase();
const upperFruits = fruits.map(toUpper); //
```

---

<!-- .slide: style="font-size: .4em" -->

## Types: Enums

```ts
enum CardinalDirections {
  North,
  South,
  East,
  West,
}

const direction = CardinalDirections.South;
console.log(direction); // 1

console.log(CardinalDirections);
/**
 {
  "0": "North",
  "1": "South",
  "2": "East",
  "3": "West",
  "North": 0,
  "South": 1,
  "East": 2,
  "West": 3
}
 */
const directions = Object.keys(CardinalDirections);
console.log(directions); // ['0', '1', '2', '3', 'North', 'South', 'East', 'West']
```

```ts
enum CardinalDirections {
  North = 'north',
  South = 'south',
  East = 'east',
  West = 'west',
}

const direction = CardinalDirections.South;
console.log(direction); // 1

console.log(CardinalDirections);
/**
 {
  "North": "north",
  "South": "south",
  "East": "east",
  "West": "west"
}
 */

const directions = Object.keys(CardinalDirections);
console.log(directions); // ['north', 'south', 'east', 'west']
```

---

<!-- .slide: style="font-size: .7em" -->

## Types: Optional Param

```ts
type User = {
  name: string;
  age?: number; // optional param: number | undefined
};

const ivan: User = { name: 'Ivan', age: 18 }; // ok
const ivan2: User = { name: 'Ivan' }; // ok
const ivan3: User = { name: 'Ivan', age: 'adult' }; // error, wrong type of 'age' property
```

```ts
// optional param
function splitString(str: string, separator?: string): string[] {
  return str ? separator.split(separator) : [str]; // if no separator (undefined), return array of 1 element, otherwise split
}

splitString('some'); // ['some']
splitString('some', 'm'); // ['so', 'e']

// optional param but with default value
function splitString2(str: string, separator: string = '.'): string[] {
  return str ? str.split(separator) : [str]; // if no separator (undefined), return array of 1 element, otherwise split
}

splitString2('some'); // ['some', 'any']
splitString2('some.any', '.an'); // ['some', 'y']
```

---

<!-- .slide: style="font-size: .7em" -->

## Types: Array

```ts
type User = {
  name: string;
  age?: number;
};

const users: User[] = [];

users.push({ name: 'Ivan', age: 18 }); // ok
users.push({ name: 'Maria' }); // ok
users.push({ name: 'Denis', age: 19 }); // ok

function calcAges(users: User[]): number {
  return users
    .map((user) => user.age) // [18, undefined, 19]
    .filter((age) => !!age) // [18, 19]
    .reduce(
      (prev: number, curr) => prev + curr,
      0 // initial value
    );
}

const sum = calcAges(users);
console.log(sum); // 37
```

---

## Types: Tuples

```ts
type Point = [number, number];
const point: Point = [1, 3]; // ok
const point2: Point = [1]; // error
const point3: Point = ['54', '-21']; // error

point[0] = 3; // ok
point[3] = 4; // error
```

---

<!-- .slide: style="font-size: .7em" -->

## Types: Class

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  get lowerCaseName(): string {
    return this.name.toLowerCase();
  }
}

const ivan = new User('Ivan'); // good
console.log(ivan.lowerCaseName); // 'ivan'

const maria = new User(32); // error

function compareUserNames(first: User, second: User): number {
  return ivan.lowerCaseName.localeCompare(second.lowerCaseName);
}

const denis = new User('Denis');
console.log(compareUserNames(ivan, denis)); // 1
```

---

<!-- .slide: style="font-size: .7em" -->

## Types: Class private and public fields

```ts
class User {
  private name: string; // visible only inside class
  public age: number; // visible either inside or outside class

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    // visible outside class
    return this.name.toLowerCase(); // name is accesible
  }
}

const ivan = new User('Ivan', 18);

console.log(ivan.name); // error
console.log(ivan.age); // ok
console.log(ivan.getName()); // 'ivan'
```

---

<!-- .slide: style="font-size: .7em" -->

## Types: Class Inheritance

```ts
class User {
  private name: string; // visible only inside class
  protected age: number; // visible either inside class or his children (extending it)

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    // visible outside class
    return this.name.toLowerCase(); // name is accesible
  }
}

class Admin extends User {
  private key: string;

  constructor(name: string, age: number) {
    super(name, age);
    this.key = 'random-secret-key';
  }

  get isAdult(): boolean {
    // access to protected property defined in parent class
    return this.age >= 18;
  }
}

const regular = new User('Ivan', 18);
const admin = new Admin('Maria', 20);

console.log(regular.age); // error
console.log(admin.isAdult); // ok, true
```

---

<!-- .slide: style="font-size: .7em" -->

## Types: Class Abstract

Create an abstract class to move common logic from its children to the one parent class

```ts
abstract class User {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

class Admin extends User {
  constructor(name: string) {
    super(name);
  }
}

const regular = new User('Ivan'); // error: Cannot create an instance of an abstract class
const admin = new Admin('Maria');

console.log(admin.name); // 'Maria'
```

---

<!-- .slide: style="font-size: .7em" -->

## Types: Interface

A Class implementing an Interface must contain properties and methods from the latest

```ts
interface Printable {
  print(): void;
}

// Error: Class 'User' incorrectly implements interface 'Printable'.
//   Property 'print' is missing in type 'User' but required in type 'Printable'.
class User implements Printable {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

class Admin extends User implements Printable {
  constructor(name: string) {
    super(name);
  }

  print(): void {
    console.log(this.name);
  }
}

const regular = new User('Ivan');
const admin = new Admin('Maria');

admin.print();
```

---

## Materials

HTML, CSS:

https://doka.guide/html/

https://doka.guide/css/

TypeScript:

https://www.youtube.com/watch?v=SpwzRDUQ1GI

https://www.youtube.com/watch?v=JHEB7RhJG1Y
