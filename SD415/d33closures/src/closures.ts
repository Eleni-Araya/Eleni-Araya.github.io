

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
export function inArray(arr: number[]): (num: number) => boolean {
    function filtering(target: number): boolean {
        let found = arr.find((num: number) => num === target)
        return (found === target)
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
export function inBetween(a: number, b: number): (num: number) => boolean {
    function inBetweenCheck(target: number): boolean {
        return (a <= target && target <= b);
    }
    return inBetweenCheck;
}

/**
 * @returns {Function} closure that returns it's number
 */

export function makeArmy(): Function[] {
    const shooters = []
    for (let j = 0; j < 10; j++) {
        function shooterFunction() {
            return j
        }
        shooters.push(shooterFunction)
    }
    return shooters
}


//army[0](); // the shooter number 0 shows 10
//army[5](); // and number 5 also outputs 10...

