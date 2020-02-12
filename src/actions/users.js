import { getUsers } from "../utils/api";
import { RECEIVE_USERS, UPDATE_USER } from "./constants";

function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateUser (user, questionId) {
  return {
    type: UPDATE_USER,
    user,
    questionId,
  }
}

export function handleGetUsers () {
  return (dispatch) => {
    return getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
      })
  }
}
