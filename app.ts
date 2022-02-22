function add(number1: number, number2: number, print: boolean) {
  const result = number1 + number2;
  if (print) {
    console.log(result);
  } else {
    return result;
  }
}

const number1 = 7;
const number2 = 13.5;
const printIt = true

const result = add(number1, number2, printIt);
console.log(result);
