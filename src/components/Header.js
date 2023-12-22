// Import React library
import React from "react";

// Functional component for the application header/navigation bar
const Header = () => {
  return (
    // Navigation bar with a dark background
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Application logo or brand name */}
        <a className="navbar-brand" href="/">
          Contact Manager
        </a>
      </div>
    </nav>
  );
};

// Export Header component
export default Header;
