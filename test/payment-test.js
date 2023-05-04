const {it, describe} = require("node:test");
const {strictEqual, deepStrictEqual } = require("assert");
const {users} = require("../src/payment.js");

it("user bittu created.", function() { 
  deepStrictEqual(users("bittu"),{
    details: "bittu",
    balance: 100
  })

});
