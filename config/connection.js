var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "OliverHank6",
    database: "menudb"
  });
}



connection.connect();

module.exports = connection;