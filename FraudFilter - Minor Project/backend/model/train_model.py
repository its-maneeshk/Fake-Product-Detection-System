import pandas as pd
import re
import nltk
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Download NLTK stopwords
nltk.download("stopwords")
from nltk.corpus import stopwords

STOPWORDS = set(stopwords.words("english"))

def clean_text(text):
    """Removes special characters, converts to lowercase, and removes stopwords."""
    text = re.sub(r"[^a-zA-Z\s]", "", str(text))  # Remove special characters
    text = text.lower()  # Convert to lowercase
    text = " ".join([word for word in text.split() if word not in STOPWORDS])  # Remove stopwords
    return text

# Load dataset
df = pd.read_csv("./dataset/TrainingDataset.csv")  # Replace with actual dataset file

# Ensure required columns exist
required_columns = {"customer_review", "Label"}
if not required_columns.issubset(df.columns):
    raise ValueError("Dataset must contain 'customer_review' and 'Label' columns")

# Preprocess text
df["cleaned_review"] = df["customer_review"].apply(clean_text)

# Convert labels to binary (1 = Fake, 0 = Real)
df["Label"] = df["Label"].map({"CG": 1, "OR": 0})

# Split data
X_train, X_test, y_train, y_test = train_test_split(df["cleaned_review"], df["Label"], test_size=0.2, random_state=42)

# Convert text to TF-IDF features
vectorizer = TfidfVectorizer(max_features=5000)
X_train_tfidf = vectorizer.fit_transform(X_train)
X_test_tfidf = vectorizer.transform(X_test)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_tfidf, y_train)

# Evaluate model
y_pred = model.predict(X_test_tfidf)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.2f}")

# Save model and vectorizer
joblib.dump(model, "fake_review_model.pkl")
joblib.dump(vectorizer, "tfidf_vectorizer.pkl")
