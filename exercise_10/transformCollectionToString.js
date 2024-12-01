/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */
function transformCollectionToString(collection) {
    if (!Array.isArray(collection) || collection.length === 0) {
        return '';
    }
    return collection.join(' | ');
}

export default transformCollectionToString;
