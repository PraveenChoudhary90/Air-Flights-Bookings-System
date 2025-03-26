
import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from "../config";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
const MyBookings=()=>{
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

    const loadData=async()=>{
        const api = `${BASE_URL}/Customer/CustomerList/?docid=${localStorage.getItem("docid")}`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, []);


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
                <td>{key.sdate}</td>
                <td>{key.edate}</td>
                <td>{key.price}</td>
                <td>
                  <button onClick={()=>{navigate(`/delete/${key._id}`)}}>Delete</button>
                  </td>
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
          <th>Start Date</th>
          <th>End Date</th>
          <th> Price</th>
          <th>Delete</th>
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