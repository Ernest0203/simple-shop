import React, { Component } from 'react';

import Search from '../search/Search.jsx';

import styles from './header.module.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="">
            <span>s</span>
            <span>h</span>
            <span>o</span>
            <span>p</span>
          </a>
        </div>
        <div className={styles.searchContainer}>
          <Search />
        </div>
      </div>
    );
  }
}

export default Header;