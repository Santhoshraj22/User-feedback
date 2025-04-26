import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '' 
  });

  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to send feedback to backend
      const response = await axios.post('http://localhost:5000/feedback', formData);
      console.log(response.data);

      setFormData({
        name: '',
        email: '',
        message: '' 
      });

      toast.success('Feedback added successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      fetchFeedbacks(); 
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('Failed to add feedback. Please try again.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

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

  const handleViewFeedbacks = () => {
    navigate('/feedbacks');
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">User Feedback Form</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
        <textarea
          name="message" 
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          required
        />
        <button type="submit" className="form-button">Submit</button>
      </form>

      <button onClick={handleViewFeedbacks} className="view-feedbacks-button">
        View Feedbacks
      </button>
    </div>
  );
};

export default Form;
