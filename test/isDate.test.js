import chai from "chai"
import isDate from "../src/isDate.js"

const expect = chai.expect

describe("isDate", () => {
 it("check if given value is a valid date object", () =>{
     expect(isDate(new Date)).to.equal(true)
 });
})