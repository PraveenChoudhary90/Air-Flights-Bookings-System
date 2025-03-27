

const CustomerModel = require("../Model/CustomerModel");








const Registrationdata = async(req,res) =>{
   const {  name ,email,address,city,number,sdate,edate,password,Subject,price,board,distination} = req.body;
   const Customer = await CustomerModel.create({
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
   })
   res.status(200).send({msg:"Your Flight Is Book Successfully"});

} 

const DeleteData = async(req,res)=>{
  const{id}=req.body
   await CustomerModel.findByIdAndDelete(id);
  res.send("okk");
}


const Frompardetalana = async (req,res)=>{
        const{id}=req.body
        const Data= await CustomerModel.findById(id)
        res.send(Data)
      }




const Updatedata = async(req,res)=>{
   const {_id}=req.body;
  await CustomerModel.findByIdAndUpdate(_id,req.body)
  res.send("Data Updated SuccessFully")

}

module.exports = {

    Registrationdata,
    DeleteData,
    Frompardetalana,
    Updatedata

}