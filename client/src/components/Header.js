import React from 'react';

const Header = ({ title }) => (
    <div>
        <a href="/">Home</a>
        <a href="/">Topics</a>
        <a href="/">About</a>
        <h1>{title}</h1>
    </div>
);

export default Header;