const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.get("/products", (req, res) => {
  res.status(500).send("Server error, please try it later");
});

app.get("/users", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

//added extra route to deal with routes not found above
app.use((req, res) => {
  res.status(404).send('There is nothing here');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
