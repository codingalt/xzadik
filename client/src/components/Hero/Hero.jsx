import React from 'react'
import './hero.css'

const Hero = ({heroTxt,slogan}) => {
  return (
    <div className='hero'>
        <div className="container h-container mx-auto">
            <div className="h-inner">
                <span>{slogan}</span>
                <span>{heroTxt}</span>
            </div>
        </div>
    </div>
  )
}

export default Hero