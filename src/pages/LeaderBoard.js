import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../components/UserCard';
import NavBar from '../components/NavBar';

class LeaderBoard extends Component {
  render() {
    return (
      <>
      <NavBar />

      <div className="wrapper leader-board">
        <h2>Leader Board</h2>

        {this.props.usersId.map(id => (
          <UserCard key={id} id={id} />
        ))}
      </div>
      </>
    )
  }
}

const calcScore = (users, id) => {
  return users[id].questions.length + Object.keys(users[id].answers).length
}

const sortUsers = (users) => {
  const keys = Object.keys(users)

  return keys.sort((a, b) => {
    return calcScore(users, b) - calcScore(users, a)
  })
}

const mapStateToProps = ({ users }) => {
  return {
    usersId: sortUsers(users)
  }
}

export default connect(mapStateToProps)(LeaderBoard);
