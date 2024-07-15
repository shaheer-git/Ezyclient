import { React, useState } from 'react'
import Mater from '../../../assets/towTruck.png'
import './Hero2.css'
import { makeAPIcall } from "../../../services/api"
function Hero2() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        area: '',
        pincode: '',
        vehicleType: '',
        vehicleModel: '',
        vehicleCompany: '',
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        // if (!value) return;
        setFormData({
            ...formData,
            [name]: value.trim().split(' ').join(),
        });
    };

    const handleSubmit = async (e) => {
        Notific.Loading.Dots('Please Wait...');
        e.preventDefault();
        if (!/^(\+91)?\d{10}$/.test(formData.phone)) {
            Notific.Confirm.Show("Invalid Phone Number", "Please enter a valid phone number", "Okay");
            Notific.Loading.Remove();
            return;
        }
        formData.vehicleType = (!formData.vehicleType) ? '2 Wheeler' : formData.vehicleType;
        let response = await makeAPIcall('POST', '/createUser', formData, '');
        if (response.status === "success") {
            Notific.Confirm.Show("Thank you for choosing EzyScrap!", "Together, we are creating a better 🌍... We will get back to you shortly.", "Okay")
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                city: '',
                area: '',
                pincode: '',
                vehicleType: '',
                vehicleModel: '',
                vehicleCompany: '',
            })
        } else {
            Notific.Confirm.Show("Something went wrong!", response.error, "Okay")
        }
    };
    return (
        <div style={{ backgroundColor: '#BFDBF7' }} className='h-fit lg:h-screen flex justify-center items-center'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-around h-full w-full'>
                <div data-aos="zoom-in-up">
                    <img src={Mater} alt="scooter scrap in bangalore" className='max-w-full h-auto lg:max-h-96' />
                </div>
                <div className='w-auto' data-aos="zoom-in-up">
                    <div className="container">
                        <form onSubmit={handleSubmit} className="form" id='form'>
                            <h1 className='text-xl'>Complete this form for a quick call back!</h1>
                            <div className='flex sm:flex-row flex-col items-center'>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name*"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name*"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex sm:flex-row flex-col items-center'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="+91"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex sm:flex-row flex-col items-center'>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City*"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="pincode"
                                    placeholder="Pincode*"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="area"
                                    placeholder="Area / Land mark (Eg: Kormangala 7 block, near nexus mall..)*"
                                    value={formData.area}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="vehicleType"
                                    placeholder="Vehicle Type* (2 Wheeler, 4 Wheeler, etc.)"
                                    value={formData.vehicleType}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="vehicleCompany"
                                    placeholder="Vehicle company name* (Honda, TVS, etc.)"
                                    value={formData.vehicleCompany}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="vehicleModel"
                                    placeholder="Vehicle Model* (Activa, Start City, etc.)"
                                    value={formData.vehicleModel}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex items-center justify-center'>
                                <button type="submit" className='font-bold'>Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2