import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import HeaderSubPage from '../components/HeaderSubPage'

const CouponPage = () => {
    return (
        <>
            <Head>
                <title>Get $10 Off Your Christmas Tree | Rancho Cucamonga, CA</title>
            </Head>
            <HeaderSubPage />
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <div className="text-center">
                        <h1 className="mt-2 mb-8 text-4xl text-center leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Get Your Coupon
                        </h1>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Enter your email address to get a $10 off coupon e-mailed to you each year. Accepted at our <Link href="https://olympicchristmastrees.com/rancho-cucamonga">tree lot in Rancho Cucamonga.</Link>
                        </p>
                    </div>
                    <div id="mc_embed_signup" className="mt-12">
                        <form id="mc-embedded-subscribe-form" action="http://olympictrees.us6.list-manage1.com/subscribe/post?u=5ab7bc9cf312e2edb49ea965d&amp;id=4e98db6942" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                            <div className="sm:col-span-2">
                                <label for="mce-EMAIL" className="block text-sm font-medium leading-5 text-gray-700 sr-only">Email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="mce-EMAIL" type="email" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border border-gray-700 rounded" placeholder="Enter your email address" />
                                </div>
                            </div>

                            <div id="mce-responses"></div>

                            <div className="sm:col-span-2">
                                <span className="w-full inline-flex rounded-md shadow-sm">
                                    <button type="button" id="mc-embedded-subscribe" name="subscribe" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:border-red-800 focus:shadow-outline-red active:bg-red-800 transition ease-in-out duration-150">
                                    Submit
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        <Footer />
        </>
    );
};

export default CouponPage;