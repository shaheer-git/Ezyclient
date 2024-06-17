import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import SideBar from '../SideBar/SideBar'

function Navbar() {
  return (
    <div className='p-4 lg:sticky lg:z-10 lg:top-0 lg:block flex justify-center items-center lg:h-auto h-[100px]' style={{ backgroundColor: '#FFFBF4' }}>
      <div className='flex items-center justify-between pl-28 pr-28'>
        <SideBar />
        <div>
          <img src={logo} alt="Scrap 2 wheeler" className='w-auto'/>
        </div>
        <div className='w-1/2 hidden lg:block'>
          <ul className='hidden lg:flex items-center justify-around'>
            <li style={{ color: '#74A1CE' }} className='font-bold active'>HOME</li>
            <li style={{ color: '#74A1CE' }} className='font-bold'>ABOUT</li>
            <li style={{ color: '#74A1CE' }} className='font-bold'>HOW IT WORKS</li>
            <li style={{ color: 'white', backgroundColor: '#74A1CE' }} className='font-bold rounded-md pl-2 pr-2 h-7'>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar