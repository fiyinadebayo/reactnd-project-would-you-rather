import { RECEIVE_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION_VOTE } from '../actions/constants';

export default function question (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      }
    case UPDATE_QUESTION_VOTE:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.vote]: {
            ...state[action.qid][action.vote],
            votes: state[action.qid][action.vote].votes.concat(action.authUser)
          }
        }
      }
    default:
      return state
  }
}
