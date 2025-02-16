from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time

app = Flask(__name__)
CORS(app)  # Enable CORS


# **Single Review Analysis**
@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.json
    if not data or 'text' not in data:
        return jsonify({"error": "No text provided"}), 400

    review_text = data['text']
    analysis = TextBlob(review_text)
    sentiment_score = analysis.sentiment.polarity  # Get sentiment polarity
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

    df = pd.read_csv(file)

    # Check if required column exists
    if 'Review_Text' not in df.columns:
        return jsonify({"error": "Invalid file format"}), 400

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


# **Scrape Reviews from a URL and Analyze Sentiment**
@app.route('/scrape', methods=['POST'])
def scrape_reviews():
    data = request.json
    if not data or 'url' not in data:
        return jsonify({"error": "No URL provided"}), 400

    url = data['url']

    # Set up Selenium WebDriver
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Run in headless mode
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

    try:
        driver.get(url)
        time.sleep(5)  # Wait for page to load

        # Scrape reviews (Modify selectors based on eCommerce site)
        review_elements = driver.find_elements(By.CLASS_NAME, "a-profile-name")
        reviews = [review.text for review in review_elements]

        driver.quit()  # Close browser

        # Analyze sentiment for each review
        results = []
        for review in reviews:
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

    except Exception as e:
        driver.quit()
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)  # Run on all interfaces
