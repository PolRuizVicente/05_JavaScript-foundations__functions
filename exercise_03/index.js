const getDistanceFromThreshold = require('..exercise_01/getDistanceFromThreshold');
const getTotalWordsFromString = require('..exercise_02/getTotalWordsFromString');
const generateRandomNumberInRange = require('./generateRandomNumberInRange');

const distance = getDistanceFromThreshold(10, 5);
console.log(`Distance from threshold: ${distance}`);

const totalWords = getTotalWordsFromString('Hello world, this is a test string.');
console.log(`Total words in string: ${totalWords}`);

const randomNumber = generateRandomNumberInRange(100);
console.log(`Random number in range: ${randomNumber}`);
