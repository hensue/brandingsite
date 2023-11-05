import React, { useState } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { useDocTitle } from '../../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Region = () => {
    useDocTitle('MLD | Molad e Konsult - Send us a message')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                clearInput()
                //handle success
                Notiflix.Report.success(
                    'Success',
                    response.data.message,
                    'Okay',
                );
            })
            .catch(function (error) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                //handle error
                const { response } = error;
                if (response.status === 500) {
                    Notiflix.Report.failure(
                        'An error occurred',
                        response.data.message,
                        'Okay',
                    );
                }
                if (response.data.errors !== null) {
                    setErrors(response.data.errors)
                }

            });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="flex justify-center items-center w-full bg-white py-12 lg:py-24 bg-gray-200 contact" id='contact'>
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                    <div className="h-[500px] w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-center text-blue-900 uppercase text-4xl">
                                Region advisory, Licensing and Corporate set up
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 mt-10 text-xl">
                            <p>This is the part where we help you make you dream a reality...</p>
                            <p>As we realise that the planning, strategizing and getting the foundations down for your business is only the beginning, we will be by your side supporting you in all your needs all the way and for as long as you need us!
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto region rounded-2xl h-[400px]">
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Region;