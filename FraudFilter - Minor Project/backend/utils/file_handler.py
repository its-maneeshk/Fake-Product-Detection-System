import os
import pandas as pd
from flask import jsonify

def save_file(file, upload_folder):
    """Saves uploaded file and returns the filepath."""
    if file.filename.endswith(".csv"):
        filepath = os.path.join(upload_folder, file.filename)
        file.save(filepath)
        return filepath
    return None

def process_csv(filepath):
    """Reads and validates CSV file."""
    try:
        df = pd.read_csv(filepath)

        # Check for required columns
        required_columns = {"prod_id", "prod_name", "customer_review", "customer_rating"}
        if not required_columns.issubset(df.columns):
            return None, jsonify({"error": "Invalid CSV format"}), 400

        df.dropna(subset=["customer_review"], inplace=True)
        return df, None, None
    except Exception as e:
        return None, jsonify({"error": f"Failed to process file: {str(e)}"}), 500
