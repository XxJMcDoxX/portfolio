import React from 'react';
import './Header.css'
import { FaRegHeart } from "react-icons/fa";

const Header = ({ title }) => (
    <div className='Nav'>
      
        <a href="/">Home</a>
        <a href="/Resume">Resume</a>
        <a href="/Hobbies">Hobbies</a>
        <h1>{title}</h1>
        <div className='heart'>
        <FaRegHeart /> 
        </div>
    </div>
);

export default Header;