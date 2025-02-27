// PURPOSE: To answer common questions users might have about the system, how it works, or any troubleshooting tips.

import React from 'react'
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { title: "How does the Fake Product Detection System work?", content: "Our system uses machine learning to analyze customer reviews and ratings, identifying inconsistencies that may indicate fake products." },
    { title: "What data does the system analyze?", content: "It processes product reviews, customer ratings, and metadata to classify products as genuine or potentially fake." },
    { title: "Can the system detect fake reviews in real-time?", content: "Yes, our system continuously analyzes new reviews and provides real-time insights into product authenticity." },
    { title: "How does the system differentiate between fake and genuine reviews?", content: "The system uses sentiment analysis and natural language processing to detect inconsistencies in reviews. It checks for patterns like exaggerated praise, repetitive content, and mismatches between ratings and text." },
    { title: "What criteria determine if a product is fake?", content: "A product is classified as fake if a significant percentage of its reviews are identified as fraudulent. If 50% or more of the reviews are fake, the product is flagged as fraudulent." },
    { title: "What measures are taken to prevent false positives?", content: "The system uses multiple indicators to ensure accurate detection. It does not rely solely on one metric but evaluates linguistic patterns, review behavior, and customer sentiment trends." },
    { title: "Does the system provide a confidence score for its results?", content: "Yes, each product analysis includes a confidence score indicating the likelihood of fake reviews." },
    { title: "Does the system support multiple languages?", content: "Currently, our model primarily works with English-language reviews. However, we are working on expanding support for multiple languages." },
    { title: "How accurate is the fake product detection?", content: "Accuracy depends on data quality and volume. Our model is trained on a large dataset for high precision." },
    { title: "Which eCommerce platforms are supported?", content: "The system supports multiple platforms via web scraping and API integration for review analysis." },
    { title: "How can I upload a product review file?", content: "You can upload a CSV file containing product ID, name, customer reviews, and ratings for analysis." },
    { title: "What happens if a product is marked as fake?", content: "If a product is classified as fake, we recommend cross-checking with other sources and reporting the seller if necessary." },
    { title: "Can I trust the system's results?", content: "Our system is trained on a large dataset and provides highly accurate results, but manual verification is always recommended." },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-stone-100">
      <div className="container max-w-4xl px-6 py-8 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-950 lg:text-3xl">
          Frequently Asked Questions
        </h1>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-900 text-xl font-semibold rounded-lg">
              <button
                className="flex items-center justify-between w-full p-4"
                onClick={() => toggleFaq(index)}
              >
                <h1 className="font-semibold text-gray-950 text-left">{faq.title}</h1>
                <span className={`text-gray-600 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <p className="px-4 pb-4 text-sm text-gray-700">{faq.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
