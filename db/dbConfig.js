const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "hojiwak-admin",
  database: "hojiwak-db",
  host: "localhost", // Correct casing
  password: "123456",
  connectionLimit: 10,
});

module.exports = dbConnection.promise(); // Export promise-based pool