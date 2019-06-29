import React from "react";
import Header from "../components/Header";
import { withRouter } from 'react-router-dom';

class About extends React.Component {

    render() {
        return (
            <div>
                <Header title='About' />
            </div>
        );
    }

}

export default withRouter(About);

