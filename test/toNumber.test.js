import chai from "chai"
import toNumber from "../src/toNumber.js"

const expect = chai.expect

describe("toNumber", () => {
 it("change a string representation of a number into number", () =>{
     expect(toNumber("10")).to.equal(10)
 });
})