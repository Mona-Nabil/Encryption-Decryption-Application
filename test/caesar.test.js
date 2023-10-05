// Write your tests here!
const { expect } = require("chai")
const { caesar } = require("../src/caesar")

describe("caesar", ()=>{
    // "should return false if the shift amount is 0"
    it("should return false if the shift amount is 0", ()=>{
        // caesar("thinkful"); //> false
        const inputMesg = "z"
        const shift = 0
        const actual = caesar(inputMesg, shift)
        expect(actual).to.be.false

    })
    it("should return false if the shift amount is less than -25", ()=>{
        const inputMesg = "z"
        const shift = -26
        const actual = caesar(inputMesg, shift)
        expect(actual).to.be.false
    })
    it("should return false if the shift amount is greater than 25", ()=>{
        const inputMesg = "z"
        const shift = 26
        const actual = caesar(inputMesg, shift)
        expect(actual).to.be.false
    })
    it("should encode a message by shifting the letters", ()=>{
        const inputMesg = "a"
        const shift = 3
        const actual = caesar(inputMesg, shift)
        const expected = "d"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", ()=>{
        const inputMesg = "A Message"
        const shift = 3
        const actual = caesar(inputMesg, shift)
        const expected = "d phvvdjh"
        expect(actual).to.equal(expected)
    })
    it("should decode a message by shifting the letters in the opposite direction", ()=>{
        const inputMesg = "z"
        const shift = 3
        const actual = caesar(inputMesg, shift,false)
        const expected = "w"
        expect(actual).to.equal(expected)
    })
    it("should allow for a negative shift that will shift to the left", ()=>{
        const inputMesg = "a"
        const shift = -3
        const actual = caesar(inputMesg, shift,false)
        const expected = "d"
        expect(actual).to.equal(expected)
    })
    it("should leaves spaces and other symbols as is", ()=>{
        const inputMesg = "This is a secret message!"
        const shift = 8
        const actual = caesar(inputMesg, shift)
        const expected = 'bpqa qa i amkzmb umaaiom!'
        expect(actual).to.equal(expected)
    })
})



