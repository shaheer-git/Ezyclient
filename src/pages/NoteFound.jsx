import { React, useEffect, useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { NavLink } from "react-router-dom";


function NoteFound() {
    const [loaded, setLoaded] = useState(false);
    const emojiImg = "https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg";

    useEffect(() => {
        const img = new Image();
        img.src = emojiImg;
        img.onload = () => setLoaded(true);
    }, [emojiImg]);

    !loaded ? Notific.Loading.Dots("Loading..") : Notific.Loading.Remove();

    return (
        <div>
            <Navbar />
            <div className='h-screen bg-[#BFDBF7]'>
                <div className='flex justify-center items-center lg:flex-row flex-col'>
                    <div id='oopss'>
                        <div id='error-text'>
                            <div className='flex flex-col items-center justify-center'>
                                <img src={emojiImg} alt="car scrap yard near me" />
                                <span className='font-bold text-8xl text-[#FFFBF4] m-1'>Not Found</span>
                                <p class="p-2 text-[#153e67] m-1">The page you were looking for could not be found</p>
                                <NavLink className='font-bold rounded-md p-2 text-[#153e67] bg-[#FFFBF4] m-1'>Back to home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NoteFound