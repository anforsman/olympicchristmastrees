import React, { useState } from 'react'
import Link from 'next/link'

export default function HeaderSubPage({ title }) {

  const [ isNavOpen, setIsNavOpen ] = useState(false)

  return (
    <>
        <div className="relative">

      <div className="relative bg-white pt-6">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav className="relative justify-center gap-2 place-items-center sm:h-64 grid grid-cols-8">
              <Link href="/about">
                <a className="hidden lg:block text-lg font-semibold text-gray-900 hover:text-gray-600 transition duration-150 ease-in-out">About</a>
              </Link>
              <Link href="/trees">
                <a className="hidden lg:block text-lg font-semibold text-gray-900 hover:text-gray-600 transition duration-150 ease-in-out">Christmas Trees</a>
              </Link>
              <Link href="/rancho-cucamonga"><a className="hidden lg:block text-lg font-semibold text-gray-900 hover:text-gray-600 transition duration-150 ease-in-out">Find Us</a>
              </Link>
              
              <Link href="/">
                <a className="col-span-8 lg:col-span-2 justify-items-center" aria-label="Home">
                  <img className="h-48 w-auto sm:h-64" src="/olympic-logo.png" alt="Olympic Christmas Trees in Rancho Cucamonga - From Family Farms in Washington" />
                </a>
              </Link>
      
              <Link href="/delivery">
                <a className="hidden lg:block text-lg font-semibold text-gray-900 hover:text-gray-600 transition duration-150 ease-in-out">Tree Delivery</a>
              </Link>
              <Link href="/contact">
                <a className="hidden lg:block text-lg font-semibold text-gray-900 hover:text-gray-600 transition duration-150 ease-in-out">Contact</a>
              </Link>
              <Link href="/coupon">
                <a className="hidden lg:block text-lg font-semibold text-gray-900 hover:text-gray-600 transition duration-150 ease-in-out">Get $10 Off</a>
              </Link>
            </nav>
            <div className="-mr-2 flex absolute top-8 right-8 items-center lg:hidden">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-green-900 hover:text-green-900 hover:bg-green-600 focus:outline-none focus:bg-green-100 focus:text-gren-900 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true" onClick = {() => setIsNavOpen(!isNavOpen)}>
                  <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
          </div>
        
          
        </div>

        
    </div>

{isNavOpen &&
  <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-50">
    <div className="rounded-lg shadow-md">
      <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
        <div className="px-5 pt-4 flex items-center justify-between">
          <div>
            <h1 className="font-extrabold">Olympic Christmas Trees</h1>
          </div>
          <div className="-mr-2">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700 transition duration-150 ease-in-out" aria-label="Close menu" onClick = {() => setIsNavOpen(!isNavOpen)}>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3">
        <Link href="/"><a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Home</a>
          </Link>
          <Link href="/about"><a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">About</a>
          </Link> 
          <Link href="/trees"><a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Christmas Trees</a>
          </Link>
          <Link href="/rancho-cucamonga"><a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Rancho Cucamonga</a>
          </Link>
          <Link href="/delivery"><a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Delivery Rates</a>
          </Link>
          <Link href="/contact"><a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Contact</a>
          </Link>
        </div>
        <div>
          <Link href="/coupon"><a className="block w-full px-5 py-3 text-center font-medium text-red-700 bg-gray-50 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:bg-gray-100 focus:text-red-700 transition duration-150 ease-in-out" role="menuitem">
            Get $10 Discount
          </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
}
</>
  )
}
