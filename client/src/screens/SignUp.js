import React from 'react';
import { withRouter } from 'react-router-dom';
import './Form.css';

class SignUpForm extends React.Component {
    state = {
        firstName: " ",
        lastName: " ",
        email: " ",
        passWord: " ",
    };



    render() {
        return (
            <div className="SignUp">
                <input type='text' placeholder='First Name' name='firstName'></input>
                <input type='text' placeholder='Last Name' name='lastName'></input>
                <input type='email' placeholder='Email/Username' name='email'></input>
                <input type='text' placeholder='Password' name='passWord'></input>
                <button onClick={(event) => this.submitSignUp(event)}>Sign-Up</button>
            </div>
        );
    }
}

export default withRouter(SignUpForm);