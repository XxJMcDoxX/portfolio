import React from 'react';
import './Header.css'


const Header = ({ title }) => (
    <div className='Nav'>
      
        <a class = 'active'href="/">Home</a>
        <a class = 'active'href="/Resume">Resume</a>
        <a class = 'active'href="/Hobbies">Hobbies</a>
        
        
        
        
    </div>
);

export default Header;