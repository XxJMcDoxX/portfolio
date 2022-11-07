import React from 'react';
// import Login from '../components/Login';
// import SignUp from '../components/SignUp';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';
import PIC from './Images/profile_pic.jpg';
import '../screens/Home.css'



const Home = () => {

    return (

        <div className='Container-Home' >
        <Header />,


        <div className='text'>
            <h1>I'm Jeremiah McDonald</h1>
            <h2>Data Analyst / Web Developer</h2>
            <div className='ImageStyle'>
                <img src={PIC} alt="profile pic"></img>
            </div>
        </div>
        <Footer />
        </div>
        


    );

};

export default withRouter(Home);






