import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../components.js/UserCard';

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <h3>Leader Board</h3>

        <div>
          {this.props.usersId.map(id => (
            <UserCard key={id} id={id} />
          ))}
        </div>
      </div>
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
