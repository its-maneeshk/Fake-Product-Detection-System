import React, { useState, useEffect } from "react";
import axios from "axios";

const ModelTryItOutPage = () => {
    const [activeTab, setActiveTab] = useState("csv");
    const [file, setFile] = useState(null);
    const [productLink, setProductLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setError("Please select a CSV file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setLoading(true);
            setError(null);
            const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setResult(response.data);
        } catch (err) {
            setError("Failed to upload file. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleLinkAnalysis = async () => {
        if (!productLink) {
            setError("Please enter a product link.");
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post("http://127.0.0.1:5000/analyze", { url: productLink });
            setResult(response.data);
        } catch (err) {
            setError("Failed to analyze product link. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setFile(null);
        setProductLink("");
        setResult(null);
        setError(null);
        if (document.getElementById("fileInput")) {
            document.getElementById("fileInput").value = "";
        }
    };

    return (
        <>
            <section className="bg-[#0B0F12]">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100">
                                AI-Powered
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <span className="relative">Fake</span>
                            </span>{' '}Product Detection System
                        </h2>
                        <p className="text-base text-gray-300 md:text-lg">
                            Our advanced AI model analyzes customer reviews and ratings to detect fake products, helping you make informed decisions before purchasing.
                        </p>
                    </div>
                    <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
                        <div className="space-y-6 sm:px-16">
                            <div className="flex flex-col max-w-md sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-white text-xl font-bold leading-5">AI-Based Analysis</h6>
                                    <p className="text-sm text-white">
                                        Our intelligent model evaluates review sentiment and rating consistency to identify potential fake reviews.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col max-w-md sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-white text-xl font-bold leading-5">Real vs Fake Differentiation</h6>
                                    <p className="text-sm text-white">
                                        Compare customer ratings and reviews to determine authenticity with high accuracy.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 sm:px-16">
                            <div className="flex flex-col max-w-md sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-white text-xl font-bold leading-5">User-Friendly Interface</h6>
                                    <p className="text-sm text-white">
                                        Easily upload and analyze product reviews with a simple and intuitive interface.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col max-w-md sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-white text-xl font-bold leading-5">Instant Results</h6>
                                    <p className="text-sm text-white">
                                        Get a detailed analysis within seconds and ensure you buy only genuine products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 flex bg-stone-100 flex-col items-center">
                <div className="text-center w-full mb-10">
                    <span className="relative flex justify-center">
                        <div
                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span className="relative z-10 bg-stone-100 text-green-600 px-6">Detect Fake Reviews & Ensure Authenticity</span>
                    </span>
                    <h1 className="sm:text-5xl text-2xl font-salita title-font mb-4 text-gray-950">
                        AI-Powered Fake Product Detection
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold text-gray-700">
                        Uncover fake product reviews with our advanced AI-based detection system. By analyzing customer feedback, sentiment patterns, and rating inconsistencies, our model provides an accurate authenticity score—helping you make informed decisions before purchasing
                    </p>
                </div>
                {/* Tabs Section & Result Display */}
                <div className="w-full max-w-xl bg-gray-800 drop-shadow-xl p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-between mb-6 border-b border-gray-300">
                        <button
                            className={`w-1/2 py-3 text-center font-medium rounded-tl-2xl ${activeTab === "csv" ? "bg-green-500 text-white border-b-4 border-green-700" : "bg-transparent text-white hover:text-green-700"}`}
                            onClick={() => setActiveTab("csv")}
                        >
                            Analyze via Scraped CSV File
                        </button>
                        <button
                            className={`w-1/2 py-3 text-center font-medium rounded-tr-2xl ${activeTab === "link" ? "bg-green-500 text-white border-b-4 border-green-700" : "bg-transparent text-white hover:text-green-700"}`}
                            onClick={() => setActiveTab("link")}
                        >
                            Analyze Product via Link
                        </button>
                    </div>

                    {/* CSV Upload Form */}
                    {activeTab === "csv" && (
                        <div className="text-center">
                            <h2 className="text-lg font-semibold text-white mb-3">Upload CSV File</h2>
                            <p className="text-white text-sm mb-4">
                                Upload a CSV file containing product reviews and ratings. The system will analyze the data to detect fake reviews and assess product authenticity.
                            </p>
                            <div className="flex justify-center items-center  space-x-2">
                                <input
                                    type="file"
                                    id="fileInput"
                                    accept=".csv"
                                    onChange={handleFileChange}
                                    className="border p-2 rounded w-3/5 bg-white"
                                />
                                <div className="flex justify-center space-x-2">
                                    <button className="text-white bg-green-500 py-3 px-5 rounded hover:bg-green-600" onClick={handleUpload} disabled={loading}>
                                        {loading ? "Uploading..." : "Upload"}
                                    </button>
                                    <button className="text-white bg-red-500 py-3 px-5 rounded hover:bg-red-600" onClick={handleReset}>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Product Link Analysis Form */}
                    {activeTab === "link" && (
                        <div className="text-center">
                            <h2 className="text-lg font-semibold text-white mb-3">Enter Actual Product Link</h2>
                            <p className="text-white text-sm mb-4">
                                Enter a product link to fetch and analyze its reviews and ratings. The system will assess the data to detect fake reviews and determine product authenticity.
                            </p>
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="Enter product link"
                                    value={productLink}
                                    onChange={(e) => setProductLink(e.target.value)}
                                    className="border p-2 rounded w-3/5 bg-white"
                                />
                                <div className="flex justify-center space-x-2">
                                    <button className="text-white bg-green-500 py-3 px-5 rounded hover:bg-green-600" onClick={handleLinkAnalysis} disabled={loading}>
                                        {loading ? "Analyzing..." : "Analyze"}
                                    </button>
                                    <button className="text-white bg-red-500 py-3 px-5 rounded hover:bg-red-600" onClick={handleReset}>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

                    {/* Result Display Inside the Same Card */}
                    {result && (
                        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md text-white">
                            <h2 className="text-lg font-semibold underline mb-3 text-center">Analysis Result</h2>
                            <p><strong>Product ID:</strong> {result.prod_id || "N/A"}</p>
                            <p><strong>Product Name:</strong> {result.prod_name || "N/A"}</p>
                            <p><strong>Total Reviews:</strong> {result.total_reviews}</p>
                            <p><strong>Fake Reviews Count:</strong> {result.fake_reviews_count}</p>
                            <p><strong>Fake Percentage:</strong> {result.fake_percentage}%</p>
                            <p>
                                <strong>Product Status: </strong>
                                <span className={`font-bold ${result.product_status === "Fake" ? "text-red-400" : result.product_status === "Likely Fake" ? "text-yellow-400" : "text-green-400"}`}>
                                    {result.product_status}
                                </span>
                            </p>

                            {/* Gauge Meter */}
                            <div className="flex flex-col items-center justify-center mt-6">
                                <svg viewBox="0 0 100 50" className="w-64">
                                    {/* Background Arc */}
                                    <path d="M10,50 A40,40 0 1,1 90,50" fill="none" stroke="#4B5563" strokeWidth="6" />

                                    {/* Colored Progress Arc */}
                                    <path
                                        d="M10,50 A40,40 0 1,1 90,50"
                                        fill="none"
                                        stroke={result.fake_percentage > 50 ? "#FF0000" : result.fake_percentage > 25 ? "#FFA500" : "#00FF00"}
                                        strokeWidth="6"
                                        strokeDasharray={`${(result.fake_percentage / 100) * 125} 125`}
                                        strokeLinecap="round"
                                        className="transition-all duration-500 ease-in-out"
                                    />

                                    {/* Needle Indicator */}
                                    <circle cx="50" cy="50" r="4" fill="white" />
                                    <text x="50" y="45" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
                                        {result.fake_percentage}%
                                    </text>
                                </svg>
                                <p className="mt-2 text-xl font-extrabold">
                                    <span className={`font-bold ${result.product_status === "Fake" ? "text-red-400" : result.product_status === "Likely Fake" ? "text-yellow-400" : "text-green-400"}`}>
                                        {result.product_status}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section class="text-gray-300 bg-[#142F32] body-font">
                <div class="container mx-auto flex px-5 py-16 items-center justify-center">
                    <div class="w-full max-w-4xl">
                        <div class="p-6 rounded-lg border-2 border-indigo-500 text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
                                Join Us & Improve the System!
                            </h1>
                            <p class="mb-6 leading-relaxed">
                                This project is open-source! Contribute, improve, or suggest features to make it better.
                            </p>
                            <div class="flex justify-center space-x-6">
                                <button class="flex items-center justify-center font-semibold text-gray-950 bg-[#E2FECC] border-0 py-2 px-6 rounded-lg w-auto hover:bg-white hover:scale-105 transition-transform focus:outline-none">
                                    GitHub Repo
                                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <button class="flex items-center justify-center text-start font-semibold text-gray-950 bg-white border-0 py-2 px-6 rounded-lg w-auto hover:bg-white hover:scale-105 transition-transform duration-200 animate-pulse focus:outline-none">
                                    Want to contribute?
                                    <br />Fork the repo, add improvements, and submit a pull request!
                                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                            <p class="text-xs text-gray-400 mt-4">
                                Get involved and help shape the future of this project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="text-gray-600 bg-gray-200 body-font">
                <div className="container px-20 py-10 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-medium text-3xl mb-2 text-gray-900">
                                Fake Product Detection System using reviews and product link for eCommerce platforms.
                            </h1>
                            <p className="leading-relaxed">
                                Detect fake product listings based on user reviews and ratings by analyzing discrepancies in review sentiment, rating consistency, and review patterns.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-full" src="src/assets/productReviewImpact/User_review_impact (1).jpg" alt="stats" />
                    </div>
                </div>
            </section>


        </>
    );
};

export default ModelTryItOutPage;
