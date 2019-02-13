import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/navbar/Navbar.jsx';
import Header from '../components/header/Header.jsx';

import MainPage from '../pages/mainpage/mainPage.jsx';
import MainLayout from './MainLayout.jsx';

import 'normalize.css';
import './fonts/fonts.scss';
import styles from './styles.module.scss';

import Login from './containers/loginContainer.js';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
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
