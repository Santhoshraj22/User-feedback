

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/Form"; 
import FeedbackList from "./Components/FeedbackList"; 
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/feedbacks" element={<FeedbackList />} />
      </Routes>
      <ToastContainer /> 
    </Router>

    
  );
};

export default App;
