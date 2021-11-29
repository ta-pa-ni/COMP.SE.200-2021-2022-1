import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("add", () => {
 it("add a positive number to a positive number", () =>{
     expect(add(3,6)).to.equal(9)
 });
})