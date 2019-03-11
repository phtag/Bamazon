var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "mySQL6830$",
  database: "bamazon"
});
connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});
//_______________________________________
//  FUNCTION definitions
function promptUser() {
    inquirer
    .prompt({
    name: "item_id",
    type: "input",
    message: "Please enter the ID of the product you want to buy",
    })
    .then(function(answer) {
    });
}