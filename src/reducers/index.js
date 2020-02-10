import { combineReducers } from 'redux';
import users from './users';
import authUser from './authUser';
import loading from './loading';

export default combineReducers({
  users,
  authUser,
  loading,
})
