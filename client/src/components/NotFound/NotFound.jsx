import React from 'react'
import notfound from '../../images/wolf-box.png'
import './not-found.css'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not_found'>
        <div className="nf_row">
            <div className="nf_left">
                <img src={notfound} alt="" />
            </div>
            <div className="nf_right">
                <h3>404 - Page Not Found</h3>
                <span>Wolfie searched all over but... Nothing!</span>
                
                <NavLink to={'/'}>
                <button className='button'>Take Me Home</button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default NotFound