import './aboutus.css';
import React from 'react';
import dog from '../DogImage/img2.jpg'

const AboutUs = () => {

    return (
        <div className='dogImage'>
            <p>Dog</p>
        <img src={dog} alt="img2" />
        </div>
    )
    };
    
    export default AboutUs;