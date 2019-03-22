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

CREATE TABLE departments(
	department_id INTEGER NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50),
    over_head_costs  INTEGER(10),
    primary key(department_id)
);
INSERT INTO departments(department_name, over_head_costs) 
VALUES ("home appliances", 200);
INSERT INTO departments(department_name, over_head_costs) 
VALUES ("books", 100);
INSERT INTO departments(department_name, over_head_costs) 
VALUES ("apparel", 150);
INSERT INTO departments(department_name, over_head_costs) 
VALUES ("vitamins", 75);
INSERT INTO departments(department_name, over_head_costs) 
VALUES ("pet supplies", 125);
INSERT INTO departments(department_name, over_head_costs) 
VALUES ("electronics", 140);
INSERT INTO departments(department_name, over_head_costs) 
VALUES ("computers", 90);
INSERT INTO departments(department_name, over_head_costs) 
VALUES ("furniture", 275);
INSERT INTO departments(department_name, over_head_costs) 
VALUES ("shoes", 110);
USE bamazon;
SELECT * FROM products;