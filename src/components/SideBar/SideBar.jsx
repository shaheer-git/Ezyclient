import { React, useState } from 'react'
import './SideBar.css'
import { NavLink } from "react-router-dom";
import handleButtonClick from '../../comman/handleContactBtn'


const hide = {
    transform: 'translateX(-100%)',
};
const show = {
    transform: 'translateX(0)'
};
function SideBar() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className='absolute left-6 block lg:hidden'>
            <label className="buttons__burger" htmlFor="burger" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className='fixed top-0 bottom-0 left-0 right-0 h-full w-full bg-[#FFFBF4] z-10 transition-all delay-100 ease-linear' style={isSidebarVisible ? show : hide}>
                <div className='absolute top-8 right-8' onClick={toggleSidebar}>
                    <svg xmlnsXlink="http://www.w3.org/2000/svg" width="36" height="36" fill="#5DA1E4" className="bi bi-x-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
                <div className='w-full flex items-center justify-center h-3/4'>
                    <ul className='flex flex-col items-start justify-around'>
                        <NavLink style={{ color: '#74A1CE' }} className={(e) => { return e.isActive ? 'font-bold text-2xl pt-4 active' : 'font-bold text-2xl pt-4' }} to="/" id='homeBtn'>HOME</NavLink>
                        <NavLink style={{ color: '#74A1CE' }} className={(e) => { return e.isActive ? 'font-bold text-2xl pt-4 active' : 'font-bold text-2xl pt-4' }} to="/about">ABOUT</NavLink>
                        <NavLink style={{ color: '#74A1CE' }} className={(e) => { return e.isActive ? 'font-bold text-2xl pt-4 active' : 'font-bold text-2xl pt-4' }} to="/howItWorks">HOW IT WORKS</NavLink>
                        <li style={{ color: 'white', backgroundColor: '#74A1CE' }} className='font-bold rounded-md pl-4 pr-4 pt-2 pb-2 mt-4 text-2xl' onClick={handleButtonClick}>CONTACT</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default SideBar