const express = require("express");
const route = express.Router();
const CustomerController = require("../Controller/CustomerController");



route.post("/CustomerRegistred", CustomerController.Registrationdata );






module.exports = route;












