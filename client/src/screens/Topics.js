import React from "react";
import Header from "../components/Header";
import { withRouter } from 'react-router-dom';

class Topics extends React.Component {
    render() {
        return (
            <div>
                <Header title='Topics' />
            </div>
        );
    }
}
export default withRouter(Topics);