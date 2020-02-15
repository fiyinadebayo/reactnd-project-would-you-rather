import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';
import { withRouter } from 'react-router-dom';
import reactLogo from '../assets/images/react-logo.svg';
import reduxLogo from '../assets/images/redux-logo.svg';

class Login extends Component {
  render() {
    return (
      <div className="wrapper login">
        <div className="logo">
          <p>Would</p>
          <p>You</p>
          <p>Rather?</p>
        </div>
        <div className="logo-subtext">
          React Nanodegree Project
        </div>

        <div className="intro-images">
          <div className="intro-img">
            <img src={reactLogo} alt="React" />
          </div>
          <div className="intro-img redux">
            <img src={reduxLogo} alt="Redux" />
          </div>
        </div>
        
        {
          this.props.loading && (
            <div>Initializing...</div>
          )
        }

        <div>
          Select a User to Login

          <ul>
            {this.props.usersId.map(id => (
              <li key={id} onClick={() => {
                this.props.dispatch(setAuthUser(id))
                this.props.history.push('/')
               }}>
                 {id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users, loading }) => {
  return {
    loading,
    usersId: Object.keys(users)
  }
}

export default withRouter(connect(mapStateToProps)(Login));
