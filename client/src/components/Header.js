import React from 'react';
import './Header.css'
import { FaRegHeart } from "react-icons/fa";

const Header = ({ title }) => (
    <div className='Nav'>
        <FaRegHeart /> 
        <a className="active" href="/">Home</a>
        <a href="/Resume">Resume</a>
        <a href="/Hobbies">Hobbies</a>
        <h1>{title}</h1>
    </div>
);

export default Header;