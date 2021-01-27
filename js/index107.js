function biggerNumber(firstNumber, secondNumber) {
  if (typeof firstNumber !== 'number' && typeof secondNumber !== 'number') {
    console.log('Error: Please only input numbers');
  } else if (firstNumber > secondNumber) {
    console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
  } else if (secondNumber > firstNumber) {
    console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);
  } else {
    console.log(`Both numbers are ${firstNumber}`);
  }
}

biggerNumber(3, 5);
biggerNumber(6, 3);
biggerNumber(2, 2);
biggerNumber('number', 'number');