const express = require("express");
//const data = require("./data");
const database = require("./database");

router = express.Router();

router.get("/transaction/all", (request, response) => {
  // Step 1 - Get all the accounts
  //let accounts = data.get_all_accounts();
  // Step 2 - Return the accounts as response
 // response.send(accounts);
  database.connection.query(`select * from transactions`, (errors, records) => {
    if (errors) {
    console.log(errors);
    response.status(500).send("An error occurred in the backend");
    } else {
    response.status(200).send(records);
    }
  });
});

router.get("/transaction/by-aid", (request, response) => {
  // Step 1 - Extract the account_id from the request
  //let account_id = request.query.account_id;
  // Step 2 - Get account information from the data
  //let account = data.get_account_by_account_id(account_id);
  // Step 3 - Return the account information
  //response.send(account);

  database.connection.query(
    `select * from transactions where account_id = '${request.query.aid}'`,
    (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("An error occurred in the backend");
      } else {
        response.status(200).send(records);
      }
    }
  );
});

router.get("/transaction/by-tid", (request, response) => {
  // Step 1 - Extract the account_id from the request
  //let account_id = request.query.account_id;
  // Step 2 - Get account information from the data
  //let account = data.get_account_by_account_id(account_id);
  // Step 3 - Return the account information
  //response.send(account);

  database.connection.query(
    `select * from transactions where transaction_id = '${request.query.transaction_id}'`,
    (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("An error occurred in the backend");
      } else {
        response.status(200).send(records);
      }
    }
  );
});

router.post("/transaction/add", (request, response) => {
 // let account = request.body;
  //data.add_account(account);
  //response.send("Added successfully!");
  let transactions = request.body;
  database.connection.query(
    `insert into transactions (account_id, transaction_date, transaction_type, to_account, transaction_amt)
    values ('${transactions.account_id}', NOW(), '${transactions.transaction_type}', '${transactions.to_account}', '${transactions.transaction_amt}')`,
    (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Some error occurred at the backend");
      } else {
        response.status(200).send("Created new transaction!");
      }
    }
  );
 });

module.exports = { router };