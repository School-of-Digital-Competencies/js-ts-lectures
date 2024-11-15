# JavaScript Classes Tasks

[Back to all tasks](../../README.md)
Task 1: Implementing a Class for a Person
Create a class Person that includes properties for the person's name and age. Add methods to introduce the person, check if they are an adult, and update their age.
Usage:

```js
const john = new Person("John", 25);
console.log(john.introduce()); // "Hi, I'm John and I'm 25 years old."
console.log(john.isAdult()); // true
john.updateAge(30);
console.log(john.introduce()); // "Hi, I'm John and I'm 30 years old."
```

Task 2: Building a Class for a Bank Account
Design a class BankAccount that represents a bank account with properties for the account holder's name and balance. Implement methods to deposit, withdraw, check the balance, and transfer funds to another account.
Usage:

```js
const account = new BankAccount("Alice", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
account.withdraw(200);
console.log(account.getBalance()); // 1300
const account2 = new BankAccount("Bob", 500);
account.transfer(account2, 300);
console.log(account.getBalance()); // 1000
console.log(account2.getBalance()); // 800
```

Task 3: Creating a Class for a Book
Create a class Book that includes properties for the title, author, and number of pages. Add methods to get a summary of the book, check if it's a long read, and compare the number of pages with another book.
Usage:

```js
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
console.log(book1.getSummary()); // "The Great Gatsby by F. Scott Fitzgerald, 180 pages."
console.log(book1.isLongRead()); // false
const book2 = new Book("War and Peace", "Leo Tolstoy", 1225);
console.log(book1.comparePages(book2)); // "War and Peace has more pages."
```

Task 4: Implementing a Class for a Simple Timer
Design a class Timer that allows you to start, stop, and reset a timer. Include methods to get the elapsed time in seconds, check if the timer is running, and format the elapsed time as a string.
Usage:

```js
const timer = new Timer();
timer.start();
setTimeout(() => { timer.stop(); console.log(timer.getElapsedTime()); // Elapsed time in seconds }, 1000);
console.log(timer.isRunning()); // false
console.log(timer.formatElapsedTime()); // "0:01" (assuming 1 second elapsed)
```

Task 5: Creating a Class for a Shopping Cart
Build a class ShoppingCart that allows you to add items, remove items, and calculate the total price of items in the cart. Each item should have a name and price. Add methods to list all items and apply a discount.

Usage:

```js
const cart = new ShoppingCart();
cart.addItem("Apple", 1.5);
cart.addItem("Banana", 1.0);
console.log(cart.getTotal()); // 2.5
console.log(cart.listItems()); // ["Apple", "Banana"]
cart.applyDiscount(0.1);
console.log(cart.getTotal()); // 2.25 (10% discount applied)
```

Task 6: Creating a Class for a Movie
Design a class Movie that includes properties for the title, director, and release year. Add methods to get a summary of the movie, check if it was released in the current decade, and get the age of the movie.

Usage:

```js
const movie = new Movie("Inception", "Christopher Nolan", 2010);
console.log(movie.getSummary()); // "Inception directed by Christopher Nolan, released in 2010."
console.log(movie.isCurrentDecade()); // true
console.log(movie.getAge()); // 13 (assuming the current year is 2023)
```

Task 7: Implementing a Class for a Recipe
Create a class Recipe that includes properties for the recipe name, ingredients, and cooking time. Add methods to get a list of ingredients, check if it’s a quick recipe (under 30 minutes), and get a formatted recipe description.

Usage:

```js
const recipe = new Recipe("Pasta", ["pasta", "tomato sauce", "cheese"], 20);
console.log(recipe.getIngredients()); // ["pasta", "tomato sauce", "cheese"]
console.log(recipe.isQuickRecipe()); // true
console.log(recipe.getDescription()); // "Pasta takes 20 minutes to cook."
```

Task 8: Creating a Class for a Car
Design a class Car that includes properties for the make, model, and year. Implement methods to get the car's age, check if it's a classic car (over 20 years old), and get the full description of the car.

Usage:

```js
const car = new Car("Toyota", "Camry", 2000);
console.log(car.getAge()); // 23 (assuming the current year is 2023)
console.log(car.isClassic()); // true
console.log(car.getDescription()); // "2000 Toyota Camry"
```

Task 9: Implementing a Class for a Contact
Create a class Contact that includes properties for the contact's name, phone number, and email. Add methods to update the phone number, check if the email is valid, and get the contact's information.

Usage:

```js
const contact = new Contact("Alice", "123-456-7890", "alice@example.com");
console.log(contact.getInfo()); // "Alice: 123-456-7890, Email: alice@example.com"
contact.updatePhone("098-765-4321");
console.log(contact.getInfo()); // "Alice: 098-765-4321, Email: alice@example.com"
console.log(contact.isEmailValid()); // true
```

Task 10: Creating a Class for a Todo List
Design a class TodoList that allows you to add tasks, remove tasks, and check if a task is completed. Each task should have a title and a completed status. Add methods to list all tasks and get the count of completed tasks.

Usage:

```js
const todoList = new TodoList();
todoList.addTask("Buy groceries");
todoList.addTask("Clean the house");
todoList.markTaskAsCompleted(0);
console.log(todoList.listTasks()); // [{ title: "Buy groceries", completed: true }, { title: "Clean the house", completed: false }]
console.log(todoList.getCompletedCount()); // 1
```

Task 11: Creating a Class for a Vehicle
Create a base class Vehicle with properties for make, model, and year. Then create a subclass Car that extends Vehicle and adds properties for the number of doors and trunk size. Include methods to get the vehicle's age and a full description.

Usage:

```js
const car = new Car("Honda", "Civic", 2020, 4, 450);
console.log(car.getCarDetails());
console.log(car.getAge(2023));
```

Task 12: Implementing a Class for a User
Create a base class User with properties for username and email. Then create a subclass Admin that extends User and adds properties for admin level and permissions. Include methods to get user info and admin details.

Usage:

```js
const admin = new Admin("adminUser ", "admin@example.com", 1, [
  "read",
  "write",
  "delete",
]);
console.log(admin.getAdminDetails());
```

Task 13: Creating a Class for a Shape
Create a base class Shape with a method to calculate area. Then create subclasses Rectangle and Circle that extend Shape and implement their specific area calculations.

Usage:

```js
const rectangle = new Rectangle(10, 5);
console.log(rectangle.calculateArea());

const circle = new Circle(3);
console.log(circle.calculateArea());
```

Task 14: Implementing a Class for a Product
Create a base class Product with properties for name and price. Then create subclasses Electronics and Clothing that extend Product and add specific properties like warranty for electronics and size for clothing. Include methods to get product details.

Usage:

```js
const laptop = new Electronics("Laptop", 1200, 2);
console.log(laptop.getDetails());

const shirt = new Clothing("Shirt", 30, "M");
console.log(shirt.getDetails());
```

Task 15: Creating a Class for a Bank Account with Inheritance
Create a base class BankAccount with properties for account holder's name and balance. Then create subclasses SavingsAccount and CheckingAccount that extend BankAccount and add specific properties like interest rate for savings and transaction fees for checking. Include methods to get account details.

Usage:

```js
const savings = new SavingsAccount("Alice", 1000, 0.05);
savings.applyInterest();
console.log(savings.getAccountDetails());

const checking = new CheckingAccount("Bob", 500, 2);
checking.withdraw(100);
console.log(checking.getAccountDetails());
```
