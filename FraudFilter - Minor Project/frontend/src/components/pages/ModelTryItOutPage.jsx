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

            <section className="py-20 flex flex-col items-center">
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
                {/* Tabs Section & Result Display */}
                <div className="w-full max-w-xl bg-gray-800 drop-shadow-xl p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-between mb-6 border-b border-gray-300">
                        <button
                            className={`w-1/2 py-3 text-center font-medium rounded-tl-2xl ${activeTab === "csv" ? "bg-green-500 text-white border-b-4 border-green-700" : "bg-transparent text-white hover:text-green-700"}`}
                            onClick={() => setActiveTab("csv")}
                        >
                            Using CSV File
                        </button>
                        <button
                            className={`w-1/2 py-3 text-center font-medium rounded-tr-2xl ${activeTab === "link" ? "bg-green-500 text-white border-b-4 border-green-700" : "bg-transparent text-white hover:text-green-700"}`}
                            onClick={() => setActiveTab("link")}
                        >
                            Using Product Link
                        </button>
                    </div>

                    {/* CSV Upload Form */}
                    {activeTab === "csv" && (
                        <div className="text-center">
                            <h2 className="text-lg font-semibold text-white mb-3">Upload CSV File</h2>
                            <p className="text-white text-sm mb-4">
                                Upload a CSV file containing product reviews to analyze their authenticity.
                            </p>
                            <input
                                type="file"
                                id="fileInput"
                                accept=".csv"
                                onChange={handleFileChange}
                                className="border p-2 rounded w-3/5 bg-white"
                            />
                            <div className="flex justify-center space-x-2 mt-4">
                                <button className="text-white bg-green-500 py-2 px-4 rounded hover:bg-green-600" onClick={handleUpload} disabled={loading}>
                                    {loading ? "Uploading..." : "Upload"}
                                </button>
                                <button className="text-white bg-red-500 py-2 px-4 rounded hover:bg-red-600" onClick={handleReset}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Product Link Analysis Form */}
                    {activeTab === "link" && (
                        <div className="text-center">
                            <h2 className="text-lg font-semibold text-white mb-3">Enter Product Link</h2>
                            <p className="text-white text-sm mb-4">
                                    Enter a product link to fetch and analyze reviews for fake detection.
                                </p>
                            <input
                                type="text"
                                placeholder="Enter product link"
                                value={productLink}
                                onChange={(e) => setProductLink(e.target.value)}
                                className="border p-2 rounded w-3/5 bg-white"
                            />
                            <div className="flex justify-center space-x-2 mt-4">
                                <button className="text-white bg-green-500 py-2 px-4 rounded hover:bg-green-600" onClick={handleLinkAnalysis} disabled={loading}>
                                    {loading ? "Analyzing..." : "Analyze"}
                                </button>
                                <button className="text-white bg-red-500 py-2 px-4 rounded hover:bg-red-600" onClick={handleReset}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

                    {/* Result Display Inside the Same Card */}
                    {result && (
                        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md text-center text-white">
                            <h2 className="text-lg font-semibold underline mb-3">Analysis Result</h2>
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
        </>
    );
};

export default ModelTryItOutPage;
