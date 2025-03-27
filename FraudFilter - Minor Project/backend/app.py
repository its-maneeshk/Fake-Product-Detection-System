from flask import Flask, request, jsonify
import os
from flask_cors import CORS
from ml.model_loader import load_model
from ml.review_processing import detect_fake_reviews
from utils.file_handler import save_file, process_csv
from utils.web_scraper import scrape_reviews
import pandas as pd

# Initialize Flask App
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Set Upload Folder for CSV files
UPLOAD_FOLDER = "uploads"
PROCESSED_FOLDER = "processed_files"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # To Ensure folder exists
os.makedirs(PROCESSED_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["PROCESSED_FOLDER"] = PROCESSED_FOLDER

# Load ML Model & Vectorizer
model, vectorizer = load_model()

@app.route("/", methods=["GET"])
def home():
    """
    Root endpoint to check if the API is running.
    """
    return jsonify({"message": "Fake Product Detection API is running!"})

# This function to save processed CSV with fake review marks
def save_processed_file(df, filename):
    """
    Saves the processed CSV file with an extra column marking fake reviews.
    """
    processed_filepath = os.path.join(PROCESSED_FOLDER, f"analyzed_{filename}")
    df.to_csv(processed_filepath, index=False)
    return processed_filepath

@app.route("/upload", methods=["POST"])
def upload_file():
    """
    Handles CSV file uploads, processes reviews, and detects fake reviews.
    """
    if not model or not vectorizer:
        return jsonify({"error": "ML model not loaded. Check server logs."}), 500

    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    # Save uploaded file
    filepath = save_file(file, app.config["UPLOAD_FOLDER"])
    if not filepath:
        return jsonify({"error": "Invalid file format. Please upload a CSV file."}), 400

    # Process CSV file
    df, error_response, status_code = process_csv(filepath)
    if error_response:
        return error_response, status_code

    # Detect fake reviews
    result = detect_fake_reviews(df, model, vectorizer)

    return jsonify({
        "message": "File processed successfully",
        **result
    }), 200

@app.route("/analyze", methods=["POST"])
def analyze_product():
    """
    Scrapes product reviews from a given URL, stores them in a CSV file, and detects fake reviews.
    """
    if not model or not vectorizer:
        return jsonify({"error": "ML model not loaded. Check server logs."}), 500

    data = request.json
    if not data or "url" not in data:
        return jsonify({"error": "No URL provided"}), 400

    url = data["url"]

    # Scrape reviews from product URL
    prod_id, product_name, csv_path, df = scrape_reviews(url) # Ignore `csv_path` to avoid duplicate saving

    if df is None or df.empty:
        return jsonify({"error": "No reviews found or scraping failed."}), 500

    # ✅ Pass only "customer_review" to the ML model for processing
    result = detect_fake_reviews(df, model, vectorizer)

    return jsonify({
        "message": "URL processed successfully",
        **result
    }), 200
    
if __name__ == "__main__":
    app.run(debug=True)
