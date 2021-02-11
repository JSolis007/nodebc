const express = require('express');
const app = express();
const port = 3000;

const home = require('./home.js');
const users = require("./user.js");

app.use('/', home);
app.use('/users', users);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});