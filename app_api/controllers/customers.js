var connection = require('../models/db');
module.exports.listCustomersByLastName = function(req, res) {
    connection.query('SELECT * FROM customers;', function(err, rows, fields) {
        if (err) {
            console.log('Error');
            return res.send(500);
        }
        thedata = rows;
        console.log(thedata);
        res.status(200);
        res.json({thedata});
    })
}
