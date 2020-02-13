import {
  RECEIVE_USERS,
  UPDATE_USER_QUESTIONS,
  UPDATE_USER_ANSWERS
} from "../utils/constants";

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case UPDATE_USER_QUESTIONS:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: state[action.user].questions.concat([action.questionId])
        }
      }
    case UPDATE_USER_ANSWERS:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          answers: {
            ...state[action.user].answers,
            [action.questionId]: action.vote
          }
        }
      }
    default:
      return state
  }
}
