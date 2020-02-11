import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetQuestions } from '../actions/questions';
import QuestionCard from '../components.js/QuestionCard';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetQuestions())
  }
  render() {
    return (
      <div>
        Welcome home.

        <div>
          <h2>Unanswered Questions ({this.props.unansweredQuestionsId.length})</h2>

          {
            this.props.unansweredQuestionsId.map(id => (
              <div key={id}>
                <QuestionCard id={id} />
              </div>
            ))
          }
        </div>

        <div>
          <h2>Answered Questions ({this.props.answeredQuestionsId.length})</h2>

          {
            this.props.answeredQuestionsId.map(id => (
              <div key={id}>
                <QuestionCard id={id} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authUser, questions }) => {
  const sortedQuestions = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    unansweredQuestionsId: sortedQuestions
      .filter(key => !questions[key].optionOne.votes.includes(authUser) && !questions[key].optionTwo.votes.includes(authUser)),

    answeredQuestionsId: sortedQuestions
      .filter(key => questions[key].optionOne.votes.includes(authUser) || questions[key].optionTwo.votes.includes(authUser)),
  }
}

export default connect(mapStateToProps)(Home);
