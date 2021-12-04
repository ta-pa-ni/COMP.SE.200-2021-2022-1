import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect

/*
    Equality classes with limit values
    Accepted:
        First parameter
            - An array of  
                * strings
                * numbers
                * chars
                * booleans
                * objects
                * arrays
            - String (is basically an array of chars)
        Second parameter:
            - predicate
                * function

    ACCEPTED LIMIT VALUES:
        - Empty array
        - Empty function
        - Both

    Not accepted:
        First parameter
            - number
            - null
            - undefined
            - NaN
    
*/

describe("filter", () => {
    describe("accepted values", () => {
        it("filter an array of integers with greater than two -function", () =>{
            expect(filter([1,2,3], (item) => {return item > 2})).to.deep.equal([3])
        })
        it("filter an array of different kinds of numbers with greater than 0.4 -function", () =>{
            expect(filter([1,-666, 69.69, 0, 0.0000777], (item) => {return item > 0.4})).
            to.deep.equal([1, 69.69])
        })
        it("filter an array of strings with greater than b -function", () =>{
            expect(filter(["allan","betty","cecilia"], (item) => {return item > "b"})).
            to.deep.equal(["betty", "cecilia"])
        })
        it("filter an array of chars with greater than b -function", () =>{
            expect(filter(["a","b","c"], (item) => {return item > "b"})).
            to.deep.equal(["c"])
        })
        it("filter an array of arrays with greater than c -function", () =>{
            expect(filter([["a"],["b","c"],["d", "e", "f"]], (item) => {return item > "c"})).
            to.deep.equal([["d", "e", "f"]])
        })
        it("filter an array of objects with function that compares items value to 2 and returns it if its greater", () =>{
            expect(filter([{value: 1},{value: 2},{value: 3}], (item) => {return item.value > 2})).
            to.deep.equal([{value: 3}])
        })
        it("filter a string with greater than b -function", () =>{
            expect(filter("abcd", (item) => {return item > "b"})).
            to.deep.equal(["c","d"])
        })
    })

    describe("accepted limit values", () => {
        it("filter an empty array with greater than two -function", () =>{
            expect(filter([], (item) => {return item > 2})).to.deep.equal([[]])
        })
        it("filter an array of integers with an empty function", () =>{
            expect(filter([1,2,3], () => {})).to.deep.equal([[]])
        })
        it("filter an empty array with an empty function", () =>{
            expect(filter([], () => {})).to.deep.equal([[]])
        })
    })

    describe("not accepted values", () => {
        it("try to filter an integer with greater than two -function", () =>{
            expect(() => {filter(1, (item) => {return item > 2})}).to.throw(TypeError)
        })
        it("try to filter null with greater than two -function", () =>{
            expect(() => filter(null, (item) => {return item > 2})).to.throw(TypeError)
        })
        it("try to filter undefined with greater than two -function", () =>{
            expect(() => filter(undefined, (item) => {return item > 2})).to.throw(TypeError)
        })
        it("try to filter NaN with greater than two -function", () =>{
            expect(() => filter(NaN, (item) => {return item > 2})).to.throw(TypeError)
        })
    })
})