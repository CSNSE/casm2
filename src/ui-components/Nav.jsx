import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navStyle = {
    position: 'relative',
    padding: '10px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const menuIconStyle = {
    fontSize: '24px',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const dropdownMenuStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8', // Dropdown background
    color: '#364668', // Text color
    fontSize: '14px',
    zIndex: 1000,
  };

  const dropdownMenuItemStyle = {
    padding: '15px',
    borderBottom: '1px solid #dddddd',
    cursor: 'pointer',
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav style={navStyle}>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} style={menuIconStyle}>
        {isMenuOpen ? 'X' : '☰'}
      </div>
      {isMenuOpen && (
        <ul style={dropdownMenuStyle}>
          <li style={dropdownMenuItemStyle} onClick={() => handleNavigate('/')}>Home</li>
          <li style={dropdownMenuItemStyle} onClick={() => handleNavigate('/about')}>About</li>
          <li style={dropdownMenuItemStyle} onClick={() => handleNavigate('/services')}>Services</li>
          <li style={dropdownMenuItemStyle} onClick={() => handleNavigate('/contact')}>Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
