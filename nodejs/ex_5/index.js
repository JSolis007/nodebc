const Logger = require('logplease');
const logger = Logger.create('utils');

const isOddEven = require('./numbers');

const result = isOddEven(2);

let list = [2, 3, 101, 201, 202, 100];

list.forEach((num) => {
  if (isOddEven(num)) {
    logger.info(`${num} is even`);   
  } else {
    logger.info(`${num} is odd`);   
  }
});
