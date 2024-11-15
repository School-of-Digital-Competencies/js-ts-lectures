# JavaScript Objects Tasks

[Back to all tasks](../../README.md)

Create an Object: Write a function createPerson that creates and returns an object representing a person. The object should have properties like name, age, and gender.
// Example: createPerson("Alice", 30, "female");

Create an Object: Write a function Person that creates and returns an object representing a person. The object should have properties like name, age, and gender. Function Person must be called with the keyword new.
// Example: new Person("Alice", 30, "female");

Access Object Properties: Create a function getProperty that takes an object and a property name as arguments and returns the value of that property.
// Example: getProperty({ name: "Alice", age: 30 }, "name"); // Returns "Alice"

Add a Property to an Object: Write a function addProperty that adds a new property city to an existing object.
// Example: const person = { name: "Alice", age: 30 };
// addProperty(person, "city", "New York"); // person is now { name: "Alice", age: 30, city: "New York" }

Delete a Property from an Object: Create a function deleteProperty that removes a specified property from an object.
// Example: const person = { name: "Alice", age: 30, city: "New York" };
// deleteProperty(person, "city"); // person is now { name: "Alice", age: 30 }

Check if a Property Exists: Write a function hasProperty that checks if a given property exists in an object.
// Example: hasProperty({ name: "Alice" }, "name"); // Returns true

Merge Two Objects: Create a function mergeObjects that merges two objects into one.
// Example: mergeObjects({ name: "Alice" }, { age: 30 }); // Returns { name: "Alice", age: 30 }

Clone an Object: Write a function cloneObject that creates a shallow copy of an object.
// Example: const original = { name: "Alice" };
// const copy = cloneObject(original); // copy is { name: "Alice" }

Get Object Keys: Create a function getObjectKeys that returns an array of all the keys in an object.
// Example: getObjectKeys({ name: "Alice", age: 30 }); // Returns ["name", "age"]

Get Object Values: Write a function getObjectValues that returns an array of all the values in an object.
// Example: getObjectValues({ name: "Alice", age: 30 }); // Returns ["Alice", 30]

Count Properties in an Object: Create a function countProperties that counts the number of properties in an object.
// Example: countProperties({ name: "Alice", age: 30 }); // Returns 2

Iterate Over Object Properties: Write a function logProperties that logs each key-value pair in an object.
// Example: logProperties({ name: "Alice", age: 30 }); // Prints name: "Alice" and on the next line age: 30

Create an Object from an Array: Create a function arrayToObject that takes an array of key-value pairs and converts it into an object.
// Example: arrayToObject([["name", "Alice"], ["age", 30]]); // Returns { name: "Alice", age: 30 }

Deep Clone an Object: Write a function deepClone that creates a deep copy of an object.
// Example: const original = { name: "Alice", address: { city: "New York" } };
// const copy = deepClone(original); // copy is a deep clone of original

Find the Maximum Value in an Object: Create a function findMaxValue that finds the maximum value among the properties of an object that are numbers.
// Example: findMaxValue({ a: 1, b: 5, c: "hello" }); // Returns 5

Filter Object Properties: Write a function filterProperties that filters the properties of an object based on a condition.
// Example: filterProperties({ a: 1, b: 2, c: 3 }, value => value > 1); // Returns { b: 2, c: 3 }

Transform Object Values: Create a function transformValues that transforms the values of an object using a provided callback function.
// Example: transformValues({ a: 1, b: 2 }, value => value \* 2); // Returns { a: 2, b: 4 }

Get Nested Object Property: Write a function getNestedProperty that retrieves a value from a nested object using a path string.
// Example: getNestedProperty({ user: { address: { city: "New York" } } }, "user.address.city"); // Returns "New York"

Flatten a Nested Object: Create a function flattenObject that flattens a nested object into a single-level object with concatenated keys.
// Example: flattenObject({ user: { name: "Alice", age: 30 }, city: "New York" });
// Returns { "user.name": "Alice", "user.age": 30, city: "New York" }

Sort Object Keys: Write a function sortObjectKeys that returns a new object with its properties sorted by key.
// Example: sortObjectKeys({ b: 2, a: 1 }); // Returns { a: 1, b: 2 }

Transform Object Keys: Create a function transformKeys that transforms the keys of an object using a provided callback function.
// Example: transformKeys({ a: 1, b: 2 }, key => key.toUpperCase()); // Returns { A: 1, B: 2 }

Count Occurrences of Values: Write a function countValueOccurrences that counts how many times each value appears in an object.
// Example: countValueOccurrences({ a: 1, b: 2, c: 1 }); // Returns { 1: 2, 2: 1 }

Pick Specific Properties: Create a function pickProperties that takes an object and an array of property names, returning a new object with only those properties.
// Example: pickProperties({ name: "Alice", age: 30, city: "New York" }, ["name", "city"]);
// Returns { name: "Alice", city: "New York" }

Omit Specific Properties: Write a function omitProperties that takes an object and an array of property names, returning a new object without those properties.
// Example: omitProperties({ name: "Alice", age: 30, city: "New York" }, ["age"]);
// Returns { name: "Alice", city: "New York" }

Get Property Types: Create a function getPropertyTypes that returns an object with the types of each property in the original object.
// Example: getPropertyTypes({ name: "Alice", age: 30 }); // Returns { name: "string", age: "number" }

Group Objects by Property: Write a function groupByProperty that takes an array of objects and groups them by a specified property.
// Example: groupByProperty([{ name: "Alice", city: "New York" }, { name: "Bob", city: "New York" }, { name: "Charlie", city: "Chicago" }], "city");
// Returns { "New York": [{ name: "Alice", city: "New York" }, { name: "Bob", city: "New York" }], "Chicago": [{ name: "Charlie", city: "Chicago" }] }

Find Common Properties: Write a function findCommonProperties that takes two objects and returns an array of properties that are common to both objects.
// Example: findCommonProperties({ a: 1, b: 2 }, { b: 3, c: 4 }); // Returns ["b"]

Get Unique Properties: Create a function getUniqueProperties that takes two objects and returns an array of properties that are unique to each object.
// Example: getUniqueProperties({ a: 1, b: 2 }, { b: 3, c: 4 }); // Returns ["a", "c"]

Create a Default Object: Write a function createDefaultObject that creates an object with default properties and allows overriding some of them.
// Example: createDefaultObject({ name: "Alice" }); // Returns { name: "Alice", age: 0, city: "Unknown" }

Transform Object to CSV: Write a function arrayToCSV that converts an array of objects into CSV format.
// Example: arrayToCSV([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]);
// Returns "name,age\nAlice,30\nBob,25"

Create a Read-Only Object: Write a function createReadOnlyObject that takes an object and returns a read-only version of it.
// Example: const person = createReadOnlyObject({ name: "Alice" });
// person.name = "Bob"; // Throws an error in strict mode
