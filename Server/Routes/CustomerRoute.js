const express = require("express");
const route = express.Router();
const CustomerController = require("../Controller/CustomerController");



route.post("/CustomerRegistred", CustomerController.Registrationdata );
route.post("/Deletedata", CustomerController.DeleteData);
route.post("/Frompardetalena", CustomerController.Frompardetalana);
route.post("/Updatedata", CustomerController.Updatedata);





module.exports = route;












