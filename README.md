# Fraud Filter - Fake Product Detection System  

**Fake Product Review Detection System 📌**  
The **Fake Product Detection System** is a **machine learning-powered web application** that helps users identify whether a product has **genuine or manipulated reviews** on eCommerce platforms. It leverages **Natural Language Processing (NLP)** and **supervised learning models** to analyze reviews and detect fake ones.

---
## 🌟 Features  

| **Feature**                    | **Description**                                                                                          |
|---------------------------------|----------------------------------------------------------------------------------------------------------|
| **Fake Review Detection**       | Classifies reviews as **Fake** or **Original** using a trained ML model.                                 |
| **User-Friendly Interface**     | Simple, intuitive UI built with **React & Tailwind CSS**.                                                |
| **API Integration**             | Connects to a **Flask backend** for real-time predictions.                                               |
| **Data Upload Support**         | Allows users to upload **CSV datasets** for batch analysis.                                              |
| **Visualization & Insights**    | Displays **review authenticity percentage** with meaningful insights.                                    |
| **Fast & Efficient Processing** | Uses **vectorization techniques** for quick text analysis.                                               |

---

## 🛠 Tech Stack  

✅ **Frontend:** Vite + React + Tailwind CSS  
✅ **Backend:** Flask (REST API)  
✅ **Machine Learning:** Scikit-learn (Logistic Regression)  
✅ **Model Storage:** Joblib for saving/loading `.pkl` models  
✅ **Data Processing:** Pandas & NumPy  

---

## 📌 How It Works ?  

1️⃣ **Train the Machine Learning model** using real & fake review datasets.  
2️⃣ **Save the trained model** as `fake_review_model.pkl`.  
3️⃣ **Run the Flask backend server** to expose a REST API.  
4️⃣ **Connect the React frontend** to interact with the API.  
5️⃣ **Upload or enter product reviews** to get authenticity results.  

⚡ **This system empowers consumers to make informed purchasing decisions by identifying fraudulent product reviews!**  

---

## 📂 Project Directory Structure  

```sh
FraudFilter - Minor Project/
│── backend/
│   ├── .venv/                     # Virtual environment (version = 3.13.2) 
│   ├── ml/                        # ML-related scripts and utilities  
│   ├── model/                     # Trained ML models  
│   ├── scraped_files/             # Stores scraped eCommerce reviews  
│   ├── uploads/                   # Stores uploaded files for analysis  
│   ├── utils/                     # Helper functions for backend  
│   ├── app.py                     # Main Flask API file  
│   ├── requirements.txt           # Python dependencies  
│── frontend/
│   ├── node_modules/              # Dependencies for frontend  
│   ├── public/                    # Public assets like index.html  
│   ├── src/                       # React source files  
│   │   ├── components/            # Reusable React components  
│   │   ├── assets/                # Images, icons, etc.  
│   │   ├── utils/                  # Utility functions  
│   ├── .env                        # Environment variables  
│   ├── .gitignore                  # Git ignore file  
│   ├── eslint.config.js            # ESLint configuration  
│   ├── index.html                  # Main HTML file  
│   ├── package.json                # Frontend dependencies  
│   ├── package-lock.json           # Lockfile for package versions  
│   ├── postcss.config.js           # PostCSS configuration  
│   ├── README.md                   # Project documentation  
│   ├── tailwind.config.js          # Tailwind configuration  
│   ├── vite.config.js              # Vite configuration  
```
---
## 📦 Installation & Setup  

### 🔹 Prerequisites  
Ensure you have the following installed on your system:  
- **Python 3.8+**  
- **Node.js & npm**  
- **pip** (Python package manager)  

---

### 🔹 Backend Setup (Flask API)  
```sh
# Navigate to the backend folder
cd backend

# Create a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py

```
#### 🚀 Flask API will start at http://127.0.0.1:5000/

### 🔹 Frontend Setup (React + Vite + Tailwind CSS)
```sh
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
#### 🚀 React app will run at http://localhost:5173/
---

## 📸 Demo Screenshots  

| **Interface** | **Preview** |
|--------------|------------|
| **HOME** | <img src="FraudFilter - Minor Project/project_images/FraudFilter_demoImage - HOME.png" width="200px"> |
| **WORKING** | <img src="FraudFilter - Minor Project/project_images/FraudFilter_demoImage - WORKING.png" width="200px"> |
| **ABOUT** | <img src="FraudFilter - Minor Project/project_images/FraudFilter_demoImage - ABOUT US.png" width="200px"> |
| **CONTACTS** | <img src="FraudFilter - Minor Project/project_images/FraudFilter_demoImage - CONTACT.png" width="200px"> |
| **BLOGS** | <img src="FraudFilter - Minor Project/project_images/FraudFilter_demoImage - BLOGS.png" width="200px"> |
| **FAQ's** | <img src="FraudFilter - Minor Project/project_images/FraudFilter_demoImage - FAQs.png" width="200px"> |
| **MODEL TRY PAGE** | <img src="FraudFilter - Minor Project/project_images/FraudFilter_demoImage - TryItOutPage.png" width="200px"> |
| **USING CSV FILE** | <img src="FraudFilter - Minor Project/project_images/FraudFilter_demoImage - USING CSV FILE.png" width="200px"> |
| **USING PRODUCT LINK** | <img src="FraudFilter - Minor Project/project_images/FraudFilter_demoImage - USING PRODUCT LINK.png" width="200px"> |


📌 More detailed **UI screenshots** can be found in the project_images/ folder.

---

## Disclaimer

> This project is **developed for educational and research purposes only.**
We have used publicly available product reviews from Flipkart to analyze and detect fake reviews.
No part of this project is intended for commercial use or to infringe on Flipkart’s rights.
All trademarks and product information belong to their respective owners.
*If required, we are willing to remove any data or content upon request.*

---

## 🔗 Contributing  

💡 **Want to contribute?** Fork the repo, create a branch, and submit a pull request. I welcome **bug fixes, feature improvements, and optimizations**.  

---

## 📬 Contact  

💻 **Developed by [Manish Patel](https://github.com/its-maneeshk)**  

📧 **Email:** [maneeshkurmii@gmail.com](mailto:maneeshkurmii@gmail.com)  
🔗 **LinkedIn:** [itsmaneeshk](https://www.linkedin.com/in/itsmaneeshk/)  
📷 **Instagram:** [its_maneeshk_](https://www.instagram.com/its_maneeshk_/)  

---

## 🏆 Tech Badges  

<p align="center">
  <img src="https://img.shields.io/badge/Code-Python-blue?style=flat-square&logo=python" alt="Python Badge">
  <img src="https://img.shields.io/badge/Tool-Git-orange?style=flat-square&logo=git" alt="Git Badge">
  <img src="https://img.shields.io/badge/Framework-Flask-red?style=flat-square&logo=flask" alt="Flask Badge">
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react" alt="React Badge">
  <img src="https://img.shields.io/badge/Project-Open%20Source-brightgreen?style=flat-square" alt="Open Source Badge">
</p>

---

🔹 **Follow my work on** [GitHub](https://github.com/its-maneeshk) & let's build something amazing together! 🚀
