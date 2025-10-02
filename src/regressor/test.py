from module import PersonalityPredictor
import os

def predict(data):
    predictor = PersonalityPredictor('personality_dataset.csv')
    predictor.train()
    
    metrics = predictor.evaluate()
    
    # sample_input = {
    #     'Time_spent_Alone': 1.0,
    #     'Stage_fear': 1,
    #     'Social_event_attendance': 3.0,
    #     'Going_outside': 2.0,
    #     'Drained_after_socializing': 0, 
    #     'Friends_circle_size': 2.0,
    #     'Post_frequency': 8.0
    # }

    #SECTION - Predict the personality type for a sample input
    try:
        prediction = predictor.predict(data)
        return prediction
    except Exception as e:
        print(f"Error: {str(e)}")
        return None