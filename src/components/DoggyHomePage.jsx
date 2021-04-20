import React, {useState, useEffect} from 'react';
const TestButton = () => {
    console.log("test button click")
    useEffect(() => {
        console.log("useeffect []");
    }, [])
    return(
        <div>
        <div class="navbar">
        <a href="#utbildning">Home</a>
        <a href="#arbetslivserfarenhet">AboutUs</a>
        <a href="#arbetslivserfarenhet">Contact</a>
        </div>
        <div class="title">
            <h1>Dog DayCare</h1>
        </div>
        </div>
    )
}

export default TestButton;