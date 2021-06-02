// 2.Create an Account class. Account should have:
// fields
// id
// name
// balance
// getters for fields
// setters - for name and balance
// credit(amount) - which should add amount to balance and return the updated balance.
// debit(amount) - which should subtract the amount from the balance, if amount is less than the
// balance, otherwise output “Amount exceeded balance.”
// transferTo(anotherAccount, amount) - which should subtract the amount from the account
// balance and add it to the given anotherAccount and return the updated balance, if amount is less
// than the balance, otherwise output “Amount exceeded balance.”
// static method: identifyAccounts(accountFirst, accountSecond) - which gets two accounts
// and identifies if they are the same or not comparing all fields.
// toString()

class Account {
  constructor(name, balance) {
    this._id = this.counter();
    this._name = name;
    this._balance = balance;
  }

  credit(amount) {
    this._balance += amount;
    return this._balance;
  }
  debit(amount) {
    if (amount > this._balance) {
      return "Amount exceeded balance.";
    } else {
      this._balance -= amount;
      return this._balance;
    }
  }
  transferTo(anotherAccount, amount) {
    if (this._balance < amount) {
      return "Amount exceeded balance.";
    } else {
      this.debit(amount);
      anotherAccount.credit(amount);
      return this.balance;
    }
  }
  toString() {
    return `${this._name} account's account balance is
        $${this._balance}.`;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get balance() {
    return this._balance;
  }
  set name(n) {
    this._name = n;
  }
  set balance(bal) {
    this._balance = bal;
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst === accountSecond) {
      return true;
    } else {
      return false;
    }
  }
  counter() {
    Account._counter = (Account._counter || 0) + 1;
    return Account._counter;
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account', _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is $1400.

