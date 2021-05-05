DROP DATABASE IF EXISTS eTracker_db;
CREATE database eTracker_db;
use eTracker_db;
CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
d_name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);
CREATE TABLE role(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
PRIMARY KEY(id)
);
CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY(id)
);