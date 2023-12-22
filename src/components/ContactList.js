// Import React library
import React from 'react';

// Import ContactCard component
import ContactCard from './ContactCard';

// Functional component for displaying a list of contacts
const ContactList = ({ contacts, deleteContactHandler }) => {
  // Map through the contacts array to create ContactCard components
  const renderContactList = contacts.map((contact) => (
    <ContactCard key={contact.id} contact={contact} deleteContactHandler={deleteContactHandler} />
  ));

  // Render the list of contacts within a styled div
  return <div className="ui celled list">{renderContactList}</div>;
};

// Export ContactList component
export default ContactList;
