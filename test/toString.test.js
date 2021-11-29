import chai from "chai"
import toString from "../src/toString.js"

const expect = chai.expect

describe("toString", () => {
 it("change a number into a string representation of that number", () =>{
     expect(toString(10)).to.equal("10")
 });
})