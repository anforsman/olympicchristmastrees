import React from 'react';
import {
    StaticGoogleMap,
    Marker
} from 'react-static-google-map';
import PreTitle from './PreTitle';

const Location = () => {
    return (
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative">
                <PreTitle>One block north of</PreTitle>
                <h1 className="mt-2 mb-8 text-4xl leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Archibald &amp; Baseline
                </h1>
                <p className="mt-3 pb-4 text-lg leading-6 text-gray-700">
                    We're back in Rancho Cucamonga for our 41st year. Tree lot opens Friday, Nov. 27th at noon!
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
    );
};

export default Location;