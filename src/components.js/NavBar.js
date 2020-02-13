import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = ({ userData }) => {
  return (
    <nav>
      <div>
        <p>Would You Rather?</p>

        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/leaderboard">Leader Board</Link></li>
          <li><Link to="/add">New Question</Link></li>
        </ul>

        <div>
          <div>
            Hi, {userData.name}
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
