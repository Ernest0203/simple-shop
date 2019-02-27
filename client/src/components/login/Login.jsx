import React, { Component } from 'react';

import Popup from '../popup/Popup.jsx';
import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';

import styles from './styles.module.scss';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    const { popupToggle, registerUser, loginUser } = this.props;
    const { popupIsOpen, popupType } = this.props.data;

    const saveFieldData = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    const login = (e) => {
      e.preventDefault();
      loginUser(this.state);
    }

    const register = (e) => {
      e.preventDefault();
      registerUser(this.state);
    }

    let content;
    if (popupType === '') content = '';
    if (popupType === 'login') {
      content = (
        <form className={styles.LoginForm}>
          <h3 className={styles.title}>Login</h3>
          <Input name="login" type="text" placeholder="login" onChange={saveFieldData} />
          <br/>
          <Input name="password" type="password" placeholder="Password" onChange={saveFieldData} />
          <br/>
          <a href="" onClick={(e) => login(e)}><Button text="Login" display="block" /></a>
        </form>
      )
    } else if(popupType === 'register') {
      content = (
        <form className={styles.LoginForm}>
          <h3 className={styles.title}>Register</h3>
          <Input name="login" type="text" placeholder="login" onChange={saveFieldData} />
          <br/>
          <Input name="password" type="password" placeholder="Password" onChange={saveFieldData} />
          <br/>
          <Input name="password2" type="password" placeholder="Confirm Password" onChange={saveFieldData} />
          <br/>
          <a href="" onClick={(e) => register(e)}><Button text="Register" display="block" /></a>
        </form>
      )
    }   

    return (
      <Popup content={content} popupIsOpen={popupIsOpen} popupToggle={popupToggle} />
    );
  }
}

export default Login;