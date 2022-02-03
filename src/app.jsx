import React from 'react';
import './app.css';
import AutoComplete from './components/autoComplete/autoComplete';

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
  </div>
);

export default App;
