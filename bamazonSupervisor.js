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

getSupervisorAction();
function getSupervisorAction() {
    inquirer
    .prompt({
    name: "action",
    type: "list",
    choices: ['View Product Sales by Department',
            'Create New Department'],
    })
    .then(function(answer) {
        console.log(answer.action);
        switch (answer.action) {
            case 'View Product Sales by Department':

                connection.query("SELECT department_id, department_name, over_head_costs, SUM(product_sales) AS 'Total Sales', (SUM(product_sales) - over_head_costs) AS Profits FROM departments INNER JOIN products USING (department_name) GROUP BY department_name", function(err, res) {
                    if (err) {
                        throw err;
                    }
                    console.table(res);
                    getSupervisorAction();
                });
                break;

            case 'Create New Department':

                // connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity < 500 ORDER BY stock_quantity ASC", function(err, res) {
                //     if (err) {
                //         throw err;
                //     }
                    console.log('Creating new department...')
                    // console.table(res);
                    // getManagerAction();
                // });
                break;

            }
        // getNumberOfUnitsDesired(answer.item_id);
    });
}

// function getProductID() {
//     inquirer
//     .prompt({
//     name: "item_id",
//     type: "input",
//     message: "Please enter the ID of the product you to add inventory to:",
//     })
//     .then(function(answer) {
//         getUnitsToItem(answer.item_id);
//     });
// }

// function getUnitsToItem(item_id) {
//     inquirer
//     .prompt({
//     name: "units_to_add",
//     type: "input",
//     message: "Please enter the number of units to add to inventory:",
//     })
//     .then(function(answer) {
//         addUnitsToItem(item_id, answer.units_to_add);
//     });
// }
// function addUnitsToItem(item_id, units_to_add) {
//     connection.query("UPDATE products SET stock_quantity=stock_quantity+" + units_to_add + " WHERE item_id=" + item_id, function(err, res) {
//         if (err) {
//             throw err;
//         }
//         connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, res) {
//             console.log('Viewing products...')
//             console.table(res);
//             getManagerAction();
//         });
//     });
// }
// function addNewProduct() {
//     inquirer
//     .prompt({
//     name: "product_name",
//     type: "input",
//     message: "Please enter the name of the new product:",
//     })
//     .then(function(answer) {
//         product_name = answer.product_name;
//         inquirer
//             .prompt({
//             name: "price",
//             type: "input",
//             message: "Please enter the price of product '" + product_name + "':",
//             })
//             .then(function(answer) {
//                 price = answer.price;
//                 inquirer
//                     .prompt({
//                     name: "units",
//                     type: "input",
//                     message: "Please enter the initial number of units to add to inventory for product='" + product_name + "':",
//                     })
//                     .then(function(answer) {
//                         console.log("Got here for product=" + product_name);
//                         units = answer.units;
//                         connection.query("SELECT COUNT(*) as numRecords FROM products", function(err, res) {
//                             // Don't really need this, but was just curious about how to get number of records in a table
//                             // in case the ID field was NOT auto-generated
//                             var numRecords = res[0].numRecords;

//                             console.log('numRecords='+numRecords);
//                             connection.query("INSERT INTO products (product_name, price, stock_quantity) VALUES ('" + product_name + "'," + price + "," + units + ")", function(err, res) {
//                                     if (err) {
//                                     console.log(err);
//                                     throw err;
//                                 }
//                                 connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, res) {
//                                     console.log('Viewing products...')
//                                     console.table(res);
//                                     getManagerAction();
//                                 });
//                             });
//                         });
//                     });
//             });
//     });
// }
