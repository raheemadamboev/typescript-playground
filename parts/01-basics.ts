function add(number1: number, number2: number, print: boolean, phase: string) {
  const result = number1 + number2;
  if (print) {
    console.log(phase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 7
const number2 = 13.5;
const printIt = true
const phase = "The result is: "

const result = add(number1, number2, printIt, phase);
console.log(result);
