/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
// */
// assume the array type is number
export function copyArray(arr: number[]): number[] {
    return [...arr]
}
export function concat(arr1:number[],arr2:number[]): number[]{
    // return arr1.concat(arr2)
    return [...arr1,...arr2]
}
export function findMin(...arr:number[]):number{
    let min:number=Number.POSITIVE_INFINITY;
    for(let num of arr){
        if(num<min){
            min=num;
        }
    }
    return min;
}
export function findProduct(...arr:number[]):number{
    let product:number;
    return product=arr.reduce((num,arr)=>(num*arr),1);
}


  