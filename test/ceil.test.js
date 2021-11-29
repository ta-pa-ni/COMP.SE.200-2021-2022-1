import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect

describe("ceil", () => {
 it("take a ceil function out of a number 7 with -1 precision", () =>{
     expect(ceil(7,-1)).to.equal(10)
 });
})