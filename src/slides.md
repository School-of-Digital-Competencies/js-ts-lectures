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

<!-- .slide: style="font-size: .8em" -->

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

<!-- .slide: style="font-size: .8em" -->

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

## Operator Precedence

Which operator gets called first? Operators are called in order of precedence (higher precedence wins)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

---

## Operator Associativity

When operators have the same precedence, what order operators get called in: left-to-right or right-to-left

```js
3 + 4 * 5; // 23, first *, then +
```

---

## Operator Precedence and Associativity

Question

```js
console.log(3 + 10 * 2);
console.log((3 + 10) * 2);
```

---

## Operator Precedence and Associativity

Answer

```js
console.log(3 + 10 * 2); // 23
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

---

## Operator Precedence and Associativity

Question

```js
const a = 1;
const b = 2;
typeof a + b;
```

---

## Operator Precedence and Associativity

Answer

```js
const a = 1;
const b = 2;
typeof a + b; // Equivalent to (typeof a) + b; result is "number2"
```

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

## Loops

---

## JavaScript for loop

the for loop is used for iterating over a block of code a certain number of times

```js
for (let i = 0; i < 3; i++) {
  console.log('Hello, world!');
}

// Output:
// Hello, world!
// Hello, world!
// Hello, world!
```

---

<!-- .slide: style="font-size: .8em" -->

## JavaScript for loop

The syntax of the for loop is:

```js
for (initialExpression; condition; updateExpression) {
  // for loop body
}
```

- initialExpression - Initializes a counter variable.
- condition - The condition to be evaluated. If true, the body of the for loop is executed.
- updateExpression - Updates the value of initialExpression.

Once an iteration of the loop is completed, the condition is evaluated again. The process continues until the condition is false.

---

<!-- .slide: style="font-size: .6em" -->

## JavaScript for loop Example 1

Print numbers from 1 to 5 using a for loop.

```js
for (let i = 1; i < 6; i++) {
  console.log(i);
}
```

| Iteration | Variable | Condition: i < 6 | Action                             |
| --------- | -------- | ---------------- | ---------------------------------- |
| 1st       | i = 1    | true             | 1 is printed. i is increased to 2. |
| 2nd       | i = 2    | true             | 2 is printed. i is increased to 3. |
| 3rd       | i = 3    | true             | 3 is printed. i is increased to 4. |
| 4th       | i = 4    | true             | 4 is printed. i is increased to 5. |
| 5th       | i = 5    | true             | 5 is printed. i is increased to 6. |
| 6th       | i = 6    | false            | The loop is terminated.            |

---

<!-- .slide: style="font-size: .6em" -->

## JavaScript for loop Example 2

Print sum of n Natural Numbers

```js
// program to display the sum of natural numbers

let sum = 0;
const n = 100;

// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
  sum += i; // sum = sum + i
}

console.log(`sum: ${sum}`);

