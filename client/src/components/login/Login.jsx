import React, { Component } from 'react';

import Popup from '../popup/Popup.jsx';
import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';

import styles from './styles.module.scss';

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { popupIsOpen, popupType, popupToggle } = this.props.data;

    let content;
    if (popupType === 'login') {
      content = (
        <form className={styles.LoginForm}>
          <h3 className={styles.title}>Login</h3>
          <Input type="text" placeholder="Login" />
          <br/>
          <Input type="password" placeholder="Password" />
          <br/>
          <Button text="Login" display="block" />
        </form>
      )
    } else {
      content = (
        <form className={styles.LoginForm}>
          <h3 className={styles.title}>Register</h3>
          <Input type="text" placeholder="Login" />
          <br/>
          <Input type="password" placeholder="Password" />
          <br/>
          <Button text="Register" display="block" />
        </form>
      )
    }   

    return (
      <Popup content={content} popupIsOpen={popupIsOpen} popupToggle={popupToggle} />
    );
  }
}

export default Login;