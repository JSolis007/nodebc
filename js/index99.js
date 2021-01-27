let result = 0;
let counter = 1;  //set counter to 1 because 0 is the first even number

for (let i = 0; i <= 1000; i++) {
  if (counter > 20) {
    break;
  } else if (i % 2 === 0) {
    result += i;
    console.log(result);
    counter++;
  } 
}