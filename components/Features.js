import React from 'react';
import {
    StaticGoogleMap,
    Marker
} from 'react-static-google-map';
import PreTitle from './PreTitle';

const Features = () => {
    return (
        
        <div className="max-w-6xl pb-24 px-8 xl:px-0 mx-auto">

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="relative pt-4">
                    <PreTitle>Big trees for the biggest holiday</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Christmas trees up to 12 feet tall.
                    </h3>
                    <p className="mt-3 mb-0 pb-0 text-lg text-gray-700">
                        Choose from Douglas, Korean, Noble, and Nordmann Fir in both sheared and natural varieties.
                    </p>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/fresh-cut.jpg" alt="" />
                </div>
            </div>

            <div className="relative mt-12 lg:mt-24 flex flex-col lg:flex-row lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="mt-10 -mx-4 relative lg:mt-0 order-last lg:order-first" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/little-christmas-trees.jpg" alt="" />
                </div>
                
                <div className="relative lg:pt-8">
                    <PreTitle>Perfect for bedrooms and offices</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Little trees a foot small.
                    </h3>
                    <p className="mt-3 text-lg text-gray-700">
                        Visit the little Noble patch to pick out a table-top tree.  Sizes range from 1-3' tall. Prices start at $21.
                    </p>
                </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="relative lg:pt-8">
                    <PreTitle>Unmatched freshness.</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    The freshest trees in Rancho.
                    </h3>
                    <p className="mt-3 text-lg text-gray-700">
                        We blow 2,000 lbs of ice into every shipment of trees, immediately cover the trees with suspended shade cloth once they arrive to the lot, and they're always displayed in buckets of water.
                    </p>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/trees-in-stands.jpg" alt="" />
                </div>
            </div>

            <div className="relative mt-12 lg:mt-24 flex flex-col lg:flex-row lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="mt-10 -mx-4 relative lg:mt-0 order-last lg:order-first" aria-hidden="true">
                    <img className="relative mx-auto" width="800" src="/shaker.jpg" alt="" />
                </div>
                
                <div className="relative lg:pt-8">
                    <PreTitle>Leave the mess at the lot</PreTitle>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    We shake out the old needles.
                    </h3>
                    <p className="mt-3 text-lg text-gray-700">
                    As Christmas trees grow, they lose needles like we lose hair. Because the trees are so dense, the needles get trapped inside the tree and that's the source of most of the mess in your house. We're one of the only tree lots in California that has a mechanical shaker to clean that mess out before we load up your tree.
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
                        The tree lot opens November 26th! 2021 marks our 42nd year selling trees in the Inland Empire.
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
                        <li>Fri - Sat: 9:00a - 9:00p</li>
                        <li>Sun - Thurs: 10:00a - 8:00p</li>
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
