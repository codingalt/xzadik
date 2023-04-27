import React, { useEffect, useState } from 'react';
import './project-grid.css';
import emptyProject from '../../images/empty.png';

const ProjectGrid = ({projects,empty}) => {

  // useEffect(()=>{
  //   if(projects){
  //     setEmpty(false);
  //   }else{
  //     setEmpty(true);
  //   }
  // },[projects]);

  return (

    <>
   
      
    <div className='project-grid container'>
        <div className="image-container">
          {
            projects?.map((item,key)=>{
              return <img key={item._id} src={item.projectImg?.url} alt={item.workType} />
            })
          }
      
        </div>
    </div>

    {
      empty &&
      <div className='no-project'>
      <div className="np-img">
        <img src={emptyProject} alt="" />
      </div>
      <h4>Sorry, no results were found.</h4>
      <span>Maybe check your spelling or try searching for something else?</span>
    </div>
    }
    </>
  )
}

export default ProjectGrid