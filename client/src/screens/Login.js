import React from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    state = {
        email: " ",
        passWord: " ",
    };

    validateForm() {
        return this.email > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    submitLogin(event) {
        event.preventDefault();

        axios
            .post("http://localhost:3001/login", {

                // name: this.email.current.value,
                // name: this.passWord.current.value,


            })
            .then(res => {
                console.log(res);
                // this.setState();
                // this.getLogin();
                if(res.data!=="Invalid login"){
                this.props.history.push("/me");
                }
            });
    }
    render() {
        return(
            <div>
                <input type='email' placeholder='Email/Username' name='email'></input>
                <input type='text' placeholder='Password' name='passWord'></input>
                <button onClick={(event) => this.submitLogin(event)}>Login</button>
            </div>
        );
    }





}


export default withRouter(Login);