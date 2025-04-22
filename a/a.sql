mysql -u mcs -p

CREATE DATABASE IF NOT EXISTS college_db;

USE college_db;

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  course VARCHAR(50),
  email VARCHAR(100)
);

USE college_db;

INSERT INTO students (name, age, course, email)
VALUES 
  ('Gauri Mhaske', 20, 'BSc Computer Science', 'gauri@example.com'),
  ('Vaibhav Nirmal', 22, 'BBA', 'vaibhav@example.com'),
  ('Abhishek Shinde', 21, 'BA', 'abhishek@example.com'),
  ('Aditya Khalekar', 23, 'BCom', 'aditya@example.com');

SELECT * FROM students;