import chai from "chai"
import defaultTo from "../src/defaultTo.js"

const expect = chai.expect

describe("defaultTo", () => {
    describe("setting default values to text fields", () => {
        it("return default value when given undefined", () =>{
            expect(defaultTo(undefined, "")).to.equal("")
        });
        it("return default value when given null", () =>{
            expect(defaultTo(null, "")).to.equal("")
        });
        it("return default value when given NaN", () =>{
            expect(defaultTo(NaN, "")).to.equal("")
        });
    })
    describe("setting values to text fields", () => {
        it("return correct value", () =>{
            expect(defaultTo("correct value", "")).to.equal("correct value")
        });
    })
    describe("setting default values to boolean", () => {
        it("return default value when given undefined", () =>{
            expect(defaultTo(undefined, false)).to.equal(false)
        });
        it("return default value when given null", () =>{
            expect(defaultTo(null, false)).to.equal(false)
        });
        it("return default value when given NaN", () =>{
            expect(defaultTo(NaN, false)).to.equal(false)
        });
    })
    describe("setting values to boolean fields", () => {
        it("return correct value", () =>{
            expect(defaultTo(true, false)).to.equal(true)
        });
    })
    describe("setting default values to number fields", () => {
        it("return default value when given undefined", () =>{
            expect(defaultTo(undefined, 0)).to.equal(0)
        });
        it("return default value when given null", () =>{
            expect(defaultTo(null, 0)).to.equal(0)
        });
        it("return default value when given NaN", () =>{
            expect(defaultTo(NaN, 0)).to.equal(0)
        });
    })
    describe("setting values to number fields", () => {
        it("return correct value", () =>{
            expect(defaultTo(3, 0)).to.equal(3)
        });
    })
})