const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    city:String,
    number:String,
    password:String

})

module.exports = mongoose.model("admin", AdminSchema);
