import { RECEIVE_QUESTIONS, ADD_QUESTION } from "./constants";
import { getQuestions, saveQuestion } from "../utils/api";

function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleGetQuestions () {
  return (dispatch) => {
    return getQuestions()
      .then((questions) => dispatch(receiveQuestions(questions)))
  }
}

export function handleSaveQuestion (payload) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    return saveQuestion({
      ...payload,
      author: authUser,
    })
    .then((question) => dispatch(addQuestion(question)))
  }
}
