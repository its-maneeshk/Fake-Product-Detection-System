// PURPOSE: To answer common questions users might have about the system, how it works, or any troubleshooting tips.

import React from 'react'
import { useNavigate } from 'react-router-dom'

const FAQ = () => {
        const nevigate = useNavigate();
        const handleNevigateTOTryItOut = () => {
            nevigate('/modeltryitout')
        }
    return (
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-7 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2"><span className="inline-block text-sm font-medium text-white bg-green-400 rounded-3xl py-1 px-2 mt-4">1</span>        What is the Fake Product Detection System?</h2>
            <p className="leading-relaxed text-base">Our system uses machine learning algorithms to analyze product reviews and star ratings to identify whether a product is authentic or has fake reviews. It checks patterns in the reviews to provide an accurate product authenticity score.</p>
          </div>
        </div>
        
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2"><span className="inline-block text-sm font-medium text-white bg-green-400 rounded-3xl py-1 px-2 mt-4">2</span>        How does the system detect fake reviews?</h2>
            <p className="leading-relaxed text-base">The system analyzes both the content of the reviews and the behavior of the reviewers. It looks for common patterns of fake behavior, such as overly generic language, repeated phrases, or an unusual volume of positive reviews in a short time.</p>
          </div>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2"><span className="inline-block text-sm font-medium text-white bg-green-400 rounded-3xl py-1 px-2 mt-4">3</span>        How accurate is the system?</h2>
            <p className="leading-relaxed text-base">Our machine learning model is trained on a large dataset of authentic and fake reviews. The accuracy improves as more data is analyzed, making it a reliable tool for detecting fake products over time.</p>
          </div>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2"><span className="inline-block text-sm font-medium text-white bg-green-400 rounded-3xl py-1 px-2 mt-4">4</span>        Can the system detect all fake reviews?</h2>
            <p className="leading-relaxed text-base">While the system provides highly accurate results, no automated system is perfect. Our tool helps identify potential fake reviews, but it’s still important for users to critically assess the product and reviews themselves.</p>
          </div>
        </div>

        <button 
        onClick={handleNevigateTOTryItOut}
        className="flex mx-auto mt-20 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Try It Now
        </button>
      </div>
    </section>
    )
}

export default FAQ
