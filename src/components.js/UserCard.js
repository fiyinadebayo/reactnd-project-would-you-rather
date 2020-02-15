import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserCard extends Component {
  render() {
    const { user } = this.props;

    return (
      <div style={{border: '1px solid blue', margin: '20px auto'}}>
        <div>
          <img src={user.avatarURL} alt={`${user.avatarURL} avatar`} width={100} />
        </div>
        <div>
          <p>{ user.name }</p>
        </div>

        <div>
          <p>Questions asked: {user.questions.length}</p>
          <p>Questions answered: {Object.keys(user.answers).length}</p>
          <p>SCORE: {total(user)}</p>
        </div>
      </div>
    )
  }
}

const total = (user) => {
  return user.questions.length + Object.keys(user.answers).length
}

const mapStateToProps = ({ users }, { id }) => {
  return {
    id,
    user: users[id],
  }
}

export default connect(mapStateToProps)(UserCard);
