import React, { Component } from 'react';

import styles from './navbar.module.scss';

import cartIcon from '../../images/shopping-cart.png';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="">Sign in!</a>
          </li>
          <li className={styles.menuItem}>
            <a href=""><img src={cartIcon} alt=""/></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;