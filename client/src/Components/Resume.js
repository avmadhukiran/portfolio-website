import React, { Component } from 'react';
import Skills from './Resume/skills'
import Work from './Resume/work'
import Education from './Resume/education'
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <Education resumeData = {resumeData}></Education>
          <Work resumeData={resumeData}></Work>
          <div className="row">
          
          <div className="three columns header-col">
               <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns header-col">
          <div className="three columns header-col">
          <Skills resumeData={resumeData} skillsDescription={"WebDevelopment"}></Skills>
            </div>
            <div className="three columns header-col">
          <Skills resumeData={resumeData} skillsDescription={"DataBases"}></Skills>
            </div>
            <div className="three columns header-col">
          <Skills resumeData={resumeData} skillsDescription={"Tools"}></Skills>
            </div>
            <div className="three columns header-col">
          <Skills resumeData={resumeData} skillsDescription={"Languages"}></Skills>
            </div>
            </div>
            </div>
        </section>
    );
  }
}