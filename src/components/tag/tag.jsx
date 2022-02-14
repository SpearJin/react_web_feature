import React, { useRef, useState } from 'react';
import { StyledTag } from './tag.styled';

const Tag = () => {
  const [tagList, setTagList] = useState([
    { id: 1, text: 'CodeStates' },
    { id: 2, text: 'JJang' },
  ]);
  const tagItem = useRef(null);

  const onSubmitTagAdd = (e) => {
    e.preventDefault();
    const text = tagItem.current.value;
    if (!text) {
      return;
    }
    const tags = [...tagList, { id: Date.now(), text }];
    setTagList(tags);
    tagItem.current.value = '';
  };

  const onClickTagRemove = (tag) => {
    const tags = tagList.filter((item) => item.id !== tag.id);
    setTagList(tags);
  };

  return (
    <StyledTag>
      <h1 className='title'>Tag</h1>
      <form className='tag_container' onSubmit={onSubmitTagAdd}>
        <ul className='tag_list'>
          {tagList.map((tag) => (
            <li className='tag_item' key={tag.id}>
              <span className='tag_item-text'>{tag.text}</span>
              <span className='tag_item-delete' onClick={() => onClickTagRemove(tag)}>
                x
              </span>
            </li>
          ))}
          <input className='tag_input' ref={tagItem} type='text' placeholder='Press enter to add tags' />
        </ul>
      </form>
    </StyledTag>
  );
};

export default Tag;
