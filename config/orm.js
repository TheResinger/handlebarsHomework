const connection = require("../config/connection.js");

printQuestionMarks = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}

objToSQL = (ob) => {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
}

let orm = {
    all: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    create: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    update: (table, objColVals, condition, cb) => {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // Not needed but there for prosperity.
    // delete: (table, condition, cb) => {
    //     let queryString = "DELETE FROM " + table;
    //     queryString += " WHERE ";
    //     queryString += condition;

    //     connection.query(queryString, (err, result) => {
    //         if (err) throw err;
    //         cb(result);
    //     })
    // }
}

module.exports = orm;