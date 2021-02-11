
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Please login to get a user");
});

router.post("/", (req, res) => {
  res.send("Please login to create a user");
});

router.put("/", (req, res) => {
  res.send("Please login to update a user");
});

router.delete("/", (req, res) => {
  res.send("Please login to delete a user");
});

module.exports = router; 