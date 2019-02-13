import React, { Component } from 'react';
import Login from '../../components/login/Login.jsx';

class loginComponent extends Component {
  render() {
    return (
      <div>
        <Login data={this.props}/>
      </div>
    )
  }
}

export default loginComponent;