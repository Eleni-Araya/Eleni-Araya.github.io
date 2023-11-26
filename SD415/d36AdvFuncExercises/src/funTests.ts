
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myMap(arr:number[], func:Function) {

let result:number[]=[];
for(let i=0;i<arr.length;i++){
    let item=func(arr[i],i,arr)
    result.push(item)
}
return result;

}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myFilter(arr, func) {
//IMPLEMENTATION NEEDED
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
export function myReduce(arr, func, initialValue) {
    //IMPLEMENTATION NEEDED
    return  ;
    }