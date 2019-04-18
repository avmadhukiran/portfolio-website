import React, { Component } from 'react';
import Repos from '../components/views/repos'
export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <Repos></Repos>
        </div>
      </div>
  </section>
        );
  }
}