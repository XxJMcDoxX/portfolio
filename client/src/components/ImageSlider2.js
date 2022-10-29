import React from 'react';
import ImageSlider from './ImageSlides';
import JF from '../screens/Images/JOEFISH.jpg';
import LG from '../screens/Images/letsgo.jpg';
import LH from '../screens/Images/lakeharris.jpg';


const App = () => {
    const slides = [
        {url:JF },
        {url: LG},
        {url: LH},
      
        
    ];

    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
        display: "center",
        
    }

    return (
        <div>
            
            <div style ={containerStyles}>
            <ImageSlider slides ={slides} />
            
            </div>
        </div>
    );
};


export default App;