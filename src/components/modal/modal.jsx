import React from 'react';
import './modal.css';

const Modal = (props) => (
  <div className='modal'>
    <button className='modal_btn'>
      <span className='modal_btn_text'>Open Modal</span>
    </button>
    <div className='modal_window'>
      <div className='modal_window_container'>
        <span className='modal_window_btn'>x</span>
        <span className='modal_window_text'>HELLO CODESTATES!</span>
      </div>
    </div>
  </div>
);

export default Modal;
