import React, { useEffect, useRef, useState } from 'react';
import { StyledAutoComplete } from './autoComplete.styled';

const AutoComplete = () => {
  const [list, setList] = useState([]);
  const [myText, setMyText] = useState('');

  const autoDatas = ['antique', 'vintage', '중고A급', 'rustic', 'refurbished'];
  const sortedDatas = useRef(autoDatas.sort());

  useEffect(() => {
    const filterdList = sortedDatas.current.filter((data) => {
      data = data.toLowerCase();
      return data.includes(myText.toLowerCase());
    });
    if (myText === '') {
      listReset();
    } else {
      setList(filterdList);
    }
  }, [myText]);

  const onChangeHandler = (e) => {
    setMyText(e.target.value);
  };

  const onClickItem = (e) => {
    setMyText(e.target.innerText);
    listReset();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    listReset();
  };

  const listReset = () => {
    setList([]);
  };

  return (
    <StyledAutoComplete>
      <h1 className='title'>AutoComplete</h1>
      <div className='auto_container'>
        <div className='auto'>
          <form className='auto_input_container' onBlur={listReset} onSubmit={onSubmitForm}>
            <input className='auto_input' type='text' value={myText} onChange={onChangeHandler} />
            <div className='auto_cancle' onClick={listReset}>
              x
            </div>
          </form>
          <ul className='auto_list'>
            {list.map((item, i) => (
              <li key={i} className='auto_item' onMouseDown={onClickItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledAutoComplete>
  );
};

export default AutoComplete;
