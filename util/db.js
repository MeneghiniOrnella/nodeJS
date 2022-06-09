const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'user',
    database: 'node',
    password: 'mern'
});

module.exports = pool.promise();