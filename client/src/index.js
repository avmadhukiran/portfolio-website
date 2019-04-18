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
import repos from './components/views/repos.js';

ReactDOM.render(
  <Router>
  <div>
    {/* <Link to="/">Home</Link>{' '}
    <Link to="/repos">repos</Link>{' '}
    <Link to="/contact">Contact</Link>
     */}
     {/* //TODO: linking various pages */}
     <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="/" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> 
         </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/repos" component={repos} />
      <Route
        path="/contact"
        render={() => <h1>Contact Us</h1>} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </div>
</Router>,
    document.querySelector('#App')
  );
