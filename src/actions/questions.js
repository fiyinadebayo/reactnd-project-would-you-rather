import { RECEIVE_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION_VOTE } from "../utils/constants";
import { getQuestions, saveQuestion, saveQuestionVote } from "../utils/api";
import { updateUserQuestions, updateUserAnswers } from "./users";

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

function updateQuestionVote (authUser, qid, vote) {
  return {
    type: UPDATE_QUESTION_VOTE,
    authUser,
    qid,
    vote,
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
    .then((question) => {
      dispatch(addQuestion(question))
      dispatch(updateUserQuestions(authUser, question.id))
    })
  }
}

export function handleSaveQuestionVote (qid, vote) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    return saveQuestionVote({
      authedUser: authUser,
      qid: qid,
      answer: vote,
    })
    .then(() => {
      dispatch(updateQuestionVote(authUser, qid, vote))
      dispatch(updateUserAnswers(authUser, qid, vote))
    })
  }
}
