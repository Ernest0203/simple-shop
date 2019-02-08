import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Provider } from 'react-redux';
import store from '../store';

import Navbar from '../components/navbar/Navbar.jsx';
import Header from '../components/header/Header.jsx';

import MainPage from '../pages/mainpage/mainPage.jsx';
import Main from './Main.jsx';

import 'normalize.css';
import './fonts/fonts.scss';
import styles from './styles.module.scss';

import Login from '../components/login/Login.jsx';

class AppComponent extends Component {
  render() {
    const { popupIsOpen } = this.props;

    return (
      <div className={styles.container}>
        <Login popupIsOpen={popupIsOpen}/>
        <Header />
        <div className={styles.main}>
          <Main />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { popupIsOpen } = state.general;
  return { popupIsOpen };
}

const mapDispatchToProps = (dispatch) => ({

});

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);

export default App;
