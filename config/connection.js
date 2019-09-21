const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",// process.env.MYSQLHOST,
    port: 3306,
    user: "b93bc7d520e870",//process.env.MYSQLUSER,
    password: "556103f7",//process.env.MYSQLPASS,
    database: "heroku_2505dd4dad9d6cb"//process.env.MYSQLDATABASE
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