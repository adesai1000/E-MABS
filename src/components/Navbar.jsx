import React from 'react'
import Add from "../img/logout.png"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <span className='logo'>E-MABS</span>
      <div className='user'>
        <img src='https://www.patentlyapple.com/.a/6a0120a5580826970c01b8d1a05b87970c-pi' alt=' ' />
        <span>Ayush</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar
