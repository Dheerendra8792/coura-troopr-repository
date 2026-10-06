const number = 5;
let factorial = 1;

for (let currentNumber = 2; currentNumber <= number; currentNumber++) {
  factorial *= currentNumber;
}

console.log(`Factorial of ${number} is ${factorial}.`);
