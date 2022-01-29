import React, { useRef, useState } from 'react';
import './tab.css';

const Tab1 = <p>Tap Menu1</p>;
const Tab2 = <p>Tap Menu2</p>;
const Tab3 = <p>Tap Menu3</p>;

const Tab = () => {
  const [renderPage, setRenderPage] = useState(Tab1);
  const tabCategories = useRef(null);
  let page = useRef(null);

  const onClickTab = (e) => {
    const target = e.target;
    if (target.nodeName !== 'BUTTON') {
      return;
    }
    const categories = [...tabCategories.current.children];
    categories.forEach((category) => {
      if (target === category) {
        category.classList.add('active');
      } else {
        category.classList.remove('active');
      }
    });
    page.current = target.className.split(' ')[1];
    randerCategory();
  };

  const randerCategory = () => {
    switch (page.current) {
      case 'tab1': {
        setRenderPage(Tab1);
        break;
      }
      case 'tab2': {
        setRenderPage(Tab2);
        break;
      }
      case 'tab3': {
        setRenderPage(Tab3);
        break;
      }
      default: {
        throw new Error('Not known tab of category');
      }
    }
  };

  return (
    <div className='tab'>
      <div className='tab_categories' ref={tabCategories} onClick={onClickTab}>
        <button className='tab_btn tab1'>Tab1</button>
        <button className='tab_btn tab2'>Tab2</button>
        <button className='tab_btn tab3'>Tab3</button>
      </div>
      <div>{renderPage}</div>
    </div>
  );
};

export default Tab;
