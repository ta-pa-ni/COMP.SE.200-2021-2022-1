import chai from "chai"
import defaultTo from "../src/defaultTo.js"

const expect = chai.expect

describe("defaultTo", () => {
 it("return default value when given undefined", () =>{
     expect(defaultTo(undefined, 10)).to.equal(10)
 });
})