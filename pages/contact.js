import React from 'react';
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeaderSubPage from '../components/HeaderSubPage'
import Head from 'next/head'

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact Olympic Christmas Trees in Rancho Cucamonga, CA</title>
            </Head>
            <HeaderSubPage />
            <div className="max-w-4xl mx-auto">
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;