import React from 'react';
import './Header.css'

const Header = ({ title }) => (
    <div className='Nav'>
        <a className="active" href="/">Home</a>
        <a href="/Resume">Resume</a>
        <a href="/Hobbies">Hobbies</a>
        <h1>{title}</h1>
    </div>
);

export default Header;