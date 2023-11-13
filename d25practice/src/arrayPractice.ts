
export type Person = {
    name: string,
    age: number
}

export function doubleNums(numArray:number[]):number[]{
return numArray.map(num => num * 2);
}

export function doubleAges(peopleArray:Person[]): Person[]{
    return peopleArray.map((person) => ({ ...person, age: person.age * 2 })); 
}

export function filterEven(numArray:number[]): number[]{
    return numArray.filter((num) => num % 2 === 0);

}

export function filterOver10(peopleArray:Person[]): Person[] {
    return peopleArray.filter((person) => person.age > 10);

}

export function findEvenNum(numArray: number[]): number | undefined{
    return numArray.find((num) => num % 2 === 0);
}

export function findEvenAge(peopleArray:Person[]) : Person | undefined{
    return peopleArray.find((person) => person.age % 2 === 0);

}

export function includesEvenNum(numArray: number[], target: number): boolean{
    return numArray.includes(target);
}


export function includesEvenAge(peopleArray: Person[],target: number):boolean{
    return peopleArray.some((person) => person.age > target);
}

// const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
// const peopleArray = [
//   { name: "Sam", age: 15 },
//   { name: "William", age: 6 },
//   { name: "Lucy", age: 13 },
//   { name: "Barney", age: 80 },
// ];



  


  

  

  
 
 
  
 
  
  
 
  
  
  
  

  
  // Testing the functions
 
  
  
