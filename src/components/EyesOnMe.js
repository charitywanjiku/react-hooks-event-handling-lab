// Code EyesOnMe Component Here

import React from 'react';

class EyesOnMe extends React.Component {
  // Event handler for the focus event on the button
  handleFocus = () => {
    console.log('Good!');
  };

  // Event handler for the blur event on the button
  handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  render() {
    return (
      <div>
        {/* Button with onFocus and onBlur event listeners */}
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>
          Eyes on me
        </button>
      </div>
    );
  }
}

export default EyesOnMe;


