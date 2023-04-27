import React, { useEffect, useState } from 'react'
import './sort-menu.css'
import * as cg from 'react-icons/cg'
import API from '../../axios';

const SortMenu = ({setSortMenu,setProjects}) => {
  const [sort, setSort] = useState('');
  const sortProjects = async ()=>{
    try {
      if(sort !== ""){
        setSortMenu(false)
        const {data} = await API.post(`/project/sort/${sort}`);
        setProjects(data.projects)
      }
    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    sortProjects();
  },[sort]);
  return (
    <div className='sort-menu shadow'>
      <div className="sm-header">
        <span>Sort by</span>
        <cg.CgClose />
      </div>
        <ul>
            <li onClick={()=> {setSort('newest')}}>Newest</li>
            <li onClick={()=> {setSort('oldest')}}>Oldest</li>
        </ul>

        <button className="sm-button">Apply Filters</button>
    </div>
  )
}

export default SortMenu