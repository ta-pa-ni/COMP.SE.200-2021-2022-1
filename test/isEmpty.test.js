import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect

describe("isEmpty", () => {
 it("check if an object is empty", () =>{
     expect(isEmpty({})).to.equal(true)
 });
 it("check if an object is empty", () =>{
    expect(isEmpty("text")).to.equal(false)
});
})