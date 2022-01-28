import React from 'react';
import './toggle.css';

const Toggle = () => {
  return (
    <div className='toggle'>
      <label className='toggle_label'>
        <input type='checkbox' className='toggle_input' />
        <span className='toggle_span'></span>
      </label>
    </div>
  );
};

export default Toggle;
