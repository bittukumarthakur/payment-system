class User {

  constructor(name, age, password) {
    this.details = { name, age };
    this.balance = 0;
    this.history = [];
    this.password = password;
  }

  getInfo() {
    return { ...this };
  }

  getBalance() {
    return this.balance
  }

  getHistory() {
    return [...this.history];
  }

  add(amount) {
    this.balance += amount;
    this.history.push(`amount ${amount} added.`)
  }

  transfer(amount, to, password) {
    this.balance -= amount;
    this.history.push(`amount ${amount} transfered`)
    to.add(amount);
  }

}

exports.User = User;