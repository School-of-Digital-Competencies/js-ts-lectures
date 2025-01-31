// Создать учетную систему всех людей в универе
// Человек - это имя, возраст и роль
// Роль - это студент, препод, администрация

// Учетная система
// CRUD операции - Create, Read, Update, Delete + Store, Read All, Sort all, Filter all

class Person {
  private _name: string;
  private _age: number;
  private _role: number;

  constructor(name: string, age: number, role: number) {
    this._name = name;
    this._age = age;
    this._role = role;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  get role() {
    return this._role;
  }
}

class AccountSystem {
  private persons: Person[];

  constructor() {
    this.persons = new Array();
  }

  private _add(person: Person) {
    const filtered = this.persons.filter(
      (value) =>
        value.name === person.name &&
        value.age === person.age &&
        value.role === person.role
    );

    if (filtered.length !== 0) {
      throw new Error("Person already exists");
    } else {
      this.persons.push(person);
    }
  }

  public create(name: string, age: number, role: number) {
    const person = new Person(name, age, role);

    this._add(person);
  }

  public add(person: Person) {
    this._add(person);
  }

  public read(): string {
    let str = "";

    this.persons.forEach((person: Person) => {
      const personStr = `${person.name} ${person.age} ${person.role}`;
      str = `${str}${str === "" ? "" : "\n"}${personStr}`;
    });

    return str;
  }

  public update(currentName: string, newName: string) {
    const filtered = this.persons.filter((value) => value.name === currentName);

    const [foundPerson] = filtered; // equals --> const foundPerson = filtered[0];

    if (!foundPerson) {
      throw new Error(`Person with name ${currentName} is not found`);
    }

    foundPerson.name = newName;
  }
}

function run() {
  const system = new AccountSystem();

  try {
    system.create("Ivan", 20, 153453);
    system.create("Ivan", 20, 153453);
  } catch (err: unknown) {
    console.error(err);
  }

  console.log(system.read());

  try {
    system.update("Ivan", "Denis");

    console.log(system.read());

    system.update("Maria", "Dasha");

    console.log(system.read());
  } catch (err: unknown) {
    console.error(err);
  }
}

run();
