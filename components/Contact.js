import React from 'react';


const Contact = () => {
    return (
        <>
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
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
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label for="first_name" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="first_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700" />
                                </div>
                            </div>

                            <div>
                                <label for="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="last_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="email" type="email" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="phone_number" className="block text-sm font-medium leading-5 text-gray-700">Phone Number</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="phone_number" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700" placeholder="+1 (555) 987-6543" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="message" className="block text-sm font-medium leading-5 text-gray-700">Message</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <textarea id="message" rows="4" className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150 border rounded border-gray-700"></textarea>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                            <span className="w-full inline-flex rounded-md shadow-sm">
                                <button type="button" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-700 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
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