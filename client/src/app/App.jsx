import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../store';

import Navbar from '../components/navbar/Navbar.jsx';
import Header from '../components/header/Header.jsx';

import MainPage from '../pages/mainpage/mainPage.jsx';
import Main from './Main.jsx';

import 'normalize.css';
import './fonts/fonts.scss';
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
