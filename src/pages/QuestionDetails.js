import React, { useState } from 'react';
import { connect } from 'react-redux';
import helpers from '../utils/helpers';
import { withRouter } from 'react-router-dom';
import { handleSaveQuestionVote } from '../actions/questions';

const QuestionDetails = (props) => {
  const {
    authUser,
    question,
    answered,
    dispatch,
    totalUsers
  } = props;

  const [vote, setVote] = useState('');

  const handleSubmitVote = (e) => {
    e.preventDefault()
    dispatch(handleSaveQuestionVote(question.id, vote))
    setVote('')
  }

  return (
    <div>
      <h4>{question.name} { answered ? 'asked:' : 'asks...' }</h4>

      <img src={question.avatar} alt={`${question.avatar} avatar`} width={100} />

      { answered ? (
        <div>
          <p>Poll Results</p>
          <p>
            ({ question.optionOneVotes.includes(authUser) && <span>You answered this.</span> })
            {question.optionOneText}, {question.optionOneVotes.length} of {totalUsers}, {helpers.calcPercentage(question.optionOneVotes.length, totalUsers)}
          </p>
          
          <p>
            ({ question.optionTwoVotes.includes(authUser) && <span>You answered this.</span> })
            {question.optionTwoText}, {question.optionTwoVotes.length} of {totalUsers}, {helpers.calcPercentage(question.optionTwoVotes.length, totalUsers)}
          </p>
        </div>
      ) : (
        <div>
          <p>Would you rather?</p>
          <p onClick={() => setVote('optionOne')}>{question.optionOneText}</p>
          <p onClick={() => setVote('optionTwo')}>{question.optionTwoText}</p>
        </div>
      ) }

      { answered || (
        <div>
          <button onClick={handleSubmitVote}>Vote</button>
        </div>
      )}
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
    totalUsers: Object.keys(users).length,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetails));
