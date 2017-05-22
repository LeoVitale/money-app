import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware,createStore} from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import App from './components/app.jsx';
import reducers from './reducers';

const DEV_TOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(promise)(createStore)(reducers, DEV_TOOLS);



render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector('#app'));
