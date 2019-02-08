import React, { Component } from 'react';

import Popup from '../popup/Popup.jsx';
import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';

import styles from './styles.module.scss';

class Login extends Component {
  render() {
    const { popupIsOpen } = this.props;

    const content = (
      <form className={styles.LoginForm}>
        <Input type="text" placeholder="Login" />
        <br/>
        <Input type="password" placeholder="Password" />
        <br/>
        <Button text="Login" width='100%' display="block" />
      </form>
    )    

    return (
      <Popup content={content} popupIsOpen={popupIsOpen} />
    );
  }
}

export default Login;