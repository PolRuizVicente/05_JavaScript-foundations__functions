//import and execute
const getDistanceFromThreshold = require('..exercise_01/getDistanceFromThreshold');
const getTotalWordsFromString = require('..exercise_02/getTotalWordsFromString');
const generateRandomNumberInRange = require('..exercise_03/generateRandomNumberInRange');
const isAdditionGreaterThanFifty = require('..exercise_04/isAdditionGreaterThanFifty');
const isGreaterThan = require('./isGreaterThan');

// Example usage
const distance = getDistanceFromThreshold(10, 5);
console.log(`Distance from threshold: ${distance}`);

const totalWords = getTotalWordsFromString('Hello world, test 1.');
console.log(`Total words in string: ${totalWords}`);

const randomNumber = generateRandomNumberInRange(100);
console.log(`Random number in range: ${randomNumber}`);

const isGreaterThanFifty = isAdditionGreaterThanFifty(30, 25);
console.log(`Is addition greater than fifty: ${isGreaterThanFifty}`);

const isGreater = isGreaterThan(10, 5);
console.log(`Is 10 greater than 5: ${isGreater}`);
