var express = require("express");
var router = express.Router();
var ctrlCustomers = require('../controllers/customers');
//var ctrlUser = require('../controllers/user');
//var ctrlDashboard = require('../controllers/dashboard');

// customers
router.get('/customers', ctrlCustomers.listCustomersByLastName);

module.exports = router;
