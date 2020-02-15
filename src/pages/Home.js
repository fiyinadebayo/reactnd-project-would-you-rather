import React, { useState } from 'react';
import { connect } from 'react-redux';
import QuestionCard from '../components/QuestionCard';
import helpers from '../utils/helpers';
import NavBar from '../components/NavBar';

const Home = ({ unansweredQuestionsId, answeredQuestionsId }) => {
  const [activeTab, setActiveTab] = useState(0)

  const onTabClick = (index) => {
    setActiveTab(index)
  }

  const isTabActive = (index) => {
    return activeTab === index ? 'tab active' : 'tab'
  }

  return (
    <>
    <NavBar />
    <div className="wrapper home">
      <div className="home-nav">
        <div className={isTabActive(0)} onClick={() => onTabClick(0)}>
          Unanswered Questions
          <span className="pill">{unansweredQuestionsId.length}</span>
        </div>

        <div className={isTabActive(1)} onClick={() => onTabClick(1)}>
          Answered Questions
          <span className="pill">{answeredQuestionsId.length}</span>
        </div>
      </div>

      <div className="home-content">
        { activeTab === 0 && (
          unansweredQuestionsId.length > 0 ? (
            unansweredQuestionsId.map(id => (
              <QuestionCard key={id} id={id} />
            ))
          ) : (
            <div className="wrapper-status">
              You're all caught up! No unanswered questions.
            </div>
          )
        ) }

        { activeTab === 1 && (
          answeredQuestionsId.length > 0 ? (
            answeredQuestionsId.map(id => (
              <QuestionCard key={id} id={id} />
            ))
          ) : (
            <div className="wrapper-status">
              No answered questions. Get into the game by voting!
            </div>
          )
        ) }
      </div>
    </div>
    </>
  )
}

const mapStateToProps = ({ authUser, questions }) => {
  const sortedQuestions = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    unansweredQuestionsId: sortedQuestions
      .filter(key => helpers.questionNotAnswered(questions[key], authUser)),

    answeredQuestionsId: sortedQuestions
      .filter(key => helpers.questionAnswered(questions[key], authUser)),
  }
}

export default connect(mapStateToProps)(Home);
