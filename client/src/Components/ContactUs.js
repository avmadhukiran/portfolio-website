import React, { Component } from 'react';
const Row = (props) => (
<div className="row">
      <aside className="eigth columns footer-widgets">
        <div className="widget">
          <h4  style={{fontFamily:"Courier New"}}>{props.field}: 
            {props.value}
          </h4>
        </div>
      </aside>
</div>  
);
class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let keys = []
    Object.keys(resumeData.contact).forEach((key)=> keys.push(key))
    let fields =  keys.map((i)=><Row key={i} field={i} value={resumeData.contact[i]}></Row>)

    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              You can reach me at
              </p>
            </div>
          </div>
         {fields}
        </section>
        );
  }
}

export default ContactUs