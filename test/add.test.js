var chai = require("chai");
const { default: add } = require("../src/add.js");
var sum = require ("../src/add.js")
const expect = chai.expect


describe("Add", () => {
 it("adds positive number to positive number", () =>{
     expect(add(3,6)).to.equal(9)
 });
})