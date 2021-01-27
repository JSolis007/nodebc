let result = 1;
//shows initial result value
console.log(result);

for (let nextNum = 2; nextNum <= 1000; nextNum++) {
  if (nextNum % 2 !== 0) {
    result += nextNum;
    console.log(result);
  }
}
