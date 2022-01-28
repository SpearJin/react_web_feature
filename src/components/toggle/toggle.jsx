import React, { useState } from 'react';
import './toggle.css';

const Toggle = () => {
  const [switchText, setSwitchText] = useState('OFF');

  const onClickSwitch = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setSwitchText('ON');
    } else {
      setSwitchText('OFF');
    }
  };

  return (
    <div className='toggle'>
      <label className='toggle_label'>
        <input type='checkbox' className='toggle_input' onClick={onClickSwitch} />
        <span className='toggle_span'></span>
      </label>
      <p>Toggle Switch {switchText}</p>
    </div>
  );
};

export default Toggle;
