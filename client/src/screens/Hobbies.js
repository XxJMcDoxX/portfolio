import React from 'react';
import Header from '../components/Header';
import FBG from '../screens/Images/FishingBground.jpg';
import WW from '../screens/Images/woodworking.jpg';
import W from '../screens/Images/wedling1.jpg';
import HD from '../screens/Images/motorcycle.jpg';
import JF from '../screens/Images/JOEFISH.jpg';
import LG from '../screens/Images/letsgo.jpg';
import LH from '../screens/Images/lakeharris.jpg';
import { withRouter } from 'react-router-dom';
import  '../screens/Images.css';
import { Parallax } from 'react-parallax';


const Hobbies = () => (
  <div>
    <Header />
    {/* <div className = "Hobbies">HOBBIES</div> */}
    <Parallax strength={600} speed={-10} bgImage={FBG}>
      <div className = 'content'>
        <div className ='Hobbies'>FISHING</div>
        <img className = 'Bass' src = {JF} alt = "Joe with Fish"></img>
        <img className = 'Bass' src = {LG} alt ='LETS GO!'></img>
        <img className = 'Bass' src = {LH} alt ='Lake Harris'></img>
      </div>
      
    </Parallax>
    <Parallax strength={600} bgImage = {WW}>
    <div className='content'>
      <div className='Hobbies'>WOODWORKING</div>
    </div>
    </Parallax>
    <Parallax strength={600} bgImage = {W}>
    <div className='content'>
      <div className='Hobbies'>WELDING</div>
    </div>
    </Parallax>
    <Parallax strength={600} bgImage = {HD}>
    <div className='content'>
      <div className='Hobbies'>RIDING</div>
    </div>
    </Parallax>
    <div className='conte'></div>
    
    
    {/* <img className = "Woodworking" src = {WW} alt="Woodworking"/>
    <img className = "Golf" src = {G} alt = "Golf"/>                 */}
  </div>
);

export default withRouter (Hobbies);