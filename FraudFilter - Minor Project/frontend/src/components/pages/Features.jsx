// PURPOSE: A section where you can describe how your system works, its capabilities, and the accuracy of fake product detection.
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Features = () => {
    const nevigate = useNavigate();
    const handleNevigateTOTryItOut = () => {
        nevigate('/modeltryitout')
    }
    return (
        <>
            <section className="text-gray-600 body-font bg-gray-200">
                <div className="container px-5 py-9 mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How Our System Works</h2>

                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg hover:shadow-2xl transition duration-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        1
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 ml-3">Paste Product Link</h3>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Users enter the **product link** from an eCommerce site, and our system automatically fetches reviews.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg hover:shadow-2xl transition duration-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                        2
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 ml-3">Web Scraping</h3>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Our system **extracts reviews** using web scraping, collecting text data for analysis.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg hover:shadow-2xl transition duration-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                        3
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 ml-3">AI Review Analysis</h3>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        The **machine learning model** analyzes reviews and detects **fake vs. genuine reviews**.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg hover:shadow-2xl transition duration-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                                        4
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 ml-3">Fake Review Detection</h3>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        The system flags **fake reviews**, improving **trust & reliability** for online shoppers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg hover:shadow-2xl transition duration-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                                        5
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 ml-3">Trust Score Calculation</h3>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        The **product gets an authenticity score** based on real vs. fake reviews.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg hover:shadow-2xl transition duration-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        6
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 ml-3">Final Result</h3>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Users see a **final rating**, showing if the product is **genuine or fake**.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center mt-12">
                        <button 
                        onClick={handleNevigateTOTryItOut}
                        className="text-white bg-blue-600 hover:bg-blue-700 transition duration-300 px-8 py-3 rounded-lg text-lg">
                            Try Nows
                        </button>
                    </div>

                </div>
            </section>

            <section className="text-gray-600 body-font">
    <div className="container px-5 py-16 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Technologies & Algorithms Used in Backend
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            

            <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Natural Language Processing (NLP)</h2>
                    <p className="leading-relaxed text-base">
                        NLP techniques like TF-IDF and Word2Vec are used to analyze text patterns and identify synthetic reviews. These help in understanding word relationships and spotting anomalies.
                    </p>
                </div>
            </div>
            

            <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Machine Learning classNameification</h2>
                    <p className="leading-relaxed text-base">
                        Supervised learning models like Random Forest and Logistic Regression are trained on labeled datasets to classNameify reviews as real or fake based on linguistic features and metadata.
                    </p>
                </div>
            </div>
            

            <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Deep Learning (LSTM & BERT)</h2>
                    <p className="leading-relaxed text-base">
                        Advanced models like LSTM and BERT are utilized for detecting context-based fake reviews by analyzing sentiment trends and inconsistencies in textual data.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</section>

        </>
    )
}

export default Features
