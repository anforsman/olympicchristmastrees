import React from 'react';

const Coupon = () => {
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
                    <form className="sm:flex" aria-labelledby="newsletter-headline" data-netlify="true">
                        <input aria-label="Email address" type="email" required className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Enter your email" />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:bg-red-400 transition duration-150 ease-in-out">
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