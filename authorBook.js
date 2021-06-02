// 1.Create an Author class and a Book class.
// Author should have:
// fields
// name
// email
// gender
// methods
// getters for fields
// toString()
// Book should have:
// fields
// title
// author(Author)
// price
// quantity
// methods
// getters for fields
// setters for fields
// getProfit() - which calculates the profit from the book based on the price and quantity.
// toString()

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== "string") {
      throw new Error("Name should be a string!");
    }
    return this.name;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.test(regex)) {
      return this.email;
    }
  }

  get gender() {
    return this._gender.toLowerCase();
  }

  set gender(gender) {
    if (gender === "male" || gender === "female") {
      return this.gender;
    } else {
      throw new Error("Unknown gender!");
    }
  }

  toString() {
    if (this.gender === "male") {
      return `Mr ${this.name}`;
    } else if (this.gender === "female") {
      return `Ms ${this.name}`;
    }
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._price = price;
    this._quantity = quantity;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (typeof title !== "string") {
      throw new Error("Title should be a string!");
    }

    return this._title;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    if (typeof author !== "string") {
      throw new Error("author should be a string!");
    }

    return this._author;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    if (typeof price !== "number") {
      throw new Error("price should be a number!");
    }

    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(quantity) {
    if (typeof quantity !== "number") {
      throw new Error("quantity should be a number!");
    }

    return this._quantity;
  }
}

let author1 = new Author("J. K. Rowling", "abc@gmai.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author1.name = 12; // throws error
