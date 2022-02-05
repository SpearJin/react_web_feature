import React from 'react';
import './clickToEdit.css';

const ClickToEdit = (props) => {
  return (
    <div className='clickEdit'>
      <h1 className='title'>ClickToEdit</h1>
      <div className='clickEdit_container'>
        <div className='clickEdit_name edit'>
          <span>이름</span>
          <input className='clickEdit_input' type='text' />
        </div>
        <div className='clickEdit_age edit'>
          <span>나이</span>
          <input className='clickEdit_input' type='text' />
        </div>
        <p>이름 김코딩 나이 20</p>
      </div>
    </div>
  );
};

export default ClickToEdit;
