import React from 'react';
import { withRouter } from 'react-router-dom';
import "../components/Form.css"

class SignUpForm extends React.Component {
    state = {
        firstName: " ",
        lastName: " ",
        email: " ",
        passWord: " ",
    };



    render() {
        return (
            <div className="field">
                <input type='text' placeholder='First Name' name='firstName'></input>
                <input type='text' placeholder='Last Name' name='lastName'></input>
                <input type='email' placeholder='Email / Username' name='email'></input>
                <input type='password' placeholder='Password' name='passWord'></input>
                <button className="signUp" onClick={(event) => this.submitSignUp(event)}>Sign-Up</button>

            </div>
        );
    }
}

export default withRouter(SignUpForm);