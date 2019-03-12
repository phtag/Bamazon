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
});
getManagerAction();
function getManagerAction() {
    inquirer
    .prompt({
    name: "action",
    type: "list",
    choices: ['View Products for Sale',
            'View Low Inventory',
            'Add to Inventory',
            'Add New Product'],
    })
    .then(function(answer) {
        console.log(answer.action);
        // getNumberOfUnitsDesired(answer.item_id);
    });
}