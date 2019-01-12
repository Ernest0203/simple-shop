import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../store';

import Navbar from '../components/navbar/Navbar.jsx';
import Header from '../components/header/Header.jsx';

import 'normalize.css';
import '../fonts/fonts.scss';
import styles from './main.module.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.container}>
          <Navbar />
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
