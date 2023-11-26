/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

// the following type definition says that SalaryObj has keys of type string and values of type number
type SalaryObj = { [key: string]: number };
// let salaries:SalaryObj={
//     "john":100,
//     "Eleni":200,
//     "Suresh":300
// }


export function topSalary(salaries:SalaryObj) :string{

    let maxSalary:number = 0;
    let maxName:string ="";
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }


 