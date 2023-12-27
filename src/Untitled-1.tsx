const SaveNameButton = () => {
  
  

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <button
        onClick={handleSaveName}
        disabled={!isButtonActive} // Disable the button if the name is empty
      >
        Save Name
      </button>
    </div>
  );
};

export default SaveNameButton;
Import and use the SaveNameButton component in your main React application file (e.g., App.js):
jsx
Copy code
// App.js
import React from 'react';
import SaveNameButton from './SaveNameButton';
