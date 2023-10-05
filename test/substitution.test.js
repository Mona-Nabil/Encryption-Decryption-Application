// Write your tests here!
const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe("substitution", ()=>{
    it("should return false if the substitution alphabet is missing", ()=>{
        const inputMsg = "Hi";
        const actual = substitution(inputMsg);

        expect(actual).to.be.false;
    })
    it("should return false if the substitution alphabet is not exactly 26 characters", ()=>{
        const inputMsg = "Hi";
        const alphabet = "notlongenough"
        const actual = substitution(inputMsg, alphabet);

        expect(actual).to.be.false;
    })
    it("should return false if the substitution alphabet does not contain unique characters", ()=>{
        const inputMsg = "Hi";
        const alphabet = "abcabcabcabcabcabcabcabcyz"
        const actual = substitution(inputMsg, alphabet);

        expect(actual).to.be.false;
    })
    it("should preserve spaces", () => {
        const inputMsg = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(inputMsg, alphabet, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
      });
      
      it("should encode a message by using the given substitution alphabet", () => {
        const inputMsg = "$o";
        const alphabet = "$oyqmcgrukswaflnthdjpzibe.";
        const actual = substitution(inputMsg, alphabet, false);
        const expected = "ab";
      
        expect(actual).to.equal(expected);
      });
      it("should work with any kind of key with unique characters", ()=>{
        const inputMsg = "ab";
        const alphabet = "$oyqmcgrukswaflnthdjpzibe.";
        const actual = substitution(inputMsg, alphabet);
        const expected = "$o";
        expect(actual).to.equal(expected);
      }) 
})