import React from 'react';
import Head from 'next/head'
import Footer from '../components/Footer'
import HeaderSubPage from '../components/HeaderSubPage'
import Coupon from '../components/Coupon'
import Location from '../components/Location'

const RanchoCucamonga = () => {
    return (
        <>
            <Head>
                <title>The Freshest Christmas Trees in Rancho Cucamonga, CA</title>
            </Head>
            <HeaderSubPage />
            <div className="bg-white pb-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:pb-24">
                <div className="relative max-w-5xl mx-auto">
                    <Location />
                </div>
            </div>
            <Coupon />
            <Footer />
        </>
    );
};

export default RanchoCucamonga;