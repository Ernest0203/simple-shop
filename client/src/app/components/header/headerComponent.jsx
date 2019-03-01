import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../../../components/navbar/Navbar.jsx'
import Search from '../../../components/search/Search.jsx';

import styles from './styles.module.scss';

class headerComponent extends Component {
  render() {
    const { popupToggle, logoutUser, search, user } = this.props;
    const data = { user }

    return (
      <div>
        <Navbar data={data} popupToggle={popupToggle} logoutUser={logoutUser}/>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <span>s</span>
              <span>h</span>
              <span>o</span>
              <span>p</span>
            </Link>
          </div>
          <div className={styles.searchContainer}>
            <Search search={search}/>
          </div>
        </div>
      </div>
    );
  }
}

export default headerComponent;