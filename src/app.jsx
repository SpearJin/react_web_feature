import React from 'react';
import './app.css';

import AutoComplete from './components/autoComplete/autoComplete';
import ClickToEdit from './components/clickToEdit/clickToEdit';
import Modal from './components/modal/modal';
import Tab from './components/tab/tab';
import Tag from './components/tag/tag';
import Toggle from './components/toggle/toggle';

const App = (props) => (
  <div className='app'>
    <Toggle />
    <Modal />
    <Tab />
    <Tag />
    <AutoComplete />
    <ClickToEdit />
  </div>
);

export default App;
