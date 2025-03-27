from flask import Flask, request, jsonify
from flask_cors import CORS
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

app = Flask(__name__)
CORS(app)  # Enable CORS form cross platform accessing

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

        results = []
        page_count = 0  # Track number of pages scraped

        while page_count < 3:  # Limit to 3 pages
            page_count += 1  # Increase page count

            # Scrape ratings
            rating_elements = driver.find_elements(By.CSS_SELECTOR, "div.XQDdHH.Ga3i8K")
            ratings = [rating.text.strip() for rating in rating_elements]

            # Scrape reviews
            review_elements = driver.find_elements(By.CSS_SELECTOR, "p.z9E0IG")
            reviews = [review.text.strip() for review in review_elements]

            # Combine reviews and ratings safely
            for i in range(len(reviews)):
                results.append({
                    "review": reviews[i],
                    "rating": ratings[i] if i < len(ratings) else "N/A"
                })

            # Try to find and click the "Next" button
            try:
                next_button = driver.find_element(By.CSS_SELECTOR, "a._9QVEpD")  # Adjust selector
                driver.execute_script("arguments[0].click();", next_button)
                time.sleep(5)  # Wait for next page to load
            except:
                break  # If no next button, exit loop

        return jsonify({
            "total_reviews": len(results),
            "results": results
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        driver.quit()  # Always quit the browser

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask API
