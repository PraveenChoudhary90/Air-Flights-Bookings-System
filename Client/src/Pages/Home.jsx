import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <> <h1 style={{textAlign:"center"}}>Welcome To Air Bookings System</h1>
    

     <Carousel>
      <Carousel.Item>
        <img src="./air2.jpg" alt="" width="1000px" height="500px" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                <img src="./air3.jpg" alt="" width="1000px" height="500px" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
              <img src="./air4.jpg" alt="" width="1000px" height="500px" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
     </>
  )
}

export default Home