import React from 'react'
import './NavBar.css'
import navlogo from '../../assets/logo.png'
import navProfile from '../../assets/Nav-logo.png'
const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo}  className='nav-logo'alt=""/>
    <div className='nav-p'> <p>Pixcel Cart</p></div>
       
    <img src={ navProfile}  className='nav-profile'alt=""/>
    
    </div>
  )
}

export default NavBar;