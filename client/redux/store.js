import { createStore, applyMiddleware } from 'redux';
import appReducer from './index.js';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default store;
