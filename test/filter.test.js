import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect

describe("filter", () => {
 it("return an array that contains numbers greater than two", () =>{
     expect(filter([1,2,3], (item) => {return item > 2})).to.deep.equal([3])
 });
})