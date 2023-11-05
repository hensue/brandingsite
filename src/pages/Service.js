import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import BackImg from '../components/BackImg';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from './Contact';
import Resume from '../components/Resume';
import NavBar from '../components/Navbar/NavBar';
import img from '../images/3.png';
import img2 from '../images/4.png';
import img3 from '../images/5.png';


const Service = () => {
    return (
        <>
            {/* <Cta /> */}

            <div>
                <NavBar />
            </div>
            <div id="services" className="bg-gray-100 py-12 services" >

                <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center md:text-5xl text-3xl text-white-500 uppercase font-bold">Services</h2>

                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-black'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-white-100">
                            {/* As many people ask how our consulting services work and what to expect, we have put together a short description <br />below for you so you can get a better idea of how we work and what you can expect */}
                        </h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <a href='/region'>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">

                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group card">
                                    <div className="m-2 text-justify text-sm">
                                        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                        <h2 className="font-semibold my-6 text-4xl text-center">Region advisory, Licensing and Corporate set up</h2>
                                        <p className="text-xl font-medium">
                                            This is the part where we help you make you dream a reality...<br />
                                            As we realise that the planning, strategizing and getting the foundations down for your business is only the beginning, we will be by your side supporting you in all your needs all the way and for as long as you need us!
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group card">
                                    <div className="m-2 text-justify text-sm">
                                        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                        <h2 className="font-semibold my-6 text-4xl text-center">Business Strategy</h2>
                                        <p className="text-xl font-medium">
                                            Once we have covered the basics, this is where we get to more specifics regarding the way forward.<br />
                                            During the strategic planning stage and calls we will create the first version of a business plan and costs and resource needs to we can discuss together and evolve from there until you are happy with everything and we have achieved a conclusive business plan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>

                    <div className="px-12 mt-6" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group card">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-6 text-4xl text-center">Investor Advise</h2>
                                    <p className="text-xl font-medium">
                                        This is where we get to know each other!<br />
                                        During the introductory consultation we strive to discover what your goals, plans and dreams are for your existing and / or future business so we can get you there through the best possible route according to your needs and budget.<br />
                                        As we understand that plans, budgets and expectations often change in our industry we will always adjust according to your needs, challenges and goals to accommodate you and find the best way forward!
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group card">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-6 text-4xl text-center">Technology and Platforms</h2>
                                    <p className="text-xl font-medium">
                                        Once we have covered the basics, this is where we get to more specifics regarding the way forward.<br />
                                        During the strategic planning stage and calls we will create the first version of a business plan and costs and resource needs to we can discuss together and evolve from there until you are happy with everything and we have achieved a conclusive business plan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-12 mt-6" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group card">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-6 text-4xl text-center">Third parties partnerships and Negotiations</h2>
                                    <p className="text-xl font-medium">
                                        This is where we get to know each other!<br />
                                        During the introductory consultation we strive to discover what your goals, plans and dreams are for your existing and / or future business so we can get you there through the best possible route according to your needs and budget.<br />
                                        As we understand that plans, budgets and expectations often change in our industry we will always adjust according to your needs, challenges and goals to accommodate you and find the best way forward!
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group card">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-6 text-4xl text-center">Marketing</h2>
                                    <p className="text-xl font-medium">
                                        Once we have covered the basics, this is where we get to more specifics regarding the way forward.<br />
                                        During the strategic planning stage and calls we will create the first version of a business plan and costs and resource needs to we can discuss together and evolve from there until you are happy with everything and we have achieved a conclusive business plan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-12 mt-6 mb-6" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group card">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-6 text-4xl text-center">Company and Resource set up</h2>
                                    <p className="text-xl font-medium">
                                        This is where we get to know each other!<br />
                                        During the introductory consultation we strive to discover what your goals, plans and dreams are for your existing and / or future business so we can get you there through the best possible route according to your needs and budget.<br />
                                        As we understand that plans, budgets and expectations often change in our industry we will always adjust according to your needs, challenges and goals to accommodate you and find the best way forward!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>

    )
}

export default Service;

