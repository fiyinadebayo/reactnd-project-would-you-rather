import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../actions/authUser';
import Button from './Button';

const NavBar = ({ userData, dispatch }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <p>Would</p>
        <p>You</p>
        <p>Rather?</p>
      </div>

      <div className="links">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/leaderboard">Leader Board</NavLink></li>
          <li><NavLink to="/add">New Question</NavLink></li>
        </ul>
      </div>

      <div className="auth-user">
        <div>Hi, {userData.name}</div>
        <div><img src={userData.avatarURL} alt={`${userData.avatarURL} avatar`} width={40} /></div>

        <div>
          <Button
            id="logout-btn"
            size="sm"
            text="Log Out"
            onClick={() => dispatch(logoutUser())}
          />
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
