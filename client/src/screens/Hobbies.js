import React from 'react';
import Header from '../components/Header';
import Images from '../components/Images';
import Footer from '../components/Footer'
import { withRouter } from 'react-router-dom';
import '../screens/Images.css';


const Hobbies = () => {
 return (
  
  <div className='container-Hobbies'>
    
    <Header />
    
    
    <Images></Images>  
    <Footer />
   
             
  </div>


);
 };

export default withRouter(Hobbies);