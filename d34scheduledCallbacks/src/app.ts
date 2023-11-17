

//You can write and run the timer code here via npm run app 
function printNumbers(from:number, to:number) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  // usage:
  printNumbers(5, 10);

  // function printNum(a:number, b:number){
  //   for(let i=a;i<=b;i++){
  //     console.log(i)
  //   }
  // }
  function printNumbersDelay(from: number, to: number): void {
    console.log(`Starting in 3 seconds`);
    
    setTimeout(() => {
      let currentNumber = from;
  
      const intervalId = setInterval(() => {
        console.log(currentNumber);
        if (currentNumber === to) {
          clearInterval(intervalId);
        } else {
          currentNumber++;
        }
      }, 1000);
    }, 3000);
  }
  function printNumber(from:number, to:number) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
  // usage:
  printNumber(5, 10);