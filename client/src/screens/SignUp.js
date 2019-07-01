import React from 'react';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
    state = {
        firstName: " ",
        lastName: " ",
        email: " ",
        passWord: " ",
    };



    render() {
        return (
            <div>
                <Header title='Sign Up!' />
                <input type='text' placeholder='First Name' name='firstName'></input>
            </div>
        );
    }
}

export default withRouter(SignUpForm);