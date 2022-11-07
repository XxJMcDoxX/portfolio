import React from 'react';
import Header from '../components/Header';
import '../screens/About.css';
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';





const About = () => (
  <div className='container-About'>
    <Header />
   
    <h1>Jeremiah McDonald</h1>;
    <h2>352-446-8156 / Jeremiah.mcdonalf@gmail.com</h2>
    <h3>PROFESSIONAL SUMMARY</h3>
    <p1>United States Army Veteran leveraging 10+ years of proven experience within the Intelligence Community. Specializes in Geographic Information Systems Analysis and securing databases in domestic and international affairs. Adept at leading teams of 15 in a dynamic, fast-paced environment. Possess a comprehensive background in diagnosing, troubleshooting, and resolving complex system application issues while identifying, analyzing, and fixing bugs that impede interface performance. Skilled at creating, managing, and troubleshooting ESRI services for maps, features class, and geoprocessing using ArcGIS server and related.</p1>
    <h3>SKILLS</h3>
    <p1>CSS, JavaScript (JS), Bootstrap, ES6, AngularJS, ReactJS, Redux, Java, MySQL2, Node, and Express</p1>
    <h3>EDUCATION & CERTIFICATIONS</h3>
    <p1>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY WITH AN ADVANCED SOFTWARE DEVELOPER CERTIFICATE</p1>
    <p2>Woz U Online Certification for webdevelopment (JavaScript)</p2>
    <h3>WORK HISTORY</h3>
    <h5><a href="https://www.cfb-inc.com/mapping-gis/" target="_blank" rel="noopener noreferrer">Clymer Farner Barley ans Assoc.</a></h5>
    <h5>GIS ANALYST</h5>
    <h6>JAN2021 - AUG2022</h6>
    <p3>	Improved productivity through automating processes and managing 80+ Classes in 25+ databases resulting in a seamless transition  </p3>
    <p3>	Manage and Digitize both Survey and Engineering CAD data to function in Arc GIS Portal Application. </p3>
    <p3>	Creates many time-saving models through Model Builder and Python Scripting in order to complete daily routines in a more orderly fashion. </p3>
    <h5><a href="https://www.cfb-inc.com/surveying/" target="_blank" rel="noopener noreferrer">Clymer Farner Barley ans Assoc.</a></h5>
    <h5>SURVEY TECHNICIAN / PARTY CHIEF</h5>
    <h5>May 2017 - DEC 2020</h5>
    <p3>	Certified Survey technician level 1</p3>
    <p3>	Lead on numerous survey jobs that resulted in on-time completion with 0 loss.</p3>
    <p3>	Maintained all equipment used on a daily business for better operation. </p3>
    <h5><a href="https://www.goarmy.com/careers-and-jobs/career-match/signal-intelligence/languages-code/35f-intelligence-analyst.html" target="_blank" rel="noopener noreferrer">US ARMY</a></h5>
    <h5>INTELLIGENCE ANALYST</h5>
    <h5>June 2010 - 2013</h5>
    <p3>	Army Accommodation Award, Army Achievement Medal</p3>
    <p3>	Lead multiple mission engagements while serving in Operation Enduring Freedom, Afghanistan in 2010</p3>
    <p3>	Solely responsible for building intelligence preparation presentations that went from the ground soldier to the highest-ranking officer.</p3>
    <p3>	Gave information guidance of the battleground to provide information and aid in order to effectively engage the enemy.</p3>
    <div className='nodisplay'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam. Fermentum odio eu feugiat pretium nibh ipsum. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Congue eu consequat ac felis donec et odio pellentesque diam. Amet dictum sit amet justo donec. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Proin libero nunc consequat interdum. Sociis natoque penatibus et magnis dis parturient. Et tortor consequat id porta nibh venenatis cras. Tristique senectus et netus et malesuada fames. Eu feugiat pretium nibh ipsum consequat nisl vel. Nulla malesuada pellentesque elit eget gravida cum. Dictumst quisque sagittis purus sit. Enim sed faucibus turpis in eu mi bibendum neque egestas.
      </div>
    <Footer />
  </div>





);




export default withRouter(About);