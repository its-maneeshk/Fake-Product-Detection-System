# 🚀 Fraud Filter - Fake Product Detection System  

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

## 📌 How It Works  

1️⃣ **Train the Machine Learning model** using real & fake review datasets.  
2️⃣ **Save the trained model** as `fake_review_model.pk`.  
3️⃣ **Run the Flask backend server** to expose a REST API.  
4️⃣ **Connect the React frontend** to interact with the API.  
5️⃣ **Upload or enter product reviews** to get authenticity results.  

⚡ **This system empowers consumers to make informed purchasing decisions by identifying fraudulent product reviews!**  

---

## 📂 Model Upload Restriction  

🚨 **GitHub limits file uploads to 100MB**, so the trained model (`fake_review_model.pk`) is not included in this repository.  

### 🔹 **How to Get the Model?**  

#### **1️⃣ Train Your Own Model**  
- The **training dataset format** is provided in this repository.  
- You can generate your dataset and train the model using:  
  ```sh
  python train_model.py
  ```
- This script will generate a new `fake_review_model.pk` file for you.  

#### **2️⃣ Download Pre-trained Model**  
If you prefer using my trained model, download it here:  
📥 **[Download Pre-trained Model](https://drive.google.com/drive/folders/1GHUwUf4GvInUNCUUbtCsggsqxara3Z9I?usp=sharing)**  

After downloading, place the `fake_review_model.pk` file in:  
```
backend/model/
```  
Now, you can use the model without training it from scratch! 🚀  

---

## 📸 Demo Screenshots  

| **Interface** | **Preview** |
|--------------|------------|
| **Review Analysis Interface** | ![User Review Impact](https://github.com/its-maneeshk/Fake-Product-Detection-System/blob/main/project_images/User_review_impact_1.png) |
| **Fake Review Detection** | ![Fake Review Detection](https://github.com/its-maneeshk/Fake-Product-Detection-System/blob/main/project_images/User_review_impact_2.png) |
| **Dashboard Overview** | ![Dashboard Overview](https://github.com/its-maneeshk/Fake-Product-Detection-System/blob/main/project_images/User_review_impact_3.png) |

📌 More detailed **UI screenshots** can be found in the `project_images/` folder.

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
