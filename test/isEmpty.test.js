import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect

// check null tyhjä merkkijono   


describe("isEmpty", () => {
 it("check if an object is empty", () =>{
     expect(isEmpty({})).to.equal(true)
 });
 it("check if an object is not empty", () =>{
    expect(isEmpty("text")).to.equal(false)
});
it("check if an object is null", () =>{
    expect(isEmpty(null)).to.equal(true)
});
})