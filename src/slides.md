# Callback, Promise, Async/Await

---

## Task: Find a maximum in an array of numbers

How many solution ideas you could come up with?

---

## Task: Find a maximum in an array of numbers

Solution 1: for loop or while loop

```js
const arr = [5, 2, 1321, 34, -1, 0, 232];

let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < arr.length; ++i) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
```

---

## Task: Find a maximum in an array of numbers

Solution 2: call/apply/bind on Math.max function

```js
const arr = [5, 2, 1321, 34, -1, 0, 232];

const max = Math.max.apply(null, arr);
```

or

```js
const arr = [5, 2, 1321, 34, -1, 0, 232];
const max = Math.max(...arr);
```

---

## Task: Find a maximum in an array of numbers

Solution 3: sort and last/first element

```js
const arr = [5, 2, 1321, 34, -1, 0, 232];

arr.sort((a, b) => a - b);

const max = arr[arr.length - 1];
```

---

## Task: Find a maximum in an array of numbers

Solution 4: foreach function

```js
const arr = [5, 2, 1321, 34, -1, 0, 232];

let max = Number.MIN_SAFE_INTEGER;

arr.forEach((item) => {
  if (item > max) {
    max = item;
  }
});
```

---

## Task: Find a maximum in an array of numbers

Solution 5: reduce function

```js
const arr = [5, 2, 1321, 34, -1, 0, 232];

const max = arr.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  Number.MIN_SAFE_INTEGER
);
```

---

<!-- .slide: style="font-size: .7em" -->

## Callback

> A callback is a function that is passed inside another function, and then called in that function to perform a task

A function **(item) => { ... }** is a callback function that is passed inside a function **foreach**

```js
const arr = [5, 2, 1321, 34, -1, 0, 232];

let max = Number.MIN_SAFE_INTEGER;

arr.forEach((item) => {
  if (item > max) {
    max = item;
  }
});
```

---

<!-- .slide: style="font-size: .6em" -->

## Callback: Example cache decorator

```js
function cachingDecorator(callback) {
  let cache = new Map();

  return function (value) {
    if (cache.has(value)) {
      return cache.get(value);
    }

    let result = callback(value);

    cache.set(value, result);
    return result;
  };
}

const fn = cachingDecorator((value) => {
  console.log(`Called with ${value}`);
  return value;
});

console.log(fn(1)); // Called with 1
console.log(fn(1)); // 1
console.log(fn(1)); // 1
```

---

<!-- .slide: style="font-size: .6em" -->

## Callback: Example callback chain

```js
function fetchData(callback) {
  console.log('Data fetched from server');
  const data = [1, 2, 3];
  callback(data);
}

function processData(data, callback) {
  console.log('Processing data...');
  const mappedData = data.map((item) => item ** 2);
  callback(mappedData);
}

function displayData(data) {
  console.log('Displaying data...', data);
}

fetchData((data) => {
  processData(data, (data) => {
    displayData(data);
  });
});
```

---

# API

---

<!-- .slide: style="font-size: .7em" -->

## API

> An Application Programming Interface (API) is a software interface that allows two or more programs to communicate by acting as an intermediary between them.

All browsers have a set of built-in APIs that extend their functionality, usually by supporting complex operations.

---

<!-- .slide: style="font-size: .7em" -->

## Web APIs Example: The Geolocation API

> The geolocation API is a built-in browser API that allows web applications to access a user’s location, provided the user grants the appropriate permissions.

Access to a user’s location can be helpful in several scenarios, such as deliveries and displaying local content (weather, events, etc.).

```js
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position), // success callback
  (error) => console.error(error), // error callback
  {
    enableHighAccuracy: true,
    timeout: 250,
  }
);
```

---

<!-- .slide: style="font-size: .5em" -->

## Web APIs Example: Window interface setTimeout()

> The setTimeout() method of the Window interface sets a timer which executes a function or specified piece of code once the timer expires.

Syntax

```js
setTimeout(callback);
setTimeout(callback, delay);
setTimeout(callback, delay, param1);
setTimeout(callback, delay, param1, /* …, */ paramN);
```

Where

- callback - a function to be executed after the timer expires
- delay - The time, in milliseconds that the timer should wait before the specified function or code is executed (default 0)
- param1, ..., paramN - additional arguments which are passed through to the function specified by callback function

Return value

- The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.

```js
const timeoutID = setTimeout(() => {});
clearTimeout(timeoutID);
```

---

## Web APIs Example: Window interface setTimeout()

```js
function fetchData(callback) {
  console.log('Start data fetching...');
  setTimeout(() => {
    console.log('Data fetched from server');
    const data = [1, 2, 3];
    callback(data);
  }, 500);
}

function processData(data, callback) {
  console.log('Processing data...');
  const mappedData = data.map((item) => item ** 2);
  callback(mappedData);
}

function displayData(data) {
  console.log('Displaying data...', data);
}

fetchData((data) => {
  processData(data, (data) => {
    displayData(data);
  });
});
```

