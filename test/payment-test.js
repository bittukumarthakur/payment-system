const {it, describe} = require("node:test");
const {strictEqual, deepStrictEqual } = require("assert");
const {createUsers} = require("../src/payment.js");


describe("users() :", function() { 
  const bittu = createUsers('bittu');
  it("checking details", function() { 
    deepStrictEqual(bittu.details(),"bittu");
  });

  it("checking balance", function() { 
    deepStrictEqual(bittu.balance(), 0);
  });
});
