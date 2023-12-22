// AddContact.js

// Import React and useState from 'react' module
import React, { useState } from 'react';

// Functional component for adding a new contact
const AddContact = ({ addContactHandler }) => {
  // State to manage the contact form data
  const [contact, setContact] = useState({ name: '', email: '' });

  // Function to handle adding a new contact
  const addContact = (e) => {
    e.preventDefault();
    // Validate that both name and email fields are filled
    if (!contact.name || !contact.email) {
      alert('All fields are mandatory!');
      return;
    }
    // Call the parent component's addContactHandler function with the new contact
    addContactHandler(contact);
    // Reset the contact form fields after adding the contact
    setContact({ name: '', email: '' });
  };

  // Render the component
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      {/* Contact form */}
      <form className="ui form" onSubmit={addContact}>
        {/* Name input field */}
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        {/* Email input field */}
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        {/* Add button */}
        <button className="ui button blue" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

// Export the AddContact component
export default AddContact;
