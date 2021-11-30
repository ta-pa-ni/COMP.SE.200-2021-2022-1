import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

/* Equality classess with limit values:
    Accepted:
    - Positive numbers
        * Max val (Number.MAX_SAFE_INTEGER)
        * zero
    - Negative numbers
        * min val (Number.MIN_SAFE_INTEGER)
        * minus zero
    - Decimals
        * Max precision / value closest to zero
    
    Not accepted:
    - Wrong type (array/object/string/char)
    - Bigger than max val
    - Smaller than min val
    - Bigger precicion than allowed (don't know how to get this)
    - One/both of the parameters are missing
*/
describe("add", () => {
    describe("basic values", () => {
        it("add a positive integer to a positive integer", () =>{
            expect(add(13,6)).to.equal(19)
        });
        it("add a negative integer to a positive integer", () =>{
            expect(add(3,-2)).to.equal(1)
        });
        it("add a negative integer to a negative integer", () =>{
            expect(add(-3,-20)).to.equal(-23)
        });
        it("add a zero to a negative integer", () =>{
            expect(add(-20,0)).to.equal(-20)
        });
        it("add a positive integer to zero", () =>{
            expect(add(0,6)).to.equal(6)
        });
        it("add zero to negative zero", () =>{
            expect(add(0,-0)).to.equal(0)
        });
        it("add a negative integer to a negative decimal number", () =>{
            expect(add(-0.3,-20)).to.equal(-20.3)
        });
        it("add a positive decimal number to a negative integer", () =>{
            expect(add(-3,0.004)).to.equal(-2.996)
        });
        it("add a positive decimal number to a negative decimal number", () =>{
            expect(add(-0.3,0.004)).to.equal(-0.296)
        });
    })

    describe("accepted limit values", () => {
        it("add -1 to max value (MAX_SAFE_INTEGER)", () =>{
            expect(add(Number.MAX_SAFE_INTEGER,-1)).to.equal(Number.MAX_SAFE_INTEGER - 1)
        });
        it("add 1 to max value -1 (MAX_SAFE_INTEGER)", () =>{
           expect(add((Number.MAX_SAFE_INTEGER-1),1)).to.equal(Number.MAX_SAFE_INTEGER)
        });
        it("add 1 to min negative value (MIN_SAFE_INTEGER)", () =>{
           expect(add(Number.MIN_SAFE_INTEGER,1)).to.equal(Number.MIN_SAFE_INTEGER+1)
        });
        it("add -1 to min negative value +1 (MIN_SAFE_INTEGER)", () =>{
            expect(add((Number.MIN_SAFE_INTEGER+1),-1)).to.equal(Number.MIN_SAFE_INTEGER)
        });
        it("add zero to a value closest to zero (MIN_VALUE)", () =>{
            expect(add((Number.MIN_VALUE),0)).to.equal(Number.MIN_VALUE)
        });
    })

    describe("not accepted limit values", () => {
        it("add +1 to max value", () => {
            expect(() => add(Number.MAX_SAFE_INTEGER, 1)).to.throw(RangeError)
        })
        it("add -1 to min negative value", () => {
            expect(() => add(Number.MIN_SAFE_INTEGER, -1)).to.throw(RangeError)
        })
    })

    describe("not accepted values", () => {
        it("add a string to a positive integer", () => {
            expect(() => add(100, "sata")).to.throw(TypeError)
        })
        it("add a negative integer to an array", () => {
            expect(() => add([], -100)).to.throw(TypeError)
        })
        it("add a char to an array", () => {
            expect(() => add([], 'A')).to.throw(TypeError)
        })
        it("no parameters"), () => {
            expect(() => add()).to.throw(TypeError)
        }
        it("missing second parameter"), () => {
            expect(() => add(1)).to.throw(TypeError)
        }
        
    })
})

