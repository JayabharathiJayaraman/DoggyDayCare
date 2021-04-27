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
        <div className='photos'>
            <ul class = 'thumb'>
                {apiData.map(item =>
                <li key= {item.id} className='dogImages' >
                   <img className ='dogPhotos' src = {item.img} ></img><br></br>
                   Name: {item.name} | sex: {item.sex}
                </li>
                )}
            </ul>
        </div>
    )
}

export default FetchApiData;
