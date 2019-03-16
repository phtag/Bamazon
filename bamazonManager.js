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
        switch (answer.action) {
            case 'View Products for Sale':

                connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, res) {
                    if (err) {
                        throw err;
                    }
                    console.table(res);
                });
                console.log('Viewing products...')
                break;

            case 'View Low Inventory':

                connection.query("SELECT item_id, product_name, price, stock_quantity FROM products ORDER BY stock_quantity ASC LIMIT 5", function(err, res) {
                    if (err) {
                        throw err;
                    }
                    console.table(res);
                });
                console.log('Viewing low inventory...')
                break;

            case 'Add to Inventory':

                console.log('Add to inventory...')
                break;

            case 'Add New Product':

                console.log('Add new products...')
                break;
            }
        // getNumberOfUnitsDesired(answer.item_id);
    });
}