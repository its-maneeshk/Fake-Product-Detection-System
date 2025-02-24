// PURPOSE: To keep users updated about any new updates, developments, or related news in the eCommerce and product authenticity domain.

import React from 'react'
import { useEffect, useState } from "react";

const Blogs = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const topic = "scams"; // Define your topic here
    const API_KEY = import.meta.env.GUARDIAN_API_KEY; // Replace with your API key

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://content.guardianapis.com/search?q=${topic}&api-key=${API_KEY}&show-fields=thumbnail`
                );
                const data = await response.json();
                setNews(data.response.results);
            } catch (err) {
                setError("Failed to load news. Please try again later.");
                console.error("Error fetching news:", err);
            } finally {
                setTimeout(() => setLoading(false), 1000); 
            }
        };

        fetchNews();
    }, []);



    return (
        <>
            <section className="px-6 py-12 bg-gray-50 text-gray-900">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
                        Latest News on "{topic}"
                    </h1>

                    {/* Custom Loading Animation */}
                    {loading && (
                        <div className="relative flex justify-center items-center w-full h-[60vh]">
                            <div className="flex justify-center items-center">
                                <div className="absolute animate-spin rounded-md h-36 w-36 border-4 border-[#142F32]"></div>
                                <img
                                    src="https://clipart-library.com/images/dT4oReB7c.jpg"
                                    className="rounded-full h-28 w-28 animate-horizontal-spin"
                                    alt="Loading"
                                />
                            </div>
                            <span className="text-2xl text-[#142F32] ml-12">Fetching recent news <br/> Please wait...</span>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="text-center text-red-600 font-medium">
                            {error}
                        </div>
                    )}

                    {/* News Content */}
                    {!loading && !error && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.map((article, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <img
                                        src={article.fields?.thumbnail || "https://via.placeholder.com/300"}
                                        alt="News Thumbnail"
                                        className="w-full h-52 object-cover"
                                    />
                                    <div className="p-5">
                                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                            {article.webTitle}
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            {new Date(article.webPublicationDate).toLocaleDateString()}
                                        </p>
                                        <a
                                            href={article.webUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-block text-blue-600 font-medium hover:underline"
                                        >
                                            Read More →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>


        </>

    )
}

export default Blogs
