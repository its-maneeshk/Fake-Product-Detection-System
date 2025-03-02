// PURPOSE: A section where you can describe how your system works, its capabilities, and the accuracy of fake product detection.
import React from 'react'

const Features = () => {
    return (
        <>
            <section className="relative">
                <div className="bg-[#142F32] m-3">
                    <div className="container flex flex-col items-center px-1 py-16 pb-24 mx-auto text-left">
                        <p className="text-sm text-stone-200 xl:max-w-3xl text-gray-30">Try Now & Verify the Authenticity of Your Next Purchase!</p>
                        <h1 className="text-5xl font-bold leading-none xl:max-w-3xl  text-gray-50">How Our System Works</h1>
                        <div className="container px-5 py-9 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/3">
                                    {/* hover:scale-105 transition-transform duration-200 animate-pulse */}
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                                1
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 ml-3">Paste Product Link</h3>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                Users enter the <strong>product link</strong> from an eCommerce site, and our system automatically fetches reviews.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                                2
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 ml-3">Web Scraping</h3>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                Our system <strong>extracts reviews</strong> using web scraping, collecting text data for analysis.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                                3
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 ml-3">AI Review Analysis</h3>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                The <strong>machine learning model</strong> analyzes reviews and detects <strong>fake vs. genuine reviews</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                                                4
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 ml-3">Fake Review Detection</h3>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                The system flags <strong>fake reviews</strong>, improving <strong>fake reviews</strong> for online shoppers.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                                                5
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 ml-3">Trust Score Calculation</h3>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                The <strong>product gets an authenticity score</strong> based on real vs. fake reviews.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                6
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 ml-3">Final Result</h3>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                Users see a <strong>final rating</strong>, showing if the product is <strong>genuine or fake</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src="https://imgs.search.brave.com/Jx8eAt3b3FFc7T8qGmK4AjpohtGB8b4pA1TYkGAkfTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzY1LzEzLzk0/LzM2MF9GXzk2NTEz/OTQwOV9JT21HVGVQ/Z2ZFVW44ek1YWnFw/YTlPRXRpRmJndkVC/TC5qcGc" alt="Overlay Image" className="absolute top-[90%] left-1/2 transform -translate-x-1/2 w-3/12 sm:w-2/12 rounded-lg shadow-md" /> */}
                <div className="absolute top-[96%] left-1/2 transform -translate-x-1/2 w-1/12 sm:w-1/12 rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF156D" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
                </div>
            </section>

            <section>
                <div className="bg-[#142F32] m-3">
                    <div className="container flex flex-col items-center px-1 py-16 pb-24 mx-auto text-left">
                        <h1 className="text-4xl font-bold leading-none xl:max-w-3xl  text-gray-50">Technologies & Algorithms Used</h1>
                        <div className="container px-5 py-9 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg title-font font-medium ml-2">Web Scraping & Data Collection</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                Tools like BeautifulSoup, Selenium, and Requests extract product reviews and ratings from eCommerce websites.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <circle cx="6" cy="6" r="3"></circle>
                                                    <circle cx="6" cy="18" r="3"></circle>
                                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                                </svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg title-font font-medium ml-3">Natural Language Processing (NLP)</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                TF-IDF is used to convert textual reviews into numerical representations for further analysis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg title-font font-medium ml-3">Machine Learning Classification</h2>
                                        </div>
                                        <div className="flex-grow pl-6">
                                            <p className="leading-relaxed text-base">
                                                Logistic Regression, Random Forest, and SVM classify reviews as real or fake based on linguistic features and metadata.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg title-font font-medium ml-3">Deep Learning for Advanced Detection</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                LSTM is used to detect context-based fake reviews by analyzing sentiment inconsistencies and patterns.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 transition-transform">
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg title-font font-medium ml-3">Model Deployment & API</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">
                                                The trained model is deployed using Flask, allowing real-time review analysis through a REST API.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
