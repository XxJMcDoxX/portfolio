import React from 'react';
// import Login from './Login'
import SignUp from './SignUp';
import Login from './Login';


class Home extends React.Component {
    render() {
        return (
            <div>
                <SignUp />
                <Login />
            </div>
        );
    }
}



export default Home; 