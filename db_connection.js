require('dotenv').config();
const mysql = require('mysql');

let con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: "root",
  password: "1234",
  database: "flowers_db"
});

module.exports = con;