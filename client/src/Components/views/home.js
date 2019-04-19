import React, { Component } from 'react';
import Header from '../Header';
import About from '../About';
import Resume from '../Resume';
import ContactUs from '../ContactUs';
import Footer from '../Footer';
import resumeData from '../../resumeData';
import '../../css/repos.css';

export default class Home extends Component {
  render() {
    console.log("Calling Home")
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}
