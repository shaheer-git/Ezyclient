import { React, useEffect, useState } from 'react'
import teamWork from '../assets/teamWork.png'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


function About() {
    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = teamWork;
    img.onload = () => setLoaded(true);
  }, [teamWork]);
  
  !loaded ? Notific.Loading.Dots("Loading..") : Notific.Loading.Remove();
    const gradientStyle = {
        background: 'linear-gradient(to top, #BFDBF7 50%, #FFFBF4 50%)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (
        <div>
            <Navbar />
            <div className='' style={gradientStyle}>
                <div className='flex justify-center items-center lg:flex-row flex-col'>
                    <img src={teamWork} className='md:w-max h-[250px] lg:h-[400px]' alt='car scrap near me' />
                    <div className='mr-2 ml-2'>
                        <div className='h-auto lg:h-1/2 bg-[#FFFBF4] rounded-3xl'>
                            <h1 className='font-semibold text-lg md:text-xl lg:text-2xl text-[#5DA1E4] p-4 lg:p-8'>About Us</h1>
                            <h2 className='font-semibold text-md lg:text-lg text-[#5DA1E4] p-4 lg:p-8'>
                                EZY SCRAP stands at the forefront of India's innovative vehicle recycling industry, seamlessly blending physical and digital solutions to streamline the recycling process. Our mission is to play a vital role in reducing the carbon footprint by efficiently recycling end-of-life, environmentally harmful, and non-operational vehicles. We are dedicated to extracting valuable eco-friendly parts and refurbishing components, ensuring a sustainable and responsible approach to vehicle disposal. At EZY SCRAP, we are committed to driving environmental stewardship while delivering high-quality recycled materials and reconditioned parts to support a greener future.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About