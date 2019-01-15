import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../store';

import Navbar from '../components/navbar/Navbar.jsx';
import Header from '../components/header/Header.jsx';

import MainPage from '../pages/main/mainPage.jsx'

import 'normalize.css';
import './fonts/fonts.scss';
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.container}>
          <Navbar />
          <Header />
          <div className={styles.main}>
            <h1 className={styles.categoryName}>Category Name</h1>
            <MainPage />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
