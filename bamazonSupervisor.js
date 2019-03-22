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
function addNewDepartment() {
    inquirer
    .prompt({
        name: "department_name",
        type: "input",
        message: "Please enter the name of the new department:",
    })
    .then(function(answer) {
        department_name = answer.department_name;
        inquirer
        .prompt({
            name: "over_head_costs",
            type: "input",
            message: "Please enter the overhead costs for department '" + department_name + "':",
        })
        .then(function(answer) {
            over_head_costs = answer.over_head_costs;
            connection.query("INSERT INTO departments (department_name, over_head_costs) VALUES ('" + department_name + "'," + over_head_costs, function(err, res) {
                if (err) {
                    console.log(err);
                    throw err;
                }
                connection.query("SELECT department_id, department_name, over_head_costs FROM departments", function(err, res) {
                    console.table(res);
                    getSupervisorAction();
                });
            });
        });
    });
}
