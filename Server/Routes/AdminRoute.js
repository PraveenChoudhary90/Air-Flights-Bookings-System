const express = require("express");
const route = express.Router();
const AdminController = require("../Controller/AdminController")


route.post("/AdminRegistred", AdminController.Registrationdata);
route.post("/Login", AdminController.LoginData );
route.get("/CustomerList", AdminController.Displydata );



module.exports = route;