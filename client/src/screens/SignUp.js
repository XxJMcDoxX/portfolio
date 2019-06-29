import React from 'react';
import Header from '../components/Header';

class SignUpForm extends React.Component {
    state = {
        firstName: " ",
        lastName: " ",
        email: " ",
        passWord: " ",
    };



    render(){
        return(
            <div>
                <Header title='Login' />
                <input type = 'text' placeholder='First Name' name='firstName'></input>
            </div>
        );
    }
}

export default withRouter(SignUpForm);