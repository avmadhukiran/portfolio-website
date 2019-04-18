import React from 'react';
const Education =  (props) => {
return (  <div className="row education">

<div className="three columns header-col">
   <h1><span>Education</span></h1>
</div>

<div className="nine columns main-col">
  {
    props.resumeData.education && props.resumeData.education.map((item)=>{
      return(
        <div className="row item" key={item.UniversityName}>
           <div className="twelve columns">
              <h3>{item.UniversityName}</h3>
              <p className="info">
              {item.specialization}
              <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
              <p>
              {item.Achievements}
              </p>
           </div>
        </div>
      )
    })
  }
</div>
</div>)
}

export default Education

