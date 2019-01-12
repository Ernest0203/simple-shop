import React, { Component } from 'react';

import styles from './navbar.module.scss';

import cartIcon from '../../images/shopping-cart.svg';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__menuItem}>
            <a href="">Sign in!</a>
          </li>
          <li className={styles.navbar__menuItem}>
            <a href=""><cartIcon/></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;