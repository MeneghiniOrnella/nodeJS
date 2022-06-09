const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-js',
    password: 'mern'
});

module.exports = pool.promise();