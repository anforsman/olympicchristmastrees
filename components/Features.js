import React from 'react';
import {
    StaticGoogleMap,
    Marker
} from 'react-static-google-map';
import PreTitle from './PreTitle';

const Features = () => {
    return (
        
        <div className="max-w-6xl py-24 mx-auto">

            <div className="relative">
                <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Great trees. Great service.
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
                </p>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="relative">
                    <PreTitle>Big trees for the biggest holiday</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Christmas trees up to 12 feet tall.
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
                    </p>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/fresh-cut.jpg" alt="" />
                </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/fresh-cut.jpg" alt="" />
                </div>
                
                <div className="relative">
                    <PreTitle>Perfect for bedrooms and offices</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Little trees a foot small.
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                    The t
                    </p>
                </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="relative">
                    <PreTitle>Always in water</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    The freshest trees in Rancho.
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
                    </p>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/fresh-cut.jpg" alt="" />
                </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/fresh-cut.jpg" alt="" />
                </div>
                
                <div className="relative">
                    <PreTitle>Leave the mess at the lot</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Every tree gets a fresh cut.
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
                    </p>
                </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="relative">
                    <PreTitle>Leave the mess at the lot</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    We shake out the old needles.
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
                    </p>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/fresh-cut.jpg" alt="" />
                </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/fresh-cut.jpg" alt="" />
                </div>
                
                <div className="relative">
                    <PreTitle>A hassle-free experience</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    Free netting. Free tie-downs.
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
                    </p>
                </div>
            </div>
            
            <div id="location" className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="relative">
                    <PreTitle>One block north of</PreTitle>
                    <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                    Archibald &amp; Baseline
                    </h2>
                    <p className="mt-3 pb-4 text-lg leading-6 text-gray-700">
                        We're back in Rancho Cucamonga for our 41st year.
                    </p>

                    <div className="pb-4">
                        <h3 className="block text-gray-700 font-bold uppercase text-xs">Address</h3>
                        <span className="block">7110 Archibald Ave<br />Rancho Cucamonga, CA 91701</span>
                    </div>

                    <div className="pb-4">
                        <h3 className="block text-gray-700 font-bold uppercase text-xs">Phone</h3>
                        <span className="block">714-655-8338</span>
                    </div>

                    <h3 className="block text-gray-700 font-bold uppercase text-xs">Hours</h3>
                    <ul>
                        <li>Sunday thru Thursday: 10am - 8pm</li>
                        <li>Friday thru Saturday: 9am - 9pm</li>
                    </ul>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <StaticGoogleMap size="600x600" zoom="16" className="img-fluid" apiKey="AIzaSyDj71gNkPZ0bjY7-PlxYrse-JEJl8CzopM">
                        <Marker location="7110 Archibald Ave, Rancho Cucamonga, CA 91701" color="red" label="Olympic Christmas Trees" />
                    </StaticGoogleMap>
                </div>
            </div>  
        </div>
    );
};

export default Features;