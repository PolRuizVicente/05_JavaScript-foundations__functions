/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */
function generateRandomNumberInRange(limit) {
    if (typeof limit !== 'number' || limit <= 0) {
        return 0;
    }
    return Math.round(Math.random() * limit);
}

export default generateRandomNumberInRange;
