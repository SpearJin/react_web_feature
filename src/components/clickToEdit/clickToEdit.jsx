import React, { useRef, useState } from 'react';
import './clickToEdit.css';

const ClickToEdit = (props) => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState(20);
  const [inputName, setInputName] = useState(name);
  const [inputAge, setInputAge] = useState(age);

  const onBlurInput = () => {
    setName(inputName);
    setAge(inputAge);
  };

  const onChangeName = (e) => {
    setInputName(e.target.value);
  };

  const onChangeAge = (e) => {
    setInputAge(e.target.value);
  };

  return (
    <section className='clickEdit'>
      <h1 className='title'>ClickToEdit</h1>
      <div className='clickEdit_container'>
        <div className='clickEdit_name edit'>
          <span>이름</span>
          <input
            className='clickEdit_input'
            type='text'
            value={inputName}
            onChange={onChangeName}
            onBlur={onBlurInput}
          />
        </div>
        <div className='clickEdit_age edit'>
          <span>나이</span>
          <input className='clickEdit_input' type='text' value={inputAge} onChange={onChangeAge} onBlur={onBlurInput} />
        </div>
        <p>
          이름 {name} 나이 {age}
        </p>
      </div>
    </section>
  );
};

export default ClickToEdit;
