import './home.css';
import React from 'react';
import dog from '../DogImage/img4.jpg'
import playDog from '../DogImage/img5.jpg'
import doggy from '../DogImage/img6.jpg'

const Home = () => {

return (
    <div className = 'row'>
        <div className = 'leftSide'>
        <h2 className = 'heading7'>WELCOME TO DOGGY'S</h2>
        <h2 className = 'heading4'>DOG DAYCARE</h2>
        <p className = 'doggyParagarph'>At Doggy, we’re a unique breed. We love and care for your pup like they are our own. We realize that your dog is a furry member of your family and they deserve the highest level of quality care. Similar to a child’s daycare, we provide recurring daycare for your dog, providing safe socialization, education and exercise. We firmly believe that every dog deserves daycare! We will provide progress reports through report cards and conversations with you as a caring pet parent. Besides providing a safe environment for your pup, Doggy is known for treating your pup to their Most Exciting Day Ever!</p>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <img className='playDogImage' src={playDog}/>
        <br></br><br></br><br></br>
        <h2 className = 'heading2'>DOGS FILL OUR LIVES WITH JOY.</h2>
        <h1 className = 'heading1'>IT’S TIME TO REPAY THE FAVOR</h1>
        <p className = 'paragarph'>We’ve created a loving place with dogs’ wants and needs in mind. We offer everything your furry family member requires with award-winning dog daycare, overnight, weekend and holiday boarding, and spa services.  Use our webcams to watch them play all day with their BFFFs (best furry friends forever) in open and safe environments. Professionally trained Doggy will love and care for your pup like they are our own. You can trust your dog will come home overjoyed – and most likely overtired – from all of the excitement of the day.</p>
       <br></br><br></br><br></br><br></br>
        <h3 className = 'heading5'>THE BENEFITS</h3>
            <h1 className = 'heading6'>DOGGY'S DAYCARE</h1> 
            <p className='benefitsPara'>Wanting to be social is deeply instinctual for dogs; that’s why we integrate open play with others into their daily routine. Regular playtime with other dogs has numerous benefits, including:</p><br></br>
              <ul className='benefitsList'>
                <li>Being more comfortable around dogs and people</li>
                <li>Staying physically fit. Pet obesity is a growing concern; according to the Association for Pet Obesity Prevention, more than 50 percent of dogs are obese</li>
                <li>Learning positive behavior, leading to less doggie mischief at home</li>
                <li>Finding their BFFF (Best Furry Friend Forever)</li><br></br><br></br><br></br><br></br><br></br>
                </ul>  
        </div>
        <div className = 'rightSide'>
         <div>
        <div>
            <img className='doggyImage' src={doggy}/>
            </div>
            <p className='imageText'>TRUSTED SUPPORT</p>
        </div>
        <h3 className = 'play'>PLAY</h3>
            <h1 className = 'safe'>SAFE!</h1>  
            <p className = 'safeDes'>We chase the absolute highest standards of safety in everything we do! Our goal is to make sure all pups in our care are happy, safe and comfortable.</p>   
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <img className='homeDogImage' src={dog}/>
        </div>
    </div>
)
};

export default Home;
