import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const Coupon = () => {

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
        <div className="bg-green-900" id="coupon">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10" id="newsletter-headline">
                    Get $10 Off Your Tree
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
                    Join our mailing list and instantly get a coupon for up to $10 off you tree.
                </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                    <form
                        className="sm:flex"
                        name="coupon"
                        method="post"
                        data-netlify="true" 
                        data-netlify-honeypot="pleaseFill"
                        onSubmit={handleSubmit}>
                            <input type="hidden" name="form-name" value="coupon" />
                            <p hidden>
                                <label>
                                    Don’t fill this out: <input name="pleaseFill" value={state.pleaseFill} onChange={handleChange} />
                                </label>
                            </p>
                        <input aria-label="Email address" type="email" name="email" required className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Enter your email"
                        value={state.email}
                        onChange={handleChange} />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:bg-red-400 transition duration-150 ease-in-out">
                            Join
                        </button>
                        </div>
                    </form>
                    <p className="mt-3 text-sm leading-5 text-gray-300">
                        We'll never spam you. Read our
                        <a href="#" className="inline-block ml-1 text-white font-medium underline">
                        Privacy Policy.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coupon;