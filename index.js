const PORT = 3000;
const express = require("express");
const socketIO = require("socket.io");

const server = express().listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});

const socketHandler = socketIO(server);
socketHandler.on("connection", (socket) => {
  socket.on("connect_error", () => {
    console.log("Connection error!");
  });
  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
  console.log("Client Connected!");

  setInterval(() => {
    socketHandler.emit("crypto", "Hello Cryptos Client!");
  }, 1000);
});
