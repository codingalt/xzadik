import React, { useEffect, useState } from 'react'
import '../SortMenu/sort-menu.css'
import * as cg from 'react-icons/cg'

const FilterMenu = ({filterProjects, workType, setWorkType, liscense, setLiscense, setFilterMenu}) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleWorkType = (e)=>{
        setWorkType(e.target.value);
    }

    const handleLiscense = (e)=>{
        setLiscense(e.target.value);
    }

    useEffect(()=>{
        filterProjects(workType, liscense);
    },[workType,liscense]);

  return (
    <div className='filter-menu shadow' style={showMenu ? {display: 'none'} : {}}>
        <div className="sm-header">
        <span>Filter</span>
        <cg.CgClose onClick={()=> setShowMenu(true)} />
      </div>
        <div className="fm-title">Work Types</div>
        <div className="choose-opt" onClick={()=> {setFilterMenu(false)}}>
            <input checked={workType === 'photography'} value='photography' onChange={handleWorkType} type="radio" name='workType' />
            <span>Photography</span>
        </div>
        <div className="choose-opt" onClick={()=> {setFilterMenu(false)}}>
            <input checked={workType === 'logo'} type="radio" value='logo' onChange={handleWorkType} name='workType' />
            <span>Logo</span>
        </div>
        <div className="choose-opt" onClick={()=> {setFilterMenu(false)}}>
            <input checked={workType === 'mockups'} type="radio" name='workType' value='mockups' onChange={handleWorkType} />
            <span>Web Mockups</span>
        </div>
        <div className="fm-title mt-3">Usage Rights</div>
        <div className="choose-opt" onClick={()=> {setFilterMenu(false)}}>
            <input checked={liscense === 'creative'} type="radio" name='liscense' value='creative' onChange={handleLiscense} />
            <span>Creative Commons</span>
        </div>
        <div className="choose-opt" onClick={()=> {setFilterMenu(false)}}>
            <input checked={liscense === 'commercial'}type="radio" name='liscense' value='commercial' onChange={handleLiscense} />
            <span>Commercial & Others</span>
        </div>

        <button className="sm-button">Apply Filters</button>
    </div>
  )
}

export default FilterMenu