import chai from 'chai'
import capitalize from '../src/capitalize.js'

/*
  Equality classes with limit values

  Accepted:
  capitalize
    - lower case string
    - upper case string
    - mixed string
    - number
    - boolean

    Limit values:
    - empty string
  
  Not accepted:
    - null
    - undefined

*/

const expect = chai.expect
var should = chai.should()

describe("capitalize", () => {

  describe("accepted strings", () => {
    it("capitalize lowercase string", () =>{
        expect(capitalize("this is very low.")).to.equal("This is very low.")
    })
    it("capitalize uppercase string", () =>{
      expect(capitalize("THIS IS BIG!")).to.equal("This is big!")
    })
  })

  describe("accepted limit values", () => {
    it("capitalize lowercase string", () =>{
        expect(capitalize("")).to.equal("")
    })
  })

  describe("Not strings", () => {
    it("capitalize number", () =>{
      expect(capitalize(-0.10)).to.equal("-0.1")
    })
    it("capitalize boolean", () =>{
      expect(capitalize(false)).to.equal("False")
    })
  })

  describe("Not accepted values", () => {
    it("try to capitalize empty", () =>{
      expect(() =>capitalize()).to.throw(SyntaxError)
    })
    it("try to capitalize null", () =>{
      expect(() =>capitalize(null)).to.throw(SyntaxError)
    })
    it("try to capitalize undefined", () =>{
      expect(() =>capitalize(undefined)).to.throw(SyntaxError)
    })
  })
})
