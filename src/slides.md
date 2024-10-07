## Conditionals, loops

---

## Browser API

```js
alert('message'); // shows a message

promt('input'); // shows a message asking the user to input text, returns text/null

confirm('question'); // shows a message and waits for the user to press “OK” or “Cancel”, returns true/false

console.log('message'); // prints a message to console

console.error('error message'); // prints an error message to console
```

---

## JavaScript Comparison Operators

Comparison operators compare two values and return a boolean value (true or false)

```js
const a = 3;
const b = 2;
console.log(a > b); // true
```

> a > b is called a boolean expression since evaluating it results in a boolean value.

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

## JavaScript Equal To Operator

The equal to operator == evaluates to

- true if the values of the operands are equal.
- false if the values of the operands are not equal.

```js
// same value, same type
console.log(5 == 5); // true

// same value, different type
console.log(2 == '2'); // true

// different values, same type
console.log('hello' == 'Hello'); // false
```

---

## JavaScript Not Equal To Operator

The not equal to operator != evaluates to

- true if the values of the operands aren't equal.
- false if the values of the operands are equal.

```js
// same value, same type
console.log(2 != 2); // false

// same value, different type
console.log(2 != '2'); // false

// different value, same type
console.log(2 != 3); // true
```

---

## Strict Equal To Operator

The strict equal to operator === evaluates to

- true if both the values and the types of the operands are the same.
- false if either the values or the types of the operands are not the same.

```js
// same value, same type
console.log(2 === 2); // true

// same value, different type
console.log(2 === '2'); // false
```

---

## Difference between == and === operators

The == (equality) operator only checks the values of the operands and not their types. For example,

However, the === (strict equality) operator checks both the values and types of the operands. For example,

```js
// only checks the values
console.log(2 == '2'); // true

// checks both the values and the types
console.log(2 === '2'); // false
```

---

## Strict Not Equal To Operator

The strict not equal to operator !== evaluates to

- true if either the values or the types of the operands are not the same.
- false if both the values and the types of the operands are the same.

```js
// same value, same type
console.log(2 !== 2); // false

// same value, different type
console.log(2 !== '2'); // true

// different value, same type
console.log('Hello' !== 'World'); // true
```

---

## Greater Than Operator

The greater than operator > returns

- true if the value on the left is greater than the value on the right.
- false if the value on the left isn't greater than the value on the right.

```js
// left operand is greater
console.log(3 > 2); // true

// both operands are equal
console.log(4 > 4); // false

// left operand is smaller
console.log(2 > 5); // false
```

---

## Greater Than Or Equal To Operator

The greater than or equal to operator >= returns

- true if the value on the left is greater than or equal to the value on the right.
- false if the value on the left is less than the value on the right.

```js
// left operand is greater
console.log(3 >= 2); // true

// both operands are equal
console.log(4 >= 4); // true

// left operand is smaller
console.log(2 >= 5); // false
```

---

## Less Than Operator

The less than operator < returns

- true if the value on the left is less than the value on the right.
- false if the value on the left isn't less than the value on the right.

```js
// left operand is smaller
console.log(2 < 5); // true

// both operands are equal
console.log(4 < 4); // false

// left operand is greater
console.log(3 < 2); // false
```

---

<!-- .slide: style="font-size: .5em" -->

## JavaScript Logical Operators

Logical operators return a boolean value by evaluating boolean expressions

| Syntax                               | Description                                            | Boolean Conversion |
| ------------------------------------ | ------------------------------------------------------ | ------------------ |
| expression1 && expression2           | true only if both expression1 and expression2 are true | true               |
| expression1 &#124;&#124; expression2 | true if either expression1 or expression2 is true      | false              |
| !expression                          | false if expression is true and vice versa             | true               |

---

## Conditions, if-else, ternary

---

## JavaScript if Statement

Use if keyword to execute code based on some specific condition. The if keyword checks the condition inside the parentheses ().

- If the condition is evaluated to true, the code inside { } is executed.
- If the condition is evaluated to false, the code inside { } is skipped.

```js
if (condition) {
  // block of code
}
```

