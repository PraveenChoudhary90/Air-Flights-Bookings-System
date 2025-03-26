const AdminController = require("../Model/AdminModel");

const CustomerModel = require("../Model/CustomerModel");






const Registrationdata = async(req,res) =>{
   const {  name ,email,address,city,number,sdate,edate,password,Subject,price} = req.body;
   const Customer = await AdminController.create({
     name:name,
    email:email,
    address:address,
    city:city,
    number:number,
    Subject:Subject,
    sdate:sdate,
    edate:edate,
    price:price,
    password:password
   })
   res.status(200).send({msg:"Your Flight Is Book Successfully"});

} 

const LoginData = async (req,res)=>{
   const{ email, password} = req.body;
   const logindata  = await AdminController.findOne({
    email:email,
   })
   res.status(200).send(logindata);
}


const Displydata = async(req,res)=>{
    const Customerdata = await AdminController.find();
    res.status(200).send(Customerdata);
}




module.exports = {
    Registrationdata,
    LoginData,
    Displydata
}



