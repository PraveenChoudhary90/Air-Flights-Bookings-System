const AdminModel = require("../Model/AdminModel");
const CustomerModel = require("../Model/CustomerModel");






const Registrationdata = async(req,res) =>{
   const {  name ,email,address,city,number,password} = req.body;
   const Customer = await AdminModel.create({
     name:name,
    email:email,
    address:address,
    city:city,
    number:number,
    password:password
   })
   res.status(200).send({msg:"You Book Successfully"});

} 

const LoginData = async (req,res)=>{
   const{ email, password} = req.body;
   const logindata  = await AdminModel.findOne({
    email:email,
   })
   res.status(200).send(logindata);
}


const Displydata = async(req,res)=>{
    const Customerdata = await CustomerModel.find();
    res.status(200).send(Customerdata);
}




module.exports = {
    Registrationdata,
    LoginData,
    Displydata
}



