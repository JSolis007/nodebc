let result = 0;

for (let i = 1; i <= 1000; i++) {
  result += i;
  if (result < 400) {
    console.log(result);
  } else {
    break;
  }
}