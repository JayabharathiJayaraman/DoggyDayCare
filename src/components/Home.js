import './home.css';
import React from 'react';
import dog from '../DogImage/img1.jpg'

const Home = () => {

return (
    <div className='dogImage'>
        <p>Dog</p>
    <img src={dog} alt="img2" />
    </div>
)
};

export default Home;