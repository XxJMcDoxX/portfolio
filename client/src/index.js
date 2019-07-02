import React from 'react';
import { render } from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Topics from './screens/Topics';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));






// / const Index = ( { pathname }) => 
//     <Router>
//       <div>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//       </div>
//     </Router>

//  let pathname = window.location.pathname;

//  ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

//  window.addEventListener('popstate', () => {
//   pathname = window.location.pathname;
// });







