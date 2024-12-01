/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */
function getTotalWordsFromString(sentence) {
    if (typeof sentence !== 'string') {
        return 0;
    }
    const words = sentence.trim().split(/\s+/);
    return words.length;
}

export default getTotalWordsFromString;
