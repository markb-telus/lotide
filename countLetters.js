/**
 * Function that compares 2 values for equality and prints out a
 * message telling us if they match or not
 * @param {string|number|boolean} actual - The first item to compare
 * @param {string|number|boolean} expected - The second item to compare
 * @returns {string} Prints message with match outcome
 */
const assertEqual = (actual, expected) => {
  console.log(printAssertEqualResult((actual === expected), actual, expected));
};

/**
 * Function that counts the total instances of a letter in a string
 * @param {string} string - The string containing the characters you
 * wish to countnode
 * @returns {Object} An object with characters as keys, and the total
 * instances of that character in the provided string
 */
const countLetters = (string) => {
  const result = {}; // An object to hold the results
  // Loop through provided string
  loopString:
  for (const character of string) {
    // Don't count spaces
    if (character === ' ') continue loopString;
    // Increment the count of this character in the result object by 1
    // If the character doesn't exist in the result object, create it
    result[character] ? result[character] += 1 : result[character] = 1;
  }
  return result;
};

// assertEqual(countLetters("Apple")["A"], 1);
// assertEqual(countLetters("Apple")["p"], 2);

module.exports = countLetters;