import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../navbar/Navbar.jsx';
import Search from '../search/Search.jsx';

import styles from './styles.module.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;