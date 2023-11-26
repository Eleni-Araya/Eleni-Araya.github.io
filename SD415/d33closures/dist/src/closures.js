/**
 *
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 *
 */
export function inArray(arr) {
    function filtering(target) {
        let found = arr.find((num) => num === target);
        return (found === target);
    }
    return filtering;
}
/**
 *
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 *
 */
export function inBetween(a, b) {
    function inBetweenCheck(target) {
        return (a <= target && target <= b);
    }
    return inBetweenCheck;
}
/**
 * @returns {Function} closure that returns it's number
 */
export function makeArmy() {
    const shooters = [];
    for (let j = 0; j < 6; j++) {
        shooters.push(function () {
            return j;
        });
    }
    return shooters;
}
//army[0](); // the shooter number 0 shows 10
//army[5](); // and number 5 also outputs 10...
