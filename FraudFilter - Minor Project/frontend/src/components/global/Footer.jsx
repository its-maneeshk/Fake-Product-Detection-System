import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-600 bg-[#0B0F12] body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-center md:mt-0 mt-10">
                    <span className="relative flex justify-center">
                        <div
                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span className="relative z-10 bg-[#0B0F12] px-6 title-font font-medium text-white text-xl">SOCIAL LINKS</span>
                    </span>
                    <div className="my-4">
                        <span className="inline-flex space-x-9 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-100 hover:text-[#E2FECC]  hover:scale-125 transition-transform cursor-pointer">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-100 hover:text-[#E2FECC]  hover:scale-125 transition-transform cursor-pointer">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-100 hover:text-[#E2FECC]  hover:scale-125 transition-transform cursor-pointer">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-100 hover:text-[#E2FECC]  hover:scale-125 transition-transform cursor-pointer">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-8 h-8" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">For inquiries: contact@yourdomain.com</p>
                </div>

                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-base mb-3">OUR PRODUCTS</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-300 hover:text-white cursor-pointer">GitHub</a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-white cursor-pointer">Documentation</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-base mb-3">SUPPORT</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-300 hover:text-white cursor-pointer">FAQ</a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-white cursor-pointer">Report and Issue</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-base mb-3">LEGAL</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-300 hover:text-white cursor-pointer">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-white cursor-pointer">Terms of Service</a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-white cursor-pointer">Disclaimer</a>
                            </li>
                        </nav>
                    </div>

                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
                    <p className="text-gray-900 hover:text-gray-800 cursor-pointer text-base font-semibold text-center sm:text-left">© 2025 Product Authenticity Checker | All rights reserved.
                        <a href="/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">**@MinorProject**</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
