import { RECEIVE_USERS, UPDATE_USER } from "../actions/constants";

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case UPDATE_USER:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: state[action.user].questions.concat([action.questionId])
        }
      }
    default:
      return state
  }
}
