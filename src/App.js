import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { handleGetUsers } from './actions/users';

// pages
import Login from './pages/Login';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleGetUsers())
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default connect()(App);
