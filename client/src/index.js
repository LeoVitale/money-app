import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware,createStore} from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import App from './components/app.jsx';
import reducers from './reducers';

const store = applyMiddleware(promise)(createStore)(reducers);

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector('#app'));
