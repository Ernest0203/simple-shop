import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './containers/loginContainer.js';
import Header from './containers/headerContainer.js';
import Notification from './containers/notification.js';

import MainLayout from './MainLayout.jsx';

import 'normalize.css';
import './fonts/fonts.scss';
import styles from './styles.module.scss';

import { isLoggedIn } from './actions/actions.js';

class App extends Component {
  componentDidMount() {
    isLoggedIn();
  }

  render() {
    return (
      <div className={styles.container}>
        <Notification />
        <Login />
        <Header />
        <div className={styles.main}>
          <MainLayout />
        </div>
      </div>
    );
  }
}

export default App;
