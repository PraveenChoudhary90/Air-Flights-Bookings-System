import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
function Booking() {
  const navigate = useNavigate();
  return (
    <>
    <div id="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="air3.jpg" />
        <Card.Body>
          <Card.Title>Indigo Filght</Card.Title>
          <Card.Title>Flight Number:10121</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            expedita sunt, sint ipsa, cum provident nesciunt molestiae alias,
            vel a mollitia in quia soluta cumque sed? Asperiores quidem deserunt
            error.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/registraction");
            }}
          >
            Book Your Flight
          </Button>
        </Card.Body>
      </Card>

       <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="air2.jpg" />
        <Card.Body>
          <Card.Title>Indigo Filght</Card.Title>
          <Card.Title>Flight Number:11291</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            expedita sunt, sint ipsa, cum provident nesciunt molestiae alias,
            vel a mollitia in quia soluta cumque sed? Asperiores quidem deserunt
            error.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/registraction");
            }}
          >
            Book Your Flight
          </Button>
        </Card.Body>
      </Card>

       <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="air3.jpg" />
        <Card.Body>
          <Card.Title>Indigo Filght</Card.Title>
          <Card.Title>Flight Number:18921</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            expedita sunt, sint ipsa, cum provident nesciunt molestiae alias,
            vel a mollitia in quia soluta cumque sed? Asperiores quidem deserunt
            error.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/registraction");
            }}
          >
            Book Your Flight
          </Button>
        </Card.Body>
      </Card>

       <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="air4.jpg" />
        <Card.Body>
          <Card.Title>Indigo Filght</Card.Title>
          <Card.Title>Flight Number:6721</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            expedita sunt, sint ipsa, cum provident nesciunt molestiae alias,
            vel a mollitia in quia soluta cumque sed? Asperiores quidem deserunt
            error.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/registraction");
            }}
          >
            Book Your Flight
          </Button>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}

export default Booking;
