
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  console.log(email, password)
     const handelSubmit = async(e)=>{
        e.preventDefault();
   const api = `${BASE_URL}/Customer/Login`;
     try {
        const response = await axios.post(api, {email:email, password:password })
        console.log(response.data);
         localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("docid", response.data._id);
          
          alert("You are Succesfully login!");
        navigate("/dashboard")
     } catch (error) {
        toast.error(error.response.data.msg)
        
     }



     }


    return(
        <>
        <div id="myfrom">
        <h1 style={{textAlign:"center"}}> Login Page</h1>
           <Form style={{margin:"auto", width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email </Form.Label>
        <Form.Control type="email"  name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
     <ToastContainer />

        
        </>
    )
}

export default Login;