---

# Promise

---

<!-- .slide: style="font-size: .8em" -->

## Promise: why we might need it

After 500mc a callback function run(time) will be called and console output will be 'Run completed in 500mc'

A question: what if we can't tell how many mc will it take to call a callback function run? We sure it will be in future, but after how many mc?

```js
function run(time) {
  console.log(`Run completed in ${time}mc`); // 'Run completed in 500mc'
}

console.log('Run started...');
setTimeout(run, 500, 500);
```

---

<!-- .slide: style="font-size: .8em" -->

## Promise: what is it

A promise is something which will take unknown time to be done

There are two possible outcomes of a promise:

- We either run and resolve the promise successfully, or
- Some error occurs along the line and the promise is rejected

---

<!-- .slide: style="font-size: .8em" -->

## Promise: definition

> -Promise is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation and its resulting value

> Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

---

<!-- .slide: style="font-size: .8em" -->

## Promise: create with executor function without params

```js
new Promise(executorFunction);
```

i.e

```js
function executorFunction() {
  // your code
}

new Promise(executorFunction);
```

or

```js
new Promise(() => {
  // your code
});
```

---

<!-- .slide: style="font-size: .8em" -->

## Promise: create with executor function without params

```js
new Promise(() => {
  console.log('Run started');

  const mc = Math.floor(Math.random() * 1000); // random time from 0 till 1000 mc

  setTimeout(
    (time) => {
      console.log(`Run completed in ${time}mc`);
    },
    mc,
    mc
  );
});
```

---

<!-- .slide: style="font-size: .7em" -->

## Promise: states

A Promise objectis in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

<img src="./promises.png" >

[Click to read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#description)

---

<!-- .slide: style="font-size: .6em" -->

## Promise: react to state change

Promise state <b style="color: grey">pending</b>

```js
const promise = new Promise(() => {
  console.log('Promise created');
});

console.log(promise); // { [[PromiseState]]: "pending", [[PromiseResult]]: undefined, [[Prototype]]: Promise }
```

---

<!-- .slide: style="font-size: .6em" -->

## Promise: react to state change

Promise state <b style="color: green">fulfilled</b> without result

```js
const promise = new Promise((resolve) => {
  console.log('Promise created');

  resolve(); // our code above completed successfully, change promise state to fulfilled without result
});

console.log(promise); // { [[PromiseState]]: "pending", [[PromiseResult]]: undefined, [[Prototype]]: Promise }

promise.then(() => {
  console.log(promise); // { [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined, [[Prototype]]: Promise }
});
```

---

<!-- .slide: style="font-size: .6em" -->

## Promise: react to state change

Promise state <b style="color: green">fulfilled</b> with result

```js
const promise = new Promise((resolve) => {
  console.log('Promise created');

  resolve('Some string'); // our code above completed successfully, change promise state to fulfilled with result 'Some string'
});

console.log(promise); // { [[PromiseState]]: "pending", [[PromiseResult]]: undefined, [[Prototype]]: Promise }

promise.then((data) => {
  // data has result 'Some string'
  console.log(promise); // { [[PromiseState]]: "fulfilled", [[PromiseResult]]: 'Some string', [[Prototype]]: Promise }
});
```

---

<!-- .slide: style="font-size: .6em" -->

## Promise: react to state change

Promise state <b style="color: red">rejected</b> without result

```js
const promise = new Promise((resolve, reject) => {
  console.log('Promise created');

  reject(); // our code above didn't complete well, change promise state to rejected without result
});

console.log(promise); // { [[PromiseState]]: "pending", [[PromiseResult]]: undefined, [[Prototype]]: Promise }

promise.then(
  () => {
    // onfulfilled callback
    console.log('fulfilled', promise);
  },
  () => {
    // onrejected callback
    console.log(promise); // { [[PromiseState]]: "rejected", [[PromiseResult]]: undefined, [[Prototype]]: Promise }
  }
);
```

---

<!-- .slide: style="font-size: .6em" -->

## Promise: react to state change

Promise state <b style="color: red">rejected</b> with result

```js
const promise = new Promise((resolve, reject) => {
  console.log('Promise created');

  reject({ code: 404, message: 'Not found' }); // our code above didn't complete well, change promise state to rejected with result
});

console.log(promise); // { [[PromiseState]]: "pending", [[PromiseResult]]: undefined, [[Prototype]]: Promise }

promise.then(
  () => {
    // onfulfilled callback
    console.log('fulfilled', promise);
  },
  (error) => {
    // onrejected callback
    // error has data passed in reject above, in our case { code: 404, message: 'Not found' }
    console.log(promise); // { [[PromiseState]]: "rejected", [[PromiseResult]]: undefined, [[Prototype]]: Promise }
  }
);
```

---

<!-- .slide: style="font-size: .6em" -->

## Promise: react to state change

Promise state <b style="color: red">rejected</b> with result

```js
const promise = new Promise((resolve, reject) => {
  console.log('Promise created');

  reject({ code: 404, message: 'Not found' }); // our code above didn't complete well, change promise state to rejected with result
});

console.log(promise); // { [[PromiseState]]: "pending", [[PromiseResult]]: undefined, [[Prototype]]: Promise }

promise
  .then(() => {
    // onfulfilled callback
    console.log('fulfilled', promise);
  })
  .catch((error) => {
    // onrejected callback
    // error has data passed in reject above, in our case { code: 404, message: 'Not found' }
    console.log(promise); // { [[PromiseState]]: "rejected", [[PromiseResult]]: undefined, [[Prototype]]: Promise }
  });
```

---

<!-- .slide: style="font-size: .5em" -->

## Promise chaining

promise.then return Promise, so it's possible to create a chain

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log('Start data fetching...');
    setTimeout(() => {
      const data = [1, 2, 3];
      resolve(data);
    }, 500);
  });
}

