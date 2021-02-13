function sort(number1, number2, number3, highToLow) {
  if (number1 >= number2 && number1 > number3) { //number1 is the biggest number
    if (number2 >= number3) {
      ((highToLow) ? console.log(`${number1}, ${number2}, ${number3}`) : console.log(`${number3}, ${number2}, ${number1}`));  
    } else if (number3 >= number2) {
      ((highToLow) ? console.log(`${number1}, ${number3}, ${number2}`) : console.log(`${number2}, ${number3}, ${number1}`));  
    }
  } else if (number2 > number1 && number2 >= number3) { //number2 is the biggest number
    if (number1 >= number3) {
      ((highToLow) ? console.log(`${number2}, ${number1}, ${number3}`) : console.log(`${number3}, ${number1}, ${number2}`));  
    } else if (number3 >= number1) {
    ((highToLow) ? console.log(`${number2}, ${number3}, ${number1}`) : console.log(`${number1}, ${number3}, ${number2}`));  
     }
  } else if (number3 >= number1 && number3 > number2) { //number3 is the biggest number
    if (number1 >= number2) {
      ((highToLow) ? console.log(`${number3}, ${number1}, ${number2}`) : console.log(`${number2}, ${number1}, ${number3}`));  
    } else if (number2 >= number1) {
      ((highToLow) ? console.log(`${number3}, ${number2}, ${number1}`) : console.log(`${number1}, ${number2}, ${number3}`));  
    }
  } 
}



sort(10, 8, 25);
sort(100, 80, 25, true);
sort(1, 8, 25);
sort(1, 1, 1);
sort(22, 22, 1);
sort(100, 1, 100);
sort(50, 60, 60);
sort(0, 0, 0);
sort(10, 8, 25, true);

