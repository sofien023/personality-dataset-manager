import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import (
    accuracy_score, classification_report, 
    confusion_matrix, roc_curve, auc
)

class Regressor:
    def __init__(self, data: pd.DataFrame, target_column: str):
        self.data = data
        self.target_column = target_column
        self.model = None
        self.X_train = None
        self.X_test = None
        self.y_train = None
        self.y_test = None
        self.feature_importance = None
        self.model_metrics = {}
    
    def split_data(self, test_size: float = 0.2, random_state: int = 42):
        X = self.data.drop(columns=[self.target_column])
        y = self.data[self.target_column]
        
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(
            X, y, test_size=test_size, random_state=random_state, stratify=y
        )
    
    def train_model(self, model_params: dict = None):
        if model_params is None:
            model_params = {
                'max_iter': 1000,
                'random_state': 42,
                'solver': 'lbfgs',
                'class_weight': 'balanced'
            }
        
        self.model = LogisticRegression(**model_params)
        self.model.fit(self.X_train, self.y_train)
        self._calculate_feature_importance()
    
    def _calculate_feature_importance(self):
        if hasattr(self.model, 'coef_'):
            self.feature_importance = pd.Series(
                np.abs(self.model.coef_[0]), 
                index=self.X_train.columns
            ).sort_values(ascending=False)
    
    def evaluate_model(self, cv: int = 5):
        if self.model is None:
            raise ValueError("Model has not been trained yet. Call train_model() first.")
        
        y_pred = self.model.predict(self.X_test)
        y_pred_proba = self.model.predict_proba(self.X_test)[:, 1]
        
        accuracy = accuracy_score(self.y_test, y_pred)
        report = classification_report(self.y_test, y_pred, output_dict=True)
        
        cv_scores = cross_val_score(
            self.model, 
            self.X_train, 
            self.y_train, 
            cv=cv, 
            scoring='accuracy'
        )
        
        self.model_metrics = {
            'accuracy': accuracy,
            'classification_report': report,
            'cv_accuracy_mean': cv_scores.mean(),
            'cv_accuracy_std': cv_scores.std()
        }
        
        return self.model_metrics
    
    #FIXME - chatgpt boilerplate
    def plot_feature_importance(self, top_n: int = 10):
        """
        Plot the top N most important features.
        
        Args:
            top_n (int): Number of top features to display
        """
        if self.feature_importance is None:
            self._calculate_feature_importance()
            
        plt.figure(figsize=(10, 6))
        sns.barplot(
            x=self.feature_importance.head(top_n).values, 
            y=self.feature_importance.head(top_n).index
        )
        plt.title(f'Top {top_n} Most Important Features')
        plt.xlabel('Absolute Coefficient Value')
        plt.tight_layout()
        plt.show()
    
    def plot_confusion_matrix(self):
        """Plot a confusion matrix for the model's predictions."""
        if self.model is None:
            raise ValueError("Model has not been trained yet.")
            
        y_pred = self.model.predict(self.X_test)
        cm = confusion_matrix(self.y_test, y_pred)
        
        plt.figure(figsize=(8, 6))
        sns.heatmap(
            cm, 
            annot=True, 
            fmt='d', 
            cmap='Blues',
            xticklabels=['Introvert', 'Extrovert'],
            yticklabels=['Introvert', 'Extrovert']
        )
        plt.xlabel('Predicted')
        plt.ylabel('Actual')
        plt.title('Confusion Matrix')
        plt.show()
    
    def plot_roc_curve(self):
        """Plot the Receiver Operating Characteristic (ROC) curve."""
        if self.model is None:
            raise ValueError("Model has not been trained yet.")
            
        y_pred_proba = self.model.predict_proba(self.X_test)[:, 1]
        fpr, tpr, _ = roc_curve(self.y_test, y_pred_proba)
        roc_auc = auc(fpr, tpr)
        
        plt.figure(figsize=(8, 6))
        plt.plot(fpr, tpr, color='darkorange', lw=2, 
                 label=f'ROC curve (AUC = {roc_auc:.2f})')
        plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
        plt.xlim([0.0, 1.0])
        plt.ylim([0.0, 1.05])
        plt.xlabel('False Positive Rate')
        plt.ylabel('True Positive Rate')
        plt.title('Receiver Operating Characteristic (ROC) Curve')
        plt.legend(loc="lower right")
        plt.show()