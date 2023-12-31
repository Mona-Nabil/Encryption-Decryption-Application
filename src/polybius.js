// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const matrix = {
  a: 11,
  b: 21,
  c: 31,
  d: 41,
  e: 51,
  f: 12,
  g: 22,
  h: 32,
  i: 42,
  j: 42,
  k: 52,
  l: 13,
  m: 23,
  n: 33,
  o: 43,
  p: 53,
  q: 14,
  r: 24,
  s: 34,
  t: 44,
  u: 54,
  v: 15,
  w: 25,
  x: 35,
  y: 45,
  z: 55,
};

const reverseMatrix = {
  11: "a",
  21: "b",
  31: "c",
  41: "d",
  51: "e",
  12: "f",
  22: "g",
  32: "h",
  42: "(i/j)",
  52: "k",
  13: "l",
  23: "m",
  33: "n",
  43: "o",
  53: "p",
  14: "q",
  24: "r",
  34: "s",
  44: "t",
  54: "u",
  15: "v",
  25: "w",
  35: "x",
  45: "y",
  55: "z",
};

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    // Capital letters can be ignored. +
    // We need to encode when encode == true
    let result = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const char = input[i].toLowerCase();

        if (matrix[char] === undefined) {
          result += " ";
        } else {
          result += matrix[char];
        }
      }
      return result;
    } else {
      // When decoding the string should be even excluding spaces
      const inputWithoutSpaces = input.replace(/\s/g, "");

      // console.log(inputWithoutSpaces);
      // console.log(input);
      if (inputWithoutSpaces.length % 2 === 1) return false;

      const inputArrayWithoutSpaces = input.split(" ");
      // console.log(inputArrayWithoutSpaces);

      const wordNums = inputArrayWithoutSpaces.map((word) => {
        let wordString = "";
        for (let i = 0; i < word.length; i += 2) {
          const firstNumber = word[i];
          const secondNumber = word[i + 1];
          // const secondNumber = input[i + 1];

          // console.log(`${firstNumber}${secondNumber}`)
          wordString += reverseMatrix[`${firstNumber}${secondNumber}`];
        }
        return wordString;
      });

      // console.log(wordNums);
      let fullWordString = wordNums.join(" ");
      return fullWordString;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
