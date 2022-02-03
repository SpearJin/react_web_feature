import React, { useRef, useState } from 'react';
import './autoComplete.css';

const AutoComplete = () => {
  const [list, setList] = useState([]);
  const inputRef = useRef(null);
  const autoDatas = ['antique', 'vintage', '중고A급', 'rustic', 'refurbished'];
  let sortedList = autoDatas.sort();

  const onInputHandler = (e) => {
    const myText = e.target.value;
    const filterList = sortedList.filter((item) => {
      item = item.toLowerCase();
      return item.includes(myText.toLowerCase());
    });

    if (e.target.value === '') {
      itemReset();
    } else {
      setList(filterList);
    }
  };

  const onClickItem = (e) => {
    inputRef.current.value = e.target.textContent;
    itemReset();
  };

  const itemReset = () => {
    setList([]);
  };

  return (
    <div className='autoComplete'>
      <h1 className='title'>AutoComplete</h1>
      <form className='auto_container'>
        <div className='auto'>
          <div className='auto_input_container' onBlur={itemReset}>
            <input ref={inputRef} className='auto_input' type='text' onInput={onInputHandler} />
            <div className='auto_cancle' onClick={itemReset}>
              x
            </div>
          </div>
          <ul className='auto_list'>
            {list.map((item, i) => (
              <li key={i} className='auto_item' onMouseDown={onClickItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default AutoComplete;
