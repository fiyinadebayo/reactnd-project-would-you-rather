import { getUsers } from "../utils/api";
import { RECEIVE_USERS } from "./constants";

function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
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
