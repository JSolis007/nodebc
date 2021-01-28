let firstPerson = [];
let secondPerson = [];

firstPerson = ['Homer', 'Simpson', '100 Springfield drive', 45];
secondPerson = ['Ned', 'Flanders', '102 Springfield drive', 41];

const firstReduced  = firstPerson.reduce((accumulator, currentValue) => accumulator + currentValue);
const secondReduced  = secondPerson.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(`Original: ${firstPerson}\nReduced version: ${firstReduced}\n`);
console.log(`Original: ${secondPerson}\nReduced version: ${secondReduced}`);