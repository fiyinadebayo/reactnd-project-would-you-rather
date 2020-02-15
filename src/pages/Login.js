import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';
import { withRouter } from 'react-router-dom';
import reactLogo from '../assets/images/react-logo.svg';
import reduxLogo from '../assets/images/redux-logo.svg';
import Select from 'react-select';
import Button from '../components/Button';

const Login = (props) => {
  const { userOptions, loadingBar } = props;
  const [selectedUser, setSelectedUser] = useState(null)

  const btnDisabled = () => {
    return selectedUser === null
  }

  const handleLogin = (event) => {
    const { dispatch, history, location } = props

    event.preventDefault()

    dispatch(setAuthUser(selectedUser.value));
    handleRedirect(history, location)
  }

  const handleRedirect = (history, location) => {
    if (location.state) {
      const { pathname } = location.state.from;
      history.push(pathname)
    } else {
      history.push('/')
    }
  }

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

      { loadingBar.default > 0 ? (
        <div>Loading users...</div>
      ): (
        <div>
          Please login to continue

          <form>
            <Select
              id="user-select"
              className="user-select"
              value={selectedUser}
              options={userOptions}
              onChange={setSelectedUser}
              placeholder="Select User..."
            />

            <Button
              text="Log in"
              type="primary"
              onClick={handleLogin}
              isDisabled={btnDisabled()}
            />
          </form>
        </div>
      ) }
    </div>
  )
}

const mapStateToProps = ({ users, loadingBar }) => {
  const filterAlpha = Object.keys(users).sort((a, b) => a.localeCompare(b))

  return {
    loadingBar,
    userOptions: filterAlpha.map(id => (
      {value: id, label: users[id].name}
    )),
  }
}

export default withRouter(connect(mapStateToProps)(Login));
