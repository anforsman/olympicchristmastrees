import React from 'react';
import Head from 'next/head'
import Footer from '../components/Footer'
import HeaderSubPage from '../components/HeaderSubPage'
import Coupon from '../components/Coupon'

const Delivery = () => {
    return (
        <>
            <Head>
                <title>Christmas Tree Delivery | Rancho Cucamonga, San Bernardino County</title>
            </Head>
            <HeaderSubPage />
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-3xl mx-auto">
                    <div className="text-center">
                        <h1 className="mt-2 mb-8 text-4xl text-center leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Christmas Tree Delivery
                        </h1>
                        <p className="mt-4 text-lg leading-6 text-gray-900">
                            Tree delivery is available for addresses within 15 miles of the tree lot.  Rates start at $30.
                        </p>
                    </div>
                </div>
            </div>
            <Coupon />
            <Footer />
        </>
    );
};

export default Delivery;