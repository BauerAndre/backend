const PORT = 3000;
const express = require("express");
const socketIO = require("socket.io");

const server = express().listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});

const socketHandler = socketIO(server);

socketHandler.on("connection", () => {
  console.log("Client Connected!");
});
