import './photos.css';
import React, { useEffect, useState} from 'react';

function FetchApiData(){
    const [apiData, setApiData] = useState([])
    useEffect(async () => {
        const response= await fetch('https://api.jsonbin.io/b/6082737d56c62a0c0e8b2025');
        const data = await response.json();
        setApiData(data);
        console.log('data',data);
    }, [])
        
    return(
        <div>
        <div className='pageTitle'>
            <p>Our Happy Customers</p>
            </div>
        <div className='photos'>
                {apiData.map((item)=> (
                <div key= {item.chipNumber} className='dogImages'> 
                   <img className = 'image__img' src = {item.img}></img>
                   <div className = 'image__overlay image__overlay--blur'>
                       <div className = 'image__title'>
                            Name: {item.name}</div>
                   <p className='image__des'>
                       Age: {item.age}<br></br>
                       Sex: {item.sex}<br></br>
                       Breed: {item.breed}<br></br>
                       Owner: {item.owner.name} {item.owner.lastName}<br></br>
                       PhNum: {item.owner.phoneNumber}
                   </p>
                   </div>
                </div>                
                ))}
        </div>
        </div>
    )
}

export default FetchApiData;
