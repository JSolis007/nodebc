const arithmetic = {
  add: (num1, num2) => { (typeof num1 === 'number' && typeof num2 === 'number') ? console.log(num1 + num2) : console.log('Please only enter numbers');},
  subtract: (num1, num2) => { (typeof num1 === 'number' && typeof num2 === 'number') ? console.log(num1 - num2) : console.log('Please only enter numbers');},
  multiply: (num1, num2) => { (typeof num1 === 'number' && typeof num2 === 'number') ? console.log(num1 * num2) : console.log('Please only enter numbers');},
  divide: (num1, num2) => { (typeof num1 === 'number' && typeof num2 === 'number') ? console.log(num1 / num2) : console.log('Please only enter numbers');},
  remainder: (num1, num2) => { (typeof num1 === 'number' && typeof num2 === 'number') ? console.log(num1 % num2) : console.log('Please only enter numbers');}
};

arithmetic.add(2, 10);
arithmetic.subtract(10, 5);
arithmetic.multiply(3, 100);
arithmetic.divide(40, 2);
arithmetic.remainder(20, 2);
arithmetic.add('1', 10);
