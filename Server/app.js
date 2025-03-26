const express  = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
const CustomerRoute = require("./Routes/CustomerRoute");
const AdminRoute = require("./Routes/AdminRoute");


app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/airflightbooking").then(()=>{
    console.log("DB IS CONNECTED")
})





app.use("/Admin", AdminRoute);
app.use("/Customer", CustomerRoute);


app.listen(8000, ()=>{
    console.log("Server is running on 8000 port")
})