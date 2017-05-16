var express = require("express");
var router = express.Router();
var ctrlCustomers = require('../controllers/customers');
var ctrlUser = require('../controllers/user');
var ctrlDashboard = require('../controllers/dashboard');

//home
router.get('/', ctrlDashboard.home);

// user info
router.get('/login', ctrlUser.login)

// customers
router.get('/customers', ctrlCustomers.customersList);
router.get('/addCustomer', ctrlCustomers.addCustomer);



module.exports = router;
