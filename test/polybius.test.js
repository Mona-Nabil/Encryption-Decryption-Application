// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should translate 42 to both 'i' and 'j'", () => {
    const inputMsg = "42";
    const actual = polybius(inputMsg, false);

    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });
  it("should translate both 'i' and 'j' to 42", () => {
    const inputMsg = "ji";
    const actual = polybius(inputMsg);
    const expected = "4242";

    expect(actual).to.equal(expected);
  });
  it("should leave spaces as is", () => {
    const inputMsg = "h i";
    const actual = polybius(inputMsg);
    const expected = "32 42";

    expect(actual).to.equal(expected);
  });
  it("should decode a message by translating each pair into a letter", () => {
    const inputMsg = "2351";
    const actual = polybius(inputMsg, false);
    const expected = "me";

    expect(actual).to.equal(expected);
  });
  it("should return false if the length of all numbers is odd", () => {
    const inputMsg = "231";
    const actual = polybius(inputMsg, false);
    const expected = false;

    expect(actual).to.equal(expected);
  });
  it("should encode a message by translating each letter to number pairs", () => {
    const inputMsg = "ac";
    const actual = polybius(inputMsg);
    const expected = "1131";

    expect(actual).to.equal(expected);
  });
  it("should leave spaces as is", () => {
    const inputMsg = "45 25";
    const actual = polybius(inputMsg, false);
    const expected = "y w";

    expect(actual).to.equal(expected);
  });
});
