import { useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    setResult(null);
    setError(null);
  };


  const handleAnalyze = async () => {
    if (!url) {
      setError("Please enter a product link.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/analyze", { url });

      setResult(response.data);
    } catch (err) {
      setError("Failed to analyze product. Ensure API is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">

        <h2 className="text-xl font-semibold mb-4">Analyze by Product Link</h2>
        <input
          type="text"
          placeholder="Enter product URL"
          value={url}
          onChange={handleUrlChange}
          className="mb-4 border p-2 w-full"
        />
        <button
          onClick={handleAnalyze}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {result && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <p><strong>Product Name:</strong> {result.product_name}</p>
            <p><strong>Total Reviews:</strong> {result.total_reviews}</p>
            <p><strong>Fake Reviews:</strong> {result.fake_reviews_count}</p>
            <p><strong>Fake Percentage:</strong> {result.fake_percentage}%</p>
            <p><strong>Product Status:</strong> <span className="font-bold">{result.product_status}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
