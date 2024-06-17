import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero1 from '../components/MainContent/Hero1/Hero1'
import Hero2 from '../components/MainContent/Hero2/Hero2'
import Hero3 from '../components/MainContent/Hero3/Hero3'
import Hero4 from '../components/MainContent/Hero4/Hero4'


function Home() {
  return (
    <div className='h-screen w-fit scroll-smooth'>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </div>
  )
}

export default Home