import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Hello from './containers/Hello';
import Counter from './containers/Counter';
import reducer from './reducers';

import "bootstrap";
import "./index.scss";

const store = createStore(reducer);
const rootEl = document.getElementById('root');
 
ReactDOM.render(
    <Provider store={store}>
      <Hello />
      <Counter />
    </Provider>,
    rootEl
);
