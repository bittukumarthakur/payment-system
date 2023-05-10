 class User {

  constructor(name, age, password) {
    this.account = {};
    this.account.details = {name, age, password};
    this.account.balance = 0;
    this.account.history = [];
  }

  getInfo() {
    return this.account;

  }
 }

 exports.User = User;