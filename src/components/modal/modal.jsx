import React, { useState } from 'react';
import { StyledModal } from './modal.styled';

const Modal = () => {
  const [isDisplay, setIsDisplay] = useState(true);

  const onClickModal = () => {
    setIsDisplay(false);
  };

  const onClickCancle = (e) => {
    const target = e.target;
    if (!target.className.includes('cancle')) {
      return;
    }
    setIsDisplay(true);
  };

  return (
    <StyledModal isDisplay={isDisplay}>
      <h1 className='title'>Modal</h1>
      <div className='modal_container'>
        <button className='modal_btn' onClick={onClickModal}>
          <span className='modal_btn_text'>Open Modal</span>
        </button>
        <div className='modal_window'>
          <div className='window_container' onClick={onClickCancle}>
            <div className='window'>
              <span className='window_btn cancle'>x</span>
              <span className='window_text'>HELLO CODESTATES!</span>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