---

## JavaScript if Statement Example

```js
// Program to check if the number is positive

const number = prompt('Enter a number: ');

// check if number is greater than 0
if (number > 0) {
  // the body of the if statement
  console.log('positive number');
}

console.log('nice number');
```

---

<!-- .slide: style="font-size: .8em" -->

## JavaScript else Statement

Use else keyword to execute code when the condition specified in the preceding if statement evaluates to false.

- If condition is true, the code inside if is executed. And, the code inside else is skipped.
- If condition is false, the code inside if is skipped. Instead, the code inside else is executed.

```js
if (condition) {
  // block of code
  // execute this if condition is true
} else {
  // block of code
  // execute this if condition is false
}
```

---

## JavaScript if..else Statement Example

```js
let age = 17;

// if age is 18 or above, you are an adult
// otherwise, you are a minor

if (age >= 18) {
  console.log('You are an adult');
} else {
  console.log('You are a minor');
}

// Output: You are a minor
```

---

<!-- .slide: style="font-size: .8em" -->

## JavaScript else..if Statement

Use the else if keyword to check for multiple conditions.

```js
// check for first condition
if (condition1) {
  // if body
}

// check for second condition
else if (condition2) {
  // else if body
}

// if no condition matches
else {
  // else body
}
```

---

## JavaScript else if Statement Example

```js
let rating = 4;

// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average

if (rating <= 2) {
  console.log('Bad rating');
} else if (rating >= 4) {
  console.log('Good rating!');
} else {
  console.log('Average rating');
}

// Output: Good rating!
```

---

<!-- .slide: style="font-size: .8em" -->

## JavaScript Nested if...else Statement

When we use an if...else statement inside another if...else statement, we create a nested if...else statement

```js
let marks = 60;

// outer if...else statement
// student passed if marks 40 or above
// otherwise, student failed

if (marks >= 40) {
  // inner if...else statement
  // Distinction if marks is 80 or above

  if (marks >= 80) {
    console.log('Distinction');
  } else {
    console.log('Passed');
  }
} else {
  console.log('Failed');
}

// Output: Passed
```

---

<!-- .slide: style="font-size: .8em" -->

## JavaScript Ternary Operator ?

We can use the ternary operator ?: instead of an if...else statement if the operation we're performing is very simple

```js
let grade = 40;
let result;

if (grade >= 50) {
  result = 'pass';
} else {
  result = 'fail';
}

console.log(result);
```

```js
let grade = 40;

let result = grade >= 50 ? 'pass' : 'fail';

console.log(result);
```

---

<!-- .slide: style="font-size: .8em" -->

## JavaScript Switch-case Operator

We can replace our if…else statement with the switch statement when we deal with a large number of conditions.

```js
let grade = 'C';

// using if else for many conditions
// first condition
if (grade === 'A') {
  console.log('Excellent!');
}
// second condition
else if (grade === 'B') {
  console.log('Good!');
}
// third condition
else if (grade === 'C') {
  console.log('Average');
}
// fourth condition
else if (grade === 'D') {
  console.log('Bad');
}
// otherwise, execute else block
else {
  console.log('Fail');
}

// Output: Average
```

---

<!-- .slide: style="font-size: .8em" -->

## JavaScript Switch-case Operator

We can replace our if…else statement with the switch statement when we deal with a large number of conditions.

```js
let grade = 'C';

// using switch...case
switch (grade) {
  // first condition
  case 'A':
    console.log('Excellent!');
    break;
  // second condition
  case 'B':
    console.log('Good!');
    break;
  // third condition
  case 'C':
    console.log('Average');
    break;
  // fourth condition
  case 'D':
    console.log('Bad');
    break;
  default:
    console.log('Fail');
}

// Output: Average
```

---

#### Used Materials

```md
https://www.w3schools.com/js/js_operators.asp

https://www.w3schools.com/js/js_assignment.asp

https://www.w3schools.com/js/js_datatypes.asp

https://www.programiz.com/javascript/data-types

https://www.programiz.com/javascript/operators

https://www.programiz.com/javascript/type-conversion
```
