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

        {
          this.props.questionsId.map(id => (
            <p key={id}>{id}</p>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return {
    questionsId: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(Home);
