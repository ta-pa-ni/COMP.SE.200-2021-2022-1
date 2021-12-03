import chai from "chai"
import isDate from "../src/isDate.js"

const expect = chai.expect

/* Equality classess, no limit values because this is boolean (accepted/not accepted):

    Date objects:
        New Date-object
        New Date object with valid date as a parameter
       
    Not valid date objects:
        New Date-object with invalid date as a parameter
        string
            * string representation of date-object
        number
            * int, zero, decimal
        booolean
        null
        empty

*/

describe("isDate", () => {
    describe("date objects", () => {
        it("check that new Date-object is a valid date", () =>{
            expect(isDate(new Date)).to.equal(true)
        })
        it("check that new Date-object with valid date as a parameter is a valid date", () =>{
            expect(isDate(new Date("11.11.21"))).to.equal(true)
        })
        
    })

    describe("not valid date objects", () => {
        it("check if a date object with invalid date is a valid date object", () =>{
            expect(isDate(new Date("13.13.21"))).to.equal(false)
         })
        it("check if a string with valid date is a valid date object", () =>{
            expect(isDate("11.11.21")).to.equal(false)
         })
         it("check if a string representation of a date-object is a valid date object", () =>{
            expect(isDate("Fri Dec 03 2021 12:58:21 GMT+0200 (Itä-Euroopan normaaliaika)")).to.equal(false)
         })
         it("check if an integer is a valid date object", () =>{
            expect(isDate(1)).to.equal(false)
         })
         it("check if zero is a valid date object", () =>{
            expect(isDate(0)).to.equal(false)
         })
         it("check if a decimal number is a valid date object", () =>{
            expect(isDate(0.00067)).to.equal(false)
         })
         it("check if negative integer is a valid date object", () =>{
            expect(isDate(-666)).to.equal(false)
         })
         it("check if null is a valid date object", () =>{
            expect(isDate(null)).to.equal(false)
         })
         it("check if boolean value is a valid date object", () =>{
            expect(isDate(true)).to.equal(false)
         })
         it("check if an empty value is a valid date object", () =>{
            expect(isDate(true)).to.equal(false)
         })
         
    })
})