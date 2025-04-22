const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mcs',
  password: 'Mcs@12345'
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");

  connection.query("CREATE DATABASE IF NOT EXISTS college_db", (err) => {
    if (err) throw err;
    console.log("Database 'college_db' created or already exists.");

    connection.changeUser({ database: 'college_db' }, (err) => {
      if (err) throw err;

      const createTable = `
        CREATE TABLE IF NOT EXISTS students (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          age INT,
          course VARCHAR(50),
          email VARCHAR(100)
        )
      `;
      connection.query(createTable, (err) => {
        if (err) throw err;
        console.log("Table 'students' created or already exists.");
        connection.end();
      });
    });
  });
});
