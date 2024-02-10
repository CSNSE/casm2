import React from 'react';
import { FiEye } from 'react-icons/fi'; // Importing an eye icon from react-icons

const Title = () => {
  // Inline styles
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #364667 0%, #4f6695 50%, #364667 100%)',
    //'linear-gradient(to right, #364667 10%, #FFFFFF 80%, #364667 10%)',
    color: '#fff',
    textAlign: 'center',
  };

  const iconStyle = {
    fontSize: '2rem', // Adjust size as needed
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    marginBottom: '5px',
  };

  const statusStyle = {
    fontSize: '1rem',
    fontStyle: 'italic',
  };

  return (
    <div style={containerStyle}>
      <FiEye style={iconStyle} />
      <h1 style={titleStyle}>Corneal Applanation Suturing Model</h1>
      <h2 style={subtitleStyle}>Sonia Patel</h2>
      <p style={statusStyle}>Patent Pending</p>
    </div>
  );
};

export default Title;
