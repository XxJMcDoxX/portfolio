import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Topics from './screens/Topics';


import './index.css';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));


const Index = ( { pathname }) => 
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
 
 let pathname = window.location.pathname;
  
 ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

 window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});







