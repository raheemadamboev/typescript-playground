function add(number1: number, number2: number): number {
    return number1 + number2;
  }
  
  function printResult(result: number): void {
    console.log(`Result is ${result}`);
  }
  
  let some: Function;
  
  some = add;
  console.log(some(15, 7));
  
  some = printResult;
  console.log(some(15, 7));
  
  let other: (a: number, b: number) => number;
  
  other = add;
  console.log(other(7 , 3));
  
  //other = printResult;