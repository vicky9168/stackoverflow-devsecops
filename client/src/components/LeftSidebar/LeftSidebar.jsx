import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import globe from '../../assets/globe.png'



const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
          <NavLink to='/' className='side-nav-links' activeClassname="active">
            <p>Home</p>
          </NavLink>

          <div className='side-nav-div' >
            <div><p>PUBLIC</p></div>
            <NavLink to='/Questions' className='side-nav-links' activeClassname="active">
                <img src={globe} alt="Globe" width='20px' />
                <p style={{paddingLeft:"10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' style={{paddingLeft:'40px'}} activeClassname="active">
            <p>Tags</p>
            </NavLink>
            <NavLink to='/Users' className='side-nav-links' style={{paddingLeft:'40px'}} activeClassname="active">
            <p>Users</p>
            </NavLink>
            <div className="icon">
              <p style={{fontSize:"20px"}}>Refresh page and Click Icon</p>
              <i class="fa-solid fa-arrow-down"></i>
              <p>Chatbot</p>
              <a href="https://chat-bot-ashen.vercel.app/"><i class="fa-solid fa-message"></i></a>
              <p>Social Media</p>
           <a href="https://instagram-clone-ntpx.onrender.com/"><i class="fa-brands fa-instagram"></i></a> 
              </div>
          </div>

      </nav>
    </div>
  )
}

export default LeftSidebar
