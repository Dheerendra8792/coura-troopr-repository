const terms = 10;
const sequence = [];

let firstNumber = 0;
let secondNumber = 1;

for (let index = 0; index < terms; index++) {
  sequence.push(firstNumber);

  const nextNumber = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = nextNumber;
}

console.log(sequence);
