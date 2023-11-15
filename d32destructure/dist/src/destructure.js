/*
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
// let salaries:SalaryObj={
//     "john":100,
//     "Eleni":200,
//     "Suresh":300
// }
export function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = "";
    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}
