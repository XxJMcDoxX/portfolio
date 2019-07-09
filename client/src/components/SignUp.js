import React from 'react';
import { withRouter } from 'react-router-dom';
import "../components/Form.css"
import axios from "axios";

class SignUpForm extends React.Component {
    state = {
        firstName: " ",
        lastName: " ",
        email: " ",
        passWord: " ",
    };

    getUser() {
        axios.get("http://localhost:3001/users").then(res => {
            const user = res.data;
            this.setState({ user });
        });
    }

    componentDidMount() {
        //this.getUser();
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitUser() {
        console.log(this.state);
        axios
            .post("http://localhost:3001/users", {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              passWord: this.state.passWord


            })
            .then(res => {
                this.setState({ newUser: "" });
                this.getUser();
            });
    }

    render() {
        return (
            <div className="field">
                <input
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                />

                <input
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                />

                <input
                    type='email'
                    placeholder='Email / Username'
                    name='email'
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />

                <input
                    type='password'
                    placeholder='Password'
                    name='passWord'
                    value={this.state.passWord}
                    onChange={e => this.change(e)}
                />

                <button
                    className="signUp"
                    onClick={() => this.submitUser()}>
                    Sign-Up
                </button>

            </div>
        );
    }
}

export default withRouter(SignUpForm);