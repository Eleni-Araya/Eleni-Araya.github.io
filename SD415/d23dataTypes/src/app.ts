
/**
 * 
 * @param {*} str 
 */
export function ucFirst(str:string):string {
  if (str === "" || str[0] === str[0].toUpperCase()) {
    return "";
  }
  else {
    return str[0].toUpperCase() + str.slice(1);
  }
}
  /**
   * 
   * @param {*} str 
   */
  export  function checkSpam(str:string):boolean {
    let lowerStr = str.toLowerCase();
    if(lowerStr.includes('viagra') || lowerStr.includes('xxx')){
      return true;
    }

    return false ;
    
 
  }

/**
 * 
 * @param {*} str 
 * @param {*} maxlength 
 */
export   function truncate(str:string, maxlength:number):string {

  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0, maxlength - 1) + "…";
}

  

  export function extractCurrencyValue(currency:string):number{
    return  +currency.slice(1);
  } 

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr:number[]):number {
  if (arr.length === 0) {
    return 0;
}

let maxSum: number = 0;
let currentSum: number = 0;

for (const num of arr) {
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
}

return maxSum;
}

export function camelize(str:string):string {
    let words = str.split("-");
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join("");
  }

  
// Sum numbers from the visitor
// function promptUser(message: string): number {
//   return parseFloat(prompt(message) || "0");
// }
// const num1 = promptUser("Enter the first number:");
// const num2 = promptUser("Enter the second number:");
// const sum = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

type Person = {
  name: string;
  age: number;
  job: string;
  sayHi(this: Person): void;
  }
 const manager: Person = {
  name: "John",
  age: 27,
  job: "Software Engineer",
  sayHi: sayHowdy
  };
  const intern: Person= {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern",
  sayHi: sayHowdy
  };
 
 function sayHowdy(this: Person) {
 console.log("Hello, my name is ", this.name,"I am ",this.age,"my job is ",this.job);
}
manager.sayHi();
intern.sayHi();