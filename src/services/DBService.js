const mysql = require("mysql");

export const executeQuery = async (query, values) => {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT || 3306,
  });

  connection.connect((err) => {
    if (err) {
      return console.error("error: " + err.message);
    }

    console.log("Connected to the MySQL server.");
  });

  connection.query(query, values, (error, results, fields) => {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });

  connection.end();
};

module.exports = executeQuery;
