import React from 'react';
import Head from 'next/head'
import Footer from '../components/Footer'
import HeaderSubPage from '../components/HeaderSubPage'
import Coupon from '../components/Coupon'

const SubscribeThanks = () => {
    return (
        <>
            <Head>
                <title>Verify your email</title>
            </Head>
            <HeaderSubPage />
            <div className="bg-white py-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:pt-12 lg:pb-24">
                <div className="relative max-w-3xl mx-auto">
                    <div className="text-center">
                        <h1 className="mt-2 mb-8 text-4xl text-center leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Please Check Your Inbox
                        </h1>
                        <p className="mt-4 text-lg leading-6 text-gray-900">
                            A verification email was just sent to your inbox. Once you're verified, you'll be emailed the coupon. Thanks!
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SubscribeThanks;