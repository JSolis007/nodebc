let result = 1;
let nextNum = 2;

while (nextNum <= 1000) {
  if (nextNum % 2 !== 0) {
    result += nextNum;
  }
  console.log(result);
  nextNum++;
}



