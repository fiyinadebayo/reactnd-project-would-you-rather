import React from 'react';
import { connect } from 'react-redux';
import helpers from '../utils/helpers';

const QuestionDetails = (props) => {
  const { authUser, question } = props;

  return (
    <div>
      Would you rather?
    </div>
  )
}

const mapStateToProps = ({ authUser, questions, users }, { id }) => {
  return {
    id: "8xf0y6ziyjabvozdd253nd",
    authUser,
    question: helpers.formatQuestion(questions[id], users),
  }
}

export default connect()(QuestionDetails);
