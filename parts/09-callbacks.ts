function addAndHandle(
    number1: number,
    number2: number,
    calback: (result: number) => void
  ) {
    const result = number1 + number2;
    calback(result);
  }
  
  addAndHandle(20, 10, (result) => {
    console.log(`We got the result which is ${result}`);
  })
  