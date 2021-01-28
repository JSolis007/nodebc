const numbers = [];
let result = 0;

for (let i = 1; i <= 1000; i++) {
  numbers.push(i);
  result += i;
  console.log(result);
}

if (result === 500500) {
  console.log('Good job!!!');
}