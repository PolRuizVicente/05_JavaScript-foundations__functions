const getDistanceFromThreshold = require('..exercise_01/getDistanceFromThreshold');
const getTotalWordsFromString = require('..exercise_02/getTotalWordsFromString');
const generateRandomNumberInRange = require('..exercise_03/generateRandomNumberInRange');
const isGreaterThan = require('./isGreaterThan');

const distance = getDistanceFromThreshold(10, 5);
console.log(`Distance from threshold: ${distance}`);

const totalWords = getTotalWordsFromString('Hello world, test 1');
console.log(`Total words in string: ${totalWords}`);

const randomNumber = generateRandomNumberInRange(100);
console.log(`Random number in range: ${randomNumber}`);

const isGreater = isGreaterThan(10, 5);
console.log(`Is 10 greater than 5: ${isGreater}`);
