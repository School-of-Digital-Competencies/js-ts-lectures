## Objects

---

## Objects - why?

```js
const myFirstName = 'Ivan';
const myLastName = 'Ivanovich';
const myAge = 18;
const hasHigherEducation = true;
const isMarried = false;
const myWife = undefined;
const myMoney = null;
```

```js
const IAm = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  age: 18,
  hasHigherEducation: true,
  relationship: {
    isMarried: false,
    wife: undefined,
  },
  money: null,
};
```

---

#### Object syntax

Object - is a data type that can store multiple data in key-value pairs.

```js
const obj = {
  key: value,
};

const obj2 = {
  key1: value1,
  key2: value2,
};
```

> Each key-value pair has a colon : between them and is separated by a comma ,

---

## JavaScript Object Properties

The key-value pairs of an object are referred to as properties

```js
const person = {
  name: 'John',
  age: 20,
};
```

Here, name: "John" and age: 30 are the properties of the object person.

---

## Access Object Properties

You can access the value of a property by using its key.

```js
const dog = {
  name: 'Rocky',
};

// access property by dot notation
console.log(dog.name); // Output: Rocky
```

```js
const cat = {
  name: 'Luna',
};

// access property by bracket notation
console.log(cat['name']); // Output: Luna
```

---

## JavaScript Object Operations

---

## Modify Object Properties

We can modify object properties by assigning a new value to an existing key. For example,

```js
const person = {
  name: 'Bobby',
  hobby: 'Dancing',
};

// modify property
person.hobby = 'Singing';

console.log(person); // Output: { name: 'Bobby', hobby: 'Singing' }
```

---

## Add Object Properties

We can modify object properties by assigning a new value to an existing key. For example,

```js
const student = {
  name: 'John',
  age: 20,
};

// add properties
student.rollNo = 14;
student.faculty = 'Science';

console.log(student); // Output: { name: 'John', age: 20, rollNo: 14, faculty: 'Science' }
```

---

## Delete Object Properties

We can remove properties from an object using the delete operator. For example,

```js
const employee = {
  name: 'Tony',
  position: 'Officer',
  salary: 30000,
};

// delete object property
delete employee.salary;

console.log(employee); // Output: { name: 'Tony', position: 'Officer' }
```

---

## Nested Object Create

A nested object contains another object as a property. For example,

```js
// outer object student
const student = {
  name: 'John',
  age: 20,

  // contains another object marks
  marks: {
    science: 70,
    math: 75,
  },
};

console.log(student); // Output: { name: 'John', age: 20, marks: { science: 70, math: 75 } }
```

---

<!-- .slide: style="font-size: .9em" -->

#### Access Properties of Nested Objects

We can access a nested object's property using both the dot and bracket notations.

```js
const student = {
  name: 'John',
  age: 20,

  marks: {
    science: 70,
    math: 75,
  },
};

// use dot notation
console.log(student.marks.science); // 70

// use bracket notation
console.log(student['marks']['math']); // 75
```

---

## JavaScript Functions

---

## Function syntax

A function is an independent block of code that performs a specific task

```js
function name() {
  // body
  //   optional: return value;
}
```

---

## Benefits or using Functions

- <b style="color: yellow">Reusable Code</b>: Since functions are independent blocks of code, you can declare a function once and use it multiple times.

- <b style="color: yellow">Organized Code</b>: Dividing small tasks into different functions makes our code easy to organize.

- <b style="color: yellow">Readability</b>: Functions increase readability by reducing redundancy and improving the structure of our code.

---

## Function call

```js
// create a function
function greet() {
  console.log('Hello World!');
}

// call the function
greet();

console.log('Outside function');
```

Output

```md
Hello World!
Outside function
```

---

## JavaScript Function Arguments

```js
// function with a parameter called 'name'
function greet(name) {
  console.log(`Hello ${name}`);
}

// pass argument to the function
const res1 = greet('John');
console.log(res1); // Hello John

const res2 = greet('David');
console.log(res2); // Hello David
```

---

## The return Statement

We can return a value from a JavaScript function using the return statement.

```js
// function to find square of a number
function findSquare(num) {
  // return square
  return num * num;
}

// call the function and store the result
let square = findSquare(3);

console.log(`Square: ${square}`); // Square: 9
```

---

## The return Statement Terminates the Function

Any code written in the function after the return statement is not executed

```js
function display() {
  console.log('This will be executed.'); // 'This will be executed.'

  return 'Returning from function.';

  console.log('This will not be executed.');
}

let message = display();
console.log(message); // 'Returning from function.'
```

---

<!-- .slide: style="font-size: .7em" -->

## Function Expressions

JavaScript function expression is a way to store functions in variables

```js
// store a function in the square variable
let square = function (num) {
  return num * num;
};

console.log(square(5)); // 25
```

---

<!-- .slide: style="font-size: .8em" -->

## Function Recursion

Recursion is a technique where a function calls itself repeatedly to solve a problem

```js
// recursive function
function counter(count) {
  // display count
  console.log(count);

  // condition for stopping
  if (count > 1) {
    // call counter with new value of count
    counter(count - 1);
  } else {
    // terminate execution
    return;
  }
}

// start recursion
counter(5);
```

---

## Function Recursion limit

The recursion limit prevents errors caused by too many nested function calls.

However, the limit varies depending on the JavaScript engine and the environment in which the code is running.

For instance, the maximum limit can differ between Firefox and Chrome. Whereas, devices with higher memory might have higher recursion limits than devices with less memory.

---

<!-- .slide: style="font-size: .5em" -->

## Commonly Used Comparison Operators

| Operator | Meaning                  | Example            | Boolean Conversion |
| -------- | ------------------------ | ------------------ | ------------------ |
| ==       | Equal to                 | 3 == 5 // false    | true               |
| !=       | Not equal to             | 3 != 4 // true     | false              |
| ===      | Strictly equal to        | 3 === "3" // false | true               |
| !==      | Strictly not equal to    | 3 !== "3" // true  | true               |
| >        | Greater than             | 4 > 4 // false     | true               |
| <        | Less than                | 3 < 3 // false     | true               |
| >=       | Greater than or equal to | 4 >= 4 // true     | false              |
| <=       | Less than or equal to    | 3 <= 3 // true     | false              |

---

#### Used Materials

```md
https://www.programiz.com/javascript/object

https://www.programiz.com/javascript/function

https://www.programiz.com/javascript/recursion

https://www.w3schools.com/js/js_if_else.asp

https://www.w3schools.com/js/js_loop_for.asp

https://www.w3schools.com/js/js_loop_while.asp

https://www.w3schools.com/js/js_break.asp
```