fetchData()
  .then((data) => {
    console.log('Data fetched from server');
    return data;
  })
  .then((data) => {
    console.log('Processing data...');
    return data.map((item) => item ** 2);
  })
  .then((data) => {
    console.log('Displaying data...');
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

---

# Promise API

---

<!-- .slide: style="font-size: .5em" -->

## Promise API: Promise.all

Promise.all waits for all promises to be fulfilled

If any of the promises is failed (rejected), then Promise.all stopped with this error

```js
const promiseAll = Promise.all([
  new Promise((resolve) => setTimeout(() => resolve('Ivan'), 3000)),
  new Promise((resolve) => setTimeout(() => resolve({ age: 2 }), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]);

promiseAll.then((resultArray) => {
  console.log(resultArray); // ['Ivan', { age: 2 }, 3]
});
```

---

<!-- .slide: style="font-size: .5em" -->

## Promise API: Promise.allSettled

Promise.allSettled waits for all promises to be completed either with fulfilled state or rejected

If any of the promises is failed (rejected), then Promise.all stopped with this error

```js
const promiseAllSettled = Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve('Ivan'), 3000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject('Error message'), 2000)
  ),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]);

promiseAllSettled.then((resultArray) => {
  console.log(resultArray); // [{ status: 'fulfilled', value: 'Ivan' }, { status: 'rejected', reason: 'Error message' }, { status: 'fulfilled', value: 3 }]
});
```

---

<!-- .slide: style="font-size: .5em" -->

## Promise API: Promise.race

Promise.race waits for the first fulfilled or rejected promise

```js
const promiseRace = Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('Ivan'), 3000)),
  new Promise((resolve) => setTimeout(() => resolve({ age: 2 }), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]);

promiseRace.then((result) => {
  console.log(result); // 3, because the third promise is the fastest (1000mc timeout)
});
```

---

<!-- .slide: style="font-size: .5em" -->

## Promise API: Promise.any

Promise.any waits for the first **fulfilled** promise

If there is no any fulfilled promise, then reject a promise with AggregateError - a special objects that keeps all promises errors in the property errors

```js
const promiseAny = Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject('Error message'), 500)
  ),
  new Promise((resolve) => setTimeout(() => resolve({ age: 2 }), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]);

promiseAny.then((result) => {
  console.log(result); // 3, because the first promise was the fastest but it has been rejected
});
```

---

<!-- .slide: style="font-size: .5em" -->

## Promise API: Promise.any

Promise.any waits for the first **fulfilled** promise

If there is no any fulfilled promise, then reject a promise with AggregateError - a special objects that keeps all promises errors in the property errors

```js
const promiseAny = Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject('Error!'), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject('Another Error!'), 2000)
  ),
]);

promiseAny
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error!
    console.log(error.errors[1]); // Another error!
  });
```

---

<!-- .slide: style="font-size: .5em" -->

## Promise API: Promise.resolve

```js
Promise.resolve(value);
```

It creates a promise in fulfilled state with the result value

The same as

```js
const promise = new Promise((resolve) => resolve(value));
```

```js
function fetchData() {
  const data = [1, 2, 3];

  return Promise.resolve(data);
}

fetchData()
  .then((result) => result.map((item) => item ** 2))
  .then((data) => console.log(data)); // [1, 4, 9]
```

---

<!-- .slide: style="font-size: .5em" -->

## Promise API: Promise.reject

```js
Promise.reject(error);
```

It creates a promise in rejected state with the error value

The same as

```js
const promise = new Promise((resolve, reject) => reject(error));
```

```js
function fetchData() {
  return Promise.reject('No any data');
}

fetchData()
  .then((result) => result.map((item) => item ** 2))
  .catch((error) => {
    console.error(error); // 'No any data'
    return []; // safety return an empty array to the promise chain below
  })
  .then((data) => console.log(data)); // []
```

---

## Used materials

https://learn.javascript.ru/call-apply-decorators#prozrachnoe-keshirovanie

https://learn.javascript.ru/promise-api

---
