import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';

const Hero = () => {
    return (
        <>
            {/* <div className='flex items-center text-center justify-center' style={{background:"radial-gradient(circle at 50% 50%, #FE602F 0%, #4F1D0E 100%)", height:'10vh'}}><p className='text-center text-4xl text-white'>Casino Global Solutions Ltd</p></div> */}
            <div id='hero' className='about'>
                <div>
                    <NavBar />
                </div>

                <div className="m-auto overflow-hidden mx-4 lg:mt-0 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-full flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                        <div className="my-4 py-4">
                        <h2 className="my-2 text-center md:text-5xl text-3xl text-black-500 uppercase font-bold">About</h2>

                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-black'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-black-100">
                            {/* As many people ask how our consulting services work and what to expect, we have put together a short description <br />below for you so you can get a better idea of how we work and what you can expect */}
                        </h2>
                    </div>
                            <div className="text-2xl tracking-tight mb-5 text-black-500">
                                <p>
                                With 15 years experience within the online gaming industry and equally as many in the land based casinos and VIP rooms previous to that, I am here to offer my knowledge, experience and passion for the industry to anyone requiring from the simplest business advise to full end to end business consulting services in the online gaming world. 
                                </p>
                                <br />
                                <p>
                                I have been involved in multiple casino projects for brands and companies including GiG, Pinnacle, Digioutsource (partner of the Super Group), the Betclic Everest group and many more over the past 2 decades in different capacities.
                                </p>
                                <br />
                                <p>
                                As such, you can be assured that your project is in good hands and I have very solid relationships with every provider in the industry so you can always be assured you will get an advantage whether in pricing or timelines for your project.
                                </p>
                                <br />
                                <p>
                                Whether you would like to build a brand-new igaming business from scratch, invest in a project or looking to expand your existing business, I am here to assist and advise and manage all the processes alongside you all the way through to completion.
                                </p>
                                <br />
                                <p>
                                All services offered by CGS are fully tailored to the client’s needs and expectations and I pride myself in being very objective and taking the time to understand the client’s needs and expectations so as to find the best suited solutions for them.
                                </p>
                            </div>
                            {/* <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div> */}
                        </div>
                        {/* <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={heroImg} />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;