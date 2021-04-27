import './contact.css';
import React from 'react';
import dog from '../DogImage/img3.jpg'

const Contact = () => {

return (
    <div>
    <div className = 'dogPhotoContact'>
    <img className = 'dogPhotoContact'src={dog}/>
    </div>
    <div className = 'row'>
        <div className='leftSide'>
        <h1>Contact</h1>
        </div>
        <div className='rightSide'>
        <h3 className='h3'>Doggy DayCare Stockholm AB</h3>
        <p>Fridensborgsvägen 49<br></br>
        (old ÖoB) Järvastaden<br></br>
        Solna<br></br>
        Org. Number 559253-8010<br></br><br></br>
        <i class="fas fa-phone-alt"></i> 070 4800789<br></br>
        <i class="fas fa-mobile-alt"></i>  072 1507051</p>
    </div>
    </div>
    </div>
)
};

export default Contact;