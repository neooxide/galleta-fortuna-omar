import React from 'react';

const GenderPreference = ({ onChange }) => {
  return (
    <div className="gender-preference">
      <label>
        Select Gender:
        <select onChange={(e) => onChange(e.target.value)} defaultValue="">
          <option value="" disabled>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
    </div>
  );
};

export default GenderPreference;