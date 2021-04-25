import './photos.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';

function FetchApiData(){
    const [apiData, setApiData] = useState([])
    useEffect(() => {
       axios.get('https://api.jsonbin.io/b/6082737d56c62a0c0e8b2025')
        .then(res => {
            console.log('response',res);
            setApiData(res.data)
            console.log('data',res.data);
        })
        .catch(err => {
            console.log('err',err);
        })
    }, [])
    return(
        <div className='photos'>
            <ul>
                {apiData.map(item =>
                <li key= {item.id} >
                   <img className ='dogPhotos' src = {item.img} ></img><br></br>
                   Name: {item.name} | sex: {item.sex}
                </li>
                )}
            </ul>
        </div>
    )
}

export default FetchApiData;