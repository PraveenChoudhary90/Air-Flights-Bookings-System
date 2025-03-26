const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    city:String,
    number:String,
    Subject:String,
    price:String,
    sdate:String,
    edate:String,
    password:String

})

module.exports = mongoose.model("admin", AdminSchema);
