const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    city:String,
    number:String,
    Subject:String,
    board:String,
    distination:String,
    price:String,
    sdate:String,
    edate:String

})

module.exports = mongoose.model("customer", CustomerSchema);
