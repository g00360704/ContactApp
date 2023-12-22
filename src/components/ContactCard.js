// Import React library
import React from 'react';

// Import user image
import user from '../images/user.png';

// Functional component for displaying a contact card
const ContactCard = ({ contact, deleteContactHandler }) => {
  // Destructure contact object to extract id, name, and email
  const { id, name, email } = contact;

  // Render the contact card
  return (
    <div className="item">
      {/* Display user avatar image */}
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        {/* Display contact name as header */}
        <div className="header">{name}</div>
        {/* Display contact email */}
        <div>{email}</div>
      </div>
      {/* Display delete icon with red color and handle click event */}
      <i
        className="trash alternate outline icon"
        style={{ color: 'red', marginTop: '7px' }}
        onClick={() => deleteContactHandler(id)}
      ></i>
    </div>
  );
};

// Export ContactCard component
export default ContactCard;
