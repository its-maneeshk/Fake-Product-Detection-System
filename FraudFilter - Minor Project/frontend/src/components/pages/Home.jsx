import React from 'react'
import frameImage from '../../assets/frameImage.png'
import HomePageVideo from '../../assets/homePageVideo.mp4'
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
            <section className="text-gray-600 bg-stone-100 body-font">
                <div className="container mx-auto flex px-32 py-16 md:py-24 lg:py-40 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-sans font-bold text-[#281930]">Detect Fake Reviews & Ensure Trust in Online Shopping
                        </h1>
                            <p className="text-[#142F32] hidden text-2xl lg:inline-block" >AI-Powered Fake Product Detection:Analyzing Reviews and Ratings for Authenticity</p>
                        <p className="mb-8 leading-relaxed">Our Fake Product Detection System helps identify fake reviews by analyzing customer feedback. Upload product reviews, get insights, and make informed decisions before purchasing</p>
                        <div className="flex justify-center">
                            <button
                                onClick={handleNevigateTOTryItOut}
                                className="inline-flex items-center justify-center w-60 text-white bg-[#142F32] border-0  py-2 px-6 focus:outline-none hover:bg-gray-950 hover:scale-105 transition-transform duration-200 rounded-lg text-lg">
                                Get Started
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <button
                                onClick={handleScroll}
                                className="ml-4 inline-flex items-center justify-center text-[#142F32] bg-white border-2 font-semibold border-gray-900 rounded-lg py-2 px-6 focus:outline-none hover:bg-gray-300 hover:scale-105 transition-transform text-lg">
                                See More
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>

                            </button>
                        </div>

                    </div>
                    <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        {/* Frame Image */}
                        <img
                            src={frameImage}
                            alt="Frame"
                            className="w-full object-cover"
                        />

                        {/* Video Overlay (Placed Inside the Frame) */}
                        <div className="absolute -top-3 -left-1 w-full h-full flex items-center justify-center p-4">
                            <video
                                className="w-[95.5%] h-[83%] object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={HomePageVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#142F32] body-font" id='more-button'>
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                            Online Shopping Fraud Statistics
                        </h1>
                        <p className="text-gray-300 lg:w-2/3 mx-auto leading-relaxed text-base">
                            Fake reviews and scam products affect millions of online shoppers
                            every year. Our system helps users identify fraudulent products and
                            make informed decisions.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        {/* Total Online Shopping Scams */}
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 text-white white-glassmorphism px-4 py-6 rounded-lg hover:scale-105 transition-transform">
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
                                <h2 className="title-font font-medium text-3xl text-white">
                                    1.8M+
                                </h2>
                                <p className="leading-relaxed">Scammed Shoppers in 2023</p>
                            </div>
                        </div>

                        {/* Fake Products Detected */}
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 white-glassmorphism px-4 py-6 rounded-lg hover:scale-105 transition-transform">
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
                                <h2 className="title-font font-medium text-3xl text-white">
                                    45%
                                </h2>
                                <p className="leading-relaxed text-white">Products Found Fake</p>
                            </div>
                        </div>

                        {/* Financial Losses Due to Fake Products */}
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 white-glassmorphism px-4 py-6 rounded-lg hover:scale-105 transition-transform">
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
                                <h2 className="title-font font-medium text-3xl text-white">
                                    $5.8B+
                                </h2>
                                <p className="leading-relaxed text-white">Losses Due to Scams</p>
                            </div>
                        </div>

                        {/* User Reports of Fake Products */}
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 white-glassmorphism px-4 py-6 rounded-lg hover:scale-105 transition-transform">
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
                                <h2 className="title-font font-medium text-3xl text-white">
                                    2.5M+
                                </h2>
                                <p className="leading-relaxed text-white">Fake Product Reports</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600  bg-stone-100 body-font">
                <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why Trust Our Detection System?</h1>
                        <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>

                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">AI-Powered Detection – Machine learning ensures</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">Real-Time Review Processing – Fast and reliable results.</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">User-Friendly – Simple file upload & instant reports</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">Open Source – Available on GitHub for contributions.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font bg-[#0B0F12]">
                <div className="container px-5 py-16 mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="sm:text-4xl text-3xl font-bold text-white mb-4">Key Features of Fake Product Detection System</h1>
                        <p className="text-lg text-gray-300 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Our advanced AI-driven system helps users identify fake products by analyzing product reviews with real-time data insights.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">AI-Powered Fake Review Detection</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">Real-Time Product Analysis</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">Trust Score Calculation</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">Product Authenticity Report</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">User-Friendly Dashboard</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">Cross-Platform Support</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">Automated Review Scraper</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">Fraud Warning Alerts</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg flex p-4 h-full items-center hover:scale-105 transition-transform">
                                <svg className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-gray-950">Data-Driven Scam Insights</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleNevigateTOAbout}
                        className="flex mx-auto mt-12 text-gray-950 bg-[#E2FECC] border-0 py-3 px-8 focus:outline-none hover:bg-white hover:scale-105 transition-transform duration-200 animate-pulse rounded-lg text-lg">
                        Learn More
                    </button>
                </div>
            </section>

            <section className="text-gray-300 bg-[#142F32] body-font">
                <div className="container mx-auto flex px-5 py-16 items-center justify-center">
                    <div className="w-full max-w-4xl">
                        <div className="p-6 rounded-lg border-2 border-indigo-500 text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
                                Join Us & Improve the System!
                            </h1>
                            <p className="mb-6 leading-relaxed">
                                This project is open-source! Contribute, improve, or suggest features to make it better.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                                {/* GitHub Repo Button */}
                                <a
                                    href="https://github.com/its-maneeshk/Fake-Product-Detection-System.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center font-semibold text-gray-950 bg-[#E2FECC] py-6 px-6 rounded-lg w-full sm:w-auto hover:bg-white hover:scale-105 transition-transform focus:outline-none shadow-md"
                                >
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mr-2">
                                        <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.266c-3.338.726-4.037-1.61-4.037-1.61-.547-1.39-1.335-1.76-1.335-1.76-1.09-.743.084-.727.084-.727 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.806 1.305 3.49.997.108-.776.42-1.305.764-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.236-3.22-.124-.303-.536-1.525.116-3.176 0 0 1.01-.323 3.3 1.23a11.43 11.43 0 0 1 3-.404c1.02.006 2.045.137 3 .404 2.29-1.553 3.298-1.23 3.298-1.23.653 1.65.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.477 5.922.43.37.81 1.104.81 2.226v3.293c0 .32.19.694.8.577C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                                    </svg>
                                    GitHub Repo
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>

                                {/* Contribute Button */}
                                <a
                                    href="https://github.com/login?return_to=%2Fits-maneeshk%2FFake-Product-Detection-System"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-start font-semibold text-gray-950 bg-white py-3 px-6 rounded-lg w-full sm:w-auto hover:bg-gray-100 hover:scale-105 transition-transform duration-200 focus:outline-none shadow-md"
                                >
                                    <svg
                                        className="w-7 h-7 mr-2"
                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M6 3v8"></path> <path d="M18 3v8"></path> <path d="M6 12a6 6 0 0 0 12 0"></path> <circle cx="6" cy="3" r="2"></circle> <circle cx="18" cy="3" r="2"></circle> <circle cx="12" cy="15" r="2"></circle>
                                    </svg>
                                    <span>
                                        Want to contribute? 
                                        <br className="hidden sm:block" />
                                        Fork the repo & submit a pull request!
                                    </span>
                                    <svg className="w-5 h-5 ml-2 mt-1 sm:mt-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>

                            <p className="text-xs text-gray-400 mt-4">
                                Get involved and help shape the future of this project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
