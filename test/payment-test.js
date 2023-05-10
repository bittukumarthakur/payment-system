const { it, describe } = require("node:test");
const { User } = require("../src/payment.js");
const { deepStrictEqual } = require("assert");

describe("users() :", function () {

  it("creating a user, bittu", function () {
    const bittu = new User("bittu", 19, "bittu123");
    const userDetail = {
      details: { name: 'bittu', age: 19, password: "bittu123" },
      balance: 0,
      history: []
    };

    deepStrictEqual(bittu.getInfo(), userDetail);
  });

});
