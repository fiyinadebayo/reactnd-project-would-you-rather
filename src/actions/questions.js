import { RECEIVE_QUESTIONS } from "./constants";
import { getQuestions } from "../utils/api";

function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleGetQuestions () {
  return (dispatch) => {
    return getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
      })
  }
}
