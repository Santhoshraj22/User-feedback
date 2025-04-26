const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedbackroutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());    
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Failed:", err));


// Routes
app.use('/feedback', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
