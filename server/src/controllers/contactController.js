const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    // Optional: Send email notification here using nodemailer or formspree
    
    res.status(201).json({ 
      message: 'Message sent successfully!',
      contact: { name, email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact', error: error.message });
  }
};
