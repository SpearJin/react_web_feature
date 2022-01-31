import React, { useRef, useState } from 'react';
import './tag.css';

const Tag = (props) => {
  const [tagList, setTagList] = useState(['CodeStates', 'JJang']);
  const tagItem = useRef(null);

  const onSubmitTagAdd = (e) => {
    e.preventDefault();
    const tags = [...tagList, tagItem.current.value];
    setTagList(tags);
    tagItem.current.value = '';
  };

  const onClickTagRemove = (e) => {
    console.log(e.target);
    const target = e.target.closest('.tag_item');
    target.remove();
  };

  return (
    <div className='tag'>
      <h1 className='title'>Tag</h1>
      <form className='tag_container' onSubmit={onSubmitTagAdd}>
        <ul className='tag_list'>
          {tagList.map((tag, i) => (
            <li className='tag_item' key={i}>
              <span className='tag_item-text'>{tag}</span>
              <span className='tag_item-delete' onClick={onClickTagRemove}>
                x
              </span>
            </li>
          ))}
          <input className='tag_input' ref={tagItem} type='text' placeholder='Press enter to add tags' />
        </ul>
      </form>
    </div>
  );
};

export default Tag;
