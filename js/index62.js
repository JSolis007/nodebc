let monthNumber = 11;
let monthName = null;
let monthDays = null;

switch (monthNumber) {
  case 1:
    monthName = 'January';
    montDays = 31;
    break;
  case 2:
    monthName = 'February';
    montDays = 28;
    break;    
  case 3:
    monthName = 'March';
    montDays = 31;
    break;
  case 4:
    monthName = 'April';
    montDays = 30;
    break;  
  case 5:
    monthName = 'May';
    montDays = 31;
    break;
  case 6:
    monthName = 'June';
    montDays = 30;
    break;    
  case 7:
    monthName = 'July';
    montDays = 31;
    break;
  case 8:
    monthName = 'August';
    montDays = 31;
    break;  
  case 9:
    monthName = 'September';
    montDays = 30;
    break;
  case 10:
    monthName = 'October';
    montDays = 31;
    break;    
  case 11:
    monthName = 'November';
    montDays = 30;
    break;
  case 12:
    monthName = 'December';
    montDays = 31;
    break;                
  default:   
    message = 'Error: Please input a number bettwen 1 and 7';
}

if (monthName === null && monthDays === null) {
  console.log('Invalid month number. Please try again');
} else {
  console.log(`${monthName} is the selected month and has ${montDays} days`);
}