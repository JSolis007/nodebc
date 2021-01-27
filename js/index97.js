
for (let i = 10000; i >= 0; i--) {
  (i % 10 === 0 && i !== 10000 && i !== 0) ? console.log(`** ${i} **`) :  console.log(i);
}

