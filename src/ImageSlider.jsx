import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ImageSlider = () => {
  return (
    <Carousel style={{marginTop:"10px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://holdenfg.org/wp-content/uploads/2022/04/CMHA_tree_planting_523-1-1920x1280.jpg"
          alt="First slide"
          height = "450px"
          
        />
        <Carousel.Caption>
          <h3 style={{color:"yellow"}}>We,the Expert Planter</h3>
          <p>Give us a chance to plant on behalf of you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://saudigazette.com.sa/uploads/images/2021/10/29/1884550.jpg"
          alt="Second slide"
          height = "450px"
        />
        <Carousel.Caption>
          <h3 style={{color:"yellow"}}>Together we can make a change</h3>
          <p>Collaborate with Companies,Customers and Others to plant at large scale.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hdwallpapers.in/download/green_trees_covered_forest_covered_by_fog_4k_hd_nature-HD.jpg"
          alt="Third slide"
          height = "450px"
        />
        <Carousel.Caption>
          <h3 style={{color:"yellow"}}>Globe is Green</h3>
          <p>Heal our Earth ,it just drink green color!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
