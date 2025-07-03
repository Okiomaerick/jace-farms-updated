import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please fill in all fields' });
    }

    // Create new contact
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();
    
    res.status(201).json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error('Error submitting contact form:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router;
