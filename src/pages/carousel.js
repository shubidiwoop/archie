import React , { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1600x600/?poor"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Seamless Donation</h3>
            <p>Integrated with cutting edge blockchain tools.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1600x600/?education"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>On chain verification</h3>
            <p>Transparent payments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1600x600/?food"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Cutting middleman</h3>
            <p>
              Secure, automated gateways
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;