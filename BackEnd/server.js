// server.js

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(bodyParser.json());

// Replace 'YOUR_ACTUAL_PASSWORD' with your actual MongoDB password
const MONGODB_URI =
  'mongodb+srv://admin:YOUR_ACTUAL_PASSWORD@cluster0.goi4lkk.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create MongoDB model
const Contact = mongoose.model('Contact', contactSchema);

// Define API Routes

// Get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new contact
app.post('/api/contacts', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a contact by ID
app.delete('/api/contacts/:id', async (req, res) => {
  const contactId = req.params.id;
  try {
    await Contact.findByIdAndRemove(contactId);
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
