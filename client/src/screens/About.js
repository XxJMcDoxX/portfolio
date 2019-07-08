import React from 'react';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';


const About = () => (
  <div>
    <Header />
    <h1>About</h1>
  </div>
);

export default withRouter (About);

