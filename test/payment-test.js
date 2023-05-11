const { it, describe } = require("node:test");
const { User } = require("../src/payment.js");
const { strictEqual, deepStrictEqual } = require("assert");

describe("users() :", function () {

  it("getInfo()", function () {
    const bittu = new User("bittu", 19, "bittu123");
    const userDetail = {
      details: { name: 'bittu', age: 19 },
      balance: 0,
      history: [],
      password: "bittu123"
    };

    deepStrictEqual(bittu.getInfo(), userDetail);
  });

  it("balance()", function () {
    const bittu = new User("bittu", 19, "bittu123");
    deepStrictEqual(bittu.getBalance(), 0);
  });

  it("add()", function () {
    const bittu = new User("bittu", 19, "bittu123");
    bittu.add(10);
    console.log(bittu.getHistory());
    deepStrictEqual(bittu.getBalance(), 10);
  });

  it("transfer()", function () {
    const govind = new User("govind", 21, "govind123");

    const bittu = new User("bittu", 19, "bittu123");
    bittu.add(20);
    bittu.transfer(5, govind, "bittu123");
    console.log(bittu.getHistory());

    strictEqual(govind.getBalance(), 5);
    strictEqual(bittu.getBalance(), 15);
  });

});
