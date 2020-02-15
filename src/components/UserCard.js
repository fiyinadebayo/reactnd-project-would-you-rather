import React from 'react';
import { connect } from 'react-redux';

const UserCard = ({ user}) => {
  const total = (user) => {
    return user.questions.length + Object.keys(user.answers).length
  }

  return (
    <div className="user-card">
      <div className="user">
      <div>
          <h2 className="name">
            { user.name }
          </h2>
        </div>

        <div className="image">
          <img src={user.avatarURL} alt={`${user.name} avatar`} width={100} />
        </div>
      </div>

      <div className="summary">
        <p>Asked Questions: {user.questions.length}</p>
        <p>Answered Questions: {Object.keys(user.answers).length}</p>

        <p className="score">SCORE: <br /> <span>{total(user)}</span></p>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users }, { id }) => {
  return {
    id,
    user: users[id],
  }
}

export default connect(mapStateToProps)(UserCard);
