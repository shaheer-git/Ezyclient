import { useEffect, useState } from 'react'
import './App.css'
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MyContextProvider } from "./services/context";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/howItWorks",
      element: <HowItWorks />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <>
      <MyContextProvider>
        <RouterProvider router={router} />
      </MyContextProvider>
    </>
  )
}

export default App
