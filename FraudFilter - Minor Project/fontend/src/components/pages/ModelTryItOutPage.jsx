import React, { useState } from 'react'

const ModelTryItOutPage = () => {
  const [activeTab, setActiveTab] = useState("csv");
  return (
    <>
      <section className="text-gray-600 bg-gray-200 body-font">
        <div className="container px-20 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-3xl mb-2 text-gray-900">Fake Product Detection System using reviews and product link for eCommerce platforms. Powered by React, Tailwind CSS, Python Flask, and Machine Learning.</h1>
              <div className="leading-relaxed">Detect fake product listings based on user reviews and ratings by analyzing discrepancies in review sentiment, rating consistency, and review patterns.</div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
              <p className="leading-relaxed">Daily Active Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
              <p className="leading-relaxed">Product Identified Daily</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">82%</h2>
              <p className="leading-relaxed">Accuracy</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img className="object-cover object-center w-full h-full" src="src\assets\productReviewImpact\User_review_impact (1).jpg" alt="stats" />
          </div>
        </div>
      </section>

      <section className="body-font py-20">
        <div className="container px-5 mx-auto flex flex-col items-center">
          {/* Header */}
          <div className="text-center w-full mb-10">
            <h2 className="text text-green-500 tracking-widest font-medium title-font mb-1">
              FAKE PRODUCT AUTHENTICITY DETECTION
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Detect Fake Reviews & Products
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
              Upload a CSV file or enter a product link to analyze its reviews and determine whether the product is fake or authentic.
            </p>
          </div>

          {/* Green Glassmorphism Card */}
          <div className="w-full max-w-xl bg-gray-700 drop-shadow-xl p-6 rounded-2xl shadow-lg">
            {/* Tabs */}
            <div className="flex justify-between mb-6 border-b border-gray-300">
              <button
                className={`w-1/2 py-3 text-center font-medium rounded-tl-2xl ${activeTab === "csv"
                  ? "bg-green-500 text-white border-b-4 border-green-700"
                  : "bg-transparent text-white hover:text-green-700"
                  }`}
                onClick={() => setActiveTab("csv")}
              >
                Using CSV File
              </button>
              <button
                className={`w-1/2 py-3 text-center font-medium rounded-tr-2xl ${activeTab === "link"
                  ? "bg-green-500 text-white border-b-4 border-green-700"
                  : "bg-transparent text-white hover:text-green-700"
                  }`}
                onClick={() => setActiveTab("link")}
              >
                Using Product Link
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "csv" && (
              <div className="text-center">
                <h2 className="text-lg font-semibold text-white mb-3">Upload CSV File</h2>
                <p className="text-white text-sm mb-4">
                  Upload a CSV file containing product reviews to analyze their authenticity.
                </p>
                <input type="file" className="mx-auto block border border-gray-300 p-2 rounded bg-white backdrop-blur-md" />
              </div>
            )}

            {activeTab === "link" && (
              <div className="text-center">
                <h2 className="text-lg font-semibold text-white mb-3">Enter Product Link</h2>
                <p className="text-white text-sm mb-4">
                  Enter a product link to fetch and analyze reviews for fake detection.
                </p>
                <div className="flex justify-center">
                  <input
                    type="text"
                    placeholder="Enter product link"
                    className="border border-gray-300 p-2 rounded w-3/5 bg-white backdrop-blur-md"
                  />
                  <button className="ml-2 text-white bg-green-500 py-2 px-4 rounded hover:bg-green-600">
                    Analyze
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      <section className="text-gray-600 bg-gray-200 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-900 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <h1 className='text-2xl text-black font-bold mb-4'>A brand is no longer what we tell the consumer it is—it is what consumers tell each other it is.</h1>
            <p className="leading-relaxed text-lg">In today’s digital marketplace, consumers rely heavily on reviews to make informed decisions. However, fake reviews and counterfeit products have corrupted this trust, misleading buyers and damaging genuine businesses. As Scott Cook once said, 'A brand is no longer what we tell the consumer it is—it is what consumers tell each other it is.' When deception spreads unchecked, it distorts reality, making it harder for consumers to differentiate between what is real and what is fake. Detecting fraudulent reviews isn’t just about protecting customers—it’s about restoring truth in commerce, ensuring that quality and authenticity prevail over manipulation and dishonesty</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font italic tracking-wider text-lg">Leonardo da Vinci</h2>
            <p className="text-gray-700">~ a Renaissance genius, artist, scientist, inventor, engineer, anatomist, visionary, innovator.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ModelTryItOutPage
