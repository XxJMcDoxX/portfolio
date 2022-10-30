import React from 'react';
// import Login from '../components/Login';
// import SignUp from '../components/SignUp';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';
import  PIC  from './Images/profile_pic.jpg';
import GB from './Images/golf.jpg';
import '../screens/Home.css'
import { Parallax } from 'react-parallax';

// const ImageStyle = {
//     borderRadius:'10% 45%',
//     justifyContent: 'center',
//     marginLeft:'15%',
//     display: "flex",
//     justifyContent: "center",
// };

const Home = () => {


    return (
        <Parallax strength={100} speed={-10} bgImage={GB}>
        <div class >
            <Header />
            <br />

            <div class='text'>
                <h1>Hello! I am Jeremiah McDonald</h1>
                <h2>Welcome to my portfolio page.</h2>
                <div className='ImageStyle'>
                <img src ={PIC} alt= "profile pic"></img>
                </div>
                
            </div>



        </div>

        </Parallax>
    );

};

export default withRouter(Home);






