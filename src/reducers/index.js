import { combineReducers } from "redux";
import users from "./users";
import authUser from "./authUser";

export default combineReducers({
  users,
  authUser
})
