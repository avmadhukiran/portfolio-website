import React from 'react';
const Work =  (props) => {
return (  <div className="row work">
<div className="three columns header-col">
   <h1><span>Work</span></h1>
</div>

<div className="nine columns main-col">
  {
    props.resumeData.work && props.resumeData.work.map((item) => {
      return(
        <div className="row item" key={item.CompanyName}>
           <div className="twelve columns">
              <h3>{item.CompanyName}</h3>
              <p className="info">
              {item.specialization}
              <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
              <p>
              {item.Achievements}
              </p>
           </div>

        </div>

      )
    })
  }
</div> 

</div>  )
}

export default Work

