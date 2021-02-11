const express = require('express');
const app = express();
const port = 3000;

app.get('/', (res, req, next) => {
  res.json({
    status: 200,
    message: "Este request/response está OK",
  });
});

const requestTime = (req, res, next) => {
  const message = `Request: ${req.baseUrl} ${Date.now()}`;
  console.log(message);

  next();
};

app.use(requestTime);

app.listen(port);