import React from 'react';
import kws from '../images/images (17).jpg';
import geps from '../images/images (21).jpg';
import protergia from '../images/images (20).jpg';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100 service">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-white-500 uppercase font-bold" style={{ textShadow: '1px 1px 2px #000000' }}>Partners</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-white-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-white-100">Some of our Partners.</h2>
                    </div>

                <div className="pt-8 pb-24" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/6">
                            <img src={kws} alt="client" />                           
                        </div>

                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/6">
                            <img src={protergia} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/6">
                            <img src={geps} alt="client" />                            
                        </div>

                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;