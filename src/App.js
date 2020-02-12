import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { handleGetUsers } from './actions/users';

// pages
import Login from './pages/Login';
import Home from './pages/Home';
import LeaderBoard from './pages/LeaderBoard';
import NewQuestion from './pages/NewQuestion';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleGetUsers())
  }

  render() {
    const { authUser } = this.props;

    return (
      <div className="App">
        { authUser ? (
          <>
            <NewQuestion />
            <LeaderBoard />
            <Home />
          </>
          ) : <Login /> }
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
