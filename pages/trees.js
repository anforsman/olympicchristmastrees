import React from 'react';
import Head from 'next/head'
import Footer from '../components/Footer'
import HeaderSubPage from '../components/HeaderSubPage'
import Coupon from '../components/Coupon'

const ChristmasTrees = () => {
    return (
        <>
            <Head>
                <title>Fresh-Cut Christmas Trees in Rancho Cucamonga, CA</title>
            </Head>
            <HeaderSubPage />
            <div className="bg-white py-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:pt-12 lg:py-24">
                <div className="relative max-w-3xl mx-auto">
                    <div className="text-center">
                        <h1 className="mt-2 mb-8 text-4xl text-center leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Christmas Trees
                        </h1>
                    </div>
                    <div className="prose prose-lg text-gray-800 mx-auto">
                        <p className="pb-8 text-lg leading-relaxed">We sell four common types of trees, which all have their own characteristics making them unique. Some smell stronger and some last longer. Our staff is super knowledgeable so when you visit the tree lot, feel free to ask as many questions as you'd like! </p>

                        <p className="pb-8 text-lg leading-relaxed">DOUGLAS FIR | NOBLE FIR | KOREAN FIR | NORDMAN FIR <span className="block text-sm italic text-red-600">*Please note: We will not have any Natural Douglas Fir this year.</span></p>

                        

                        <p className="pb-8 text-lg leading-relaxed">The trees are available sheared or natural. The sheared trees are the full, conical-shaped trees that are common throughout all Christmas tree lots. The naturals, however, take on a shape of their own, because we let them grow as if they were wild. The only maintenance that we perform is end clipping a few branches to maintain some control over the growth of the tree.</p>

                        <h2 className="mb-8leading-none font-extrabold tracking-tight text-gray-900 sm:text-xl">The Freshest Selection</h2>
                        <p className="pb-8 text-lg leading-relaxed">We pride ourselves on having the freshest selection in the Inland Empire. Because we grow most of the trees ourselves and have a strong relationship with the grower of the rest of the trees, we can cut the trees just before they are shipped down to California. Once they arrive on our lot, they are kept under shade cloth until it is time to set them out for sale. Whether under shade cloth and standing for sale, they are always kept in water to maintain their freshness.</p> 

                        <h2 className="mb-8leading-none font-extrabold tracking-tight text-gray-900 sm:text-xl">We Harvest The Trees As Late As Possible</h2>
                        <p className="pb-8 text-lg leading-relaxed">We grow most of our trees ourselves on the Olympic Peninsula in Washington State, so we are able to ship the trees directly from the farm to the lot. This allows us to cut our trees later because the trees don’t have to go through a wholesale yard, which means the trees get to California faster.</p>

                        <h2 className="mb-8leading-none font-extrabold tracking-tight text-gray-900 sm:text-xl">Deliveries From Washington Are Staggered</h2>
                        <p className="pb-8 text-lg leading-relaxed">There are two main ways tree lots get trees ship to most tree lots. The first is via wholesale distribution centers, where trees are trucked in from various tree farms, sorted, and sit and wait to be delivered. These trees are often cut as early as Halloween and sit in wholesale yards in Southern California in 70 degree weather. The other option is retailers can have their trees shipped directly from the tree farms.</p> 

                        <p className="pb-8 text-lg leading-relaxed">Because Olympic has close relationships with family farms in Washington, we can coordinate our loads so that we can wait to harvest them until we need to load them. This means that our trees are standing in the cold, wet, Washington climate later than most trees you’ll find in Southern California. That is why our trees are so heavy. THEY ARE WATERLOGGED! And all of that moisture content in the trees is what helps make them smell fresher and last longer.</p>
                    </div>
                </div>
            </div>
            <Coupon />
            <Footer />
        </>
    );
};

export default ChristmasTrees;