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
import { handleInitialData } from './actions/common';
import LoadingBar from 'react-redux-loading-bar';

// pages
import Login from './pages/Login';
import Home from './pages/Home';
import LeaderBoard from './pages/LeaderBoard';
import NewQuestion from './pages/NewQuestion';
import QuestionDetails from './pages/QuestionDetails';
import NotFound from './pages/NotFound';

class App extends Component {
  componentDidMount () {
    const { authUser, dispatch } = this.props;

    if (authUser === null) {
      dispatch(handleInitialData())
    }
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
                  pathname: "/login",
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
        <>
        <LoadingBar />

        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>

            <PrivateRoute path="/add">
              <NewQuestion />
            </PrivateRoute>

            <PrivateRoute path="/questions/:question_id">
              <QuestionDetails />
            </PrivateRoute>

            <PrivateRoute path="/leaderboard">
              <LeaderBoard />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        </>
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
