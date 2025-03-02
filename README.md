# GeminiChat

## Overview
GeminiChat is a simple web-based AI chatbot that integrates the Gemini 2.0 API to generate responses based on user input. The input box remains fixed at the bottom of the page, while responses appear in the center and are scrollable for large content.

## Features
- Fixed input box at the bottom of the page.
- Scrollable response display area.
- Seamless integration with Gemini 2.0 API.
- Responsive UI with HTML, CSS, and JavaScript.

## Technologies Used
- HTML
- CSS
- JavaScript (Fetch API for backend communication)

## Setup Instructions

Follow these steps to set up and run GeminiChat on your local machine.

### 1. Install Python and Pip
If you haven't installed Python yet, download and install it from [Python's official site](https://www.python.org/downloads/). Ensure `pip` (Python package manager) is installed by running:
```sh
python --version  # Check Python version
pip --version  # Check Pip version
```
If pip is not installed, install it using:
```sh
python -m ensurepip --default-pip
```

### 2. Clone the Repository
```sh
git clone https://github.com/your-username/GeminiChat.git
cd GeminiChat
```

### 3. Get Your API Key from Google AI Studio
To use Gemini 2.0 API, follow these steps:
1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Sign in with your Google account.
3. Create a new API key.
4. Copy your API key for later use.

### 4. Set Up Backend (FastAPI)
Install FastAPI and Uvicorn:
```sh
pip install fastapi uvicorn requests
```
Open `app.py` and insert your API key:
```python
from fastapi import FastAPI, Request
import requests

app = FastAPI()
GEMINI_API_KEY = "your-gemini-api-key"  # Replace with your actual API key
GEMINI_ENDPOINT = "https://api.gemini.com/generate"

@app.post("/generate")
async def generate_text(request: Request):
    data = await request.json()
    user_input = data.get("prompt", "")
    
    response = requests.post(GEMINI_ENDPOINT, json={"prompt": user_input}, headers={"Authorization": f"Bearer {GEMINI_API_KEY}"})
    
    return {"response": response.json().get("text", "Error retrieving response")}
```
Run the FastAPI server:
```sh
uvicorn app:app --reload
```

### 5. Set Up Frontend
No additional setup is required for the frontend. Just open `index.html` in your browser, and it will connect to your backend.

### 6. Running the Project
Ensure your FastAPI server is running, then open `index.html` in your browser.

### 7. Deploying
To deploy the frontend, you can use GitHub Pages, Netlify, or Vercel. For backend deployment, consider using AWS Lambda, Heroku, or any cloud provider.

## Contributing
Feel free to fork this repository and submit pull requests with improvements or additional features.

## License
This project is licensed under the MIT License.

