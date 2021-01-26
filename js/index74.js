let index = 1;
let result = '*';

while (index <= 13) {
  if (index % 2 !== 0) {
      console.log(result);
  }
  result += '*';
  index++;
}