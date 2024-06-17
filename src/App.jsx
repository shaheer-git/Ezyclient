import { useEffect, useState } from 'react'
import './App.css'
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Home/>
      {/* <HowItWorks /> */}
    </>
  )
}

export default App
