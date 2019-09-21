const mysql = require("mysql");
require("donenv").config();

const connection = mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: 3306,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    database: process.env.MYSQLDATABASE
});

connection.connect((err) => {
    if (err)
    {
        console.error(`Error connecting: ${err.stack}`)
        return;
    }
    console.log(`Connected as id : ${connection.threadId}`);
});

module.exports = connection;