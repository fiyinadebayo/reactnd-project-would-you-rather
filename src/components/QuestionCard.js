import React, { Component } from 'react';
import { connect } from 'react-redux';
import helpers from '../utils/helpers';
import { Link } from 'react-router-dom';

const QuestionCard = ({ question }) => {
  if (question === null) {
    return (
      <div>This question does not exist.</div>
    )
  }

  return (
    <div className="question-card">
      <div className="user">
        <div className="image">
          <img src={question.avatar} alt={`${question.avatar} avatar`} width={100} />
        </div>

        <div>
          <h4 className="name">
            { question.name }
          </h4>
        </div>
      </div>

      <div className="summary">
        <h4>Would you rather...</h4>
        <p>{question.optionOneText}</p>
        <p>or</p>
        <p>...</p>

        <Link to={`questions/${question.id}`} className="link">
          View Poll
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = ({ questions, users }, { id }) => {
  return {
    id,
    question: helpers.formatQuestion(questions[id], users),
  }
}

export default connect(mapStateToProps)(QuestionCard);
