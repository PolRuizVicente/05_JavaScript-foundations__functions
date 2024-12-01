/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */
function formatStringByWordsLength(sentence) {
    const words = sentence.trim().split(/\s+/);
    if (words.length > 5) {
        return sentence.toUpperCase();
    } else {
        return sentence.toLowerCase();
    }
}

export default formatStringByWordsLength;
