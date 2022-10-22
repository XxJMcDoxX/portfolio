import React from 'react';
import ImageSlider from './ImageSlides';
import CFB from '../screens/Images/CFB_SIGN.jpg';


const App = () => {
    const slides = [
        {url: CFB},
        {url: "https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "wood1"},
        {url: "https://images.pexels.com/photos/5089167/pexels-photo-5089167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "wood2"},
        {url: "https://images.pexels.com/photos/6790088/pexels-photo-6790088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "wood3"},
        {url: "https://images.pexels.com/photos/313773/pexels-photo-313773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  title: "wood4"},
        
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


