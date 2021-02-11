const express = require('express');
const app = express();
const port = 3000;

var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
var getRandomJoke2 = oneLinerJoke.getRandomJoke();


app.get('/', (req, res) => {
  res.send('Welcome to Exercise 10!');
});

app.get("/jokes", (req, res) => {
  res.send(getRandomJoke.body + ' ' + getRandomJoke2.body);
});

app.get("/joke", (req, res) => {
  res.send(getRandomJoke.body);
});

app.post("/joke", (req, res) => {
  res.send("my jokes are too funny, I'm not getting new ones from you..");
});

app.put("/joke", (req, res) => {
  res.send("no, no, no.. not changing my act dude!");
});

app.delete("/joke", (req, res) => {
  res.send("good jokes never get to old")
});

app.all("/joke", (req, res) => {
  res.send("I know I'm so good that you're looking for jokes everywhere");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});