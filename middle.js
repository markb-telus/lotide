/**
 * Function that compares 2 arrays for equality and prints out a
 * message telling us if they match or not
 * @param {Array<string|number|boolean>} array1 - The first array to compare
 * @param {Array<string|number|boolean>} array2 - The second array to compare
 * @returns {boolean} The result of the evaluation
 */
const assertArraysEqual = (array1, array2) => {
  return console.log(printAssertEqualResult(eqArrays(array1, array2), array1, array2));
};

/**
 * Function that compares 2 arrays for equality and returns the result
 * @param {Array<string|number|boolean>} array1 - The first array to compare
 * @param {Array<string|number|boolean>} array2 - The second array to compare
 * @returns {boolean} The result of the evaluation
 */
const eqArrays = (array1, array2) => {
  // If the items being asserted are arrays...
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  // Ensure length of the arrays are as array2
  if (array1.length !== array2.length) return false;
  // Evaluate each element for equality
  for (let element = 0; element < array2.length; element++) {
    // Evaluate element type equality
    if (array1[element] !== array2[element]) return false;
  }
  // No tests remain, so we have equality
  return true;
};

const printAssertEqualResult = (hasEquality, actual, expected) => {

  // Color settings
  const color = {
    reset: '\x1b[0m', // Reset colors
    messageSuccess: '\x1b[32m', // Green
    messageFailure: '\x1b[33m', // Yellow
    labelResult: '\x1b[36m', // Blue
    labelExpected: '\x1b[36m', // Blue
  };
  
  // Message configuration
  const message = {
    before: '\n',
    success: color.messageSuccess + `TEST PASSED🥳🥳🥳\n` + color.reset,
    failure: color.messageFailure + `TEST FAILED💥💥💥\n` + color.reset,
    result: color.labelResult + `result:\n` + color.reset + `${actual}\n`,
    expected: color.labelExpected + `expected:\n` + color.reset + `${expected}\n`,
    after: `\n----------`,
    buildMessage: function() {
      let message = '';
      message += this.before;
      message += hasEquality ? this.success : this.failure;
      message += this.result;
      message += this.expected;
      message += this.after;
      return message;
    }
  };

  // Build the message to show the user
  return message.buildMessage();
};


/**
 * Function that evaluates a number as even
 * @param {number} number - The number to evaluate as even
 * @returns {boolean} The outcome of the evaluation
 */
const isEven = number => {
  if (number <= 0) {
    return number === 0 ? true : false;
  } else {
    return isEven(number - 2);
  }
};

/**
 * Function that returns the middel elemet(s) from an array, or undefined
 * if the array was empty
 * @param {Array} array - An array containing three or more elements
 * @returns {*|undefined} The first element from the array, or undefined
 */
const middle = (array) => {
  // We can only get middle from arrays with at least 3 elements
  if (!Array.isArray(array) || array.length < 3) return [];
  let middle = []; // To store the result
  // Get the item at the middle index
  middle.push(Math.ceil(array.length / 2));
  // Return two elements for arrays with even number of elements
  if (isEven(array.length)) {
    middle.push(Math.ceil((array.length + 1) / 2));
  }
  // Return the result
  return middle;
};

// Test cases:
// Edge tests
assertArraysEqual(middle([1]), []); // True
assertArraysEqual(middle([1, 2]), []); // True

// Return single element for arrays with odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]); // True
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // True

// Return two elements for arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // True
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // True