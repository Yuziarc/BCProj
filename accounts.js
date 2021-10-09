const express = require("express");
//const data = require("./data");
const database = require("./database");

router = express.Router();

router.get("/account/all", (request, response) => {
  // Step 1 - Get all the accounts
  //let accounts = data.get_all_accounts();
  // Step 2 - Return the accounts as response
 // response.send(accounts);
  database.connection.query(`select * from accounts`, (errors, records) => {
    if (errors) {
    console.log(errors);
    response.status(500).send("An error occurred in the backend");
    } else {
    response.status(200).send(records);
    }
  });
});

router.get("/account/by-aid", (request, response) => {
  // Step 1 - Extract the account_id from the request
  //let account_id = request.query.account_id;
  // Step 2 - Get account information from the data
  //let account = data.get_account_by_account_id(account_id);
  // Step 3 - Return the account information
  //response.send(account);

  database.connection.query(
    `select * from accounts where account_id = '${request.query.account_id}'`,
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

router.get("/account/by-email", (request, response) => {

  database.connection.query(
    `select * from accounts as a left join users as u on a.user_id = u.user_id where u.email = '${request.query.email}'`,
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

router.post("/account/add", (request, response) => {
 // let account = request.body;
  //data.add_account(account);
  //response.send("Added successfully!");
  let accounts = request.body;
  database.connection.query(
    `insert into accounts (user_id, account_type, balance, max_limit, date_created)
    values ('${accounts.user_id}', '${accounts.account_type}', '${accounts.balance}', '${accounts.max_limit}', NOW())`,
    (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Some error occurred at the backend");
      } else {
        response.status(200).send("Created new account!");
      }
    }
  );
 });

module.exports = { router };