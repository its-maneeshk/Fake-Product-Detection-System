from flask import Flask, request, jsonify
import pandas as pd
import os
import re
import joblib
import nltk
from nltk.corpus import stopwords
from flask_cors import CORS

nltk.download("stopwords")
STOPWORDS = set(stopwords.words("english"))

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# Load ML Model & Vectorizer
try:
    model = joblib.load("./model/fake_review_model.pkl")
    vectorizer = joblib.load("./model/tfidf_vectorizer.pkl")
except Exception as e:
    print(f"Error loading model/vectorizer: {e}")
    model, vectorizer = None, None

def clean_text(text):
    """Cleans text by removing special characters and stopwords."""
    text = re.sub(r"[^a-zA-Z\s]", "", str(text))  # Remove special characters
    text = text.lower()  # Convert to lowercase
    text = " ".join([word for word in text.split() if word not in STOPWORDS])  # Remove stopwords
    return text

def detect_fake_reviews(df):
    """Predicts fake reviews using the trained ML model."""
    total_reviews = len(df)

    # Clean and transform text data
    df["cleaned_review"] = df["customer_review"].apply(clean_text)
    X_tfidf = vectorizer.transform(df["cleaned_review"])

    # Predict using ML model (1 = Fake, 0 = Real)
    predictions = model.predict(X_tfidf)
    
    fake_reviews_count = int(sum(predictions))
    fake_percentage = (fake_reviews_count / total_reviews) * 100 if total_reviews > 0 else 0

    # Determine product authenticity
    if fake_percentage >= 50:
        product_status = "Fake"
    elif 25 <= fake_percentage < 50:
        product_status = "Likely Fake"
    else:
        product_status = "Genuine"

    # Get unique product ID & name
    prod_id = df["prod_id"].iloc[0] if "prod_id" in df.columns else "Unknown"
    prod_name = df["prod_name"].iloc[0] if "prod_name" in df.columns else "Unknown"

    return {
        "prod_id": prod_id,
        "prod_name": prod_name,
        "total_reviews": int(total_reviews),
        "fake_reviews_count": fake_reviews_count,
        "fake_percentage": round(fake_percentage, 2),
        "product_status": product_status
    }

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Fake Product Detection API is running!"})

@app.route("/upload", methods=["POST"])
def upload_file():
    if not model or not vectorizer:
        return jsonify({"error": "ML model not loaded. Check server logs."}), 500

    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    if file.filename.endswith(".csv"):
        filepath = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
        file.save(filepath)

        try:
            df = pd.read_csv(filepath)

            # Check for required columns
            required_columns = {"prod_id", "prod_name", "customer_review", "customer_rating"}
            if not required_columns.issubset(df.columns):
                return jsonify({"error": "Invalid CSV format"}), 400

            df.dropna(subset=["customer_review"], inplace=True)

            # Detect fake reviews
            result = detect_fake_reviews(df)

            return jsonify({
                "message": "File processed successfully",
                **result
            }), 200
        except Exception as e:
            return jsonify({"error": f"Failed to process file: {str(e)}"}), 500

    return jsonify({"error": "Invalid file format. Please upload a CSV file."}), 400

if __name__ == "__main__":
    app.run(debug=True)
