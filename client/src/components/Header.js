import React from 'react';
import './Header.css'


const Header = ({ title }) => (
    <div className='Nav'>
      
        <a className = 'active'href="/">Home</a>
        <a className= 'active'href="/Resume">Resume</a>
        <a className = 'active'href="/Hobbies">Hobbies</a>
        
        
        
        
    </div>
);

export default Header;