// Output: sum: 5050
```

Initially, the value of sum is 0, while n has a constant value of 100.

Then, we iterate a for loop from i = 1 to n. In each iteration,

- i is added to sum.
- Then, the value of i is increased by 1.
- When i becomes 101, the test condition becomes false and sum will be equal to 0 + 1 + 2 + ... + 100.

---

<!-- .slide: style="font-size: .6em" -->

## JavaScript Nested for loops

A for loop can also have another for loop inside it. For each cycle of the outer loop, the inner loop completes its entire sequence of iterations. For example,

```js
// outer loop
for (let i = 0; i < 3; i++) {
  // inner loop
  for (let j = 0; j < 2; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

Output

```
i = 0, j = 0
i = 0, j = 1
i = 1, j = 0
i = 1, j = 1
i = 2, j = 0
i = 2, j = 1
```

- Outer Loop - Runs from i = 0 to 2.
- Inner Loop - Runs from j = 0 to 1.

In each iteration of the outer loop, the inner loop runs from j = 0 to 1.

---

<!-- .slide: style="font-size: .6em" -->

## JavaScript Infinite for loop

We can create an infinite for loop by setting a condition that always evaluates to true

```js
for (let i = 0; true; i++) {
  console.log('This loop will run forever!');
}
```

Output

```
This loop will run forever!
This loop will run forever!
This loop will run forever!
…
```

In this example, the condition in the for loop is explicitly set to true.

Since this condition never changes and always evaluates to true, the loop will continue indefinitely (until the memory is full).

---

<!-- .slide: style="font-size: .6em" -->

## JavaScript Omitting Parts of the for Loop

We can omit any part of the for loop declaration and include it in a different part of the code.

```js
// initialization outside the loop
let i = 0;

// omit initialization and update statements
for (; i < 3; ) {
  console.log(`i is ${i}`);

  // increment inside the loop body
  i++;
}
```

Here, we have initialized i before the loop, which iterates as long as i is less than 3.

Notice that i is incremented within the loop body, which allows us to skip the update statement inside the parentheses () of the for loop.

In other words, for (; i < 3; ) indicates omitted initialization and update expression, focusing only on the condition.

---

<!-- .slide: style="font-size: .6em" -->

### JavaScript while loop

The while loop repeatedly executes a block of code as long as a specified condition is true.

```js
while (condition) {
  // body of loop
}
```

1. The while loop first evaluates the condition inside ( ).
2. If the condition evaluates to true, the code inside { } is executed.
3. Then, the condition is evaluated again.
4. This process continues as long as the condition evaluates to true.
5. If the condition evaluates to false, the loop stops.

---

<!-- .slide: style="font-size: .5em" -->

### JavaScript while loop Example

```js
// initialize variable i
let i = 1;

// loop runs until i is less than 4
while (i < 4) {
  console.log(i);
  i += 1;
}
```

```
1
2
3
```

| Variable | Condition: i < 4 | Action                             | Action                             |
| -------- | ---------------- | ---------------------------------- | ---------------------------------- |
| i = 1    | true             | 1 is printed. i is increased to 2. | 1 is printed. i is increased to 2. |
| i = 2    | true             | 2 is printed. i is increased to 3. | 2 is printed. i is increased to 3. |
| i = 3    | true             | 3 is printed. i is increased to 4. | 3 is printed. i is increased to 4. |
| i = 4    | false            | The loop is terminated.            | 4 is printed. i is increased to 5. |
| 5th      | i = 5            | true                               | 5 is printed. i is increased to 6. |
| 6th      | i = 6            | false                              | The loop is terminated.            |

---

<!-- .slide: style="font-size: .8em" -->

### JavaScript Infinite while loop

An infinite while loop is a condition where the loop runs infinitely, as its condition is always true

```js
let i = 1;

// always true condition
while (i < 5) {
  console.log(i);
}
```

the condition 1 > 1 is always true, which causes the loop body to run forever.

---

<!-- .slide: style="font-size: .8em" -->

## JavaScript break statement

The break statement terminates the loop immediately when it's encountered.

```js
// Program to print the value of i

for (let i = 1; i <= 5; i++) {
  // break condition
  if (i == 3) {
    break;
  }

  console.log(i);
}
```

Output

```
1
2
```

---

<!-- .slide: style="font-size: .7em" -->

## JavaScript break statement

The break statement terminates the loop immediately when it's encountered.

```js
let sum = 0;
let num = 5;

// infinite loop
while (true) {
  if (num < 0) {
    // terminate the loop if num is negative
    break;
  } else {
    // otherwise, add num to sum
    sum += num;
  }

  num--; // decrease num, equals to num = num - 1;
}

// print the sum
console.log(`Sum: ${sum}`); // 15, because 5 + 4 + 3 + 2 + 1 + 0
```

Output

```
Sum: 15
```

---

<!-- .slide: style="font-size: .7em" -->

## JavaScript break with nested loops

When break is used inside two nested loops, it terminates the inner loop

```js
// nested for loops

// outer loop
for (let i = 1; i <= 3; i++) {
  // inner loop
  for (let j = 1; j <= 3; j++) {
    if (i == 2) {
      break;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

Output

```
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
```

---

<!-- .slide: style="font-size: .7em" -->

## JavaScript continue Statement

The continue statement skips the current iteration of the loop and proceeds to the next iteration.

```js
for (let i = 1; i <= 10; ++i) {
  // skip iteration if value of
  // i is between 4 and 9
  if (i > 4 && i < 9) {
    continue;
  }
  console.log(i);
}
```

Output

```
1
2
3
4
9
10
```

---

<!-- .slide: style="font-size: .7em" -->

## JavaScript continue Statement

The continue statement skips the current iteration of the loop and proceeds to the next iteration.

```js
let num = 1;

while (num <= 10) {
  // skip iteration if num is even
  if (num % 2 === 0) {
    ++num;
    continue;
  }

  console.log(num);
}
```

Output

```
1
3
5
7
9
```

---

#### Used Materials

```md
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

https://www.programiz.com/javascript/for-loop

https://www.programiz.com/javascript/while-loop

https://www.programiz.com/javascript/break-statement

https://www.programiz.com/javascript/continue-statement

https://www.w3schools.com/js/js_if_else.asp

https://www.w3schools.com/js/js_loop_for.asp

https://www.w3schools.com/js/js_loop_while.asp

https://www.w3schools.com/js/js_break.asp
```
