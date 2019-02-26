import React, { Component } from 'react';
import Login from '../../components/login/Login.jsx';

class loginComponent extends Component {
  render() {
    const { popupIsOpen, popupType, loginUser, registerUser, popupToggle } = this.props;

    return (
      <div>
        <Login 
          data={{ popupIsOpen, popupType }} 
          registerUser={registerUser}
          loginUser={loginUser} 
          popupToggle={popupToggle}
        />
      </div>
    )
  }
}

export default loginComponent;