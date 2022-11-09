import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { ImGithub } from "react-icons/im";
import { BsSnapchat } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const SocialStyle = {
    display: "flex",
    position: "fixed",
    bottom: "0",
    width: "100%",
    justifyContent: "center",
    borderBottom: "Solid",
    color: "#C1D9DB",
    
};

const SocialNav = {
    color: "#C1D9DB",
    paddingTop:"0px",
    margin:"5px 10px",
    
    justifyContent: "center",
    display: "flex",
};





const Footer = () => {


    return (

        <div className='container-social' style = {SocialStyle} >
            
            <a href = "https://www.facebook.com/jeremiah.mcdonald.92" style = {SocialNav}  target="_blank" rel="noopener noreferrer">
            <IoLogoFacebook size = "20" ></IoLogoFacebook>
            </a>
            <a href = "https://github.com/XxJMcDoxX" style = {SocialNav}  target="_blank" rel="noopener noreferrer">
            <ImGithub size = "20"></ImGithub>
            </a>
            <a href = "https://www.linkedin.com/in/jeremiah-mcdonald-825aba7a" style = {SocialNav} target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size = "20"></AiOutlineLinkedin>
            </a>
            <a href = "https://www.snapchat.com/add/grndpounder?share_id=k3DM5fVs1ZY&locale=en-US&fbclid=IwAR0kRMHNJK5VarwdXkfvZzRrOuiXst6O7SkGOEOi5ntMk-rofjJozYRhmpY" style = {SocialNav} target="_blank" rel="noopener noreferrer">
            <BsSnapchat size = "20"></BsSnapchat>
      
           
            
            </a>
            <br></br>
            <div style={SocialNav}>©2022</div>
            <div style={SocialNav}>Anna,TX</div>
            <div style={SocialNav}>jeremiah.mcdonalf@gmail.com</div>

        </div>

    );

};

export default Footer;