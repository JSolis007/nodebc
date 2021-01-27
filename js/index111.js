function isEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
    return true;
  } else {
    console.log(`${num} is odd`);
    return false;
  }
}

isEven(2);
isEven(5);
isEven(3);
isEven(24);
isEven(12);