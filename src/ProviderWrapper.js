import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { appReducer } from './redux/reducers/app';
import { configReducer } from './redux/reducers/config';

const reducer = combineReducers({
  app: appReducer,
  config: configReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const ProviderWrapper = App => (
  <Provider store={store}> {App} </Provider>
);
