const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST /feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving feedback' });
  }
});

// GET /feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching feedbacks' });
  }
});

module.exports = router;
