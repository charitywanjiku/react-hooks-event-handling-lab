// Code Keypad Component Here

import React from 'react';

function Keypad() {
  // Event handler for the change event on the input
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      {/* Input field with type 'password' and onChange event listener */}
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
