let text = 'game of thrones';
let firstChar = text.charAt(0);
let secondChar = text.charAt(5);
let thirdChar = text.charAt(8);
let result = firstChar.concat(secondChar, thirdChar);
result = result.toUpperCase();

console.log(`the final result is: ${result}`);

//Using an invalid index(outside of range) with charAt will return an empty string
console.log(typeof text.charAt(1000));