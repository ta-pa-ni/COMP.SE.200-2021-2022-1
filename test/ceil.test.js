import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect

describe("ceil", () => {
    describe("accepted values", () => {
        it("take a ceil function out of a number 7,4 to 8", () =>{
            expect(ceil(7.4)).to.equal(8)
        });
        it("take a ceil function out of a number -7,4 to -7", () =>{
            expect(ceil(-7.4)).to.equal(-7)
        });
        it("take a ceil function out of a number 3,006 with 2 percision", () =>{
            expect(ceil(3.006, 2)).to.equal(3.01)
        });
        it("take a ceil function out of a number 7 with -1 precision", () =>{
            expect(ceil(7,-1)).to.equal(10)
        });
    })
    describe("not accepted values", () => { 
        it("take a ceil function out of a undefined", () =>{
            expect(() => ceil(undefined)).to.throw(Error)
        });
        it("take a ceil function out of a nothing", () =>{
            expect(() => ceil()).to.throw(Error)
        });
        it("take a ceil function out of a null", () =>{
            expect(() => ceil(null)).to.throw(Error)
        });
        it("take a ceil function out of a text", () =>{
            expect(() => ceil("text")).to.throw(Error)
        });
        it("take a ceil function out of a NaN", () =>{
            expect(() => ceil(NaN)).to.throw(Error)
        });
    })
})