# Bamazon
Week 12 homework assignment


### Overview
This project uses Node.js and myDQL to create a software-based store where customers can purchase products, managers can review inventory levels, add inventory and add new products, and supervisors can review profits and add new departments. There are three separate programs that were developed for this project:
* Customer
* Manager
* Supervisor

Each of these programs provides different menus that the users can select from to perform various functions.

[Bamazon store demo video](https://github.com/phtag/Constructor-Word-Guess/blob/master/Word-game-demo.gif)

NOTE: This project is referenced on my portfolio page at [my portfolio](https://phtag.github.io/Updated-portfolio/)

### Purpose
The purpose of this assignment is to learn how to use JavaScript in conjunction with Node.js to interface with a mySQL database. 

### Getting Started
To play the game, you will need to copy the package.json file for this project to your root node.js directory and install NPM packages for:
* Inquirer
* mySQL

After installing this packages, copy all of the files from the repository to your node.js root node. You will be running the store programs using the BamazonCustomer.js, BamazonManager.js, and BamazonSupervisor.js files in node.js. 

For the customer program, customers can view the existing collection of products available and make purchases. Purchases consist of a selected product which is done by ID and a purchase quantity. When the purchase is made, the program updates the database to reflect both the reduced inventory level for the selected product and the increased total sales for that product.

![Customer program Screenshot](/images/Bamazon-customer-screenShot.jpg)

* Correctly answered all of the letters
* Run out of guesses

When either of the above conditions occurs, you will be prompted as to whether or not you want to play again.

Here are some screenshots of what gets displayed on the console window:

![Constructor word game Screenshot](Constructor-word-game.jpg)

![Constructor word game Screenshot](Constructor-word-game2.jpg)

![Constructor word game Screenshot](Constructor-word-game3.jpg)

This project is maintained by Peter Tag
