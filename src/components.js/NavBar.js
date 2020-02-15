import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/authUser';

const NavBar = ({ userData, dispatch }) => {
  return (
    <nav>
      <div>
        <p>Would You Rather?</p>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/leaderboard">Leader Board</Link></li>
          <li><Link to="/add">New Question</Link></li>
        </ul>

        <div>
          <div>
            Hi, {userData.name}
            <img src={userData.avatarURL} alt={`${userData.avatarURL} avatar`} width={40} />
          </div>

          <div>
            <button onClick={() => dispatch(logoutUser())}>Log Out</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ authUser, users }) => {
  return {
    userData: users[authUser]
  }
}

export default connect(mapStateToProps)(NavBar);
