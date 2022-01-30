import React, { useState } from 'react';
import './tag.css';

const Tag = (props) => {
  const [tagList, setTagList] = useState(['list1', 'list2']);

  return (
    <div className='tag'>
      <h1 className='title'>Tag</h1>
      <div className='tag_container'>
        <ul className='tag_list' htmlFor='in'>
          {tagList.map((tag) => (
            <li className='tag_item'>
              {tag} <span className='tag_item-delete'>x</span>
            </li>
          ))}
          <input className='tag_input' id='in' type='text' placeholder='Press enter to add tags'></input>
        </ul>
      </div>
    </div>
  );
};

export default Tag;
