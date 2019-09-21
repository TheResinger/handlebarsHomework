const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    port: 3306,
    user: "b93bc7d520e870",
    password: "556103f7",
    database: "heroku_2505dd4dad9d6cb"
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