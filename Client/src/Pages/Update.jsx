import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios";
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom"
import BASE_URL from '../config';
const Update=()=>{
    const navigate=useNavigate()
    const [input, setInput] = useState({})
    const handelInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
const loadData=()=>{
    let api=`${BASE_URL}/Customer/Frompardetalena`;
    axios.post(api,{id:id}).then((res)=>{
        setInput(res.data)
    })
}


useEffect(()=>{
   loadData() 
},[])
    const handelSubmit = async () => {
        let api = `${BASE_URL}/Customer/Updatedata`;
        axios.post(api, input).then((res) => {
            alert("Data Updated Successfully")
            navigate("/update")
        })
    }
    const {id}=useParams()
  return (
    <>
         
                   <Form style={{width:"500px", margin:"auto"}} >
          <h1>Update Data </h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter  Name</Form.Label>
            <Form.Control type="text" name='name'  onChange={handelInput} />
          </Form.Group>
    
           <Form.Group className="mb-3" controlId="formBasicEmaila">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="text" name='email'  onChange={handelInput} />
          </Form.Group>
    
           <Form.Group className="mb-3" controlId="formBasicEmailb">
            <Form.Label>Enter Address</Form.Label>
            <Form.Control type="text" name='address'  onChange={handelInput} />
          </Form.Group>
    
           <Form.Group className="mb-3" controlId="formBasicEmailc">
            <Form.Label>Enter City</Form.Label>
            <Form.Control type="text" name='city'  onChange={handelInput} />
          </Form.Group>
    
           <Form.Group className="mb-3" controlId="formBasicEmaild">
            <Form.Label>Enter Contact Number</Form.Label>
            <Form.Control type="text" name='number'  onChange={handelInput}  />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicEmailck">
            <Form.Label>Enter Boarding</Form.Label>
            <Form.Control type="text" name='board'  onChange={handelInput} />
          </Form.Group>
    
           <Form.Group className="mb-3" controlId="formBasicEmailld">
            <Form.Label>Enter Distination </Form.Label>
            <Form.Control type="text" name='distination'  onChange={handelInput}  />
          </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmaile">
            <Form.Label>select Subject</Form.Label>
            <Form.Select aria-label="Default select example"  name='Subject'  onChange={handelInput}  >
              <option>Open this select menu Bussiness And Economy class</option>
              <option value="Bussiness Class">Bussiness Class</option>
              <option value="Economy Class">Economy Class</option>
    
        </Form.Select>
          </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" name='sdate'  onChange={handelInput} />
          </Form.Group>
    
           <Form.Group className="mb-3" controlId="formBasicEmailj">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" name='edate'  onChange={handelInput}  />
          </Form.Group>
    
           <Form.Group className="mb-3" controlId="formBasicPasswordj">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" name='price'  onChange={handelInput} />
          </Form.Group>
    {/* 
          <Form.Group className="mb-3" controlId="formBasicPasswordj">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password'  onChange={handelInput} />
          </Form.Group> */}
          <Button variant="primary" type="submit" onClick={handelSubmit}>
            Submit
          </Button>
      </Form> 
    </>
  )
}

export default Update;