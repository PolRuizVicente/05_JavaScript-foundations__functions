/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */
function checkCollectionHasElements(collection) {
    if (!Array.isArray(collection)) {
        return false;
    }
    return collection.length > 0;
}

export default checkCollectionHasElements;
