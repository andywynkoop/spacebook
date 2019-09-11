import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
//redux logger is the second arg
// import reduxLogger from 'redux-logger';
import rootReducer from '../reducers';
import App from './App';

const Root = ({ preloadedState }) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(reduxThunk)
  );
  
  window.state = store.getState;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
