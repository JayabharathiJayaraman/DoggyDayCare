import './photos.css';
import React, { useEffect, useState} from 'react';

function openLightbox() {
    console.log('openLightbox');
    }

function FetchApiData(){
    const [apiData, setApiData] = useState([])
    useEffect(async () => {
        const response= await fetch('https://api.jsonbin.io/b/6082737d56c62a0c0e8b2025');
        const data = await response.json();
        setApiData(data);
        console.log('data',data);
    }, [])
        
    return(
        
        <div className='photos'>
                {apiData.map((item, index )=> (
                <div key= {item.chipNumber} className='dogImages'> 
                   <img className = 'image__img' src = {item.img}></img>
                   <div className = 'image__overlay image__overlay--blur'>
                       <div className = 'image__title'>
                            Name: {item.name}</div>
                   <p className='image__des'>sex: {item.sex}</p>
                   </div>
                </div>                
                ))}
        </div>
    )
}

export default FetchApiData;
