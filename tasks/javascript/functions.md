# JavaScript Functions Tasks

[Back to all tasks](../../README.md)

Create a Simple Function: Write a function greet that takes a name as an argument and returns a greeting string.
Usage: console.log(greet("Alice")); // "Hello, Alice!"

Function with Default Parameters: Create a function multiply that takes two parameters and returns their product, using a default value for the second parameter.
Usage: console.log(multiply(5)); // 5 (5 \* 1)

Return a Function: Write a function makeCounter that returns another function which increments and returns a counter each time it is called.
Usage: const counter = makeCounter(); console.log(counter()); // 1

Closure Example: Create a function createMultiplier that takes a number and returns a function that multiplies its input by that number.
Usage: const double = createMultiplier(2); console.log(double(5)); // 10

Using call Method: Write a function describePerson that takes a name and age, and use call to invoke it with a specific context.
Usage: describePerson.call({name: "Bob"}, "Bob", 30); // "Bob is 30 years old."

Using apply Method: Create a function sum that takes multiple numbers as arguments and returns their sum. Use apply to call this function with an array of numbers.
Usage: console.log(sum.apply(null, [1, 2, 3, 4])); // 10

Using bind Method: Write a function logMessage that logs a message. Use bind to create a new function with a specific context for the message.
Usage: const logError = logMessage.bind(null, "Error"); logError(); // "Error"

Function as a First-Class Citizen: Create a function executeFunction that takes another function as an argument and executes it.
Usage: executeFunction(() => console.log("Executed!")); // "Executed!"

Returning Different Functions: Write a function createOperation that takes a string ('add', 'subtract', etc.) and returns a function that performs the corresponding mathematical operation.
Usage: const add = createOperation('add'); console.log(add(5, 3)); // 8

Partial Application: Create a function partial that takes a function and some arguments, returning a new function that takes the remaining arguments.
Usage: const addFive = partial(add, 5); console.log(addFive(10)); // 15

Currying: Write a function curry that transforms a function with multiple arguments into a sequence of functions that each take a single argument.
Usage: const curriedAdd = curry(add); console.log(curriedAdd(2)(3)); // 5

Function Composition: Create a function compose that takes two functions and returns a new function that is the composition of the two.
Usage: const add1 = x => x + 1; const double = x => x \* 2; const addThenDouble = compose(double, add1); console.log(addThenDouble(3)); // 8

Memoization: Write a function memoize that caches the results of a function based on its arguments, returning the cached result if the same arguments are provided again.
Usage: const memoizedFib = memoize(fibonacci); console.log(memoizedFib(10)); // 55

Function Returning a Closure: Create a function createSecret that returns a function which can access a private variable.
Usage: const secret = createSecret(); console.log(secret()); // "This is a secret!"

Using Closures for Data Privacy: Write a function makeBankAccount that returns an object with methods to deposit and withdraw money, utilizing closures to keep the balance private.
Usage: const account = makeBankAccount(); account.deposit(100); console.log(account.getBalance()); // 100

Using this in Functions: Write a function showContext that logs the value of this when invoked in different contexts.
Usage: showContext.call({name: "Context"}); // Logs the context object

Function with Variable Arguments: Create a function logAllArguments that logs all arguments passed to it, regardless of the number.
Usage: logAllArguments(1, 2, 3, "hello"); // Logs: 1, 2, 3, "hello"

Function to Check for Palindrome: Write a function isPalindrome that checks if a given string is a palindrome.
Usage: console.log(isPalindrome("racecar")); // true

Function to Generate Fibonacci Sequence: Create a function fibonacci that returns a generator function to yield Fibonacci numbers.
Usage: const fib = fibonacci(); console.log(fib.next().value); // 0

Function Returning a Function with Arguments: Create a function createGreeter that takes a greeting and returns a function that greets a given name with that greeting.
Usage: const greetHello = createGreeter("Hello"); console.log(greetHello("Alice")); // "Hello, Alice!"

Using call to Borrow Methods: Write a function borrowMethod that allows one object to use a method from another object using call.
Usage: borrowMethod.call(objA, objB.method); // Executes method from objB in context of objA

Chaining Function Calls: Create a function chain that allows chaining multiple function calls on a single object.
Usage: const result = chain(obj).method1().method2(); // Chained methods executed

Using apply for Variadic Functions: Write a function average that calculates the average of a list of numbers, using apply to pass the arguments.
Usage: console.log(average.apply(null, [1, 2, 3, 4])); // 2.5

Creating a Function that Returns a Random Number: Create a function getRandomNumber that returns a function which generates a random number within a specified range.
Usage: const randomInRange = getRandomNumber(1, 10); console.log(randomInRange()); // Random number between 1 and 10

Using bind to Pre-fill Arguments: Write a function multiplyBy that returns a new function that multiplies its input by a specified number using bind.
Usage: const double = multiplyBy.bind(null, 2); console.log(double(5)); // 10

Function to Create a Timer: Create a function createTimer that returns an object with methods to start, stop, and reset a timer.
Usage: const timer = createTimer(); timer.start(); // Starts the timer

Using Closures for Counting: Write a function createCounter that returns an object with methods to increment, decrement, and get the current count.
Usage: const counter = createCounter(); counter.increment(); console.log(counter.getCount()); // 1

Function to Count Function Calls: Create a function countCalls that takes a function and returns a new function that counts how many times the original function has been called.
Usage: const countedFunc = countCalls(someFunc); countedFunc(); // 1

Using call to Invoke with Different Contexts: Write a function invokeWithDifferentContext that demonstrates invoking a method with different contexts using call.
Usage: invokeWithDifferentContext.call(obj, methodName); // Invokes method with obj context

Creating a Function that Caches Results: Create a function cacheResults that caches the results of a function based on its arguments.
Usage: const cachedFunc = cacheResults(expensiveFunction); console.log(cachedFunc(arg)); // Cached result

Using Closures to Implement a Simple Calculator: Write a function createCalculator that returns an object with methods for basic arithmetic operations.
Usage: const calculator = createCalculator(); console.log(calculator.add(5, 3)); // 8

Using apply for Function with an Array of Arguments: Create a function maxOf that returns the maximum of a set of numbers using apply.
Usage: console.log(maxOf.apply(null, [1, 2, 3, 4])); // 4
