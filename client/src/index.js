import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Hobbies from './screens/Hobbies';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import './App.css';


const Index = ( { pathname }) => 
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={About} />
        <Route path="/hobbies" component={Hobbies} />
      </div>
    </Router>

 let pathname = window.location.pathname;

 ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

 window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});







