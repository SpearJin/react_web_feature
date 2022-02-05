import React, { useState } from 'react';
import { StyledToggle } from './toggle.styled';

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
    <StyledToggle className='toggle'>
      <h1 className='title'>Toggle</h1>
      <div className='toggle_container'>
        <label className='toggle_label'>
          <input type='checkbox' className='toggle_input' onClick={onClickSwitch} />
          <span className='toggle_span'></span>
        </label>
        <p>Toggle Switch {switchText}</p>
      </div>
    </StyledToggle>
  );
};

export default Toggle;
