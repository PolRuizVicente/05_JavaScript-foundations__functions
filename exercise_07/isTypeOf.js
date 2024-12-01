/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 */
function isTypeOf(value, type) {
    if (type === 'array') {
        return Array.isArray(value);
    }
    return typeof value === type;
}

export default isTypeOf;
