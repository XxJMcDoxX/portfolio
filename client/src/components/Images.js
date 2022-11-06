import React from 'react';
import FBG from '../screens/Images/FishingBground.jpg';
import WW from '../screens/Images/woodworking.jpg';
import W from '../screens/Images/wedling1.jpg';
import HD from '../screens/Images/motorcycle.jpg';
import '../screens/Images.css';
import { Parallax } from 'react-parallax';
import ImageSlider from './ImageSlider';
import ImageSliderFish from './ImageSlider2';


const Images = () => (
   
    
    <div>
        <Parallax strength={200} speed={-10} bgImage={FBG}>
            <div className='content'>
                 <div className='Hobbies'>FISHING</div>
                <ImageSliderFish></ImageSliderFish>
                
            </div>

        </Parallax>

        
        <Parallax strength={200} speed={-10} bgImage={WW}>
            <div className='content'>
                <div className='Hobbies'>WOODWORKING</div>
                <ImageSlider></ImageSlider>
                
            </div>
        </Parallax>
        <Parallax strength={200} speed={-10} bgImage={W}>
            <div className='content'>
                <div className='Hobbies'>WELDING</div>
            </div>
        </Parallax>
        <Parallax strength={200} speed={-10} bgImage={HD}>
            <div className='content'>
                <div className='Hobbies'>Motorcycle</div>
            </div>
        </Parallax>
       
        </div>
   

);

export default Images;
