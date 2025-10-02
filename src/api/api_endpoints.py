from dotenv import load_dotenv
import os

#idk what to choose either fastapi or flask
load_dotenv()
global PYTHON_MAIN_URL
PYTHON_MAIN_URL = os.getenv("SOURCE_URL")
PYTHON_PORT = os.getenv("PORT", "5000")

if PYTHON_MAIN_URL is None:
    raise ValueError("Please set the SOURCE_URL enviromnet variable in an .env file")

PREDICT_ENDPOINT = "/predict"