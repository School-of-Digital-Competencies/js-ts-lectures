# JavaScript Async Tasks

[Back to all tasks](../../README.md)

Task 1: Delayed Greeting
Create a function delayedGreeting that takes a name and a delay (in milliseconds) as arguments. The function should use setTimeout to log a greeting message to the console after the specified delay.

Usage:

```js
delayedGreeting("Alice", 3000); // Logs "Hello, Alice!" after 3 seconds
```

Task 2: Countdown Timer
Create a function countdown that takes a number of seconds as an argument and logs the countdown to the console every second until it reaches zero. Use setInterval for the countdown and clearInterval to stop it when the countdown is complete.

Usage:

```js
countdown(5); // Logs 5, 4, 3, 2, 1, 0 at 1-second intervals
```

Task 3: Repeating Task
Create a function repeatTask that takes a task (a function) and a delay (in milliseconds) as arguments. The function should use setInterval to execute the task repeatedly at the specified interval. Provide a way to stop the repeating task after a certain number of executions.

Usage:

```js
repeatTask(() => console.log("Task executed!"), 1000); // Logs "Task executed!" every second
```

Task 4: Debouncing Function
Create a function debounce that takes a function and a delay (in milliseconds) as arguments. The debounced function should only execute after the specified delay has passed since the last time it was invoked. This is useful for optimizing performance in situations like handling input events.

Usage:

```js
const debouncedLog = debounce(() => console.log("Input changed!"), 500);
debouncedLog(); // Executes only after 500ms of no additional calls
```

Task 5: Throttling Function
Create a function throttle that takes a function and a delay (in milliseconds) as arguments. The throttled function should only allow the original function to execute at most once during the specified delay, regardless of how many times it is called. This is useful for limiting the rate of function execution.

Usage

```js
const throttledLog = throttle(() => console.log("Button clicked!"), 1000);
throttledLog(); // Executes immediately, but subsequent calls within 1 second are ignored
```

Task 1: Fetch User Data
Create a function fetchUser Data that retrieves user data from an API (e.g., "https://jsonplaceholder.typicode.com/users"). The function should return a promise that resolves with the user data or rejects with an error message.

Usage:

```js
fetchUser Data("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(error => console.error(error));
```

Task 2: Fetch Post by ID
Create a function fetchPostById that takes a post ID as an argument and fetches the corresponding post from an API (e.g., "https://jsonplaceholder.typicode.com/posts/{id}"). The function should return a promise that resolves with the post data.

Usage:

```js
fetchPostById(1)
  .then((post) => console.log(post))
  .catch((error) => console.error(error));
```

Task 3: Chaining Promises
Create a function getUser AndPosts that takes a user ID, fetches the user data, and then fetches the posts for that user. The function should return a promise that resolves with an object containing both the user data and their posts.

Usage:

```js
getUser AndPosts(1)
.then(result => console.log(result))
.catch(error => console.error(error));
```

Task 4: Promise.all for Multiple Requests
Create a function fetchMultiplePosts that takes an array of post IDs and returns a promise that resolves with an array of post data for all provided IDs using Promise.all.

Usage:

```js
fetchMultiplePosts([1, 2, 3])
  .then((posts) => console.log(posts))
  .catch((error) => console.error(error));
```

Task 5: Timeout Promise
Create a function wait that takes a number of milliseconds as an argument and returns a promise that resolves after that amount of time.

Usage:

```js
wait(3000)
  .then(() => console.log("Waited for 3 seconds"))
  .catch((error) => console.error(error));
```

Task 6: Fetch with Error Handling
Create a function fetchWithErrorHandling that fetches data from an API but simulates a potential error (e.g., by randomly failing). Ensure that the promise is handled properly.

Usage:

```js
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
```

Task 7: Create and Resolve a Promise
Create a function createPromise that returns a new promise that resolves with a message after a delay of 2 seconds.

Usage:

```js
createPromise()
  .then((message) => console.log(message)) // Logs "Promise resolved!"
  .catch((error) => console.error(error));
```

Task 8: Promise Race
Create a function promiseRace that takes an array of promises and returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

Usage:

```js
promiseRace([fetchUser Data(), wait(1000)])
.then(result => console.log(result))
.catch(error => console.error(error));
```

Task 9: Fetch Data with Retry Logic
Create a function fetchWithRetry that attempts to fetch data from an API, retrying up to 3 times upon failure before rejecting the promise.

Usage:

```js
fetchWithRetry("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((error) => console.error("Failed after retries:", error));
```

Task 10: Delayed Promise Resolution
Create a function delayedResolve that takes a value and a delay (in milliseconds) and returns a promise that resolves with the value after the specified delay.

Usage:

```js
delayedResolve("Hello, World!", 2000)
  .then((value) => console.log(value)) // Logs "Hello, World!" after 2 seconds
  .catch((error) => console.error(error));
```

Task 11: Fetch Comments for a Post
Create a function fetchCommentsForPost that takes a post ID and fetches the comments for that post from an API (e.g., "https://jsonplaceholder.typicode.com/comments?postId={id}").

Usage:

```js
fetchCommentsForPost(1)
  .then((comments) => console.log(comments))
  .catch((error) => console.error(error));
```

Task 12: Convert Callback to Promise
Create a function callbackToPromise that takes a function that uses a callback and returns a promise that resolves or rejects based on the callback's execution.

Usage:

```js
callbackToPromise((callback) => {
  setTimeout(() => callback(null, "Success!"), 1000);
})
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

Task 13: Sequential Promise Execution
Create a function executeSequentially that takes an array of functions that return promises and executes them in sequence, returning a promise that resolves with the results of all promises.

Usage:

```js
executeSequentially([fetchUser Data, fetchPostById])
.then(results => console.log(results))
.catch(error => console.error(error));
```

Task 14: Promise Cancellation
Create a function cancellablePromise that returns a promise that can be canceled before it resolves. Use an object to manage the cancellation state.

Usage:

```js
const { promise, cancel } = cancellablePromise(() => wait(5000));
promise
  .then(() => console.log("Completed"))
  .catch((error) => console.error("Canceled:", error));
cancel(); // Cancels the promise
```

Task 15: Fetch Data with Timeout
Create a function fetchWithTimeout that fetches data from an API but rejects the promise if the fetch takes longer than a specified timeout duration.

Usage:

```js
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 2000)
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch timed out:", error));
```

These tasks will help you practice working with promises in JavaScript, including fetching data, handling errors, managing timeouts, and more.
