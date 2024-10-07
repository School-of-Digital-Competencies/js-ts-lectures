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

```js
function name() {
  // body
  //   optional: return value;
}
```

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
https://www.programiz.com/javascript/for-loop

https://www.programiz.com/javascript/while-loop

https://www.programiz.com/javascript/break-statement

https://www.programiz.com/javascript/continue-statement

https://www.w3schools.com/js/js_if_else.asp

https://www.w3schools.com/js/js_loop_for.asp

https://www.w3schools.com/js/js_loop_while.asp

https://www.w3schools.com/js/js_break.asp
```
