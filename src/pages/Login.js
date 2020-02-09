import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div>
        <h3>Would you rather?</h3>

        <div>
          Login

          <ul>
            {this.props.usersId.map(id => (
               <li key={id}>{id}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    usersId: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login);
