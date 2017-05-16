var request = require('request');
var apiOptions = { server : "http://localhost:3002" };
var renderCustomerList = function(req, res, responseBody) {
    res.render('customers-list', {
        title: 'Test',
        customers : responseBody
    });
};

module.exports.customersList = function(req, res) {
    var requestOptions = {
        url : "http://localhost:3002/api/customers",
        method : "GET",
        json : {}
    };
    request (
        requestOptions,
        function(err, response, body) {
            renderCustomerList(req, res, body);
        }
    )
    res.render('customers-list'), {title: "test"};
}
module.exports.addCustomer = function(req, res) {
    res.render('add-customer');
}
