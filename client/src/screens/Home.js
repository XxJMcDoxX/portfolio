import React from 'react';
// import Login from '../components/Login';
// import SignUp from '../components/SignUp';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';
import  PIC  from './Images/profile_pic.jpg';



const Home = () => {


    return (
        <div class >
            <Header />
            <br />

            <div class='text'>
                <h1>Hello! I am Jeremiah McDonald</h1>
                <div className = "ProPic">
                <img src ={PIC} alt= "profile pic"></img>
                </div>
                
            </div>



        </div>


    );

};

export default withRouter(Home);






