export default function HeaderSubPage({ title }) {
  return (
        <div className="relative bg-gray-50 overflow-hidden">

      <div className="relative bg-white-700 bg-opacity-55 pt-6 pb-6">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav className="relative justify-center gap-2 place-items-center sm:h-64 grid grid-cols-8">
              <a href="/about" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">About</a>
              <a href="/trees" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">Christmas Trees</a>
              <a href="/rancho-cucamonga" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">Find Us</a>
              
              <a className="col-span-2 justify-items-center" href="/" aria-label="Home">
                <img className="h-24 w-auto sm:h-64" src="/olympic-logo.png" alt="Olympic Christmas Trees in Rancho Cucamonga - From Family Farms in Washington" />
              </a>
      
              <a href="/delivery" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">Tree Delivery</a>
              <a href="/contact" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">Contact</a>
              <a href="/coupon" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">Get $10 Off</a>

              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-700 hover:bg-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-700 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>

          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md">
              <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg" alt="" />
                  </div>
                  <div className="-mr-2">
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700 transition duration-150 ease-in-out" aria-label="Close menu">
                      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Product</a>
                  <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Features</a>
                  <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Marketplace</a>
                  <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Company</a>
                </div>
                <div>
                  <a href="#coupon" className="block w-full px-5 py-3 text-center font-medium text-red-700 bg-gray-50 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:bg-gray-100 focus:text-red-700 transition duration-150 ease-in-out" role="menuitem">
                    Get $10 Discount
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
