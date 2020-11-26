import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import HeaderSubPage from '../components/HeaderSubPage'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const CouponPage = () => {
    
    const router = useRouter()

    const [state, setState] = useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
        }),
        })
        .then(() => router.push('/subscribe-thanks'))
        .catch((error) => alert(error))
    }

    return (
        <>
            <Head>
                <title>Get $10 Off Your Christmas Tree | Rancho Cucamonga, CA</title>
            </Head>
            <HeaderSubPage />
            <div className="bg-white py-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:pt-12 lg:pb-24">
                <div className="relative max-w-xl mx-auto">
                    <div className="text-center">
                        <h1 className="mt-2 mb-8 text-4xl text-center leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Get Your Coupon
                        </h1>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Enter your email address to get a $10 off coupon e-mailed to you each year. Accepted at our <Link href="/rancho-cucamonga">tree lot in Rancho Cucamonga.</Link>
                        </p>
                    </div>
                    <div id="mc_embed_signup" className="mt-12">
                        <form
                            name="coupon"
                            method="post"
                            data-netlify="true" 
                            data-netlify-honeypot="pleaseFill"
                            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            onSubmit={handleSubmit} >

                            <input type="hidden" name="form-name" value="coupon" />

                            <p hidden>
                                <label>
                                    Don’t fill this out: <input name="pleaseFill" value={state.pleaseFill} onChange={handleChange} />
                                </label>
                            </p>

                            <div className="sm:col-span-2">
                                <label htmlFor="mce-EMAIL" className="block text-sm font-medium leading-5 text-gray-700 sr-only">Email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="email" type="email" id="mce-EMAIL" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border border-gray-700 rounded" placeholder="Enter your email address" value={state.email} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <span className="w-full inline-flex rounded-md shadow-sm">
                                    <button type="submit" id="mc-embedded-subscribe" name="subscribe" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:border-red-800 focus:shadow-outline-red active:bg-red-800 transition ease-in-out duration-150">
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