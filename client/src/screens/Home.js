import React from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';


const Home = () => (
    <div>
        <Header />
        <br />
        <SignUp />
        <br />
        <Login />

    </div>
);

export default withRouter (Home);