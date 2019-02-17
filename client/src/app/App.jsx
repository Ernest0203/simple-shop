import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './containers/loginContainer.js';
import Header from '../components/header/Header.jsx';
import Notification from './containers/notification.js';

import MainPage from '../pages/mainpage/mainPage.jsx';
import MainLayout from './MainLayout.jsx';

import 'normalize.css';
import './fonts/fonts.scss';
import styles from './styles.module.scss';

class App extends Component {
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
