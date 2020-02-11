import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionCard extends Component {
  render() {
    const { question } = this.props;
    console.log('question: ', this.props)

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

        <button>View Poll</button>
      </div>
    )
  }
}

const formatQuestion = (question, users) => {
  const { id, author, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = users[author];

  return {
    id,
    name,
    timestamp,
    avatar: avatarURL,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
  }
}

const mapStateToProps = ({ questions, users }, { id }) => {
  return {
    id,
    question: formatQuestion(questions[id], users)
  }
}

export default connect(mapStateToProps)(QuestionCard);
