import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/views/home.js';
import Portfolio from './components/Portfolio.js'

ReactDOM.render(
  <Router>
  <div>
    {/* <Link to="/">Home</Link>{' '}
    <Link to="/contact">Contact</Link>
     */}
     {/* //TODO: linking various pages */}
     <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="/" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><Link to="/">Home</Link></li>
               <li><Link to="/repos">WORKS</Link>{' '}</li>
               <li><Link to="/">Contact</Link></li>
            </ul> 
         </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/repos" component={Portfolio} />
      <Route
        path="/contact"
        render={() => <h1>Contact Us</h1>} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </div>
</Router>,
    document.querySelector('#App')
  );
