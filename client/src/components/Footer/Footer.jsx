import React from 'react'
import './footer.css'
import twitter from '../../images/twitter.png'
import donate from '../../images/donate.png'
import mail from '../../images/mail.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="f-content">
            <div className="top">
                <span>Disclaimer: Works shown here may contain assets and/or materials from other artists.</span>
                <span>Projects shown are all free for personal use only, unless otherwise stated.</span>
            </div>
            <div className="bottom">
                <span>Made something interesting? Show me!</span>
                <div className="circles">
                    <div className="circle">
                        <img src={twitter} alt="" />
                    </div>
                    <div className="circle">
                        <img src={donate} alt="" />
                    </div>
                    <div className="circle">
                        <img src={mail} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="f-footer">
            <span>&copy; Xzadik Creations</span>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Footer