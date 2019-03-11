DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL(12,2),
    stock_quantity INTEGER(10),
    primary key(item_id)
);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("refrigerator", "home appliances", 950, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("War and Peace", "books", 20, 500);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Turtleneck sweater", "apparel", 55, 300);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Children's chewable gummy bears", "vitamins", 30, 250);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Dog leash", "pet supplies", 15, 175);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Dishwasher", "home appliances", 450, 35);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Buzz Light Laptop", "computers", 999, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Fire TV stick", "electronics", 50, 500);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Rocking chair", "furniture", 250, 90);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Super duper joggers", "Shoes", 130, 230);

USE bamazon;
SELECT * FROM products;