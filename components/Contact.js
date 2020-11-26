import React, { useState } from 'react';
import { useRouter } from 'next/router'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const Contact = () => {

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
        .then(() => router.push('/contact-thanks'))
        .catch((error) => alert(error))
    }

    return (
        <>
            <div className="bg-white py-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:pt-12 lg:pb-24">
                <div className="relative max-w-xl mx-auto">
                    <div className="text-center">
                        <h1 className="mt-2 mb-8 text-4xl text-center leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-lg leading-6 text-gray-900">
                            Call us at 714-655-8338 or send us a message!
                        </p>
                    </div>
                    <div className="mt-12">
                        <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                        name="contact"
                        method="post"
                        data-netlify="true" 
                        data-netlify-honeypot="pleaseFill"
                        onSubmit={handleSubmit} >
                            
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden>
                                <label>
                                    Don’t fill this out: <input name="pleaseFill" value={state.pleaseFill} onChange={handleChange} />
                                </label>
                            </p>

                            <div>
                                <label for="first_name" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="first_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700" value={state.first_name} onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <label for="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="last_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700" value={state.last_name} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="email" type="email" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700" value={state.email} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="phone_number" className="block text-sm font-medium leading-5 text-gray-700">Phone Number</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="phone_number" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700" placeholder="+1 (555) 987-6543" value={state.phone_number} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="message" className="block text-sm font-medium leading-5 text-gray-700">Message</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <textarea id="message" rows="4" className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700" value={state.message} onChange={handleChange} ></textarea>
                                </div>
                            </div>


                            <div className="sm:col-span-2">
                            <span className="w-full inline-flex rounded-md shadow-sm">
                                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-700 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150">
                                Let's talk
                                </button>
                            </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;