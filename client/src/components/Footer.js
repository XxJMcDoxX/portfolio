import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { ImGithub } from "react-icons/im";
import { BsSnapchat } from "react-icons/bs";
// import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";

const SocialStyle = {
    display: "flex",
    position: "fixed",
    bottom: "0",
    width: "100%",
    justifyContent: "center",
    borderBottom: "Solid",
    color: "aqua",
};

const SocialNav = {
    color:"white",
    
};






const Footer = () => {


    return (

        <div class='container-social' style = {SocialStyle} >
            <a href = "https://www.facebook.com/jeremiah.mcdonald.92" style = {SocialNav}  target="_blank" rel="noopener noreferrer">
            <IoLogoFacebook size = "35" ></IoLogoFacebook>
            </a>
            {/* <a href = "https://www.google.com/">
            <SlSocialInstagram></SlSocialInstagram>
            </a> */}
            <a href = "https://github.com/XxJMcDoxX" style = {SocialNav}  target="_blank" rel="noopener noreferrer">
            <ImGithub size = "35"></ImGithub>
            </a>
            <a href = "https://www.linkedin.com/in/jeremiah-mcdonald-825aba7a" style = {SocialNav} target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size = "35"></AiOutlineLinkedin>
            </a>
            <a href = "https://www.snapchat.com/add/grndpounder?share_id=k3DM5fVs1ZY&locale=en-US&fbclid=IwAR0kRMHNJK5VarwdXkfvZzRrOuiXst6O7SkGOEOi5ntMk-rofjJozYRhmpY" style = {SocialNav} target="_blank" rel="noopener noreferrer">
            <BsSnapchat size = "35"></BsSnapchat>
            </a>
            

        </div>

    );

};

export default Footer;