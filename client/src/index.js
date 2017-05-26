import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import CheeseList from './components/cheese-list';

ReactDOM.render(
  <Provider store={store}>
  <CheeseList />
</Provider>,
  document.getElementById('root')
);
