import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Topics from './screens/Topics';
import './index.css';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';



const App = () => (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
  
  ReactDOM.render(<App />, document.getElementById('root'));







