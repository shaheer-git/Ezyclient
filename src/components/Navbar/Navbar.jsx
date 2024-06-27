import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import SideBar from '../SideBar/SideBar'
import { NavLink } from "react-router-dom";
import handleButtonClick from '../../comman/handleContactBtn.js'

function Navbar() {

  return (
    <div className='p-4 lg:sticky lg:z-10 lg:top-0 lg:block flex justify-center items-center lg:h-auto h-[100px]' style={{ backgroundColor: '#FFFBF4' }}>
      <SideBar />
      <div className='flex items-center justify-between pl-28 pr-28'>
        <div>
          <img src={logo} alt="Scrap 2 wheeler" className='w-auto' />
        </div>
        <div className='w-1/2 hidden lg:block'>
          <ul className='hidden lg:flex items-center justify-around'>
            <NavLink style={{ color: '#74A1CE' }} className={(e) => { return e.isActive ? 'font-bold active' : 'font-bold' }} to="/">HOME</NavLink>
            <NavLink style={{ color: '#74A1CE' }} className={(e) => { return e.isActive ? 'font-bold active' : 'font-bold' }} to="/about">ABOUT</NavLink>
            <NavLink style={{ color: '#74A1CE' }} className={(e) => { return e.isActive ? 'font-bold active' : 'font-bold' }} to="/howItWorks">HOW IT WORKS</NavLink>
            <li style={{ color: 'white', backgroundColor: '#74A1CE' }} className='font-bold rounded-md pl-2 pr-2 h-7' onClick={handleButtonClick}>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar