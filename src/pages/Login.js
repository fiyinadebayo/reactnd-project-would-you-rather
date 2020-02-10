import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';

class Login extends Component {
  render() {
    return (
      <div>
        <h3>Would you rather?</h3>
        
        {
          this.props.loading && (
            <div>Initializing...</div>
          )
        }

        <div>
          Select a User to Login

          <ul>
            {this.props.usersId.map(id => (
               <li key={id} onClick={() => this.props.dispatch(setAuthUser(id))}>{id}</li>
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

export default connect(mapStateToProps)(Login);
