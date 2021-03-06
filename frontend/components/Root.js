import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducer from '../reducers';
import App from './App';
import { windowState } from '../util/middleware';

const Root = ({ preloadedState }) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(reduxThunk, windowState, reduxLogger)
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;