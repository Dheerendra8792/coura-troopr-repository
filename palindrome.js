const text = "madam";

const reversedText = text.split("").reverse().join("");

if (text === reversedText) {
  console.log(`${text} is a palindrome.`);
} else {
  console.log(`${text} is not a palindrome.`);
}
