var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'r8ayandyv10',
    database: 'graffVet'


})


module.exports = connection;
