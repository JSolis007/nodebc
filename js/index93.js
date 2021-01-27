let result = '*************';

for (let i = result.length; i > 1; i--) {
  console.log(result);
  result = result.slice(0, (result.length - 1))  
}

console.log(result); //For the final '*'. To avoid the slice function capturing an empty string on the final iteration
