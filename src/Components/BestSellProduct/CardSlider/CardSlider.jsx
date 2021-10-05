import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from '../../../image/items/3-1.jpg';
import image2 from '../../../image/items/3-2.jpg'
import image3 from '../../../image/items/3-3.jpg'
const CardSlider = () => {

    // const ControlledCarousel = ()=> {
    //     const [index, setIndex] = useState(0);
      
    //     const handleSelect = (selectedIndex, e) => {
    //       setIndex(selectedIndex);
    //     };
      

  return (
    <div>
      {/* <Carousel className="container" >
        <Carousel.Item   prevLabel="Previous">
          <img className="d-block w-100 image" src={image1} alt="First slide" />          
        </Carousel.Item>
        <Carousel.Item prevLabel="Previous">
          <img className="d-block w-100 image" src={image2} alt="First slide" />          
        </Carousel.Item>
        <Carousel.Item prevLabel="Previous">
          <img className="d-block w-100 image" src={image3} alt="First slide" />          
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
};

export default CardSlider;
