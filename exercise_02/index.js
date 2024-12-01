const getDistanceFromThreshold = require('../exercise_01/getDistanceFromThreshold');
const getTotalWordsFromString = require('./getTotalWordsFromString');

const distance = getDistanceFromThreshold(10, 5);
console.log(`Distance from threshold: ${distance}`);

const totalWords = getTotalWordsFromString('Hello world, test 1.');
console.log(`Total words in string: ${totalWords}`);
