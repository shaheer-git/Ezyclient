import React from 'react'
import './SideBar.css'
import { flushSync } from 'react-dom'

function SideBar() {
    return (
        <div id="nav-bar" className='lg:hidden flex absolute z-20 top-20 bottom-0'>
            <input type="checkbox" id="nav-toggle" />
            <div id="nav-header">
                <span id="nav-title" className='text-2xl' style={{color: "#5DA1E4"}}>Welcome to ES!</span>
                <label htmlFor="nav-toggle">
                    <span id="nav-toggle-burger"></span>
                </label>
            </div>
            <hr />
            <div id="nav-content">
                <div className="nav-button">
                    <i className="fas fa-home"></i>
                    <span>HOME</span>
                </div>
                <div className="nav-button">
                    <i className="fas fa-building"></i>
                    <span>ABOUT</span>
                </div>
                <div className="nav-button">
                    <i className="fas fa-cog"></i>
                    <span>HOW IT WORKS</span>
                </div>
                <div className="nav-button">
                    <i className="fas fa-phone"></i>
                    <span style={{ color: 'white', backgroundColor: '#74A1CE' }} className='font-bold rounded-md pl-2 pr-2 h-7'>CONTACT</span>
                </div>
            </div>
        </div>

    )
}

export default SideBar