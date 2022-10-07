const PORT = 3000;
const express = require("express");

const server = express().listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
