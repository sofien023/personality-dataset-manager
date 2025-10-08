import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from typing import Dict, Any, Optional
from dataloader import DataLoader
from regressor import Regressor

class PersonalityPredictor:
    def __init__(self, data_path: str = 'src/regressor/personality_dataset.csv'):
        self.TARGET_COLUMN = 'Personality'
        self.data_path = data_path
        self.data_loader = None
        self.regressor = None
        self._initialize()
    
    def _initialize(self):
        self.data_loader = DataLoader(
            data=pd.read_csv(self.data_path),
            target_column=self.TARGET_COLUMN
        )
        self.data_loader.preprocess_data()
        self.regressor = Regressor(
            data=self.data_loader.data,
            target_column=self.TARGET_COLUMN
        )
        self.regressor.split_data()
    
    def train(self, model_params: Optional[Dict[str, Any]] = None):
        self.regressor.train_model(model_params=model_params)
        
    def evaluate(self, cv: int = 5) -> Dict[str, Any]:
        return self.regressor.evaluate_model(cv=cv)
    
    def predict(self, input_data: Dict[str, Any]) -> str:
        if self.regressor is None or self.regressor.model is None:
            raise ValueError("Model has not been trained. Call train() first.")
        
        input_df = pd.DataFrame([input_data])
        expected_columns = self.regressor.X_train.columns
        
        for col in expected_columns:
            if col not in input_df.columns:
                input_df[col] = 0
        
        input_df = input_df[expected_columns]
        prediction = self.regressor.model.predict(input_df)
        
        return 'Extrovert' if prediction[0] == 1 else 'Introvert'
    
    
    #FIXME: chatgpt boilerplate
    def plot_class_distribution(self):
        """Plot the distribution of personality types in the dataset."""
        self.data_loader.plot_class_distribution()
    
    def plot_feature_importance(self, top_n: int = 10):
        """
        Plot the most important features for the model.
        
        Args:
            top_n (int): Number of top features to display
        """
        self.regressor.plot_feature_importance(top_n=top_n)
    
    def plot_confusion_matrix(self):
        """Plot the confusion matrix for the model's predictions."""
        self.regressor.plot_confusion_matrix()
    
    def plot_roc_curve(self):
        """Plot the Receiver Operating Characteristic (ROC) curve."""
        self.regressor.plot_roc_curve()
    
    def save_model(self, filepath: str = 'models/personality_model.joblib'):
        """
        Save the trained model to a file.
        
        Args:
            filepath (str): Path where the model should be saved
        """
        self.regressor.save_model(filepath)
    
    @classmethod
    def load_model(cls, model_path: str, data_path: str = None):
        """
        Load a trained model from a file.
        
        Args:
            model_path (str): Path to the saved model
            data_path (str, optional): Path to the dataset (required for reinitialization)
            
        Returns:
            PersonalityPredictor: An instance with the loaded model
        """
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"No model found at {model_path}")
        
        # Create a new instance
        predictor = cls.__new__(cls)
        
        # Initialize with the same data path if provided
        if data_path is not None:
            predictor.data_path = data_path
            predictor._initialize()
        
        # Load the model
        predictor.regressor = Regressor.load_model(model_path)
        
        return predictor
    
    def get_feature_correlation(self) -> pd.Series:
        """
        Get the correlation of features with the target variable.
        
        Returns:
            pd.Series: Correlation values sorted in descending order
        """
        return self.data_loader.get_feature_correlation()
    
    def get_model_metrics(self) -> Dict[str, Any]:
        """
        Get the evaluation metrics of the trained model.
        
        Returns:
            dict: Dictionary containing model metrics
        """
        if not hasattr(self.regressor, 'model_metrics') or not self.regressor.model_metrics:
            self.evaluate()
        return self.regressor.model_metrics
