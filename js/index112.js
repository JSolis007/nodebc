function showNumbers(start, end) {
  if (start === end) {
    console.log('The start and end values are the same number');
  } else if (typeof start !== 'number' || typeof end !== 'number') {
    console.log('Error: Only numbers are allowed. Please try again.');
  } else { //the numbers are different and valid numbers
    if (start > end) { //show numbers from higher to lower
      for (let i = start; i >= end; i--) {
        console.log(i);
      }
    } else {  //show numbers from lower to higher
      for (let i = start; i <= end; i++) {
        console.log(i);
      }
    }
  }

} //end of function


showNumbers(0, 100);
showNumbers(1000, 0);
showNumbers(100, 100);
showNumbers(100, 300);
showNumbers("100", 300);
