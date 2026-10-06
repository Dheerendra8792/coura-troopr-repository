const number = 29;
let isPrime = true;

if (number < 2) {
  isPrime = false;
} else {
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(
  isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`
);
