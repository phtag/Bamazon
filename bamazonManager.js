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
                    console.log('Viewing products...')
                    console.table(res);
                    getManagerAction();
                });
                break;

            case 'View Low Inventory':

                connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity < 500 ORDER BY stock_quantity ASC", function(err, res) {
                    if (err) {
                        throw err;
                    }
                    console.log('Viewing low inventory...')
                    console.table(res);
                    getManagerAction();
                });
                break;

            case 'Add to Inventory':

                console.log('Add to inventory...')
                getManagerAction();
                break;

            case 'Add New Product':

                console.log('Add new products...')
                getManagerAction();
                break;
            }
        // getNumberOfUnitsDesired(answer.item_id);
    });
}

function getProductID() {
    inquirer
    .prompt({
    name: "item_id",
    type: "input",
    message: "Please enter the ID of the product you to add inventory to:",
    })
    .then(function(answer) {
        getUnitsToItem(answer.item_id);
    });
}

function getUnitsToItem(item_id) {
    inquirer
    .prompt({
    name: "units_to_add",
    type: "input",
    message: "Please enter the number of units to add to inventory:",
    })
    .then(function(answer) {
        addUnitsToItem(answer.units_to_add);
    });
}
function addUnitsToItem(units_to_add) {

}
