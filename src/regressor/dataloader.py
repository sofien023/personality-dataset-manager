import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn import model_selection
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

class DataLoader:
    def __init__(self, data: pd.DataFrame, target_column: str):
        self.data = data
        self.target_column = target_column
    
    def preprocess_data(self):
        self.data.replace({'No': 0, 'Yes': 1}, inplace=True)
        
        self.data[self.target_column].replace(
            {'Introvert': 0, 'Extrovert': 1}, inplace=True
        )
        
        self.data.fillna(0, inplace=True)
        
        for col in self.data.columns:
            self.data[col] = pd.to_numeric(self.data[col], errors='coerce').fillna(0)
        
        return self.data
    
    def plot_class_distribution(self):
        plt.figure(figsize=(8, 5))
        self.data[self.target_column].value_counts().plot(kind='bar')
        plt.title('Class Distribution')
        plt.xticks(ticks=[0, 1], labels=['Introvert', 'Extrovert'], rotation=0)
        plt.ylabel('Count')
        plt.show()
        
    def get_feature_correlation(self):
        correlation = self.data.corr()[self.target_column].sort_values(ascending=False)
        return correlation.drop(self.target_column)