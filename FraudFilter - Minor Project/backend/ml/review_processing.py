import re
import pandas as pd
import nltk
from nltk.corpus import stopwords
import os

nltk.download("stopwords")
STOPWORDS = set(stopwords.words("english"))

def clean_text(text):
    """Cleans text by removing special characters and stopwords."""
    text = re.sub(r"[^a-zA-Z\s]", "", str(text))  # Remove special characters
    text = text.lower()  # Convert to lowercase
    text = " ".join([word for word in text.split() if word not in STOPWORDS])  # Remove stopwords
    return text

def detect_fake_reviews(df, model, vectorizer):
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

     # CHANGED: Ensure processed_files directory exists
    processed_folder = "processed_files"
    os.makedirs(processed_folder, exist_ok=True)  

    # CHANGED: Add predictions to DataFrame
    df["is_fake"] = predictions  # 1 = Fake, 0 = Real
    
    # CHANGED: Save processed file with marked fake reviews
    processed_file_path = os.path.join(processed_folder, f"{prod_name}_processed.csv")
    df.to_csv(processed_file_path, index=False)

    return {
        "prod_id": prod_id,
        "prod_name": prod_name,
        "total_reviews": int(total_reviews),
        "fake_reviews_count": fake_reviews_count,
        "fake_percentage": round(fake_percentage, 2),
        "product_status": product_status,
        "processed_file_path": processed_file_path  # CHANGED: Return processed file path
    }
