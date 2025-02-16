from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

# **Single Review Analysis**
@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.json
    if not data or 'text' not in data:
        return jsonify({"error": "No text provided"}), 400

    review_text = data['text']
    analysis = TextBlob(review_text)
    sentiment_score = analysis.sentiment.polarity  # Get sentiment polarity

    # Determine sentiment (Good/Bad)
    sentiment = "Good" if sentiment_score >= 0 else "Bad"

    return jsonify({
        "text": review_text,
        "sentiment_score": sentiment_score,
        "sentiment": sentiment
    })


# **CSV File Upload for Bulk Analysis**
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Read CSV file
    df = pd.read_csv(file)

    # Check if required column exists
    if 'Review_Text' not in df.columns:
        return jsonify({"error": "Invalid file format"}), 400

    # Analyze each review
    results = []
    for review in df['Review_Text']:
        analysis = TextBlob(review)
        sentiment_score = analysis.sentiment.polarity
        sentiment = "Good" if sentiment_score >= 0 else "Bad"

        results.append({
            "review": review,
            "sentiment_score": sentiment_score,
            "sentiment": sentiment
        })

    return jsonify({
        "total_reviews": len(results),
        "results": results
    })


if __name__ == '__main__':
    app.run(debug=True)  # Runs on all interfaces
