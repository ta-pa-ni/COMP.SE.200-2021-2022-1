import chai from "chai"
import toInteger from "../src/toInteger.js"

const expect = chai.expect

/* Equality classess with limit values:
    Accepted:
        -Strings with valid numbers 
        - positive / negative integers
        - decimal numbers
        - zero
        - hex / bin / oct numbers
        - Symbols
        - No value at all (shold be 0)

       
    Not accepted:
        - Strings that are not valid number representations   
        - Too big numbers (MAX_SAFE_INTEGER)
        - Too small numbers (MIN_SAFE_INTEGER)
        - Numbers with too big precision (should round to zero) (MIN_VAL)
        
    
*/

describe("toInteger", () => {
    describe("basic values", () => {
        it("change a string representation of a positive integer into integer", () =>{
            expect(toInteger("10")).to.equal(10)
        });
        it("change a string representation of a negative integer into integer", () =>{
            expect(toInteger("-10")).to.equal(-10)
        });
        it("change a string representation of a positive decimal number into integer", () =>{
            expect(toInteger("0.10")).to.equal(0)
        });
        it("change a string representation of a negative decimal number into integer", () =>{
            expect(toInteger("-0.10")).to.equal(0)
        });
        it("change a string representation of zero into integer", () =>{
            expect(toInteger("0")).to.equal(0)
        });
        it("change an empty string to an integer (0)", () =>{
            expect(toInteger("")).to.equal(0)
        });
        it("change a boolean value to an integer", () =>{
            expect(toInteger(true)).to.equal(1)
        });
        it("change a number to an integer", () =>{
            expect(toInteger(1.1)).to.equal(1)
        });
        it("change an octal number to an integer", () =>{
            expect(toInteger(0o010)).to.equal(8)
        });
        it("change a binary number to an integer", () =>{
            expect(toInteger(0b010)).to.equal(2)
        });
        it("change a hexal number to an integer", () =>{
            expect(toInteger(0x010)).to.equal(16)
        });
        it("change symbol to an integer", () =>{
            expect(toInteger(Symbol())).to.equal(0)
        });
        it("change no value at all to an integer", () =>{
            expect(toInteger()).to.equal(0)
        });
        
    })

    describe("accepted limit values", () => {
        it("change a string representation of MAX_SAFE_INTEGER to an integer", () =>{
            expect(toInteger("9007199254740991")).to.equal(Number.MAX_SAFE_INTEGER)
        });
        it("change a string representation of MAX_SAFE_INTEGER-1 to an integer", () =>{
            expect(toInteger("9007199254740990")).to.equal(Number.MAX_SAFE_INTEGER-1)
        });
        it("change a string representation of MIN_SAFE_INTEGER to an integer", () =>{
            expect(toInteger("-9007199254740991")).to.equal(Number.MIN_SAFE_INTEGER)
        });
        it("change a string representation of MIN_SAFE_INTEGER+1 to an integer", () =>{
            expect(toInteger("-9007199254740990")).to.equal(Number.MIN_SAFE_INTEGER+1)
        });
        it("change a string representation of MIN_VALUE to a integer", () =>{
            expect(toInteger("0.0000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "000000000000000000000000000000000000000"+
                            "00000000000005")).to.equal(0)
        })

    })
    
    describe("not accepted limit values", () => {
        it("change a string representation of MAX_SAFE_INTEGER+1 to an integer", () =>{
            expect(() => toInteger("9007199254740992")).to.throw(RangeError)
        });
        it("change a string representation of MIN_SAFE_INTEGER-1 to an integer", () =>{
            expect(() => toInteger("-9007199254740992")).to.throw(RangeError)
        });
        it("change a string representation of less than MIN_VALUE to an integer", () =>{
            expect(toInteger("0.0000000000000000000000000000000000000"+
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

    describe("not accepted values", () => {
        it("change a string with no numbers to an integer", () =>{
            expect(()=>toInteger("tässäpä ei ole laisinkaan numeroita!")).to.throw(TypeError)
        });
        
    })
    
})