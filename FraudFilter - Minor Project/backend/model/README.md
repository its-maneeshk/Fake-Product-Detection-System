### **🚨 Model Upload Restriction Notice 🚨**  

GitHub restricts file uploads to **below 100MB**, so the trained model (`fake_review_model.pk`) could not be uploaded to this repository.  

### **🛠 How to Get the Model?**  

#### **1️⃣ Train Your Own Model**  
- The **training dataset format** is provided in this repository.  
- You can generate your own dataset and train the model using:  
  ```sh
  python train_model.py
  ```
- This script will train the model and generate a new `fake_review_model.pk` file for you.  

#### **2️⃣ Download the Pre-trained Model**  
If you prefer using my trained model, you can **download it from the following link**:  
📥 **[Download Pre-trained Model](https://drive.google.com/drive/folders/1GHUwUf4GvInUNCUUbtCsggsqxara3Z9I?usp=sharing)**  

After downloading, place the `fake_review_model.pk` file in:  
```
backend/model/
```  
Now, you can use the model without training it from scratch! 🚀
