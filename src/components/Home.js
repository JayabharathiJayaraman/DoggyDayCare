import './home.css';
import React from 'react';
import dog from '../DogImage/img1.jpg'

const Home = () => {

return (
    <div >
        <h2 className = 'h3'>DOGS FILL OUR LIVES WITH JOY.</h2>
        <h1 className = 'h1'>IT’S TIME TO REPAY THE FAVOR</h1>
        <p>We’ve created a loving place with dogs’ wants and needs in mind. We offer <br></br>everything your furry family member requires with award-winning dog <br></br>daycare, overnight, weekend and holiday boarding, and spa services.  Use <br></br>our webcams to watch them play all day with their BFFFs (best furry<br></br> friends forever) in open and safe environments. Professionally trained <br></br>Dogtopians will love and care for your pup like they are our own. You can<br></br> trust your dog will come home overjoyed – and most likely overtired<br></br> – from all of the excitement of the day.</p>
        
    <img className='dogImage' src={dog} alt="img2" />
    </div>
)
};

export default Home;