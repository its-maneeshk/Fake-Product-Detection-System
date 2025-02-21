import React from 'react'
import heroImage from '../../assets/heroImage.svg'
import fakeHomeImage from '../../assets/fakeHomeImage.svg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const handleScroll = () => {
        const element = document.getElementById('more-button');
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const nevigate = useNavigate();
    const handleNevigateTOAbout = () => {
        nevigate('/about')
    }

    const handleNevigateTOTryItOut = () => {
        nevigate('/modeltryitout')
    }
    return (
        <>
            <section className="text-gray-600 body-font bg-gray-200">
                <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
                    {/* <img className="lg:w-1/5 md:w-3/6 w-6/6 mb-10 object-cover object-center rounded" alt="hero" src={heroImage} /> */}
                    <img className="lg:w-3/12 md:w-3/6 w-6/6 mb-10 object-cover object-center rounded" alt="hero" src={fakeHomeImage} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-salita font-medium text-gray-900">AI-Powered Fake Product Detection: Analyzing Reviews and Ratings for Authenticity</h1>
                        <p className="mb-8 leading-relaxed">Our goal is to help consumers make informed decisions by providing a reliable tool that flags fake products based on review analysis, reducing the risks of online shopping.</p>
                        <div className="flex justify-center">
                            <button
                            onClick={handleNevigateTOTryItOut} 
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-16 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Try It Out</button>
                            <button
                                onClick={handleScroll}
                                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-16 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font" id='more-button'>
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Online Shopping Fraud Statistics
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Fake reviews and scam products affect millions of online shoppers
                            every year. Our system helps users identify fraudulent products and
                            make informed decisions.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        {/* Total Online Shopping Scams */}
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="text-red-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">
                                    1.8M+
                                </h2>
                                <p className="leading-relaxed">Scammed Shoppers in 2023</p>
                            </div>
                        </div>

                        {/* Fake Products Detected */}
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="text-yellow-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">
                                    45%
                                </h2>
                                <p className="leading-relaxed">Products Found Fake</p>
                            </div>
                        </div>

                        {/* Financial Losses Due to Fake Products */}
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="text-green-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">
                                    $5.8B+
                                </h2>
                                <p className="leading-relaxed">Losses Due to Scams</p>
                            </div>
                        </div>

                        {/* User Reports of Fake Products */}
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">
                                    2.5M+
                                </h2>
                                <p className="leading-relaxed">Fake Product Reports</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font bg-gray-100">
                <div className="container px-5 py-16 mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4">Key Features of Fake Product Detection System</h1>
                        <p className="text-lg text-gray-700 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Our advanced AI-driven system helps users identify fake products by analyzing product reviews with real-time data insights.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">AI-Powered Fake Review Detection</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Real-Time Product Analysis</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Trust Score Calculation</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Product Authenticity Report</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">User-Friendly Dashboard</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Cross-Platform Support</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Automated Review Scraper</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Fraud Warning Alerts</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Data-Driven Scam Insights</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleNevigateTOAbout}
                        className="flex mx-auto mt-12 text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg">
                        Learn More
                    </button>
                </div>
            </section>

        </>
    )
}

export default Home
