function getHexaColor(color) {
  let hexaColor;
  switch(color) {
    case 'white':
      hexaColor = '#FFFFFF';
      break;
    case 'black':
      hexaColor = '#000000';
      break;

    case 'blue':
      hexaColor = '#0b24fb';
      break;
    case 'green':
      hexaColor = '#0e7e12';
      break;
    case 'yellow':
      hexaColor = '#fffd38';
      break;
    case 'pink':
      hexaColor = '#fec1cc';
      break;
    default:
      console.log('Please enter one of the following colors: white, black, blue, green, yellow, pink');      
  }
  return hexaColor;
}

console.log(getHexaColor('white'));
console.log(getHexaColor('black'));
console.log(getHexaColor('blue'));
console.log(getHexaColor('green'));
console.log(getHexaColor('yellow'));
console.log(getHexaColor('pink'));