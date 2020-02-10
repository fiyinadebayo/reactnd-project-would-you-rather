import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetQuestions } from '../actions/questions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetQuestions())
  }
  render() {
    return (
      <div>
        Welcome home.

        <div>
          <h2>Unanswered Questions</h2>
          {this.props.unansweredQuestions.length}
        </div>

        <div>
          <h2>Answered Questions</h2>
          {this.props.answeredQuestions.length}
        </div>

        {
          this.props.questionsId.map(id => (
            <p key={id}>{id}</p>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ authUser, questions }) => {
  return {
    questionsId: Object.keys(questions),
    unansweredQuestions: Object.keys(questions).filter(key => !questions[key].optionOne.votes.includes(authUser) || !questions[key].optionTwo.votes.includes(authUser) ),
    answeredQuestions: Object.keys(questions).filter(key => questions[key].optionOne.votes.includes(authUser) || questions[key].optionTwo.votes.includes(authUser) ),
  }
}

export default connect(mapStateToProps)(Home);
