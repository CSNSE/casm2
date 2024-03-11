import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [initials, setInitials] = useState('');

  // Load stored data on mount
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    setName(storedName || '');
    setEmail(storedEmail || '');
    setPhoneNumber(storedPhoneNumber || '');
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameParts = name.toUpperCase().split(' ');
    const initials = nameParts.map(part => part[0]).join('');
    setInitials(initials);
    // Save to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phoneNumber', phoneNumber);
  };

  const inputStyle = {
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid white',
    borderRadius: '25px',
    padding: '10px',
    margin: '10px 0',
    width: 'calc(100% - 20px)',
    color: 'white',
  };

  const labelStyle = {
    color: 'white',
    display: 'block',
    margin: '5px 0',
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <form onSubmit={handleSubmit}>
        <div style={{
          height: '100px',
          width: '100px',
          borderRadius: '50%',
          backgroundColor: '#ADD8E6',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
          margin: '0 auto 20px'
        }}>
          {initials}
        </div>
        <div>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" style={labelStyle}>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={{
          background: '#ADD8E6',
          border: 'none',
          borderRadius: '25px',
          padding: '10px 20px',
          margin: '10px 0',
          color: '#394766',
          fontWeight: 'bold',
        }}>Save</button>
      </form>
    </div>
  );
};

export default Profile;
