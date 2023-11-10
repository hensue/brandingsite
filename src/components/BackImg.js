import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Services from './Services';
import Portfolio from './Portfolio';
import Clients from './Clients';
import protergia from '../images/clients/protergia.png';

const BackImg = () => {
    return (
        <div id='about'>
            <div className='flex items-center text-center justify-center' style={{ background: "radial-gradient(circle at 50% 50%, #FE602F 0%, #4F1D0E 100%)", height: '10vh' }}>
                <p className='text-center text-3xl md:text-6xl text-white font-cursive threeD1' style={{ fontFamily: 'Brush Script MT'}} data-aos="zoom-in">
                    Casino Global Solutions Ltd
                </p>
            </div>
            <div>
                <NavBar />
            </div>
            <div className="w-full text-white hero h-auto">
                {/* <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center"> */}
                    {/* <div className="w-full flex flex-col lg:flex-row lg:justify-around"> */}
                        {/* <div className="mb-4" data-aos="fade-down" data-aos-delay="600">
                            <p className='text-xl md:text-4xl font-bold mb-4' style={{ fontFamily: 'niconne' }}>Welcome to Casino Global Solutions Ltd</p>
                            <p className="text-sm md:text-2xl">
                                Welcome to Casino Global Solutions, a Consulting Agency that helps businesses like you achieve your own unique goals. <br />
                                Our expert professionals will partner with your business to deliver tailor-made practical solutions, fast.<br />
                                Having a combined experience of over 50 years in the casino and gambling industries, we’ve supported numerous clients - and we’re confident we can do exactly the same for you.
                            </p>
                        </div> */}

                        <Services />

                        <Clients />

                        {/* <div className="w-full lg:w-72 pt-6 lg:mx-12">
                            <Link to="/contact" className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Send a message
                                <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </Link>
                        </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>

    );
}

export default BackImg;