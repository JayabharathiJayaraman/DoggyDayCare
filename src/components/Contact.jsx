import './contact.css';
import React from 'react';
import dog from '../DogImage/img3.jpg'

const Contact = () => {

return (
    <div className='dogImage'>
        <img className = 'dogPhoto'src={dog}/>
        <h1>Contact</h1>
        <h3><br></br>Safe dog in Stockholm AB</h3>
        <p>Fridensborgsvägen 49<br></br>
        (old ÖoB) Järvastaden<br></br>
        Solna<br></br>
        Org. Number 559253-8010<br></br><br></br>
        <i class="fas fa-phone-alt"></i> 070 4800789<br></br>
        <i class="fas fa-mobile-alt"></i>  072 1507051</p>
    </div>
)
};

export default Contact;