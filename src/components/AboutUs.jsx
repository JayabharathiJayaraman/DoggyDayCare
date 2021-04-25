import './aboutus.css';
import React from 'react';
import dog from '../DogImage/img2.jpg'

const AboutUs = () => {

    return (
        <div className='dogImage'>
        <img src={dog} alt="img2" />
        <h2 className='aboutus'>AboutUs</h2>
        <h1>Your dog daycare in Järvastaden</h1>
        <p className='aboutus'><br></br>Do you want your fur lover to have pleasant days in a quiet environment, with pleasant forest walks with experienced and trained staff?<br></br><br></br>Trygga Hund's premises are located in Järvastaden Solna close to beautiful nature by Järvafältet<br></br><br></br>
            Our goal is a calm and stress-free environment with long pleasant forest walks and other activities for the dogs who want and need it<br></br><br></br>You should feel safe in leaving your beloved family member with us<br></br><br></br>The kindergarten's room is 170 sqm and the interior is homely with cozy sleeping accommodations<br></br><br></br>
            * The kindergarten is run by trained staff with a big heart for dogs<br></br>
            * All staff are trained in first aid for dogs.<br></br>
            * All staff are trained in CPR.<br></br>
            * We have all the insurance required.<br></br>
            * Approved by the county administrative board.<br></br>
            * Follows the Swedish Board of Agriculture & the County Administrative Board's rules.<br></br>
            <h2>FOREST WALKS</h2>
            Long lovely walks in the forest
            <h2>HARMONY</h2>
            We strive for a stress-free existence with peace and harmony in the groups
            <h2>JOY</h2>
            It should be fun to be in kindergarten!</p>
        </div>
    )
    };
    
    export default AboutUs;