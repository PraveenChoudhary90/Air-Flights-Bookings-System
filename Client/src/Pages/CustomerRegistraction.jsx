

// import React from 'react'

// function Registraction() {
//   return (
//     <><h1>Registraction</h1>
//         </>
//   )
// }

// export default Registraction

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"

const CustomerRegistraction = ()=>{

      const [show, setShow] = useState(false);
      const [input , setInput] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   const handelInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
   }


   const handelSubmit = async(e)=>{
    e.preventDefault();
    const api = `${BASE_URL}/Customer/CustomerRegistred`;
    try {
        const response = await axios.post(api, input)
        console.log(response.data)
        toast.success(response.data.msg);
        setShow(false);
    } catch (error) {
        console.log(error)        
    }
   }


    return(
        <>
         <Button variant="primary" style={{marginLeft:"400px"}} onClick={handleShow}>
       Customer Registered here 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Flight Booking Registraction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
               <Form>
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

      <Form.Group className="mb-3" controlId="formBasicPasswordj">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'  onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
  </Form> 

            
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
     <ToastContainer />


        </>
    )
}

export default CustomerRegistraction;


