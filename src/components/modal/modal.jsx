import React, { useRef } from 'react';
import './modal.css';

const Modal = () => {
  const modal = useRef(null);

  const onClickModal = () => {
    modal.current.classList.add('active');
  };

  const onClickCancle = (e) => {
    const target = e.target;
    if (!target.className.includes('cancle')) {
      return;
    }
    modal.current.classList.remove('active');
  };

  return (
    <div className='modal'>
      <h1 className='title'>Modal</h1>
      <div className='modal_container'>
        <button className='modal_btn' onClick={onClickModal}>
          <span className='modal_btn_text'>Open Modal</span>
        </button>
        <div className='modal_window' ref={modal}>
          <div className='modal_window_container' onClick={onClickCancle}>
            <span className='modal_window_btn cancle'>x</span>
            <span className='modal_window_text'>HELLO CODESTATES!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
