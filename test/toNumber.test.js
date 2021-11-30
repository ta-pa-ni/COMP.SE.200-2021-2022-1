import chai from "chai"
import toNumber from "../src/toNumber.js"

const expect = chai.expect
/* Equality classess with limit values:
    Accepted:
        Strings with valid numbers 
        - decimal numbers
            * MIN_VALUE
        - negative integers
            * MIN_SAFE_INTEGER
        - positive integers
            * MAX_SAFE_INTEGER
        - zero
       
    Not accepted:
        - Strings that are not valid number representations
        - Too big numbers (MAX_SAFE_INTEGER)
        - Too small numbers (MIN_SAFE_INTEGER)
        - Numbers with too big precision (should round to zero) (MIN_VAL)
    
*/
describe("toNumber", () => {
    describe("basic values", () => {
        it("change a string representation of a positive integer into number", () =>{
            expect(toNumber("10")).to.equal(10)
        });
        it("change a string representation of a negative integer into number", () =>{
            expect(toNumber("-10")).to.equal(-10)
        });
        it("change a string representation of a positive decimal number into number", () =>{
            expect(toNumber("0.10")).to.equal(0.10)
        });
        it("change a string representation of a negative decimal number into number", () =>{
            expect(toNumber("-0.10")).to.equal(-0.10)
        });
        it("change a string representation of zero into number", () =>{
            expect(toNumber("0")).to.equal(0)
        });
    })

    describe("accepted limit values", () => {
        it("change a string representation of MAX_SAFE_INTEGER to a number", () =>{
            expect(toNumber("9007199254740991")).to.equal(Number.MAX_SAFE_INTEGER)
        });
        it("change a string representation of MAX_SAFE_INTEGER-1 to a number", () =>{
            expect(toNumber("9007199254740990")).to.equal(Number.MAX_SAFE_INTEGER-1)
        });
        it("change a string representation of MIN_SAFE_INTEGER to a number", () =>{
            expect(toNumber("-9007199254740991")).to.equal(Number.MIN_SAFE_INTEGER)
        });
        it("change a string representation of MIN_SAFE_INTEGER+1 to a number", () =>{
            expect(toNumber("-9007199254740990")).to.equal(Number.MIN_SAFE_INTEGER+1)
        });
        it("change a string representation of MIN_VALUE to a number", () =>{
            expect(toNumber("0.0000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "00000000000005")).to.equal(Number.MIN_VALUE)
        })

        describe("not accepted limit values", () => {
            it("change a string representation of MAX_SAFE_INTEGER+1 to a number", () =>{
                expect(toNumber("9007199254740992")).to.throw(RangeError)
            });
            it("change a string representation of MIN_SAFE_INTEGER-1 to a number", () =>{
                expect(toNumber("-9007199254740992")).to.throw(RangeError)
            });
            it("change a string representation of less than MIN_VALUE to a number", () =>{
                expect(toNumber("0.0000000000000000000000000000000000000"+
                                "000000000000000000000000000000000000000"+
                                "000000000000000000000000000000000000000"+
                                "000000000000000000000000000000000000000"+
                                "000000000000000000000000000000000000000"+
                                "000000000000000000000000000000000000000"+
                                "000000000000000000000000000000000000000"+
                                "000000000000000000000000000000000000000"+
                                "000000000000005")).to.equal(0)
            });
        })
    })
})