function add(number1: number, number2: number): number {
  return number1 + number2;
}

function printResult(result: number): void {
  console.log(`Result is ${result}`);
}

function doNothing() : undefined {
  return;
}

printResult(add(15, 18));
printResult(doNothing()); // strange accepting undefined