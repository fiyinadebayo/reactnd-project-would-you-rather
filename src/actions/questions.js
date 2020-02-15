import { RECEIVE_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION_VOTE } from "../utils/constants";
import { saveQuestion, saveQuestionVote } from "../utils/api";
import { updateUserQuestions, updateUserAnswers } from "./users";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function updateQuestionVote (authUser, qid, vote) {
  return {
    type: UPDATE_QUESTION_VOTE,
    authUser,
    qid,
    vote,
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleSaveQuestion (payload) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authUser } = getState();

    return saveQuestion({
      ...payload,
      author: authUser,
    })
    .then((question) => {
      dispatch(hideLoading())
      dispatch(addQuestion(question))
      dispatch(updateUserQuestions(authUser, question.id))
    })
  }
}

export function handleSaveQuestionVote (qid, vote) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authUser } = getState();

    return saveQuestionVote({
      authedUser: authUser,
      qid: qid,
      answer: vote,
    })
    .then(() => {
      dispatch(hideLoading())
      dispatch(updateQuestionVote(authUser, qid, vote))
      dispatch(updateUserAnswers(authUser, qid, vote))
    })
  }
}
