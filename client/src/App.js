
import ImageSlider from './components/ImageSlider';
import React from 'react';



const App = () => {
    const slides = [
        {url: "https://images.pexels.com/photos/3716681/pexels-photo-3716681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "wood1"},
        {url: "https://images.pexels.com/photos/5089167/pexels-photo-5089167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "wood2"},
        {url: "https://images.pexels.com/photos/6790088/pexels-photo-6790088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "wood3"},
    ];
    return (
        <div>
            TEST!
            <ImageSlider slides ={slides}></ImageSlider>
        </div>
    );
};

export default App;