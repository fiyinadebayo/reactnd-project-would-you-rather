import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import users from './users';
import authUser from './authUser';
import questions from './questions';

export default combineReducers({
  loadingBar: loadingBarReducer,
  authUser,
  users,
  questions,
})
