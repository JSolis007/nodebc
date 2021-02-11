const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "products.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});