import chai from "chai"
import toInteger from "../src/toInteger.js"

const expect = chai.expect

describe("toInteger", () => {
 it("change a string representation of an integer into an integer", () =>{
     expect(toInteger("10")).to.equal(10)
 });
})