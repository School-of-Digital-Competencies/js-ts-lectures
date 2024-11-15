# JavaScript Arrays Tasks

[Back to all tasks](../../README.md)

Task 1: Double the Values
Create a function doubleValues that takes an array of numbers and returns a new array where each value is doubled using the map function.

Usage:

```js
const doubled = doubleValues([1, 2, 3, 4]);
console.log(doubled); // [2, 4, 6, 8]
```

Task 2: Filter Out Odd Numbers
Create a function filterOddNumbers that takes an array of numbers and returns a new array containing only the even numbers using the filter function.

Usage:

```js
const evens = filterOddNumbers([1, 2, 3, 4, 5, 6]);
console.log(evens); // [2, 4, 6]
```

Task 3: Sum of All Numbers
Create a function sumAllNumbers that takes an array of numbers and returns the sum of all the numbers using the reduce function.

Usage:

```js
const total = sumAllNumbers([1, 2, 3, 4]);
console.log(total); // 10
```

Task 4: Get Lengths of Strings
Create a function getStringLengths that takes an array of strings and returns a new array containing the lengths of each string using the map function.

Usage:

```js
const lengths = getStringLengths(["apple", "banana", "cherry"]);
console.log(lengths); // [5, 6, 6]
```

Task 5: Find Positive Numbers
Create a function findPositiveNumbers that takes an array of numbers and returns a new array containing only the positive numbers using the filter function.

Usage:

```js
const positives = findPositiveNumbers([-1, 2, -3, 4, 5]);
console.log(positives); // [2, 4, 5]
```

These tasks will help you practice using built-in array functions like map, filter, and reduce in JavaScript.

Task 6: Find the Average
Create a function findAverage that takes an array of numbers and returns the average value using the reduce function.

Usage:

```js
const average = findAverage([1, 2, 3, 4, 5]);
console.log(average); // 3
```

Task 7: Remove Duplicates from Array
Create a function removeDuplicates that takes an array and returns a new array with only unique values using the filter function.

Usage:

```js
const uniqueArray = removeDuplicates([1, 2, 2, 3, 4, 4]);
console.log(uniqueArray); // [1, 2, 3, 4]
```

Task 8: Flatten a Nested Array
Create a function flattenArray that takes a nested array and returns a single-level array using the reduce function.

Usage:

```js
const flat = flattenArray([1, [2, [3, 4]], 5]);
console.log(flat); // [1, 2, 3, 4, 5]
```

Task 9: Count Occurrences of Elements
Create a function countOccurrences that takes an array and returns an object with the count of each element.

Usage:

```js
const counts = countOccurrences([1, 1, 2, 3, 3, 3]);
console.log(counts); // { 1: 2, 2: 1, 3: 3 }
```

Task 10: Merge Two Sorted Arrays
Create a function mergeSortedArrays that takes two sorted arrays and returns a new sorted array that merges both.

Usage:

```js
const merged = mergeSortedArrays([1, 3, 5], [2, 4, 6]);
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

Task 11: Find the Longest String
Create a function findLongestString that takes an array of strings and returns the longest string using the reduce function.

Usage:

```js
const longest = findLongestString(["apple", "banana", "cherry"]);
console.log(longest); // "banana"
```

Task 12: Group by Property Value
Create a function groupByProperty that takes an array of objects and a property name, returning an object where the keys are property values and the values are arrays of objects.

Usage:

```js
const grouped = groupByProperty(
  [
    { id: 1, category: "A" },
    { id: 2, category: "B" },
    { id: 3, category: "A" },
  ],
  "category"
);
console.log(grouped); // { A: [{ id: 1 }, { id: 3 }], B: [{ id: 2 }] }
```

Task 13: Rotate an Array
Create a function rotateArray that takes an array and a number n, and rotates the array to the right by n positions.

Usage:

```js
const rotated = rotateArray([1, 2, 3, 4, 5], 2);
console.log(rotated); // [4, 5, 1, 2, 3]
```

Task 14: Find the Second Largest Number
Create a function findSecondLargest that takes an array of numbers and returns the second largest number.

Usage:

```js
const secondLargest = findSecondLargest([1, 5, 3, 9, 2]);
console.log(secondLargest); // 5
```

Task 15: Create a Histogram
Create a function createHistogram that takes an array of numbers and returns an array of strings representing a histogram.

Usage:

```js
const histogram = createHistogram([1, 2, 3, 2, 1]);
console.log(histogram); // ["*", "**", "***", "**", "*"]
```

Task 16: Find All Pairs with a Sum
Create a function findPairsWithSum that takes an array of numbers and a target sum, returning an array of pairs that add up to the target sum.

Usage:

```js
const pairs = findPairsWithSum([1, 2, 3, 4, 5], 5);
console.log(pairs); // [[1, 4], [2, 3]]
```

Task 17: Implement Array Chunking
Create a function chunkArray that takes an array and a size, returning a new array containing chunks of the specified size.

Usage:

```js
const chunks = chunkArray([1, 2, 3, 4, 5], 2);
console.log(chunks); // [[1, 2], [3, 4], [5]]
```

Task 18: Find Missing Number
Create a function findMissingNumber that takes an array of numbers from 1 to n with one number missing, and returns the missing number.

Usage:

```js
const missing = findMissingNumber([1, 2, 4, 5]);
console.log(missing); // 3
```

Task 19: Sort Objects by Property
Create a function sortByProperty that takes an array of objects and a property name, returning a new array sorted by that property.

Usage:

```js
const sortedByAge = sortByProperty(
  [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ],
  "age"
);
console.log(sortedByAge); // [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }]
```

Task 20: Find Unique Elements in Two Arrays
Create a function findUniqueElements that takes two arrays and returns an array of elements that are unique to each array.

Usage:

```js
const unique = findUniqueElements([1, 2, 3], [2, 3, 4]);
console.log(unique); // [1, 4]
```
