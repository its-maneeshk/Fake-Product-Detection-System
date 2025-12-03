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

UPLOAD_FOLDER = "uploads"
PROCESSED_FOLDER = "processed_files"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["PROCESSED_FOLDER"] = PROCESSED_FOLDER

# Load ML model
model, vectorizer = load_model()


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Fake Product Detection API is running!"})


@app.route("/upload", methods=["POST"])
def upload_file():
    if not model or not vectorizer:
        return jsonify({"error": "ML model not loaded"}), 500

    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]

    filepath = save_file(file, app.config["UPLOAD_FOLDER"])
    if not filepath:
        return jsonify({"error": "Invalid file format. Upload CSV only"}), 400

    df, err, code = process_csv(filepath)
    if err:
        return err, code

    result = detect_fake_reviews(df, model, vectorizer)

    return jsonify({
        "message": "File processed successfully",
        **result
    }), 200


@app.route("/analyze", methods=["POST"])
def analyze_product():
    if not model or not vectorizer:
        return jsonify({"error": "ML model not loaded"}), 500

    data = request.json
    if not data or "url" not in data:
        return jsonify({"error": "No URL provided"}), 400

    url = data["url"]

    prod_id, prod_name, csv_path, df = scrape_reviews(url)

    # 🚫 FIX: Prevent API crash
    if not isinstance(df, pd.DataFrame):
        return jsonify({"error": "Scraper returned invalid data"}), 500

    if df.empty:
        return jsonify({"error": "No reviews found for this product"}), 404

    result = detect_fake_reviews(df, model, vectorizer)

    return jsonify({
        "message": "URL processed successfully",
        "product_id": prod_id,
        "product_name": prod_name,
        **result
    }), 200


if __name__ == "__main__":
    app.run(debug=True)