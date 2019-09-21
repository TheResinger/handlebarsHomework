const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",// process.env.MYSQLHOST,
    port: 3306,
    user: "root",//process.env.MYSQLUSER,
    password: "root",//process.env.MYSQLPASS,
    database: "burgers_db"//process.env.MYSQLDATABASE
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