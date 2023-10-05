// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const input = "a*cdefghijklmnopqrstuvw&yz";
  const alphabet = "$oyqmcgrukswaflnthdjpzibe.";
  // The input could include spaces and letters as well as special characters such as #, $, *, etc.

  // const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    // Edge cases
    // - no alphabet is provided
    // - alphabet.length is not exactly 26
    // - alphabet doesn't include unique characters
    if (
      alphabet === undefined ||
      alphabet.length !== 26 ||
      new Set(alphabet).size !== 26
    ) {
      return false;
    }
    // Capital letters can be ignored.toLowerCase()
    const inputArray = input.toLowerCase().split("");
    let result = "";
    // iterate over input
    for (let i = 0; i < inputArray.length; i++) {
      const char = inputArray[i];
      // Maintain spaces
      if (char === " ") {
        result += " ";
      } else {
        //  if encode=>use input.indexOf else use alphaber indexOf()
        const charIndex = encode ? "abcdefghijklmnopqrstuvwxyz".indexOf(char) : alphabet.indexOf(char);
        // Character not found in the alphabet, maintain as is
        if (charIndex === -1) {
          result += char;
        } else {
          if (encode) {
            // encode the character
            result += alphabet[charIndex];
          } else {
            // When decoding, find the character from the standard alphabet

            result += "abcdefghijklmnopqrstuvwxyz"[charIndex];
          }
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };

