const user = {};
user.username = 'batman';
user.password = 'Alfred1960ROCKS!';


function shouldOpenBatCave(username, password) {
  if (username === 'batman' && password === 'Alfred1960KPO!') {
    return true;
  } else {
    return false; 
  }
}


if (shouldOpenBatCave(user.username, user.password)) {
  console.log('Welcome back batman!!');
} else {
  console.log('Sorry, you can\'t enter the Batcave, try again..');
}