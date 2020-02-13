import React, { Component } from 'react';
import { connect } from 'react-redux';
import helpers from '../utils/helpers';
import { Link } from 'react-router-dom';

class QuestionCard extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return (
        <div>This question does not exist.</div>
      )
    }

    return (
      <div style={{border: '1px solid orange', margin: '10px auto'}}>
        <div>
          <img src={question.avatar} alt={`${question.avatar} avatar`} width={100} />
        </div>
        <div>
          <p>{ question.name }</p>
        </div>

        <div>
          <p>Would you rather...</p>
          <p>{question.optionOneText}</p>
          <p>{question.optionTwoText}</p>
        </div>

        <Link to={`questions/${question.id}`}>
          View Poll
        </Link>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users }, { id }) => {
  return {
    id,
    question: helpers.formatQuestion(questions[id], users),
  }
}

export default connect(mapStateToProps)(QuestionCard);
