require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const socketIO = require("socket.io");
const axios = require("axios");

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

axios
  .get(process.env.LIST_URL)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
