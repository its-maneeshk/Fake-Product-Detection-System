import React, { useState } from "react";
import axios from "axios";

const ModelTryItOutPage = () => {
    const [activeTab, setActiveTab] = useState("csv");
    const [file, setFile] = useState(null);
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

    const handleReset = () => {
        setFile(null);
        setResult(null);
        setError(null);
        document.getElementById("fileInput").value = "";
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

            <section className="body-font py-20">
                <div className="container px-5 mx-auto flex flex-col items-center">
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

                    <div className="w-full max-w-xl bg-gray-700 drop-shadow-xl p-6 rounded-2xl shadow-lg">
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

                        {activeTab === "csv" && (
                            <div className="text-center">
                                <h2 className="text-lg font-semibold text-white mb-3">Upload CSV File</h2>
                                <p className="text-white text-sm mb-4">
                                    Upload a CSV file containing product reviews to analyze their authenticity.
                                </p>
                                <div className="flex justify-center space-x-1 mt-4">
                                <input
                                    id="fileInput"
                                    type="file"
                                    className=" block border border-gray-300 p-2 rounded bg-white backdrop-blur-md hover:border-green-500"
                                    onChange={handleFileChange}
                                />
                                    <button
                                        className="text-white bg-green-500 py-2 px-4 rounded hover:bg-green-600"
                                        onClick={handleUpload}
                                        disabled={loading}
                                    >
                                        {loading ? "Uploading..." : "Analyze"}
                                    </button>
                                    <button
                                        className="text-white bg-red-500 py-2 px-4 rounded hover:bg-red-600"
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </button>
                                </div>
                                {error && <p className="text-red-500 mt-2">{error}</p>}

                                {result && (
                                    <div className="mt-6 bg-white p-4 rounded-lg shadow-md text-left">
                                        <h2 className="text-lg text-center font-semibold underline text-gray-900 mb-3">Analysis Result</h2>
                                        <p className="text-gray-700"><strong>Product ID:</strong> {result.prod_id || "N/A"}</p>
                                        <p className="text-gray-700"><strong>Product Name:</strong> {result.prod_name || "N/A"}</p>
                                        <p className="text-gray-700"><strong>Total Reviews:</strong> {result.total_reviews}</p>
                                        <p className="text-gray-700"><strong>Fake Reviews Count:</strong> {result.fake_reviews_count}</p>
                                        <p className="text-gray-700"><strong>Chance of Being Fake:</strong> {result.fake_percentage}%</p>
                                        <p className="text-gray-700">
                                            <strong>Product Status: </strong>
                                            <span className={`font-bold ${result.product_status === "Fake" ? "text-red-600" : result.product_status === "Likely Fake" ? "text-yellow-600" : "text-green-600"}`}>
                                                {result.product_status}
                                            </span>
                                        </p>

                                        {/* GAUGE METER */}
                                        <div className="flex flex-col items-center justify-center mt-6">
                                            <svg viewBox="0 0 100 50" className="w-80">
                                                <path d="M10,50 A40,40 0 1,1 90,50" fill="none" stroke="#E5E7EB" strokeWidth="6" />
                                                <path
                                                    d="M10,50 A40,40 0 1,1 90,50"
                                                    fill="none"
                                                    stroke={result.fake_percentage > 50 ? "#FF0000" : result.fake_percentage > 25 ? "#FFA500" : "#00FF00"}
                                                    strokeWidth="6"
                                                    strokeDasharray={`${(result.fake_percentage / 100) * 125} 125`}
                                                    strokeLinecap="round"
                                                />
                                                <circle cx="50" cy="50" r="4" fill="black" />
                                                <text x="50" y="45" textAnchor="middle" fontSize="8" fill="black">
                                                    {result.fake_percentage}%
                                                </text>
                                            </svg>
                                            <p className="mt-2 text-xl font-extrabold text-gray-700">
                                            <span className={`font-bold ${result.product_status === "Fake" ? "text-red-600" : result.product_status === "Likely Fake" ? "text-yellow-600" : "text-green-600"}`}>
                                                {result.product_status}
                                            </span>
                                            </p>
                                        </div>

                                    </div>
                                )}
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
        </>
    );
};

export default ModelTryItOutPage;



