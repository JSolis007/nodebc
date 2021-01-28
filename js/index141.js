const tripExpenses = [
  400,
  80,
  50,
];

const budget = tripExpenses.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);
console.log(`Total trip budget: ${budget}`);