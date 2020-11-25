import React from 'react';
import Head from 'next/head'
import About from '../components/About'
import Footer from '../components/Footer'
import HeaderSubPage from '../components/HeaderSubPage'
import Coupon from '../components/Coupon'

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>41 Years of Christmas Trees in Rancho Cucamonga, CA</title>
            </Head>
            <HeaderSubPage />
            <div className="max-w-4xl mx-auto">
                <About />
            </div>
            <Coupon />
            <Footer />
        </>
    );
};

export default AboutPage;