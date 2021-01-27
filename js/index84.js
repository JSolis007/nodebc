let index = 1;
let result = '*';

do {
  if (index % 2 !== 0) {
      console.log(result);
  }
  result += '*';
  index++;  
} while (index <= 13);