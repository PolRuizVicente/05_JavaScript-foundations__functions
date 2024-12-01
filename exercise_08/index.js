const getDistanceFromThreshold = require('..exercise_01/getDistanceFromThreshold');
const getTotalWordsFromString = require('..exercise_02/getTotalWordsFromString');
const generateRandomNumberInRange = require('..exercise_03/generateRandomNumberInRange');
const isAdditionGreaterThanFifty = require('..exercise_04/isAdditionGreaterThanFifty');
const isGreaterThan = require('..exercise_05/isGreaterThan');
const checkCollectionHasElements = require('..exercise_06/checkCollectionHasElements');
const isTypeOf = require('..exercise_07/isTypeOf');
const formatStringByWordsLength = require('./formatStringByWordsLength');

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

const hasElements = checkCollectionHasElements([1, 2, 3]);
console.log(`Does the collection have elements: ${hasElements}`);

const isString = isTypeOf('Hello', 'string');
console.log(`Is 'Hello' a string: ${isString}`);

const isArray = isTypeOf([1, 2, 3], 'array');
console.log(`Is [1, 2, 3] an array: ${isArray}`);

const formattedString1 = formatStringByWordsLength('Esto es una larga larga.');
console.log(`Formatted string: ${formattedString1}`);

const formattedString2 = formatStringByWordsLength('Esto es una corta');
console.log(`Formatted string: ${formattedString2}`);
