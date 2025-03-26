

const CustomerModel = require("../Model/CustomerModel");








const Registrationdata = async(req,res) =>{
   const {  name ,email,address,city,number,sdate,edate,password,Subject,price,board,distination} = req.body;
   const Customer = await AdminController.create({
     name:name,
    email:email,
    address:address,
    city:city,
    number:number,
    board:board,
    distination:distination,
    Subject:Subject,
    sdate:sdate,
    edate:edate,
    price:price,
    password:password
   })
   res.status(200).send({msg:"Your Flight Is Book Successfully"});

} 



module.exports = {

    Registrationdata

}