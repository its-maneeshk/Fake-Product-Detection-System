import joblib

def load_model():
    """Loads the ML model and vectorizer."""
    try:
        model = joblib.load("./model/fake_review_model.pkl")
        vectorizer = joblib.load("./model/tfidf_vectorizer.pkl")
        
        return model, vectorizer
    except Exception as e:
        print(f"Error loading model/vectorizer: {e}")
        return None, None
