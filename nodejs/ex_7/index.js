const getGreeter = require('./greeter');

const message = () => {
  console.log("We're using the node modules");
};

getGreeter('Homer', 'Simpson', message);

