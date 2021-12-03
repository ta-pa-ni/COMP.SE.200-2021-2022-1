import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect

// lisää array, map object, ja jotain. 


describe("isEmpty", () => {
    describe("accepted values", () => {
        it("check if an object is empty", () =>{
            expect(isEmpty({})).to.equal(true)
        });
        it("check if an object is null", () =>{
            expect(isEmpty(null)).to.equal(true)
        });
        it("check if an empty sting is empty", () =>{
            expect(isEmpty("")).to.equal(true)
        });
        it("check if all is gone", () =>{
            expect(isEmpty()).to.equal(true)
        });
    })
    describe("not accepted values", () => {
        it("check if an object is not empty", () =>{
            expect(isEmpty("text")).to.equal(false)
        });
        it("check if an string is not empty", () =>{
            expect(isEmpty(" ")).to.equal(false)
        });
    })
})