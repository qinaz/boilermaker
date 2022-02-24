import { combineReducers } from 'redux';
import userAuth from './users';

const appReducer = combineReducers({
  userAuth,
});

export default appReducer;
