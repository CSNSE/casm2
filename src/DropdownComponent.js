// DropdownComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">-- ⬱ --</option>
        <option value="page1">Contact</option>
        <option value="page2">Profile</option>
        <option value="page3">Survey</option>
      </select>

      {/* Redirect to the selected option's route */}
      {selectedOption && <Link to={`/${selectedOption}`}>Go to {selectedOption}</Link>}
    </div>
  );
};

export default DropdownComponent;
