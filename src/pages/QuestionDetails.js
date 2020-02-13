import React, { useState } from 'react';
import { connect } from 'react-redux';
import helpers from '../utils/helpers';
import { withRouter } from 'react-router-dom';
import { handleSaveQuestionVote } from '../actions/questions';

const QuestionDetails = ({ question, dispatch }) => {
  const [vote, setVote] = useState('');

  const handleSubmitVote = (e) => {
    e.preventDefault()
    dispatch(handleSaveQuestionVote(question.id, vote))
    setVote('')
  }

  return (
    <div>
      Would you rather?

      <h4>{question.author} asks...</h4>

      <img src={question.avatar} alt={`${question.avatar} avatar`} width={100} />

      <div>
        <p onClick={() => setVote('optionOne')}>{question.optionOneText}</p>
        <p onClick={() => setVote('optionTwo')}>{question.optionTwoText}</p>
      </div>

      <div>
        <button onClick={handleSubmitVote}>Vote</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ authUser, questions, users }, { match }) => {
  const { question_id } = match.params;
  const question = questions[question_id]

  return {
    authUser,
    question: helpers.formatQuestion(question, users),
    answered: helpers.questionAnswered(question, authUser),
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetails));
