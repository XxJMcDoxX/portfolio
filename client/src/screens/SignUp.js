import React from 'react';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';
import './signup.css';

class SignUpForm extends React.Component {
    state = {
        firstName: " ",
        lastName: " ",
        email: " ",
        passWord: " ",
    };



    render() {
        return (
            <div class="SignUp">
                <Header title='Sign Up!' />
                <input type='text' placeholder='First Name' name='firstName'></input>
                <input type='text' placeholder='Last Name' name='lastName'></input>
                <input type='email' placeholder='Email/Username' name='email'></input>
                <input type='text' placeholder='Password' name='passWord'></input>
            </div>
        );
    }
}

export default withRouter(SignUpForm);