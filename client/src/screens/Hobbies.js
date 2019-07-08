import React from 'react';
import Header from '../components/Header';
import J from '../J.jpg';
import { withRouter } from 'react-router-dom';

const Hobbies = () => (
  <div>
    <Header />
    <h1>Hobbies</h1>
    <img src={J} alt="J" />
  </div>
);

export default withRouter (Hobbies);