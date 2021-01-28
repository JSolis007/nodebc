const user = {};
user.username = 'batman';
user.password = 'Alfred1960ROCKS!';

console.log(user);
console.log('\n');
console.log(`username: ${user.username.toUpperCase()} password: ${user.password.replace('1960', ' ')}`);
console.log('\n');

if (user.username === 'batman' && user.password === 'Alfred1960KPO!') {
  console.log('Welcome back batman!!');
} else {
  console.log('Sorry, you can\'t enter the Batcave, try again..');
}
