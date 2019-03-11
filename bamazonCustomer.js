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
connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    getProductID();
});
//_______________________________________
//  FUNCTION definitions
function getProductID() {
    inquirer
    .prompt({
    name: "item_id",
    type: "input",
    message: "Please enter the ID of the product you want to buy:",
    })
    .then(function(answer) {
        getNumberOfUnitsDesired(answer.item_id);
    });
}
function getNumberOfUnitsDesired(productID) {
    inquirer
    .prompt({
    name: "units",
    type: "input",
    message: "Please enter the number of units you want to buy for product ID=" + productID + ":",
    })
    .then(function(answer) {
        connection.query("SELECT stock_quantity FROM products WHERE item_id=" + productID, function(err, res) {
            var currentInventoryLevel = Number(res[0].stock_quantity);
            var purchaseQuantity = Number(answer.units);
            if (currentInventoryLevel < purchaseQuantity) {
                console.log('Your order exceeds the units available for purchase');
            } else {
                connection.query("UPDATE products SET stock_quantity=" + (currentInventoryLevel-purchaseQuantity) + ' WHERE item_id=' + productID, function(err, res) {
                    connection.query("SELECT * FROM products", function(err, res) {
                        if (err) throw err;
                        console.table(res);
                        getProductID();
                    });                    
                });
            }
        });
    });
}