const numbers = [];

for (let i = 1; i <= 1000; i++) {
  numbers.push(i);
}

numbers.map((num, index) => {
  console.log(`index: ${index + 1}, original number: ${num}, incremented value: ${num + 10}`);
});