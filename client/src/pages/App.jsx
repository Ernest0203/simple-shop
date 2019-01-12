import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../store';

import Navbar from '../components/navbar/Navbar.jsx';

import '../fonts/fonts.scss';
import styles from './main.module.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <Navbar />
        </div>
      </Provider>
    );
  }
}

export default App;
