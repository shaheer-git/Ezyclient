import { React, useEffect, useState } from 'react'
import teamWork from '../assets/teamWork.png'
import whyUs from '../assets/whyUs.png'
import recycle from '../assets/recycle.png'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { NavLink } from "react-router-dom";
import '../components/Navbar/Navbar.css'
import handleButtonClick from '../comman/handleContactBtn';

function About() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = teamWork;
        img.onload = () => setLoaded(true);
    }, [teamWork, whyUs]);

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
                            <h1 className='font-semibold text-3xl lg:text-6xl pt-10 m-2 text-[#5DA1E4] p-4 lg:p-8'>About Us</h1>
                            <h2 className='font-semibold text-md lg:text-lg text-[#153e67c4] p-4 lg:p-8'>
                                EZY SCRAP stands at the forefront of India's innovative vehicle recycling industry, seamlessly blending physical and digital solutions to streamline the recycling process. Our mission is to play a vital role in reducing the carbon footprint by efficiently recycling end-of-life, environmentally harmful, and non-operational vehicles. We are dedicated to extracting valuable eco-friendly parts and refurbishing components, ensuring a sustainable and responsible approach to vehicle disposal. At EZY SCRAP, we are committed to driving environmental stewardship while delivering high-quality recycled materials and reconditioned parts to support a greener future.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-auto lg:h-1/2 bg-[#FFFBF4] rounded-3xl m-4' id='welcomeContainer'>
                <p className='font-semibold text-3xl lg:text-6xl pt-10 m-2 text-[#5DA1E4] text-center'>Welcome to Ezyscrap</p>
                <p className='font-semibold text-lg text-[#153E67] text-center m-2'>Your Premier Choice for Car and Bike Scrapping in India</p>
                <p className='font-semibold text-lg text-[#153e67c4] p-6'>When it comes to car scrap dealers near me or finding a service to scrap a bike, you need a provider that is reliable, efficient, and environmentally responsible. At, <NavLink to="/">Ezyscrap</NavLink> we specialize in offering top-tier vehicle scrapping solutions that meet your needs while upholding high standards of eco-friendliness and customer satisfaction. With years of experience in the industry, we ensure that your vehicle disposal process is smooth, hassle-free, and rewarding.</p>
                <div className='p-6'>
                    <p className='font-semibold text-3xl lg:text-4xl pt-10 m-2 text-[#5DA1E4]'>Why Choose Ezyscrap?</p>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Expertise in Car and Bike Scrapping</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>As seasoned professionals in the vehicle scrapping industry, our team at Ezyscrap is dedicated to offering exceptional service. We handle all types of vehicles, from cars to bikes, ensuring they are dismantled and recycled with the utmost care. Whether your car has reached the end of its road life or you have a bike that's seen better days, our expertise guarantees that every component is managed correctly.</p>
                    </div>
                    <div className='mb-6 flex items-center gap-3 flex-row-reverse justify-between'>
                        <div className='flex items-center justify-end inline'>
                            <img src={whyUs} alt="how scrap a bike in banglore" srcSet="" className='md:w-max h-[150px] hidden lg:h-[250px]' />
                        </div>
                        <div className='lg:w-3/4 w-full'>
                            <li className='font-extrabold text-lg text-[#153E67] m-2'>Local Service with a National Reach</li>
                            <p className='text-sm text-[#153e67c4] pt-3 pl-8'>Searching for car scrap dealers near me or needing to scrap a bike can sometimes be challenging. Fortunately, Ezyscrap offers a local service with a national reach. No matter where you are in India, we provide accessible and efficient scrapping services. Our network ensures that you have access to top-quality scrapping solutions without having to look far.</p>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Eco-Friendly Practices</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>In today's world, responsible disposal of vehicles is crucial. At Ezyscrap, we are committed to environmentally sustainable practices. We prioritize recycling and safe disposal methods to minimize the impact on the environment. When you choose us for your car scrap or bike scrap needs, you can rest assured that your vehicle is being handled in a way that adheres to the highest environmental standards.</p>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Hassle-Free Process</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>We understand that scrapping a vehicle can be a daunting task. That's why we've designed our services to be as convenient as possible. From free, no-obligation quotes to efficient collection and thorough handling of all paperwork, we take care of everything. Our goal is to provide a seamless experience from start to finish, allowing you to focus on other important matters.</p>
                    </div>
                </div>
                <div className='p-6'>
                    <p className='font-semibold text-3xl lg:text#153e67c4 pt-10 m-2 text-[#5DA1E4]'>The Benefits of Choosing Ezyscrap</p>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Convenient Pickup Services</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>One of the main concerns for customers seeking to scrap a bike or car scrap dealers is the logistics involved in transporting their vehicle. At Ezyscrap, we offer convenient pickup services to address this concern. Our team will schedule a pickup time that suits your availability, ensuring that you do not have to worry about transporting your vehicle to our facility.</p>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Competitive Pricing</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>When you need to scrap a bike or dispose of an old car, getting the best value is important. We offer competitive pricing for your scrap vehicles. Our transparent pricing structure ensures that you receive a fair offer based on the current market value of your vehicle. With instant cash offers, you'll know exactly what to expect, eliminating any surprises.</p>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Safe and Secure Handling</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>Proper documentation and secure handling of your vehicle are essential when scrapping it. At Ezyscrap, we handle all necessary paperwork with precision. Our team ensures that all legal requirements are met, giving you peace of mind that everything is in order. You can trust us to manage the process efficiently and securely.</p>
                    </div>
                </div>
                <div className='p-6'>
                    <p className='font-semibold text-3xl lg:text#153e67c4 pt-10 m-2 text-[#5DA1E4]'>How Our Vehicle Scrapping Service Works</p>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Step 1: Get a Free Quote</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>The first step in the process is to <NavLink to="/">request a free quote</NavLink> from us. You can do this by contacting us through our website or by <span className="underline text-[#0e61bf] cursor-pointer" onClick={handleButtonClick}>phone</span>. Provide us with some details about your vehicle, and we'll give you an estimate of its scrap value.</p>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Step 2: Schedule a Pickup</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>Once you accept our offer, we'll arrange a convenient time for our team to pick up your vehicle. Our pickup services are designed to be flexible, so you can choose a time that works best for you.</p>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Step 3: Vehicle Collection</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>On the scheduled day, our team will arrive to collect your vehicle. We'll handle all the logistics, including towing and transportation, so you don't need to lift a finger. Our professional staff ensures that the vehicle is safely loaded and transported to our scrapping facility.</p>
                    </div>
                    <div className='mb-6 flex items-center gap-3 flex-row-reverse justify-between'>
                        <div className='flex items-center justify-end inline'>
                            <img src={recycle} alt="car scrap cost" srcSet="" className='md:w-max h-[150px] hidden lg:h-[250px]' />
                        </div>
                        <div className='w-full lg:w-3/4'>
                            <li className='font-extrabold text-lg text-[#153E67] m-2'>Step 4: Scrapping and Recycling</li>
                            <p className='text-sm text-[#153e67c4] pt-3 pl-8'>Upon arrival at our facility, your vehicle will undergo a thorough inspection. We carefully dismantle it, separating various components for recycling. Our eco-friendly practices ensure that all materials, from metals to fluids, are processed in an environmentally responsible manner. This not only reduces waste but also contributes to the sustainability of our planet.</p>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Step 5: Completion and Documentation</li>
                        <p className='text-sm text-[#153e67c4] pt-3 pl-8'>After scrapping your vehicle, we will provide you a scrap certificate from Ezyscrap. Our goal is to make the entire process as transparent and straightforward as possible.</p>
                    </div>
                </div>
                <div className='p-6'>
                    <p className='font-semibold text-3xl lg:text-4xl pt-10 m-2 text-[#5DA1E4]'>FAQs About Car and Bike Scrapping</p>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>What types of vehicles can I scrap with Ezyscrap?</li>
                        <p className='font-semibold text-md text-[#153e67c4] pt-3 pl-8'>We accept a wide range of vehicles, including cars, bikes, and commercial vehicles. Whether your vehicle is running or not, we can handle it. Our team is equipped to manage all types of vehicles and ensure they are recycled properly.</p>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>How do I get the best value for my scrap vehicle?</li>
                        <p className='font-semibold text-md text-[#153e67c4] pt-3 pl-8'>To get the best value for your scrap vehicle, ensure you provide accurate details when requesting a quote. Factors such as the vehicle's make, model, age, and condition play a role in determining its value. Our team will assess these factors and offer a competitive price based on current market rates.</p>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>Is the scrapping process environmentally friendly?</li>
                        <p className='font-semibold text-md text-[#153e67c4] pt-3 pl-8'>Yes, at Ezyscrap, we are committed to environmentally friendly practices. We adhere to strict recycling standards to ensure that all materials from your vehicle are processed in a way that minimizes environmental impact. From fluid disposal to metal recycling, we prioritize sustainability throughout the scrapping process.</p>
                    </div>
                    <div className='mb-6'>
                        <li className='font-extrabold text-lg text-[#153E67] m-2'>What documents do I need to provide for scrapping my vehicle?</li>
                        <p className='font-semibold text-md text-[#153e67c4] pt-3 pl-8'>Typically, you will need to provide a copy of the vehicle's registration document, proof of identity, and any other relevant paperwork. Our team will guide you through the documentation process and ensure that everything is completed correctly.</p>
                    </div>
                </div>
            </div>
            <div className='mb-8 relative'>
                <p className='font-semibold text-3xl lg:text-6xl pt-10 m-2 text-[#FFFBF4] text-center'>Testimonials from Our Satisfied Customers</p>
                <p className='font-semibold text-lg text-[#153E67] text-center m-2'>Don't just take our word for it—hear from our satisfied customers who have experienced the benefits of our vehicle scrapping services</p>
                <div className='flex items-center justify-center lg:flex-wrap flex-wrap gap-2 w-screen'>
                    <div className='w-96 h-80 bg-[#FFFBF4] rounded-3xl m-4 relative'>
                        <svg height="55px" width="55px" version="1.1" id="Capa_1" className='rotate-180 ml-4 mt-4' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="right_x5F_quote"> <g> <path style={{ fill: "#dbdbdc" }} d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path> <path style={{ fill: "#dbdbdc" }} d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path> </g> </g> </g> </g></svg>
                        <p className='font-semibold text-md text-[#153e67c4] text-center p-4'>“I needed to scrap my old car and was looking for reliable car scrap dealers near me. Ezyscrap provided an excellent service from start to finish. Their team was professional, and the entire process was hassle-free. Highly recommend!”</p>
                        <div className='absolute bottom-0 right-0 h-16 bg-[#dbdbdc] w-40 rounded-br-3xl rounded-tl-3xl flex items-center justify-center'>
                            <p className='text-center p-2 text-[#153E67]'>Rajesh K., Mumbai</p>
                        </div>
                    </div>
                    <div className='w-96 h-80 bg-[#FFFBF4] rounded-3xl m-4 relative'>
                        <svg height="55px" width="55px" version="1.1" id="Capa_1" className='rotate-180 ml-4 mt-4' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="right_x5F_quote"> <g> <path style={{ fill: "#dbdbdc" }} d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path> <path style={{ fill: "#dbdbdc" }} d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path> </g> </g> </g> </g></svg>
                        <p className='font-semibold text-md text-[#153e67c4] text-center p-4'>“Scrapping my bike was easier than I thought, thanks to Ezyscrap. They offered a fair price, and the pickup service was incredibly convenient. I appreciated their commitment to environmentally friendly practices.”</p>
                        <div className='absolute bottom-0 right-0 h-16 bg-[#dbdbdc] w-40 rounded-br-3xl rounded-tl-3xl flex items-center justify-center'>
                            <p className='text-center p-2 text-[#153E67]'>Priya S., Delhi</p>
                        </div>
                    </div>
                    <div className='w-96 h-80 bg-[#FFFBF4] rounded-3xl m-4 relative'>
                        <svg height="55px" width="55px" version="1.1" id="Capa_1" className='rotate-180 ml-4 mt-4' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="right_x5F_quote"> <g> <path style={{ fill: "#dbdbdc" }} d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path> <path style={{ fill: "#dbdbdc" }} d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path> </g> </g> </g> </g></svg>
                        <p className='font-semibold text-md text-[#153e67c4] text-center p-4'>“I had an old commercial vehicle that needed scrapping, and Ezyscrap handled everything efficiently. The documentation was clear, and their customer service was top-notch. I'll definitely use their services again.”</p>
                        <div className='absolute bottom-0 right-0 h-16 bg-[#dbdbdc] w-40 rounded-br-3xl rounded-tl-3xl flex items-center justify-center'>
                            <p className='text-center p-2 text-[#153E67]'>Arun M., Bengaluru</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About