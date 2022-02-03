import React from 'react';
import './autoComplete.css';

const AutoComplete = () => {
  return (
    <div className='autoComplete'>
      <h1 className='title'>AutoComplete</h1>
      <form className='auto_container'>
        <div className='auto_text'>
          <input className='auto_input' type='text' />
          <span className='auto_cancle'>x</span>
        </div>
        <ul className='auto_list'></ul>
      </form>
    </div>
  );
};

export default AutoComplete;
