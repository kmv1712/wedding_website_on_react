import React from "react";
import Carousel from "react-bootstrap/Carousel";

import TextCarouselBox from "../TextCarouselBox";

import "./CarouselBox.css";
// import forestImg from '../../assets/forest.png';
// import dforestImg from '../../assets/dforest.png';

import onePhoto from "../../assets/img/IMG_5690_1.JPG";
import twoPhoto from "../../assets/img/IMG_5167.JPG";
import threePhoto from "../../assets/img/IMG_5690_1.JPG";
// import fourPhoto from '../../assets/img/IMG_5822.JPG';

const CarouselBox = ({ title, id }) => {
  return (
    <>
      <div id={id}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={onePhoto} alt="Forest" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={twoPhoto} alt="Forest" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={threePhoto} alt="Forest" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselBox;
