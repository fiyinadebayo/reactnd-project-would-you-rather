import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
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

    const PrivateRoute = ({ children, ...rest }) => {
      return (
        <Route {...rest} render={({ location }) =>
            authUser ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    }

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
