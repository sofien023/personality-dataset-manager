from fastapi import FastAPI
from pydantic import BaseModel
from api_endpoints import PREDICT_ENDPOINT, PYTHON_MAIN_URL, PYTHON_PORT

import sys
from uvicorn import run

sys.path.append('src/regressor')
from test import predict

app = FastAPI()

class PredictRequest(BaseModel):
    Time_spent_Alone: float
    Stage_fear: int
    Social_event_attendance: float
    Going_outside: float
    Drained_after_socializing: int
    Friends_circle_size: float
    Post_frequency: float

@app.get("/")
async def read_item():
    return {"message": "Welcome to the API"}

@app.post(PREDICT_ENDPOINT)
async def read_body_items(data: PredictRequest):
    prediction = predict(data.dict())
    if prediction is None:
        return {"error": "Prediction failed"}
    return {"Personality": prediction}

if __name__ == "__main__":
    run(app, host=PYTHON_MAIN_URL.replace("http://", ""), port=int(PYTHON_PORT))

