const express = require("express");
const cors = require("cors");
const accounts = require("./accounts");
const users = require("./users");
const transactions = require("./transactions")


server = express();
server.use(express.json());
server.use(cors());

server.use(transactions.router);
server.use(accounts.router);
server.use(users.router);

server.listen(3000, (errors) => {
  if (errors) {
    console.log("Server couldn't start. Error: " + errors);
  } else {
    console.log("Server started on port 3000");
  }
});

