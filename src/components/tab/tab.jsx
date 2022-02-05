import React, { useRef, useState } from 'react';
import './tab.css';

const Tab1 = <p>Tap menu ONE</p>;
const Tab2 = <p>Tap menu TWO</p>;
const Tab3 = <p>Tap menu THREE</p>;

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
    page.current = target.className.split(' ')[1];

    changeClassName(categories, target);
    randerCategory();
  };

  const changeClassName = (categories, target) => {
    categories.forEach((category) => {
      if (target === category) {
        category.classList.add('active');
      } else {
        category.classList.remove('active');
      }
    });
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
    <section className='tab'>
      <h1 className='title'>Tab</h1>
      <div className='tab_container'>
        <div className='tab_categories' ref={tabCategories} onClick={onClickTab}>
          <button className='tab_btn tab1'>Tab1</button>
          <button className='tab_btn tab2'>Tab2</button>
          <button className='tab_btn tab3'>Tab3</button>
        </div>
        <div className='tab_content'>{renderPage}</div>
      </div>
    </section>
  );
};

export default Tab;
