const user = {
  username: null,
  password: null,
  greet: () => { (this.username != null) ? (console.log(`Hello, I'm user ${this.username}`)) : console.log('Please assign a username value')},
  updatePassword: (password) => { this.password = password;},
  updateUsername: (username) => { this.username = username;}
};

console.log(user.greet());
user.updateUsername('homer');
user.updatePassword('donuts123');
console.log(user.greet());
