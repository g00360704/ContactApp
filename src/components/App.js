// Import React, useState, and useEffect from 'react' module
import React, { useState, useEffect } from "react";

// Import uuid function from 'uuid' library to generate unique IDs
import { v4 as uuid } from "uuid";

// Import styles from 'App.css'
import "./App.css";

// Import Header, AddContact, and ContactList components
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

// Functional component for the main App
function App() {
  // Local storage key for storing contacts
  const LOCAL_STORAGE_KEY = "contacts";

  // State hook to manage contacts, initialized with data from local storage or an empty array
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  // Function to handle adding a new contact
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  // Function to handle removing a contact
  const removeContactHandler = (id) => {
    // Filter out the contact with the specified id
    const newContactList = contacts.filter((contact) => contact.id !== id);
    // Update the contacts state with the new list
    setContacts(newContactList);
  };

  // Effect hook to update local storage whenever the contacts state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // Render the main component
  return (
    <div className="ui container">
      {/* Header component */}
      <Header />
      {/* AddContact component with the addContactHandler function */}
      <AddContact addContactHandler={addContactHandler} />
      {/* ContactList component with contacts and deleteContactHandler function */}
      <ContactList contacts={contacts} deleteContactHandler={removeContactHandler} />
    </div>
  );
}

// Export the App component
export default App;
