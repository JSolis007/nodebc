//logplease
const Logger = require('logplease');
const logger = Logger.create('utils');

//require the module
const express = require('express');
const port = 3000;

//create express server
const app = express();

//configure default route and send a text as response
app.get('/', function(request, response) {
  response.send("Congrats you're using your first Node.js and Express as Web Server");
});

//configure port
app.listen(port, (err) => {
  if (err) {
    logger.error('Unable to start the server on port', err);
  }
  logger.info(`This HTTP server is running on port ${port}`);
});