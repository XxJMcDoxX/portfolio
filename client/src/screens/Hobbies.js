import React from 'react';
import Header from '../components/Header';
import Images from '../components/Images';
import { withRouter } from 'react-router-dom';
import '../screens/Images.css';



const Hobbies = () => (
  <div>
    <Header />
    <Images />
    

               
  </div>
);


export default withRouter(Hobbies);