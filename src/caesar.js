// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
 function caesar(input = "", shift = 0, encode = true) {
    const lookUp = "abcdefghijklmnopqrstuvwxyz"; // Updated to include the entire alphabet
    // cover edge cases
    if (!encode) shift = shift * -1;
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // change all alphabet to lower case
    input = input.toLowerCase();
    // empty string to add to
    let result = "";
    // loop through the string
    for (let i = 0; i < input.length; i++) {
      // cover spaces and special characters cases
      if (!lookUp.includes(input[i])) {
        result += input[i];
      } else {
       // lookup index location
        const lookUpIndex = lookUp.indexOf(input[i]);
       // add to shift
        let shiftedIndex = lookUpIndex + shift;
      // wrap around from end and start
        if (shiftedIndex >= 26) {
          shiftedIndex -= 26;
        } else if (shiftedIndex < 0) {
          shiftedIndex += 26;
        }

        result += lookUp[shiftedIndex];
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
