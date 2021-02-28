import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { appReducer } from './redux/reducers/app';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const DummyWrapper = Story => (
  <Provider store={store}>
    <Story />
  </Provider>
);

// For debugging decorations, can be removed
export const BackgroundWrapper = Story => (
  <div
    style={{
      border: '5px outset red',
      'background-color': 'lightblue',
    }}
  >
    <Story />
  </div>
);
