import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './FeedbackList.css';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate(); 

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Navigate to home
  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="feedback-list-container">
      <h2>Feedbacks</h2>

     
      <button onClick={handleBackToHome} className="back-home-button">
        Back to Home
      </button>

      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback._id} className="feedback-item">
            <div className="feedback-details">
              <label className="feedback-label">Name:</label>
              <span className="feedback-name">{feedback.name}</span>
            </div>
            <div className="feedback-details">
              <label className="feedback-label">Email:</label>
              <span className="feedback-email">{feedback.email}</span>
            </div>
            <div className="feedback-message">
              <label className="feedback-label">Feedback:</label>
              <p>{feedback.message}</p>
            </div>
            <div className="feedback-timestamp">
            <label className="feedback-label">Submitted At:</label>
            <span>{new Date(feedback.createdAt).toLocaleString()}</span>
        </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
