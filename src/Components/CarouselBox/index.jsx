import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import TextCarouselBox from '../TextCarouselBox';

import './CarouselBox.css';
import forestImg from '../../assets/forest.png';
import dforestImg from '../../assets/dforest.png';

// import onePhoto from '../../assets/img/IMG_5162.JPG';
// import twoPhoto from '../../assets/img/IMG_5167.JPG';
// import threePhoto from '../../assets/img/IMG_5690.JPG';
// import fourPhoto from '../../assets/img/IMG_5822.JPG';


const CarouselBox = ({ title, id }) => {
        return (
            <div id={id}>   
            <Carousel>                 
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src={ forestImg }
                        alt="Forest"
                    /> */}
                    <Carousel.Caption>                        
                        <TextCarouselBox/>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        )
    };

export default CarouselBox;