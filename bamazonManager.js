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

                connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products", function(err, res) {
                    if (err) {
                        throw err;
                    }
                    console.log('Viewing products...')
                    console.table(res);
                    getManagerAction();
                });
                break;

            case 'View Low Inventory':

                connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE stock_quantity < 5 ORDER BY stock_quantity ASC", function(err, res) {
                    if (err) {
                        throw err;
                    }
                    console.log('Viewing low inventory...')
                    console.table(res);
                    getManagerAction();
                });
                break;

            case 'Add to Inventory':

                getProductID();
                break;

            case 'Add New Product':

                addNewProduct();
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
    message: "Please enter the ID of the product you want to add inventory to:",
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
        addUnitsToItem(item_id, answer.units_to_add);
    });
}
function addUnitsToItem(item_id, units_to_add) {
    connection.query("UPDATE products SET stock_quantity=stock_quantity+" + units_to_add + " WHERE item_id=" + item_id, function(err, res) {
        if (err) {
            throw err;
        }
        connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products", function(err, res) {
            console.log('Viewing products...')
            console.table(res);
            getManagerAction();
        });
    });
}
function addNewProduct() {
    inquirer
    .prompt({
        name: "product_name",
        type: "input",
        message: "Please enter the name of the new product:",
    })
    .then(function(answer) {
        product_name = answer.product_name;
        console.log("Please select a department for product='" + product_name);
        connection.query("SELECT department_name FROM products GROUP BY department_name", function(err, res) {
            // Make the user select the department for the new product
            var departments = res.map(obj => obj.department_name);
            inquirer
            .prompt({
                name: "action",
                type: "list",
                choices: departments,
             })
            .then(function(answer) {
                // Get the price of the new product
                var department_name = answer.action; 
                inquirer
                .prompt({
                    name: "price",
                    type: "input",
                    message: "Please enter the price of product '" + product_name + "' in department='" + department_name + "':",
                })
                .then(function(answer) {
                    //  Get the number of units to add to inventory for this new product
                    price = answer.price;
                    inquirer
                        .prompt({
                            name: "units",
                            type: "input",
                            message: "Please enter the initial number of units to add to inventory for product='" + product_name + "':",
                    })
                    .then(function(answer) {
                        //  Add new product to the database
                        units = answer.units;
                        connection.query("SELECT COUNT(*) as numRecords FROM products", function(err, res) {
                            // Don't really need this, but was just curious about how to get number of records in a table
                            // in case the ID field was NOT auto-generated
                            var numRecords = res[0].numRecords;

                            connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) VALUES ('" + product_name + "','" + department_name + "'," + price + "," + units + ", 0)", function(err, res) {
                                    if (err) {
                                    console.log(err);
                                    throw err;
                                }
                                connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products", function(err, res) {
                                    console.log('Viewing products...')
                                    console.table(res);
                                    getManagerAction();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
