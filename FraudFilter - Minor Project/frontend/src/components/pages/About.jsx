// PURPOSE: To explain the purpose of your project, the problem it's solving, and your motivation behind it.
import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-9 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap w-full mb-12">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                            About Fake Product Detection
                        </h1>
                        <div className="h-1 w-20 bg-green-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        The Fake Product Detection project is designed to help consumers and businesses identify counterfeit products in the market. With the rise of online shopping and global trade, fake products have become a significant issue, leading to financial losses, brand damage, and even health risks.
                    </p>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Problem We're Solving</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Counterfeit products are a growing concern worldwide. They not only harm legitimate businesses but also pose serious risks to consumers. Fake electronics, pharmaceuticals, and luxury goods can be dangerous and often fail to meet safety standards. Traditional methods of detecting counterfeit products are time-consuming and often ineffective. Our project aims to address this issue by using machine learning, image recognition, and other advanced techniques to quickly and accurately identify fake products.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Motivation</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are passionate about creating a safer and more transparent marketplace for everyone. Our motivation stems from the desire to protect consumers from the dangers of counterfeit goods and to support businesses in maintaining their brand integrity. By developing this project, we hope to contribute to a more trustworthy and secure shopping experience for all.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Future Improvement and Feature addition's    <span className="inline-block text-sm font-medium text-white bg-green-400 rounded-full py-1 px-4 mt-4">
                        Upcoming
                    </span></h2>

                    <p className="text-gray-600 leading-relaxed">
                        Our platform allows users to upload images or descriptions of products they suspect might be counterfeit. Using a combination of machine learning algorithms and a comprehensive database of genuine products, our system analyzes the input and provides a confidence score indicating the likelihood of the product being fake. Users can then make informed decisions based on the results.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default About
