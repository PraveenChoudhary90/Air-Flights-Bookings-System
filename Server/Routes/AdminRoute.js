const express  =require("express");
const route = express.Router();
const AdminController = require("../Controller/AdminController")


route.post("/AdminRegistred", AdminController.RegistardData);
route.post("/Login", AdminController.LoginData );
route.get("/CustomerList", AdminController.Displydata );



module.exports = route;