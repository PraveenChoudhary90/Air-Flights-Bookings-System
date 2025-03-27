
import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from "../config";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
const MyBookings=()=>{
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

    const handelUpdate =(id)=>{
      navigate(`/update/${id}`);

    }

    const loadData=async()=>{
        const api = `${BASE_URL}/Admin/CustomerList/?docid=${localStorage.getItem("docid")}`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, []);



    const handelDelete = async(id)=>{
      const api = `${BASE_URL}/Customer/Deletedata`;
      try {
        const response = await axios.post(api, {id:id});
          alert("Data is deleted Successfully");
          loadData();
      } catch (error) {
        console.log(error);
        
      }

    }


    const ans= mydata.map((key)=>{
         return(
            <>
              <tr>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.address}</td>
                <td>{key.city}</td>
                <td>{key.number}</td>
                <td>{key.Subject}</td>
                <td>{key.board}</td>
                <td>{key.distination}</td>
                <td>{key.sdate}</td>
                <td>{key.edate}</td>
                <td>{key.price}</td>
                  <td onClick={()=>handelDelete(key._id)} style={{cursor:"pointer"}}>Delete</td>
                  <td onClick={()=>handelUpdate(key._id)} style={{cursor:"pointer"}}>Update</td>
              </tr>
            
            </>
         )
    })


    return(
        <>
          <h1> All Bookings List</h1>
          <hr />
          <Table striped bordered hover>
      <thead>
        <tr>
          <th> Customer Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
          <th>Number</th>
          <th>Subject</th>
          <th>Boarding</th>
          <th>Distination</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th> Price</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
         {ans}
        </tbody>
        </Table>

        
        </>
    )
}

export default MyBookings;