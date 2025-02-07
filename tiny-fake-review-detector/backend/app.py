from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model and vectorizer
model = joblib.load('model.pkl')
vectorizer = joblib.load('vectorizer.pkl')


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Read the uploaded file
    df = pd.read_csv(file)

    # Check if required columns are present
    if 'Review_Text' not in df.columns or 'Rating' not in df.columns:
        return jsonify({"error": "Invalid file format"}), 400

    # Vectorize the reviews
    reviews_vectorized = vectorizer.transform(df['Review_Text'])

    # Make predictions
    predictions = model.predict(reviews_vectorized)

    # Calculate the percentage of fake reviews
    fake_count = sum(predictions == 0)
    total_reviews = len(predictions)
    fake_percentage = (fake_count / total_reviews) * 100

    # Determine product status
    product_status = "Fake" if fake_percentage >= 50 else "Genuine"

    # Convert values to standard Python types
    return jsonify({
        "total_reviews": int(total_reviews),  # Convert to int
        "fake_reviews": int(fake_count),  # Convert to int
        "fake_percentage": float(fake_percentage),  # Convert to float
        "product_status": product_status
    })


if __name__ == '__main__':
    app.run(debug=True)