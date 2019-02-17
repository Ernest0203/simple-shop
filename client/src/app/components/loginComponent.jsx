import React, { Component } from 'react';
import Login from '../../components/login/Login.jsx';

class loginComponent extends Component {
  render() {
    const { popupIsOpen, popupType, registerUser, popupToggle } = this.props;

    return (
      <div>
        <Login 
          data={{ popupIsOpen, popupType }} 
          registerUser={registerUser} 
          popupToggle={popupToggle}
        />
      </div>
    )
  }
}

export default loginComponent;