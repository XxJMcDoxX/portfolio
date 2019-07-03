import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Header from '../components/Header';


const Home = () => (
    <div>
        <Header />
        <br />
        <SignUp />
        <br />
        <Login />

    </div>
);

export default Home;