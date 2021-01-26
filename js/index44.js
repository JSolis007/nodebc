let text = "HELLO";
let result;
let firstChar = text.charAt(0);
let secondChar = text.charAt(1);
let thirdChar = text.charAt(2);
let fourthChar = text.charAt(3);
let fifthChar = text.charAt(4);
result = fifthChar.concat(fourthChar, thirdChar, secondChar);

console.log(`the final result is: ${result.toLowerCase()}`);