/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
export function map2fullName(users) {
    let result = [];
    // FURTHER IMPLEMENTATION REQUIRED HERE
    // let john = { name: "John", surname: "Smith", id: 1 };
    // let pete = { name: "Pete", surname: "Hunt", id: 2 };
    // let mary = { name: "Mary", surname: "Key", id: 3 };
    // users = [john, pete, mary];
    result = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));
    return result;
}
