import chai from "chai"
import toString from "../src/toString.js"

const expect = chai.expect

/* Equality classess with limit values:
    Accepted:
        Valid numbers
        - decimal numbers
            * MIN_VALUE
        - negative integers
            * MIN_SAFE_INTEGER
        - positive integers
            * MAX_SAFE_INTEGER
        - zero
        - array
        - object
        - symbol
        - octal number
        - binary number
        - hexal number

       
    Not accepted:
        - No value
    
    Note: There is no need to test every possible limit since it really doesn't matter if
    values beyond and below max safe are changed into strings because string representations 
    of numbers are for showing them only, not for calclulations etc where too big numbers 
    may cause some troubles.
*/

describe("toString", () => {
    describe("basic values", () => {
        it("change a positive integer into its string representation", () =>{
            expect(toString(10)).to.equal("10")
        });
        it("change a negative integer into its string representation", () =>{
            expect(toString(-210)).to.equal("-210")
        });
        it("change a negative decimal number into its string representation", () =>{
            expect(toString(-210.0006)).to.equal("-210.0006")
        });
        it("change a positive decimal number into its string representation", () =>{
            expect(toString(20.0006)).to.equal("20.0006")
        });
        it("change zero into its string representation", () =>{
            expect(toString(0)).to.equal("0")
        });
        it("change an array into its string representation", () =>{
            expect(toString([0,1,2,3,4])).to.equal("0,1,2,3,4")
        });
        it("change an object into its string representation", () =>{
            expect(toString({"jee":"jee"})).to.equal("[object Object]")
        });
        it("change a symbol into its string representation", () =>{
            expect(toString(Symbol())).to.equal("Symbol()")
        });
        it("change a hexal number into its string representation", () =>{
            expect(toString(0x010)).to.equal("16")
        });
        it("change a binary number into its string representation", () =>{
            expect(toString(0b010)).to.equal("2")
        });
        it("change an octal number into its string representation", () =>{
            expect(toString(0o010)).to.equal("8")
        });
    })

    describe("accepted limit values", () => {
        it("change MAX_SAFE_INTEGER into its string representation", () =>{
            expect(toString(Number.MAX_SAFE_INTEGER)).to.equal("9007199254740991")
        });
        it("change MIN_SAFE_INTEGER into its string representation", () =>{
            expect(toString(Number.MIN_SAFE_INTEGER)).to.equal("-9007199254740991")
        });
        it("change MIN_VALUE into its string representation", () =>{
            expect(toString(Number.MIN_VALUE)).to.equal("5e-324")
        });
    })

    describe("not accepted values", () => {
        it("change nothing into string", () =>{
            expect(toString()).to.equal("undefined")
        });
    })
})