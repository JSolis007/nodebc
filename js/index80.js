let result = 1;
let nextNum = 2;

//shows initial result value
console.log(result);
do {
  if (nextNum % 2 !== 0) {
    result += nextNum;
    console.log(result);
  }
  nextNum++;  
} while (nextNum <= 1000);

