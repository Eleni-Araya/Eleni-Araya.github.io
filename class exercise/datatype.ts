/*
Slice is cool!
lice is cool!
ice is cool!
ce is cool!
e is cool!
is cool!
is cool!
s cool!
cool!
cool!
ool
!
ol
!
l!!*/
function compareNumeric(a:number, b:number):number { //need to modify this function
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    return 0;
   }
   let arr = [ 1, 15, 2 ];
   arr.sort(compareNumeric);
   console.log(arr); 