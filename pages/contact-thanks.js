import React from 'react';
import Head from 'next/head'
import Footer from '../components/Footer'
import HeaderSubPage from '../components/HeaderSubPage'
import Coupon from '../components/Coupon'

const ContactThanks = () => {
    return (
        <>
            <Head>
                <title>Thanks for your message | Olympic Christmas Trees</title>
            </Head>
            <HeaderSubPage />
            <div className="bg-white py-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:pt-12 lg:pb-24">
                <div className="relative max-w-3xl mx-auto">
                    <div className="text-center">
                        <h1 className="mt-2 mb-8 text-4xl text-center leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Thanks for your message!
                        </h1>
                        <p className="mt-4 text-lg leading-6 text-gray-900">
                            We'll be in touch soon.  For urgent matters, please call 714-655-8338.
                        </p>
                    </div>
                </div>
            </div>
            <Coupon />
            <Footer />
        </>
    );
};

export default ContactThanks;