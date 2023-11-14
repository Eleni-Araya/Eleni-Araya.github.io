
//use this file for any code you want to try out

function compareNumeric(a:number, b:number):number { //need to modify this function
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    return 0;
   }
   let arr = [ 1, 15, 2 ];
   arr.sort(compareNumeric);
   console.log(arr); 



