/**
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */
function getDistanceMessageFromSumTo100(value) {
    const randomNumber = Math.floor(Math.random() * 101);
    const sum = value + randomNumber;
    if (sum > 100) {
        return `Sum with value ${sum} exceeds in ${sum - 100} from number 100`;
    } else {
        return `Sum with value ${sum} is left in ${100 - sum} from number 100`;
    }
}

export default getDistanceMessageFromSumTo100;
