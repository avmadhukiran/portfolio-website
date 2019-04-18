import React from 'react';
const Skills =  (props) => {
    
return (<div className="row skill">
            <div className="nine columns main-col">
               <p >
               {props.skillsDescription}
               </p>
   				<div className="bars">
   				<ul className="skills">
                {
                  props.resumeData.skills && props.resumeData.skills.map((item) => {
                    const pStyle = {
                        width: item.skillLevel+"px"
                      };
                    return(
                        <div className="progress-bar" key={item.skillname}>
                        {props.skillsDescription===item.skillsDescription?<li>
                            <span className={`bar-expand progress-bar`} style={pStyle}>
                            </span><em>{item.skillname}</em>
                            </li>:""}
                      
                      </div>
                    )
                  })
                }
   				</ul>
   				</div>

   			</div>

         </div>)
}

export default Skills

