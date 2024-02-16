import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  // Load profile data from localStorage when the component mounts
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    console.log('Profile Saved:', profile);
    // Optionally, indicate to the user that the profile has been saved
  };

  // Inline styles for the form container
  const pageStyle = {
    color: 'white',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'rgba(4,125,149,1)',
    borderRadius: '5px',
  };

  return (
    <form onSubmit={handleSave} style={pageStyle}>
      <h2>User Profile</h2>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={profile.firstName || ''}
          onChange={handleChange}
          style={{margin: '10px 0'}}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={profile.lastName || ''}
          onChange={handleChange}
          style={{margin: '10px 0'}}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={profile.email || ''}
          onChange={handleChange}
          style={{margin: '10px 0'}}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={profile.phoneNumber || ''}
          onChange={handleChange}
          style={{margin: '10px 0'}}
        />
      </label>
      <br />
      <button type="submit" style={{cursor: 'pointer'}}>Save</button>
    </form>
  );
}

export default UserProfile;
