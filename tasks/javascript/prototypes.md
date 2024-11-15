# JavaScript Prototypes Tasks

[Back to all tasks](../../README.md)

Task 1: Creating a Prototype Chain
Create a prototype chain where Animal is the parent prototype and Dog and Cat are child prototypes that inherit from Animal. Demonstrate how to add methods and properties to the prototypes and access them from instances of Dog and Cat.
Usage: const dog = new Dog("Fido"); console.log(dog.sound()); // "Woof!"

Task 2: Implementing Inheritance with Prototypes
Write a function Vehicle that serves as a prototype for Car and Motorcycle. Implement inheritance using prototypes, so that Car and Motorcycle inherit properties and methods from Vehicle.
Usage: const car = new Car("Toyota"); console.log(car.drive()); // "Vroom!"

Task 3: Adding Methods to a Prototype
Create a function Rectangle that represents a rectangle with width and height properties. Add methods to the Rectangle prototype to calculate the area and perimeter of a rectangle.
Usage: const rect = new Rectangle(4, 5); console.log(rect.area()); // 20

Task 4: Using Prototypes to Implement Polymorphism
Write a function Shape that serves as a prototype for Circle, Rectangle, and Triangle. Implement polymorphism using prototypes, so that each shape type can have its own implementation of a draw method.
Usage: const circle = new Circle(5); circle.draw(); // "Drawing a circle..."

Task 5: Creating a Prototype with a Private Variable
Create a function BankAccount that represents a bank account with a private balance variable. Add methods to the BankAccount prototype to deposit, withdraw, and get the balance, while keeping the balance variable private.
Usage: const account = new BankAccount(100); account.deposit(50); console.log(account.getBalance()); // 150

Task 6: Extending Built-in Prototypes
Create a prototype method that extends the built-in Array prototype to add a method called last that returns the last element of the array.
Usage: const arr = [1, 2, 3, 4]; console.log(arr.last()); // 4

Task 7: Implementing a Prototype-based Stack
Design a prototype Stack that allows you to create stack instances with methods to push, pop, and check if the stack is empty. Ensure that the stack maintains its own state.
Usage: const stack = new Stack(); stack.push(10); console.log(stack.pop()); // 10

Task 8: Creating a Prototype for a Simple Event Emitter
Implement a prototype EventEmitter that allows you to subscribe to events and emit them. Include methods for on, off, and emit.
Usage: const emitter = new EventEmitter(); emitter.on("event", () => console.log("Event triggered!")); emitter.emit("event"); // "Event triggered!"

Task 9: Building a Prototype for a Simple Todo List
Create a prototype TodoList that allows you to add and remove todo items. Each todo item should have a description and a completed status.
Usage: const todoList = new TodoList(); todoList.add("Learn JavaScript"); console.log(todoList.items); // [{ description: "Learn JavaScript", completed: false }]

Task 10: Creating a Prototype for a Simple Calculator
Design a prototype Calculator with methods for basic arithmetic operations: add, subtract, multiply, and divide. Each method should return the result of the operation.
Usage: const calculator = new Calculator(); console.log(calculator.add(5, 3)); // 8
