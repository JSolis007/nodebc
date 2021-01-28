const numbers = [];

for (let i = 1000; i >= 1; i--) {
  numbers.push(i);
};

const evenNumbers = numbers.filter(num => { return num % 2 === 0;});
const oddNumbers = numbers.filter(num => { return num % 2 !== 0;});


//show last 10 odd numbers
for (let i = oddNumbers.length - 1; i >= oddNumbers.length - 10; i--) {
  console.log(oddNumbers[i]);
}

//show first 20 even numbers
for (let i = 0; i <= 19; i++) {
  console.log(evenNumbers[i]);
}
